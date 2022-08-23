import { Link, useNavigate } from 'react-router-dom';

import { logout } from 'services/firebase';

import './style.scss';

function Footer() {
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
          <Link to='/'>Menu</Link>
          <Link to='/'>Contact</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/signIn' onClick={logout}>
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
