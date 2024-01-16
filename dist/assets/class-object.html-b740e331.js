import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as l,a as e,d as a,b as t,e as r}from"./app-729f55ad.js";const c={},d=e("p",null,"Java 对象模型中：",-1),v=e("ul",null,[e("li",null,"所有的类都是Class类的实例，Object是类，那么Object也是Class类的一个实例。"),e("li",null,"所有的类都最终继承自Object类，Class是类，那么Class也继承自Object。")],-1),p=e("p",null,"那到底是先有Class还是先有Object？ JVM 是怎么处理这个“鸡·蛋”问题呢？",-1),b=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/basic-extra-meal/class-object-2f47490c-70b8-41b8-9551-42c2f98eea91.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),u=e("p",null,"针对这个问题，我在知乎上看到了 R 大的一个回答，正好解答了我心中的疑惑，就分享出来给各位小伙伴一个参考和启发~",-1),m={href:"https://www.zhihu.com/question/30301819/answer/47539163",target:"_blank",rel:"noopener noreferrer"},g=r(`<hr><p>“鸡・蛋”问题通常都是通过一种叫“自举”（bootstrap）的过程来解决的。</p><p>“鸡蛋问题”的根本矛盾就在于假定了“鸡”或“蛋”的其中一个要先进入“完全可用”的状态。而许多现实中被简化为“鸡蛋问题”的情况实际可以在“混沌”中把“鸡”和“蛋”都初始化好，而不存在先后问题；在它们初始化的过程中，两者都不处于“完全可用”状态，而完成初始化后它们就同时都进入了可用状态。</p><p>打个比方，番茄炒蛋。并不是要先把番茄完全炒好，然后把鸡蛋完全炒好，然后把它们混起来；而是先炒番茄炒到半熟，再炒鸡蛋炒到半熟，然后把两个半熟的部分混在一起同时炒熟。</p><p>对于<strong>先有Class还是先有Object</strong>这个问题来说，题主假设所有的类都是Class类的实例，Object是类，那么Object也是Class类的一个实例，这个假设就是错的。</p><p><code>java.lang.Object</code>是一个Java类，但并不是<code>java.lang.Class</code>的一个实例。后者只是一个用于描述Java类与接口的、用于支持反射操作的类型。这点上Java跟其它一些更纯粹的面向对象语言（例如Python和Ruby）不同。</p><p>第二个假设“所有的类都最终继承自Object类，Class是类，那么Class也继承自Object”是对的，<code>java.lang.Class</code>是<code>java.lang.Object</code>的派生类，前者继承自后者。</p><p>虽然第1个假设不对，但“鸡蛋问题”仍然存在：在一个已经启动完毕、可以使用的Java对象系统里，必须要有一个<code>java.lang.Class</code>实例对应<code>java.lang.Object</code>这个类；而<code>java.lang.Class</code>是<code>java.lang.Object</code>的派生类，按“一般思维”，前者应该要在后者完成初始化之后才可以初始化…</p><p>事实是：这些相互依赖的核心类型完全可以在“混沌”中一口气都初始化好，然后对象系统的状态才叫做完成了“bootstrap”，后面就可以按照Java对象系统的一般规则去运行。JVM、JavaScript、Python、Ruby等的运行时都有这样的bootstrap过程。</p><p>在“混沌”（boostrap过程）里，JVM可以为对象系统中最重要的一些核心类型先分配好内存空间，让它们进入[已分配空间]但[尚未完全初始化]状态。</p><p>此时这些对象虽然已经分配了空间，但因为状态还不完整所以尚不可使用。然后，通过这些分配好的空间把这些核心类型之间的引用关系串好。</p><p>到此为止所有动作都由JVM完成，尚未执行任何Java字节码。然后这些核心类型就进入了[完全初始化]状态，对象系统就可以开始自我运行下去，也就是可以开始执行Java字节码来进一步完成Java系统的初始化了。</p><p>在HotSpot VM里，有一个叫做“Universe”的C++类用于记录对象系统的总体状态。它有这么两个有趣的字段记录当前是处于bootstrapping阶段还是已经完全初始化好：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>static bool is_bootstrapping()                      { return _bootstrapping; }
static bool is_fully_initialized()                  { return _fully_initialized; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后<code>Universe::genesis()</code>函数会在bootstrap阶段中创建核心类型的对象模型，其中会调用<code>SystemDictionary::initialize()</code>来初始化对象系统的核心类型，其中会进一步跑到<code>SystemDictionary::initialize_preloaded_classes()</code>来创建<code>java.lang.Object</code>、<code>java.lang.Class</code>等核心类型。</p><p>这个函数在加载了<code>java.lang.Object</code>、<code>java.lang.Class</code>等核心类型后会调用<code>Universe::fixup_mirrors()</code>来完成前面说的“把引用关系串起来”的动作：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Fixup mirrors for classes loaded before java.lang.Class.
// These calls iterate over the objects currently in the perm gen
// so calling them at this point is matters (not before when there
// are fewer objects and not later after there are more objects
// in the perm gen.
Universe::initialize_basic_type_mirrors(CHECK);
Universe::fixup_mirrors(CHECK);

void Universe::fixup_mirrors(TRAPS) {
  // Bootstrap problem: all classes gets a mirror (java.lang.Class instance) assigned eagerly,
  // but we cannot do that for classes created before java.lang.Class is loaded. Here we simply
  // walk over permanent objects created so far (mostly classes) and fixup their mirrors. Note
  // that the number of objects allocated at this point is very small.

  // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就是这样：“<strong>Object里有一个成员变量指向Class类实例c，c保存这个Object成员、方法的名字和地址的Map映射用作反射</strong>。”涉及到主类有这么几个：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://hg.openjdk.java.net/jdk8u/jdk8u/hotspot/file/ade5be2b1758/src/share/vm/memory/universe.hpp#l399
http://hg.openjdk.java.net/jdk8u/jdk8u/hotspot/file/ade5be2b1758/src/share/vm/memory/universe.cpp#l259
http://hg.openjdk.java.net/jdk8u/jdk8u/hotspot/file/ade5be2b1758/src/share/vm/classfile/systemDictionary.cpp#l1814
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分享的最后，二哥要简单说两句，每次看 R 大的内容，总是感觉膝盖忍不住要跪一下，只能说写过 JVM 的男人就是不一样。喜欢研究 CPP 源码的话小伙伴可以再深入学习下，一定会有所收获。</p><hr>`,21),h={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},j={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[a("微信搜 "),e("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"222"),a(" 即可免费领取。")],-1),f=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function x(C,O){const s=i("ExternalLinkIcon");return o(),l("div",null,[d,v,p,b,u,e("blockquote",null,[e("p",null,[a("作者：RednaxelaFX，整理：沉默王二，参考链接："),e("a",m,[a("https://www.zhihu.com/question/30301819/answer/47539163"),t(s)])])]),g,e("p",null,[a("GitHub 上标星 10000+ 的开源知识库《"),e("a",h,[a("二哥的 Java 进阶之路"),t(s)]),a("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),e("a",j,[a("太赞了，GitHub 上标星 10000+ 的 Java 教程"),t(s)])]),_,f])}const k=n(c,[["render",x],["__file","class-object.html.vue"]]);export{k as default};