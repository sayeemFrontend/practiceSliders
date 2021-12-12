import { Switch } from "react-router-dom";
import Footer from "../parts/Footer/footer";
import Header from './../parts/Header/header';
import Slider from "../components/Sliders/CustomSlider/slider";
import SimpleSlider from "../components/Sliders/ReactSlick/slider";
import SliderLoop from './../components/Sliders/CustomSlider/SliderMarginLeftLoop';

const Layout = () => {
    return (
        <div>

            <Header />

            <Switch>
                {/* <Route path="/list" ><ListView /></Route> */}
                {/* <Route path="/" ></Route> */}
            </Switch>
            <Footer />
        </div>
    );
}

export default Layout;