import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Game from "./components/Game";
import images from "./images.json"

class App extends Component {
    state = { 
    images, 
    score: 0,
    highscore: 0,
    navText: "Click an image to start!"
    }
    handleClick = alt => {
      const index = images.findIndex(image => image.alt === alt)
      console.log(index);
      if(this.state.images[index].clicked){
        this.setState({score:0,navText: "Wrong!"})
        for(let i = 0; i < this.state.images.length; i++){
          let image = Object.assign(this.state.images)
          image[i].clicked = false
          this.setState({image})
        }
      } else {
        const newScore = this.state.score + 1
        this.setState({score:newScore,navText: "Correct!"})

        let image = Object.assign(this.state.images)
        image[index].clicked = true
        this.setState({image})
        if(newScore > this.state.highscore) {
          this.setState({highscore:newScore})
        }
      }
    }
    shuffle = () => {
     let random = this.state.images.sort((a, b) => {return 0.5 - Math.random()})
     this.setState({ images: random})
    }
    render(){
      return(
        <div>
          <Navbar navText = {this.state.navText} score = {this.state.score} highscore = {this.state.highscore}/>
          <Jumbotron />
          {this.state.images.map(image => (
          <Game 
          onClick = {this.handleClick} 
          alt = {image.alt}
          src = {image.src}
          />
          ))}
          <Footer />
        </div>
      )
    }
  }
export default App;