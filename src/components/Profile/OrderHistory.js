import NavBar from "../Navbar/NavBar";
import "./PersonalInfo.scss";
import { Link } from "react-router-dom";
import Bill from "./Bill";

function OrderHistory() {
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
					<h1>Order History</h1>
					<Bill />
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

export default OrderHistory;
