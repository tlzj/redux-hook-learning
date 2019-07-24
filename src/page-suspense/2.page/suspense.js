// suspense的简单实现
import React, { Component } from 'react';
// class SuspenseTl extends Component {
//   state = {
//     pending: false
//   }
//   componnetDiCatch(error){
//     console.log(error, '----')
//     if(typeof error.then === 'function'){
//       this.setState({
//         pending: true
//       })
//       error.then(() => {
//         this.setState({
//           pending: false
//         })
//       })
//     }
//   }
//   render(){
//     console.log(this.state.pending, '----')
//     return this.state.pending ? this.props.fallback : this.props.children;
//   }
// }
// export default SuspenseTl;

class SuspenseTK extends Component {
  state = {
    promise: null
  }

  componentDidCatch(e) {
    console.log('didMount-suspense', e)
    if (typeof e.getData === 'object') {
      this.setState({
        promise: e.getData
      }, () => {
        this.state.promise.then(() => {
          this.setState({
            promise: null
          })
        })
      })
    }
  }

  render() {
    const { fallback, children } = this.props
    const { promise } = this.state
    console.log(promise, '------')
    return <>
      { promise ? fallback : children }
    </>
  }
}
export default SuspenseTK;
