import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminlogout } from "./adminSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminDashboard = () => {
  const adminName = useSelector((state) => state.adminuser.adminname);
  const myDispatch = useDispatch();
  const myNav = useNavigate();
  console.log(adminName)
  useEffect(() => {
    if (adminName == "") {
      myNav("/");
    }

  }, []);
  const adminLogout = () => {
    myDispatch(adminlogout());
    myNav("/login");
  }

  return (
    <>
      <div className="admin-head">
        <h1 className="help"> Admin Dashboard</h1>
      </div>
      <div id="adminname">
        Welcome {adminName}!  <button className="admin-logout" onClick={adminLogout}> Logout </button>
      </div>
      <div id="adminmenu">
        <ul>
          <li>
            <Link to="stucomp"> See Student Complain</Link>
          </li>
          <li>
            <Link to="adminchnagepass">Change Password</Link>
          </li>
        </ul>
      </div>
      <div id="admindata" className="content2">
        <Outlet />
      </div>
    </>
  );
}
export default AdminDashboard;