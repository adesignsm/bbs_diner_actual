import React, { useEffect, useState } from "react";
import "./root.css";

import DinnerHome from "./Components/DinnerHome";
import BrunchHome from "./Components/BrunchHome";
// import Closed from "./Components/Closed";

const App = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentDay, setCurrentDay] = useState(currentTime.getDay());
    const [isBrunchTime, setIsBrunchTime] = useState(null);
    const [isDinnerTime, setIsDinnerTime] = useState(null);
    const [render, setRender] = useState('')

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);
            setCurrentDay(now.getDay());
        }, 60000);

        setIsDinnerTime((currentDay === 0 || currentDay === 6) && currentTime.getHours() >= 11 && currentTime.getHours() < 16);
        setIsBrunchTime((currentDay >= 4 && currentDay <= 6) && currentTime.getHours() >= 18 && currentTime.getHours() < 22);
        
        if (isBrunchTime) {
            setRender('brunch');
        } else if (isDinnerTime) {
            setRender('dinner');
        } else {
            setRender('dinner');
        }
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    
    return (
        <>
            <main>
                {
                    isBrunchTime ? <BrunchHome props={render}/> : <DinnerHome props={render}/>
                }
            </main>
        </>
    )
}

export default App;