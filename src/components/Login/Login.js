import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
	return (
		<div className="form-container">
			<h2 className="form-title">Login</h2>
			<form action="/" className="form-div">
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" required />
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" required />
				</div>
				<input className="btn-submit" type="submit" value="Login" />
			</form>
			<p className="signup-link">
				New to ema john, <Link to="/signup">Create a New Account </Link>{" "}
			</p>
		</div>
	);
};

export default Login;
