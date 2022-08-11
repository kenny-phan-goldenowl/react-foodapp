import { Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignIn/SignInPage";
import SignUpPage from "./components/SignUp/SignUpPage";
import ResetPassword from "./components/SignIn/ResetPassword";
import Home from "./components/Home/Home";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/signUp' element={<SignUpPage />} />
			<Route path='/resetPassword' element={<ResetPassword />} />
			<Route path='/signIn' element={<SignInPage />} />
		</Routes>
	);
}

export default App;
