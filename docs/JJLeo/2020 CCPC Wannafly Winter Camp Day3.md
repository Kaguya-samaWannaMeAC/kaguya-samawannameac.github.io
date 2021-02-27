# 2020 CCPC Wannafly Winter Camp Day3

## **C**

### 题意

给定一个 $n$ 个点 $m$ 条边的无向图，给边定向成为一个 DAG，最小化最长路的长度。($1 \le n \le 17$，$1 \le m \le 136$)

### 题解

考虑给一个图染色，相同颜色的点不能相邻，让颜色编号小的点指向颜色编号大的点，这样就形成了一个 DAG，且最长路即为颜色数量。

因此先 $O(n2^n)$ 预处理每个点集是否是独立集，再 $O(3^n)$ 枚举子集进行 dp 即可。

## **D**

### 题意

给定 $n$ 和 $p$，求下式的值，保证 $p$ 是质数：
$$
\sum_{i=1}^n \sum_{j=1}^i \sum_{k=1}^i \gcd(i,j,k) \pmod p
$$


($1 \le n \le 10^9$，$p \le 10^9 + 9$)

### 题解


$$
\begin{aligned}
& \sum_{i=1}^n \sum_{j=1}^i \sum_{k=1}^i \gcd(i,j,k) \newline
=& \sum_{d=1}^n\sum_{i=1}^n \sum_{j=1}^i \sum_{k=1}^i [\gcd(i,j,k) = d] \newline
=& \sum_{d=1}^n d\sum_{i=1}^{\lfloor \frac{n}{d} \rfloor} \sum_{j=1}^{\lfloor \frac{i}{d} \rfloor d} \sum_{k=1}^{\lfloor \frac{i}{d} \rfloor d} [\gcd(i,j,k) = 1] \newline
=& \sum_{d=1}^n d\sum_{i=1}^{\lfloor \frac{n}{d} \rfloor} \sum_{j=1}^i \sum_{k=1}^i [\gcd(i,j,k) = 1] \newline
=& \sum_{d=1}^n d\sum_{i=1}^{\lfloor \frac{n}{d} \rfloor} \sum_{j=1}^i \sum_{k=1}^i \sum_{p|\gcd(i,j,k)}\mu(p) \newline
=& \sum_{d=1}^n d \sum_{p=1}^{\lfloor \frac{n}{d} \rfloor} \mu(p) \sum_{i=1}^{\lfloor \frac{n}{dp} \rfloor} \sum_{j=1}^{\lfloor \frac{i}{p} \rfloor p} \sum_{k=1}^{\lfloor \frac{i}{p} \rfloor p}1 \newline
=& \sum_{d=1}^n d \sum_{p=1}^{\lfloor \frac{n}{d} \rfloor} \mu(p) \sum_{i=1}^{\lfloor \frac{n}{dp} \rfloor} \sum_{j=1}^i \sum_{k=1}^i 1 \newline
=& \sum_{d=1}^n d \sum_{p=1}^{\lfloor \frac{n}{d} \rfloor} \mu(p) \sum_{i=1}^{\lfloor \frac{n}{dp} \rfloor} i^2 \newline
\overset{T=dp}{=} & \sum_{T=1}^n \sum_{i=1}^{\lfloor \frac{n}{T} \rfloor} i^2 \sum_{d|T}d\mu(\frac{T}{d})  \newline
=& \sum_{T=1}^n \sum_{i=1}^{\lfloor \frac{n}{T} \rfloor} i^2 \varphi(T) \newline
=& \sum_{T=1}^n \frac{\lfloor \frac{n}{T} \rfloor(\lfloor \frac{n}{T} \rfloor+1)(2\lfloor \frac{n}{T} \rfloor+1)}{6} \varphi(T)  \newline
\end{aligned}
$$

使用杜教筛的 $O(\sqrt n)$ 个整除分块值位置的前缀和即可求解，时间复杂度为 $O(n^{\frac{2}{3}})$。（当然这题数据范围小不用线性筛预处理直接暴力杜教筛 $O(n^{\frac{3}{4}})$ 也能过）

## **F**

### 题意

给定长度为 $n$ 的序列 $a_1,a_2,\cdots,a_n$，将其分为非空的 $k$ 段，每段的费用为其中相同元素的对数，最小化每段费用之和。($1 \le a_i \le n \le 10^5$，$2 \le m \le \min(n,20)$)

### 题解

考虑最暴力的 dp，设 $f_{i,j}$ 为将 $[1,i]$ 中的数分为 $j$ 段的最小花费，每次的转移为：
$$
f_{i,j} = \min_{k=0}^{i-1}(f_{k,j-1}+w_{k+1,i})
$$
其中 $w_{l,r}$ 表示 $[l,r]$ 这段区间的花费，时间复杂度为 $O(n^2k)$。

注意到可以先算出 $f_{1,1},f_{2,1},\cdots,f_{n,1}$，再通过这些结果算出 $f_{1,2},f_{2,2},\cdots,f_{n,2}$，重复 $k$ 次即可算出 $f_{1,k},f_{2,k},\cdots,f_{n,k}$。每次的流程其实是相同的，可以通过优化这一步来减少时间复杂度。

这个转移是具有决策单调性的，即如果 $f_{i,j}$ 的最优决策点是 $k$，那么 $f_{i+1,j}$ 的最优决策点必然 $\ge k$。证明如下：

> 假设 $f_{i+1,j}$ 的最优决策点 $x<k$，则有：
> $$
> f_{x,j-1}+w_{x+1,i+1} < f_{k,j-1}+w_{k+1,i+1}
> $$
> 等价于：
> $$
> f_{x,j-1}+w_{x+1,i}+\sum_{m=x+1}^{i}[a_m=a_{i+1}] < f_{k,j-1}+w_{k+1,i}+\sum_{m=k+1}^{i}[a_m=a_{i+1}]
> $$
> 由于 $x < k$，所以：
> $$
> \sum_{m=x+1}^{i}[a_m=a_{i+1}] \ge \sum_{m=k+1}^{i}[a_m=a_{i+1}]
> $$
> 从而有：
> $$
> f_{x,j-1}+w_{x+1,i} < f_{k,j-1}+w_{k+1,i}
> $$
> 这与 $k$ 是 $f_{i,j}$ 的最优决策点矛盾。
之后就可以直接套分治优化决策单调性 dp 的板子，还有一个问题就是 $w_{l,r}$ 怎么计算，其实可以通过类似莫队的方式移动左右指针来进行计算，设当前的决策区间为 $[L,R]$，则指针在当前层移动，以及移动到左右儿子再回来的次数均是 $O(R-L)$ 的，从而由总决策区间长度为 $O(n \log n)$ 可知指针移动的总次数也是 $O(n \log n)$ 的。

我们需要进行 $k$ 次上述 dp，从而总时间复杂度为 $O(nk \log n)$。

## **H**

### 题意

给定一个所有数字均不同的长度为 $n$ 的序列 $a_1,a_2,\cdots,a_n$，求下式的值：
$$
\sum_{i=1}^n \sum_{j=i}^n [j-i<n-2]\max_{x,y \in [1,i) \cup(j,n),x \ne y }\gcd(a_x,a_y)
$$
($1 \le n, a_i \le 2 \times 10^5$)

### 题解

考虑从大到小枚举最大的 $\gcd$ 值 $\ge d$ 的方案数，减去 $\ge d+1$ 的方案数即为 $=d$ 的方案数。

维护删除的区间以每个点为左端点时，右端点可以扩展的最大值。将所有 $d$ 倍数的位置拿出来，设为 $a_1,a_2,\cdots,a_m$，进行如下的分类讨论：

- $m \le 1$，那么显然不可能有 $\gcd = d$ 的情况，直接跳过。
- $m=2$，则 $[1,a_1-1]$ 可以延伸到 $a_1-1$，$[a_1+1,a_2-1]$ 可以延伸到 $a_2-1$，$[a_2+1,n]$ 可以延伸到 $n$。
- $m=3$，则 $[1,a_1]$ 可以延伸到 $a_2-1$，$[a_1+1,a_2]$ 可以延伸到 $a_3-1$，$[a_2+1,n]$ 可以延伸到 $n$。
- $m\ge4$，则 $[1,a_1]$ 可以延伸到 $a_{m-1}-1$，$[a_1+1,a_2]$ 可以延伸到 $a_m-1$，$[a_2+1,n]$ 可以延伸到 $n$。

注意上述过程我们并不需要对 $a_1,a_2,\cdots,a_m$ 排序，只需要维护最大值、次大值、最小值、次小值。

我们需要维护所有右端点可以扩展的最大值之和，并支持区间取 $\max$ 操作，这可以使用 jls 线段树完成，时间复杂度为 $O(n \log n)$。

## **J**

### 题意

给定字符串 $s$，$q$ 次询问，问将后缀 $i$ 划分为至多 $k$ 段得到的字符串中，字典序最大的字符串的最小值是多少。输出对应段的位置，如果有多解，输出最靠左的那一个。($1 \le |s|,q \le 10^5$) 

### 题解

如果 $k=1$，显然答案为后缀，下面考虑 $k > 1$ 的情况。

考虑对将一个串划分使得字典序最大的字符串最小，那么一定是选择 Lyndon 分解的一些点上进行划分，因为 Lyndon 分解后的串均为 Lyndon 串，别的地方进行划分出字符串的字典序必然大于对应 Lyndon 串的字典序。

首先使用后缀数组+单调栈求出每个后缀 Lyndon 分解后第一个 Lyndon 串的位置 $[l,r]$，记该串为 $w$，则该后缀在 Lyndon 分解后一定形如如下形式：
$$
\underbrace{ww \cdots w}_{x}S
$$
其中 $S$ 为 Lyndon 分解后面的串，可以为空，且 $S < w$。 $x$ 即为对应循环节重复的数量，可以通过如下方式算出：
$$
x=\lfloor \frac{\operatorname{LCP}(l,r)}{|w|} \rfloor + 1
$$
其中 $\operatorname{LCP}(i,j)$ 表示后缀 $i$ 和 $j$ 的最长公共前缀。

下面根据上述值的不同分类讨论可以得出答案：

- 如果 $x < k$，显然将每个 $w$ 单独分出来，后面的 $S$ 也单独分出来就可以，答案为 $[l,r]$。

- 如果 $x \bmod k = 0$，若 $S$ 为空，则答案为 $[l,r]$，否则答案为 $[l+(x-\dfrac{x}{k})|w|, n]$。
- 如果 $x \bmod k \ne 0$，则答案为 $[l,l+\lceil\dfrac{x}{k}\rceil |w|-1]$。