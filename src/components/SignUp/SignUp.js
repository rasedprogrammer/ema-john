import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
	return (
		<div className="form-container">
			<h2 className="form-title">Sign Up</h2>
			<form action="/" className="form-div">
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" required />
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" required />
				</div>
				<div className="form-control">
					<label htmlFor="password">Confirm Password</label>
					<input
						type="password"
						name="confirm-password"
						id="password"
						required
					/>
				</div>
				<input className="btn-submit" type="submit" value="Sign Up" />
			</form>
			<p className="signup-link">
				Already have an account, <Link to="/login">Login</Link>{" "}
			</p>
		</div>
	);
};

export default SignUp;
