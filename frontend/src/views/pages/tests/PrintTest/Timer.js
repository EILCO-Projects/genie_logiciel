
export default function Timer({time}) {
    return (
        <div className="timer fs-4">
            <span className="">
                {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
            </span>
            <span className="">
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="">
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            </span>
            {/* <span className="">
                {("0" + ((time / 10) % 100)).slice(-2)}
            </span> */}
        </div>
    );
}