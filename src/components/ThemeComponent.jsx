"use client"
import React, { useEffect, useState } from "react";
import {useTheme} from "next-themes";
import { MoonIcon, SunIcon } from "./Icons";
const ThemeComponent = () => {
    const { theme, setTheme } = useTheme("light");
    const [mount, setMount] = useState(false)
    useEffect(() => {
        setMount(!mount);
        
    }, [])
    if (!mount) {
        return null
    }
    return <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme==="dark"?<MoonIcon/>:<SunIcon/>}
    </button>;
};

export default ThemeComponent;
