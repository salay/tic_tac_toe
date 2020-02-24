import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       value: null,
    //     };
    //   }
    
    render() {
        return (
            <button
              className="square"
              onClick={() => this.props.newOnClick()}
            >
              {this.props.value}
            </button>
          );
    }
  }

class Me extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            defaultName: 'CLICK TO REVEAL NAME',
            defaultAge: 'CLICK TO REVEAL AGE'
        }
    }
    render() {
        return(
            <div>
                My name is
                <button
                    onClick={() => this.setState({defaultName: this.props.myName})
                    }
                >
                    {this.state.defaultName}
                </button>
                 and my age is 
                 <button
                    onClick={() => this.setState({defaultAge: this.props.myAge})
                    }
                    >
                        {this.state.defaultAge}
                </button>
            </div>
        )
    }
}

  
  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //this sets the current state of squares to an array of 9 nulls
          squares: Array(9).fill(null),
        };
      }


  dealWithTheClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

    
      renderSquare(i) {
        console.log("thisl.state.squares", this.state.squares)
        return <Square value={this.state.squares[i]} 
         newOnClick={()=> this.dealWithTheClick(i)}/>;
      }

    hereIAm(name, age){
        return (
            //this is passing the props (properties) myName and myAge
            <Me
                myName={name}
                myAge={age}
            />
        )
    }

    render() {
      const status = 'Next player: X';
  
      return (
        <div>
            {this.hereIAm("Bruce Wayne", 99)}
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
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
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    //grabbing the root element of the index.html and putting the game component in it
    document.getElementById('root')
  );
  