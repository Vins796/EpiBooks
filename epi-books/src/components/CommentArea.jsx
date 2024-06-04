import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

export default function CommentArea({asin}) {
    const url = 'https://striveschool-api.herokuapp.com/api/books/';
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTczNDU2NzAsImV4cCI6MTcxODU1NTI3MH0.QvsJVXMuTEcw1P38lKHWZeQZP1l6JaA3TN38wAUntGw';

    const [recensioni, setRecensioni] = useState([]);

    useEffect(() => {
        fetch(url + asin + '/comments/', {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
            .then((response) => response.json())
            .then((data) => setRecensioni(data))
    }, [asin])

    return (
        <>  
            <CommentList recensioni={recensioni} asin={asin} setRecensioni={setRecensioni}/>
            <AddComment recensioni={recensioni} setRecensioni={setRecensioni} asin={asin}/>
        </>
    )
}