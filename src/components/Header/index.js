import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from 'services/firebase';
import { removeAllItem } from 'global/redux/actions/cart';
import { choosenDish } from 'global/redux/reducers/selector';

import './style.scss';

function Header({ setCart, userName }) {
  const cartItems = useSelector(choosenDish);
  const dispatch = useDispatch();
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
        <Link style={{ display: userName ? '' : 'none' }} to='/profile'>
					Profile
        </Link>
        <Link style={{ display: userName ? 'none' : '' }} to='signIn'>
					Login
        </Link>
        <Link
          style={{ display: userName ? '' : 'none' }}
          to='/signIn'
          onClick={() => {
            logout();
            dispatch(removeAllItem(cartItems.length));
          }}
        >
					Logout
        </Link>
      </div>
      <div className='header__icon'>
        <div>
          <i className='search bx bx-search'></i>
          <i onClick={() => setCart(true)} className='bx bx-shopping-bag'></i>
        </div>
        <p style={{ display: userName ? '' : 'none' }}> Hello, {userName} </p>
      </div>
    </div>
  );
}

export default Header;
