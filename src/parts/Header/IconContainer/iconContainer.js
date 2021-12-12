import classes from "./iconContainer.module.css"
import bag from "./../../../assets/Icon/bag.svg"
import notify from "./../../../assets/Icon/notify.svg"
import msg from "./../../../assets/Icon/msg.svg"
import account from "./../../../assets/Icon/account.svg"
const IconConatiner = () => {
    return (
        <div className={"d-flex align-items-center justify-content-between " + classes.iconsConatiner}>
            <img src={bag} alt="bag" />
            <img src={notify} alt="notify" />
            <img src={msg} alt="msg" />
            <img src={account} alt="account" />
        </div>
    );
}

export default IconConatiner;