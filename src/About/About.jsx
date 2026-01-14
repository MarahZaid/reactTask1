import style from './About.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


export default function About() {
    return (
        <section className={`${style.aboutSection}`}>
            <div className="container">
                <div className={`${style.title} text-center d-flex flex-column gap-3`}>
                    <h2>About</h2>
                    <div className={`${style.starWrapper} d-flex align-items-center justify-content-center gap-3`}>
                        <span className={style.line}></span>
                        <FontAwesomeIcon icon={faStar} color="white" size="2x" />
                        <span className={style.line}></span>
                    </div>

                </div>
                <div className={`${style.aboutContent} row row-cols-lg-2 row-cols-1 justify-content-center `}>
                    <div className="col">
                       <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col">
                        <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                    
                </div>
                <div className="d-flex justify-content-center">
                    <button className={`${style.btn} p-3 rounded-2 text-white fs-5 border-white`}>
                    <FontAwesomeIcon icon={faDownload} color="white" size="x" className='me-2'/>Free Download!</button>
                </div>
                
            </div>

        </section>
    )
}