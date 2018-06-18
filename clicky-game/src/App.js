import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Game from "./components/Game";
import aquarius from "./components/images/aquarius.png";
import aries from "./components/images/aries.png";
import cancer from "./components/images/cancer.png";
import capricorn from "./components/images/capricorn.png";
import gemini from "./components/images/gemini.png";
import leo from "./components/images/leo.png";
import libra from "./components/images/libra.png";
import pisces from "./components/images/pisces.png";
import sagittarius from "./components/images/sagittarius.png";
import scrorpio from "./components/images/scrorpio.png";
import taurus from "./components/images/taurus.png";
import virgo from "./components/images/virgo.png";

class App extends Component {
    state = { 
      images : [
      { src: {aquarius}.aquarius, alt: 'aquarius' }, 
      { src: {aries}.aries, alt: 'aries' },
      { src: {cancer}.cancer, alt: 'cancer' },
      { src: {capricorn}.capricorn, alt: 'capricorn' },
      { src: {gemini}.gemini, alt: 'gemini' },
      { src: {leo}.leo, alt: 'leo' },
      { src: {libra}.libra, alt: 'libra' },
      { src: {pisces}.pisces, alt: 'pisces' },
      { src: {sagittarius}.sagittarius, alt: 'sagittarius' },
      { src: {scrorpio}.scrorpio, alt: 'scrorpio' },
      { src: {taurus}.taurus, alt: 'taurus' },
      { src: {virgo}.virgo, alt: 'virgo' },
    ],
    score: 0,
    highscore: 0,
    navText: "Game over"
    }
    shuffle = () => {
     let random = this.state.images.sort((a, b) => {return 0.5 - Math.random()})
     this.setState({ images: random})
    }
    render(){
      return(
        <div>
          <Navbar />
          <Jumbotron />
          <Game onClick = {this.shuffle} array = {this.state.images}/>
          <Footer />
        </div>
      )
    }
  }
export default App;