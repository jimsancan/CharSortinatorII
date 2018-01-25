import React, { Component } from "react";
import ReactDOM from "react-dom";
class Container extends Component {
  constructor() {
    super();
    this.state = {
      words: ['word'],
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  newWord(word) {
    let arr = word.split('')
    let sorted = arr.sort().reverse()
    this.state.words.push(sorted.join(''))
    console.log('newword', this.state)
  }
  handleChange(event) {
    this.setState({value: event.target.value})
    this.printWords()
  }
  printWords(){
    if (this.state.words.length > 0) {
      console.log('printw')
      this.state.words.join(', ')
    }
  }
  render() {
    return (
      <div id="article-input">
      Enter a string: <input type="text" value={this.state.value} onChange={this.handleChange}></input><button onClick={() => {this.newWord(this.state.value)}}>Submit</button>
        <p>{this.state.words.join(', ')}</p>
        {/* <p>{this.printWords()}</p> */}
      </div>
    );
  }
}
export default Container;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;