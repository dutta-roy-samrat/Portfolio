import React from "react";

export default function Contact(){
    return(
    <div>
        <div className="phone_num">
            <h5>Call</h5>
            <p>
                +91-7002919673
            </p>
        </div>
        <div className="email">
            <h5>Write</h5>
            <a href="mailto:samratduttaroy008@gmail.com">samratduttaroy008@gmail.com</a>
        </div>
        <div className="socials">
            <h5>Follow</h5>
            <div>
                <a href="https://www.facebook.com/profile.php?id=100007717817575"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/in/samrat-dutta-roy-032a86194/"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/cheerful_lad/?hl=en"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    </div>
    )
}