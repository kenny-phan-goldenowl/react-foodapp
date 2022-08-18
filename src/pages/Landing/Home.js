import { auth, db, logout } from 'services/firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import './style.scss';
import Dish from 'components/Dishes/Dish';
import CartItem from 'components/CartItem/CartItem';
import {
  dish1,
  dish2,
  dish3,
  dish4,
  dish5,
  dish6,
  dish7,
  dish8,
  background,
} from '../../assets/index';

function Home() {
  const [user, loading] = useAuthState(auth); // get userCredential
  const [name, setName] = useState(''); // userName
  const [cart, setCart] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    fetchUserName();
  }, [user, loading]);

  console.log(name);
  console.log(logout);

  return (
    <div className='home'>
      {/* Home top */}
      <div className='home__top'>
        <div className='home__top-nav'>
          <div className='home__top-nav-logo' onClick={() => navigate('/')}>
            {' '}
						TBayEAT{' '}
          </div>
          <div className='home__top-nav-option'>
            <Link className='item' to='/'>
							Home
            </Link>
            <Link className='item' to='/'>
							About
            </Link>
            <Link className='item' to='/'>
							Menu
            </Link>
            <Link className='item' to='/profile'>
							Profile
            </Link>
            <Link style={{ cursor: 'pointer' }} className='item' to='/'>
							Contact
            </Link>
            <Link style={{ cursor: 'pointer' }} className='item' to='/signIn'>
							Login
            </Link>
          </div>
          <div className='home__top-nav-icon'>
            <p style={{ color: 'white', fontSize: '20px', marginRight: 50 }}>
							Hello {name}
            </p>
            <i className='bx bx-search'></i>
            <i onClick={() => setCart(true)} className='bx bx-shopping-bag'></i>
          </div>
        </div>
        <div className='home__top-menu'>
          <div className='home__top-menu-left'>
            <div>
              <p>
								Authentic local <br />
								food in Tbay
              </p>
              <p>
								TbayEAT is a courier serivce in which authentic home cook <br />
								food is delivered to a customer
              </p>
            </div>
            <div className='home__top-menu-left-search'>
              <input type='text' placeholder='Search food you love' />
              <button>Search</button>
            </div>
          </div>
          <div className='home__top-menu-right'>
            <img src={background} alt='dude cooking' />
          </div>
        </div>
      </div>
      {/* Home middle */}
      <div className='home__middle'>
        <div className='home__middle-trending'>
          <p>Trending today</p>
          <div>
            <button>All</button>
            <button>Offers</button>
            <button>Free delivery</button>
            <button>New</button>
            <button>Coming</button>
          </div>
        </div>
        <div className='home__middle-filters'>
          <select name='dishes' id='dishes'>
            <option value='' disabled selected hidden>
							Filters
            </option>
            <option value='volvo'>Pizza</option>
            <option value='saab'>Chicken</option>
            <option value='mercedes'>Rice</option>
            <option value='audi'>Drink</option>
          </select>
          <div className='home__middle-filters-dishes'>
            <Dish
              img={dish1}
              name='Home made pizza'
              price='19'
              discount='50'
              rating='4.7'
              duration='50'
            />
            <Dish
              img={dish2}
              name='Home made pizza'
              price='19'
              rating='4.7'
              duration='50'
            />
            <Dish
              img={dish3}
              name='Home made pizza'
              price='19'
              discount='50'
              rating='4.7'
              duration='50'
            />
            <Dish
              img={dish4}
              name='Home made pizza'
              price='19'
              rating='4.7'
              duration='50'
            />
            <Dish
              img={dish5}
              name='Home made pizza'
              price='19'
              discount='50'
              rating='4.7'
              duration='50'
            />
            <Dish
              img={dish6}
              name='Home made pizza'
              price='19'
              discount='50'
              rating='4.7'
              duration='50'
            />
            <Dish
              img={dish7}
              name='Home made pizza'
              price='19'
              discount='50'
              rating='4.7'
              duration='50'
            />
            <Dish
              img={dish8}
              name='Home made pizza'
              price='19'
              discount='50'
              rating='4.7'
              duration='50'
            />
          </div>
        </div>
        <div className='home__middle-more'>
          <button>+ Load more...</button>
        </div>
      </div>
      {/* Home bottom */}
      <div className='home__bottom'>
        <div className='home__bottom-nav'>
          <div className='home__bottom-nav-logo' onClick={() => navigate('/')}>
            {' '}
						TBayEAT{' '}
          </div>
          <div className='home__bottom-nav-option'>
            <Link className='item' to='/'>
							Home
            </Link>
            <Link className='item' to='/'>
							About
            </Link>
            <Link style={{ cursor: 'pointer' }} className='item' to='/'>
							Contact
            </Link>
            <Link style={{ cursor: 'pointer' }} className='item' to='/signIn'>
							Login
            </Link>
          </div>
          <div className='home__bottom-nav-icon'>
            <i className='bx bxl-facebook-square'></i>
            <i className='bx bxl-instagram'></i>
          </div>
        </div>
        <div className='home__bottom-line'></div>
        <div className='home__bottom-copyright'>Copyright @2022 TBayEAT</div>
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
            <CartItem />
            <CartItem
              img={dish2}
              name='Chicken'
              userName='Kenny'
              price='30'
              qty='10'
            />
            <CartItem img={dish3} name='Meat' price='20' qty='23' />
            <CartItem img={dish8} name='Sauce' price='50' qty='4' />
          </div>
          <div style={{ position: 'relative', bottom: '40px' }}>
            <div className='yourcart__popup-sub'>
              <p>Subtotal</p>
              <p>$99.8</p>
            </div>
            <div className='yourcart__popup-ship'>
              <p>Shipping fee</p>
              <p>$20</p>
            </div>
            <div className='yourcart__popup-total'>
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
  );
}

export default Home;
