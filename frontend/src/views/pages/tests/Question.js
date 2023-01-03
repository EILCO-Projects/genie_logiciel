import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
const Question = ({ num, onChange }) => {
    const [data, setData] = useState(
        {
            question: "C'est quoi ce truc ?",
            choices: [
                "choix 1",
                "choix 2",
                "choix 3"
            ]
        }

    );


    const handleChange = (e) => {
        var tmpData = data;
        if (e.target.name === "title") {
            tmpData.question = e.target.value
        }
        else if (e.target.name === "4") {
            if (e.target.value === "")
                tmpData.choices = tmpData.choices.filter((c,i) => i !== 3)
            else {
                if (tmpData.choices.length < 4)
                    tmpData.choices.push( e.target.value)
                else
                    tmpData.choices[parseInt(e.target.name) - 1] = e.target.value;

            }


        }
        else {
            tmpData.choices[parseInt(e.target.name) - 1] = e.target.value;
        }

        setData(tmpData)
        onChange(tmpData)
    }

    return (
        <div className='card p-3'>
            <Form onChange={handleChange}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fs-4'>Question {num}</Form.Label>
                    <Form.Control type="text" name="title" />
                </Form.Group>
                <Form.Group className=''>
                    <Form.Label className='mt-2 fs-4'>
                        Les choix
                    </Form.Label>
                    <Form.Control type="text" name="1" className='offset-1 mt-1 w-75' />
                    <Form.Control type="text" name="2" className='offset-1 mt-1 w-75' />
                    <Form.Control type="text" name="3" className='offset-1 mt-1 w-75' />
                    <Form.Control type="text" name="4" className='offset-1 mt-1 w-75' />

                </Form.Group>
            </Form>
        </div>)
}

export default Question