import { testjson } from "./PrintTest/json"
import Test from "./PrintTest/Test";
import Timer from "./PrintTest/Timer"
import Button from "react-bootstrap/Button"
import { useEffect, useState } from "react"
import axios from "axios"


const PasserTest2 = () => {
    const [duree, setDuree] = useState(0)
    const [doing, setDoing] = useState(false)

    const [test, setTest] = useState()
    const pId = 7
    axios.get(`http://localhost:8000/api/parties/${pId}`).then((resp) => {
        setTest(resp.data.questions)
    })

    useEffect(() => {
        let interval = null;

        if (doing) {
            interval = setInterval(() => {
                setDuree((duree) => duree + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [doing])

    const start = () => {
        setDoing(true)
    }

    useEffect(() => {
        if (duree === 2 * 60) {
            alert("temp ecoulé")
        }
    }, [duree])
    return <>
        {!doing && <Button className="text-center btn-success m-5 p-5 col-md-6 offset-md-3" onClick={start}>Commercer</Button>}

        {doing && <div className="col-md-8 offset-md-2">
            <div className="m-5 p-5 position-relative"  >
                <div class="position-absolute top-0 start-100 translate-middle badge rounded-circle p-4 bg-primary m-2">
                    <Timer time={duree * 1000} />
                </div>
                <Test testjson={test} />
            </div>
        </div>}</>
}

export default PasserTest2