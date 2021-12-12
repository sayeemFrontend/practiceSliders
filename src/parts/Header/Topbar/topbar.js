import classes from "./topbar.module.css"
import mail from "./../../../assets/Icon/mail.svg"
import phn from "./../../../assets/Icon/phnIcon.svg"
import call from "./../../../assets/Icon/callIcon.svg"

const Topbar = () => {
    return (

        <div className={"brPrimary " + classes.topnav}>
            <div className="container">
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center flex-grow-1">
                        <img src={phn} alt="phn" />
                        <h6>save big on our app!....</h6>
                    </div>
                    <div className="me-4 d-flex align-items-center">
                        <img src={call} alt="call" />
                        <h6>3114563000</h6>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={mail} alt="mail" />
                        <h6>lotus@tech.dev</h6>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Topbar;