import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Column from './Components/Column'
import NewItem from './Components/NewItem'

import Typed from 'typed.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: localStorage.getItem('title'),
      pros: localStorage.getItem('pros') === null ? [] : JSON.parse(localStorage.getItem('pros')),
      cons: localStorage.getItem('cons') === null ? [] : JSON.parse(localStorage.getItem('cons')) 
    };
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.clearLocalStorage = this.clearLocalStorage.bind(this)
  }

  handleTitleChange(e) {
    localStorage.setItem('title', e.target.value);
    this.setState({
      title: localStorage.getItem('title')
    })
  }

  handleSubmit = (e, isPro) => {
    e.preventDefault()
    localStorage.setItem('pros', JSON.stringify(isPro ? [...this.state.pros, e.target[0].value] : this.state.pros));
    localStorage.setItem('cons', JSON.stringify(!isPro ? [...this.state.cons, e.target[0].value] : this.state.cons));
    this.setState({
      pros: JSON.parse(localStorage.getItem('pros')),
      cons: JSON.parse(localStorage.getItem('cons'))
    });
    e.target[0].value = ""
  }

  clearLocalStorage() {
    localStorage.clear()
    this.setState({
      title: "",
      pros: [],
      cons: []
    })
  }

  componentDidMount() {
    const options = {
      strings: [
        'I wanna decide on...', 
        '"Should I go out with my friends tonight?"', 
        '"Should I work from home tomorrow?"', 
        '"Should I go to bed now?"'
      ],
      typeSpeed: 30,
      backSpeed: 30,
      attr: 'placeholder',
      bindInputFocusEvents: true,
      loop: true
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  render() {
    return (
      <div>
        <h1 className="pure-g">
          <input className='title pure-u-1' ref={(el) => { this.el = el; }} onChange={this.handleTitleChange} value={this.state.title === null ? "" : this.state.title}></input>
        </h1>
        <div className="pure-g">
          <Column isPro={true} data={this.state.pros}/>
          <Column isPro={false} data={this.state.cons}/>
        </div>
        <div className="pure-g">
          <NewItem isPro={true} handleSubmit={this.handleSubmit}/>
          <NewItem isPro={false} handleSubmit={this.handleSubmit}/>
        </div>
        <button type="button" onClick={this.clearLocalStorage}> clear dis bih </button>
      </div>
    );
  }
}

export default App;
