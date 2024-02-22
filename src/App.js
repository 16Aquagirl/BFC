import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Registration from "./Registration";
import Login from "./Login";
import Bikes from "./Bikes";
import Electric from "./Electric";
import Reviews from "./Reviews";
import Contact from "./Contact";
import StudentDashboard from "./StudentDashboard";
import LoaderDashboard from "./LoaderDashboard";
import StudentComplain from "./StudentComplain";
import AdminDashboard from "./AdminDashboard";
import SeeComplain from "./SeeCoplain";
import AdminChangePassword from "./AdminChangePassword";
import ReplyAns from "./ReplyAns";
import SeeStuAnswer from "./SeeStuAnswer";
import StuProfile from "./StuProfile";
import StuChangePassword from "./StuChangePassword";
import Firstbike from "./Firstbike";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="registration" element={<Registration />} />
            <Route path="bikes" element={<Bikes />} />
            <Route path="firstbike" element={<Firstbike />} />
              {/* <Route exact path="firstbike" element={<Firstbike />} /> */}
            <Route path="electric" element={<Electric />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="/studashboard" element={<LoaderDashboard />}>
              <Route exact path="stuprofile" element={<StuProfile />} />
              <Route exact path="stucomplain" element={<StudentComplain />} />
              <Route exact path="sturesponse" element={<SeeStuAnswer />} />
              <Route exact path="stupassword" element={<StuChangePassword />} />
            </Route>
                     
            <Route path="admindashboard" element={<AdminDashboard />} >
              <Route path="stucomp" element={<SeeComplain />} />
              <Route path="adminchnagepass" element={<AdminChangePassword />} />
              <Route path="repans/:id" element={<ReplyAns />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;