const e=JSON.parse('{"key":"v-c9f5a514","path":"/jvm/gc.html","title":"咱们从头到尾说一次Java垃圾回收","lang":"zh-CN","frontmatter":{"title":"咱们从头到尾说一次Java垃圾回收","shortTitle":"咱们从头到尾说一次Java垃圾回收","category":["Java核心"],"tag":["Java虚拟机"],"description":"二哥的Java进阶之路，小白的零基础Java教程，从入门到进阶，咱们从头到尾说一次Java垃圾回收","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,二哥的Java进阶之路,jvm,Java虚拟机,垃圾回收,gc"}],["meta",{"property":"og:url","content":"https://javabetter.cn/jvm/gc.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"咱们从头到尾说一次Java垃圾回收"}],["meta",{"property":"og:description","content":"二哥的Java进阶之路，小白的零基础Java教程，从入门到进阶，咱们从头到尾说一次Java垃圾回收"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-04T05:16:42.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java虚拟机"}],["meta",{"property":"article:modified_time","content":"2023-09-04T05:16:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"咱们从头到尾说一次Java垃圾回收\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-04T05:16:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"什么是垃圾回收","slug":"什么是垃圾回收","link":"#什么是垃圾回收","children":[]},{"level":3,"title":"怎么定义垃圾","slug":"怎么定义垃圾","link":"#怎么定义垃圾","children":[]},{"level":3,"title":"怎么回收垃圾","slug":"怎么回收垃圾","link":"#怎么回收垃圾","children":[]},{"level":3,"title":"内存模型与回收策略","slug":"内存模型与回收策略","link":"#内存模型与回收策略","children":[]}],"git":{"createdTime":1648354033000,"updatedTime":1693804602000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":13},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":16.07,"words":4821},"filePathRelative":"jvm/gc.md","localizedDate":"2022年3月27日","excerpt":"<h1> 咱们从头到尾说一次Java垃圾回收</h1>\\n<p>之前上学的时候有这个一个梗，说在食堂里吃饭，吃完把餐盘端走清理的，是 C++ 程序员，吃完直接就走的，是 Java 程序员。</p>\\n<p>确实，在 Java 的世界里，似乎我们不用对垃圾回收那么的专注，很多初学者不懂 GC，也依然能写出一个能用甚至还不错的程序或系统。但其实这并不代表 Java 的 GC 就不重要。相反，它是那么的重要和复杂，以至于出了问题，那些初学者除了打开 GC 日志，看着一堆0101的天文，啥也做不了。</p>\\n<p>今天我们就从头到尾完整地聊一聊 Java 的垃圾回收。</p>\\n<h3> 什么是垃圾回收</h3>"}');export{e as data};