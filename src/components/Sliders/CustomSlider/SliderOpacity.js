import { useCallback, useEffect, useRef, useState } from "react";
import "./sliderOpacity.css"
import pic01 from "./Asset/pic01.jpg";
import pic03 from "./Asset/pic03.jpg";
import pic02 from "./Asset/pic02.jpg";
import { newArry } from "./utils";
import SlideView from "./SlideView";
import View from "./view";

let imgList = [pic01, pic02, pic03, pic01, pic02, pic03,]

export default function SliderOpacity() {
    const sliderRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideCount = 2;

    const slide = useCallback(() => {
        if (!sliderRef) return;
        Array.from(sliderRef.current.children).forEach((item, index) => {
            if (index >= currentSlide && index < currentSlide + slideCount)
                item.style.opacity = 1;
            else item.style.opacity = 0;
        })
    }, [currentSlide])

    useEffect(() => {
        slide();
    }, [currentSlide, slide])

    useEffect(() => {
        function setSlide() {
            setCurrentSlide((prevState) => {
                if (prevState >= (imgList.length / slideCount) - 1) return 0;
                return prevState + slideCount
            })
        }

        const sliderInterval = setInterval(setSlide, 3000)

        return function () {
            clearTimeout(sliderInterval)
        }
    }, [])

    return (
        <div className="sliderContainer">
            <div className="sliderInnerContainer" ref={sliderRef}>

                {imgList.map((image, index) => (
                    <div className="sliderItem"
                        style={{
                            width: `${100 / slideCount}%`,
                            left: `${index % slideCount !== 0 ? (100 / slideCount) * (index % slideCount) + "%" : ""}`
                        }}
                    >
                        <img src={image} alt="slider image" className="" />
                    </div>
                ))}
            </div>
        </div>


    );
}