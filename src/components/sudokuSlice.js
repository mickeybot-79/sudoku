import { createSlice } from "@reduxjs/toolkit";
import createSudoku from "./createSudoku";

const sudokuSlice = createSlice({
    name: 'sudoku',
    initialState: { sudoku: [], slicedCells: [] },
    reducers: {
        newSudoku: (state, action) => {
            const newGrid = createSudoku(action.payload)
            state.sudoku = newGrid
        },
        sliceCells: (state, action) => {
            const displayCells = action.payload
            const resultCells = displayCells.sort(() => Math.random() - 0.5).slice(20, 60)
            state.slicedCells =  resultCells
        },
        viewSolution: (state, action) => {
            const displayCells = action.payload
            state.slicedCells = displayCells
        }
    }
})

export const { newSudoku, sliceCells, viewSolution } = sudokuSlice.actions

export default sudokuSlice.reducer