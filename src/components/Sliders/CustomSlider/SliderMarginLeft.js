import { useCallback, useEffect, useRef, useState } from "react";
import "./slider3.css"
import pic01 from "./Asset/pic01.jpg";
import pic03 from "./Asset/pic03.jpg";
import pic02 from "./Asset/pic02.jpg";
import { newArry } from "./utils";
import SlideView from "./SlideView";
import View from "./view";

let imgList = [pic01, pic02, pic03, pic03]

export default function SliderThree() {
    const sliderRef = useRef()
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideCount = 2;

    const slide = useCallback(() => {
        sliderRef.current.style.marginLeft = currentSlide * -100 + "%";
    }, [currentSlide])

    useEffect(() => {
        slide();
    }, [currentSlide, slide])

    useEffect(() => {
        function setSlide() {
            setCurrentSlide((prevState) => {
                if (prevState >= (imgList.length / slideCount) - 1) return 0;
                return prevState + 1
            })
        }

        const sliderInterval = setInterval(setSlide, 3000)

        return function () {
            clearTimeout(sliderInterval)
        }
    }, [])

    return (
        <div className="sliderContainer">
            <div className="sliderInnerContainer" ref={sliderRef} style={{ width: `${imgList.length * 100}%` }}>

                {imgList.map(image => (
                    <div className="sliderItem" style={{ width: `${100 / (imgList.length * slideCount)}%` }}>
                        <img src={image} alt="slider image" className="" />
                    </div>
                ))}
            </div>
        </div>


    );
}