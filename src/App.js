import { Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignIn/SignInPage";
import SignUpPage from "./components/SignUp/SignUpPage";
import ResetPassword from "./components/SignIn/ResetPassword";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<Routes>
			<Route path="/" element={<SignInPage />} />
			<Route path="/signUp" element={<SignUpPage />} />
			<Route path="/resetPassword" element={<ResetPassword/>}/>
			<Route path="/dashBoard" element={<Dashboard/>}/>
		</Routes>
	);
}


export default App;
