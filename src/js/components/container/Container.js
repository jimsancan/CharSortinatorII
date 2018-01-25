import React, { Component } from "react";
import ReactDOM from "react-dom";
class Container extends Component {
  constructor() {
    super();
    this.state = {
      words: [],
      val: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.newWord = this.newWord.bind(this);
    this.printWords = this.printWords.bind(this)
    
  }
  newWord(word) {
    let arr = word.split('')
    let sorted = arr.sort().reverse()
    this.state.words.unshift(sorted.join(''))
    console.log('newword', this.state)
  }
  handleChange(event) {
    this.setState({val: event.target.value})
  }
  printWords(){
    return this.state.words.join(', ')
  }
  render() {
    return (
      <div id="article-input">
      Enter a string: <input id="myInput" type="text" value={this.state.val} onChange={this.handleChange}>
      </input><button onClick={() => {this.newWord(this.state.val), document.getElementById('myInput').value = ''}}>Submit</button>
        <p>{this.printWords()}</p>
      </div>
    );
  }
}
export default Container;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;