import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { stulogin } from "./stuloginSlice";
import { adminlogin } from "./adminSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("student");
  const myDispatch = useDispatch();
  const myNav = useNavigate();

  const submitHandle = (e) => {
    if (usertype == "student") {
      e.preventDefault();
      let url = `http://localhost:4000/students?email=${email}`;
      axios.get(url).then((res) => {
        console.log(res.data);
        if (res.data.length == 1) {
          if (res.data[0].password == password) {
            let stunm = res.data[0].name;
            let stuid = res.data[0].id;
            myDispatch(stulogin({ stunm, stuid }));
            myNav("/studashboard");
          }
          else {
            alert("Invalid Password");
          }
        }
        else {
          alert("Invalid email!")
        }
      });

    }
    else {
      e.preventDefault();
      let url = `http://localhost:4000/adminuser/?email=${email}`;
      axios.get(url).then((res) => {
        if (res.data.length == 1) {
          if (res.data[0].password == password) {

            let adminname = res.data[0].name;
            let adminid = res.data[0].id;
            // myDispatch(adminlogin({adminname, adminid}));
            myDispatch(adminlogin({ "adname": adminname, "adid": adminid }))
            myNav("/admindashboard");
          }
          else {
            alert("Password dose not Match!!!");
          }
        }
        else {
          alert("Invalid Email!!!");
        }
      });
    }
  }

  return (
    <>
      <center>
        <body className="bg-login">
          <div className="dabba-log">
            <div className="main2">
              <h1 className="help">LOG IN</h1>
              <br></br><br></br>
              <form action="./StudentDashboard">
                <input type="email" name="email" placeholder="Email" className="input-log" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                <br></br><br></br>
                <input type="password" name="password" placeholder="Password" className="input-log" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                <br></br><br></br>
                <select name="userRoll" className="select-option" value={usertype} onChange={(e) => { setUsertype(e.target.value) }}>
                  <option>student</option>
                  <option>admin</option>
                </select>
                <br></br><br></br><br></br>
                <button className="submit-log" onClick={submitHandle}>Sign In</button>
              </form>
              <br></br><br></br><br></br><br></br>
              <div className="dabba-log-2">
                <h2>Don't have an account?</h2>
                <a href="./Registration"> <h2 className="reg-h2">Register now</h2></a>
              </div>
            </div>
          </div>
          <div className="animation">

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
export default Login;

