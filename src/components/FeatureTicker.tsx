import React from "react";
import activityLogo from "../../public/icons/activity-learning.png";
import appLogo from "../../public/icons/app-to-track-learning.png";
import cctvLogo from "../../public/icons/cctv.png";
import digitalLogo from "../../public/icons/digital-class.png";
import libraryLogo from "../../public/icons/library-activity.png";
import skillsLogo from "../../public/icons/motor-skills.png";
import musicLogo from "../../public/icons/music-dance.png";
import craftLogo from "../../public/icons/paper-crafts.png";
import vanLogo from "../../public/icons/school-van.png";
import Image from "next/image";

const FeatureTicker = () => {
    return (
        <>
            <div className=" py-8 bg-white w-full m-0">
                <div className="">
                    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                        <div className="flex gap-12 flex-none">
                            <Image className="feature-ticker-image" loading="lazy" src={activityLogo} alt="Activity logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={appLogo} alt="App logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={cctvLogo} alt="CCTV logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={digitalLogo} alt="Digital logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={libraryLogo} alt="Library logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={skillsLogo} alt="Skills logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={musicLogo} alt="Music logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={craftLogo} alt="Crafts logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={vanLogo} alt="Van logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={activityLogo} alt="Activity logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={appLogo} alt="App logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={cctvLogo} alt="CCTV logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={digitalLogo} alt="Digital logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={libraryLogo} alt="Library logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={skillsLogo} alt="Skills logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={musicLogo} alt="Music logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={craftLogo} alt="Crafts logo" />
                            <Image className="feature-ticker-image" loading="lazy" src={vanLogo} alt="Van logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureTicker;
