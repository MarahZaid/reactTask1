import style from './Hero.module.css'
import heroImg from './../assets/avataaars.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function Hero() {
    return (
        <section className={`${style.heroSection} d-flex flex-column justify-content-center align-items-center gap-5`}>
            <img src={heroImg} />
            <div className={`d-flex flex-column justify-content-center align-items-center gap-4`}>
                <h1>START BOOTSTRAB</h1>
                <div className={`${style.starWrapper} d-flex align-items-center gap-3`}>
                    <span className={style.line}></span>
                    <FontAwesomeIcon icon={faStar} color="white" size="2x" />
                    <span className={style.line}></span>
                </div>


                <h5>Graphic Artist - Web Designer - Illustrator</h5>
            </div>


        </section>

    )
}