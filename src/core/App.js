import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import SignInPage from 'pages/Login/index';
import SignUpPage from 'pages/Sign Up/index';
import ResetPassword from 'pages/Login/index';
import Profile from 'pages/Profile/index';
import Payment from 'pages/Payment/index';
import Home from 'pages/Landing';
//import Add from './addData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<SignUpPage />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
        <Route path='/signIn' element={<SignInPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/payment' element={<Payment />} />
        <Route exact path='/landing' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
