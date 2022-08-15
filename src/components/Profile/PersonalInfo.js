import NavBar from "../Navbar/NavBar";
import "./PersonalInfo.scss";
import { Link } from "react-router-dom";

function PersonalInfo() {
	return (
		<div className='profile'>
			<NavBar icon1='bx bx-search' icon2='bx bx-shopping-bag' />
			<div className='profile__middle'>
				<div className='profile__middle-img'>
					{/* eslint-disable  */}
					<img
						className='img1'
						src={require('./img/background.png')}
						alt='background img'
					/>
					<img
						className='img2'
						src={require('./img/avatar.png')}
						alt='avatar img'
					/>
					{/* eslint-enable  */}
				</div>
				<div className='profile__middle-switch'>
					<Link to='/personalInfo'>
						<button className='btn1'> Profile </button>
					</Link>
					<Link to='/orderHistory'>
						<button className='btn2'> Order History </button>
					</Link>
				</div>
				<div className='profile__middle-input'>
					<h1>Personal Information</h1>
					<input type='text' placeholder='Username' />
					<input type='text' placeholder='Email' />
					<input type='text' placeholder='Phone Number' />
					<input type='text' placeholder='Date Of Birth' />
					<button>Edit</button>
				</div>
			</div>
			<div>
				<NavBar icon1='bx bxl-facebook-square' icon2='bx bxl-instagram' />
				<div className='profile__copyright'>
					<div></div>
					<p>Copyright @2022 TBayEAT</p>
				</div>
			</div>
		</div>
	);
}

export default PersonalInfo;
