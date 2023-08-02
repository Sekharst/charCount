import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {wordsList: [], word: ''}

  onChangeValue = event => {
    this.setState({word: event.target.value})
  }

  onClickButton = event => {
    event.preventDefault()
    const {word} = this.state
    const addItem = {
      id: uuidv4(),
      text: word,
    }
    if (word.length > 0) {
      this.setState(prevState => ({
        wordsList: [...prevState.wordsList, addItem],
        word: '',
      }))
    }
  }

  render() {
    const {word, wordsList} = this.state
    console.log(wordsList)

    return (
      <div className="container">
        <div className="left-container">
          <div className="head-container">
            <h1 className="heading">Count the characters like a Boss...</h1>
          </div>
          <div className="left-down-container">
            {wordsList.length > 0 ? (
              <ul className="ulList">
                {wordsList.map(each => (
                  <li key={each.id}>
                    <p className="addList" key={each.id}>
                      {each.text}:{each.text.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
          </div>
        </div>
        <div className="right-container">
          <h1 className="header">Character Counter</h1>
          <form>
            <input
              className="input"
              placeholder="Enter the Characters here"
              type="text"
              value={word}
              onChange={this.onChangeValue}
            />
            <button
              className="button"
              type="button"
              onClick={this.onClickButton}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
