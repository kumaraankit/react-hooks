What is useReducer

Its a state management hook

it accepts two parameter, reducer function, initial state 

useReducer(reducer,initailState)


reducer function accept two parameters and return newState

newState=reducer(currentState,action)

useReducer return a pair of values [newState,dispatch]