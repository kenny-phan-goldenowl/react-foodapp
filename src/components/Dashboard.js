import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function Dashboard() {

	const [user, loading, error] = useAuthState(auth);
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const fetchUserName = async () => {
		try {
			const q = query(collection(db, "users"), where("uid","==", user?.uid));
			const doc = await getDocs(q);
			const data = doc.docs[0].data();
			setName(data.name);
		} catch(error) {
			console.error(error);
			alert("Error while fetching data");
		}
	};

	useEffect(() => {
		if (loading) return;
		if (!user) return navigate("/");
		fetchUserName();
	}, [user, loading]);

	return (
		<div>
			<h1>Hello {name} {user?.email}</h1>
			<button onClick={logout}>Log out</button>
		</div>
	)
}

export default Dashboard;