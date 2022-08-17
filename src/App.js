import { Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignIn/SignInPage";
import SignUpPage from "./components/SignUp/SignUpPage";
import ResetPassword from "./components/SignIn/ResetPassword";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/signUp' element={<SignUpPage />} />
			<Route path='/resetPassword' element={<ResetPassword />} />
			<Route path='/signIn' element={<SignInPage />} />
			<Route path='/profile' element={<Profile />} />
		</Routes>
	);
}

export default App;
