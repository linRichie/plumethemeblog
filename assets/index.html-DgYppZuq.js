import{_ as l,c as t,a,b as c,d as n,w as p,r as h,o as d,e}from"./app-BVpc6fz1.js";const r={},k={class:"table-of-contents"};function o(u,s){const i=h("router-link");return d(),t("div",null,[a("nav",k,[a("ul",null,[a("li",null,[n(i,{to:"#简介"},{default:p(()=>s[0]||(s[0]=[e("简介")])),_:1})]),a("li",null,[n(i,{to:"#使用-autopep8"},{default:p(()=>s[1]||(s[1]=[e("使用 autopep8")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#安装autopep8"},{default:p(()=>s[2]||(s[2]=[e("安装autopep8")])),_:1})]),a("li",null,[n(i,{to:"#基本用法"},{default:p(()=>s[3]||(s[3]=[e("基本用法")])),_:1})]),a("li",null,[n(i,{to:"#配置文件"},{default:p(()=>s[4]||(s[4]=[e("配置文件")])),_:1})])])]),a("li",null,[n(i,{to:"#编码格式转换"},{default:p(()=>s[5]||(s[5]=[e("编码格式转换")])),_:1})]),a("li",null,[n(i,{to:"#最佳实践"},{default:p(()=>s[6]||(s[6]=[e("最佳实践")])),_:1})])])]),s[7]||(s[7]=c(`<hr><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>PEP8 是 Python 的代码风格指南。在跨平台开发时,代码格式(如缩进、换行符等)可能导致问题。本文介绍如何使用工具自动格式化代码。</p><h2 id="使用-autopep8" tabindex="-1"><a class="header-anchor" href="#使用-autopep8"><span>使用 autopep8</span></a></h2><h3 id="安装autopep8" tabindex="-1"><a class="header-anchor" href="#安装autopep8"><span>安装autopep8</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">普通安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pip</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">install</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--upgrade</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">autopep8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">使用国内源安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pip</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">install</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--upgrade</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">autopep8</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--trusted-host</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">mirrors.aliyun.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h3><p>autopep8 提供了多种格式化选项:</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">临时查看格式化效果，不覆盖原有的代码</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">autopep8</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--aggressive</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--aggressive</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">code.py</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">覆盖原有的代码格式化</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">autopep8</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--in-place</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--aggressive</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--aggressive</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">code.py</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">格式化目录下所有</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">Python</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">autopep8</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--in-place</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--aggressive</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--recursive</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h3><p>可以创建 <code>setup.cfg</code> 或 <code>tox.ini</code> 配置文件，这些文件通常存放在项目的根目录下。例如，如果你的项目结构如下所示：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">my_project/</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">setup.cfg</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">my_module/</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">__init__.py</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">my_file.py</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">tests/</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">test_my_file.py</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">tox.ini</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>setup.cfg</code> 或 <code>tox.ini</code> 文件中，可以添加以下配置：</p><div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pycodestyle</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">max_line_length</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">120</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ignore</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">E226,E302,E41</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编码格式转换" tabindex="-1"><a class="header-anchor" href="#编码格式转换"><span>编码格式转换</span></a></h2><p>使用 Vim 转换文件格式:</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">在</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">Vim</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">中执行</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">:set</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ff=unix</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">转换为</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">Unix</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">格式</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">:set</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ff=dos</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">转换为</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">Windows</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">格式</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">:wq</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">保存并退出</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><ol><li><p><strong>格式化建议</strong></p><ul><li>使用版本控制</li><li>在提交前格式化</li><li>团队统一配置</li></ul></li><li><p><strong>编码建议</strong></p><ul><li>统一使用 UTF-8</li><li>注意换行符</li><li>保持一致的缩进</li></ul></li></ol><blockquote><p><strong>注意：</strong></p><ul><li>备份重要文件</li><li>检查格式化结果</li><li>遵循项目规范</li></ul></blockquote>`,20))])}const g=l(r,[["render",o],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/python/mb1ld8b1/","title":"Python: PEP8自动格式化代码","lang":"zh-CN","frontmatter":{"createTime":"2025/02/17 16:59:38","permalink":"/python/mb1ld8b1/","title":"Python: PEP8自动格式化代码","description":"简介 PEP8 是 Python 的代码风格指南。在跨平台开发时,代码格式(如缩进、换行符等)可能导致问题。本文介绍如何使用工具自动格式化代码。 使用 autopep8 安装autopep8 基本用法 autopep8 提供了多种格式化选项: 配置文件 可以创建 setup.cfg 或 tox.ini 配置文件，这些文件通常存放在项目的根目录下。例如，...","head":[["meta",{"property":"og:url","content":"https://notes.moniter.top/python/mb1ld8b1/"}],["meta",{"property":"og:site_name","content":"Richie Lin"}],["meta",{"property":"og:title","content":"Python: PEP8自动格式化代码"}],["meta",{"property":"og:description","content":"简介 PEP8 是 Python 的代码风格指南。在跨平台开发时,代码格式(如缩进、换行符等)可能导致问题。本文介绍如何使用工具自动格式化代码。 使用 autopep8 安装autopep8 基本用法 autopep8 提供了多种格式化选项: 配置文件 可以创建 setup.cfg 或 tox.ini 配置文件，这些文件通常存放在项目的根目录下。例如，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python: PEP8自动格式化代码\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"autoDesc":true,"filePathRelative":"notes/python/实践/Python-PEP8自动格式化代码.md"}');export{g as comp,y as data};
