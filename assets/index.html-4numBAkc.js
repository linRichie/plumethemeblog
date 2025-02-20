import{_ as l,c as t,a,b as c,d as n,w as p,r as h,o as k,e}from"./app-BVpc6fz1.js";const d={},r={class:"table-of-contents"};function o(A,s){const i=h("router-link");return k(),t("div",null,[a("nav",r,[a("ul",null,[a("li",null,[n(i,{to:"#简介"},{default:p(()=>s[0]||(s[0]=[e("简介")])),_:1})]),a("li",null,[n(i,{to:"#_1-容器的基本操作"},{default:p(()=>s[1]||(s[1]=[e("1. 容器的基本操作")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#_1-1-创建和启动容器"},{default:p(()=>s[2]||(s[2]=[e("1.1 创建和启动容器")])),_:1})]),a("li",null,[n(i,{to:"#_1-2-容器管理命令"},{default:p(()=>s[3]||(s[3]=[e("1.2 容器管理命令")])),_:1})])])]),a("li",null,[n(i,{to:"#_2-容器运行模式"},{default:p(()=>s[4]||(s[4]=[e("2. 容器运行模式")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#_2-1-后台运行"},{default:p(()=>s[5]||(s[5]=[e("2.1 后台运行")])),_:1})])])]),a("li",null,[n(i,{to:"#终止容器"},{default:p(()=>s[6]||(s[6]=[e("终止容器")])),_:1})]),a("li",null,[n(i,{to:"#进入容器"},{default:p(()=>s[7]||(s[7]=[e("进入容器")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#attach命令"},{default:p(()=>s[8]||(s[8]=[e("attach命令")])),_:1})]),a("li",null,[n(i,{to:"#使用exec命令"},{default:p(()=>s[9]||(s[9]=[e("使用exec命令")])),_:1})])])]),a("li",null,[n(i,{to:"#导出和导入容器"},{default:p(()=>s[10]||(s[10]=[e("导出和导入容器")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#导出容器-docker-export"},{default:p(()=>s[11]||(s[11]=[e("导出容器 docker export")])),_:1})]),a("li",null,[n(i,{to:"#导入容器快照-docker-inport"},{default:p(()=>s[12]||(s[12]=[e("导入容器快照 docker inport")])),_:1})])])]),a("li",null,[n(i,{to:"#删除容器"},{default:p(()=>s[13]||(s[13]=[e("删除容器")])),_:1}),a("ul",null,[a("li",null,[n(i,{to:"#清理所有处于终止状态的容器"},{default:p(()=>s[14]||(s[14]=[e("清理所有处于终止状态的容器")])),_:1})])])])])]),s[15]||(s[15]=c(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>容器是 Docker 的核心概念，它是一个轻量级的、独立运行的应用单元，包含应用程序及其运行环境。与虚拟机相比，容器共享主机操作系统内核，仅打包必要的运行环境，因此更加轻量和高效。</p><p>本文将介绍如何管理 Docker 容器的完整生命周期，包括创建、启动、停止和删除等操作。</p><h2 id="_1-容器的基本操作" tabindex="-1"><a class="header-anchor" href="#_1-容器的基本操作"><span>1. 容器的基本操作</span></a></h2><h3 id="_1-1-创建和启动容器" tabindex="-1"><a class="header-anchor" href="#_1-1-创建和启动容器"><span>1.1 创建和启动容器</span></a></h3><p>Docker 提供了两种启动容器的方式：</p><ul><li>基于镜像新建并启动容器</li><li>重新启动已终止的容器</li></ul><p>使用 <code>docker run</code> 命令创建并启动容器：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">运行容器并输出信息</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">centos:7</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/bin/echo</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Hello</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">wang</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面来启动一个bash终端，允许用户进行交互</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">启动交互式终端</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-it</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">centos:7</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/bin/bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><ul><li><code>-i</code>: 保持标准输入打开</li><li><code>-t</code>: 分配伪终端(pseudo-tty)</li></ul><p>在交互模式下，用户可以通过创建的终端来输入命令。例如：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">root@29bd2b63c1af</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">#</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ls</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">anaconda-post.log</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dev</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">home</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">lib64</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">mnt</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">proc</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">srv</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">tmp</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">var</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">bin</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">etc</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">lib</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">media</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">opt</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">root</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">sbin</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">sys</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">usr</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">root@29bd2b63c1af</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">#</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pwd</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">/</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">root@29bd2b63c1af</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">#</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">touch</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/mnt/a.txt</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">root@29bd2b63c1af</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">#</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">exit</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#退出容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">container</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ls</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-a</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#列出所有容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">diff</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器名或sha256值</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#列出某个容器的历史操作</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">stop</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器名或sha256值</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#关闭容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hostory</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">镜像名:标签</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#列出镜像的历史操作</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当利用<code>docker run</code>来创建容器时，Docker在后台运行的标准操作包括：</p><ul><li>检查本地是否存在指定的镜像，不存在就从公有仓库下载</li><li>利用镜像创建并启动一个容器</li><li>分配一个文件系统，并在只读的镜像层外面挂载一层可读写层</li><li>从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中</li><li>从地址池配置一个IP地址给容器</li><li>执行用户指定的应用程序</li><li>执行完毕后容器被终止</li></ul><h3 id="_1-2-容器管理命令" tabindex="-1"><a class="header-anchor" href="#_1-2-容器管理命令"><span>1.2 容器管理命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">container</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ls</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-a</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">列出所有容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ps</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看运行中的容器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">启动/停止容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">container</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">start</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器I</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">D</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">启动已终止的容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">container</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">stop</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器I</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">D</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">停止运行中的容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">container</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">restart</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器I</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">D</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">重启容器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">容器状态</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">diff</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器I</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">D</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看容器文件变更</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">top</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器I</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">D</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看容器进程</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-容器运行模式" tabindex="-1"><a class="header-anchor" href="#_2-容器运行模式"><span>2. 容器运行模式</span></a></h2><h3 id="_2-1-后台运行" tabindex="-1"><a class="header-anchor" href="#_2-1-后台运行"><span>2.1 后台运行</span></a></h3><p>使用 <code>-d</code> 参数可以让容器在后台运行：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">前台运行</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">centos:7</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/bin/sh</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-c</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">while</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">true;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">do</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">echo</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hello</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">world;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">sleep</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">done</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">后台运行</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-d</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">centos:7</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/bin/sh</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-c</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">while</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">true;do</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">echo</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hello</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">world;sleep</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1;done</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">查看容器日志</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">logs</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器I</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">D</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：容器是否持续运行取决于启动命令，而不是 <code>-d</code> 参数</p></blockquote><h2 id="终止容器" tabindex="-1"><a class="header-anchor" href="#终止容器"><span>终止容器</span></a></h2><p>可以使用<code>docker container stop</code>来终止一个运行中的容器<br> 此外，当Docker容器中指定的应用终结时，容器也自动终止<br> 如上面启动了一个终端的容器，用户通过<code>exit</code>命令或<code>ctrl+d</code>来退出终端时，所创建的容器立刻终止。<br> 终止状态的容器可以用<code>docker container ls -a</code>来查看。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">container</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ls</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-a</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>处于终止状态的容器，可以通过 <code>docker container start</code>命令重新启动<br> 还有 <code>docker container restart</code>命令会将一个运行状态的容器终止，然后在重新启动它。</p><h2 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器"><span>进入容器</span></a></h2><p>使用 <code>-d</code>参数时，容器启动后会进入后台运行<br> 当需要进入容器进行操作，可以使用<code>docker attach</code>或者<code>docker exec</code>，建议使用 <code>docker exec</code>命令。</p><h3 id="attach命令" tabindex="-1"><a class="header-anchor" href="#attach命令"><span>attach命令</span></a></h3><p>使用attach命令</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-d</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-it</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">centos:7</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">container</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ls</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">attach</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器ID号</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">##</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">说明：如果从这个stdin中exit，会导致容器的停止</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用exec命令" tabindex="-1"><a class="header-anchor" href="#使用exec命令"><span>使用exec命令</span></a></h3><h4 id="i-t参数" tabindex="-1"><a class="header-anchor" href="#i-t参数"><span>-i -t参数</span></a></h4><p><code>docker exec</code>后边可以跟多个参数，这里主要是-i -t参数<br> 只有<code>-i</code>参数时，由于没有分配伪终端，界面没有我们熟悉的Linux命令提示符。但命令执行结果仍然可以返回。<br><code>-i -t</code>参数一起使用，就是熟悉的linux命令提示符</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-d</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-it</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">centos:7</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">container</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ls</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">exec</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-i</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器ID</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">exec</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-it</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器ID</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">说明：从这个stdin中exit，不会导致容器的停止。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导出和导入容器" tabindex="-1"><a class="header-anchor" href="#导出和导入容器"><span>导出和导入容器</span></a></h2><h3 id="导出容器-docker-export" tabindex="-1"><a class="header-anchor" href="#导出容器-docker-export"><span>导出容器 docker export</span></a></h3><p>如果要导出本地某个容器，可以使用<code>docker export</code>命令</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">container</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ls</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-a</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">export</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器ID</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">filename.tar</span><span class="space"> </span><span class="space"> </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">##</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">这样将导出容器快照到本地文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入容器快照-docker-inport" tabindex="-1"><a class="header-anchor" href="#导入容器快照-docker-inport"><span>导入容器快照 docker inport</span></a></h3><p>可以使用<code>docker import</code>从容器快照文件中再导入为镜像</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cat</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">filename.tar</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">import</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">test/centos:v2.0</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">image</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ls</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，也可以通过制定URL或者某个目录来导入</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">import</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http://example.com/exampleimage.tgz</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">example/imagerepo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>说明：</strong><br> 用户既可以使用<code>docker load</code>来导入镜像存储文件到本地镜像库，也可以使用<code>docker import</code>来导入一个容器快照到本地镜像库。两者的区别在于容器快照文件将丢弃所有的历史记录和元数据信息(即仅保存容器当时的快照状态)，而镜像存储文件将保存完整记录，体积也要大。从容器快照文件导入时可以重新制定标签等元数据信息。</p></blockquote><h2 id="删除容器" tabindex="-1"><a class="header-anchor" href="#删除容器"><span>删除容器</span></a></h2><p>可以使用<code>docker container rm</code>来删除一个处于中止状态的容器。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">container</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">rm</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器ID或容器名</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#删除容器</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果要删除一个运行中的容器，可以添加<code>-f</code>参数，Docker会发送SIGKILL信号给容器</p><h3 id="清理所有处于终止状态的容器" tabindex="-1"><a class="header-anchor" href="#清理所有处于终止状态的容器"><span>清理所有处于终止状态的容器</span></a></h3><p>用<code>docker container ls -a</code>命令可以查看所有已经创建的包括终止状态的容器，当数量过多，可以用下面的命令清理掉所有处于终止状态的容器</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">container</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">prune</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#删除所有处于终止状态的容器</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,54))])}const g=l(d,[["render",o],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/linux/gs3u3vkq/","title":"05. 操作Docker容器","lang":"zh-CN","frontmatter":{"createTime":"2025/02/17 16:59:04","permalink":"/linux/gs3u3vkq/","title":"05. 操作Docker容器","description":"简介 容器是 Docker 的核心概念，它是一个轻量级的、独立运行的应用单元，包含应用程序及其运行环境。与虚拟机相比，容器共享主机操作系统内核，仅打包必要的运行环境，因此更加轻量和高效。 本文将介绍如何管理 Docker 容器的完整生命周期，包括创建、启动、停止和删除等操作。 1. 容器的基本操作 1.1 创建和启动容器 Docker 提供了两种启动容...","head":[["meta",{"property":"og:url","content":"https://notes.moniter.top/linux/gs3u3vkq/"}],["meta",{"property":"og:site_name","content":"Richie Lin"}],["meta",{"property":"og:title","content":"05. 操作Docker容器"}],["meta",{"property":"og:description","content":"简介 容器是 Docker 的核心概念，它是一个轻量级的、独立运行的应用单元，包含应用程序及其运行环境。与虚拟机相比，容器共享主机操作系统内核，仅打包必要的运行环境，因此更加轻量和高效。 本文将介绍如何管理 Docker 容器的完整生命周期，包括创建、启动、停止和删除等操作。 1. 容器的基本操作 1.1 创建和启动容器 Docker 提供了两种启动容..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05. 操作Docker容器\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"autoDesc":true,"filePathRelative":"notes/linux/Kubernetes/Docker系列学习/Docker系列学习-05.操作Docker容器.md"}');export{g as comp,y as data};
