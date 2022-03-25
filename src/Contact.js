import React from "react";

export default function Contact(){
    return(
    <div className="get_in_touch">
        <div >
            <p className="connect">Call</p>
            <p className="phone_num">
                +91-7002919673
            </p>
        </div>
        <div >
            <p className="connect">Write</p>
            <a href="mailto:samratduttaroy008@gmail.com" className="email" target="_blank">samratduttaroy008<br/>@gmail.com</a>
        </div>
        <div >
            <p className="connect follow">Follow</p>
            <div className="social_platforms">
                <a href="https://www.facebook.com/profile.php?id=100007717817575" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/in/samrat-dutta-roy-032a86194/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/cheerful_lad/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    </div>
    )
}