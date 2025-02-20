import{_ as l,c as e,a,b as d,d as i,w as t,r as h,o as c,e as p}from"./app-BVpc6fz1.js";const k={},r={class:"table-of-contents"};function o(y,s){const n=h("router-link");return c(),e("div",null,[a("nav",r,[a("ul",null,[a("li",null,[i(n,{to:"#参数介绍"},{default:t(()=>s[0]||(s[0]=[p("参数介绍")])),_:1})]),a("li",null,[i(n,{to:"#使用示例"},{default:t(()=>s[1]||(s[1]=[p("使用示例")])),_:1}),a("ul",null,[a("li",null,[i(n,{to:"#_1-基本操作"},{default:t(()=>s[2]||(s[2]=[p("1. 基本操作")])),_:1})]),a("li",null,[i(n,{to:"#_2-高级用法"},{default:t(()=>s[3]||(s[3]=[p("2. 高级用法")])),_:1})])])]),a("li",null,[i(n,{to:"#最佳实践"},{default:t(()=>s[4]||(s[4]=[p("最佳实践")])),_:1})])])]),s[5]||(s[5]=d(`<hr><h2 id="参数介绍" tabindex="-1"><a class="header-anchor" href="#参数介绍"><span>参数介绍</span></a></h2><table><thead><tr><th>参数名</th><th>是否必须</th><th>默认值</th><th>选项值</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td>是</td><td>-</td><td>包名</td><td>指定要安装的包名，如 <code>name=python=2.7</code></td></tr><tr><td>state</td><td>否</td><td>present</td><td>present/latest/absent</td><td>包的目标状态</td></tr><tr><td>update_cache</td><td>否</td><td>no</td><td>yes/no</td><td>是否更新缓存</td></tr><tr><td>disable_gpg_check</td><td>否</td><td>no</td><td>yes/no</td><td>是否跳过 GPG 检查</td></tr><tr><td>conf_file</td><td>否</td><td>-</td><td>配置文件路径</td><td>指定 yum 配置文件</td></tr><tr><td>list</td><td>否</td><td>no</td><td>yes/no</td><td>是否列出所有包</td></tr><tr><td>enablerepo</td><td>否</td><td>-</td><td>仓库名</td><td>指定要启用的仓库</td></tr><tr><td>disablerepo</td><td>否</td><td>-</td><td>仓库名</td><td>指定要禁用的仓库</td></tr><tr><td>enable_group</td><td>否</td><td>no</td><td>yes/no</td><td>是否启用包组</td></tr><tr><td>disable_group</td><td>否</td><td>no</td><td>yes/no</td><td>是否禁用包组</td></tr><tr><td>enable_modules</td><td>否</td><td>no</td><td>yes/no</td><td>是否启用模块</td></tr><tr><td>disable_modules</td><td>否</td><td>no</td><td>yes/no</td><td>是否禁用模块</td></tr><tr><td>install_dir</td><td>否</td><td>-</td><td>路径</td><td>指定安装目录</td></tr><tr><td>install_weak_deps</td><td>否</td><td>no</td><td>yes/no</td><td>是否安装弱依赖</td></tr><tr><td>install_recommends</td><td>否</td><td>no</td><td>yes/no</td><td>是否安装推荐包</td></tr><tr><td>install_suggests</td><td>否</td><td>no</td><td>yes/no</td><td>是否安装建议包</td></tr><tr><td>install_types</td><td>否</td><td>-</td><td>类型</td><td>指定安装类型</td></tr><tr><td>install_on_requires</td><td>否</td><td>no</td><td>yes/no</td><td>是否在依赖包安装时安装</td></tr></tbody></table><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2><h3 id="_1-基本操作" tabindex="-1"><a class="header-anchor" href="#_1-基本操作"><span>1. 基本操作</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">安装最新版本的包</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">-</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Install</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">latest</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Apache</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">yum</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">httpd</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">state</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">移除包</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">-</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Remove</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Apache</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">yum</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">httpd</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">state</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">absent</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">更新所有包</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">-</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Update</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">all</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">packages</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">yum</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">*</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">state</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">latest</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-高级用法" tabindex="-1"><a class="header-anchor" href="#_2-高级用法"><span>2. 高级用法</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">从远程仓库安装</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">-</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Install</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Nginx</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">from</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">remote</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">repo</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">yum</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">state</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">present</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">从本地安装</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">-</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Install</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Nginx</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">from</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">local</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">file</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">yum</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/usr/local/src/nginx-release-centos-6-0.el6.ngx.noarch.rpm</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">state</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">present</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">安装包组</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">-</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Install</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Development</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Tools</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">yum</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@Development</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">tools</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">state</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">present</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><ol><li><p><strong>安装建议</strong></p><ul><li>指定具体版本</li><li>使用官方源</li><li>定期更新缓存</li></ul></li><li><p><strong>维护建议</strong></p><ul><li>保持包版本一致</li><li>记录安装历史</li><li>做好备份</li></ul></li></ol><blockquote><p><strong>注意：</strong></p><ul><li>注意包的依赖关系</li><li>谨慎使用 <code>state=latest</code></li><li>建议使用包组安装</li></ul></blockquote><hr><blockquote><p><strong>参考资料：</strong></p><ul><li><a href="https://docs.ansible.com/ansible/latest/collections/ansible/builtin/yum_module.html" target="_blank" rel="noopener noreferrer">Ansible Yum 模块文档</a></li><li><a href="https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system_administrators_guide/ch-yum" target="_blank" rel="noopener noreferrer">YUM 包管理指南</a></li></ul></blockquote>`,13))])}const m=l(k,[["render",o],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/linux/eymsor3w/","title":"Yum模块常用参数","lang":"zh-CN","frontmatter":{"createTime":"2025/02/17 16:59:04","permalink":"/linux/eymsor3w/","title":"Yum模块常用参数","description":"参数介绍 使用示例 1. 基本操作 2. 高级用法 最佳实践 安装建议 指定具体版本 使用官方源 定期更新缓存 维护建议 保持包版本一致 记录安装历史 做好备份 注意： 注意包的依赖关系 谨慎使用 state=latest 建议使用包组安装 参考资料： Ansible Yum 模块文档 YUM 包管理指南","head":[["meta",{"property":"og:url","content":"https://notes.moniter.top/linux/eymsor3w/"}],["meta",{"property":"og:site_name","content":"Richie Lin"}],["meta",{"property":"og:title","content":"Yum模块常用参数"}],["meta",{"property":"og:description","content":"参数介绍 使用示例 1. 基本操作 2. 高级用法 最佳实践 安装建议 指定具体版本 使用官方源 定期更新缓存 维护建议 保持包版本一致 记录安装历史 做好备份 注意： 注意包的依赖关系 谨慎使用 state=latest 建议使用包组安装 参考资料： Ansible Yum 模块文档 YUM 包管理指南"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Yum模块常用参数\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"autoDesc":true,"filePathRelative":"notes/linux/Ansible/AnsibleModule/yum-module.md"}');export{m as comp,u as data};
