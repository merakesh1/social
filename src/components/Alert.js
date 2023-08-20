import React, { useEffect } from 'react'

const Alert = (props) => {
    const {message,color,v}=props.val;
    useEffect(()=>{
        if(v==='visible'){
            setTimeout(()=>{
                props.setVal({...props.val,v:"hidden"});
            },4000)
        }
    },[v,props])
    return (
        <>
           <div className='container' style={{background:color,height:"40px",width:"450px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px",color:"white",marginTop:"20px",visibility:v,boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'}}>
                {message}
           </div>
        </>
    )
}

export default Alert
