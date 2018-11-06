import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Column from './Components/Column'
import NewItem from './Components/NewItem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "tryna make a decision",
      pros: [],
      cons: [] 
    };
  }

  handleSubmit = (e, isPro) => {
    e.preventDefault()
    this.setState({
      pros: isPro ? [...this.state.pros, e.target[0].value] : this.state.pros,
      cons: !isPro ? [...this.state.cons, e.target[0].value] : this.state.cons
    });
    e.target[0].value = ""
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <div className="pure-g">
          <Column isPro={true} data={this.state.pros}/>
          <Column isPro={false} data={this.state.cons}/>
        </div>
        <div className="pure-g">
          <NewItem isPro={true} handleSubmit={this.handleSubmit}/>
          <NewItem isPro={false} handleSubmit={this.handleSubmit}/>
        </div>
        
      </div>
    );
  }
}

export default App;
