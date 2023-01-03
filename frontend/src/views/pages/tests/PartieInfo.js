import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
const PartieInfo = ({onChange }) => {
    const [data, setData] = useState({});

    const handleChange = (e) => {
        var tmpData = data;
        tmpData[e.target.name]=e.target.value
        setData(tmpData)
        onChange(tmpData)
    }

    return (
        <div className='card p-3'>
            <Form onChange={handleChange}>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label className='fs-4'>Numero</Form.Label>
                    <Form.Control type="text" name="numero" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label className='fs-4'>Descriptif</Form.Label>
                    <Form.Control as="textarea" name="directions" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label className='fs-4'>Type de partie</Form.Label>
                    <Form.Select name="type" >
                        <option value="ORAL_P1">Partie 1</option>
                        <option value="ORAL_P2">Partie 2</option>
                        <option value="ORAL_P3">Partie 3</option>
                        <option value="ORAL_P4">Partie 4</option>
                        <option value="ECRIT_P5">Partie 5</option>
                        <option value="ECRIT_P6">Partie 6</option>
                        <option value="ECRIT_P7">Partie 7</option>
                    </Form.Select>
                </Form.Group>
                
            </Form>
        </div>)
}

export default PartieInfo