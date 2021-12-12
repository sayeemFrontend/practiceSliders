import classes from "./listView.module.css"
import arrow from "./../../assets/Icon/rarrow.svg"
import arrow2 from "../../assets/Icon/arrow2.svg"
import { useRef } from 'react';

const ListView = ({ list, icon, show }) => {
    const listRef = useRef()

    // window.addEventListener("click", (e) => {
    //     if (listRef.current && !e.target.contains(listRef.current)) {
    //         show(false)

    //     }
    // })

    return (
        <div ref={listRef} className={classes.listView}>
            {
                list?.map((li) => (
                    <ul key={li.id}>
                        <li>{li.title}</li>
                        <img className={icon ? classes.arrow1 : "d-none"} src={arrow} alt="arrow1" />
                        <img className={icon ? classes.arrow2 : "d-none"} src={arrow2} alt="arrow2" />
                    </ul>
                ))
            }
        </div>
    );
}

export default ListView;