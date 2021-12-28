import React from 'react';
import './App.css';
import ComponentC from './Component/usecontext/ComponentC';
import DataFetch from './Component/useeffect/DataFetch';
import UseEffect from './Component/useeffect/UseEffect';
import UseEffectMouse from './Component/useeffect/UseEffectMouse';
import ReducerCounter from './Component/usereducer/ReducerCounter';
import HooksCounter from './Component/usestate/HooksCounter';
import UseStateArray from './Component/usestate/UseStateArray';
import UseStateCounter from './Component/usestate/UseStateCounter';
import UseStateObject from './Component/usestate/UseStateObject';

export const userContext=React.createContext()
export const channelContext=React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UseStateCounter /> */}
      {/* <HooksCounter /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateArray /> */}
      {/* <UseEffect /> */}
      {/* <UseEffectMouse /> */}
      {/* <DataFetch /> */}
      {/* <userContext.Provider value="Ankit">
        <channelContext.Provider value="kumar">
        <ComponentC />
        </channelContext.Provider>
      </userContext.Provider> */}
      <ReducerCounter />
      
    </div>
  );
}

export default App;
