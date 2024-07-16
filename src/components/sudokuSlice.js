import { createSlice } from "@reduxjs/toolkit";
import createSudoku from "./createSudoku";

const sudokuSlice = createSlice({
    name: 'sudoku',
    initialState: { sudoku: [], slicedCells: [], unSlicedCells: [] },
    reducers: {
        newSudoku: (state, action) => {
            const newGrid = createSudoku(action.payload)
            state.sudoku = newGrid
        },
        sliceCells: (state, action) => {
            const resultCells = action.payload.sort(() => Math.random() - 0.5)
            state.slicedCells =  resultCells.slice(20, 60)
            state.unSlicedCells = [...resultCells.slice(0, 20), ...resultCells.slice(60, 81)]
        },
        viewSolution: (state, action) => {
            const displayCells = action.payload
            state.slicedCells = displayCells
        },
        viewHint: (state, action) => {
            state.slicedCells.push(action.payload)
            const itemIndex = state.unSlicedCells.indexOf(action.payload)
            state.unSlicedCells.splice(itemIndex, 1)
        }
    }
})

export const { newSudoku, sliceCells, viewSolution, viewHint } = sudokuSlice.actions

export default sudokuSlice.reducer