import "./slider.css"
import Slider from "react-slick";
import pic01 from "./Asset/pic01.jpg";
import pic03 from "./Asset/pic03.jpg";
import pic02 from "./Asset/pic02.jpg";

export default function SimpleSlider() {

    const images = [pic01, pic02, pic03, pic01];

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        customPaging: function (i) {
            return (
                <a href="/" className="smallImage">
                    <img src={images[i]} alt={i} />
                </a>
            )
        }

    };
    return (
        <div className="slideContainer">

            <div className="container">
                <h2> Slide Showing</h2>
                <Slider {...settings}>
                    {images.map(image => (
                        <div>
                            <img src={image} alt="pic01" />
                        </div>

                    ))}

                </Slider>
            </div>

        </div>
    );
}
