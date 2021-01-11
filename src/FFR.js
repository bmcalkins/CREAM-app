import React,{useState,useEffect} from 'react'
import ModalWindow from './ModalWindow'

export default function FFRItem(props) {
    const [show,setShow] =useState(false)
    const [FFR, setFFR] = useState(null)

    useEffect(()=>{
        fetch('https://cloud.iexapis.com/stable/data-points/market/FEDFUNDS?token=pk_28f117b12c52431abed4e40744e528c9')
        .then(res=>res.json())
        .then(data=>{
            
            setFFR(data)
            
            
        })
    },[])

    return (
        <div 
            // style={{ width: '300px', height: '400px', margin: '20px' }}
            onClick={()=> setShow(true)}
        >
            
            <div className='shadow'>

                <h2>Federal Funds</h2>

                <h4>{FFR}%</h4>

           

            </div>
            
            {show&&<ModalWindow title='FFR' data='The fed funds rate is the interest rate banks pay for overnight borrowing in the federal funds market. The Federal Reserve uses it to influence other interest rates, such as credit cards, mortgages, and bank loans.' close={()=>setShow(false)}/>}
        </div>
    )
}