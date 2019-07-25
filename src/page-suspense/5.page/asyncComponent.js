import React, { Component } from 'react';
export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props){
      super(props);
      this.state = {
        component: null
      }
    }

    unmount = false

    async componentDidMount(){
      const { default: component } = await importComponent();
      if(this.unmount) return;
      this.setState({
        component
      })
    }

    componentWillUnmount(){
      this.unmount = true;
    }

    render(){
      const C = this.state.component;
      return C ? <C /> : null;
    }
  }
  return AsyncComponent;
}