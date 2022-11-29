import React from "react";
import { useState } from "react";

import film from "./Films";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";


import { Icon, CardTitle, Row, Col, Card, Container, Pagination } from 'react-materialize'

export default function FilmsPresentation({ films }) {
  
  console.log(films);
  const [film, setFilm] = useState([]);
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    
    // <div
    //   className="grid-container"
    //   style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    // >
    //   {films.map((film) => (
    //     <div className="column grid-item" key={film.id}>
    //       <div className="card">
    //         <img src={film.img} />

    //         <p className="title">{film.title}</p>
    //         <p className="year">
    //           Year: {film.year} - Nation: {film.nation}
    //         </p>

    //         <p>
    //           <li>
    //             <Link to={`detail/${film.id}`}>
    //               {/* <button
    //                 onClick={() => {
    //                   setFilm(film);
    //                 }}
    //               >
    //                 <a href="#popup1" id="openPopUp">
    //                   Detail
    //                 </a>
    //               </button>{" "} */}
    //               <button>Detail</button>
    //             </Link>
    //           </li>


    //           <button className="button2">Play</button>
    //         </p>
    //       </div>
    //     </div>
    //   ))}

    //   <div id="popup1" className="overlay">
    //     <div className="popup">
    //       <img src={film.img} />

    //       <h2>{film.name}</h2>

    //       <a className="close" href="#">
    //         &times;
    //       </a>
    //       <div className="content">{film.info}</div>
    //     </div>
    //   </div>
    // </div>

    <Container>
		<Row>
    {films.map((film) => (
      <Col m={4} s={12}>
     
      <Card className="film-item"
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={film.img} reveal waves="light"/>}
      reveal={<p>{film.info}</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title={film.name}
      >
         <p>
        
        <Link to={`detail/${film.id}`}> Detail </Link>
        
        
        
      </p>
        </Card>
        </Col>))}
</Row>
<Pagination
className="pagination-list"
  activePage={3}
  items={10}
  leftBtn={<Icon>chevron_left</Icon>}
  rightBtn={<Icon>chevron_right</Icon>}
/>

</Container>


  )
}
