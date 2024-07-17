import { useEffect, useState, useRef } from 'react'
import './App.css'
import Sudoku from './components/Sudoku'
import DefaultGrid from './components/DefaultGrid'
import { useDispatch } from 'react-redux'
import { newSudoku, sliceCells, viewSolution, viewHint, setInputs } from './components/sudokuSlice'
import { useSelector } from 'react-redux'

function App() {
  document.title = 'Sudoku'

  const dispatch = useDispatch()

  const setGrid = (start) => dispatch(newSudoku({ start }))

  const showSolution = (array) => dispatch(viewSolution(array))

  const setSlicedCells = (array) => dispatch(sliceCells(array))

  const showHint = (index) => dispatch(viewHint(index))

  const setUserInputs = (inputs) => dispatch(setInputs(inputs))

  const allUnslicedCells = useSelector((state) => state.sudoku.unSlicedCells)

  const cellsToDisplay = useSelector((state) => state.sudoku.slicedCells)

  const [displayGrid, setDisplayGrid] = useState(true)

  const [checkCells, setCheckCells] = useState(false)

  const effectRan = useRef(false)

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
      setGrid(Date.now())

      setSlicedCells(Array.from({ length: 81 }, (_, i) => i))

      setDisplayGrid(false)
    }

    return () => effectRan.current = true

    // eslint-disable-next-line
  }, [])

  // useEffect(() => {
  //   //console.warn = () => {}
  //   console.clear()
  // }, [])

  const handleNewGame = () => {
    setDisplayGrid(true)
    setTimeout(() => {
      setGrid(Date.now())

      setSlicedCells(Array.from({ length: 81 }, (_, i) => i))

      setDisplayGrid(false)
    }, 200)
  }

  const handleCheck = () => {
    const allCellElements = [...document.querySelectorAll('td')]
    const allCurrentInputs = []
    for (let i = 0; i < 81; i++) {
      if (allCellElements[i]?.innerHTML !== '' && !isNaN(parseInt(allCellElements[i]?.innerHTML))) {
        allCurrentInputs.push(parseInt(allCellElements[i]?.innerHTML))
      } else {
        allCurrentInputs.push(0)
      }
    }
    setUserInputs(allCurrentInputs)
    setCheckCells(true)
  }


  const handleUncheck = (allCells, setAllCells) => {
    setCheckCells(false)
    const allCellElements = [...document.querySelectorAll('td')]
    for (let i = 0; i < 81; i++) {
      if (allCells.length > 0 && cellsToDisplay.includes(i)) {
        const currentCell = {
          id: allCells[i].props.id,
          className: allCells[i].props.className,
          contentEditable: true,
          text: parseInt(allCellElements[i]?.innerHTML)
        }
        const updatedCell = (
          <td id={currentCell.id} key={currentCell.id} className={currentCell.className} contentEditable={currentCell.contentEditable}>{currentCell.text}</td>
        )
        setAllCells((prevCells) => {
          const updatedCells = prevCells
          updatedCells.splice(i, 1, updatedCell)
          return updatedCells
        })
      }
    }
  }


  const handleHint = () => {
    const randomIndex = Math.floor((Math.random() * allUnslicedCells.length))
    showHint(allUnslicedCells[randomIndex])
  }

  const handleViewSolution = () => {
    showSolution(Array.from({ length: 81 }, (_, i) => i))
  }

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
        {displayGrid && loader}
        {!displayGrid && <Sudoku checkCells={checkCells} showHint={showHint} />}
        <div id="options">
          <button id="new-game" className="option" onClick={handleNewGame}>New Game</button>
          <button id="check" className="option" onClick={handleCheck}>Check Progress</button>
          <button id="check" className="option" onClick={handleUncheck}>Hide Progress</button>
          <button id="hint" className="option" onClick={handleHint}>Show Hint</button>
          <button id="solution" className="option" onClick={handleViewSolution}>View Solution</button>
        </div>
      </div>
    </>
  )
}

export default App