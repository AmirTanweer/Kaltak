import React from 'react'

export default function Card(props) {
  return (
    <div  className='my-3 mx-3'>
       <div style={{backgroundColor:`${props.nvcolor==="light"?"white":"#2f803d"}`}} className="card mx-4" >
  <img style={{height:"300px"}} src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body" >
    <h5 name='title-text' className={`card-title text-${props.nvcolor==="light"?"dark":"light"}`}>{props.title.slice(0,100)}...</h5>
    <p name='description-text' className={`card-text text-${props.nvcolor==="light"?"dark":"light"}`}>{props.description.slice(0,200)}...</p>
    <a style={{ margin: "0px 177px 0px 0px"}} target="_blank" rel="noopener noreferrer" href={props.url} className="btn btn-primary ">Read More</a>
    <p style={{display:"inline"}}  className={`my-2 text-${props.nvcolor==="light"?"dark":"light"}`}>publishedAt<small>{props.publishedAt}</small></p>
    <p style={{display:"inline",float:"right"}} >{props.index+1}</p>
  </div>
</div>
    </div>
  )
}
