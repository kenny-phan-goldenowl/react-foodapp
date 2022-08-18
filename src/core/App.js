import { Routes, Route } from 'react-router-dom';
import SignInPage from 'pages/Login/SignInPage';
import SignUpPage from 'pages/Signin/SignUpPage';
import ResetPassword from 'pages/Login/ResetPassword';
import Profile from 'pages/Profile/Profile';
import Payment from 'pages/Payment/Payment';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from 'pages/Landing/Home';

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
      </Routes>
    </Router>
  );
}

export default App;
