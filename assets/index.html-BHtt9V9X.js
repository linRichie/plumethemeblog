import{_ as a,c as i,b as p,o as n}from"./app-BVpc6fz1.js";const l={};function e(h,s){return n(),i("div",null,s[0]||(s[0]=[p(`<ul><li><a href="#41-%E6%9E%84%E5%BB%BApost%E5%BA%94%E7%94%A8%E9%9C%80%E8%A6%81%E7%9A%84%E6%95%B0%E6%8D%AE%E9%9B%86">4.1 构建POST应用需要的数据集</a><ul><li><a href="#411-post%E5%BA%94%E7%94%A8%E7%9A%84models%E5%AE%9A%E4%B9%89">4.1.1 post应用的Models定义</a></li><li><a href="#412-post%E5%BA%94%E7%94%A8%E5%AE%8C%E6%88%90%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%81%E7%A7%BB">4.1.2 post应用完成数据库迁移</a></li></ul></li></ul><hr><h2 id="_4-1-1-post应用的models定义" tabindex="-1"><a class="header-anchor" href="#_4-1-1-post应用的models定义"><span>4.1.1 post应用的Models定义</span></a></h2><p>本项目中post的功能</p><ul><li>用户在BBS站内发表话题，称为：Topic</li><li>可以针对每一个Topic发表评论，称为：Comment</li><li>可以对每一个Comment支持或者反对</li></ul><p>由于每一个数据表对应一个Model定义，每一个Model都是一个Python类，所以<strong>Model之间是可以继承的</strong></p><ul><li><p>Django规定：所有的Model都必须继承自django.db.models.Model.</p></li><li><p>可以直接继承，或者间接及成果</p></li><li><p>Model中的所有字段都是<code>django.db.models.Field</code>的子类</p></li><li><p>Django会根据Field的类型确定数据库表的字段类型</p></li><li><p>Django内置了数十种Field字段类型，不同的类型支持的参数不一定相同</p><ul><li>但名字，帮助文本，唯一性等参数都是通用的</li></ul></li><li><p>在post应用的models.py文件中定义抽象的Model基类：</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">from</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">django</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">db</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">models</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">Create</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">your</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">models</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">here.</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">BaseModel</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">models</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Model</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">post</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">应用中的Model</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">基类</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Meta</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">abstract</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">True</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ordering</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-created_time</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">created_time</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">models</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">DateTimeField</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">auto_now_add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">True</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">help_text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">u</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">创建时间</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">last_modified</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">models</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">DateTimeField</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">auto_now</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">True</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">help_text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">u</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">修改时间</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">def</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">__str__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">raise</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">NotImplementedError</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>代码解析</li><li>定义了两个类属性create_time和last_modified，都是DateTimeField类型，继承自BaseModel的类自动拥有这两个属性</li><li>定义的两个类属性用到了三个Field参数： <ul><li>auto_now_add: 用于将首次创建对象时间设置为当前时间</li><li>auto_now：用于将每次保存对象时间设置为当前时间</li><li>help_text：解释性的帮助文本</li></ul></li><li>定义了抽象方法__str__，继承自BaseModel的类必须实现这个方法，作用是：能够优化打印Model实例的样式</li><li>内部类Meta <ul><li>abstract：声明了这个是抽象类，不能是实例化，表现为BaseModel不会创建数据表</li><li>ordering：声明了排序的规则</li><li>created_time：代表按照创建时间正序排列，负号标识按照创建时间逆序排序</li></ul></li><li>BaseModel定义了两个DateTimeField类型的相关字段，会根据不同的数据存储后端选择对应的数据库字段类型</li></ul></li><li><p>BaseModel直接继承自django.db.models.Model，所以，Topic和Comment可以继承自BaseModel，从而实现间接继承</p><ul><li><p>Topic</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Topic</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">BaseModel</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">BBS论坛发布的话题</span><span class="space"> </span><span class="space"> </span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">title</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">models</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">CharField</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">max_length</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">255</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">unique</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">True</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">help_text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">话题标题</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">content</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">models</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">TextField</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">help_text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">话题内容</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">is_online</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">models</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">BooleanField</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">default</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">True</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">help_text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">话题是否在线</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">user</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">models</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ForeignKey</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">to</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">User</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">to_field</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">id</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">on_delete</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">models</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">CASCADE</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">help_text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">关联用户表</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">def</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">__str__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">%s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">%s</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">%</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">20</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>外键引用的User字段：ForeignKey</li><li>ForeignKey：是Django内置的应用 django.contrib.auth中定义的Model，之前创建超级用户也是直接使用的这个类型</li></ul></li><li><p>Comment</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Comment</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">BaseModel</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">BBS</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">话题评论</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">content</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">models</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">CharField</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">max_length</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">255</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">help_text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">话题评论</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">topic</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">models</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ForeignKey</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">to</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Topic</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">to_field</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">id</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">on_delete</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">models.CASCADE</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">help_text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">关联话题表</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">up</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">models</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">IntegerField</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">default</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">help_text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">支持</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">down</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">models</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">IntegerField</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">default</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">help_text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">反对</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">def</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">__str__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">%d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">%s</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">%</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">20</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="_4-1-2-post应用完成数据库迁移" tabindex="-1"><a class="header-anchor" href="#_4-1-2-post应用完成数据库迁移"><span>4.1.2 post应用完成数据库迁移</span></a></h2><ul><li>编写了post应用的Model定义，为实现这些Models对象的操作，需要使用manage.py提供的数据库迁移工具将Models对象映射为数据库中的表</li><li>在执行迁移命令前，需要把post应用加载到my_bbs项目中，在<code>INSTALLED_APPS</code>的第一行加入:<code>post.apps.PostConfig</code></li><li>然后对post应用执行<code>makemigrations</code>命令,会在post/migrations包下面生成迁移文件，命令：<code>python manage.py makemigrations post</code></li><li>迁移文件也是Python文件，可以利用<code>manage.py</code>提供的<code>sqlmigrate</code>命令打印迁移文件执行的SQL语句：<code>python manage.py sqlmigrate post 0001</code><ul><li>sqlmigrate命令后面跟随应用名称和迁移文件的名称</li></ul></li><li>manage.py提供了更为简单的命令帮助用户检查项目中的问题，可以在manage.py所在的目录下执行 <ul><li><code>python manage.py check</code></li><li>check命令也不会影响数据库</li><li>没有问题，会看到控制台上打印输出：<code>System checkidentified no issues(0 silenced)</code></li></ul></li><li>查看了SQL语句，验证了项目的正确性，就可以执行migrate命令将Models映射为数据库的表了 <ul><li><code>python manage.py migrate</code></li></ul></li><li>由于在刚才的定义中，Topic和Comment没有显示指定表名，默认使用Django的规则：<code>应用名_小写类名</code></li></ul>`,9)]))}const k=a(l,[["render",e],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/python/w2a1jsbf/","title":"4.1 构建POST应用需要的数据集","lang":"zh-CN","frontmatter":{"createTime":"2025/02/17 16:59:38","permalink":"/python/w2a1jsbf/","title":"4.1 构建POST应用需要的数据集","description":"4.1 构建POST应用需要的数据集 4.1.1 post应用的Models定义 4.1.2 post应用完成数据库迁移 4.1.1 post应用的Models定义 本项目中post的功能 用户在BBS站内发表话题，称为：Topic 可以针对每一个Topic发表评论，称为：Comment 可以对每一个Comment支持或者反对 由于每一个数据表对应一个...","head":[["meta",{"property":"og:url","content":"https://notes.moniter.top/python/w2a1jsbf/"}],["meta",{"property":"og:site_name","content":"Richie Lin"}],["meta",{"property":"og:title","content":"4.1 构建POST应用需要的数据集"}],["meta",{"property":"og:description","content":"4.1 构建POST应用需要的数据集 4.1.1 post应用的Models定义 4.1.2 post应用完成数据库迁移 4.1.1 post应用的Models定义 本项目中post的功能 用户在BBS站内发表话题，称为：Topic 可以针对每一个Topic发表评论，称为：Comment 可以对每一个Comment支持或者反对 由于每一个数据表对应一个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.1 构建POST应用需要的数据集\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"autoDesc":true,"filePathRelative":"notes/python/前端框架/Django/chapter-04：ORM应用与原理剖析/4.1 构建post应用所需的数据集.md"}');export{k as comp,c as data};
