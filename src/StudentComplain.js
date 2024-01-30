import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const StudentComplain = () => {
    const [msg, setMsg] = useState("");

    const stuid = useSelector((state) => state.stulogin.stuid);

    const submitHandle = () => {
        let mystuid = stuid;
        let url = "http://localhost:4000/stucomplain";
        axios.post(url, { "stuid": mystuid, "complain": msg, "ans": "" }).then((res) => {
            alert("Your complain succesfully Registered!!!");
        });
    }

    return (
        <>
            <center>
                <h1 className="help">How may I help you ?</h1>
                <br></br><br></br>
                <h3>Enter Your Message</h3>
                <br/>

                <textarea name="stumsg" rows="6" cols="50" className="textarea-stu" placeholder="What Problem You Are Facing ?" value={msg} onChange={(e) => { setMsg(e.target.value) }} />
                <br/><br/><br/>
                <button className="submit-stu" onClick={submitHandle}> Submit</button>
            </center>
            <div className="comp-footer-img">
                <div className="comp-footer-mark">
                    ?
                </div>
            </div>
        </>
    );
}

export default StudentComplain;