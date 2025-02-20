import{_ as n,c as i,a,b as l,d as e,w as t,r as c,o as h,e as k}from"./app-BVpc6fz1.js";const r={},d={class:"table-of-contents"};function o(A,s){const p=c("router-link");return h(),i("div",null,[a("nav",d,[a("ul",null,[a("li",null,[e(p,{to:"#smtplib模块额常用类与方法"},{default:t(()=>s[0]||(s[0]=[k("smtplib模块额常用类与方法")])),_:1})])])]),s[1]||(s[1]=l(`<h2 id="smtplib模块额常用类与方法" tabindex="-1"><a class="header-anchor" href="#smtplib模块额常用类与方法"><span>smtplib模块额常用类与方法</span></a></h2><ul><li><p>SMTP类定义 smtplib.SMTP(host[,port[,local_hostname[,timeout]]])，作为SMTP的构造函数。功能是与smtp服务器建立连接。连接成功，就可以向服务器发送相关请求</p></li><li><p>有： 登录 校验 发送 退出</p></li><li><p>host参数：表示 远程smtp主机地址。 如 smtp.163.com</p></li><li><p>port参数：表示 连接端口。 默认为25</p></li><li><p>local_hostname参数：作用是在本地主机的FQDN（完整域名）发送HELO/EHLO（标识用户身份）指令。</p></li><li><p>timeout参数： 为连接或尝试在多少秒超时</p></li><li><p>SMTP类具有下面方法：</p><ul><li><p>SMTP.connect([host[,port]])方法：连接远程smtp主机方法。</p><ul><li>host：为主机地址</li><li>port：为远程主机smtp端口，默认 25</li><li>也可以知己使用 host:port 形式来标识，比如： SMTP.connect(&quot;smtp.163.com&quot;,&quot;25&quot;)</li></ul></li><li><p>SMTP.login(user,password)方法，远程smtp主机的校验方法，参数为用户名密码</p><ul><li>SMTP.login(&quot;<a href="mailto:python@163.com" target="_blank" rel="noopener noreferrer">python@163.com</a>&quot;,&quot;123456&quot;)</li></ul></li><li><p>SMTP.sendmail(from_addr,to_addrs,msg[,mail_options,rcpt_options])方法，实现邮件的发送功能。</p><ul><li>参数依次是：发件人，收件人，邮件内容</li><li>SMTP.sendmail(&quot;<a href="mailto:python@163.com" target="_blank" rel="noopener noreferrer">python@163.com</a>&quot;,&quot;<a href="mailto:demo@163.com" target="_blank" rel="noopener noreferrer">demo@163.com</a>&quot;,body) body内容定义如下 &#39;&#39;&#39; FROM：<a href="mailto:abc@163.com" target="_blank" rel="noopener noreferrer">abc@163.com</a> To: <a href="mailto:demo@163.com" target="_blank" rel="noopener noreferrer">demo@163.com</a> subject:test mail test mail body &#39;&#39;&#39;</li></ul></li><li><p>SMTP.starttls([keyfile[,certfile]]) 启用TLS（安全传输）模式，所有SMTP指令都将加密传输。</p><ul><li>使用gmail的smtp服务时需要启动此项才能正常发送邮件。</li></ul></li><li><p>SMTP.quit() 方法，断开SMTP服务器的连接</p></li></ul></li></ul><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">案例</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">使用163邮箱向QQ邮箱发送测试邮件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">smtplib</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">HOST</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">smtp.163.com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">定义smtp主机</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">SUBJECT</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Test</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">email</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">form</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">wli</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">定义邮件主题</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">TO</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">xxxx@qq.com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">定义收件人邮件地址</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">FROM</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">xxxx@163.com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">定义发件人的邮件地址</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">text</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">this</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">is</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">a</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">testing</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">邮件的内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">string</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&#39;&#39;&#39;FROM:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{FROM}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> </span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">TO:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{TO}</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Subject:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">{SUBJECT}</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">BODY</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">join</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">BODY</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">server</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">smtplib</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">SMTP</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">创建一个SMTP()对象</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">server</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">connect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">HOST</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">25</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">通过connect方法连接smtp主机</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">server.starttls()</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">启动安全传输模式</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">server</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">login</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">xxxx@163.com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">xxxxx</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">链接到服务器</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">server</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sendmail</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">FROM</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">TO</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">发送邮件</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">server</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">quit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">断开SMTP链接</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const y=n(r,[["render",o],["__file","index.html.vue"]]),D=JSON.parse('{"path":"/python/osll2ghz/","title":"smtplib：邮件发送库","lang":"zh-CN","frontmatter":{"createTime":"2025/02/17 16:59:38","permalink":"/python/osll2ghz/","title":"smtplib：邮件发送库","description":"smtplib模块额常用类与方法 SMTP类定义 smtplib.SMTP(host[,port[,local_hostname[,timeout]]])，作为SMTP的构造函数。功能是与smtp服务器建立连接。连接成功，就可以向服务器发送相关请求 有： 登录 校验 发送 退出 host参数：表示 远程smtp主机地址。 如 smtp.163.com ...","head":[["meta",{"property":"og:url","content":"https://notes.moniter.top/python/osll2ghz/"}],["meta",{"property":"og:site_name","content":"Richie Lin"}],["meta",{"property":"og:title","content":"smtplib：邮件发送库"}],["meta",{"property":"og:description","content":"smtplib模块额常用类与方法 SMTP类定义 smtplib.SMTP(host[,port[,local_hostname[,timeout]]])，作为SMTP的构造函数。功能是与smtp服务器建立连接。连接成功，就可以向服务器发送相关请求 有： 登录 校验 发送 退出 host参数：表示 远程smtp主机地址。 如 smtp.163.com ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"smtplib：邮件发送库\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"autoDesc":true,"filePathRelative":"notes/python/library/library/library-smtplib.md"}');export{y as comp,D as data};
