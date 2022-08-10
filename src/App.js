import { Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignIn/SignInPage";
import SignUpPage from "./components/SignUp/SignUpPage";

function App() {
	return (
		<Routes>
			<Route path='/' element={<SignInPage />} />
			<Route path='/signUp' element={<SignUpPage />} />
		</Routes>
	);
}

export default App;
