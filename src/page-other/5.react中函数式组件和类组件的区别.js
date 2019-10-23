function Other(props){
  function clickHandel(){
    setTimeout(() => {
      console.log(props); // 打印的是上一次的props数据
    }, 5000)
  }
  return (
    <div onClick={clickHandel}>其他测试</div>
  )
}

class Other1 extends React.Component {
  clickHandel = () => {
    setTimeout(() => {
      console.log(this.props); // 打印的是实时的props数据
    }, 5000)
  }
  render(){
    return (
      <div onClick={this.clickHandel.bind(this)}>其他测试-1</div>
    )
  }
}

// 相关解析
var obj = {
  name: 'zs',
  info: {
    age: 18
  }
}

function info(info){
  setTimeout(() => {
    console.log(obj, info); // 打印最后的obj和之前的info(age: 18)
  }, 3000)
}
info(obj.info)

obj = {
  name: 'ls',
  info: {
    age: 19
  }
}

// 相关阅读
// https://github.com/xiaohesong/TIL/blob/master/front-end/react/overreact/%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E4%B8%8E%E7%B1%BB%E6%9C%89%E4%BB%80%E4%B9%88%E4%B8%8D%E5%90%8C.md
// hook中的一点小点
// https://blog.csdn.net/hesongGG/article/details/88824592
