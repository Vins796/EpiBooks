import fantasy from '../fantasy.json';
import history from '../history.json';
import horror from '../horror.json';
import AllTheBooks from './AllTheBooks';

export default function ButtonType({type}) {
    return (
        <>
            {type === 'fantasy' && <AllTheBooks books={fantasy} />}
            {type === 'history' && <AllTheBooks books={history} /> }
            {type === 'horror' && <AllTheBooks books={horror} /> }
        </>
    )
}