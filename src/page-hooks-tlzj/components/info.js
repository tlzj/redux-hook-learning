import React, { useContext } from 'react';
import { TlContext } from './context.js';
const Info = () => {
  const { color } = useContext(TlContext);
  return (
    <div>信息：<span style={{ color }}>这是一段写入的信息</span></div>
  )
}
export default Info;