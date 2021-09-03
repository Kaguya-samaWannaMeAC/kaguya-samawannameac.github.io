---
hide:
  - toc
---

# 2020 CCPC Wannafly Winter Camp Day1

## **A**

### 题意

$n$ 个随机变量，第 $i$ 个变量均匀分布于 $[l_i,r_i]$ 的每个整数，求最优排布方式下最终序列的期望逆序对个数的最小值。($1 \le n \le 5 \times 10^3$)

### 题解

按照 $\dfrac{l_i+r_i}{2}$ 从小到大排序就可以令任意两个数是一组逆序对的期望不超过 $\dfrac{1}{2}$：

- 如果两区间不相交，显然成立。
- 如果两区间相交但不包含，满足 $l_i \le l_j \le r_i \le r_j$，如果两者都在相交区域，那么它们是一组逆序对的概率恰为 $\dfrac{1}{2}$，否则必然不是逆序对，因此总概率不超过 $\dfrac{1}{2}$。
- 如果两区间包含，如果两者都在内部区间，那么它们是一组逆序对的概率恰为 $\dfrac{1}{2}$。否则外部区间的点在左侧或者右侧以及两个变量的位置关系就能决定是否贡献逆序对，可以发现按照 $\dfrac{l_i+r_i}{2}$ 从小到大排序就可以让更大的那一边不贡献逆序对。

排序后可以 $O(n^2)$ 枚举两两之间贡献逆序对的概率，分母为 $(r_i-l_i+1)(r_j-l_j+1)$，分四种情况讨论分子：

- 如果两区间不相交，分子为 $0$。
- 如果两区间相交但不包含，满足 $l_i \le l_j \le r_i \le r_j$，分子为 $\sum \limits _{k=1}^{r_i-l_j} k$ 。
- 如果前面的区间包含后面的区间，满足 $l_i \le l_j \le r_j \le r_i$，分子为 $\sum \limits _{k=1}^{r_i-l_j} k+(r_i-r_j)(r_j-l_j+1)$。
- 如果后面的区间包含前面的区间，满足 $l_j \le l_i \le r_i \le r_j$，分子为 $\sum \limits _{k=l_i-l_j}^{r_i-l_j} k$。

注意上述分母对应的逆元可以预先 $O(n \log n)$ 预处理，这样总时间复杂度为 $O(n^2+n \log n)$。

## **C**

### 题意

设一张无向图是 $k$ 染色的当且仅当可以用不超过 $k$ 种颜色给每个点染色，使得任何由边相连的两点颜色不同。设 $g(n,k)$ 是 $n$ 个点无自环重边的 $k$ 染色无向图的边数最大值，求 $\left(\sum \limits_{i=l}^rg(n,i)\right) \bmod 998244353$。共有 $T$ 组数据。($1 \le T \le 10^3$，$1 \le l \le r \le 10^9$)

### 题解

设第 $i$ 种颜色有 $c_i$ 个点，则最大边数为 $\dbinom{n}{2}-\sum \limits _{i=1} ^k \dbinom{c_i}{2}$，而 $\sum \limits _{i=1} ^kc_i=n$，因此想要最大化上述边数，应该让所有 $c_i$ 尽可能接近，即有 $n - n \bmod k$ 个 $c_i$ 为 $\lfloor \dfrac{n}{k} \rfloor$，剩下 $n \bmod k$ 个 $c_i$ 为 $\lfloor \dfrac{n}{k} \rfloor+1$，此时有：
$$
\begin{aligned}
g(n,k) &= \binom{n}{2}-\sum  _{i=1} ^k \binom{c_i}{2} \newline
&= \binom{n}{2}- (n - n \bmod k)\binom{\lfloor \dfrac{n}{k} \rfloor}{2}- (n \bmod k)\binom{\lfloor \dfrac{n}{k} \rfloor+1}{2} \newline
&= \binom{n}{2}- k\lfloor \frac{n}{k} \rfloor\binom{\lfloor \dfrac{n}{k} \rfloor}{2}- (n-k\lfloor \frac{n}{k} \rfloor)\binom{\lfloor \dfrac{n}{k} \rfloor+1}{2}
\end{aligned}
$$
使用关于 $i$ 的整除分块即可 $O(\sqrt n)$ 求解 $\sum \limits_{i=l}^rg(n,i)$，总时间复杂度 $O(T\sqrt n)$。

## **D**

### 题意

给出两个 $n$ 个点的点集相同的无向图 $G_1$ 和 $G_2$，设 $G_1$ 的一个生成树的权值为该生成树中的边在 $G_2$ 中的数目，求 $G_1$ 所有生成树权值之和。($1 \le n \le 400$)

### 题解

每颗生成树的权值并不好用一个单纯的乘积来表示，考虑矩阵树定理中的边权不仅可以是一个数，还可以是一个多项式，我们设一条只在 $G_1$ 中的边的边权为 $1$，一条既在 $G_1$ 又在 $G_2$ 中的边的边权为 $x$，那么最终一个生成树在题目中对应的权值为 $i$，则它对应的多项式即为 $x^i$。最终基尔霍夫矩阵每一项均为多项式，而行列式的值是一个多项式 $f(x)=\sum \limits _{i=0}^{+\infty} a_i x^i$，我们所求的答案即为 $\sum \limits _{i=0}^{+\infty} ia_i=f'(1)$。根据 [行列式求导法则](https://spaces.ac.cn/archives/2383)，有：

$$
\begin{aligned}
\frac{\text d}{\text dx}|\boldsymbol{A}(x)|&=|\boldsymbol{A}(x)| \text{Tr}\left(\boldsymbol{A}^{-1}\frac{\text d \boldsymbol{A}(x)}{\text d x}\right) \newline
&=|\boldsymbol{A}(x)| \sum_i \sum_j {\left(\boldsymbol{A}^{-1}(x)\right)}_{ij}{\left(\frac{\text d \boldsymbol{A}(x)}{\text d x}\right)}_{ji}
\end{aligned}
$$

这里矩阵函数对单个变量的求导 $\dfrac{\text d \boldsymbol{A}(x)}{\text d x}$，即为矩阵中每个位置分别对 $x$ 求导。

设 $\boldsymbol{B}(x)$ 是本题中基尔霍夫矩阵删去最后一行和最后一列对应的方阵，所求即为：

$$
\left(\frac{\text d}{\text dx}|\boldsymbol{B}(x)|\right) \Bigg|_{x=1}=|\boldsymbol{B}(1)| \sum_i \sum_j {\left(\boldsymbol{B}^{-1}(1)\right)}_{ij}{\left(\frac{\text d \boldsymbol{B}(1)}{\text d x}\right)}_{ji}
$$

$O(n^3)$ 同时算出行列式和逆矩阵即可。

## **E**

### 题意

给定一颗 $n$ 个节点的树，$m$ 条路径。规定一条路径 $u \to v$ 在根为 $i$ 时权值为 $\operatorname{dis}(u,\operatorname{lca}(u,v)) \cdot \operatorname{dis}(v,\operatorname{lca}(u,v))$。现在需要求出当根为 $1,2,\cdots,n$ 时，所有路径的权值之和。($1 \le n, m \le 3 \times 10^5$)

### 题解

首先以 $1$ 为根求出答案，设 $i$ 是 $f_i$ 的父亲，考虑 $f_i$ 相比 $i$ 答案的变化量，显然一条路径只有同时经过 $i$ 和 $f_i$ 才能使得该路径对这两个点为根时的权值贡献发生变化。设一条路径 $u \to v$，则对于 $u$ 到 $\operatorname{lca}(u,v)$ 上除了 $\operatorname{lca}(u,v)$ 这点外其它点相比其父亲的改变量为（另一侧同理）：

$$
\begin{aligned}
&(\operatorname{dis}(u,\operatorname{lca}(u,v))-d-1)(\operatorname{dis}(v,\operatorname{lca}(u,v))+d+1)-(\operatorname{dis}(u,\operatorname{lca}(u,v))-d)(\operatorname{dis}(v,\operatorname{lca}(u,v))+d) \newline
=& \operatorname{dis}(u,\operatorname{lca}(u,v))-\operatorname{dis}(v,\operatorname{lca}(u,v))-2d-1
\end{aligned}
$$

其中 $d=\operatorname{dis}(f_i,\operatorname{lca}(u,v))$，注意到 $d$ 随着深度增加是一个等差数列，因此可以进行树上二次差分，最后再进行一次 dfs 由 $1$ 号节点为根的答案得到其它节点为根的答案，时间复杂度为 $O(n \log n)$。

## **I**

### 题意

维护一个数据结构，$n$ 个数，$m$ 次询问，支持区间取最小值，以及区间查询第 $k$ 小。($1 \le n,m \le 8 \times 10^4$)

### 题解

好写的解：分块，每个块维护一个最小值标记，块内序列，以及块内序列排好序的结果。修改时边界处暴力拆开修改并排序，整块直接打标记。查询时二分答案转为询问 $\le x$ 的数有多少个，边界处暴力查询，整块则利用排好序的序列进行二分，注意每个数都要和标记取个 $\min$，显然这样的序列也是有序的，同样可以支持二分。时间复杂度为 $O(m\sqrt n \log^2n)$。

正解：考虑没有修改操作，可以线段树套线段树，其中第二层要动态开点，这样单次查询即为在 $O(\log n)$ 棵线段树上二分，复杂度为 $O(\log ^2 n)$。考虑如何进行修改操作，考虑每次修改到达一个**完全覆盖**的区间后直接暴力修改，将 $\ge x$ 的节点都并到 $x$ 处，并打上标记，然后把它的所有祖先相应的节点也进行等量的修改，设我们在所有**完全覆盖**的区间处一共将 $t$ 个节点并到了 $x$ 处，则复杂度为 $O(t \log ^2 n)$，因为由 $O(\log n)$ 个祖先需要进行等量的修改。我们每次操作将所有**完全覆盖**的区间处对应线段树的节点减少了 $t$ 个，而所有线段树的总结点数一开始只有 $O(n \log n)$ 个，因此 $\sum t$ 是 $O(n \log n)$ 级别的，总时间复杂度为 $O(n \log ^3 n+m \log^2n)$。