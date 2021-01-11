import React,{useState,useEffect} from 'react'
import ModalWindow from './ModalWindow'

export default function GDPItem(props) {
    const [show,setShow] =useState(false)
    const [rProb, setRecProb] = useState(null)

    useEffect(()=>{
        fetch('https://cloud.iexapis.com/stable/data-points/market/RECPROUSM156N?token=pk_28f117b12c52431abed4e40744e528c9')
        .then(res=>res.json())
        .then(data=>{
            setRecProb(data)
        })
    },[])

    return (
        <div 
            // style={{ width: '300px', height: '400px', margin: '20px' }}
            onClick={()=> setShow(true)}
        >
            
            <div className='shadow'>

                <h2>Recession Prob</h2>

                <h4>{rProb}%</h4>

            

            </div>
            
            {show&&<ModalWindow title='Recession Probability' data='recession probabilities for the United States are obtained from a dynamic-factor markov-switching model applied to four monthly coincident variables: non-farm payroll employment, the index of industrial production, real personal income excluding transfer payments, and real manufacturing and trade sales' close={()=>setShow(false)}/>}
        </div>
    )
}
