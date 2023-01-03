const PtText = ({text}) => {
    return <div className="card mt-2">
        <div className="card-header">{ text.title?text.title:"Text"}</div>
        <div className="card-body fs-5">
            {text.text}
        </div>
    </div>
}

export default PtText