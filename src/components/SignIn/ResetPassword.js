import AuthNav from "../Navbar/Nav";
import "./SignInForm.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, sendPasswordReset } from "../../firebase";

function ResetPassword() {

	const [email, setMail] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
	useEffect(() => {
		if (loading) return;
		if (user) navigate("/dashBoard");
	}, [user, loading]);

	return (
		<div className="container">
			<AuthNav/>
			<form className="reset">
				<h1 className="reset__item">Reset Password</h1>
				<input type="text" placeholder="Recover Email" value={email} onChange={(e) => setMail(e.target.value)}/>
				<button onClick={() => sendPasswordReset(email)}>Confirm</button>
				<div>Don't have an account? <Link to="/signUp">Register</Link> now.
        </div>
			</form>
		</div>
	)
}

export default ResetPassword;