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

				{/* footer */}
				<div className="footer">
          <footer className="new_footer_area bg_color">
            <div className="new_footer_top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                      <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                      <p>Don’t miss any updates of our new templates and extensions.!</p>
                      <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate="true" _lpchecked={1}>
                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                        <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                        <p className="mchimp-errmessage" style={{ display: 'none' }} />
                        <p className="mchimp-sucmessage" style={{ display: 'none' }} />
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                      <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                      <ul className="list-unstyled f_list">
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Android App</a></li>
                        <li><a href="#">ios App</a></li>
                        <li><a href="#">Desktop</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">My tasks</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                      <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                      <ul className="list-unstyled f_list">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Term &amp; conditions</a></li>
                        <li><a href="#">Reporting</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Support Policy</a></li>
                        <li><a href="#">Privacy</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                      <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                      <div className="f_social_icon">
                        <a href="#" className="fab fa-facebook" />
                        <a href="#" className="fab fa-twitter" />
                        <a href="#" className="fab fa-linkedin" />
                        <a href="#" className="fab fa-pinterest" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer_bg">
                <div className="footer_bg_one" />
                <div className="footer_bg_two" />
              </div>
            </div>
          </footer>

        </div>
			</center>
		</>
	)
}
export default Registration;