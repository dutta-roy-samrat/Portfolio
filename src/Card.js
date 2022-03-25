import React from 'react'
import DP from './Samrat_image.png'
import Socials from './Socials'
export default function Card(){
    return(
        <div className='card'>
            <img src={DP} alt="Samrat"/>
            <figcaption className='name profile_name'>Samrat Dutta Roy</figcaption>
            <hr/>
            <div className="btn">
                <button className="resume_btn">RESUME</button>
                <button className="projects_btn">PROJECTS</button>
            </div>
            <Socials/>
        </div>
    )
}