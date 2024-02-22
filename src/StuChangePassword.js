import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const StuPasswordChange = () => {
    const [oldpass, setOldpass] = useState("");
    const [newpass, setNewpass] = useState("");
    const [renewpass, setReNewpass] = useState("");

    const stuid = useSelector((state) => state.stulogin.stuid);

    const submitHandle = () => {
        let url = `http://localhost:4000/students/${stuid}`;
        axios.get(url).then((res) => {

            if (res.data.password == oldpass) {
                if (newpass == renewpass) {
                    axios.patch(url, { password: newpass }).then((res) => {
                        alert("Password Succesfully Changed !!! ");
                    });
                }
                else {
                    alert("Password Dose not Match!");
                }
            }
            else {
                alert("Your old Password is Incorrect!");
            }
        });
    }
    return (
        <>
            <center>
                <h1 className="help">Change Your Password</h1>
                <form className="change-pass">
                    <input type="text" className="password" placeholder="Enter Current Password" value={oldpass} name="oldpass" onChange={(e) => { setOldpass(e.target.value) }} />
                    <br /><br /><br />
                    <input type="text" className="password" placeholder="Enter New Password"  value={newpass} name="newpass" onChange={(e) => { setNewpass(e.target.value) }} />
                    <br /><br /><br />
                    <input type="text" className="password" placeholder="Re-Enter New Password"  value={renewpass} name="renewpass" onChange={(e) => { setReNewpass(e.target.value) }} />
                    <br /><br /><br /><br />
                    <button className="btn-stu-pass" onClick={submitHandle}>Submit</button>

                </form>
            </center>
        </>
    )
}
export default StuPasswordChange;