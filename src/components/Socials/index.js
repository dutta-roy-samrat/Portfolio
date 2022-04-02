import React from "react";
import styles from './styles.module.css'
export default function Socials(){
    return(
    <div className={styles.social}>
        <a href="https://www.facebook.com/profile.php?id=100007717817575" target="_blank"><i className={`${styles.socialLogo} fa-brands fa-facebook-f`}></i></a>
        <a href="https://www.linkedin.com/in/samrat-dutta-roy-032a86194/" target="_blank"><i className={`${styles.socialLogo} fa-brands fa-linkedin-in`}></i></a>
        <a href="https://www.instagram.com/cheerful_lad/" target="_blank"><i className={`${styles.socialLogo} fa-brands fa-instagram`}></i></a>

    </div>
    )
}