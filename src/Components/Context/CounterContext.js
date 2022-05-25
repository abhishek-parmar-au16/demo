import { createContext, useReducer } from 'react'


export const CounterContext = createContext({ count: 5 })
const initialState = {
    count: 0
}

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 }
        case DECREMENT:
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}
function CounterProvider({ children }) {
    // const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)
    return <CounterContext.Provider value={{ count: state.count, updateCount: dispatch }}>
        {children}
    </CounterContext.Provider>
}

export default CounterProvider;