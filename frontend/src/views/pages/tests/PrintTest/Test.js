import PtPage from "./PtPage"
import PtQuestion from "./PtQuestion"
import Button from "react-bootstrap/Button"
import { useEffect, useState } from "react"




const Test = ({ testjson }) => {
    const [page, setPage] = useState(0)
    const [showPrevious, setSp] = useState(false)
    const [showNext, setSn] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {

        if (page > 0) {
            setSp(true)
        }
        else {
            setSp(false)
        }

        if (page < testjson.pages.length - 1) {
            setSn(true)
        }
        else {
            setSn(false)
        }
    }, [page,testjson])

    const previous = () => {
        setPage(page - 1)
    }

    const next = () => {
        setPage(page + 1)
    }

    const complete = () => {
        console.log(data)
    }


    const handleChange = (e) => {
        let tmpData = data
        tmpData[e.target.name] = e.target.value
        setData(tmpData)
    }




    return <div className="m-5 p-5"  >
        

        <div onChange={handleChange}>
            {
                testjson.pages.map((p, i) => {
                    return <div hidden={page !== i} key={i}>
                        <PtPage page={p} total={testjson.pages.length} />
                    </div>
                })
            }

        </div>
       
        <div className="my-3">
            {showPrevious && <Button className="float-start" onClick={previous}>{"< "}Previous</Button>}
            {showNext && <Button className="float-end" onClick={next}>Next {" >"}</Button>}
            {!showNext && <Button className="float-end btn-success" onClick={complete}>Complete</Button>}
        </div>
    </div>

}

export default Test