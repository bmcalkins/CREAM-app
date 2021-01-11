import React,{useState} from 'react'
import './NewsItem.css'

export default function NewsItem(props) {
    const [show,setShow] =useState(false)
    return (
        <div className='newsitem' 
            
            // onClick={()=>setShow(true)}
        >
            <a href={props.url}>
                <div id='news-img'>
                <img 
                    alt={props.title} 
                    src={props.urlToImage} 
                /></div>
                <div><p id='date'>{new Date(props.publishedAt).toLocaleString()}</p></div>
                <div id='title'><p>{props.title}</p></div>
            </a>
            {/* {show&&<ModalWindow {...props} close={()=>setShow(false)}/>} */}
        </div>
    )
}

function ModalWindow({content,url,close,title,urlToImage,publishedAt,description}){
    return(
        <div style={{overflow: 'hidden',backgroundColor:'rgba(0,0,0,0.8)',position:'fixed',top:0, left:0, width: '100%',height:'100vh', display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <div style={{position: 'relative', width: '70%', padding:'20px', backgroundColor:'white'}}>
                <h4>{title}</h4>
                <div style={{color:'gray'}}>{new Date(publishedAt).toLocaleString()}</div>
                <p>{description}</p>
                <img 
                    alt={title}
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
                    src={urlToImage} 
                />
                <p>
                    <a href={url}>{content}</a>
                </p>
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