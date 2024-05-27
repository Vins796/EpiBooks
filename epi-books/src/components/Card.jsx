import React, { useState } from "react";

function Card() {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>Numero di click: {count}</p>
            <button onClick={() => setCount(count + 1)}>Cliccami...</button>
        </>
    )
}

export default Card;