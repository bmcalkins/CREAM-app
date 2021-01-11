import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import './News.css'

export default function News(){
    const [news, setNews] = useState(null)
    const [filter, setFilter] = useState('top-headlines')
    const [search, setSearch] = useState('');
    function takeNews(q){
        fetch(`https://newsapi.org/v2/top-headlines?q=${q}&country=us&apiKey=9486eed2544543bc80031908e23b8807`)
        .then(res=>res.json())
        .then(data=>{
            if(data.articles.length>=5){
               setNews(data) 
            }else{
                fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=9486eed2544543bc80031908e23b8807`)
                .then(res=>res.json())
                .then(alldata=>{
                    data.articles = [...data.articles, ...alldata.articles]
                    setNews(data)
                })
            }
            
        })
    }
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9486eed2544543bc80031908e23b8807`)
        .then(res=>res.json())
        .then(data=>setNews(data))
      }, [])
    return (
        <>
            <div className="searcher">
                <input placeholder='search articles' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className='search-button' onClick={() => takeNews(search)}>Search Articles</button>
                <div>
                    {/*['top-headlines', 'everything'].map((input,key) =>
                        <React.Fragment key={key}>

                            <input
                                type='radio'
                                name='filter'
                                value={input}
                                checked={input === filter}
                                onChange={() => setFilter(input)}
                            />
                            <label>{input.split('-').join(' ')}</label>
                        </React.Fragment>
    )*/}
                </div>
            </div>
            <div className='card-container'>
                {
                    news
                        ?
                        news.articles.length
                            ?
                            news.articles.map((newsItem, key) =>
                                <NewsItem {...newsItem} key={key} />
                            )
                            :
                            <div>
                                no results {filter === 'top-headlines' ? 'try with "everything" tag' : ':('}
                            </div>
                        :
                        <div>input  first</div>
                }
            </div>
        </>
    )
}