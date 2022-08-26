import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDocs, collection, addDoc, query, where } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import Footer from 'components/Footer';
import CartItem from 'components/CartItem/CartItem';
import { background, visa } from 'assets';
import { choosenDish } from 'global/redux/reducers/selector';
import { auth, db } from 'services/firebase';
import { removeItem, removeAllItem } from 'global/redux/actions/cart';
import Header from 'components/Header';

import './style.scss';

function Payment() {
  const [toggle, setToggle] = useState(false);
  const [current, setCurrent] = useState(0);
  const [check, setCheck] = useState(1);
  const [dish, setDish] = useState([]);
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [user, loading] = useAuthState(auth);
  const cartItems = useSelector(choosenDish);
  const dishRef = collection(db, 'dishes');
  const orderRef = collection(db, 'orders');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const res = dish.filter((item) => cartItems.includes(item.id));
  const choosenItem = [...res];
  res.forEach((item) => {
    choosenItem[cartItems.indexOf(item.id)] = item;
  });

  const onRemove = (data) => {
    dispatch(removeItem(data));
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    fetchUserId();
  }, [user, loading]);

  const fetchUserId = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setUserId(data.uid);
      setUserName(data.name);
    } catch (error) {
      console.error(error);
      alert('Error while fetching data');
    }
  };

  const addOrder = (id, uid, dishes) => {
    addDoc(orderRef, {
      id    : id,
      uid   : uid,
      dishes: dishes,
    }).then(() => console.log('Order added'));
  };

  const onConfirm = () => {
    if (cartItems.length === 0) {
      alert('Orders cant be empty');
      setToggle(false);
      setCurrent(3);
    }
    setCurrent((prev) => prev + 1);
    if (current === 3) {
      if (cartItems) {
        dispatch(removeAllItem(cartItems.length));
        setToggle(false);
        addOrder(
          Math.floor(userId.length * new Date().getSeconds),
          userId,
          cartItems
        );
        alert('Payment success');
      }
    }
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
  console.log('persist check', cartItems);
  console.log('picked item: ', choosenItem);

  return (
    <div>
      <Header userName={userName} />
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
      <div className='payment'>
        <div className='payment__current-page'>
          <p>Home / Trending /&nbsp; </p>
          <p style={{ color: 'black' }}>Famous Tandoor</p>
        </div>
        <div className='payment__details'>
          <p>PRODUCT</p>
          <p className='payment__details-price'>PRICE</p>
          <p className='payment__details-qty'>QTY</p>
          <p className='payment__details-unit'>
						UNIT <br /> PRICE
          </p>
        </div>
        <div className='payment__items'>
          {choosenItem.map((item, index) => (
            <CartItem
              key={item.id}
              img={item.img_url}
              name={item.name}
              price={item.price}
              onRemove={onRemove}
              id={index}
            />
          ))}
        </div>
        <div className='payment__line'></div>
        <div className='payment__total'>
          <div className='payment__total-voucher'>
            <input type='text' placeholder='Voucher code' />
            <button>Redeem</button>
          </div>
          <div className='payment__total-result'>
            <div className='payment__total-result-sub'>
              <p>Subtotal</p>
              <p>$998</p>
            </div>
            <div className='payment__total-result-ship'>
              <p>Shipping fee</p>
              <p>$20</p>
            </div>
            <div className='payment__total-result-coupon'>
              <p>Coupon</p>
              <p>No</p>
            </div>
            <div className='payment__total-result-total'>
              <p>TOTAL</p>
              <p>$118</p>
            </div>
            <button
              onClick={() => {
                setToggle(true);
                setCurrent(1);
              }}
              className='payment__total-result-btn1'
            >
							Pay your Portion: $20
            </button>
            <button
              onClick={() => {
                setToggle(true);
                setCurrent(1);
              }}
              className='payment__total-result-btn2'
            >
							Pay All: $118
            </button>
          </div>
        </div>
      </div>
      <div
        className='payment__charge'
        style={{ visibility: toggle ? 'visible' : 'hidden' }}
      >
        <div className='payment__charge-form'>
          <div className='payment__charge-form-icon'>
            <i
              onClick={() => {
                setCurrent((prev) => prev - 1);
                if (current === 1) setToggle(false);
              }}
              className='bx bx-left-arrow-alt'
            ></i>
            <i
              onClick={() => {
                setToggle(false);
                setCurrent(0);
              }}
              className='bx bx-x'
            ></i>
          </div>
          <h1 className='payment__charge-form-title'>Make Payment</h1>
          <div className='payment__charge-form-current'>
            <div className='payment__charge-form-current-page'>
              <p
                className='page'
                style={{ background: current >= 1 ? '#1AC073' : '#DFDEDE' }}
              >
								1
              </p>
              <div className='line'></div>
              <p
                style={{ background: current >= 2 ? '#1AC073' : '#DFDEDE' }}
                className='page'
              >
								2
              </p>
              <div className='line'></div>
              <p
                style={{ background: current >= 3 ? '#1AC073' : '#DFDEDE' }}
                className='page'
              >
								3
              </p>
            </div>
          </div>
          {/*--------------------------Page 1--------------------------*/}
          <div
            style={{ display: current === 1 ? '' : 'none' }}
            className='payment__charge-form-info'
          >
            <div className='payment__charge-form-info-left'>
              <input type='text' placeholder='First Name' />
              <input type='text' placeholder='Email Address' />
              <h2>Select Method Of Payment</h2>
              <div>
                <div
                  style={{ backgroundColor: check === 1 ? '#F0FAF7' : 'white' }}
                  className='item'
                >
                  <label>
                    {' '}
                    <span>
                      <i className='bx bxs-credit-card'></i>
                    </span>{' '}
										Credit Card Or Debit
                  </label>
                  <input
                    checked={check === 1}
                    onChange={() => setCheck(1)}
                    type='checkbox'
                  />
                </div>
                <div
                  style={{ backgroundColor: check === 2 ? '#F0FAF7' : 'white' }}
                  className='item'
                >
                  <label>
                    {' '}
                    <span>
                      <i className='bx bxl-paypal'></i>
                    </span>{' '}
										Paypal
                  </label>
                  <input
                    checked={check === 2}
                    onChange={() => setCheck(2)}
                    type='checkbox'
                  />
                </div>
                <div
                  style={{ backgroundColor: check === 3 ? '#F0FAF7' : 'white' }}
                  className='item'
                >
                  <label>
                    {' '}
                    <span>
                      <i className='bx bxs-bank'></i>
                    </span>{' '}
										Bank Transfer
                  </label>
                  <input
                    checked={check === 3}
                    onChange={() => setCheck(3)}
                    type='checkbox'
                  />
                </div>
              </div>
            </div>
            <div className='payment__charge-form-info-right'>
              <input type='text' placeholder='Last Name' />
              <input
                className='payment__charge-form-info-right-address'
                type='text'
                placeholder='Address for Delivery'
              />
              <input
                className='payment__charge-form-info-right-phone'
                type='text'
                placeholder='Mobile Phone'
              />
            </div>
          </div>
          {/*--------------------------Page 2--------------------------*/}
          <div
            style={{ display: current === 2 ? '' : 'none' }}
            className='payment__charge-form-visa'
          >
            <div className='payment__charge-form-visa-img'>
              <img src={visa} alt='visa img' />
            </div>
            <form className='payment__charge-form-visa-info'>
              <input type='text' placeholder='Card Number' />
              <div className='expire'>
                <input type='text' placeholder='Expiry' />
                <input type='text' placeholder='CVV' />
              </div>
              <input type='text' placeholder='Holder Number' />
              <div className='confirm'>
                <input type='checkbox' />
                <p>Save this credit card</p>
              </div>
            </form>
          </div>
          {/*--------------------------Page 3--------------------------*/}
          <div
            style={{ display: current === 3 ? '' : 'none' }}
            className='payment__charge-form-success'
          >
            <div>
              <i className='bx bx-check'></i>
            </div>
            <p>Success</p>
          </div>
          <div className='payment__charge-form-info-button'>
            <button onClick={onConfirm}>Confirm</button>
          </div>
        </div>
      </div>
      <div>
        <Footer userName={userName} />
      </div>
    </div>
  );
}
export default Payment;
