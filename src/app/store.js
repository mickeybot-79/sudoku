import { configureStore } from "@reduxjs/toolkit";
import sudokuReducer from '../components/sudokuSlice'
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
    reducer: {
        sudoku: sudokuReducer
    }
})

setupListeners(store.dispatch)