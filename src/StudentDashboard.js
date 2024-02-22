import { useSelector, useDispatch } from "react-redux";
import { stulogout } from "./stuloginSlice";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const StudentDashboard = () => {
  const stuName = useSelector((state) => state.stulogin.stuuser);
  const myDispatch = useDispatch();
  const myNav = useNavigate();

  const stuLogout = () => {
    myDispatch(stulogout());
    myNav("/Login");
  }

  return (
    <>
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <div id="stuinfo">
        <div>
          <h2>Welcome {stuName} !</h2>
        </div>
      </div>


      <div class="sidebar">
        <div className="sidebar-icon">
          <div className="sidebar-icon1"><i class='bx bx-user-circle'></i><Link to="stuprofile"> Student Profile </Link></div>
          <div className="sidebar-icon2"><i class='bx bxs-message-rounded-add' ></i><Link to="stucomplain"> Write Your Complain </Link></div>
          <div className="sidebar-icon3"><i class='bx bx-desktop' ></i><Link to="sturesponse"> Display Response </Link></div>
          <div className="sidebar-icon4"><i class='bx bxs-lock-open-alt'></i><Link to="stupassword"> Change Password</Link></div>
          <div className="sidebar-icon4"><i class='bx bxs-log-out'></i><a href="#" onClick={stuLogout}>Logout</a></div>
        </div>
      </div>

      <div className="content1">

        <Outlet />

      </div>
    </>
  );
}

export default StudentDashboard;