import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from 'services/firebase';
import { removeAllItem } from 'global/redux/actions/cart';
import { choosenDish } from 'global/redux/reducers/selector';

import './style.scss';

function Footer({ userName }) {
  const cartItems = useSelector(choosenDish);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='footer'>
      <div className='footer__top'>
        <div>
          <p onClick={() => navigate('/')} className='logo'>
						TBayEAT
          </p>
        </div>
        <div className='footer__top-nav'>
          <Link to='/landing'>Home</Link>
          <Link to='/'>About</Link>
          <Link style={{ display: userName ? '' : 'none' }} to='/'>
						Menu
          </Link>
          <Link to='/'>Contact</Link>
          <Link style={{ display: userName ? '' : 'none' }} to='/profile'>
						Profile
          </Link>
          <Link style={{ display: userName ? 'none' : '' }} to='/signIn'>
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
        <div className='footer__top-icon'>
          <i className='fb bx bxl-facebook-square'></i>
          <i className='bx bxl-instagram'></i>
        </div>
      </div>
      <div className='footer__bottom'>
        <div className='footer__bottom-line'></div>
        <p className='footer__bottom-copyright'>Copyright @2022 TBayEAT</p>
      </div>
    </div>
  );
}

export default Footer;
