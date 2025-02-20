import{_ as e,c as t,a,b as h,d as n,w as l,r as k,o as d,e as p}from"./app-BVpc6fz1.js";const r={},c={class:"table-of-contents"};function g(o,s){const i=k("router-link");return d(),t("div",null,[a("nav",c,[a("ul",null,[a("li",null,[n(i,{to:"#_1-系统日志概述"},{default:l(()=>s[0]||(s[0]=[p("1. 系统日志概述")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#_1-1-日志类型"},{default:l(()=>s[1]||(s[1]=[p("1.1 日志类型")])),_:1})])])]),a("li",null,[n(i,{to:"#_2-日志管理工具"},{default:l(()=>s[2]||(s[2]=[p("2. 日志管理工具")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#_2-1-基本命令"},{default:l(()=>s[3]||(s[3]=[p("2.1 基本命令")])),_:1})]),a("li",null,[n(i,{to:"#_2-2-日志分析工具"},{default:l(()=>s[4]||(s[4]=[p("2.2 日志分析工具")])),_:1})])])]),a("li",null,[n(i,{to:"#_3-日志配置"},{default:l(()=>s[5]||(s[5]=[p("3. 日志配置")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#_3-1-rsyslog-配置"},{default:l(()=>s[6]||(s[6]=[p("3.1 rsyslog 配置")])),_:1})]),a("li",null,[n(i,{to:"#_3-2-logrotate-配置"},{default:l(()=>s[7]||(s[7]=[p("3.2 logrotate 配置")])),_:1})])])]),a("li",null,[n(i,{to:"#_4-日志分析方法"},{default:l(()=>s[8]||(s[8]=[p("4. 日志分析方法")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#_4-1-���用分析命令"},{default:l(()=>s[9]||(s[9]=[p("4.1 ���用分析命令")])),_:1})]),a("li",null,[n(i,{to:"#_4-2-日志监控脚本"},{default:l(()=>s[10]||(s[10]=[p("4.2 日志监控脚本")])),_:1})])])]),a("li",null,[n(i,{to:"#_5-日志安全"},{default:l(()=>s[11]||(s[11]=[p("5. 日志安全")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#_5-1-日志加密"},{default:l(()=>s[12]||(s[12]=[p("5.1 日志加密")])),_:1})]),a("li",null,[n(i,{to:"#_5-2-远程日志"},{default:l(()=>s[13]||(s[13]=[p("5.2 远程日志")])),_:1})])])]),a("li",null,[n(i,{to:"#_6-最佳实践"},{default:l(()=>s[14]||(s[14]=[p("6. 最佳实践")])),_:1})])])]),s[15]||(s[15]=h(`<h2 id="_1-系统日志概述" tabindex="-1"><a class="header-anchor" href="#_1-系统日志概述"><span>1. 系统日志概述</span></a></h2><h3 id="_1-1-日志类型" tabindex="-1"><a class="header-anchor" href="#_1-1-日志类型"><span>1.1 日志类型</span></a></h3><ol><li><p><strong>系统日志</strong></p><ul><li><code>/var/log/syslog</code></li><li><code>/var/log/messages</code></li><li><code>/var/log/dmesg</code></li></ul></li><li><p><strong>应用日志</strong></p><ul><li><code>/var/log/apache2/</code></li><li><code>/var/log/nginx/</code></li><li><code>/var/log/mysql/</code></li></ul></li><li><p><strong>安全日志</strong></p><ul><li><code>/var/log/auth.log</code></li><li><code>/var/log/secure</code></li><li><code>/var/log/audit/</code></li></ul></li></ol><h2 id="_2-日志管理工具" tabindex="-1"><a class="header-anchor" href="#_2-日志管理工具"><span>2. 日志管理工具</span></a></h2><h3 id="_2-1-基本命令" tabindex="-1"><a class="header-anchor" href="#_2-1-基本命令"><span>2.1 基本命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看实时日志</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">tail</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-f</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/var/log/syslog</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">搜索日志内容</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">grep</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">error</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/var/log/syslog</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">统计日志数量</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">wc</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-l</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/var/log/syslog</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-日志分析工具" tabindex="-1"><a class="header-anchor" href="#_2-2-日志分析工具"><span>2.2 日志分析工具</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">安装</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">logwatch</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">apt</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">install</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">logwatch</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">Ubuntu/Debian</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">yum</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">install</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">logwatch</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">CentOS/RHEL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">使用</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">logwatch</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">logwatch</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--detail</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">High</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--range</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">All</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--output</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">stdout</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-日志配置" tabindex="-1"><a class="header-anchor" href="#_3-日志配置"><span>3. 日志配置</span></a></h2><h3 id="_3-1-rsyslog-配置" tabindex="-1"><a class="header-anchor" href="#_3-1-rsyslog-配置"><span>3.1 rsyslog 配置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">编辑</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">rsyslog</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vim</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/etc/rsyslog.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">重启</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">rsyslog</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">服务</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">systemctl</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">restart</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">rsyslog</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-logrotate-配置" tabindex="-1"><a class="header-anchor" href="#_3-2-logrotate-配置"><span>3.2 logrotate 配置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">编辑</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">logrotate</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vim</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/etc/logrotate.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">创建自定义规则</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vim</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/etc/logrotate.d/custom</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-日志分析方法" tabindex="-1"><a class="header-anchor" href="#_4-日志分析方法"><span>4. 日志分析方法</span></a></h2><h3 id="_4-1-���用分析命令" tabindex="-1"><a class="header-anchor" href="#_4-1-���用分析命令"><span>4.1 ���用分析命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">提取错误信息</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">awk</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/error/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/var/log/syslog</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">统计访问</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">IP</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">awk</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{print</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$1}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">access.log</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sort</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">uniq</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-c</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">分析时间段</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sed</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-n</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/May</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">20</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">10:00:00/,/May</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">20</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">11:00:00/p</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">syslog</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-日志监控脚本" tabindex="-1"><a class="header-anchor" href="#_4-2-日志监控脚本"><span>4.2 日志监控脚本</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">监控日志文件大小</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">log_file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/var/log/syslog</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">max_size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">100000000</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">100MB</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">current_size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=$(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">du</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-b</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$log_file</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cut</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-f1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$current_size</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-gt</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$max_size</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">];</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">then</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Log</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">file</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">too</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">large:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$log_file</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">logger</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Warning:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Log</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">file</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">size</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">exceeded</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">threshold</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-日志安全" tabindex="-1"><a class="header-anchor" href="#_5-日志安全"><span>5. 日志安全</span></a></h2><h3 id="_5-1-日志加密" tabindex="-1"><a class="header-anchor" href="#_5-1-日志加密"><span>5.1 日志加密</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">使用</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">GPG</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">加密日志</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">gpg</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-c</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">logfile.log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">日志文件权限设置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">chmod</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">640</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/var/log/secure</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">chown</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">root:adm</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/var/log/secure</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-远程日志" tabindex="-1"><a class="header-anchor" href="#_5-2-远程日志"><span>5.2 远程日志</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">配置远程日志服务器</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">在</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/etc/rsyslog.conf</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">中添加</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@remote-host:514</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">启用</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">TCP</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">传输</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@@remote-host:514</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-最佳实践" tabindex="-1"><a class="header-anchor" href="#_6-最佳实践"><span>6. 最佳实践</span></a></h2><ol><li><p><strong>日志策略</strong></p><ul><li>确定日志级别</li><li>设置保留期限</li><li>规划存储空间</li></ul></li><li><p><strong>监控告警</strong></p><ul><li>设置关键字告警</li><li>监控日志大小</li><li>配置自动响应</li></ul></li><li><p><strong>安全考虑</strong></p><ul><li>日志访问控制</li><li>日志完整性检查</li><li>日志备份策略</li></ul></li></ol>`,25))])}const D=e(r,[["render",g],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/linux/thvip7l9/","title":"Linux 系统日志管理","lang":"zh-CN","frontmatter":{"createTime":"2025/02/17 16:59:04","permalink":"/linux/thvip7l9/","title":"Linux 系统日志管理","description":"1. 系统日志概述 1.1 日志类型 系统日志 /var/log/syslog /var/log/messages /var/log/dmesg 应用日志 /var/log/apache2/ /var/log/nginx/ /var/log/mysql/ 安全日志 /var/log/auth.log /var/log/secure /var/log/a...","head":[["meta",{"property":"og:url","content":"https://notes.moniter.top/linux/thvip7l9/"}],["meta",{"property":"og:site_name","content":"Richie Lin"}],["meta",{"property":"og:title","content":"Linux 系统日志管理"}],["meta",{"property":"og:description","content":"1. 系统日志概述 1.1 日志类型 系统日志 /var/log/syslog /var/log/messages /var/log/dmesg 应用日志 /var/log/apache2/ /var/log/nginx/ /var/log/mysql/ 安全日志 /var/log/auth.log /var/log/secure /var/log/a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 系统日志管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"autoDesc":true,"filePathRelative":"notes/linux/log/日志管理.md"}');export{D as comp,y as data};
