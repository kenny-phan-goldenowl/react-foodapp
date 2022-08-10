import { useNavigate } from "react-router-dom";
import "./SignUp.scss";

function SignUpForm() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/");
	};

	return (
		<form className='signup__form'>
			<div className='signup'>
				<h1 className='signup__title'>Sign up</h1>
				<h4 className='signup__subtitle'>
					Sign up and hop on to the food journey!
				</h4>
				<div className='signup__input'>
					<input type='text' placeholder='Username' />
					<input type='password' placeholder='Password' />
					<input type='password' placeholder='Confirm Password' />
					<input type='text' placeholder='Email' />
					<input type='text' placeholder='Phone Number' />
				</div>
				<button onClick={() => handleClick()} className='signup__button'>
					{" "}
					Sign Up{" "}
				</button>
				<div className='signup__social-login'>
					<p> Or </p>
					<div className='signup__logo'>
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

export default SignUpForm;
