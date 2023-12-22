import React, { useState, useEffect } from 'react'
import "./projectTemplate.css"
import WebDesign from '../../assests/website-design.png'

const ProjectTemplate = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://127.0.0.1:8000/project-1')
            result.json().then(json => {
                // console.log(json['data']);
                setData(json.data)
            })
                .catch(error => console.error(error));
        }
        fetchData()
    }, []);

    return (
        <div className='projectTemplateDiv'>
            {/* <div style={{height:"10rem",width:"10rem",border:"1px solid white",padding:"5rem"}}>111111</div>
        <div style={{height:"10rem",width:"10rem",border:"1px solid white",padding:"5rem"}}>222222</div> */}
            {data !== [] ?
                <div >
                    {data.map((item) => {
                        //To do: Make this div relative to the outer div
                        return <div key={item.id} style={{display:"flex",justifyContent:"center"}}>
                                    <div style={{height:"20rem",width:"30rem",border:"1px solid white",padding:"5rem",whiteSpace:"nowrap",overflow: "hidden",textOverflow: "ellipsis"}}>
                                        <pre>{item.text}</pre>
                                    </div>
                                    <div style={{height:"20rem",width:"30rem",border:"1px solid white",padding:"5rem"}}>
                                        <img src={WebDesign}></img>
                                    </div>
                                </div>
                    })}
                </div> : 'Loading...'}
        </div>
    )
}

export default ProjectTemplate