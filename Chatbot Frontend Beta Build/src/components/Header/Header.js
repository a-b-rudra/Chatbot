import Card from "../UI/Card";
import classes from "./Header.module.css";
import { useState } from "react";

const DUMMY = [
	{
		id: 1,
		name: "Abhinav Raj",
		email: "abhinav.raj@sc.com"
	},
	{
		id: 2,
		name: "Nilaya Agarwal",
		email: "nilaya.agarwal@sc.com"
	}
];

const Header = (props) => {
	const [verified, setVerified] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [display, setDisplay] = useState(name);
	const [warning, setWarning] = useState(true);

	const submitHandler = (event) => {
		event.preventDefault();
		if (name.trim().length < 1 || email.trim().length < 1) {
			setWarning(false);
			props.onSubmit(false);
			return;
		}
		if (email.indexOf("@") < 1) {
			setWarning(false);
			props.onSubmit(false);
			return;
		}
		const check = DUMMY.filter((info) => {
			return info.name === name && info.email === email;
		});
		if (check.length === 0) {
			setWarning(false);
			props.onSubmit(false);
			return;
		}
		setDisplay(name);
		// setName("");
		// setEmail("");
		setVerified(true);
		props.onSubmit(true);
	};

	const nameHandler = (event) => {
		setName(event.target.value);
		setWarning(true);
	};

	const emailHandler = (event) => {
		setEmail(event.target.value);
		setWarning(true);
	};

	return (
		<div>
			<Card dark={props.dark}>
				<h1>{verified ? `Welcome` : "aXess Chatbot"}</h1>
				<form onSubmit={submitHandler}>
					<div>
						<label htmlFor="Name">
							<b>Name:</b>
						</label>
						<input
							id="Name"
							placeholder="Enter name"
							type="text"
							value={name}
							onChange={nameHandler}
							disabled={verified}
							className={classes.input}></input>
					</div>
					<div>
						<label htmlFor="Email">
							<b>Email:</b>
						</label>
						<input
							id="Email"
							placeholder="Enter email@sc.com"
							type="email"
							value={email}
							onChange={emailHandler}
							disabled={verified}
							className={classes.input}></input>
					</div>
					{!warning && <h5>Please try again with valid credentials!</h5>}
					<button
						type="submit"
						className={`${classes["action"]} ${
							!verified && classes.unverified
						}`}>
						{verified ? "Go" : "Check"}
					</button>
				</form>
				{verified && <h4>Welcome {display}</h4>}
			</Card>
		</div>
	);
};

export default Header;
