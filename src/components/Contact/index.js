import React from "react";
import styles from './styles.module.css'
export default function Contact(){
    return(
    <div className={styles.get_in_touch}>
        <div className={styles.contacts}>
            <p className={styles.connect}>Call</p>
            <p className={styles.phone_num}>
                +91-7002919673
            </p>
        </div>
        <div className={styles.contacts}>
            <p className={styles.connect}>Write</p>
            <a href="mailto:samratduttaroy008@gmail.com" className={styles.email} target="_blank">samratduttaroy008<br className={styles.break}/>@gmail.com</a>
        </div>
        <div className={styles.contacts}>
            <p className={`${styles.connect} ${styles.follow}`}>Follow</p>
            <div className={styles.social}>
                <a href="https://www.facebook.com/profile.php?id=100007717817575" target="_blank" className={styles.socialLogo}><i className={` fa-brands fa-facebook-f`}></i></a>
                <a href="https://www.linkedin.com/in/samrat-dutta-roy-032a86194/" target="_blank" className={styles.socialLogo}><i className={` fa-brands fa-linkedin-in`}></i></a>
                <a href="https://www.instagram.com/cheerful_lad/" target="_blank" className={styles.socialLogo}><i className={` fa-brands fa-instagram`}></i></a>
            </div>
        </div>
    </div>
    )
}