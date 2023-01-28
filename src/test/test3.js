let str = '<a href=\"https://xu-ux.github.io\" target=\"_blank\"><img align=\"right\" width=\"400\" src=\"https://cdn.jsdelivr.net/gh/xu-ux/static/img/blog/2021/cat.gif\"></a>\r\n\r\n# Hi, I\'m [Xuux](https://xu-ux.github.io) 👋.\r\n\r\n我是一名低调的Java攻城狮🦁\r\n\r\n也是国际CV编程协会的一员\r\n\r\n[![图片](https://api.xuux.top/test?type=svg)](https://xu-ux.github.io)\r\n\r\n### 低调做事 ⛏\r\n\r\n努力搬砖中...\r\n- 🔭 记载一些笔记-[我的笔记](https://xu-ux.github.io/note)\r\n- 🌱 写一些博客-[我的博客](https://xu-ux.github.io)\r\n- 📚 目前正在学习Java、ES6、Golang等相关编程知识\r\n- 💬 有任何问题或者建议可以在[社区](https://github.com/xu-ux/note/discussions)讨论\r\n\r\n\r\n### 今日天气\r\n\r\n<!--START_WEATHER-->\r\nGuangZhou ⛅️</br>\r\n🌡+35°C 60% moon:🌘</br>\r\n🌄05:55:33 🌇18:36:57</br>\r\n<!--END_WEATHER-->\r\n\r\n\r\n[![xu-ux\'s github stats](https://github-readme-stats.vercel.app/api?username=xu-ux&show_icons=true&icon_color=0366d6&text_color=24292e&bg_color=ffffff&hide_title=true)](https://github.com/xu-ux/blog-crawl-admin)\r\n![](https://github-readme-stats.vercel.app/api/top-langs/?username=xu-ux&layout=compact)\r\n\r\n---\r\n<!--START_SECTION:progressBar-->\r\n\r\n- ⏳ Year Progress  🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌗🌑🌑🌑🌑🌑🌑🌑🌑  74.8048 %\r\n\r\n<!--END_SECTION:progressBar-->\r\n\r\n- \r\n    [![WeChat](https://img.shields.io/badge/公众号-氘氚-brightgreen?logo=WeChat)](https://cdn.jsdelivr.net/gh/xu-ux/static/img/wxarticle/dao_chuan_official_accounts.png)\r\n    [![Blog](https://img.shields.io/badge/Blog-博客园-blue?logo=Blogger&logoColor=white)](https://www.cnblogs.com/xu-ux/)\r\n    [![Blog](https://img.shields.io/badge/Blog-CSDN-red?logo=Blogger&logoColor=red)](https://blog.csdn.net/qq_35341203)\r\n    [![Blog](https://img.shields.io/badge/MyBlog-Powered%20By%20Hexo-7FFFD4?logo=Blogger&logoColor=7FFFD4)](https://blog.xuux.top/)\r\n    [![知识库](https://img.shields.io/badge/Wiki-Powered%20By%20Vuepress-blue?logo=Wikipedia&logoColor=00BFFF)](https://wiki.xuux.top/)\r\n    [![导航](https://img.shields.io/badge/Navigation-网址导航-yellow?logo=Ren\'Py&logoColor=FF7F7F)](https://x-website.vercel.app/)\r\n\r\n\r\n\r\n\r\n<!--\r\n**xu-ux/xu-ux** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.\r\n\r\nHere are some ideas to get you started:\r\n- 🔭 I’m currently working on a Java project\r\n- 🌱 I’m currently learning golang and javascipt ES6\r\n- 🔭 I’m currently working on ...\r\n- 🌱 I’m currently learning ...\r\n- 👯 I’m looking to collaborate on ...\r\n- 🤔 I’m looking for help with ...\r\n- 💬 Ask me about ...\r\n- 📫 How to reach me: ...\r\n- 😄 Pronouns: ...\r\n- ⚡ Fun fact: ...\r\n-->\r\n'
let regerB = new RegExp("(<!--START_WEATHER-->)(\\s|\\S{0,2})([.\\s\\S]*)(\\s|\\S{0,2})(<!--END_WEATHER-->)","g");
let s = regerB.test(str);