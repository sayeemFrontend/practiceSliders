import classes from "./menuList.module.css"
const MenuList = ({ menuList, activeId, onClicked }) => {
    return (
        <div className={"d-flex align-items-center justify-content-between " + classes.menuList}>
            {menuList?.map((li) => (
                <li key={li.id} onClick={() => onClicked(li.id)} className={li.id === activeId ? classes.activeStyle : ""}>{li.title}</li>
            ))}
        </div>
    );
}

export default MenuList;