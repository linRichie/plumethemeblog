import{_ as e,c,a,b as t,d as n,w as i,r as h,o as k,e as l}from"./app-BVpc6fz1.js";const r={},d={class:"table-of-contents"};function A(D,s){const p=h("router-link");return k(),c("div",null,[a("nav",d,[a("ul",null,[a("li",null,[n(p,{to:"#简介"},{default:i(()=>s[0]||(s[0]=[l("简介")])),_:1})]),a("li",null,[n(p,{to:"#配置方法"},{default:i(()=>s[1]||(s[1]=[l("配置方法")])),_:1})]),a("li",null,[n(p,{to:"#常用别名示例"},{default:i(()=>s[2]||(s[2]=[l("常用别名示例")])),_:1})]),a("li",null,[n(p,{to:"#最佳实践"},{default:i(()=>s[3]||(s[3]=[l("最佳实践")])),_:1})])])]),s[4]||(s[4]=t(`<hr><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>alias 命令用于设置命令别名，可以将常用的长命令设置为简短的别名，提高工作效率。</p><h2 id="配置方法" tabindex="-1"><a class="header-anchor" href="#配置方法"><span>配置方法</span></a></h2><p>在<code>~</code>目录下的<code>.bashrc</code>文件里面进行设置</p><h2 id="常用别名示例" tabindex="-1"><a class="header-anchor" href="#常用别名示例"><span>常用别名示例</span></a></h2><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">编辑配置文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vim</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">~/.bashrc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">网络相关</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">获取局域网IP</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">alias</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ipi</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ifconfig</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">|</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">grep</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">inet</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">|</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">grep</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">192</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">|</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">awk</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&#39;{print</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$2}&#39;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">获取公网IP</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">alias</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ipe</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">curl</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ipinfo.io/ip</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">系统工具</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">抓包</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">alias</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">zhuabao</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">sudo</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">tcpdump</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-i</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">any</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">清屏</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">alias</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">clear</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">HTTP</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">测试</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">简洁模式</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">alias</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">curlb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">curl</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-s</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-o</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/dev/null</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-w</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;19-10-25T11:24:10+08:00</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{http_code}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{time_namelookup}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{time_connect}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{time_appconnect}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{time_pretransfer}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{time_redirect}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{time_starttransfer}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{size_request}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{size_download}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{speed_download}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{time_total}\\n&quot;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">详细模式</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">alias</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">curld</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">curl</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-s</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-o</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/dev/null</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-w</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">请求时间:</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">19-10-25T11:24:10+08:00</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">HTTP状态码:</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{http_code}</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">DNS解析时间:</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{time_namelookup}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">建立连接时间:</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{time_connect}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">连接完成时间:</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{time_appconnect}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">准备传输时间:</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{time_pretransfer}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">重定向时间:</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{time_redirect}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">传输开始时间:</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{time_starttransfer}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">请求数据包大小:</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{size_request}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Bytes</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">下载数据包大小:</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{size_download}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Bytes</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">平均下载速度:</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{speed_download}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Bytes/s</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">--------------</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">消耗总时长:</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%{time_total}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">\\n</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><ol><li><p><strong>命名建议</strong></p><ul><li>使用简短且有意义的别名</li><li>避免与系统命令冲突</li><li>保持命名风格一致</li></ul></li><li><p><strong>管理建议</strong></p><ul><li>对别名进行分类注释</li><li>定期清理不用的别名</li><li>重要别名做好备份</li></ul></li></ol><blockquote><p><strong>注意：</strong></p><ul><li>修改后需要 source ~/.bashrc 生效</li><li>别名优先级高于原命令</li><li>使用 \\command 可以执行原命令</li></ul></blockquote><hr><blockquote><p><strong>参考资料：</strong></p><ul><li><a href="https://www.gnu.org/software/bash/manual/bash.html" target="_blank" rel="noopener noreferrer">Bash 参考手册</a></li><li><a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer">Linux 命令大全</a></li></ul></blockquote>`,12))])}const o=e(r,[["render",A],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/linux/j4tmgegt/","title":"命令别名:alias","lang":"zh-CN","frontmatter":{"createTime":"2025/02/17 16:59:04","permalink":"/linux/j4tmgegt/","title":"命令别名:alias","description":"简介 alias 命令用于设置命令别名，可以将常用的长命令设置为简短的别名，提高工作效率。 配置方法 在~目录下的.bashrc文件里面进行设置 常用别名示例 最佳实践 命名建议 使用简短且有意义的别名 避免与系统命令冲突 保持命名风格一致 管理建议 对别名进行分类注释 定期清理不用的别名 重要别名做好备份 注意： 修改后需要 source ~/.ba...","head":[["meta",{"property":"og:url","content":"https://notes.moniter.top/linux/j4tmgegt/"}],["meta",{"property":"og:site_name","content":"Richie Lin"}],["meta",{"property":"og:title","content":"命令别名:alias"}],["meta",{"property":"og:description","content":"简介 alias 命令用于设置命令别名，可以将常用的长命令设置为简短的别名，提高工作效率。 配置方法 在~目录下的.bashrc文件里面进行设置 常用别名示例 最佳实践 命名建议 使用简短且有意义的别名 避免与系统命令冲突 保持命名风格一致 管理建议 对别名进行分类注释 定期清理不用的别名 重要别名做好备份 注意： 修改后需要 source ~/.ba..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命令别名:alias\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"autoDesc":true,"filePathRelative":"notes/linux/Commands/alias.md"}');export{o as comp,y as data};
