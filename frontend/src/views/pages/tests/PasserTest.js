import axios from "axios"
import { useEffect, useState,useCallback, useLayoutEffect } from "react"
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'bootstrap/dist/css/bootstrap.min.css';
StylesManager.applyTheme("defaultV2");

const PasserTest = ({ userId, testId }) => {
    //test sur juste une partie
    
    const pId = 5;
    const [model,setModel] = useState()
    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        alert(results);
      }, []);

      

    useEffect (() => {
        axios.get(`http://localhost:8000/api/parties/${pId}`).then((resp) => {
            console.log(resp.data.questions.pages)
            let pages = [{
                elements: [{
                    type: "html",
                    html: "You are about to start a quiz on American history. <br>You will have 10 seconds for every question and 25 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
                },]
            }]

            let q=1

            resp.data.questions.pages.forEach(p => {

                p.elements.forEach( (e,i) => {
                    if(e.title==="Questions"){
                        for (let i = 0; i < e.elements.length; i++) {
                            e.elements[i].name = `${q}`
                            q=q+1;
                            
                        }
                    }
                });
                pages.push({elements : [p] })
            });
            
            let  m = new Model({
                maxTimeToFinish: 15 * 60,
                showTimerPanel: "top",
                showTimerPanelMode: "survey",// or page or all 
                firstPageIsStarted: true,
                startSurveyText: "Coommencer",
                pages :   pages
                
            })
            console.log("pages",pages)
            m.startTimer()
            m.onComplete.add(alertResults)
            setModel(m)
        })
    },[])
    return (
        <div className="col-md-6 offset-md-3 my-5" style={{paddingTop : "100px"}}>
           <div className="my-5"> {model && <Survey model={model}/>}</div>
        </div>
    )
}

export default PasserTest