import React, { useState } from 'react'
import GDP from './GDP';
import RecessProb from './RecessProb'
import News from './News'
import FFR from './FFR'
import Ticker from './Ticker'

import './Dashboard.css'

export default function Dashboard({ data, setData }) {
    let [filtered, setFiltered] = useState(data)


    return (
        <div style={{display:'flex', justifyContent:'space-around', position:'relative'}}>
            <div className='dashboard-container'>
                <h2 className='dashboard-title'>C<span>REAM</span></h2>
                <div className='dashboard-img'>
                </div>
                <h4 className='macro-heading'>Macro <span>Data</span></h4>
                <div id='micro-data'>
                    <GDP />
                    <FFR />
                    <RecessProb />
                </div>
                <News />
            </div>
            <Ticker />
            
        </div>
    )
}
