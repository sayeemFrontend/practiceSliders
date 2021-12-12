import { useCallback, useEffect, useRef, useState } from "react";
import "./sliderLoop.css"
import pic01 from "./Asset/pic01.jpg";
import pic03 from "./Asset/pic03.jpg";
import pic02 from "./Asset/pic02.jpg";

let imgList = [pic01, pic02, pic03, pic03]

export default function SliderLoop() {
    const sliderRef = useRef()
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideCount = 2;

    const slide = useCallback(() => {
        Array.from(sliderRef.current.children).forEach((item, index) => {
            if (index >= currentSlide && index < currentSlide + slideCount) {
                item.style.left = (100 / slideCount) * (index % slideCount) + "%";
                item.style.opacity = 1;
                item.style.zIndex = 1000;
            }
            else if ((index >= currentSlide - slideCount && index < currentSlide) ||
                (currentSlide === 0 && index >= imgList.length - slideCount)) {
                item.style.left = "-100%"
                setTimeout(() => {
                    item.style.opacity = 0;
                }, 500);
            }
            else {
                item.style.left = "100%";
                setTimeout(() => {
                    item.style.opacity = 0;
                }, 500);
            }
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
            <div className="sliderInnerContainer" ref={sliderRef} >

                {imgList.map(image => (
                    <div className="sliderItem" style={{ width: `${100 / slideCount}%` }}>
                        <img src={image} alt="slider image" className="" />
                    </div>
                ))}
            </div>
        </div>


    );
}