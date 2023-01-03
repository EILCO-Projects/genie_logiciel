import { useEffect, useState } from "react"
import Question from "./Question"
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
const QuestionGroup = ({ onChange }) => {
    const [list, setList] = useState([])
    const [list2, setList2] = useState([])
    const [nbQ, setNbQ] = useState(3)
    const [nbT, setNbT] = useState(0)
    const [selected, setSelected] = useState(1)
    const [selected2, setSelected2] = useState(1)
    const [data1, setData1] = useState({
        type: "questions",
        questions: []
    })



    const [data2, setData2] = useState([{
        type: "text", // text, audio, image, questions,
        text: ""
    }])

    useEffect(() => {
        var l = []

        var d = []
        for (let i = 1; i <= nbQ; i++) {
            l.push(i)
            d.push({
                question : "??",
                choices : [
                    "choix 1",
                    "choix 2",
                    "choix 3"
                ]
            },)
        }


        let td = data1
        td.questions = d
        setData1(td)
        setList(l)
    }, [nbQ])

    useEffect(() => {
        var l2 = []
        var d = []
        for (let i = 1; i <= nbT; i++) {
            l2.push(i)
            d.push({
                type: "text", // text, audio, image, questions,
                text: ""
            })
        }
        setData2(d)
        setList2(l2)
    }, [nbT])

    const handleChange = (i, d) => {
        let tmpData = data1;
        tmpData.questions[i] = d;
        setData1(tmpData)
        onChange([...data2, data1])
        console.log("jelo",d)
    }

    const handleChange2 = (i, v) => {

        let tmpData = data2;
        tmpData[i].text = v
        setData2(tmpData)
        onChange([...data2, data1])

    }

    const onNbQChange = (e) => {
        if (e.target.value !== "") {
            try {
                var n = parseInt(e.target.value)
                if (n) {
                    setNbQ(n)
                    setSelected(1)
                }

            }
            catch (e) {

            }
        }
    }
    const onNbTChange = (e) => {
        if (e.target.value !== "") {
            try {
                var n = parseInt(e.target.value)

                if (n) {

                    console.log("oo", n, parseInt("0"))
                    setNbT(n)
                    setSelected2(1)
                }
                else {
                    setNbT(0)
                    setData2([])
                    if (data1.elements.length === 0) {
                        onChange([{ type: "html", html: "Vide..." }, data1])
                    } else {
                        onChange([data1])
                    }

                }

            }
            catch (e) {

            }
        }
    }

    return (
        <div>
            <Accordion defaultActiveKey="0" flush>

                <Accordion.Item eventKey="0">
                    <Accordion.Header>Modification des questions</Accordion.Header>
                    <Accordion.Body>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Nombre de questions</span>
                            <Form.Control type="text" onChange={onNbQChange} defaultValue={3} />

                        </div>


                        <Tabs
                            id="tab-q"
                            activeKey={selected}
                            onSelect={(k) => setSelected(k)}
                            className="mb-3 mt-1"
                        >

                            {
                                list.map((q, i) => (
                                    <Tab eventKey={q} key={q} title={q}>
                                        <Question num={q} onChange={(d) => handleChange(i, d)} />
                                    </Tab>

                                ))
                            }

                        </Tabs>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Modification des textes</Accordion.Header>
                    <Accordion.Body>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Nombre de textes</span>
                            <Form.Control type="text" onChange={onNbTChange} defaultValue={0} />

                        </div>

                        <Tabs
                            id="tab-q"
                            activeKey={selected2}
                            onSelect={(k) => setSelected2(k)}
                            className="mb-3 mt-1"
                        >

                            {
                                list2.map((q, i) => (
                                    <Tab eventKey={q} key={q} title={q}>
                                        <Form.Control as="textarea" onChange={(e) => handleChange2(i, e.target.value)}></Form.Control>
                                    </Tab>

                                ))
                            }

                        </Tabs>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default QuestionGroup;