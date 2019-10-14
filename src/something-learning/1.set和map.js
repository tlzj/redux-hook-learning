// 1.set 类似数组，成员唯一，没有重复的值

// 基础方法
const s = new Set();
s.add(1); // 添加
s.add(2);
set.size; // 长度
for(let i of s){
  console.log(i, s[i]); // 遍历
}
s.delete(1); // 删除
s.has(1) // 判断是否存在
s.clear() // 清空
// 初始化时添加
new Set([1, 2, 3, 4, 4])


// 使用 -- 去重 
// 1.数组： [...new Set(array)]
// 2.字符串： [...new Set('ababbc')].join('')

// Array.from方法可以将 Set 结构转为数组 或者使用数组结构转化
// let set = new Set(['red', 'green', 'blue']);
// let arr = [...set];
// 遍历方法

// Set.prototype.keys()：返回键名的遍历器
// Set.prototype.values()：返回键值的遍历器
// Set.prototype.entries()：返回键值对的遍历器
// Set.prototype.forEach()：使用回调函数遍历每个成员

// 使用set可以轻松实现并集，交集，差集 set有map和filter方法
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let aAndB = Array.from(new Set([...a, ...b]));
 // 交集
let aOrB = Array.from(new Set([...a]).filter(x => b.has(x)));
// 差集
let aDifB = [...new Set(a.filter(x => !b.has(x)))];


// WeakSet相关
// WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
// 首先，WeakSet 的成员只能是对象(弱引用,如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存)
// ，而不能是其他类型的值。

const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a); // a数组的成员会转化为wekSet的实例对象的成员，而不得a本身
// WeakSet {[1, 2], [3, 4]}
// 方法有： add  delete  has
// 没有size属性, 无法遍历 是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了