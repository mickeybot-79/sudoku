import { createSlice } from "@reduxjs/toolkit";
import createSudoku from "./createSudoku";

const sudokuSlice = createSlice({
    name: 'sudoku',
    initialState: { sudoku: [] },
    reducers: {
        newSudoku: (state, action) => {
            const newGrid = createSudoku(action.payload)
            state.sudoku = newGrid
        },
        sliceCells: (state, action) => {
            const displayCells = action.payload
            const resultCells = displayCells.sort(() => Math.random() - 0.5).slice(20, 60)
            state.slicedCells =  resultCells
        }
    }
})

export const { newSudoku, sliceCells } = sudokuSlice.actions

export default sudokuSlice.reducer