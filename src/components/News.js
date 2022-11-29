import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../shared/ListOfFilms";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Carousel, Container, Parallax, Tab, Tabs } from "react-materialize";








export default function News() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const userName = useParams();
  const film = data.find((obj) => {
    return obj.id == userName.id;
  });
  //    let cost = film.cost.toLocaleString();
  return (
    <Container>
    <Tabs 
  className="tab-demo z-depth-1"
  options={{
    swipeable: true
  }}
  scope="tabs-35"
>
  <Tab
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    
    title=" News 1"
    
  >
     <p>Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling. Check out the demo to get a better idea of it.</p>
    <img src="https://c4.wallpaperflare.com/wallpaper/516/986/479/retro-blur-hi-tech-movie-wallpaper-preview.jpg"/>
    News1:
  </Tab>
  <Tab
    active

    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title=" News 2"
  >
    <p>Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling. Check out the demo to get a better idea of it.</p>
    <img src="https://c4.wallpaperflare.com/wallpaper/391/204/930/sound-systems-and-gadgets-assorted-movie-projectors-illustration-wallpaper-preview.jpg"/>
    News2:
  </Tab>
  <Tab 

    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title=" News 3"
   
  >
     <p>Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling. Check out the demo to get a better idea of it.</p>
    <img src="https://c4.wallpaperflare.com/wallpaper/707/255/764/city-action-fantasy-heroes-wallpaper-preview.jpg"/>
    News3:  
  </Tab>
</Tabs>

</Container>


 /* <Carousel
  carouselId="Carousel-54"
  className="white-text center"
  options={{
    fullWidth: true,
    indicators: true
  }}
>
  <div className="red">
    <h2>
      First Panel
    </h2>
    <p>
      This is your first panel
    </p>
  </div>
  <div className="amber">
    <h2>
      Second Panel
    </h2>
    <p>
      This is your second panel
    </p>
  </div>
  <div className="green">
    <h2>
      Third Panel
    </h2>
    <p>
      This is your third panel
    </p>
  </div>
  <div className="blue">
    <h2>
      Fourth Panel
    </h2>
    <p>
      This is your fourth panel
    </p>
  </div>
</Carousel> */

    

  );
}
