import React, { useEffect, useState } from "react";
import "./index.css";
import $ from "jquery";

import image1 from "../../Assets/media/cut_outs/1.png";
import image2 from "../../Assets/media/cut_outs/2.png";
import image3 from "../../Assets/media/cut_outs/3.png";
import image4 from "../../Assets/media/cut_outs/4.png";
import image5 from "../../Assets/media/cut_outs/5.png";
import image6 from "../../Assets/media/cut_outs/6.png";
import image7 from "../../Assets/media/cut_outs/7.png";
import image8 from "../../Assets/media/cut_outs/8.png";
import image9 from "../../Assets/media/cut_outs/9.png";

const DinnerMenu = () => {
    const displayToggle = (e) => {
        document.title = "BB's Diner";
        e.target.classList.add("show-nav");
        
        if (e.target.classList.contains("show-nav")) {
            $(".dinner-menu-container").fadeOut(500);

            setTimeout(() => {
                $(".home-page-copy-content").stop().css({"display": "flex"});
                $(".home-page-copy-content").stop().animate({opacity: "1"}, 500);
            }, 500);

            e.target.classList.remove("show-nav");
        }
    }

    return (
        <>
            <div className="dinner-menu-container">
                <nav className="navigation">
                    <ul>
                        <li className="nav-toggle" onClick={(e) => displayToggle(e)}><h1>Return</h1></li>
                        <li><h1>Dinner Menu Item</h1></li>
                        <li><h1>Dinner Menu Item</h1></li>
                        <li><h1>Dinner Menu Item</h1></li>
                        <li><h1>Dinner Menu Item</h1></li>
                        <li><h1>Dinner Menu Item</h1></li>
                    </ul>
                </nav>
            </div>
            <div id="popups-container">
                
            </div>
        </>
    )
}

export default DinnerMenu;