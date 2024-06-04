import { useState } from "react"

export default function AddComment({recensioni, setRecensioni, asin}) {

    const url = 'https://striveschool-api.herokuapp.com/api/comments/';
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTczNDU2NzAsImV4cCI6MTcxODU1NTI3MH0.QvsJVXMuTEcw1P38lKHWZeQZP1l6JaA3TN38wAUntGw';

    const [valoreInput, setValoreInput] = useState('');
    const [rate, setRate] = useState(0);
    const newComment = {comment: valoreInput, rate: rate, elementId: asin};

    function createComment(e) {
        e.preventDefault();
        console.log(newComment);

        fetch(url, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
           })
           .then((response) => response.json())
           .then((data) => {
               setRecensioni([...recensioni, data])
               setValoreInput('');
               setRate(0)
           })
           .catch((error) =>
               console.error("Errore", error)
            )
    }

    return (
        <form className="flex flex-col gap-y-4 items-center justify-center mb-5">
            <input
                placeholder="Scrivi recensione..."
                type="text"
                value={valoreInput}
                onChange={(e) => setValoreInput(e.target.value)}
            ></input>
            <select value={rate} name="valutazione" onChange={(e) => setRate(parseInt(e.target.value))}>
                <option value={0}>Select rate</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button className="bg-slate-200 w-full" onClick={createComment}>Crea</button>
        </form>
    )
}