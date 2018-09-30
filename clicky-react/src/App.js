import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/gameContent"
import logo from './logo.svg';
import './App.css';

const defaultState = {
  tiles: [
      {
        color: "#000",
        clicked: false,
        id: 0
      }
    ],
    score: 0,
    topScore: 0
  }

class App extends Component {

  state = defaultState;
  resetGame = () => {
    this.setState({...defaultState, topScore: this.state.TopScore})
  }
  handleClick = id => {
    let clickedTile = this.state.tiles.filter(title => tile.id ===id);

    // this.state.tiles.forEach(tile => {
    //   if(tile.id === id) {
    //     tile.clicked = true
    //   }
    // })
    if(clickedTile.clicked){
      //  you lose
      this.resetGame();
    }
    else {
      let newTiles = this.state.tiles.map(tile => {
        if(tiles.id === id) {
          return tile
        }
      })
      this.setState({ ...this.state, score: score + 1, topScore: this.state.score > this.state.topScore ? this.state.topScore + 1 : this.state.topScore,
        tiles: newTiles
      })
    }
  }
  render() {
    return (
      <div>
        {
          tiles.map(tile => (
            <div onClick= { () => this.handleClick(tile.id)}>
            </div>
          ))
        }
        <Navbar />
        <Header />
        <Content />
        <Content />
        <Content />
        <Footer />
      </div>
    )

  }
}


export default App;
