// suspense的简单实现
import React, { Component } from 'react';
class SuspenseTl extends Component {
  state = {
    pending: false
  }
  componentDidCatch(error){
    console.log(error, '----')
    if(typeof error.p.then === 'function'){
      this.setState({
        pending: true
      })
      error.p.then(() => {
        this.setState({
          pending: false
        })
      })
    }
  }
  render(){
    console.log(this.state.pending, '----')
    return this.state.pending ? this.props.fallback : this.props.children;
  }
}
export default SuspenseTl;

// class Suspense extends Component {
//   state = {
//     promise: null
//   }

//   componentDidCatch(e) {
//     if (e instanceof Promise) {
//       this.setState({
//         promise: e
//       }, () => {
//         e.then(() => {
//           this.setState({
//             promise: null
//           })
//         })
//       })
//     }
//   }

//   render() {
//     const { fallback, children } = this.props
//     const { promise } = this.state
//     return <>
//       { promise ? fallback : children }
//     </>
//   }
// }
// export default Suspense;
