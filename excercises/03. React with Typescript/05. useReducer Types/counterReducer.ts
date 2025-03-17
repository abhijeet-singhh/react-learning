export type CounterState = { count: number };

type IncrementAction = { type: 'INCREMENT' };
type DecrementAction = { type: 'DECREMENT' };
export type CounterAction = IncrementAction | DecrementAction;

export const counterReducer = (state: CounterState, action: CounterAction) => {

    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };

        case 'DECREMENT':
            return { count: state.count - 1 };

        default:
            return state;
    }
}