import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import SignInPage from 'pages/Login/index';
import SignUpPage from 'pages/Sign Up/index';
import ResetPassword from 'pages/Login/index';
import Profile from 'pages/Profile/index';
import Payment from 'pages/Payment/index';
import Home from 'pages/Landing';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
