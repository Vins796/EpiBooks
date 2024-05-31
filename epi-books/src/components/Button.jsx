export default function Button({setType}) {
    return (
        <div className="flex justify-center mt-[40px] gap-[20px]">
            <button className="bg-slate-300" onClick={() => setType('fantasy')}>Fantasy</button>
            <button className="bg-slate-300" onClick={() => setType('history')}>History</button>
            <button className="bg-slate-300" onClick={() => setType('horror')}>Horror</button>
        </div>
    )
}