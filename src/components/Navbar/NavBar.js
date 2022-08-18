import { useNavigate, Link } from 'react-router-dom';

import './style.scss';

function NavBar({ icon1, icon2 }) {
  const navigate = useNavigate();

  return (
    <div className='nav'>
      <div className='nav__logo' onClick={() => navigate('/')}>
				TBayEAT
      </div>
      <div className='nav__option'>
        <Link className='item' to='/'>
					Home
        </Link>
        <Link className='item' to='/'>
					About
        </Link>
        <Link className='item' to='/'>
					Menu
        </Link>
        <Link style={{ cursor: 'pointer' }} className='item' to='/'>
					Contact
        </Link>
        <Link style={{ cursor: 'pointer' }} className='item' to='/profile'>
					Profile
        </Link>
        <Link style={{ cursor: 'pointer' }} className='item' to='/signIn'>
					Logout
        </Link>
      </div>
      <div className='nav__icon'>
        <i className={icon1}></i>
        <i className={icon2}></i>
      </div>
    </div>
  );
}

export default NavBar;
