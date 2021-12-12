import React from "react";
import classes from "./Slider.module.css";
import pic01 from "./Asset/pic01.jpg";
import pic03 from "./Asset/pic03.jpg";
import pic02 from "./Asset/pic02.jpg";


const Slider = () => {
    return (
        <div className={classes.slideContainer}>

            <div className="container" >
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                    {/* carousel-indicators */}

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" style={{ height: "10px", width: "10px", backgroundColor: "#000000", borderRadius: "100%" }} aria-current="true" aria-label="Slide 1">
                        </button>

                        <button type="button" style={{ height: "10px", width: "10px", backgroundColor: "#000000", borderRadius: "100%" }} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2">
                        </button>

                        <button type="button" style={{ height: "10px", width: "10px", backgroundColor: "#000000", borderRadius: "100%" }} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">
                        </button>
                    </div>

                    {/* carousel-items */}

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={pic01} className={"d-block w-100 " + classes.sliderImage} alt="Cover" />
                            <div className={"carousel-caption " + classes.caption}>
                                <p className={classes.title1}>New Product</p>
                                <h1 className=" my-3">Family Pack</h1>
                                <h1 className="">Fruits</h1>
                                <button className={"py-2 px-3 mt-2 " + classes.buttonStyle}>
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={pic02} className={"d-block w-100 " + classes.sliderImage} alt="Cover" />
                            <div className={"carousel-caption " + classes.caption}>
                                <p className={" " + classes.title1}>New Product</p>
                                <h1 className="  my-3">Family Pack</h1>
                                <h1 className=" ">Fruits</h1>
                                <button className={"py-2 px-3 mt-2 " + classes.buttonStyle}>
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={pic03} className={"d-block w-100 " + classes.sliderImage} alt="Cover" />
                            <div className={"carousel-caption " + classes.caption}>
                                <p className={"" + classes.title1}>New Product</p>
                                <h1 className="  my-3">Family Pack</h1>
                                <h1>Fruits</h1>
                                <button className={"py-2 px-3 mt-2 " + classes.buttonStyle}>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* carousel-control-button */}

                    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className={classes.arrowBg + " carousel-control-prev-icon"} style={{ color: "black" }} aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className={classes.arrowBg + " carousel-control-next-icon"} aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );

};

export default Slider;
