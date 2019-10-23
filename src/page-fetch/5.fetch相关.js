// const url = 'https://preview.pro.ant.design/api/rule?currentPage=1&pageSize=10'

// 中断fetch请求 AbortController
// Chrome 66开始支持AbortController。
// AbortController 是DOM规范的一部分（注意不是JS），用来中止一个或多个DOM请求。
// DOM请求可以是Promise或fetch等。

// 如下
/**
import React from "react";
import { Button } from "antd";
const url = 'https://preview.pro.ant.design/api/rule?currentPage=1&pageSize=10'
const controller = new AbortController();
const signal = controller.signal;
class DataComplete extends React.Component {
	handleClick = () => {
		fetch(url, { signal }).then(res => res.json()).then(res => {
			console.log(res, '----')
		}).catch(err => {
			controller = new AbortController(); // 中止后重新开启请求
			signal = controller.signal;
			console.log(err, '中止请求')
		})
	}
	stopFetch = () => {
		controller.abort();
	}
  render() {
    return (
			<div>
				<Button onClick={this.handleClick}>点击</Button>
				<Button onClick={this.stopFetch}>中止请求</Button>
			</div>
		)
  }
}

export default DataComplete;
 
 
 */