import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'components/Header';
import Footer from 'components/Footer';
import CartItem from 'components/CartItem/CartItem';
import Dish from 'components/Dishes/Dish';
import { auth, db } from 'services/firebase';
import { background } from 'assets';
import { choosenDish } from 'global/redux/reducers/selector';
import { addItem, removeItem } from 'global/redux/actions/cart';

import './style.scss';

function Home() {
  const dispatch = useDispatch();
  const cartItems = useSelector(choosenDish);
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [dish, setDish] = useState([]);
  const [name, setName] = useState('');
  const [cart, setCart] = useState(false);
  const dishRef = collection(db, 'dishes');

  const res = dish.filter((item) => cartItems.includes(item.id));
  const choosenItem = [...res];
  res.forEach((item) => {
    choosenItem[cartItems.indexOf(item.id)] = item;
  });

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (error) {
      console.error(error);
      alert('Error while fetching data');
    }
  };

  const onAdd = (data) => {
    dispatch(addItem(data));
  };

  const onRemove = (data) => {
    dispatch(removeItem(data));
  };

  // get dish list
  useEffect(() => {
    getDocs(dishRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setDish((prev) => [...prev, doc.data()]);
        });
      })
      .catch((err) => console.error(err.message));
  }, []);

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    fetchUserName();
  }, [user, loading]);

  console.log('item choosen: ', cartItems);
  console.log(choosenItem);
  console.log(name);
  console.log(user);

  return (
    <div>
      <Header setCart={setCart} userName={name} />
      <div className='landing'>
        <div className='landing__top'>
          <div className='landing__top-title'>
            <div>
              <p className='title'>
								Authentic local <br />
								food in Tbay
              </p>
              <p className='description'>
								TbayEAT is a courier serivce in which authentic home cook <br />
								food is delivered to a customer
              </p>
            </div>
            <div className='landing__top-title-search'>
              <input type='text' placeholder='Search food you love' />
              <button>Search</button>
            </div>
          </div>
          <div className='landing__top-img'>
            <img src={background} alt='background img' />
          </div>
        </div>
        <div className='landing__middle'>
          <div className='landing__middle-trending'>
            <p>Trending today</p>
            <div>
              <button>All</button>
              <button>Offers</button>
              <button>Free delivery</button>
              <button>New</button>
              <button>Coming</button>
            </div>
          </div>
          <div className='landing__middle-filters'>
            <select name='dishes' id='dishes'>
              <option value='' disabled hidden>
								Filters
              </option>
              <option value='pizza'>Pizza</option>
              <option value='chicken'>Chicken</option>
              <option value='rice'>Rice</option>
              <option value='drink'>Drink</option>
            </select>
            <div className='landing__middle-filters-dishes'>
              {dish.map((item) => (
                <Dish
                  key={item.id}
                  name={item.name}
                  img={item.img_url}
                  price={item.price}
                  rating={item.rating}
                  duration={item.time}
                  discount={item.discount}
                  dishId={item.id}
                  dishIdList={dish.map((item) => item.id)}
                  onAdd={onAdd}
                />
              ))}
            </div>
          </div>
          <div className='landing__middle-more'>
            <button>+ Load more...</button>
          </div>
        </div>
        <div
          style={{ visibility: cart ? 'visible' : 'hidden' }}
          className='yourcart'
        >
          <div className='yourcart__popup'>
            <i onClick={() => setCart(false)} className='bx bx-x'></i>
            <h3 className='yourcart__popup-title'>Your Cart</h3>
            <div className='yourcart__popup-header'>
              <p>PRODUCT</p>
              <p className='yourcart__popup-header-price'>PRICE</p>
              <p className='yourcart__popup-header-qty'>QTY</p>
              <p>
								UNIT <br /> PRICE
              </p>
            </div>
            <div className='yourcart__popup-item'>
              {choosenItem.map((item, index) => (
                <CartItem
                  key={item.id}
                  img={item.img_url}
                  name={item.name}
                  price={item.price}
                  userName={name}
                  onRemove={onRemove}
                  id={index}
                />
              ))}
            </div>
            <div className='yourcart__popup-result'>
              <div className='yourcart__popup-result-sub'>
                <p>Subtotal</p>
                <p>$99.8</p>
              </div>
              <div className='yourcart__popup-result-ship'>
                <p>Shipping fee</p>
                <p>$20</p>
              </div>
              <div className='yourcart__popup-result-total'>
                <p>TOTAL</p>
                <p>$118</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/payment')}
              className='yourcart__popup-button'
            >
							Go to Payment
            </button>
          </div>
        </div>
      </div>
      <Footer userName={name} />
    </div>
  );
}

export default Home;
