import React, { useEffect, useState } from "react";
import "./root.css";

import Home from "./Components/Home";
import Loading from "./Components/Loading";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);

    return (
        <>
            <main>
                {loading ? <Loading /> : null}
                <Home />
            </main>
        </>
    )
}

export default App;