import "./SignInForm.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInMail } from "../../firebase";

function SignInForm() {

	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");	
	const [user, loading, error] = useAuthState(auth);

	useEffect(() => {
		if (loading) {
			// maybe trigger a loading screen
			return;
		}
		if (user) navigate("/dashBoard");
	}, [user, loading]);

	return (
		<form className='signin__form'>
			<div className='signin'>
				<h1 className='signin__title'>Sign in</h1>
				<h4 className='signin__subtitle'>
					Sign in and start your food adventure!
				</h4>
				<input 
					type='text' 
					placeholder='Email' 
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input 
					type='password' 
					placeholder='Password' 
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div className='signin__verify'>
					<div>
						<input style={{ marginLeft: 10 }} type='checkbox' />
						<label style={{ marginLeft: 50, cursor: "pointer" }}>
							Remember me
						</label>
					</div>
					<Link to="/resetPassword" style={{ textDecoration: "none", color: "#1AC073" }}>
						Forgot password?
					</Link>
				</div>
				<button className='signin__button' onClick={() => signInMail(email, password)}>Log In</button>
				<div className='signin__social-login'>
					<p> Or <Link className='signin__signup' to='/signUp'> Sign up now </Link> </p>
					<div className='signin__logo'>
						<div>
							<i style={{ color: "#1AC073" }} className='bx bxl-google'></i>
						</div>
						<div>
							<i className='bx bxl-facebook-circle'></i>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}

export default SignInForm;
