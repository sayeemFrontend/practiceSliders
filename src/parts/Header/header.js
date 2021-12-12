import Menubar from "./Menubar/menubar";
import Navbar from "./Navbar/navbar";
import Topbar from './Topbar/topbar';

const Header = () => {
    return (
        <div>
            <div className="d-none d-md-block ">
                <Topbar />
            </div>
            <Menubar />
            <Navbar />
        </div>
    );
}

export default Header;