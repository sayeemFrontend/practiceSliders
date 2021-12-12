import { useEffect, useRef, useState } from "react";
import classes from "./slider.module.css"
import pic01 from "./Asset/pic01.jpg";
import pic03 from "./Asset/pic03.jpg";
import pic02 from "./Asset/pic02.jpg";
import { newArry } from "./utils";
import SlideView from "./SlideView";


export default function Slider() {
    const sildeRef = useRef()
    let slideNumber = 3
    let imgList = [pic01, pic02, pic03, pic02, pic01, pic03]
    const [pointer, setPointer] = useState(0)
    const [indexs, updateIndexs] = useState([])
    const [show, setShow] = useState(false)

    function sliding() {
        setPointer(pointer + slideNumber)
    }
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, [2000])

    }, [pointer])

    useEffect(() => {
        updateIndexs(newArry(pointer, slideNumber, imgList.length))
        setTimeout(() => {
            setShow(false)
            sliding()
        }, 5000)
    }, [pointer])


    return (
        <div>
            <div className={classes.sliderContainer}>

                {/* <SlideView indexs={indexs} imgList={imgList} /> */}
                <div className={classes.slideContainer + " " + (show ? classes.show : classes.hide)} ref={sildeRef}>
                    {
                        indexs?.map((i) => (
                            <div key={i} className={classes.singleSlide}>
                                <img src={imgList?.[i]} alt={i} />
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>

    );
}