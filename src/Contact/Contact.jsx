import style from './Contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Contact(){
    return (
        <section className={`${style.contactSection}`}>
            <div className="container">
                <div className={`${style.title} text-center d-flex flex-column gap-3`}>
                    <h2>Contact Me</h2>
                    <div className={`${style.starWrapper} d-flex align-items-center justify-content-center gap-3`}>
                        <span className={style.line}></span>
                        <FontAwesomeIcon icon={faStar} color="#2c3e50" size="2x" />
                        <span className={style.line}></span>
                    </div>

                </div>
                <form>
                    <div className={`${style.input}`}>
                        <input type='text' placeholder='Full name'></input>
                    </div>
                    <div className={`${style.input}`}>
                        <input type='email' placeholder='Email address'></input>
                    </div>
                    <div className={`${style.input}`}>
                        <input type='text' placeholder='Phone number'></input>
                    </div>
                    <div className={`${style.input}`}>
                        <textarea placeholder='Message' rows="5">

                        </textarea>
                    </div>
                    <button type='submit' className='text-white p-3 fs-5 border-0 rounded-3 '>Send</button>

                </form>
            </div>
            
        </section>
    )
}