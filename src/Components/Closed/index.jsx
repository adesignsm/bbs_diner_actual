import React, { useLayoutEffect, useState } from "react";
import $ from "jquery";
import logoPink from "../../Assets/media/loading/logo_pink.png";
import logoRed from "../../Assets/media/loading/logo_red.png";

import "./index.css";

const Closed = () => {
    useLayoutEffect(() => {
        $(".logo-container").delay(500).animate({opacity: "1"}, 1000);
    }, []);

    document.onmousemove = (e) => {
        if (window.innerWidth > 690 && document.getElementById("movable-logo")) {
            let mouseX = e.clientX + window.innerWidth / 2;
            let mouseY = e.clientY - window.innerHeight / 2;
    
            document.getElementById("movable-logo").style.marginLeft = (mouseX) * 0.0009 + "rem";
            document.getElementById("movable-logo").style.marginTop = (mouseY) * 0.0009 + "rem";
        }
    }

    return (
        <>
            <div className="logo-container">
                <img className="logo" src={logoPink} />
                <img id="movable-logo" className="logo" src={logoRed} />
                <h1>Sorry we are closed at the moment</h1>
            </div>
        </>
    )
}

export default Closed;