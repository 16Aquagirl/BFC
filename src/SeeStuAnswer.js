import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
// import img1 from "./footer2.png";

let sno = 0;

const SeeStuAnswer = () => {

   const stuid = useSelector((state) => state.stulogin.stuid);
   const [mydata, setMydata] = useState([]);
   const loadData = () => {
      let url = `http://localhost:4000/stucomplain/?stuid=${stuid}`;
      axios.get(url).then((res) => {
         setMydata(res.data);
      });
   }

   useEffect(() => {
      loadData();
   }, []);

   const ans = mydata.map((key) => {
      sno++;
      return (
         <>
            <tr>
               <td> {sno} </td>
               <td> {key.complain} </td>
               <td> {key.ans} </td>
            </tr>

         </>
      );

   });

   return (
      <>
         <center>
            <h1 className="help">Solution To Your Problem !</h1>
            <br></br><br></br>
            <table border="1" width="50%" align="center" bgcolor="white">
               <tr>
                  <th> Sno</th>
                  <th> Your Complain </th>
                  <th> Solution</th>
               </tr>
               {ans}
            </table>
         </center>
         {/* <div className="ans-img1">
            <img src={img1} className="stu-img1"></img>
         </div> */}
      </>
   );
}

export default SeeStuAnswer;