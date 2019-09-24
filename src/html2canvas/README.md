# 图片和当前服务不在同一服务时，使用该库截图会出现白屏问题，这个图片跨域的原因，解决方法是
1.
`
html2canvas(document.body, {
      useCORS: true, // 开启跨域图片截图，要保证后台对应开启跨域访问
    }).then(function(canvas) {
        document.body.appendChild(canvas);
    });
`

2.让后台对用开启图片跨域

相关：该库截图使用的是canvas,canvas加载跨域图片时，会污染画布，所以必须给图片设置上img.crossOrigin = 'anonymous'
      另外要保证服务端能够跨域访问到图片