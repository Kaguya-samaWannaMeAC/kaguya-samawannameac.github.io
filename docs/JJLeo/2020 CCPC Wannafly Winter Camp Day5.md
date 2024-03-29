---
hide:
  - toc
---

# 2020 CCPC Wannafly Winter Camp Day5

## **A**

### 题意

一共有 $n$ 个账号，可能有两个不同账号属于同一个人。一共举办了 $k$ 场比赛，每场比赛有一部分账号参加，如果有一场比赛两个账号同时参与了，那么它们一定是属于两个人的。问这些账号最少是属于多少个人的。($1 \le n \le 10^5$，$1 \le k \le 3$)

### 题解

最  难  签  到  题

只需考虑 $k=3$ 的情况：

- 如果一个账号三场比赛都参加了，那么它必然要额外算一个人。
- 如果一个账号参加了两场比赛，那么任意两个这样的账号一定都对应了不同的人，可以都先算上，再让可以和它们进行“匹配”的账号不算。
- 如果一个账号只参加了一场比赛，那么它可以和参加了另外两场的账号进行“匹配”，最后设只参加每场比赛的人数各有 $x_1,x_2,x_3$，则将它们合并所需的人数即为 $\max(x_1,x_2,x_3)$。
- 没有参加任何比赛的账号不需要管，它们可以属于到任意一个人。

## **B**

### 题意

给定一颗 $n$ 个节点的树，初始每个点 $u$ 对应一个集合 $S_u=\{u\}$。有 $m$ 次操作，每次选择一条边 $(u_i,v_i)$，令 $S_{u_i}$ 和 $S_{v_i}$ 同时变为 $S_{u_i} \cup S_{v_i}$。问所有操作过后每个点属于多少个点对应的集合。($1 \le n,m \le 5 \times 10^5$)

### 题解

首先考虑如何求解每个集合最终元素个数，$|S_{u_i} \cup S_{v_i}| = |S_{u_i}|+|S_{v_i}|-|S_{u_i} \cap S_{v_i}|$，由于本题是给出的是一颗树，从而一个点 $i \in |S_{u_i} \cap S_{v_i}|$ 必然是之前对 $(u_i,v_i)$ 这条边操作过一次，从而 $|S_{u_i} \cap S_{v_i}|$ 即为上次操作 $(u_i,v_i)$ 后的得到集合的大小，初始均为 $0$。这样每次操作后更新这个值，每次操作只需 $O(1)$ 的复杂度。

下面考虑如何求解每个点属于多少个点对应的集合，我们可以如下构建一个允许重边的图，初始为空：对于第 $i$ 次操作，新建一条权值为 $i$ 的无向边 $(u_i,v_i)$。

那么如果点 $i \in S_j$，意味着存在一条从 $i$ 到 $j$ 的权值递增的路径。那么如果我们将所有操作逆序，则存在一条从 $j$ 到 $i$ 的权值递增的路径，即逆序操作完毕后有 $j \in S_i$，因此逆序操作完毕后 $|S_i|$ 即为正序操作后点 $i$ 点属于多少个点对应的集合的数量。从而我们将所有操作逆序利用上面的方法维护每个集合大小即可。

## **C**

### 题意

$1$ 到 $n$ 的线段树，但每个点的 mid 你可以自由选择。给定 $m$ 个区间询问，求总访问节点数的最小值。($1 \le n \le 500$，$1 \le m \le 2 \times 10^5$)

### 题解

从数据范围容易想到可以 $O(n^3)$ 区间 dp，但每个区间对应的权值不好处理，本题的处理方法十分巧妙。

设询问区间为 $[\textit{ll},\textit{rr}]$，那么当前节点对应的区间 $[l,r] \subseteq [\textit{ll},\textit{rr}]$ 时就会停止继续递归，而如果 $[l,r]$ 与 $[\textit{ll},\textit{rr}]$ 有交但不被其包含，那么则会继续向下递归。

对于一个询问 $[l_i,r_i]$，我们将所有和其有交点但不被其包含的区间对应的节点增加 $1$ 的权值，这一部分是很好处理的。比较困难的是包含的部分。

注意到线段树是一个二叉树，从而任意一个子树都满足叶节点数恰好比非叶节点数多 $1$。因此对那些被他包含的区间，所有区间长度为 $1$ 即叶节点增加 $1$ 的权值，其它区间长度大于 $1$ 的非叶节点减少 $1$ 的权值，这样对于任意一种线段树的形态，如果 $[l_i,r_i]$ 包含了一个区间，那么 dp 过程中它的权值加上所有其内部划分的权值总是 $1$。

上述给节点增加权值的过程中，除了叶节点部分的所有操作均为对数个矩形进行整体加减，可以用二维差分来解决。而叶节点的部分因为对于每个询问，其更改部分是连续的，从而可以再用一个一维差分进行维护。总时间复杂度为 $O(n^3+m)$。

## **J**

### 题意

给定一个 $2^k \times 2^k$ 的 $01$ 矩阵 $A$，初始有一个同样大小的零矩阵 $B$，可以进行如下操作任意次：

- 将 $A$ 循环左移任意次，循环上移任意次，对任意 $1 \le i,j \le 2^k$，令 $B_{i,j}=B_{i,j} \oplus A_{i,j}$。

问能得到多少个不同的 $B$。($1 \le k \le 5$)

### 题解

$A$ 最多有 $2^{2k}$ 种不同情况，一个 $2^k \times 2^k$ 的 $01$ 矩阵等价于一个 $2^{2k}$ 的 $01$ 串，因此问题即为 $2^{2k}$ 个长度为 $2^{2k}$ 的 $01$ 串对应向量组的线性基大小，使用 bitset 即可优化至 $O(\dfrac{2^{6k}}{w})$。