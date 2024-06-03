const url = 'https://striveschool-api.herokuapp.com/api/comments/';
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTczNDU2NzAsImV4cCI6MTcxODU1NTI3MH0.QvsJVXMuTEcw1P38lKHWZeQZP1l6JaA3TN38wAUntGw';

const SingleComment = ({ recensioni, setRecensioni, asin }) => {

    const updateComment = (asin, newName) => {
        fetch(url + asin, {
          method: "PUT",
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            "Content-Type": "application/json", // Specifica il tipo di contenuto come JSON
          },
          body: JSON.stringify({ name: newName }), // Convertiamo l'oggetto aggiornato in una stringa JSON
        })
        .then((response) => response.json()) // Convertiamo la risposta in formato JSON
        .then((data) => {
            // Supponendo che 'setRecensioni' sia simile a 'setItems' nel contesto originale
            setRecensioni(recensioni.map((item) => (item.id === asin ? data : item)));
            // Azzera i campi del modulo se necessario, definisci 'setValoreInput' e 'setRate' se sono necessari
            setValoreInput('');
            setRate(0);
        });
    };

    return (
        <div>
            Qui puoi aggiungere il rendering dei commenti e l'interfaccia per aggiornare il commento
        </div>
    );
};

export default SingleComment;
