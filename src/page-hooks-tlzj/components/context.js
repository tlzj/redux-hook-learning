import React, { createContext, useReducer } from 'react';
export const TlContext = createContext(null);
export const TlProvider = TlContext.Provider;
export const UPDATE_COLOR = "UPDATE_COLOR"

export const reducer = (state, action) => {
  switch(action.type){
    case UPDATE_COLOR :
      return action.color;
    default: 
      return state
  }
}

export const Color = props => {
  const [ color, dispatch] = useReducer(reducer, 'blue');
  return <TlProvider
    value={{ color, dispatch }}
  >
    { props.children }
  </TlProvider>
}