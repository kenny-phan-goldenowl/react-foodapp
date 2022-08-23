import { Link, useNavigate } from 'react-router-dom';

import { logout } from 'services/firebase';

import './style.scss';

function Header({ setCart }) {
  const navigate = useNavigate();

  return (
    <div className='header'>
      <div>
        <p onClick={() => navigate('/')} className='logo'>
					TBayEAT
        </p>
      </div>
      <div className='header__nav'>
        <Link to='/landing'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Menu</Link>
        <Link to='/'>Contact</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/signIn' onClick={logout}>
					Logout
        </Link>
      </div>
      <div className='header__icon'>
        <i className='search bx bx-search'></i>
        <i onClick={() => setCart(true)} className='bx bx-shopping-bag'></i>
      </div>
    </div>
  );
}

export default Header;
