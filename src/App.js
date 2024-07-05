import './App.css'
import Sudoku from './components/Sudoku'

function App() {
  document.title = 'Sudoku'
  return (
    <div>
      <h1>Sudoku</h1>
      <Sudoku />
    </div>
  )
}

export default App