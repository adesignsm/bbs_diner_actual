import React from "react";
import "./index.css";
import HOMEPAGE_VIDEO_DESKTOP from "../../Assets/media/home_page/DINNER/homepage-video.mp4";
import HOMEPAGE_VIDEO_MOBILE from "../../Assets/media/home_page/DINNER/homepage-video-mobile.mp4";

import Entry from "../Entry";
import Navigation from "../Navigation";
import Menu from "../Menu";

const Home = () => {
    return (
        <>
            <div id="home-page">
                <div id="home-page-video-container">
                    <div id="video-blur-overlay"></div>
                    <video id="home-page-video-desktop" autoPlay={true} loop={true} muted>
                        <source src={HOMEPAGE_VIDEO_DESKTOP} type="video/mp4" />
                    </video>
                    <video id="home-page-video-mobile" autoPlay={true} loop={true} muted>
                        <source src={HOMEPAGE_VIDEO_MOBILE} type="video/mp4" />
                    </video>
                </div>
                <Entry />
                <Navigation />
                <Menu />
            </div>
        </>
    )
}

export default Home;