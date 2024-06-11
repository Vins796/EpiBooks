import SingleComment from "./SingleComment";

export default function CommentList({recensioni, asin, setRecensioni}) {
    return (
        <>
            <ul className="text-center max-h-[200px] overflow-y-scroll">
                {recensioni.map((recensione) => (
                    <SingleComment key={asin} recensione={recensione} recensioni={recensioni} setRecensioni={setRecensioni}/>
                ))}
            </ul>
        </>
    )
}