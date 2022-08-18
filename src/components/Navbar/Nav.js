import { useNavigate } from 'react-router-dom';

import './style.scss';

function AuthNav({ bot }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div style={{ bottom: bot ? 0 : null }} className='navbar'>
      <p onClick={handleClick} className='navbar__logo'>
				TBayEAT
      </p>
    </div>
  );
}

export default AuthNav;
