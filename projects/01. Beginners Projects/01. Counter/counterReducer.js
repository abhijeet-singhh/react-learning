const initialState = { count: 0 }

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return { count: 0 }
        case 'incrementByAmount':
            return { count: state.count + action.payload }
        case 'decrementByAmount':
            return { count: state.count - action.payload }
        default:
            return state;
    }
}

export { counterReducer, initialState }