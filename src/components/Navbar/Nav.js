import "./Nav.scss";
import { useNavigate } from "react-router-dom";

function AuthNav() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/");
	};

	return (
		<div className='navbar'>
			<p onClick={handleClick} className='navbar__logo'>
				TBayEAT
			</p>
		</div>
	);
}

export default AuthNav;
