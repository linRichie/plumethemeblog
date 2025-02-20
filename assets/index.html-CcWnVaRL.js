import{_ as p,c as o,a as e,b as d,d as l,w as t,e as s,r as n,o as c}from"./app-BVpc6fz1.js";const h={},m={class:"table-of-contents"};function u(k,a){const i=n("router-link"),r=n("RouteLink");return c(),o("div",null,[e("nav",m,[e("ul",null,[e("li",null,[l(i,{to:"#_1-下载-ollama"},{default:t(()=>a[0]||(a[0]=[s("1. 下载 Ollama")])),_:1})]),e("li",null,[l(i,{to:"#_2-启动-ollama"},{default:t(()=>a[1]||(a[1]=[s("2. 启动 Ollama")])),_:1})]),e("li",null,[l(i,{to:"#_3-运行模型"},{default:t(()=>a[2]||(a[2]=[s("3. 运行模型")])),_:1})])])]),a[5]||(a[5]=d('<p>Ollama 是一款允许在本地运行开源大型语言模型的工具，极大地简化了模型的设置与配置过程，尤其在 GPU 使用方面进行了优化，为开发者提供了高效、私密的模型运行环境。</p><ul><li><strong>官方文档链接</strong>：<a href="https://ollama.ai/docs/" target="_blank" rel="noopener noreferrer">O</a><a href="https://ollama.ai/docs/" target="_blank" rel="noopener noreferrer">llama</a><a href="https://ollama.ai/docs/" target="_blank" rel="noopener noreferrer">官方文档</a></li></ul><h2 id="_1-下载-ollama" tabindex="-1"><a class="header-anchor" href="#_1-下载-ollama"><span>1. 下载 Ollama</span></a></h2><ul><li><p><strong>Linux 系统</strong>：</p><ul><li><p>对于基于 Debian 或 Ubuntu 的系统，可使用以下命令下载安装：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://ollama.ai/install.sh</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></li><li><p>对于基于 Red Hat 或 CentOS 的系统，安装命令如下：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-fsSL</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://ollama.ai/install.sh</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sh</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-s</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-b</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/usr/local/bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><strong>macOS 系统</strong>：</p><ul><li><p>使用 Homebrew 进行安装，命令为：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">brew</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">install</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ollama</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></li><li><p><strong>Windows 系统</strong>：</p><ul><li>可从<a href="https://github.com/jmorganca/ollama/releases" target="_blank" rel="noopener noreferrer">Ol</a><a href="https://github.com/jmorganca/ollama/releases" target="_blank" rel="noopener noreferrer">lama 官</a><a href="https://github.com/jmorganca/ollama/releases" target="_blank" rel="noopener noreferrer">方 GitH</a><a href="https://github.com/jmorganca/ollama/releases" target="_blank" rel="noopener noreferrer">ub Re</a><a href="https://github.com/jmorganca/ollama/releases" target="_blank" rel="noopener noreferrer">lease</a><a href="https://github.com/jmorganca/ollama/releases" target="_blank" rel="noopener noreferrer">s 页面</a>下载最新的 Windows 安装包，下载完成后，按照安装向导进行安装。</li></ul></li></ul><h2 id="_2-启动-ollama" tabindex="-1"><a class="header-anchor" href="#_2-启动-ollama"><span>2. 启动 Ollama</span></a></h2><p>在下载完成后，打开命令行工具，根据不同系统输入相应命令启动 Ollama 服务：</p><ul><li><p><strong>Linux 和 macOS</strong>：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ollama</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">start</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><strong>Windows</strong>：在开始菜单中找到 Ollama，点击 “启动 Ollama”；或者在命令提示符（CMD）或 PowerShell 中输入ollama start。</p></li></ul><h2 id="_3-运行模型" tabindex="-1"><a class="header-anchor" href="#_3-运行模型"><span>3. 运行模型</span></a></h2><p>Ollama 支持众多开源模型，你可以根据自己电脑的性能来选择合适的模型。在运行模型前，你可能需要先下载模型。例如，下载llama2:7b模型的命令为：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ollama</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pull</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">llama2:7b</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>运行模型时，以运行deepseek-r1:14b模型为例，命令如下：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ollama</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">run</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">deepseek-r1:14b</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果你的电脑配置较低，像llama2:7b这类 7B 版本的模型是不错的选择；若配置较高，如deepseek-r1:14b等更强大的模型能带来更出色的表现 。</p><p>在运行模型时，你还可以通过以下命令进行更多操作：</p><ul><li><p>查看已下载的模型列表：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ollama</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>下载新的模型，如llama3：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ollama</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pull</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">llama3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><p>并且，Ollama 支持工具调用与多模态输入，遵循异步调用与令牌级流式处理，为模型的使用提供了更多可能性。</p><hr>',17)),e("blockquote",null,[e("p",null,[a[4]||(a[4]=s("由于此是通过命令行终端进行交互，不太友好，接下来进行交互页面部署，具体请查看： ")),l(r,{to:"/preview/DeepSeek/%E4%BA%A4%E4%BA%92%E7%95%8C%E9%9D%A2%E9%83%A8%E7%BD%B2.html"},{default:t(()=>a[3]||(a[3]=[s("交互页面部署")])),_:1})])])])}const b=p(h,[["render",u],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/article/c9vfwamu/","title":"Ollama：本地运行模型的利器","lang":"zh-CN","frontmatter":{"createTime":"2025/02/14 17:35:39","tags":["DeepSeek","Ollama"],"permalink":"/article/c9vfwamu/","cover":"https://oss.moniter.top/blog/2025-02-19/341961490_0_final.png","title":"Ollama：本地运行模型的利器","description":"Ollama 是一款允许在本地运行开源大型语言模型的工具，极大地简化了模型的设置与配置过程，尤其在 GPU 使用方面进行了优化，为开发者提供了高效、私密的模型运行环境。 官方文档链接：Ollama官方文档 1. 下载 Ollama Linux 系统： 对于基于 Debian 或 Ubuntu 的系统，可使用以下命令下载安装： 对于基于 Red Hat ...","head":[["meta",{"property":"og:url","content":"https://notes.moniter.top/article/c9vfwamu/"}],["meta",{"property":"og:site_name","content":"Richie Lin"}],["meta",{"property":"og:title","content":"Ollama：本地运行模型的利器"}],["meta",{"property":"og:description","content":"Ollama 是一款允许在本地运行开源大型语言模型的工具，极大地简化了模型的设置与配置过程，尤其在 GPU 使用方面进行了优化，为开发者提供了高效、私密的模型运行环境。 官方文档链接：Ollama官方文档 1. 下载 Ollama Linux 系统： 对于基于 Debian 或 Ubuntu 的系统，可使用以下命令下载安装： 对于基于 Red Hat ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.moniter.top/blog/2025-02-19/341961490_0_final.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-19T09:50:22.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://oss.moniter.top/blog/2025-02-19/341961490_0_final.png"}],["meta",{"name":"twitter:image:alt","content":"Ollama：本地运行模型的利器"}],["meta",{"property":"article:tag","content":"DeepSeek"}],["meta",{"property":"article:tag","content":"Ollama"}],["meta",{"property":"article:modified_time","content":"2025-02-19T09:50:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ollama：本地运行模型的利器\\",\\"image\\":[\\"https://oss.moniter.top/blog/2025-02-19/341961490_0_final.png\\"],\\"dateModified\\":\\"2025-02-19T09:50:22.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1739958622000,"contributors":[{"name":"wanglinhao","username":"wanglinhao","email":"wanglinhao@wegooooo.com","commits":2,"avatar":"https://gravatar.com/avatar/10e08ce54811e66600713f65f7bb4ceb54a8c33b64ef808210a087c82526676c?d=retro"},{"name":"linRichie","username":"linRichie","email":"wlh_richard@163.com","commits":6,"avatar":"https://gravatar.com/avatar/bab8c2728c34a2aef2fb8f6e2afdea3d8520e29409ae5778dfdcbbf1d3b565dc?d=retro"}]},"autoDesc":true,"filePathRelative":"preview/DeepSeek/02.Ollama:本地运行模型的利器.md","categoryList":[{"id":"5ebeb6","sort":10001,"name":"preview"},{"id":"24a20b","sort":10003,"name":"DeepSeek"}]}');export{b as comp,v as data};
