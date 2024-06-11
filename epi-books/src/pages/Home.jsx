import Welcome from '../components/Welcome';
import Button from '../components/Button';
import ButtonType from '../components/ButtonType';


export default function Home({ type, setType, testo}) {
    return (
        <>
            <Welcome />
            <Button setType={setType} />
            <ButtonType type={type} testo={testo}/>
        </>
    )
}