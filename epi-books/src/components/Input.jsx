import React, {useState} from "react";

export default function Input() {
    const [testo, setTesto] = useState('');
    return (
        <>
            <input 
                type="text" 
                value={testo} 
                onChange={(e) => setTesto(e.target.value)}
            />
            <p>Il tuo testo è: {testo}</p>
        </>
    )
}