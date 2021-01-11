import React, { useState, useEffect } from 'react'
import './ticker.css'

export default function Ticker() {
  const [symbols, setSymbols] = useState([])
  const [randomSymbols, setRandomSymbols] = useState([])

  const key = '4ddb816d791c8e4a83bbcc97b363883e'

  function grabSymbols(key, list) {
    fetch(`https://api.marketstack.com/v1/eod/latest?access_key=${key}&symbols=${list.join(',')}`)
      .then(res => res.json())
      .then(data => setSymbols(data.data || []))
  }
  function grabList() {
    fetch(`https://api.marketstack.com/v1/tickers?access_key=${key}`)
      .then(res => res.json())
      .then(data => {

        let newrandomSymbols = []
        let length = data.data.length;
        for (let i = 0; i < 10; i++) {
          let random = Math.floor(Math.random() * length)
          newrandomSymbols.push(data.data[random].symbol)
        }
        setRandomSymbols(newrandomSymbols)

      })
  }

  useEffect(() => {
    grabList()
  }, [])

  useEffect(() => {
    grabSymbols(key, randomSymbols)

    let timer = setInterval(() => {
      grabSymbols(key, randomSymbols)
    }, 1000 * 60 * 10);

    return () => {
      clearInterval(timer)
    }
  }, [randomSymbols])

  return (

    <div className="tickerbox">
      <div className="title"> C<span>REAM</span> Ticker</div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between', height:'80%', width:'70%'}}>
        {symbols.map((symbol, key) =>
          <div className="symbol-price" key={key}>
            <span className='symbol'>{symbol.symbol}</span>
            <span className='price'>$ {symbol.open.toFixed(2)}</span>
          </div>
        )}
      </div>
      <div className='button-div'>
        <button onClick={() => grabSymbols(key, randomSymbols)} className='button-price'>Update Price</button>
        <button onClick={grabList} className='button-list'>New List</button>
      </div>
    </div>

  );
}
