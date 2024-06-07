'use client'
import { createContext, useState } from "react";
export const TimeContext = createContext();

export function useTime() {
    return useContext(TimeContext);
}

export function TimeContextProvider({
    children,
    value
}) {
    const [ timeData, setTimeData ] = useState(value);
    console.log(timeData);
    const updateData = (newData) => setTimeData(newData);
    return (
        <TimeContext.Provider value={{timeData, updateData}}>{children}</TimeContext.Provider>
    );
}