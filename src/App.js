import React from 'react';
import logo from './logo.svg';
import './App.css';


  const FOOD = ["french fries", "kitkat", "pasta", "burgers"];

  class FoodNames extends React.Component {
    state={
      likes: 0
    }
    clickHander = () =>{
      this.setState({likes: this.state.likes + 1})
    }
    render = () =>{
      return (
        <div>
        <hr/>
          {this.props.name}!!
          <p>
            likes: {this.state.likes}
          </p>
          <button onClick={this.clickHander}>likes</button>
          <button>remove</button>
          <button>duplicate</button>
        </div>
      )
    }
  }
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {
            FOOD.map((x)=> {
              return <FoodNames name={x} key={x}/>
          })

          }
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          


        </a>
      </header>
    </div>
  );
}

export default App;
