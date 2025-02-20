import{_ as e,c as h,a as i,b as t,d as n,w as l,r as k,o as d,e as p}from"./app-BVpc6fz1.js";const r={},c={class:"table-of-contents"};function g(y,s){const a=k("router-link");return d(),h("div",null,[i("nav",c,[i("ul",null,[i("li",null,[n(a,{to:"#简介"},{default:l(()=>s[0]||(s[0]=[p("简介")])),_:1})]),i("li",null,[n(a,{to:"#配置文件说明"},{default:l(()=>s[1]||(s[1]=[p("配置文件说明")])),_:1}),i("ul",null,[i("li",null,[n(a,{to:"#环境变量文件"},{default:l(()=>s[2]||(s[2]=[p("环境变量文件")])),_:1})])])]),i("li",null,[n(a,{to:"#配置方法"},{default:l(()=>s[3]||(s[3]=[p("配置方法")])),_:1}),i("ul",null,[i("li",null,[n(a,{to:"#方法一-配置全局变量"},{default:l(()=>s[4]||(s[4]=[p("方法一：配置全局变量")])),_:1})]),i("li",null,[n(a,{to:"#方法二-使用脚本配置"},{default:l(()=>s[5]||(s[5]=[p("方法二：使用脚本配置")])),_:1})])])]),i("li",null,[n(a,{to:"#最佳实践"},{default:l(()=>s[6]||(s[6]=[p("最佳实践")])),_:1})])])]),s[7]||(s[7]=t(`<hr><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>history 命令用于记录用户执行过的命令。在生产环境中，记录命令执行的详细信息（如时间、用户等）对于系统审计和问题排查非常重要。</p><h2 id="配置文件说明" tabindex="-1"><a class="header-anchor" href="#配置文件说明"><span>配置文件说明</span></a></h2><h3 id="环境变量文件" tabindex="-1"><a class="header-anchor" href="#环境变量文件"><span>环境变量文件</span></a></h3><ul><li><p>用户级配置：</p><ul><li><code>~/.bashrc</code></li><li><code>~/.bash_profile</code></li></ul></li><li><p>系统级配置：</p><ul><li><code>/etc/profile</code></li><li><code>/etc/bashrc</code></li><li><code>/etc/profile.d/*.sh</code></li></ul></li></ul><h2 id="配置方法" tabindex="-1"><a class="header-anchor" href="#配置方法"><span>配置方法</span></a></h2><h3 id="方法一-配置全局变量" tabindex="-1"><a class="header-anchor" href="#方法一-配置全局变量"><span>方法一：配置全局变量</span></a></h3><h4 id="_1-记录命令执行时间" tabindex="-1"><a class="header-anchor" href="#_1-记录命令执行时间"><span>1. 记录命令执行时间</span></a></h4><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">编辑全局配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cat</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;&gt;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/etc/bashrc</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;&lt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">设置时间格式</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">export</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">HISTTIMEFORMAT=&quot;[%Y-%m-%d</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%H:%M:%S]</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">whoami</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-设置历史记录大小" tabindex="-1"><a class="header-anchor" href="#_2-设置历史记录大小"><span>2. 设置历史记录大小</span></a></h4><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">设置内存中的历史命令数量</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cat</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;&gt;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/etc/bashrc</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;&lt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">export</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">HISTSIZE=10000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">设置历史文件大小</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">export</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">HISTFILESIZE=10000</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-配置历史文件" tabindex="-1"><a class="header-anchor" href="#_3-配置历史文件"><span>3. 配置历史文件</span></a></h4><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">编辑用户配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cat</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;&gt;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/root/.bashrc</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;&lt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">指定历史文件位置</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">export</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">HISTFILE=/root/.bash_history</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">启用追加模式</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">shopt</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-s</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">histappend</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-历史记录控制" tabindex="-1"><a class="header-anchor" href="#_4-历史记录控制"><span>4. 历史记录控制</span></a></h4><ul><li>HISTCONTROL <ul><li>ignoredups：忽略连续重复命令</li><li>ignorespace：忽略空格开头的命令</li><li>ignoreboth：同时启用上述两种</li><li>erasedups：忽略所有重复命令</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cat</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;&gt;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/etc/profile</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;&lt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">设置历史记录控制</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">export</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">HISTCONTROL=ignoredups</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">忽略连续重复命令</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-实时记录" tabindex="-1"><a class="header-anchor" href="#_5-实时记录"><span>5. 实时记录</span></a></h4><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cat</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;&gt;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/etc/bashrc</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;&lt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">启用实时记录</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">export</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PROMPT_COMMAND=&#39;history</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-a&#39;</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法二-使用脚本配置" tabindex="-1"><a class="header-anchor" href="#方法二-使用脚本配置"><span>方法二：使用脚本配置</span></a></h3><p>创建配置脚本 <code>/etc/profile.d/history_config.sh</code>：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">设置历史记录目录</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">HISTDIR</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/usr/share/.history</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">获取用户</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">IP</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">USER_IP</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">who</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-u</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">am</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">i</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">2&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/dev/null</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">awk</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{print</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$NF}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sed</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-e</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s/[()]//g</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-z</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$USER_IP</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&amp;&amp;</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">USER_IP</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">hostname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">创建历史记录目录</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-d</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$HISTDIR</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&amp;&amp;</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-p</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$HISTDIR</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&amp;&amp;</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">chmod</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">777</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$HISTDIR</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-d</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$HISTDIR/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">LOGNAME</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&amp;&amp;</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-p</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$HISTDIR/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">LOGNAME</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&amp;&amp;</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">chmod</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">300</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$HISTDIR/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">LOGNAME</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">配置历史记录</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">export</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">HISTSIZE</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">4000</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">DT</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">date</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">+%Y-%m-%d_%H:%M:%S</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">export</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">HISTFILE</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$HISTDIR/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">LOGNAME</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">USER_IP</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.history.$DT</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">export</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">HISTTIMEFORMAT</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">[%F</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%T]</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">USER_IP</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">设置权限</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">chmod</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">600</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$HISTDIR</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\${</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">LOGNAME</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">*</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.history</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">*</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">2&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/dev/null</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><ol><li><p><strong>配置建议</strong></p><ul><li>根据实际需求选择配置方式</li><li>合理设置历史记录大小</li><li>定期清理历史文件</li></ul></li><li><p><strong>安全建议</strong></p><ul><li>限制历史文件访问权限</li><li>记录关键命令执行信息</li><li>定期备份历史记录</li></ul></li></ol><blockquote><p><strong>注意：</strong></p><ul><li>修改配置后需要 source 生效</li><li>注意历史文件的权限设置</li><li>合理规划存储空间</li></ul></blockquote><hr><blockquote><p><strong>参考资料：</strong></p><ul><li><a href="https://www.gnu.org/software/bash/manual/html_node/Bash-History-Facilities.html" target="_blank" rel="noopener noreferrer">Bash History 文档</a></li><li><a href="https://linux-audit.com/" target="_blank" rel="noopener noreferrer">Linux 系统审计</a></li></ul></blockquote>`,27))])}const A=e(r,[["render",g],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/linux/cvzfijd5/","title":"history配置","lang":"zh-CN","frontmatter":{"createTime":"2025/02/17 16:59:04","permalink":"/linux/cvzfijd5/","title":"history配置","description":"简介 history 命令用于记录用户执行过的命令。在生产环境中，记录命令执行的详细信息（如时间、用户等）对于系统审计和问题排查非常重要。 配置文件说明 环境变量文件 用户级配置： ~/.bashrc ~/.bash_profile 系统级配置： /etc/profile /etc/bashrc /etc/profile.d/*.sh 配置方法 方法一...","head":[["meta",{"property":"og:url","content":"https://notes.moniter.top/linux/cvzfijd5/"}],["meta",{"property":"og:site_name","content":"Richie Lin"}],["meta",{"property":"og:title","content":"history配置"}],["meta",{"property":"og:description","content":"简介 history 命令用于记录用户执行过的命令。在生产环境中，记录命令执行的详细信息（如时间、用户等）对于系统审计和问题排查非常重要。 配置文件说明 环境变量文件 用户级配置： ~/.bashrc ~/.bash_profile 系统级配置： /etc/profile /etc/bashrc /etc/profile.d/*.sh 配置方法 方法一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"history配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"autoDesc":true,"filePathRelative":"notes/linux/Commands/history.md"}');export{A as comp,u as data};
