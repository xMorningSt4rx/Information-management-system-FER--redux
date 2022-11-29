import React from "react";
import { useState } from 'react'

import film from './Films';



export default function FilmsPresentation({films}) {
     console.log(films); 
     const [film, setFilm] = useState([])
    return (
      <div className="grid-container">
      {films.map((film) => ( 
        <div className="column grid-item" key={film.id}>
          <div className="card">
            <img src={film.img} />
           
            
            <p className="title">{film.title}</p>
            <p className="year" >Year: {film.year}</p>
            <p className="nation" >Nation: {film.nation}</p>
            <p>
              <button onClick={()=>{setFilm(film)}}><a href='#popup1' id='openPopUp'>Detail</a></button> <button className='button2'>Play</button>
            
            </p>
            
          </div>
        </div>
     ))}

     <div id='popup1' className='overlay'>
      <div className='popup'>
        <image src={film.img}/>
        <h2>{film.name}</h2>
        <a className='close' href='#'>&times;</a>
        <div className='content'>
          {film.info}
        </div>

      </div>

     </div>
     </div>   
  )
}
