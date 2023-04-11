import React from 'react'

import { useEffect,useState } from 'react';
import Card from './Card';

export default function News(props) {
  const [fetchedData, setFetchedData] = useState([])
  
  // let apikey = '0a5be2759a233a748d2985c93f509ccd';
  // let apikey = 'd5c7a4522afe8423b6eda56bf4bd3301';
  let apikey='288eaffb3ce966710e0ef0f2a40509dd'
  let category = props.category;
  let country=props.country
  let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=${country}&max=9&apikey=${apikey}`;
  useEffect(() => {

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let articles = data.articles;
    setFetchedData(articles);
    
    
  });
}, [])
// console.log("text -> ",props.text)
const filteredCards = fetchedData.filter((element) =>
    element.title.toLowerCase().includes(props.text.toLowerCase())
  );
return (
    <div >
      <h1 className='my-0 py-2' style={{textAlign:"center",backgroundColor:`${props.nvcolor==="light"?"white":"#8d8741"}`,color:`${props.nvcolor==="light"?"black":"white"}`}}>Top-Headlines - {props.category}</h1>
        <div style={{backgroundColor:`${props.nvcolor==="light"?"white":"#8d8741"}`}} className="row">
        {
            

              filteredCards.map((element,index)=>{
                
                return   <div id='cardid' key={index} className="col-md-4 ">
                <Card nvcolor={props.nvcolor} textcolor={props.textcolor} bgcolor={props.bgcolor} title={element.title} image={element.image} url={element.url} publishedAt={element.publishedAt} description={element.description} index={index}/>
                </div>
                
              })
            
        }
        </div>
    </div>
  )
}
