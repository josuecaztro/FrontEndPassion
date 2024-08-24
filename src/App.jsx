import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import CarouselFadeExample from './carousel';
import './App.css';
import DisplayHomeImg from './homephoto';
import ButtonComponent from './ButtonComponent';

import GenerateNav from './navbar';

import { SocialIcon } from 'react-social-icons'
import NewCarousel from './newcarousel';




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
       <h4>Visit Our Service</h4>
       <p>1530 4th Ave Folsom, PA 19033</p>
       <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d97953.76532369152!2d-75.40154809584824!3d39.895397142499334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89c6c28b142423f9%3A0xa6e57e023c0a6858!2s1530%204th%20Ave%2C%20Folsom%2C%20PA%2019033!3m2!1d39.8954263!2d-75.3191472!5e0!3m2!1sen!2sus!4v1724508630866!5m2!1sen!2sus" width="400" height="250" style={{border:"0;"}} id="googlemap" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       <h4>Service Hours</h4>
       <ul>
        <li>Sunday 3:30PM - Main Service</li>
        <li>Wednesday 7:30PM - Prayer</li>
       </ul>
       <h4>Connect with Us</h4>
       <div id="socialdiv">
       <SocialIcon url="https://www.youtube.com/PastorRobertoC" class="social"/>
      <SocialIcon url="https://www.facebook.com/IglesiaVozdeDiosPA/" class="social"/>
      <SocialIcon url="https://www.tiktok.com/@iglesiavozdedios?is_from_webapp=1&sender_device=pc" class="social"/>
      <SocialIcon url="https://www.instagram.com/folsomvozdedios/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" class="social"/>
      </div>
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