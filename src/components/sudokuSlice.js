import { createSlice } from "@reduxjs/toolkit";
import createSudoku from "./createSudoku";

const sudokuSlice = createSlice({
    name: 'sudoku',
    initialState: { sudoku: [], slicedCells: [], unSlicedCells: [], userInputs: [] },
    reducers: {
        newSudoku: (state, action) => {
            const newGrid = createSudoku(action.payload)
            state.sudoku = newGrid
        },
        sliceCells: (state, action) => {
            const displayCells = action.payload.sort(() => Math.random() - 0.5)
            const resultCells = displayCells.slice(20, 60)
            state.slicedCells =  resultCells
            state.unSlicedCells = [...displayCells.slice(0, 20), ...displayCells.slice(60, 81)]
            const allInputs = []
            const currentGrid = state.sudoku
            for (let i = 0; i < 81; i++) {
                if (resultCells.includes(i)) {
                    allInputs.push(currentGrid[i])
                } else {
                    allInputs.push(0)
                }
            }
            state.userInputs = allInputs
        },
        viewSolution: (state, action) => {
            const displayCells = action.payload
            state.slicedCells = displayCells
        },
        viewHint: (state, action) => {
            state.slicedCells.push(action.payload)
            const itemIndex = state.unSlicedCells.indexOf(action.payload)
            state.unSlicedCells.splice(itemIndex, 1)
        },
        setInputs: (state, action) => {
            const allInputs = action.payload
            state.userInputs = allInputs
            const allUnslicedCells = []
            for (let i = 0; i < 81; i++) {
                if (allInputs[i] === 0) {
                    allUnslicedCells.push(i)
                } else if (state.slicedCells.length === 81) {
                    state.slicedCells = Array.from({ length: 81 }, (_, i) => i)
                }
            }
            state.unSlicedCells = allUnslicedCells
        }
    }
})

export const { newSudoku, sliceCells, viewSolution, viewHint, setInputs } = sudokuSlice.actions

export default sudokuSlice.reducer