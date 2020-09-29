import React from 'react'
import { Route, Link, Switch } from "react-router-dom"
import "./css/core.css"

import Home from './components/Home'
import About from './components/About'
import News from './components/News'
import Services from './components/Services'

export default function App() {
  // Chat
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/5c53e1116cb1ff3c14caad40/default';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// }
// )();

  return (
    <div className="App">
      <div className='header'>
        <img src="https://images.lah-photography.com/logo.jpg" alt="lah" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/news">News</Link>
          <Link to="/services">Services</Link>
          <Link to="http://gallery.lah-photography.com">Gallery</Link>
          <Link to="http://archive.lah-photography.com">Archives</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </nav>
      </div>
      <div className="main">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          {/* <Route path="/contact">
            <Contact />
          </Route> */}
          {/* <Route path="/terms">
            <Terms />
          </Route> */}
          <Route path="/" component={Home} />
        </Switch>
      </div>
      <div className="footer center">
        <p>(c) Copyright 2020</p>
        <p><a href="https://beedev-itservices.com">Made by BeeDev Services</a> <img src="https://images.craftsnherbs.com/beedev/beelogo.jpg" alt="beedev logo" /></p>
        <p><a href="mailto:webmaster@lah-photography.com">webmaster@lah-photography.com</a></p>
      </div>
    </div>
  )
}
