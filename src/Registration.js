import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Loader from "./Loader";

const Registration = () => {

	const [input, setInput] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const myNav = useNavigate();


	const handleInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setInput(values => ({ ...values, [name]: value }));

	}
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		let url = "http://localhost:4000/students";
		axios.post(url, input).then((res) => {
			alert("Succesfully Registered!!!");
			myNav("/Login");
		});
	}

	return (
		<>
			<center>
				<body className="reg-body">
					<div className="dabba-reg">
						{/* {isLoading ? <Loader /> : ""} */}
						<div className="reg-main">
							<div>
								<h1 className="h1-reg">SIGN UP</h1>
								<br></br><br></br>
								<form action="./Login">
									<input type="text" name="name" className="input" value={input.name} placeholder="Username" required onChange={handleInput} />
									<br></br><br></br>
									<input type="text" name="email" className="input" value={input.email} placeholder="Email" required onChange={handleInput} />
									<br></br><br></br>
									<input type="password" name="password" className="input" value={input.password} placeholder="Password" required onChange={handleInput} />
									<br></br><br></br><br></br><br></br>
									<button className="submit" onClick={handleSubmit}>
										<span>Register</span>
									</button>
								</form>
								<br></br><br></br><br></br><br></br>
								<div>
									<h3>Already have an account?</h3>
									<a href="./Login" className="login-now">Login Now</a>
								</div>
							</div>
						</div>
					</div>
				</body>
			</center>
		</>
	)
}
export default Registration;