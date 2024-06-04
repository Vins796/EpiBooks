export default function SingleComment({recensione, recensioni, setRecensioni}) {

    const url = 'https://striveschool-api.herokuapp.com/api/comments/';
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTczNDU2NzAsImV4cCI6MTcxODU1NTI3MH0.QvsJVXMuTEcw1P38lKHWZeQZP1l6JaA3TN38wAUntGw';

    const updateComments = (id, newComment) => {
        // PUT all'API per aggiornare l'elemento con il nuovo nome
        fetch(`${url}${id}`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                "Content-Type": "application/json", // Specifica il tipo di contenuto come JSON
            },
            body: JSON.stringify({ comment: newComment }), // Convertiamo l'oggetto aggiornato in una stringa JSON
        })
            .then((response) => response.json()) // Convertiamo la risposta in formato JSON
            .then((data) =>
                setRecensioni(recensioni.map((recensione) => (recensione._id === id ? data : recensione)))
            ); // Aggiorniamo la lista degli elementi con quello aggiornato
    };

    const deleteComments = (id) => {
        // DELETE all'API per rimuovere l'elemento con l'id specificato
        fetch(`${url}${id}`, {
          method: "DELETE",
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            "Content-Type": "application/json", // Specifica il tipo di contenuto come JSON
        },
        }).then(() => setRecensioni(recensioni.filter((recensione) => recensione._id !== id))); // Aggiorniamo la lista degli elementi rimuovendo quello cancellato
    };
    

    return (
        <>
            <li className="mb-5" key={recensione._id}><span>{recensione.comment}</span></li>
            <button className="bg-yellow-200" onClick={() => updateComments(recensione._id, prompt("Modifica il commento:", recensione.comment))}>Modifica</button>
            <button className="bg-red-500" onClick={() => deleteComments(recensione._id)}>Elimina</button>
        </>
    )
}