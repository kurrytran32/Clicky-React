import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/gameContent";
import Image from "./components/Image";
// import logo from './logo.svg';
import './App.css';
// import "../public/assets/images/"

const initialState = {
  tiles: [
      {
        src:"assets/images/bunny.jpg",
        clicked: false,
        id: 0
      },
      {
        src:"assets/images/alien.png",
        clicked: false,
        id: 1
      },
      {
        src:"assets/images/cat.png",
        clicked: false,
        id: 2
      },
      {
        src:"assets/images/devil.jpg",
        clicked: false,
        id: 3
      },
      {
        src:"assets/images/duck.png",
        clicked: false,
        id: 4
      },
      {
        src:"assets/images/fudd.jpg",
        clicked: false,
        id: 5
      },
      {
        src:"assets/images/mouse.png",
        clicked: false,
        id: 6
      },
      {
        src:"assets/images/pig.png",
        clicked: false,
        id: 7
      },
      {
        src:"assets/images/sam.png",
        clicked: false,
        id: 8
      },
      {
        src:"assets/images/skunk.png",
        clicked: false,
        id: 9
      },
      {
        src:"assets/images/tweety.png",
        clicked: false,
        id: 10
      },
      {
        src:"assets/images/chicken.jpg",
        clicked: false,
        id: 11
      }
    ],
    score: 0,
    topScore: 0
  }

class Game extends Component {

  constructor(props) {
    super(props)
    this.state = initialState
  }
  
  resetGame = () => {
    const tiles = this.state.tiles.map(tile => ({ ...tile, clicked: false}))
    console.log('Tiles', tiles)
    this.setState({ 
      score: 0, 
      // tiles: this.state.tiles.sort(()=> Math.random() - 0.5)
      tiles: tiles.sort(() => Math.random() - 0.5)
    })
    console.log("NEW STATE", this.state)
  }
  handleClick = id => {
    let clickedTile = this.state.tiles.find(tile => tile.id ===id);

    
    if(clickedTile.clicked){
      //  you lose
      this.resetGame();
    }
    else {

      clickedTile.clicked = true
      let newTiles = this.state.tiles.filter(tile => tile.id !== id)
      newTiles.push(clickedTile);
      this.setState({ ...this.state, score: this.state.score + 1, topScore: this.state.score === this.state.topScore ? this.state.topScore + 1 : this.state.topScore,
        tiles: newTiles.sort(()=> Math.random() - 0.5)
      })
    }
  }
  render() {
    return (
      <div>
        {/* Wrapper */}
        <Navbar
          score={this.state.score}
          topScore = {this.state.topScore}
          />
        <Header />
        <Content>
        {
          this.state.tiles.map(tile => (
            <Image
              key={ tile.id }
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,
                height: 100,
                margin: '1em',
                backgroundColor: tile.color,
                color: '#fff',
              }}
              src={tile.src}
              onClick={ () => this.handleClick(tile.id) }
            >
              CARD { tile.clicked ? 'clicked' : null }
            </Image>
          ))
        }
        
        </Content >
        <Footer />
      </div>
    )

  }
}


export default Game;
