import React from "react";
import "./index.css";
import HOMEPAGE_VIDEO_DESKTOP from "../../Assets/media/home_page/DINNER/homepage-video.mp4";
import HOMEPAGE_VIDEO_MOBILE from "../../Assets/media/home_page/DINNER/homepage-video-mobile.mp4";

import Entry from "../Entry";
import BrunchNavigation from "../BrunchNavigation";
import BrunchMenu from "../BrunchMenu";

const BrunchHome = ({props}) => {
    return (
        <>
            <div id="brunch-home-page">
                <div id="brunch-home-page-video-container">
                    <div id="video-blur-overlay"></div>
                    <video id="brunch-home-page-video-desktop" autoPlay={true} loop={true} muted>
                        <source src={HOMEPAGE_VIDEO_DESKTOP} type="video/mp4" />
                    </video>
                    <video id="brunch-home-page-video-mobile" autoPlay={true} loop={true} muted>
                        <source src={HOMEPAGE_VIDEO_MOBILE} type="video/mp4" />
                    </video>
                </div>
                <Entry />
                <BrunchNavigation props={props} />
                <BrunchMenu />
            </div>
        </>
    )
}

export default BrunchHome;