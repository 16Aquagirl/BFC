// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { stulogin } from "./stuloginSlice";
// import { adminlogin } from "./adminSlice";

const Home = () => {
    return (
        <>
            <body className="bg-home">
                <center>
                    <div className="home-head">
                        <div className="home-heading">
                            <h1>COMPLAINT <br></br> MANAGEMENT <br></br> SYSTEM</h1>
                            <br></br>
                            <h1>( CMS )</h1>
                        </div>
                    </div>
                </center>
            </body>
        </>
    );
}
export default Home;

// const Home = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [usertype, setUsertype] = useState("student");
//     const myDispatch = useDispatch();
//     const myNav = useNavigate();
//     const submitHandle = (e) => {
//         if (usertype == "student") {
//             e.preventDefault();
//             let url = `http://localhost:4000/students?email=${email}`;
//             axios.get(url).then((res) => {
//                 console.log(res.data);
//                 if (res.data.length == 1) {
//                     if (res.data[0].password == password) {
//                         let stunm = res.data[0].name;
//                         let stuid = res.data[0].id;
//                         myDispatch(stulogin({ stunm, stuid }));
//                         myNav("/studashboard");
//                     }
//                     else {
//                         alert("Invalid Password");
//                     }
//                 }
//                 else {
//                     alert("Invalid email!")
//                 }
//             });

//         }
//         else {
//             e.preventDefault();
//             let url = `http://localhost:4000/adminuser/?email=${email}`;
//             axios.get(url).then((res) => {
//                 if (res.data.length == 1) {
//                     if (res.data[0].password == password) {

//                         let adminname = res.data[0].name;
//                         myDispatch(adminlogin(adminname));

//                         myNav("/admindashboard");
//                     }
//                     else {
//                         alert("Password dose not Match!!!");
//                     }
//                 }
//                 else {
//                     alert("Invalid Email!!!");
//                 }
//             });
//         }
//     }

//     return (
//         <>
//             <div className="container" id="container">
//                 <div className="form-container sign-up">
//                 </div>
//                 <div className="form-container sign-in">
//                     <form>
//                         <h1>Login Form</h1>
//                         <div className="social-icons">
//                             <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
//                             <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
//                             <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
//                             <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
//                         </div>
//                         <span>or use your email password</span>
//                         <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
//                         <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
//                         <select className="dropdown" name="userRoll"
//                             value={usertype} onChange={(e) => { setUsertype(e.target.value) }}>
//                             <option>student</option>
//                             <option>admin</option>
//                         </select>
//                         <button onClick={submitHandle}>Sign In</button>
//                     </form>
//                 </div>
//                 <div className="toggle-container">
//                     <div className="toggle">
//                         <div className="toggle-panel toggle-left">
//                             <h1>Welcome Back!</h1>
//                             <p>Enter your personal details to use all of site features</p>
//                             <button className="hidden" id="login">Sign In</button>
//                         </div>
//                         <div className="toggle-panel toggle-right">
//                             <h1>Complain Management System</h1>
//                             <p>
//                                 <Link to="/register" className="mynav">
//                                     <p style={{ color: "white" }}> New User Register Here! </p> </Link>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Home;