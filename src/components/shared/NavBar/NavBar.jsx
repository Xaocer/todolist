import style from "./style.module.css";
import profile from "@assets/icons/navbar/profile.svg"
import calendar from "@assets/icons/navbar/calendar.svg"
import main from "@assets/icons/navbar/main.svg"
import logout from "@assets/icons/navbar/logout.svg"
import { Link, NavLink } from "react-router-dom";
import { Fragment } from "react";

const linksList = [
    {
        link:"/profile",
        icon: profile,
    },
    {
        link:"/calendar",
        icon: calendar,
    },
    {
        link:"/",
        icon: main,
    },
]
const NavBar = () => {
    return (
        <aside className={style.navbar}>
            <nav className={style.navigation}>
                {linksList.map(function(item,i){
                    console.log("Номер",i,item);
                    return(
                        <Fragment key={i}>
                        <NavLink to={item.link}>
                            <img src={item.icon} alt="" />
                        </NavLink>
                        </Fragment>
                        );
                    })
                }
            </nav>
            <Link to={"/login"}>
            <img src={logout} alt="" />
            </Link>
         </aside>
    );
};

export default NavBar;
