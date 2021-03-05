# [Petrozavodsk Winter-2018. ITMO U 1 Contest](http://opentrains.snarknews.info/~ejudge/team.cgi?contest_id=001512)

| 排名   | 当场过题数 | 至今过题数 | 总题数 | Dirt |
| ------ | ---------- | ---------- | ------ | ---- |
| 26/160 | 6          | 9          | 12     | 50%  |

## **A**

**upsolved by 2sozx**

### 题意

有 $n\in[2,4]$ 个柜台，每个柜台的服务时间在 $[l,r]$ 中独立均匀分布，记为 $t_i$。现在每个柜台服务的剩余时间在 $[0,t_i]$ 中独立均匀分布，记为 $p_i$。现在有一个人，他会选择剩余的服务时间最少的柜台，问这个柜台恰好也是服务时间最少的柜台的概率。

### 题解

由于为独立均匀分布，因此概率密度为 $f(t_i, p_i) = \dfrac{1}{(r - l)^n\prod\limits_{j = 1}^{n}t_j}$

因此假设此时柜台 $1$ 为剩余服务时间最少的柜台，可以得出概率
$$
\begin{aligned}
\int_{p_1<p_j,p_1<t_1<t_j}f(t_i, p_i)dt_idp_i =& 
\frac{1}{(r - l)^n}\int_{p_1 < t_1}\frac{1}{t_1}dt_1dp_1
(\int_{p_1<p_j<t_j,t_1<t_j}\frac{1}{t_j}dt_jdp_j)^{n - 1}\newline =&
\frac{1}{(r - l)^n}\int_{p_1 < t_1}\frac{1}{t_1}dt_1dp_1
(\int_{t_1<t_j}\frac{t_j-p_1}{t_j}dt_j)^{n - 1} \newline =&
\frac{1}{(r - l)^n}\int_{p_1 < t_1}\frac{1}{t_1}\cdot (r - t_1 - p_1 \ln{\frac{r}{t_1}})^{n - 1}dt_1dp_1\newline =&
\frac{1}{(r - l)^n}\int_{l}^{r}\frac{1}{t_1}dt_1\int_{0}^{t_1}{(r - t_1 - p_1 \ln{\frac{r}{t_1}})^{n - 1}}dp_1\newline =&
\end{aligned}
$$
积分内的式子就很好求了。

## **B**

**upsolved by **

### 题意



### 题解



## **C**

**solved by Bazoka13**

### 题意



### 题解



## **D**

**solved by 2sozx JJLeo**

### 题意

$2^n$ 个能力值不同的人构成竞赛二叉树，底层排列所有可能等概率。求能力值第 $k$ 大的人期望进行的轮次，输出小数，结果误差要求为 $10^{-9}$。($1 \le n \le 10$)

### 题解

其实底层排列顺序没有意义，问题本质相当于将能力值第 $k$ 大的人放到第一个，然后接下来等以随机顺序在后面放其它人，只要前 $2^i-1$ 个人能力都比它小那它就可以赢下第 $i$ 局，有 $2^n-k$ 个人能力比他小，从而答案即为

$$
\sum_{i=1}^n \frac{\dbinom{2^n-k}{2^i-1}}{\dbinom{2^n-1}{2^i-1}}
$$

需要注意除了冠军之外被击败的那一场也算作一场轮次，需要加上。

这题需要用 double 输出，我们可以将阶乘取 $\lg$，再数个 $\lg$ 加起来 $\exp$ 回去后累加即可。

## **E**

**solved by 2sozx JJLeo**

### 题意

定义 $f(n)$：
$$
f(n) = 
\begin{cases}
1, &n=1 \newline
\left(n-[n \bmod 2=0]\right)!!f\left(\left\lceil\dfrac{n}{2}\right\rceil\right), & n > 1
\end{cases}
$$
求 $f(n) \bmod 2^{64}$。($1 \le n \le 10^{18}$)

### 题解

本题相当于求 $O(\log n)$ 次双阶乘 $m!! \bmod 2^{64}$，其中 $m$ 是奇数，可以达到 $10^{18}$ 级别。注意到这个模数的很特殊，除了可以直接爆 ull 很方便外，它只有 $2$ 这个因子，这和双阶乘每个数差 $2$ 很像。

构造如下多项式：
$$
F_k(x)=\prod_{i=1}^k(x+2i-1)
$$
则所求答案即为 $F_{\frac{m-1}{2}}(2) \bmod 2^{64}$。注意到 $F_k(x)$ 满足如下的性质：
$$
F_{k+b}(x)=F_k(x)F_b(x+2k)
$$
如果我们已知 $F_b(x)$，那么 $F_b(x+2k)$ 可以用二项式定理的方法计算，从而可以使用类似快速幂的方法求 $F_k(x)$。但是直接计算项数太多复杂度过高，而利用模数的特点我们只需保留低于 $64$ 次的所有项，证明如下：

> 对于任意 $i \ge 64$，如果 $a_ix^i$ 最终出现在答案中，当 $x=2$ 时有 $a_i2^i \bmod 2 = 0$；如果计算 $F_b(x+2k)$ 中需要用到 $a_ix^i$，即 $a_i(x+2k)^i$ 可能会出现在答案中，则当 $x=2$ 时有 $a_i(2+2k)^i=a_i2^i(k+1)^i \bmod 2^{64} = 0$。

因此，设 $w=64$，所有多项式乘法复杂度为 $O(w^2)$。上述过程中二项式定理即对 $w$ 项分别展开到至多 $w$ 项，从而复杂度为 $O(w^2)$，因此总时间复杂度为 $O(w^2\log^2 n)$。

## **F**

**upsolved by JJLeo**

### 题意



### 题解



## **G**

**solved by 2sozx Bazoka13**

### 题意



### 题解



## **H**

**solved by Bazoka13 **

### 题意



### 题解



## **I**

**upsolved by JJLeo**

### 题意



### 题解



## **J**

**solved by 2sozx JJLeo**

### 题意

给定长度为 $n$ 的数列 $a_i$ 和一个数 $h_0$。你一开始站在位置 $1$，手上拿着数 $h_0$。假设你在位置 $i$，手上拿的数是 $h$，那么你可以跳到 $i+h$ 或者 $i+a_i$。每次跳完后手上的数会变为这次你跳的距离。求从 $1$ 跳到 $n$ 的方案数。($1 \le n \le 10^5$，$1 \le a_i,h_0 < n$)

### 题解

我们考虑 $dp_i$ 表示到第 $i$ 位的方案数。考虑转移，我们先假设在第 $i$ 位无论如何每次跳 $a_i$ 步更新后面的状态，当遇到了 $a_j = a_i$ 时停止向后转移，$i = 1$ 且 $h_0 \not = a_1$ 时需要单独考虑每次跳 $h_0$ 步，最后的 $dp_n$ 即为答案。

首先证明算法正确性：



## **K**

**upsolved by **

### 题意



### 题解



## **L**

**upsolved by JJLeo**

### 题意

一共有 $n$ 天，一个懒学生知识掌握程度是一个 $[0,1]$ 的实数，每天可以在之前的基础上学习任意多的量，之后这天会进行考试，通过率为他的知识掌握程度，求他最终能通过考试的前提下知识掌握程度的最小期望值，输出期望化为最简分数后在模 ${10}^9+7$ 意义下的分子和分母。($1 \le n \le 10^{18}$)

### 题解

设 $f_k(x)$ 是还剩 $k$ 轮，之前已经复习了 $x$ 内容的最小期望复习内容，则有：

$$
f_k(x) = 
\begin{cases}
1,&k=1 \newline
\min \limits _{x \le y \le 1} \left(x^2+\left(1-x\right)f_{k-1}(y)\right), &k > 1
\end{cases}
$$

记  $g(k)=\min \limits _{0 \le y \le 1} f_k(y)$ 。

当 $k > 1$ 时，$f_k(x)$ 最小值在 $x = \dfrac{1}{2}g(k-1)$ 处取到，为 $f_k\left(\dfrac{1}{2}g(k-1)\right) = g(k-1) - \dfrac{g^2(k-1)}{4}$，且 下面用数学归纳法证明：

> 当 $k=2$ 时，$f_k(1)$ 恒为 $1$，显然当 $x = \dfrac{1}{2}g(1) = \dfrac{1}{2}$ 时取得最小值 $f_2(\dfrac{1}{2})=\dfrac{4}{3}$。
>
> 当 $k > 2$ 时，假设 $f_k(x)$ 最小值在 $x = \dfrac{1}{2}g(k-1)$ 处取到，则有：
>
> $$
> \begin{aligned}
> f_{k+1}(x)=& \min \limits _{x \le y \le 1} \left(x^2+\left(1-x\right)f_k(y)\right) \newline
> \ge&\min \limits _{0 \le y \le 1} \left(x^2+\left(1-x\right)f_k(y)\right) \newline
> \ge& \min \limits _{0 \le y \le 1} \left(x^2+\left(1-x\right)\left(\min \limits _{0 \le y \le 1} f_k(y)\right)\right) \newline
> =& \min \limits _{0 \le y \le 1} \left(x^2+\left(1-x\right)g(k)\right)
> \end{aligned}
> $$
>
> 当 $x=\dfrac{1}{2}g(k)$ 时，上式有最小值 $g(k) - \dfrac{g^2(k)}{4}$，且有：
>
> $$
> \dfrac{1}{2}g(k)=\dfrac{1}{2}g(k-1) - \dfrac{g^2(k-1)}{8} \le \dfrac{1}{2}g(k-1) \le 1
> $$
>
> 因此 $f_{k+1}(x)$ 最小值在 $x=\dfrac{1}{2}g(k)$ 处取到，为 $f_{k+1}\left(\dfrac{1}{2}g(k)\right) = g(k) - \dfrac{g^2(k)}{4}$。

我们所求的答案即为 $g(n)$，有递推式 $g(n+1) = g(n) - \dfrac{g^2(n)}{4}$，在模 $10^9+7$ 意义下是有循环节的。

但题目还要我们求分子分母，设 $g(n)=\dfrac{a(n)}{b(n)}$，其中 $\gcd\left(a(n),b(n)\right)=1$，初始时 $a(n)=b(n)=1$，则根据上述递推式有 $g(n+1) = \dfrac{4a(n)b(n)-a^2(n)}{4b^2(n)}$，分母永远是 $2$ 的次幂，分子永远是奇数，因此必然互质，从而分母递推式即为 $b(n+1)=4b^2(n)$。

将分母递推式取 $\log_2$ 后有 $\log_2b(n+1)=2\log_2b(n)+2$，左右同时 $+2$ 有 $\log_2b(n+1)+2=2\log_2b(n)+4$，设 $c(n)=\log_2b(n+1)+2$，则 $c(n+1)=2c(n)$，使用快速幂即可求解。

注意到最终分子分母在模意义下可能并不互质，此时并不需要再去将其约分。

## **记录**

0min：分题<br>30min：CSK 冲 G<br>53min：CSK WA2，ZYF 冲 J<br>56min：ZYF WA1后AC<br>75min：CSK AC，ZYF 冲 D<br>90min：ZYF WA1 后AC<br>121min：CSK 冲 C ，AC后学习最小树形图冲H<br>140min：CSK 发现 E题题面是神必，简化了一下题意<br>195min：验证一下E题意是否正确，CSK 冲 H<br>219min：CSK AC，集体冲E<br>280min：MJX想了个神必算法，改进之后可做，ZYF优化复杂度AC<br>after end：这场别的题太离谱了

## **总结**

### Dirt Replay

G (+3)："row" 读成环了+最大值初始值给小了

J (+1)：i = 1时未判断 $m$ 与 $a_1$ 

D (+1)：k = 1 时要特判