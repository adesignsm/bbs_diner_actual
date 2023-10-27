import React, { useState } from "react";
import "./index.css";
import $ from "jquery";

import Loading from "../Loading";

const Navigation = () => {
    const [loading, setLoading] = useState(false);

    const displayToggle = (e) => {
        document.title = "BB's Diner | Dinner Menu";
        e.target.classList.add("hide-nav");

        setLoading(true);
        
        if (e.target.classList.contains("hide-nav")) {
            $(".home-page-copy-content").fadeOut(100, () => {
                setLoading(false);
                $(".dinner-menu-container").css({ display: "flex" });
                $(".dinner-menu-container").animate({ opacity: "1" }, 500);
            });
            e.target.classList.remove("hide-nav");
        }
    }

    return (
        <>
            <div className="home-page-copy-content">
                <nav className="navigation">
                    <ul>
                        <li>
                            <h1>Reservations</h1>
                            <div 
                                id="Tock_widget_container" 
                                data-tock-display-mode="Inline" 
                                data-tock-color-mode="White" 
                                data-tock-locale="en-ca" 
                                data-tock-timezone="America/Toronto">
                            </div>
                        </li>
                        <li className="nav-toggle" onClick={(e) => displayToggle(e)}><h1>Dinner Menu</h1></li>
                    </ul>
                </nav>
                <article className="location-information">
                    <ul>
                        <li><h2>Thursday - Saturday 6:00pm till late</h2></li>
                        <li>
                            <a href="https://www.google.com/maps/place/5+Brock+Ave,+Toronto,+ON+M6K+2K6/@43.6415977,-79.434818,17z/data=!3m1!4b1!4m6!3m5!1s0x882b35ac8aa3f51d:0x2543cf6c8eb6e232!8m2!3d43.6415938!4d-79.4322431!16s%2Fg%2F11csmpj__s">
                                <h2> 5 Brock Avenue </h2>
                                <h2> Toronto, ON M6K 2K6 </h2>
                            </a>
                        </li>
                    </ul>
                </article>
                <article className="contact-information">
                    <ul>
                        <li>
                            <a href="mailto:info@bbs.restaurant">
                                <h3> info@bbs.restaurant </h3>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/bbs.bbs.bbs.bbs.bbs">
                                <h3> @bbs.bbs.bbs.bbs.bbs </h3>
                            </a>
                        </li>
                        <li>
                            <a href="tel:416-668-2023">
                                <h3> 416-668-2023 </h3>
                            </a>
                        </li>
                    </ul>
                </article>
            </div>
            {loading === true ? <Loading /> : null}
        </>
    )
}

export default Navigation;