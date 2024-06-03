import UpdateComments from './UpdateComments';

export default function SingleComment({recensione, asin}) {
    return (
        <>
            <li className="mb-5" key={asin}><span>{recensione.comment}</span></li>
            <button onClick={UpdateComments} className="bg-yellow-200">Modifica</button>
            <button onClick={UpdateComments} className="bg-red-500">Elimina</button>
        </>
    )
}