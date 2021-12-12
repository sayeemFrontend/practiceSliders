import { useEffect, useRef, useState } from "react";
import "./sliderTwo.css"
import pic01 from "./Asset/pic01.jpg";
import pic03 from "./Asset/pic03.jpg";
import pic02 from "./Asset/pic02.jpg";
import { newArry } from "./utils";
import SlideView from "./SlideView";
import View from "./view";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailbox } from "fontawesomepro/light"
import { faUserAstronaut } from "fontawesomepro/regular"
import { faUserAlien } from "fontawesomepro/solid"
import { faUserInjured } from "fontawesomepro/duotone"

export default function SliderTwo() {
    const slideContainerRef = useRef()
    let slideNumber = 3
    let imgList = [pic01, pic02, pic03, pic02, pic01, pic03]
    const [index, updateIndex] = useState(3)


    useEffect(() => {
        const slides = Array.from(slideContainerRef.current.children)
        slides.forEach((e) => {
            e.className = "slide";
        })
        slides[(index - 1) % (slides.length)].className = "slide visited"
        slides[index % (slides.length)].className = "slide active"
        console.log(slides);


    }, [index])

    useEffect(() => {
        const slideTimeout = setTimeout(() => {
            updateIndex(index + 1)
        }, 3000)

        return function () {
            clearTimeout(slideTimeout)
        }
    }, [index])

    return (
        <div className="sliderContainer text-info">
            <div className="slideContainer" ref={slideContainerRef}>
                <View imgList={imgList} />
            </div>

        </div>


    );
}