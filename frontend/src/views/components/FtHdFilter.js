import Footer from "./footer"
import Header from "./header"

const FtHdFilter = ({component,fh=true})=>{
    if(fh){
        return <div>
            <Header/>
            {component}
            <Footer/>
        </div>
    }
    else{
        return component
    }
}

export default FtHdFilter