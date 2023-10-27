import React, { useEffect, useState } from "react";
import "./index.css";
import $ from "jquery";

import PopUps from "../PopUps";

const DinnerMenu = () => {
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        const checkTitle = () => {
          if (document.title === "BB's Diner | Dinner Menu") {
            setShowPopUp(true);
            clearInterval(intervalId);
          } else {
            setShowPopUp(false);
          }
        };
    
        const intervalId = setInterval(checkTitle, 1000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);
    

    const displayToggle = (e) => {
        document.title = "BB's Diner";
        e.target.classList.add("show-nav");
        
        if (e.target.classList.contains("show-nav")) {
            $(".dinner-menu-container").fadeOut(500);

            setTimeout(() => {
                $(".dinner-home-page-copy-content").stop().css({"display": "flex"});
                $(".dinner-home-page-copy-content").stop().animate({opacity: "1"}, 500);
            }, 500);

            e.target.classList.remove("show-nav");
        }
    }

    return (
        <>
            <div className="dinner-menu-container">
                {showPopUp === true ? <PopUps /> : null}
                <nav className="navigation">
                    <ul>
                        <li className="nav-toggle" onClick={(e) => displayToggle(e)}><h1>Return</h1></li>
                        <li><h1>Ahi Tuna Kinilaw</h1></li>
                        <li><h1>Pancit Canton</h1></li>
                        <li><h1>Adobo Fried Chicken</h1></li>
                        <li><h1>Filipino Spaghetti</h1></li>
                        <li><h1>Pork Sinigang</h1></li>
                        <li><h1>Ginataan</h1></li>
                        <li><h1>Pork Coppa Steak</h1></li>
                        <li><h1>Steamed Rice</h1></li>
                        <li><h1>Calamansi Pie</h1></li>
                        <li><h1>Pork Sinigang</h1></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default DinnerMenu;