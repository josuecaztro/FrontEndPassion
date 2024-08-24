import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import CarouselFadeExample from './carousel';
import './App.css';
import DisplayHomeImg from './homephoto';
import ButtonComponent from './ButtonComponent';

import GenerateNav from './navbar';



//my frontend


function App() {


  return (
    <>

  <GenerateNav/>

  <div id="wholepage">

{/* THE TOP DIV */}
    <div id="top-page">
  <h1 id="titleh1">Iglesia Voz de Dios</h1>
  <h3>Pastor Roberto Castro</h3>
  <div className="App">
      <ButtonComponent /> 
    </div>
    {/* <div className="App">
      <h1>Latest YouTube Video</h1>
      <LatestVideo /> {/* Use the component */}
  <DisplayHomeImg/>
  <div id="caro">
      </div>
      </div>
  {/* END OF TOP DIV */}


{/* THE MIDDLE DIV */}
    <div id="middle-page">
      <div id="middle-left">
       <h4>Visit our location</h4>
       <p>1530 4th Ave Folsom, PA 19033</p>
       <h4>Service Hours</h4>
       <ul>
        <li>Sunday 3:30PM - Main Service</li>
        <li>Wednesday 7:30PM - Prayer</li>
       </ul>
       <h4>Social Networks:</h4>
       <ul>
        <li><a href="">Youtube</a></li>
        <li><a href="">Facebook</a></li>
        <li><a href="">Instagram</a></li>
        <li><a href="">TikTok</a></li>
       </ul>
      </div>
      <div id="middle-middle">
      <Container className="mt-3">
        <CarouselFadeExample />
      </Container>
      </div>
      <div id="middle-right">
      </div>
      </div>
{/* END OF MIDDLE DIV */}


{/* THE BOTTOM DIV */}
    <div id="bottom-page">
     <div>
      <h2 id="youtube-title">Latest Live Service:</h2>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/rMp7kdSTAz0?si=OlKUzs_CqEfsACoA" id="youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     </div>

     <div>
      <h2 id="calendar-title">Church Events</h2>
      <iframe src="https://calendar.google.com/calendar/embed?height=300&wkst=1&ctz=America%2FNew_York&bgcolor=%23B39DDB&showTitle=0&showNav=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=cm9jYjc3N0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4&color=%237986CB&color=%237986CB" style={{border:"solid 1px #777"}} id="googleapi" width="400" height="300" frameborder="0" scrolling="no"></iframe>
     </div>
      </div>
{/* END OF BOTTOM DIV */}

      </div>
      <footer>All rights reserved - Iglesia Voz de Dios © 2024</footer>
  </>
);
}

export default App;