interface CounterState {
    count: number
}
export type CounterAction = 'increment' | 'decrement'; // this is a simplification, typically an action has a type and a payload

export function counterReducer(state: CounterState, action: CounterAction){
    switch (action) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}
