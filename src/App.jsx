import './App.css'
import { useState } from 'react'
import { saveToLocalStorage, loadFromLocalStorage } from './utilities/localStorage'

function App() {
  const [textInput, setTextInput] = useState("")
  const [data, setData] = useState(loadFromLocalStorage())

  function handleChange(event) {
    setTextInput(event.target.value)
  }

  function submit() {
    saveToLocalStorage(textInput)
  }

  return (
    <div className="App">
      <input value={textInput} type="text" onChange={handleChange}/>
      <button onClick={submit}>Submit</button>
      <hr />
      <h2>Text input</h2>
      <p>{textInput}</p>
      <hr />
      <h2>Data</h2>
      <div>
        {
          data.map(
            (message, index) => <p key={index}>{message}</p>
          )
        }
      </div>
    </div>
  )
}

export default App
