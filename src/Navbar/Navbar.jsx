import style from './Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
    return (
        <nav className={`${style.nav} p-lg-4 pt-4 pb-4`}>
            <div className="container-sm">
                <div className={`row justify-content-between ${style.colFlex}`}>
                    <div className="site-Name col-lg-4 col-md-4 col-sm-5 col-8">
                        <h2 className={`fw-bold text-white mt-1 ${style.titleSize}`}>START BOOTSTRAP</h2>
                    </div>
                    <div className="menu col-4 d-none d-lg-block">
                        <ul className={`list-unstyled gap-5 fw-bold pt-2 ${style.menuList}`}>
                            <li><a href="#">PORTFOLIO</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">CONTACT</a></li>
                        </ul>
                    </div>

                    <div className={` col-4 d-flex d-lg-none justify-content-end ${style.menuBtn}`}>
                        <button className="rounded-2 p-2">
                            <span className="text-white me-1 fw-light">MENU</span>
                            <FontAwesomeIcon icon={faBars} color="white" />
                        </button>
                    </div>



                </div>
            </div>

        </nav>


    )
}