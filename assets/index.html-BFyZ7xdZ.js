import{_ as p,c as t,a,b as h,d as n,w as e,r as d,o as k,e as l}from"./app-BVpc6fz1.js";const r={},c={class:"table-of-contents"};function o(A,s){const i=d("router-link");return k(),t("div",null,[a("nav",c,[a("ul",null,[a("li",null,[n(i,{to:"#简介"},{default:e(()=>s[0]||(s[0]=[l("简介")])),_:1})]),a("li",null,[n(i,{to:"#基本用法"},{default:e(()=>s[1]||(s[1]=[l("基本用法")])),_:1})]),a("li",null,[n(i,{to:"#密钥管理"},{default:e(()=>s[2]||(s[2]=[l("密钥管理")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#文件位置"},{default:e(()=>s[3]||(s[3]=[l("文件位置")])),_:1})]),a("li",null,[n(i,{to:"#权限设置"},{default:e(()=>s[4]||(s[4]=[l("权限设置")])),_:1})])])]),a("li",null,[n(i,{to:"#常用参数"},{default:e(()=>s[5]||(s[5]=[l("常用参数")])),_:1})]),a("li",null,[n(i,{to:"#使用示例"},{default:e(()=>s[6]||(s[6]=[l("使用示例")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#_1-生成密钥"},{default:e(()=>s[7]||(s[7]=[l("1. 生成密钥")])),_:1})]),a("li",null,[n(i,{to:"#_2-密钥转换"},{default:e(()=>s[8]||(s[8]=[l("2. 密钥转换")])),_:1})])])]),a("li",null,[n(i,{to:"#最佳实践"},{default:e(()=>s[9]||(s[9]=[l("最佳实践")])),_:1})])])]),s[10]||(s[10]=h(`<hr><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>ssh-keygen 是一个用于生成、管理和转换 SSH 密钥的工具。它可以创建用于 SSH 协议版本 1 和 2 的认证密钥。</p><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">生成</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">RSA</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">密钥对</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh-keygen</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-t</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">rsa</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-b</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">4096</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-C</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">your_email@example.com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">指定文件名</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh-keygen</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-t</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">rsa</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-f</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">~/.ssh/my_key</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-C</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">custom</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">key</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">分发公钥</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh-copy-id</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-i</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">~/.ssh/id_rsa.pub</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">username@hostname</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="密钥管理" tabindex="-1"><a class="header-anchor" href="#密钥管理"><span>密钥管理</span></a></h2><h3 id="文件位置" tabindex="-1"><a class="header-anchor" href="#文件位置"><span>文件位置</span></a></h3><p>默认生成的文件位于 <code>~/.ssh/</code> 目录：</p><ul><li><code>id_rsa</code>：私钥文件</li><li><code>id_rsa.pub</code>：公钥文件</li></ul><h3 id="权限设置" tabindex="-1"><a class="header-anchor" href="#权限设置"><span>权限设置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">创建</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">.ssh</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-p</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">~/.ssh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">设置正确的权限</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">chmod</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">700</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">~/.ssh</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">chmod</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">600</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">~/.ssh/id_rsa</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">chmod</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">644</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">~/.ssh/id_rsa.pub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数"><span>常用参数</span></a></h2><table><thead><tr><th>参数</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>-t</td><td>指定密钥类型</td><td>ssh-keygen -t rsa</td></tr><tr><td>-b</td><td>指定密钥长度</td><td>ssh-keygen -b 4096</td></tr><tr><td>-f</td><td>指定密钥文件名</td><td>ssh-keygen -f ~/.ssh/my_key</td></tr><tr><td>-C</td><td>添加注释</td><td>ssh-keygen -C &quot;comment&quot;</td></tr><tr><td>-p</td><td>修改密钥密码</td><td>ssh-keygen -p -f key_file</td></tr></tbody></table><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2><h3 id="_1-生成密钥" tabindex="-1"><a class="header-anchor" href="#_1-生成密钥"><span>1. 生成密钥</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">生成默认</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">RSA</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">密钥</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh-keygen</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">生成带注释的密钥</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh-keygen</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-t</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">rsa</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-C</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">work</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">key</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-密钥转换" tabindex="-1"><a class="header-anchor" href="#_2-密钥转换"><span>2. 密钥转换</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">转换为</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">PEM</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">格式</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh-keygen</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-e</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-m</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PEM</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-f</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">~/.ssh/id_rsa</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">id_rsa.pem</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><ol><li><p><strong>安全建议</strong></p><ul><li>使用强密码保护私钥</li><li>定期更换密钥</li><li>妥善保管私钥文件</li></ul></li><li><p><strong>使用建议</strong></p><ul><li>为不同用途创建不同密钥</li><li>使用有意义的注释</li><li>备份重要密钥</li></ul></li></ol><blockquote><p><strong>注意：</strong></p><ul><li>私钥文件权限必须是 600</li><li>.ssh 目录权限必须是 700</li><li>不要在不安全的系统上生成密钥</li></ul></blockquote><hr><blockquote><p><strong>参考资料：</strong></p><ul><li><a href="https://www.ssh.com/ssh/keygen/" target="_blank" rel="noopener noreferrer">OpenSSH 密钥管理</a></li><li><a href="https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys" target="_blank" rel="noopener noreferrer">SSH 密钥最佳实践</a></li></ul></blockquote>`,23))])}const y=p(r,[["render",o],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/linux/yjvcjmop/","title":"ssh-keygen","lang":"zh-CN","frontmatter":{"createTime":"2025/02/17 16:59:04","permalink":"/linux/yjvcjmop/","title":"ssh-keygen","description":"简介 ssh-keygen 是一个用于生成、管理和转换 SSH 密钥的工具。它可以创建用于 SSH 协议版本 1 和 2 的认证密钥。 基本用法 密钥管理 文件位置 默认生成的文件位于 ~/.ssh/ 目录： id_rsa：私钥文件 id_rsa.pub：公钥文件 权限设置 常用参数 使用示例 1. 生成密钥 2. 密钥转换 最佳实践 安全建议 使用强...","head":[["meta",{"property":"og:url","content":"https://notes.moniter.top/linux/yjvcjmop/"}],["meta",{"property":"og:site_name","content":"Richie Lin"}],["meta",{"property":"og:title","content":"ssh-keygen"}],["meta",{"property":"og:description","content":"简介 ssh-keygen 是一个用于生成、管理和转换 SSH 密钥的工具。它可以创建用于 SSH 协议版本 1 和 2 的认证密钥。 基本用法 密钥管理 文件位置 默认生成的文件位于 ~/.ssh/ 目录： id_rsa：私钥文件 id_rsa.pub：公钥文件 权限设置 常用参数 使用示例 1. 生成密钥 2. 密钥转换 最佳实践 安全建议 使用强..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ssh-keygen\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"autoDesc":true,"filePathRelative":"notes/linux/Commands/ssh/ssh-keygen.md"}');export{y as comp,u as data};
