import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>

      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>

      <div className="navbar">
        <input type="checkbox" id="toggle" hidden />
        <label for="toggle" className="label-click" hidden><i className="fa fa-bars" id="toggle" style={{ "font-size": "30px" }}></i></label>
        <nav className="content">
          <i class='bx bxs-comment-detail'></i>
          <h1 className="logo-name">CMS</h1>
          <ul className="list">
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to='course'>Courses</Link></li>
            <li><Link to='faculty'>Faculty</Link></li>
            <li><Link to='contact'>Contact</Link></li>
          </ul>
          <div className="btn-nav">
            <Link to="registration"><button className="btn">SignUp</button></Link>
            <Link to="login"><button className="btn">LogIn</button></Link>
          </div>
        </nav>
      </div>
      <Outlet />
      {/* <br /> <br />
      <hr size="4" color="blue" />
      <center>
        www.complainmanagement.com 2023 &copy;
      </center> */}
    </>
  )
}
export default Layout;