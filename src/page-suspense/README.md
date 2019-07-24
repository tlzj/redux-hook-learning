# react V16.6 新增的suspense(悬念,悬疑,悬而未决)
1.https://blog.csdn.net/gwdgwd123/article/details/85031767
注：解决组件内异步的问题
 
 v16.5 版本中在react中throw抛出错误.在componentDidCatch中捕获时，如果是在didMount的函数中抛出，抛出的对象不需要用{}包一下，直接可以抛出。如果是class组件的render时抛出，需要使用{}包一下数据，函数组件可以直接抛出，然后在didCatch中捕获

 v16.8版本中都用{}包一下抛出的错误