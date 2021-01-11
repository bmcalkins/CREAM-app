import React from 'react'

export default function ModalWindow({close,data,title}){
    return(
        <div style={{overflow: 'hidden',backgroundColor:'rgba(0,0,0,0.8)',position:'fixed',top:0, left:0, width: '100%',height:'100vh', display: 'flex', justifyContent:'center', alignItems:'center', zIndex:2}}>
            <div style={{color:'black',position: 'relative', width: '70%', padding:'20px', backgroundColor:'white'}}>
                <h4>{title}</h4>
                
                <p>{data}</p>
                
                <div 
                    style={{display: 'flex', justifyContent:'center', alignItems:'center', color:'white',width:'20px', height:'20px', backgroundColor:'red',position:'absolute', top:'20px', right:'20px'}} 
                    onClick={e=>{
                        e.stopPropagation()
                        close()
                    }}
                >
                    x
                </div>
            </div>
            
        </div>
    )
}