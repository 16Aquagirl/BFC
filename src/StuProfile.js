import { useSelector} from "react-redux";


const StuProfile = () => {

    const stuName = useSelector((state) => state.stulogin.stuuser);
    // const stuEmail = useSelector((state) => state.stulogin.stuuser);

    return (
        <>
            <center>
                <head>
                    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
                </head>

                <div>
                    <div className="profile-icon">
                        <i class='bx bx-user-circle'></i>
                        <h2>Name : {stuName} </h2>
                        {/* <h2>Email : {stuEmail} </h2> */}
                    </div>
                </div>
            </center>
        </>
    );
}
export default StuProfile;