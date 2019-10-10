// https://juejin.im/post/5d85cda3f265da03b638e918
// 1.关于数组展开的问题
let a = [1,2,3, [1,2,[1.4], [1,2,3]]]
// 使用es提案的方法
a.flat(Infinity); // Infinity代表不限制多少层
// 如果全部是数字可以使用下面的方法
a.toString().split(',').map(v => +v);
// 使用递归的方法进行展开
function flat(a=[], result=[]){
  a.forEach(item => {
    if(Object.prototype.toString.call(item)==='[object Array]'){
      result = result.concat(flat(item, []));
    }else{
      result.push(item);
    }
  })
  return result;
}

// 递归深拷贝
const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8]
};
target.target = target;

function clone(target, map=new WeakMap()){
  if(typeof target === 'object'){
    let cloneTarge = Array.isArray(target) ? [] : {};
    if(map.get(target)){
      return map.get(target);
    }
    map.set(target);
    for(const key in target){
      cloneTarge[key] = clone(target[key], map);
    }
    return cloneTarge;
  }else{
    return target;
  }
}
