import{_ as e,c,a,b as t,d as n,w as i,r as h,o as k,e as l}from"./app-BVpc6fz1.js";const d={},r={class:"table-of-contents"};function A(g,s){const p=h("router-link");return k(),c("div",null,[a("nav",r,[a("ul",null,[a("li",null,[n(p,{to:"#题目描述"},{default:i(()=>s[0]||(s[0]=[l("题目描述")])),_:1}),a("ul",null,[a("li",null,[n(p,{to:"#示例"},{default:i(()=>s[1]||(s[1]=[l("示例")])),_:1})]),a("li",null,[n(p,{to:"#提示"},{default:i(()=>s[2]||(s[2]=[l("提示")])),_:1})])])]),a("li",null,[n(p,{to:"#解题思路"},{default:i(()=>s[3]||(s[3]=[l("解题思路")])),_:1}),a("ul",null,[a("li",null,[n(p,{to:"#方法一-字符串转换法"},{default:i(()=>s[4]||(s[4]=[l("方法一：字符串转换法")])),_:1})]),a("li",null,[n(p,{to:"#方法二-数字反转法"},{default:i(()=>s[5]||(s[5]=[l("方法二：数字反转法")])),_:1})])])]),a("li",null,[n(p,{to:"#代码说明"},{default:i(()=>s[6]||(s[6]=[l("代码说明")])),_:1}),a("ul",null,[a("li",null,[n(p,{to:"#方法二详细说明"},{default:i(()=>s[7]||(s[7]=[l("方法二详细说明")])),_:1})])])])])]),s[8]||(s[8]=t(`<hr><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h2><p><strong>题目：</strong></p><p>给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。</p><p>回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><p>示例 1：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>输入：x</span><span class="space"> </span><span>=</span><span class="space"> </span><span>121</span></span>
<span class="line"><span>输出：true</span></span>
<span class="line"><span>解释：121</span><span class="space"> </span><span>从左向右读是</span><span class="space"> </span><span>121，从右向左读是</span><span class="space"> </span><span>121。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>输入：x</span><span class="space"> </span><span>=</span><span class="space"> </span><span>-121</span></span>
<span class="line"><span>输出：false</span></span>
<span class="line"><span>解释：从左向右读是</span><span class="space"> </span><span>-121，从右向左读是</span><span class="space"> </span><span>121-。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提示" tabindex="-1"><a class="header-anchor" href="#提示"><span>提示</span></a></h3><ul><li>-2³¹ &lt;= x &lt;= 2³¹ - 1</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h2><h3 id="方法一-字符串转换法" tabindex="-1"><a class="header-anchor" href="#方法一-字符串转换法"><span>方法一：字符串转换法</span></a></h3><p>将整数转换为字符串，然后判断该字符串是否与其反转后的字符串相同。</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Solution</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">def</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">isPalindrome</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">int</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">-&gt;</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">bool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">使用字符串来判断整数回文数</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">False</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">reversed_str_num</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">str</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)[::</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">==</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">int</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">reversed_str_num</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析"><span>复杂度分析</span></a></h4><ul><li>时间复杂度：O(log₁₀n)，需要将整数转换为字符串</li><li>空间复杂度：O(log₁₀n)，需要存储字符串</li></ul><h4 id="示例运行" tabindex="-1"><a class="header-anchor" href="#示例运行"><span>示例运行</span></a></h4><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">实例用法</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sol</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Solution</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sol</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">isPalindrome</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">121</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">输出</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">True</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sol</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">isPalindrome</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">121</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">输出</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">False</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sol</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">isPalindrome</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">输出</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">False</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法二-数字反转法" tabindex="-1"><a class="header-anchor" href="#方法二-数字反转法"><span>方法二：数字反转法</span></a></h3><p>通过反转整数的后半部分来判断是否为回文数。这种方法不需要额外的字符串转换，可以减少空间使用。</p><h4 id="算法步骤" tabindex="-1"><a class="header-anchor" href="#算法步骤"><span>算法步骤</span></a></h4><ol><li>特殊情况处理：负数和以0结尾的数（除了0本身）</li><li>反转后半部分数字</li><li>与前半部分比较</li></ol><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Solution</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">def</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">isPalindrome</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">int</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">-&gt;</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">bool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">负数不是回文数，以及如果最后一位是</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">0，那么只有</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">0</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">本身才是回文数</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">or</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">%</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">==</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">and</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!=</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">False</span></span>
<span class="line"></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">reversed_half</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">while</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">reversed_half</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">reversed_half</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">reversed_half</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">%</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">//=</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span></span>
<span class="line"></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">当原始数字等于反转后的数字，或者原始数字是反转数字的一半（对于奇数位数字）</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">==</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">reversed_half</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">or</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">==</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">reversed_half</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">//</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1"><span>复杂度分析</span></a></h4><ul><li>时间复杂度：O(log₁₀n)，需要处理大约一半数字的位数</li><li>空间复杂度：O(1)，只需要常数级别的额外空间</li></ul><h4 id="示例运行-1" tabindex="-1"><a class="header-anchor" href="#示例运行-1"><span>示例运行</span></a></h4><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">示例用法</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sol</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Solution</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sol</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">isPalindrome</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">121</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">输出</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">True</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sol</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">isPalindrome</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">121</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">输出</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">False</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sol</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">isPalindrome</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">输出</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">False</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码说明" tabindex="-1"><a class="header-anchor" href="#代码说明"><span>代码说明</span></a></h2><h3 id="方法二详细说明" tabindex="-1"><a class="header-anchor" href="#方法二详细说明"><span>方法二详细说明</span></a></h3><ol><li><p><strong>特殊情况处理</strong></p><ul><li>负数一定不是回文数</li><li>以0结尾的数（除了0本身）不可能是回文数</li></ul></li><li><p><strong>反转过程</strong></p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">reversed_half</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">reversed_half</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">%</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">构建反转数</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">//=</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">去除末位数字</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>判断条件</strong></p><ul><li>偶数位数：x == reversed_half</li><li>奇数位数：x == reversed_half // 10</li></ul></li></ol><blockquote><p><strong>注意：</strong></p><ul><li>此方法不需要将整个数字反转</li><li>只需要反转一半数字即可判断</li><li>对于大数处理更有效率</li></ul></blockquote>`,33))])}const o=e(d,[["render",A],["__file","index.html.vue"]]),D=JSON.parse('{"path":"/python/wjzm8e3m/","title":"09：回文数","lang":"zh-CN","frontmatter":{"createTime":"2025/02/17 16:59:38","permalink":"/python/wjzm8e3m/","title":"09：回文数","description":"题目描述 题目： 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。 示例 示例 1： 示例 2： 提示 -2³¹ <= x <= 2³¹ - 1 解题思路 方法一：字符串转换法 将整数转换为字符串，然后判断该字符串是否与其反转后的字符串相同。 复杂...","head":[["meta",{"property":"og:url","content":"https://notes.moniter.top/python/wjzm8e3m/"}],["meta",{"property":"og:site_name","content":"Richie Lin"}],["meta",{"property":"og:title","content":"09：回文数"}],["meta",{"property":"og:description","content":"题目描述 题目： 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。 示例 示例 1： 示例 2： 提示 -2³¹ <= x <= 2³¹ - 1 解题思路 方法一：字符串转换法 将整数转换为字符串，然后判断该字符串是否与其反转后的字符串相同。 复杂..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"09：回文数\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"autoDesc":true,"filePathRelative":"notes/python/算法/09.回文数.md"}');export{o as comp,D as data};
