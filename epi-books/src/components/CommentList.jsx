import SingleComment from "./SingleComment";

export default function CommentList({recensioni, asin}) {
    return (
        <>
            <ul className="text-center max-h-[200px] overflow-y-scroll">
                {recensioni.map((recensione) => (
                    <SingleComment asin={asin} recensione={recensione}/>
                ))}
            </ul>
        </>
    )
}