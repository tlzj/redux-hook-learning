import React from 'react';
const getDataFetch = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('数据获取成功')
		}, 3000)
	})
}
let data = '123'
class Sub extends React.Component {
	getData = () => {
		let getRes = getDataFetch();
		console.log('--------执行次数------')
		getRes.then(res => {
			console.log('--------执行次数134------')

			data = res
		})
		if(data == '123'){
			throw { getData: getRes };
		}
		return data;
	}
	render(){
		let data = this.getData()
		console.log('===========render')
		return (
			<div>
				{data}
			</div>
		)
	}
}

function App(){
	return (
		<SuspenseComponent
			fallBack={<div>loading......</div>}
		>
			<Sub />
		</SuspenseComponent>
	)
}

class SuspenseComponent extends React.Component{
	state = {
		isLoading: false
	}
	componentDidCatch(error){
		this.setState({isLoading: true})
		if(typeof error.getData.then === 'function'){
			error.getData.then((res) => {
				this.setState({
					isLoading: false
				})
			})
		}
	}
	render(){
		let { fallBack, children } = this.props;
		return (
			<div>{ this.state.isLoading ? fallBack : children }</div>
		)
	}
}

export default App

