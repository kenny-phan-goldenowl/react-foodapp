import NavBar from 'components/Navbar/NavBar';
import './style.scss';
import { useState } from 'react';
import Bill from 'components/Bill/Bill';
import { truck, avatar } from 'assets/index';

function Profile() {
  const [toggle, setToggle] = useState(true);
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
          <div>
            <Bill />
            <Bill />
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
