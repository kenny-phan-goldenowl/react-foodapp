import "./SignInForm.scss";
import { Link } from "react-router-dom";

function SignInForm() {
	return (
		<form className='signin__form'>
			<div className='signin'>
				<h1 className='signin__title'>Sign in</h1>
				<h4 className='signin__subtitle'>
					Sign in and start your food adventure!
				</h4>
				<input type='text' placeholder='Email' />
				<input type='password' placeholder='Password' />
				<div className='signin__verify'>
					<div>
						<input style={{ marginLeft: 10 }} type='checkbox' />
						<label style={{ marginLeft: 50, cursor: "pointer" }}>
							Remember me
						</label>
					</div>
					<a href='/' style={{ textDecoration: "none", color: "#1AC073" }}>
						Forgot password?
					</a>
				</div>
				<button className='signin__button'>Log In</button>
				<div className='signin__social-login'>
					<p>
						{" "}
						Or{" "}
						<Link className='signin__signup' to='/signUp'>
							Sign up now
						</Link>
					</p>
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
