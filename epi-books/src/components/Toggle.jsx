import React, { useState } from "react";

export default function Toggle() {
    const [isOn, setIsOn] = useState(false);
    return (
        <>
            <p>Interruttore: {isOn ? 'ON' : 'OFF'}</p>
            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? 'Spegnimi maledetto' : 'Accendimi che non ci vedo'}
            </button>
        </>
    )
}