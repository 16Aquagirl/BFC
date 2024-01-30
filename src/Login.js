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
            myDispatch(adminlogin({"adname":adminname, "adid":adminid}))
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
        </body>
      </center>
    </>
  )
}
export default Login;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const myNav = useNavigate();

//   const [input, setInput] = useState({});
//   const handleInput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     setInput(values => ({ ...values, [name]: value }));
//   }

//   const handleSubmit = () => {

//     let url = `http://localhost:4000/employee/?email=${input.email}`;

//     axios.get(url).then((res) => {

//       if (res.data.length == 1) {
//         if (res.data[0].password == input.password) {
//           window.localStorage.setItem("user", res.data[0].name);
//           window.localStorage.setItem("email", res.data[0].email);

//           myNav("/userlogin");

//         }
//         else {
//           alert("Invalid Password");
//         }
//       }
//       else {
//         alert("Invalid Email !!!");
//       }
//     });
//   }

//   return (
//     <>
//       <h1> User Login Form</h1>
//       Enter email : <input type="email" name="email" value={input.email} onChange={handleInput} />
//       <br />
//       Enter password : <input type="password" value={input.password} name="password" onChange={handleInput} />
//       <br />
//       <button onClick={handleSubmit} >Login</button>
//     </>
//   );
// }
// export default Login;