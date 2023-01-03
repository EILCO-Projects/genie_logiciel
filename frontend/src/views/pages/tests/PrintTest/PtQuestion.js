import Form from "react-bootstrap/Form"
const index = ["A","B","C","D","E"]

const PtQuestion = ({question})=>{
    
    return <Form.Group className="my-4 fs-5">
        <Form.Label><strong>{question.numero}- </strong> {question.question}</Form.Label>
        {question.choices.map((ch,i)=><Form.Check type="radio" label={`${index[i]}) ${ch}`} name={question.numero} value={index[i]} />)}
    </Form.Group>
}

export default PtQuestion