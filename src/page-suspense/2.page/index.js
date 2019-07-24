import React from 'react';
import SuspenseTl from './suspense.js';

let cache = "";
let returnData = cache;
const aaaa = () => new Promise(resolve => {
    setTimeout(() => {
      resolve("数据加载完毕");
    }, 2000);
  });

class PromiseThrower extends React.Component {
  componentDidMount(){
    // this.getData()
  }
  getData = () => {
    const getData = aaaa();
    getData.then(data => {
      returnData = data;
    });
    if (returnData === cache) {
      console.log('---------getDat', typeof getData)
      throw {getData};
    }
    console.log('----------render---return')
    return returnData;
  };

  render() {
    return <div>{this.getData()}</div>;
  }
}

const SuspenseDemo = () => {
  console.log('-------')
  return (
    <SuspenseTl fallback={<div>loading...</div>}>
      19371873787
      <PromiseThrower />
    </SuspenseTl>
  )
}
export default SuspenseDemo;