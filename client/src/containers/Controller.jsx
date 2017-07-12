import React from "react";
import GameStatus from '../components/GameStatus.jsx';


class Controller extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playStatus: {
        a1: "",
        b1: "",
        c1: "",
        a2: "",
        b2: "",
        c2: "",
        a3: "",
        b3: "",
        c3: ""
      },
      currentPlayer: {
        turn: "player1"
      }

    }
  }


  claimSquare(square) {
    const currentPlayStatus = this.state.playStatus;
    currentPlayStatus[square] = "X";
    this.setState({ currentPlayStatus });
  }

  render(){
    return (
      <div>
        <h1 id="game-title">Matt and Louise's Awesome Tic-Tac-Toe!</h1>
        <GameStatus playStatus={this.state.playStatus} currentPlayer={this.state.currentPlayer} claimSquare={this.claimSquare.bind(this)}/>
      </div>
    );
  }


}



export default Controller;
