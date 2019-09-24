import React from 'react';
import Btn from './components/btn.js';
import Info from './components/info.js';
import { Color } from './components/context.js';
const UseReducer = () => {
  return (
    <div>
      <Color>
        <Btn />
        <Info />
      </Color>
    </div>
  )
}
export default UseReducer;