import { Link, Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Document</title>
        <link rel="stylesheet" href="./static/css/app1/style.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&family=Raleway&family=Rock+Salt&display=swap"
          rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="{% static 'style/style.css' %}"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
        <link href="https://www.flaticon.com/free-icons/bike"></link>
      </head>

      <body>
        <div>
          <div class="nav">
            <div id="main">
              <a class="logo" onClick={() => {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
                document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
              }
              }  >&#9776; </a>

              <div className="icon">
                @
              </div>

              <div className="name">
                BIKEWALE.COM
              </div>
            </div>

            <input type="search" placeholder="Search"></input>

            <button class="pushablelog"><Link to="login"><span class="front">LogIn</span></Link></button>
          </div>

          <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onClick={() => {
              document.getElementById("mySidenav").style.width = "0";
              document.getElementById("main").style.marginLeft = "0";
              document.body.style.backgroundColor = "white";
            }


            } >&times;</a>
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <Link to="login">LogIn</Link>
            <Link to="registration">Registration</Link>
            <Link to="bikes">Bikes</Link>
            <Link to="electric">Electric Bikes</Link>
            <Link to="reviews">Reviews</Link>
            <Link to="contact">Contact Us</Link>
            <Link to="logout">Logout</Link>
          </div>
        </div>
        <Outlet />
      </body>

    </>
  )
}
export default Layout;