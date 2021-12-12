import classes from "./slider.module.css"
import pic01 from "./Asset/pic01.jpg";
import pic03 from "./Asset/pic03.jpg";
import pic02 from "./Asset/pic02.jpg";

const SlideView = ({ indexs, imgList }) => {
    return (
        <div className={classes.slideContainer}>
            {
                indexs?.map((i) => (
                    <div key={i} className={classes.singleSlide}>
                        <img src={imgList?.[i]} alt={i} />
                    </div>
                ))

            }
        </div>

    );
}

export default SlideView;