import{_ as e,c as t,a,b as h,d as n,w as p,r as k,o as c,e as l}from"./app-BVpc6fz1.js";const d={},r={class:"table-of-contents"};function o(A,s){const i=k("router-link");return c(),t("div",null,[a("nav",r,[a("ul",null,[a("li",null,[n(i,{to:"#简介"},{default:p(()=>s[0]||(s[0]=[l("简介")])),_:1})]),a("li",null,[n(i,{to:"#外部访问容器"},{default:p(()=>s[1]||(s[1]=[l("外部访问容器")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#端口映射"},{default:p(()=>s[2]||(s[2]=[l("端口映射")])),_:1})]),a("li",null,[n(i,{to:"#端口映射格式"},{default:p(()=>s[3]||(s[3]=[l("端口映射格式")])),_:1})]),a("li",null,[n(i,{to:"#查看端口映射"},{default:p(()=>s[4]||(s[4]=[l("查看端口映射")])),_:1})])])]),a("li",null,[n(i,{to:"#容器互联"},{default:p(()=>s[5]||(s[5]=[l("容器互联")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#创建网络"},{default:p(()=>s[6]||(s[6]=[l("创建网络")])),_:1})]),a("li",null,[n(i,{to:"#连接容器"},{default:p(()=>s[7]||(s[7]=[l("连接容器")])),_:1})]),a("li",null,[n(i,{to:"#测试连通性"},{default:p(()=>s[8]||(s[8]=[l("测试连通性")])),_:1})])])]),a("li",null,[n(i,{to:"#dns-配置"},{default:p(()=>s[9]||(s[9]=[l("DNS 配置")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#全局-dns-配置"},{default:p(()=>s[10]||(s[10]=[l("全局 DNS 配置")])),_:1})]),a("li",null,[n(i,{to:"#容器-dns-配置"},{default:p(()=>s[11]||(s[11]=[l("容器 DNS 配置")])),_:1})])])]),a("li",null,[n(i,{to:"#最佳实践"},{default:p(()=>s[12]||(s[12]=[l("最佳实践")])),_:1})])])]),s[13]||(s[13]=h(`<hr><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>Docker 提供了强大的网络功能，支持多种网络模式：</p><ul><li><strong>bridge</strong>: 默认网络模式，容器通过网桥连接</li><li><strong>host</strong>: 容器使用主机网络</li><li><strong>none</strong>: 容器没有网络连接</li><li><strong>overlay</strong>: 用于 Swarm 模式的跨主机网络</li><li><strong>macvlan</strong>: 允许容器直接连接物理网络</li></ul><h2 id="外部访问容器" tabindex="-1"><a class="header-anchor" href="#外部访问容器"><span>外部访问容器</span></a></h2><h3 id="端口映射" tabindex="-1"><a class="header-anchor" href="#端口映射"><span>端口映射</span></a></h3><p>Docker 提供两种端口映射方式：</p><ul><li><code>-P</code>: 随机映射端口(49000-49900)</li><li><code>-p</code>: 指定映射端口</li></ul><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">使用随机端口映射</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-d</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-P</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">training/webapp</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">python</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">app.py</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看端口映射</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">container</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ls</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-l</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看应用日志</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">logs</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-f</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">nostalgic_morse</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="端口映射格式" tabindex="-1"><a class="header-anchor" href="#端口映射格式"><span>端口映射格式</span></a></h3><p>使用 <code>-p</code> 参数时支持以下格式：</p><ul><li><code>hostPort:containerPort</code>: 映射所有接口</li><li><code>ip:hostPort:containerPort</code>: 映射指定接口</li><li><code>ip::containerPort</code>: 映射指定接口的随机端口</li></ul><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">映射本地</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">5000</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">端口到容器</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">5000</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">端口</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-d</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-p</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">5000:5000</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">training/webapp</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">python</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">app.py</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">映射到</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">localhost</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-d</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-p</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">127.0.0.1:5000:5000</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">training/webapp</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">python</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">app.py</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">映射到随机端口</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-d</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-p</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">127.0.0.1::5000</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">training/webapp</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">python</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">app.py</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">指定</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">UDP</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">协议</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-d</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-p</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">127.0.0.1:5000:5000/udp</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">training/webapp</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">python</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">app.py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看端口映射" tabindex="-1"><a class="header-anchor" href="#查看端口映射"><span>查看端口映射</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看指定端口映射</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">port</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">nostalgic_morse</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">5000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看容器所有端口映射</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">port</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">nostalgic_morse</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意：</strong></p><ul><li>每个端口只能绑定到一个容器</li><li>可以多次使用 <code>-p</code> 参数绑定多个端口</li><li>容器重启后端口映射会保持不变</li></ul></blockquote><h2 id="容器互联" tabindex="-1"><a class="header-anchor" href="#容器互联"><span>容器互联</span></a></h2><h3 id="创建网络" tabindex="-1"><a class="header-anchor" href="#创建网络"><span>创建网络</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">创建桥接网络</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">network</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">create</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-d</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bridge</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">my-net</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看网络列表</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">network</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ls</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="连接容器" tabindex="-1"><a class="header-anchor" href="#连接容器"><span>连接容器</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">启动容器并连接到网络</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-it</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--rm</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--name</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">busybox1</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--network</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">my-net</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">busybox</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">启动第二个容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-it</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--rm</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--name</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">busybox2</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--network</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">my-net</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">busybox</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试连通性" tabindex="-1"><a class="header-anchor" href="#测试连通性"><span>测试连通性</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">在</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">busybox1</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">中测试</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ping</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">busybox2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">在</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">busybox2</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">中测试</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ping</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">busybox1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dns-配置" tabindex="-1"><a class="header-anchor" href="#dns-配置"><span>DNS 配置</span></a></h2><h3 id="全局-dns-配置" tabindex="-1"><a class="header-anchor" href="#全局-dns-配置"><span>全局 DNS 配置</span></a></h3><p>编辑 <code>/etc/docker/daemon.json</code>：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">dns</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">114.114.114.114</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">8.8.8.8</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器-dns-配置" tabindex="-1"><a class="header-anchor" href="#容器-dns-配置"><span>容器 DNS 配置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">设置容器的主机名</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-it</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--rm</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--hostname=my-host</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">centos:7</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">设置</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">DNS</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">服务器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-it</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--rm</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--dns=8.8.8.8</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">centos:7</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">设置</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">DNS</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">搜索域</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-it</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--rm</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--dns-search=example.com</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">centos:7</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><ol><li><p>网络安全</p><ul><li>避免暴露不必要的端口</li><li>使用内部网络进行容器间通信</li><li>配置适当的防火墙规则</li></ul></li><li><p>网络性能</p><ul><li>使用 host 网络模式提高性能</li><li>合理规划网络拓扑</li><li>监控网络流量</li></ul></li><li><p>服务发现</p><ul><li>使用 Docker DNS 服务</li><li>考虑使用服务发现工具</li><li>实现健康检查机制</li></ul></li></ol><blockquote><p><strong>参考资料：</strong></p><ul><li><a href="https://docs.docker.com/network/" target="_blank" rel="noopener noreferrer">Docker 网络概述</a></li><li><a href="https://docs.docker.com/engine/reference/commandline/network/" target="_blank" rel="noopener noreferrer">Docker 网络命令</a></li></ul></blockquote>`,32))])}const D=e(d,[["render",o],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/linux/isj201mq/","title":"14. 使用网络","lang":"zh-CN","frontmatter":{"createTime":"2025/02/17 16:59:04","permalink":"/linux/isj201mq/","title":"14. 使用网络","description":"简介 Docker 提供了强大的网络功能，支持多种网络模式： bridge: 默认网络模式，容器通过网桥连接 host: 容器使用主机网络 none: 容器没有网络连接 overlay: 用于 Swarm 模式的跨主机网络 macvlan: 允许容器直接连接物理网络 外部访问容器 端口映射 Docker 提供两种端口映射方式： -P: 随机映射端口(4...","head":[["meta",{"property":"og:url","content":"https://notes.moniter.top/linux/isj201mq/"}],["meta",{"property":"og:site_name","content":"Richie Lin"}],["meta",{"property":"og:title","content":"14. 使用网络"}],["meta",{"property":"og:description","content":"简介 Docker 提供了强大的网络功能，支持多种网络模式： bridge: 默认网络模式，容器通过网桥连接 host: 容器使用主机网络 none: 容器没有网络连接 overlay: 用于 Swarm 模式的跨主机网络 macvlan: 允许容器直接连接物理网络 外部访问容器 端口映射 Docker 提供两种端口映射方式： -P: 随机映射端口(4..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"14. 使用网络\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"autoDesc":true,"filePathRelative":"notes/linux/Kubernetes/Docker系列学习/Docker系列学习-14.使用网络.md"}');export{D as comp,y as data};
