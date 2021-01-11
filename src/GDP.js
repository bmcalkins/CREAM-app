import React,{useState,useEffect} from 'react'
import ModalWindow from './ModalWindow'

export default function GDPItem(props) {
    const [show,setShow] =useState(false)
    const [GDP, setGDP] = useState(null)

    useEffect(() => {
        fetch('https://cloud.iexapis.com/stable/data-points/market/A191RL1Q225SBEA?token=pk_28f117b12c52431abed4e40744e528c9')
        .then(res=>res.json())
        .then(data=>{
            
            setGDP(data)
            
            
        })
        
    }, []) 

    return (
        <div 
            // style={{ width: '300px', height: '400px', margin: '20px' }}
            onClick={()=> setShow(true)}
        >
            
            <div className='shadow'>

                <h2>Quartely GDP</h2>

                <h4>{GDP}%</h4>

            <p></p>

            </div>
            
            {show&&<ModalWindow title='GDP' data='A robust GDP growth correlates to higher corporate earnings => generally increasing profitability on the stock market.' close={()=>setShow(false)}/>}
        </div>
    )
}

