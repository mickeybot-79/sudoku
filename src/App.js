import { useState } from 'react'
import './App.css'
import Sudoku from './components/Sudoku'
import DefaultGrid from './components/DefaultGrid'

function App() {
  document.title = 'Sudoku'

  const [displayGrid, setDisplayGrid] = useState(true)

  const loader = (
    <div id="loader">
      <p id="prompt">Creating Sudoku</p>
    </div>
  )

  return (
    <>
      <h1 id="title">Sudoku</h1>
      <div id="content">
        {displayGrid && <DefaultGrid />}
        {!displayGrid && <Sudoku />}
        <div id="options">
          {/*<button id="new-game" className="option" onClick={handleNewGame}>New Game</button>*/}
          {/*<button id="check" className="option" onClick={handleCheck}>Check Inputs</button>*/}
          {/*<button id="hint" className="option" onClick={handleHint}>Show Hint</button>*/}
          {/*<button id="solution" className="option" onClick={handleViewSolution}>View Solution</button>*/}
        </div>
        {displayGrid && loader}
      </div>
    </>
  )
}

export default App