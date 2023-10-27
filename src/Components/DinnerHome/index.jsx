import React from "react";
import "./index.css";
import HOMEPAGE_VIDEO_DESKTOP from "../../Assets/media/home_page/DINNER/homepage-video.mp4";
import HOMEPAGE_VIDEO_MOBILE from "../../Assets/media/home_page/DINNER/homepage-video-mobile.mp4";

import Entry from "../Entry";
import DinnerNavigation from "../DinnerNavigation";
import DinnerMenu from "../DinnerMenu";

const DinnerHome = ({props}) => {
    return (
        <>
            <div id="dinner-home-page">
                <div id="dinner-home-page-video-container">
                    <div id="video-blur-overlay"></div>
                    <video id="dinner-home-page-video-desktop" autoPlay={true} loop={true} muted>
                        <source src={HOMEPAGE_VIDEO_DESKTOP} type="video/mp4" />
                    </video>
                    <video id="dinner-home-page-video-mobile" autoPlay={true} loop={true} muted>
                        <source src={HOMEPAGE_VIDEO_MOBILE} type="video/mp4" />
                    </video>
                </div>
                <Entry />
                <DinnerNavigation props={props}/>
                <DinnerMenu />
            </div>
        </>
    )
}

export default DinnerHome;