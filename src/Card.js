import React from 'react'
import DP from './Samrat_image.png'
import Socials from './Socials'
export default function Card(){
    return(
        <div className='card'>
            <img src={DP} alt="Samrat"/>
            <figcaption>Samrat Dutta Roy</figcaption>
            <hr/>
            <button>RESUME</button>
            <button>PROJECTS</button>
            <Socials/>
        </div>
    )
}