import React, { useEffect, useState } from "react";
import "./index.css";
import $ from "jquery";

import PopUps from "../PopUps";

const BrunchMenu = () => {
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        const checkTitle = () => {
          if (document.title === "BB's Diner | Brunch Menu") {
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
            $(".brunch-menu-container").fadeOut(500);

            setTimeout(() => {
                $(".brunch-home-page-copy-content").stop().css({"display": "flex"});
                $(".brunch-home-page-copy-content").stop().animate({opacity: "1"}, 500);
            }, 500);

            e.target.classList.remove("show-nav");
        }
    }

    return (
        <>
            <div className="brunch-menu-container">
                {showPopUp === true ? <PopUps /> : null}
                <nav className="navigation">
                    <ul>
                        <li className="nav-toggle" onClick={(e) => displayToggle(e)}><h1>Return</h1></li>
                        <li><h1>BB's Silog</h1></li>
                        <li><h1>Tortang Talong</h1></li>
                        <li><h1>Marivic's French Toast (Robbie's Remix)</h1></li>
                        <li>
                            <h1>Sides</h1>
                            <ul>
                                <li>Steamed Rice</li>
                                <li>Garlic Rice</li>
                                <li>Egg</li>
                                <li>Hot Sauce</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default BrunchMenu;