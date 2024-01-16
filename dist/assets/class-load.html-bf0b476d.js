const e=JSON.parse('{"key":"v-b9ac0ed2","path":"/jvm/class-load.html","title":"一文彻底搞懂 Java 类加载机制（类加载器、类加载过程、双亲委派模型）","lang":"zh-CN","frontmatter":{"title":"一文彻底搞懂 Java 类加载机制（类加载器、类加载过程、双亲委派模型）","shortTitle":"Java的类加载机制","category":["Java核心"],"tag":["Java虚拟机"],"description":"Java的类加载机制通过类加载器和类加载过程的合作，确保了Java程序的动态加载、灵活性和安全性。双亲委派模型进一步增强了这种机制的安全性和类之间的协调性。","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,二哥的Java进阶之路,jvm,Java虚拟机,类加载机制,类加载器,类加载过程,双亲委派模型"}],["meta",{"property":"og:url","content":"https://javabetter.cn/jvm/class-load.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"一文彻底搞懂 Java 类加载机制（类加载器、类加载过程、双亲委派模型）"}],["meta",{"property":"og:description","content":"Java的类加载机制通过类加载器和类加载过程的合作，确保了Java程序的动态加载、灵活性和安全性。双亲委派模型进一步增强了这种机制的安全性和类之间的协调性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-15T03:03:37.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java虚拟机"}],["meta",{"property":"article:modified_time","content":"2024-01-15T03:03:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一文彻底搞懂 Java 类加载机制（类加载器、类加载过程、双亲委派模型）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-15T03:03:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"类加载过程","slug":"类加载过程","link":"#类加载过程","children":[{"level":3,"title":"1）Loading（载入）","slug":"_1-loading-载入","link":"#_1-loading-载入","children":[]},{"level":3,"title":"2）Verification（验证）","slug":"_2-verification-验证","link":"#_2-verification-验证","children":[]},{"level":3,"title":"3）Preparation（准备）","slug":"_3-preparation-准备","link":"#_3-preparation-准备","children":[]},{"level":3,"title":"4）Resolution（解析）","slug":"_4-resolution-解析","link":"#_4-resolution-解析","children":[]},{"level":3,"title":"5）Initialization（初始化）","slug":"_5-initialization-初始化","link":"#_5-initialization-初始化","children":[]}]},{"level":2,"title":"类加载器","slug":"类加载器","link":"#类加载器","children":[]},{"level":2,"title":"双亲委派模型","slug":"双亲委派模型","link":"#双亲委派模型","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1648354033000,"updatedTime":1705287817000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":14},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":4}]},"readingTime":{"minutes":13.73,"words":4118},"filePathRelative":"jvm/class-load.md","localizedDate":"2022年3月27日","excerpt":"<h1> 第三节：Java的类加载机制</h1>\\n<p><a href=\\"https://javabetter.cn/jvm/how-run-java-code.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">上一节</a>在讲 JVM 运行 Java 代码的时候，我们提到，JVM 需要将编译后的字节码文件加载到其内部的运行时数据区域中进行执行。这个过程涉及到了 Java 的类加载机制（面试常问的知识点），所以我们来详细地讲一讲。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/how-run-java-code-91dac706-1c4e-4775-bc4e-b2104283aa04.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>"}');export{e as data};