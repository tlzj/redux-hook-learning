import React, { useContext } from 'react';
import { TlContext, UPDATE_COLOR } from './context.js';
const Btn = () => {
  const { dispatch } = useContext(TlContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: UPDATE_COLOR, color: 'red'})}>红色</button>
      <button onClick={() => dispatch({ type: UPDATE_COLOR, color: 'yellow'})}>黄色</button>
    </div>
  )
}
export default Btn;