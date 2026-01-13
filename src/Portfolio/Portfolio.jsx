import style from './Portfolio.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Img1 from './../assets/cabin.png';
import Img2 from './../assets/cake.png';
import Img3 from './../assets/circus.png';
import Img4 from './../assets/game.png';
import Img5 from './../assets/safe.png';
import Img6 from './../assets/submarine.png';

export default function Portfolio() {
    return (
        <section className={`${style.portfolioSection}`}>
            <div className="container">
                <div className={`${style.title} text-center d-flex flex-column gap-3`}>
                    <h2>Portfolio</h2>
                    <div className={`${style.starWrapper} d-flex align-items-center justify-content-center gap-3`}>
                        <span className={style.line}></span>
                        <FontAwesomeIcon icon={faStar} color="#2c3e50" size="2x" />
                        <span className={style.line}></span>
                    </div>

                </div>
                <div className={`${style.portfolioContent} row row-cols-lg-3 g-4 pt-4 gy-5 row-cols-1 row-cols-md-2 justify-content-center align-items-center`}>
                    <div className="col">
                        <img src={Img1} alt="Cabin" />
                    </div>
                    <div className="col">
                        <img src={Img2} alt="Cake" />
                    </div>
                    <div className="col">
                        <img src={Img3} alt="Circus" />
                    </div>
                    <div className="col">
                        <img src={Img4} alt="Game" />
                    </div>
                    <div className="col">
                        <img src={Img5} alt="Safe" />
                    </div>
                    <div className="col">
                        <img src={Img6} alt="Submarine" />
                    </div>
                </div>

            </div>


        </section>

    )
}