import { createSlice } from "@reduxjs/toolkit";
import createSudoku from "./createSudoku";

const sudokuSlice = createSlice({
    name: 'sudoku',
    initialState: { sudoku: [] },
    reducers: {
        newSudoku: (state, action) => {
            const newGrid = createSudoku(action.payload)
            state.sudoku = newGrid
        }
    }
})

export const { newSudoku } = sudokuSlice.actions

export default sudokuSlice.reducer