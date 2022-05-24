import React,{createContext , useReducer} from 'react';


export const CounterContext = createContext({count:5})
const initialstate = 0

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const reducer = (state,action) =>{
    switch (action.type) {
        case INCREMENT:
            return state + 1
            
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}


function CounterProvider({children}) {
    const [state,dispatch] = useReducer(reducer,initialstate)
    return  <CounterContext.Provider value={{count:state , updateCount:dispatch }} >
                {children}
            </CounterContext.Provider >
}





































// import Count from './Count.js'

// const context = () => {
//     export const UserContext = createContext();
//     return (
//         <UserContext.Provider >
//             <Count />
//         </UserContext.Provider>
//     );
// };

// export default context;