import React, { Component } from "react"
import "./App.css"
import Validation from "./Validation/Validation"
import Char from "./Char/Char"

class App extends Component {
  state = {
    userInput: "",
  }

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value })
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split("")
    text.splice(index, 1)
    const updatedText = text.join("")
    this.setState({ userInput: updatedText })
  }

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={this.deleteCharHandler.bind(this, index)}
        />
      )
    })

    return (
      <div className="App">
        <ol>
          <li>Create an input field</li>
          <li>Create an input field</li>
          <li>Create an input field</li>
          <li>Create an input field</li>
          <li>Create an input field</li>
        </ol>
        <p>HInt: Keep in mind that</p>
        <hr />
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    )
  }
}

export default App
