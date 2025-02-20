import{_ as p,c as t,a,b as h,d as n,w as l,r as d,o as k,e}from"./app-BVpc6fz1.js";const c={},r={class:"table-of-contents"};function A(D,s){const i=d("router-link");return k(),t("div",null,[a("nav",r,[a("ul",null,[a("li",null,[n(i,{to:"#_1-进程基础"},{default:l(()=>s[0]||(s[0]=[e("1. 进程基础")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#_1-1-进程概念"},{default:l(()=>s[1]||(s[1]=[e("1.1 进程概念")])),_:1})]),a("li",null,[n(i,{to:"#_1-2-查看进程"},{default:l(()=>s[2]||(s[2]=[e("1.2 查看进程")])),_:1})])])]),a("li",null,[n(i,{to:"#_2-进程控制"},{default:l(()=>s[3]||(s[3]=[e("2. 进程控制")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#_2-1-启动进程"},{default:l(()=>s[4]||(s[4]=[e("2.1 启动进程")])),_:1})]),a("li",null,[n(i,{to:"#_2-2-停止进程"},{default:l(()=>s[5]||(s[5]=[e("2.2 停止进程")])),_:1})]),a("li",null,[n(i,{to:"#_2-3-进程状态控制"},{default:l(()=>s[6]||(s[6]=[e("2.3 进程状态控制")])),_:1})])])]),a("li",null,[n(i,{to:"#_3-进程监控"},{default:l(()=>s[7]||(s[7]=[e("3. 进程监控")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#_3-1-资源使用"},{default:l(()=>s[8]||(s[8]=[e("3.1 资源使用")])),_:1})]),a("li",null,[n(i,{to:"#_3-2-进程跟踪"},{default:l(()=>s[9]||(s[9]=[e("3.2 进程跟踪")])),_:1})])])]),a("li",null,[n(i,{to:"#_4-进程优先级"},{default:l(()=>s[10]||(s[10]=[e("4. 进程优先级")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#_4-1-nice-值调整"},{default:l(()=>s[11]||(s[11]=[e("4.1 nice 值调整")])),_:1})]),a("li",null,[n(i,{to:"#_4-2-实时优先级"},{default:l(()=>s[12]||(s[12]=[e("4.2 实时优先级")])),_:1})])])]),a("li",null,[n(i,{to:"#_5-守护进程"},{default:l(()=>s[13]||(s[13]=[e("5. 守护进程")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#_5-1-systemd-服务"},{default:l(()=>s[14]||(s[14]=[e("5.1 systemd 服务")])),_:1})]),a("li",null,[n(i,{to:"#_5-2-服务管理"},{default:l(()=>s[15]||(s[15]=[e("5.2 服务管理")])),_:1})])])]),a("li",null,[n(i,{to:"#_6-进程通信"},{default:l(()=>s[16]||(s[16]=[e("6. 进程通信")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#_6-1-信号"},{default:l(()=>s[17]||(s[17]=[e("6.1 信号")])),_:1})]),a("li",null,[n(i,{to:"#_6-2-管道和重定向"},{default:l(()=>s[18]||(s[18]=[e("6.2 管道和重定向")])),_:1})])])]),a("li",null,[n(i,{to:"#_7-性能优化"},{default:l(()=>s[19]||(s[19]=[e("7. 性能优化")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#_7-1-资源限制"},{default:l(()=>s[20]||(s[20]=[e("7.1 资源限制")])),_:1})]),a("li",null,[n(i,{to:"#_7-2-进程-cpu-绑定"},{default:l(()=>s[21]||(s[21]=[e("7.2 进程 CPU 绑定")])),_:1})])])])])]),s[22]||(s[22]=h(`<hr><h2 id="_1-进程基础" tabindex="-1"><a class="header-anchor" href="#_1-进程基础"><span>1. 进程基础</span></a></h2><h3 id="_1-1-进程概念" tabindex="-1"><a class="header-anchor" href="#_1-1-进程概念"><span>1.1 进程概念</span></a></h3><ul><li>PID (进程ID)</li><li>PPID (父进程ID)</li><li>进程状态 (运行、睡眠、停止等)</li><li>进程优先级</li><li>资源使用情况</li></ul><h3 id="_1-2-查看进程" tabindex="-1"><a class="header-anchor" href="#_1-2-查看进程"><span>1.2 查看进程</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看所有进程</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ps</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">aux</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">实时进程监控</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">top</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">树形显示进程</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pstree</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看特定进程</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ps</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-fp</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PID</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-进程控制" tabindex="-1"><a class="header-anchor" href="#_2-进程控制"><span>2. 进程控制</span></a></h2><h3 id="_2-1-启动进程" tabindex="-1"><a class="header-anchor" href="#_2-1-启动进程"><span>2.1 启动进程</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">前台启动</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">command</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">后台启动</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">command</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&amp;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">nohup</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">启动</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nohup</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">command</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&amp;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-停止进程" tabindex="-1"><a class="header-anchor" href="#_2-2-停止进程"><span>2.2 停止进程</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">正常终止</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">kill</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PID</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">强制终止</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">kill</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-9</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PID</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">终止进程组</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">killall</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">process_name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-进程状态控制" tabindex="-1"><a class="header-anchor" href="#_2-3-进程状态控制"><span>2.3 进程状态控制</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">暂停进程</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">kill</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-STOP</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PID</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">继续进程</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">kill</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-CONT</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PID</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">重新加载配置</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">kill</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-HUP</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PID</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-进程监控" tabindex="-1"><a class="header-anchor" href="#_3-进程监控"><span>3. 进程监控</span></a></h2><h3 id="_3-1-资源使用" tabindex="-1"><a class="header-anchor" href="#_3-1-资源使用"><span>3.1 资源使用</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">CPU</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">使用率</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">top</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-p</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PID</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">内存使用</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">free</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-h</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vmstat</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">IO</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">使用</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">iotop</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-进程跟踪" tabindex="-1"><a class="header-anchor" href="#_3-2-进程跟踪"><span>3.2 进程跟踪</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">系统调用跟踪</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">strace</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">command</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">库函数跟踪</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ltrace</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">command</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">文件访问跟踪</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">lsof</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-p</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PID</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-进程优先级" tabindex="-1"><a class="header-anchor" href="#_4-进程优先级"><span>4. 进程优先级</span></a></h2><h3 id="_4-1-nice-值调整" tabindex="-1"><a class="header-anchor" href="#_4-1-nice-值调整"><span>4.1 nice 值调整</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">启动时设置优先级</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nice</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-n</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">command</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">修改运行中的进程优先级</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">renice</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-p</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PID</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-实时优先级" tabindex="-1"><a class="header-anchor" href="#_4-2-实时优先级"><span>4.2 实时优先级</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">设置实时优先级</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">chrt</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-f</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">99</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">command</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看进程优先级</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">chrt</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-p</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PID</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-守护进程" tabindex="-1"><a class="header-anchor" href="#_5-守护进程"><span>5. 守护进程</span></a></h2><h3 id="_5-1-systemd-服务" tabindex="-1"><a class="header-anchor" href="#_5-1-systemd-服务"><span>5.1 systemd 服务</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">创建服务文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vim</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/etc/systemd/system/myservice.service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">启动服务</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">systemctl</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">start</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">myservice</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">开机自启</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">systemctl</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">enable</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">myservice</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看服务状态</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">systemctl</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">status</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">myservice</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-服务管理" tabindex="-1"><a class="header-anchor" href="#_5-2-服务管理"><span>5.2 服务管理</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">重启服务</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">systemctl</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">restart</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">myservice</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">重新加载配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">systemctl</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">reload</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">myservice</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">停止服务</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">systemctl</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">stop</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">myservice</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-进程通信" tabindex="-1"><a class="header-anchor" href="#_6-进程通信"><span>6. 进程通信</span></a></h2><h3 id="_6-1-信号" tabindex="-1"><a class="header-anchor" href="#_6-1-信号"><span>6.1 信号</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">发送信号</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">kill</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-SIGTERM</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PID</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看所有信号</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">kill</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-l</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-管道和重定向" tabindex="-1"><a class="header-anchor" href="#_6-2-管道和重定向"><span>6.2 管道和重定向</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">管道</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">command1</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">command2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">输出重定向</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">command</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">file.txt</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">command</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;&gt;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">file.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">错误重定向</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">command</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">2&gt;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">error.log</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-性能优化" tabindex="-1"><a class="header-anchor" href="#_7-性能优化"><span>7. 性能优化</span></a></h2><h3 id="_7-1-资源限制" tabindex="-1"><a class="header-anchor" href="#_7-1-资源限制"><span>7.1 资源限制</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">设置资源限制</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">ulimit</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-n</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">65535</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">文件描述符</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">ulimit</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-u</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2048</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">进程数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">进程资源控制</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cpulimit</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-p</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PID</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-l</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">50</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">CPU</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">限制</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-进程-cpu-绑定" tabindex="-1"><a class="header-anchor" href="#_7-2-进程-cpu-绑定"><span>7.2 进程 CPU 绑定</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">CPU</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">绑定</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">taskset</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-pc</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">0,1</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PID</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">内存策略</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">numactl</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--cpunodebind=0</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">command</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38))])}const u=p(c,[["render",A],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/linux/67qvs2m0/","title":"Linux 进程管理","lang":"zh-CN","frontmatter":{"createTime":"2025/02/17 16:59:04","permalink":"/linux/67qvs2m0/","title":"Linux 进程管理","description":"1. 进程基础 1.1 进程概念 PID (进程ID) PPID (父进程ID) 进程状态 (运行、睡眠、停止等) 进程优先级 资源使用情况 1.2 查看进程 2. 进程控制 2.1 启动进程 2.2 停止进程 2.3 进程状态控制 3. 进程监控 3.1 资源使用 3.2 进程跟踪 4. 进程优先级 4.1 nice 值调整 4.2 实时优先级 5....","head":[["meta",{"property":"og:url","content":"https://notes.moniter.top/linux/67qvs2m0/"}],["meta",{"property":"og:site_name","content":"Richie Lin"}],["meta",{"property":"og:title","content":"Linux 进程管理"}],["meta",{"property":"og:description","content":"1. 进程基础 1.1 进程概念 PID (进程ID) PPID (父进程ID) 进程状态 (运行、睡眠、停止等) 进程优先级 资源使用情况 1.2 查看进程 2. 进程控制 2.1 启动进程 2.2 停止进程 2.3 进程状态控制 3. 进程监控 3.1 资源使用 3.2 进程跟踪 4. 进程优先级 4.1 nice 值调整 4.2 实时优先级 5...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 进程管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"autoDesc":true,"filePathRelative":"notes/linux/basic/进程管理.md"}');export{u as comp,g as data};
