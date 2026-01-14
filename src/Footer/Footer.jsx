import style from './Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faDribbble } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className={style.footerSection}>
            <div className="container">
                <div className={`row text-center ${style.footerContent}`}>

                    
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <h4 className={style.footerTitle}>LOCATION</h4>
                        <p className={style.footerText}>
                            2215 John Daniel Drive <br />
                            Clark, MO 65243
                        </p>
                    </div>

                    
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <h4 className={style.footerTitle}>AROUND THE WEB</h4>
                        <div className={style.socialIcons}>
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="#"><FontAwesomeIcon icon={faDribbble} /></a>
                        </div>
                    </div>

                   
                    <div className="col-lg-4">
                        <h4 className={style.footerTitle}>ABOUT FREELANCER</h4>
                        <p className={style.footerText}>
                            Freelance is a free to use, MIT licensed Bootstrap theme
                            created by <a href="#">Start Bootstrap</a>.
                        </p>
                    </div>

                </div>
            </div>

            <div className={style.endFooter}>
                Copyright © Your Website 2023
            </div>
        </footer>
    )
}
