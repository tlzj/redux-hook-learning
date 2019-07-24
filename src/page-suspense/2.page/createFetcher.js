//createFetcher 实现
var NO_RESULT = {};
export const createFetcher = task => {
  let result = NO_RESULT;
  return () => {
    const p = task();
    console.log(p, 'pppppp')
    p.then(res => {
      result = res;
    })
    if(result === NO_RESULT){
      throw p;
    }
    return result;
  }
}