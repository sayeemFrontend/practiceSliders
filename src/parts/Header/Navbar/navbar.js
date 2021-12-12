import classes from "./navbar.module.css"
import downIcon from "./../../../assets/Icon/down.svg"
import menu from "./../../../assets/Icon/menu.svg"
import Search from './../../../components/Search/search';
import dotIcon from "../../../assets/Icon/dotIcon.svg"
import ListView from "../../ListView/listView"
import { useState } from 'react';
import IconConatiner from "../IconContainer/iconContainer"

const Navbar = () => {
    const list = [{ id: 1, title: "Motor Bike" },
    { id: 2, title: "Electronics" },
    { id: 3, title: "Smart Phone" },
    { id: 4, title: "Women’s World" },
    { id: 5, title: "Men" },
    { id: 6, title: "Kid’s Zone" },
    { id: 7, title: "Sports And Outdoor" },
    { id: 8, title: "Smart Tv" },
    { id: 9, title: "Health and Beauty" },
    { id: 10, title: "Biking and Rriding" },
    { id: 11, title: "More" },
    ]
    const [categoryShow, setCategoryShow] = useState(false)
    const [menuShow, setMenuShow] = useState(false)


    return (
        <div className={classes.navbar}>
            <div className="container-fluid container-md">
                <div className="d-flex align-items-center justify-content-between">

                    <div className="position-relative">
                        <div onClick={() => setCategoryShow(!categoryShow)} className={"d-block d-md-none " + classes.menuIcon}>
                            <img className="px-2 py-3" src={menu} alt="menu" />
                        </div>
                        <div onClick={() => setCategoryShow(!categoryShow)} className={"d-none d-md-flex justify-content-evenly align-items-center pointer " + classes.category}>
                            <img src={menu} alt="menu" />
                            <h5 className="text-white">CATEGORIES</h5>
                            <img src={downIcon} alt="downIcon" />
                        </div>
                        <div className={categoryShow ? classes.listContainer : "d-none"}>
                            <ListView icon list={list} />
                        </div>
                    </div>

                    <div className={"px-3 " + classes.searchContainer}>
                        <Search icon placeholder="Search Item..." />
                    </div>
                    <div className="position-relative">
                        <div onClick={() => setMenuShow(!menuShow)} className={"d-block d-md-none " + classes.dotIcon} >
                            <img src={dotIcon} alt="dotIcon" />
                        </div>
                        <div className={menuShow ? classes.menuContainer : "d-none"}>
                            <ListView list={list} />
                        </div>
                    </div>

                    <div className="d-none d-md-block">
                        <IconConatiner />
                    </div>

                </div>
            </div>


        </div>

    );
}

export default Navbar;