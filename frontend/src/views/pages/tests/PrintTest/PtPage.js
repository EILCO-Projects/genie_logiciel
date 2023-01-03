import PtQuestions from "./PtQuestions"
import PtText from "./PtText"

const PtPage = ({page,total}) => {
    return <div className="card">
        <div className="card-header">Page {page.numero}/{total}</div>
        <div className="card-body">
            
            {page.elements.map((elm,i)=>{
                if(elm.type==="text"){
                    return <PtText key={i} text={elm}/>
                }
                else if(elm.type==="questions"){
                    return <PtQuestions key={i} questions={elm}/>
                }
            })}
           
           
        </div>
    </div>
}

export default PtPage