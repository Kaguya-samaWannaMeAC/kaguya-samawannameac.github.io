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
> 