import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import style from "./Navbar.module.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className={style.header}>
            <p className={style.logo}>LOGO</p>
            <ul className={style.section}>
                <li><Link to="/">HOME <FontAwesomeIcon icon={faHouse} /></Link></li>
                <li>PRODUCT</li>
                <li><Link to="/services">SEVICES</Link></li>
                <li>FAQ</li>
                <li><FontAwesomeIcon icon={faCartArrowDown} /></li>
            </ul>
        </div>
    )
}
export default Navbar;