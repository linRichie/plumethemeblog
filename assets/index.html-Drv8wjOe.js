import{_ as a,c as e,b as i,o as l}from"./app-BVpc6fz1.js";const n={};function p(t,s){return l(),e("div",null,s[0]||(s[0]=[i(`<ul><li><a href="#72-%E6%A8%A1%E6%9D%BF%E8%AF%AD%E8%A8%80">7.2 模板语言</a><ul><li><a href="#721-%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95---">7.2.1 基本语法 <code>{{}} {% %}</code></a><ul><li><a href="#%E6%96%B9%E6%B3%95%E8%B0%83%E7%94%A8">方法调用</a></li><li><a href="#for%E5%BE%AA%E7%8E%AF">for循环</a></li><li><a href="#%E8%8E%B7%E5%8F%96%E8%A7%86%E5%9B%BE%E8%AE%BF%E9%97%AE%E5%9C%B0%E5%9D%80%E7%9A%84url%E6%A0%87%E7%AD%BE">获取视图访问地址的url标签</a></li><li><a href="#%E5%A4%9A%E8%A1%8C%E6%B3%A8%E9%87%8A%E7%9A%84comment%E6%A0%87%E7%AD%BE">多行注释的comment标签</a></li><li><a href="#%E5%88%A4%E6%96%AD%E5%8F%98%E9%87%8F%E7%9B%B8%E7%AD%89%E6%88%96%E4%B8%8D%E7%9B%B8%E7%AD%89%E7%9A%84%E6%A0%87%E7%AD%BE">判断变量相等或不相等的标签</a></li></ul></li><li><a href="#722-%E8%BF%87%E6%BB%A4%E5%99%A8">7.2.2 过滤器（|）</a></li><li><a href="#723-%E6%A8%A1%E6%9D%BF%E7%BB%A7%E6%89%BFblock">7.2.3 模板继承（block）</a></li></ul></li></ul><hr><h2 id="_7-2-1-基本语法" tabindex="-1"><a class="header-anchor" href="#_7-2-1-基本语法"><span>7.2.1 基本语法 <code>{{}} {% %}</code></span></a></h2><h3 id="方法调用" tabindex="-1"><a class="header-anchor" href="#方法调用"><span>方法调用</span></a></h3><p>不想索引调用需要设置<code>alters_data=True</code></p><ul><li>例子</li></ul><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">A</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">def</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">z</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Django</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">z</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">alters_data</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">True</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环"><span>for循环</span></a></h3><p>在for标签的内部，可以通过访问forloop变量的属性获取迭代过程中的一些信息<br> forloop.counter从1开始计数。除此之外，forloop还包含如下一些属性。</p><ul><li>（1）counter0：与counter一样用来计数，但是它从0开始。</li><li>（2）revcounter：用来表示当前循环中剩余元素的数量。第一次迭代时，返回的是列表中元素的总数，最后一次的返回值是1。</li><li>（3）revcounter0：与revcounter的含义相同，但是由于其索引是基于0的，因此它的值等于revcounter减去1。</li><li>（4）first：返回一个布尔值，True标识为当前迭代的是第一个元素，其他位置的元素返回False。</li><li>（5）last：也是一个布尔值，迭代最后一个元素时返回True，其他情况为False。</li><li>（6）parentloop：对于嵌套迭代的场景，用来引用父级循环的forloop变量。</li><li>需要注意，forloop只可以在for与endfor之间使用。对于first和last属性，可以通过if标签对特定的元素做特殊处理，而像counter这类属性，常常用于调试程序。</li></ul><h3 id="获取视图访问地址的url标签" tabindex="-1"><a class="header-anchor" href="#获取视图访问地址的url标签"><span>获取视图访问地址的url标签</span></a></h3><ul><li>格式：<code>{% url &#39;ns:name&#39; arg1,arg2,.... %}</code></li><li>其中，ns是视图的命名空间，name是视图的名称。如果需要，还可以给定参数构造动态的url</li><li>例如：<code>{% url &#39;post:hello&#39; %}</code></li></ul><h3 id="多行注释的comment标签" tabindex="-1"><a class="header-anchor" href="#多行注释的comment标签"><span>多行注释的comment标签</span></a></h3><ul><li>格式</li></ul><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{%</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">comment</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">%}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{%</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">endcomment</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">%}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断变量相等或不相等的标签" tabindex="-1"><a class="header-anchor" href="#判断变量相等或不相等的标签"><span>判断变量相等或不相等的标签</span></a></h3><ul><li>提供了<code>ifequal</code>和<code>ifnotequal</code>标签，用于判断变量是否相等</li><li>v1、v2除了可以是模板变量，也可以是硬编码的字符串、整数或小数，但不可以是字典、列表等类型</li></ul><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{%</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ifequal</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">v1</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">v2</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">%}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{%</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">else</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">%}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{%</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">endifqueal%}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-2-2-过滤器" tabindex="-1"><a class="header-anchor" href="#_7-2-2-过滤器"><span>7.2.2 过滤器（|）</span></a></h2><p>过滤器用于在显示变量之前对变量的值进行调整，它们在模板中很常见，使用管道符号（|）指定；有些过滤器可以接受参数，如果参数中带有空格，则需要用引号括起来 参考:<a href="https://weread.qq.com/web/reader/6e4329007193f1e66e43129k19c3222022419ca14e7eef7" target="_blank" rel="noopener noreferrer">https://weread.qq.com/web/reader/6e4329007193f1e66e43129k19c3222022419ca14e7eef7</a></p><h2 id="_7-2-3-模板继承-block" tabindex="-1"><a class="header-anchor" href="#_7-2-3-模板继承-block"><span>7.2.3 模板继承（block）</span></a></h2><ul><li><p>模板继承使用起来非常简单，只需要定义好被继承的父模板，其中包含通用元素和可以被子模板覆盖的block部分即可</p></li><li><p>（1）block标签成对出现，需要<code>{%endblock%}</code>标记结束。</p></li><li><p>（2）需要给block标签起个名字，子模板中具有同样名称的block块完成对父模板的替换。</p></li><li><p>（3）子模板不需要定义父模板中的所有block，未定义时，子模板将原样使用父模板中的内容。</p></li><li><p>（4）子模板需要使用<code>{%extends%}</code>标签继承父模板，且其必须是模板中的第一个标签，通常继承声明会放在文件的第一行</p></li><li><p><code>{{block.super}}</code>变量，可以获取到父模板中渲染后的结果</p></li></ul><blockquote><p>Django建议，父模板中的{%block%}标签应该越多越好，毕竟，子模板不需要完全重写所有的标签，所以，可以多定义一些通用或者默认的内容</p></blockquote>`,23)]))}const r=a(n,[["render",p],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/python/srvz9cqc/","title":"7.2 模板语言","lang":"zh-CN","frontmatter":{"createTime":"2025/02/17 16:59:38","permalink":"/python/srvz9cqc/","title":"7.2 模板语言","description":"7.2 模板语言 7.2.1 基本语法 {{}} {% %} 方法调用 for循环 获取视图访问地址的url标签 多行注释的comment标签 判断变量相等或不相等的标签 7.2.2 过滤器（|） 7.2.3 模板继承（block） 7.2.1 基本语法 {{}} {% %} 方法调用 不想索引调用需要设置alters_data=True 例子 for...","head":[["meta",{"property":"og:url","content":"https://notes.moniter.top/python/srvz9cqc/"}],["meta",{"property":"og:site_name","content":"Richie Lin"}],["meta",{"property":"og:title","content":"7.2 模板语言"}],["meta",{"property":"og:description","content":"7.2 模板语言 7.2.1 基本语法 {{}} {% %} 方法调用 for循环 获取视图访问地址的url标签 多行注释的comment标签 判断变量相等或不相等的标签 7.2.2 过滤器（|） 7.2.3 模板继承（block） 7.2.1 基本语法 {{}} {% %} 方法调用 不想索引调用需要设置alters_data=True 例子 for..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7.2 模板语言\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"autoDesc":true,"filePathRelative":"notes/python/前端框架/Django/chapter-07：模板系统/02：模板语言.md"}');export{r as comp,h as data};
