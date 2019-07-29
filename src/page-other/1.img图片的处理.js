// https://juejin.im/post/5d3e4304f265da1b8608cee5
window.addEventListener('error', function(e){
  let target = e.target,
  tagName = target.tagName,
  times = Number(target.dataset.times) || 0,
  allTime = 3;
  if(tagName.toUpperCase() === 'IMG'){
    if(time >= allTime){
      target.src = 'data:image/gif;base64,.............';
    }else{
      target.dataset.time = times + 1;
      target.src = '//xxx.xxx.xxx.default.jpg';
    }
  }
})