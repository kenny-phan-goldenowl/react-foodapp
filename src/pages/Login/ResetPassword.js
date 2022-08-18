import AuthNav from 'components/Navbar/Nav';
import './style.scss';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, sendPasswordReset } from 'services/firebase';

function ResetPassword() {
  const [email, setMail] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate('/');
  }, [user, loading]);

  return (
    <div className='container'>
      <AuthNav />
      <div className='reset'>
        <h1 className='reset__item'>Reset Password</h1>
        <input
          type='text'
          placeholder='Recover Email'
          value={email}
          onChange={(e) => setMail(e.target.value)}
        />
        <button onClick={() => sendPasswordReset(email)}>Confirm</button>
        <div>
					Dont have an account? <Link to='/signUp'>Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
