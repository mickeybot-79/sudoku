import { useEffect, useState, useRef } from 'react'
import './App.css'
import Sudoku from './components/Sudoku'
import DefaultGrid from './components/DefaultGrid'
import { useDispatch } from 'react-redux'
import { newSudoku } from './components/sudokuSlice'

function App() {
  document.title = 'Sudoku'

  const dispatch = useDispatch()

  const setGrid = (start) => dispatch(newSudoku({ start })) 

  const [displayGrid, setDisplayGrid] = useState(true)
  
  const effectRan = useRef(false)
  
  useEffect(() => {
    if (effectRan.current === true) {
      setGrid(Date.now())

      setDisplayGrid(false)
    }    
    
    return () => effectRan.current = true

    // eslint-disable-next-line
  }, [])

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