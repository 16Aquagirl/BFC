import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const AdminPasswordChange = () => {
    const [oldpass, setOldpass] = useState("");
    const [newpass, setNewpass] = useState("");
    const [renewpass, setReNewpass] = useState("");

    const adminid = useSelector((state) => state.adminuser.adminid);
    console.log(adminid)

    const submitHandle = () => {
        let url = `http://localhost:4000/adminuser/${adminid}`;
        axios.get(url).then((res) => {
          

            if (res.data.password == oldpass) {
                if (newpass == renewpass) {
                    axios.patch(url, { "password": newpass }).then((res) => {
                      console.log(res.data.password)
                        alert("Password Succesfully Changed !! ");
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
                <h1 className="help">Change Your password</h1>
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
export default AdminPasswordChange;