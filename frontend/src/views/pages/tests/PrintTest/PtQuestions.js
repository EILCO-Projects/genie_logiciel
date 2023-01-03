import PtQuestion from "./PtQuestion"

const PtQuestions = ({questions}) => {
    return <div className="card my-2">
        <div className="card-header">Question(s)</div>
        <div className="card-body">
           { questions.questions.map((q,i)=><PtQuestion key={i} question={q}/>)}
        </div>
    </div>
}

export default PtQuestions