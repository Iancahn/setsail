import React from "react";
// import images
import logo from "../img/SetSail-logo2.png"

function Navbar() {
    return (
        <div>
            <div class="header">
                <img id="logo" src={logo} />
                <ul id="navlist">
                    <li id="active"><a href="#" id="current">Go to Port</a></li>
                    <li><a href="#">The Experience</a></li>
                    <li><a href="#">Destinations</a></li>
                    <li><a href="#">Our Media</a></li>
                    <li><a href="#">Get in Touch</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;