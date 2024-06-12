import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import { CircularProgress } from "@mui/material";

export default function CommentArea({asin}) {
    const url = 'https://striveschool-api.herokuapp.com/api/books/';
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTczNDU2NzAsImV4cCI6MTcxODU1NTI3MH0.QvsJVXMuTEcw1P38lKHWZeQZP1l6JaA3TN38wAUntGw';

    const [recensioni, setRecensioni] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
     
        fetch(url + asin + '/comments/', {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setRecensioni(data);
                setIsLoading(false)
            })            
    }, [asin])

    return (
        <>
            {
                asin && <div className='flex flex-col'>
                <AddComment recensioni={recensioni} setRecensioni={setRecensioni} asin={asin}/>
                {isLoading && <CircularProgress />}
                <CommentList recensioni={recensioni} asin={asin} setRecensioni={setRecensioni}/>
                </div>
            }
        </>
    )
}