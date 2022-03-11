<script type="text/x-mathjax-config">
  if(MathJax){
    MathJax.Hub.Config({
      jax: ["input/TeX","output/HTML-CSS", "output/PreviewHTML"],  //输出格式配置：latex 解析为 DOM结构
      tex2jax: {
        inlineMath: [ ['$','$'], ['\\(','\\)'] ],
        displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
      },
      "HTML-CSS": {
        showMathMenu: false,            // 隐藏右键菜单展示
        linebreaks: {
          automatic: true,  //超长公式换行处理（默认是false不换行）
          width: "80%"      //设置换行的点，默认是遇到等号=换行
        } 
      },
      showProcessingMessages: false,    //隐藏加载时候左下角加载情况的展示
      messageStyle: "none"              //隐藏加载时候左下角加载情况的展示
    });
  }
