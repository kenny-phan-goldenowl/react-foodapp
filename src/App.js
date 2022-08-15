import { Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignIn/SignInPage";
import SignUpPage from "./components/SignUp/SignUpPage";
import ResetPassword from "./components/SignIn/ResetPassword";
//import Home from "./components/Home/Home";
import PersonalInfo from "./components/Profile/PersonalInfo";
import OrderHistory from "./components/Profile/OrderHistory";

function App() {
	return (
		<Routes>
			<Route path='/' element={<PersonalInfo />} />
			<Route path='/signUp' element={<SignUpPage />} />
			<Route path='/resetPassword' element={<ResetPassword />} />
			<Route path='/signIn' element={<SignInPage />} />
			<Route path='/personalInfo' element={<PersonalInfo />} />
			<Route path='/orderHistory' element={<OrderHistory />} />
		</Routes>
	);
}

export default App;
