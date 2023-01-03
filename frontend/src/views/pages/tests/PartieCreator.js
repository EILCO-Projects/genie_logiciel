
import 'bootstrap/dist/css/bootstrap.min.css';
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import {useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import QuestionGroup from './QuestionGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PartieInfo from './PartieInfo';
import axios from 'axios';
import Test from './PrintTest/Test';
import { numerotation } from './PrintTest/json';


function PartieCreator() {

    const [testJson, setTestJon] = useState({
        pages: []

    })

    const [nbPages, setnbPages] = useState(1)
    const [pagesNum, setPagesnum] = useState([1])
    const [selected, setSelected] = useState(1)
    const [infos, setInfos] = useState([])
    const [on, setOn] = useState(0)


    useEffect(() => {
        let tab = [];
        for (let i = 1; i <= nbPages; i++) {
            tab.push(i)
        }
        setPagesnum(tab)
    }, [nbPages])

    const ajouterPage = () => {

        setnbPages(nbPages + 1)
        setSelected(nbPages + 1)

        setTestJon({
            pages: [...testJson.pages, {
                elements: []
            }]
        })

        console.log("pages", selected,testJson)
    }

    const handleChange = (i, d) => {

        let tmpData = testJson
        tmpData.pages[i - 1] = {
            elements: d
        }
        setTestJon(numerotation( tmpData));
        console.log("ccccccc",testJson)
        setOn(on + 1)
    }

    const creerPartie = async ()=>{
        let pdata = infos
        pdata.numero = parseInt(pdata.numero)
        pdata.questions = testJson;
        
        //console.log(pdata)
        const {data } = await axios.post("http://localhost:8000/api/parties",pdata);
        console.log(data)
    }

    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className='col-2 m-2'>
                    <PartieInfo onChange={setInfos}/>
                    
                </div>
                <div className="col py-3">
                    <Test testjson={testJson}/>
                </div>

                <div className="col-auto col-md-4 col-xl-4 px-sm-2 px-0 bg-light">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Menu</span>
                        </a>
                    <Button variant="success" className='mt-2' onClick={ajouterPage}>Ajouter une page</Button>
                    <h4 className='mt-3'>Pages</h4>
                    <Tabs
                        id="tab-q"
                        activeKey={selected}
                        onSelect={(k) => setSelected(k)}
                        className="mb-3 mt-1"
                    >

                        {
                            pagesNum.map((p) => (
                                <Tab eventKey={p} key={p} title={p}>
                                    <QuestionGroup onChange={(d) => handleChange(p, d)} />
                                </Tab>

                            ))
                        }

                    </Tabs>
                    <Button onClick={creerPartie} className='mt-3'>Valider et créer</Button>

                </div>
            </div>

        </div>
        </div >

    )



}


export default PartieCreator;
