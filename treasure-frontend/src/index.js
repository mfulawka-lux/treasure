import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(25).fill(null),
      turns:0,
      choosenFields: 0,
      game: true,
      over: false
    };
  }
  getDataAndUpdateBoard(indexes){
    fetch(`http://localhost:8080/getFromBoard?fields=${indexes[0]},${indexes[1]},${indexes[2]}`)
    .then(res => res.json())
    .then((data) => {
      const board = [...this.state.board];
      for(let i=0; i<3; i++){
        board[indexes[i]] = data[i];
        let isGameOver = board.filter((x)=>x==='T').length === 3;
        this.setState({board: board, game: true, over: isGameOver});
      }
    })
    .catch(console.log)
  }
  getIndexes(board){
    let indexes = [];
    for(let i=0; i<board.length; i++){
      if(board[i] === 'C'){
        indexes.push(i);
      }
    }
    return indexes;
  }
  handleClick(i){
    if(this.state.game && !this.state.over){
      const board = [...this.state.board];
      let turns = this.state.turns;
      let game = true;
      board[i] = 'C';
      let choosenFields = this.getIndexes(board);
      if(choosenFields.length === 3) {
        turns++;
        game = false;
        this.getDataAndUpdateBoard(choosenFields);
      } 
      this.setState({board: board,choosenFields: choosenFields, turns: turns, game:game });
    }
  }
  renderSquare(i) {
    return <Square value={this.state.board[i]}
    onClick={() => this.handleClick(i)}/>;
  }

  render() {
    return (
      <div>
        <div className="status">Turns: {this.state.turns}</div>
        {this.state.over ? <div className="status">Game Over</div> : null}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
        <div className="board-row">
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
        <div className="board-row">
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
        </div>
        <div className="board-row">
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
        </div>
        <div className="board-row">
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
