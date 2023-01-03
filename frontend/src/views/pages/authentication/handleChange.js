const handleChange = (event,data,setData)=>{
    let tmpdata = data;
    tmpdata[event.target.name] = event.target.value;
    setData(tmpdata)
}

export default handleChange;