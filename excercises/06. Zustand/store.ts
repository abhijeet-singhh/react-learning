import { create } from "zustand";

interface CounterProps {
    count: number;
    increment: () => void;
    decrement: () => void;
}

// custom hook
const useCounter = create<CounterProps>((set) => ({ // create takes a callback function
    count: 0,  // initial value

    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1}))
}))

export default useCounter;