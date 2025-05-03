import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counter/counterSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

// Define RootState type
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store



