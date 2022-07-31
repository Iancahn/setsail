import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'



function Hero() {
    return (
        <div>
            <div className="main">
                <div className="main-intro">
                    <p>Play Now</p>
                    <h1>Start living your life today!</h1>
                    <FontAwesomeIcon icon={faPlayCircle} size="4x" />
                </div>
            </div>
        </div>
    )
}

export default Hero;