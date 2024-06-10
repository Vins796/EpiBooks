export default function Button({setType}) {
    return (
        <div className="flex justify-center mt-[40px] gap-[20px]">
            <button className="bg-stone-800 text-white" onClick={() => setType('fantasy')}>Fantasy</button>
            <button className="bg-stone-800 text-white" onClick={() => setType('history')}>History</button>
            <button className="bg-stone-800 text-white" onClick={() => setType('horror')}>Horror</button>
        </div>
    )
}