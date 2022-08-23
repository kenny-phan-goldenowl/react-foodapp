import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import Bill from 'components/Bill/Bill';
import NavBar from 'components/Navbar/NavBar';
import { truck, avatar } from 'assets';
import { db } from 'services/firebase';

import './style.scss';

function Profile() {
  const orderRef = collection(db, 'orders');
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    getDocs(orderRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        setData((prev) => [...prev, doc.data()]);
      });
    });
  }, []);

  return (
    <div className='profile'>
      <NavBar icon1='bx bx-search' icon2='bx bx-shopping-bag' />
      <div className='profile__middle'>
        <div className='profile__middle-img'>
          <img className='img1' src={truck} alt='background img' />
          <img className='img2' src={avatar} alt='avatar img' />
        </div>
        <div className='profile__middle-switch'>
          <button onClick={() => setToggle(true)} className='btn1'>
            {' '}
						Profile{' '}
          </button>
          <button onClick={() => setToggle(false)} className='btn2'>
            {' '}
						Order History{' '}
          </button>
        </div>
        <div
          style={{ visibility: toggle ? 'visible' : 'hidden' }}
          className='profile__middle-input'
        >
          <h1>Personal Information</h1>
          <input type='text' placeholder='Username' />
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Phone Number' />
          <input type='text' placeholder='Date Of Birth' />
          <button>Edit</button>
        </div>
        <div
          style={{ visibility: toggle ? 'hidden' : 'visible' }}
          className='orderHistory'
        >
          <h1>Order History</h1>
          <div style={{ overFlow: 'auto' }}>
            {data.map((item) => (
              <Bill
                key={item.id}
                name={item.name}
                price={item.price}
                details={item.description}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <NavBar icon1='bx bxl-facebook-square' icon2='bx bxl-instagram' />
        <div className='profile__copyright'>
          <div></div>
          <p>Copyright @2022 TBayEAT</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
