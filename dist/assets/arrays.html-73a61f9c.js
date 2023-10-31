const e=JSON.parse('{"key":"v-f7fcdb1e","path":"/common-tool/arrays.html","title":"Java Arrays：专为数组而生的工具类","lang":"zh-CN","frontmatter":{"title":"Java Arrays：专为数组而生的工具类","shortTitle":"Arrays工具类","category":["Java核心"],"tag":["常用工具类"],"description":"本文详细介绍了Java中的Arrays工具类，阐述了它在数组操作中的实际应用和优势。通过具体的代码示例，展示了如何使用Arrays类处理数组排序、查找、转换等常见问题。学习Arrays工具类的技巧，让您在Java编程中轻松应对各种数组操作，提高开发效率。","head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,二哥的Java进阶之路,Java进阶之路,Java入门,教程,java,Arrays,数组,java arrays,java 数组"}],["meta",{"property":"og:url","content":"https://javabetter.cn/common-tool/arrays.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Java Arrays：专为数组而生的工具类"}],["meta",{"property":"og:description","content":"本文详细介绍了Java中的Arrays工具类，阐述了它在数组操作中的实际应用和优势。通过具体的代码示例，展示了如何使用Arrays类处理数组排序、查找、转换等常见问题。学习Arrays工具类的技巧，让您在Java编程中轻松应对各种数组操作，提高开发效率。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-04T05:16:42.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"常用工具类"}],["meta",{"property":"article:modified_time","content":"2023-09-04T05:16:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java Arrays：专为数组而生的工具类\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-04T05:16:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"01、创建数组","slug":"_01、创建数组","link":"#_01、创建数组","children":[]},{"level":3,"title":"02、比较数组","slug":"_02、比较数组","link":"#_02、比较数组","children":[]},{"level":3,"title":"03、数组排序","slug":"_03、数组排序","link":"#_03、数组排序","children":[]},{"level":3,"title":"04、数组检索","slug":"_04、数组检索","link":"#_04、数组检索","children":[]},{"level":3,"title":"05、数组转流","slug":"_05、数组转流","link":"#_05、数组转流","children":[]},{"level":3,"title":"06、打印数组","slug":"_06、打印数组","link":"#_06、打印数组","children":[]},{"level":3,"title":"07、数组转 List","slug":"_07、数组转-list","link":"#_07、数组转-list","children":[]},{"level":3,"title":"08、setAll","slug":"_08、setall","link":"#_08、setall","children":[]},{"level":3,"title":"09、parallelPrefix","slug":"_09、parallelprefix","link":"#_09、parallelprefix","children":[]},{"level":3,"title":"10、总结","slug":"_10、总结","link":"#_10、总结","children":[]}],"git":{"createdTime":1634887330000,"updatedTime":1693804602000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":12},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3},{"name":"luanheart","email":"luanheartx@gmail.com","commits":1}]},"readingTime":{"minutes":11.62,"words":3487},"filePathRelative":"common-tool/arrays.md","localizedDate":"2021年10月22日","excerpt":"<h1> 9.2 Arrays工具类</h1>\\n<p>“哥，数组专用工具类是专门用来操作<a href=\\"https://javabetter.cn/array/array.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">数组</a>的吗？比如说创建数组、数组排序、数组检索等等。”三妹的提问其实已经把答案说了出来。</p>\\n<p>“是滴，这里说的数组专用工具类指的是 <code>java.util.Arrays</code> 类，基本上常见的数组操作，这个类都提供了静态方法可供直接调用。毕竟数组本身想完成这些操作还是挺麻烦的，有了这层封装，就方便多了。”在回答三妹的同时，我打开 Intellij IDEA，找到了 Arrays 类的源码。</p>"}');export{e as data};