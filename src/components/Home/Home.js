import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Home.scss";

function Home() {
	const [user, loading] = useAuthState(auth);
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const fetchUserName = async () => {
		try {
			const q = query(collection(db, "users"), where("uid", "==", user?.uid));
			const doc = await getDocs(q);
			const data = doc.docs[0].data();
			setName(data.name);
		} catch (error) {
			console.error(error);
			alert("Error while fetching data");
		}
	};

	useEffect(() => {
		if (loading) return;
		if (!user) return navigate("/");
		fetchUserName();
	}, [user, loading]);

	console.log(name);
	console.log(logout);

	return (
		<div className='home'>
			{/* Home top */}
			<div className='home__top'>
				<div className='home__top-nav'>
					<div className='home__top-nav-logo' onClick={() => navigate("/")}>
						{" "}
						TBayEAT{" "}
					</div>
					<div className='home__top-nav-option'>
						<Link className='item' to='/'>
							Home
						</Link>
						<Link className='item' to='/'>
							About
						</Link>
						<Link className='item' to='/'>
							Menu
						</Link>
						<Link style={{ cursor: "pointer" }} className='item' to='/'>
							Contact
						</Link>
						<Link style={{ cursor: "pointer" }} className='item' to='/signIn'>
							Log in
						</Link>
					</div>
					<div className='home__top-nav-icon'>
						<i className='bx bx-search'></i>
						<i className='bx bx-shopping-bag'></i>
					</div>
				</div>
				<div className='home__top-menu'>
					<div className='home__top-menu-left'>
						<div>
							<p>
								Authentic local <br />
								food in Tbay
							</p>
							<p>
								TbayEAT is a courier serivce in which authentic home cook <br />
								food is delivered to a customer
							</p>
						</div>
						<div className='home__top-menu-left-search'>
							<input type='text' placeholder='Search food you love' />
							<button>Search</button>
						</div>
					</div>
					<div className='home__top-menu-right'>
						{/* eslint-disable  */}
						<img src={require('./cuate.png')} alt='dude cooking' />
						{/* eslint-enable  */}
					</div>
				</div>
			</div>
			{/* Home middle */}
			<div className='home__middle'>
				<div className='home__middle-trending'>
					<p>Trending today</p>
					<div>
						<button>All</button>
						<button>Offers</button>
						<button>Free delivery</button>
						<button>New</button>
						<button>Coming</button>
					</div>
				</div>
				<div className='home__middle-filters'>
					<select name='dishes' id='dishes'>
						<option value='volvo'>Pizza</option>
						<option value='saab'>Chicken</option>
						<option value='mercedes'>Rice</option>
						<option value='audi'>Drink</option>
					</select>
					<div className='home__middle-filters-dishes'>
						<div className='dishes'>1</div>
						<div className='dishes'>2</div>
						<div className='dishes'>3</div>
						<div className='dishes'>4</div>
						<div className='dishes'>5</div>
						<div className='dishes'>6</div>
						<div className='dishes'>7</div>
						<div className='dishes'>8</div>
					</div>
				</div>
				<div className='home__middle-more'>
					<button>+ Load more...</button>
				</div>
			</div>
			{/* Home bottom */}
			<div className='home__bottom'>
				<div className='home__bottom-nav'>
					<div className='home__bottom-nav-logo' onClick={() => navigate("/")}>
						{" "}
						TBayEAT{" "}
					</div>
					<div className='home__bottom-nav-option'>
						<Link className='item' to='/'>
							Home
						</Link>
						<Link className='item' to='/'>
							About
						</Link>
						<Link style={{ cursor: "pointer" }} className='item' to='/'>
							Contact
						</Link>
						<Link style={{ cursor: "pointer" }} className='item' to='/signIn'>
							Log in
						</Link>
					</div>
					<div className='home__bottom-nav-icon'>
						<i className='bx bxl-facebook-square'></i>
						<i className='bx bxl-instagram'></i>
					</div>
				</div>
				<div className='home__bottom-line'></div>
				<div className='home__bottom-copyright'>Copyright @2022 TBayEAT</div>
			</div>
		</div>
	);
}

export default Home;
