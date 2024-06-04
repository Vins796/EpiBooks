import fantasy from '../fantasy.json';
import history from '../history.json';
import horror from '../horror.json';
import AllTheBooks from './AllTheBooks';

export default function ButtonType({type, testo}) {
    return (
        <>
            {type === 'fantasy' && <AllTheBooks testo={testo} books={fantasy} />}
            {type === 'history' && <AllTheBooks testo={testo} books={history} /> }
            {type === 'horror' && <AllTheBooks testo={testo} books={horror} /> }
        </>
    )
}