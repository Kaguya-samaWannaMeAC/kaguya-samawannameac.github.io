---
hide:
  - toc
---

# [XIX Open Cup named after E.V. Pankratiev. Grand Prix of Korea](http://opentrains.snarknews.info/~ejudge/team.cgi?SID=69984cfd7f35e966&action=2&lt=1)

| 排名   | 当场过题数 | 至今过题数 | 总题数 |
| ------ | ---------- | ---------- | ------ |
| 61/158 | 8          | 13         | 13     |

## **A**

**upsolved by JJLeo**

### 题意

给出一颗 $n$ 个点的树，一开始每条边都没有颜色，$q$ 次操作将一个点到根节点的所有边染为颜色 $c$ ($1 \le c \le C$)，每次操作后问有多少种颜色满足恰好有 $m$ 条边是该颜色。$(1 \le n,q,C \le 2 \times {10}^5)$

### 题解

树剖，轻边直接每次改即可，每条重链维护一个栈，表示连续段的颜色的最深点，从栈顶到栈底深度递增，每次更改暴力将栈顶深度更浅的元素弹出，再将新的颜色插入，这个过程中维护每种颜色覆盖的边即可。

每次操作最多加入 $O(\log n)$ 个元素，均摊复杂度 $O(q \log n)$。

## **B**

**solved by 2sozx JJLeo**

### 题意

给定一个由 $n \times m$ 的滑冰场，有一些点是障碍，每次移动沿上下左右四个方向移动，必须沿该方向移动到碰到障碍或到边界为止。有一些地方是关键点，现在给定起点，问从该点出发是否存在一种方案经过所有关键点至少一次。($1 \le n,m \le 50$)

### 题解

暴力连边，每条边用 bitset 记录一下经过了哪些关键点，然后 tarjan 缩点，每个强连通分量用 bitset 记录所有内部的关键点，从起始点开始在 DAG 上 dp，每次优先选 1 的个数多的后继状态，看最后 bitset 是否全 1 即可。

正确性不严谨证明：一个 1 一旦错过就补不过来了，因此如果存在方案那么选多的一定可以，如果不存在方案那么即使选多的也不行。

## **C**

**upsolved by JJLeo **

### 题意

$n$ 个人排成一列，`L` 型人会往左走，`R` 型人会往右走，不同类型的人相遇会有 $p$ 的概率 `R` 型人消失，$1-p$ 的概率 `L` 型人消失，问最后有 $A$ 个 `L` 型人走到最左侧，$B$ 个 `R` 型人走到最右侧的概率。($1 \le n \le 5000$)

### 题解

对于任意一种情况，一定存在一个唯一的 $i$ ($0 \le i \le n$) 满足 $[1,i]$ 中没有 `R` 型人走到右边，$[i+1,n]$ 没有 `L` 型人走到左边，此时显然有 $i$ 号人是 `L` 型人，$i+1$ 号人是 `R` 型人。

设 $f_{i,j}$ 为 $[1,i]$ 中没有 `R` 型人走到右边，且 $[i+1,n]$ 还需要有 $j$ 个 `L` 型人走到左边的概率。初始状态为 $f_{0,A} = 1$，则有：
$$
f_{i,j} = 
\begin{cases}
f_{i-1,j+1}, &a_i = \text{L} \newline
p \cdot f_{i-1,j}+(1-p) \cdot f_{i,j-1}, &a_i = \text{R} \land j \ne 0 \newline
0, &a_i = \text{R} \land j = 0
\end{cases}
$$
设 $g_{i,j}$ 为 $[i,n]$ 中没有 `L` 型人走到左边，且 $[1,i-1]$ 还需要有 $j$ 个 `R` 型人走到右边的概率。初始状态为 $g_{n+1,B} = 1$，则有：
$$
g_{i,j} = 
\begin{cases}
g_{i+1,j+1}, &a_i = \text{R} \newline
(1-p) \cdot g_{i+1,j}+p \cdot g_{i,j-1}, &a_i = \text{L} \land j \ne 0 \newline
0, &a_i = \text{L} \land j = 0
\end{cases}
$$
最终答案即为：
$$
\sum_{i=0}^nf_{i,0}g_{i+1,0}
$$
时间复杂度 $O(n^2)$。

## **D**

**solved by 2sozx Bazoka13 JJLeo**

### 题意

求一个 $1$ 到 $n$ 的排列，第 $i$ 个数的位置必须位于 $[l_i,r_i]$，同时再给出一个有向图，如果边 $(a,b)$ 存在则 $a$ 必须在 $b$ 前面。($1 \le n \le 300\,000$)

### 题解

先判环，有环直接无解。否则在得到的 DAG 上 dfs，得到每个点最靠右可能的位置 $R_i$，设 $x$ 为其后继点的数量，则 $R_i=\min(n-x,r_i)$。接下来将每个点贪心地选择入度为 $0$ 且 $l_i$ 不小于当前位置且 $R_i$ 最小的点为当前位置，并在 DAG 中删除该点。如果构造中某个位置无数可填则无解，否则可以直接构造出一组解。

$l_i$ 的限制可以将大于当前位置的入度为 $0$ 点放到一个 vector 中，到达每个位置时再将该 vector 中的数放入优先队列。

## **E**

**solved by Bazoka13 2sozx**

### 题意

给定一张图，判断能否选择两个点，这两个点作为电流的起点和终点，其余点和边组成一个仅有串并联组成的电路图。具体来说，边代表电阻，点代表电阻间的导线，要求起点和终点之间只能是串联和并联的嵌套组合。

### 题解

所有重边只算一条，不断删除度数为 $2$ 的点，并将删除的点相连的两个点用一条边连接。看最后是否只剩下两个点他们以一条边相连即可。

删除与相连操作相当于将两个电阻合并成一个，处理串联。

忽略重边相当于处理并联。

## **F**

**solved by JJLeo**

### 题意

使用指针存储二叉树，最多使用不超过 $125$ 个全局指针，每个指针对应一棵二叉树的根节点，每个分支节点的两个儿子可以指向任意一个其它的全局指针或是空指针。要求所有全局指针对应的树的两个叶子节点个数要么相等，要么左子树叶子节点个数恰好比右子树大 $1$。构造一种方案使得存在一个全局指针对应的二叉树叶子节点个数为 $n$。($1 \le n \le 10^{18}$)

### 题解

递归构造，如果 $n$ 是偶数，直接构造叶子节点数为 $\dfrac{n}{2}$ 的子树，并将两个儿子都连到该指针；否则构造左子树为叶子节点数为 $\dfrac{n-1}{2} + 1$ ，右子树为叶子节点数为 $\dfrac{n-1}{2}$。开一个 map 记录大小相同的子树的指针编号，以便复用，保证不同的全局指针数不超过 $125$。

## **G**

**upsolved by JJLeo**

### 题意

有 $n$ 个路灯，点亮第 $i$ 个路灯需要花费 $a_i$，每个灯可以照亮自己和相邻的两个路灯，你可以交换至多 $m$ 次任意两个路灯，要求最终所有路灯都被照亮的最小花费。($1 \le n \le 250\,000$，$0 \le m \le 9$)

### 题解

直接交换很难处理，可以将其转化为选择 $i$ ($i \le m$) 个本来要点亮的路灯，但是不付费用，再选择 $i$ 个本来不点亮的路灯，将费用补上。

设 $f_{i,j,k}$ 为前 $i$ 个灯都被照亮，且有 $j$ 个点亮灯没付费，$k$ 个不点亮的灯额外付费的最小花费。直接分类讨论转移即可，需要特别注意一下边界的情况，比如点亮第 $i+1$ 个灯，可以从 $f_{i,\times,\times}$ 转移到 $f_{i+2,\times,\times}$，但是这样会被边界卡住，可以假装 $i+2$ 这个灯不存在，同时也转移到 $f_{i+1\times,\times}$。

时间复杂度为 $O(nk^2)$。

## **H**

**solved by JJLeo**

### 题意

求有多少对 $(i,j)$ 满足 $A \le i \le B,C \le j \le D$，且 $\dfrac{i}{j}$ 约分后分子分母之和小于 $1000$。($1 \le A \le B \le 10^{18}$，$1 \le C \le D \le 10^{18}$)

### 题解

即求：

$$
\sum_{i=1}^{999}\sum_{j=1}^{999-i}[\gcd(i,j)=1]\left|\left[\lceil \frac{A}{i} \rceil,\lfloor \frac{B}{i} \rfloor\right] \cap \left[\lceil \frac{C}{i} \rceil,\lfloor \frac{D}{i} \rfloor\right] \cap \mathbf{N}^*\right|
$$

## **I**

**solved by Bazoka13 2sozx**

### 题意

两人轮流从正 $n$ 边形选择两点将其相连（当然这条边之前不能被选），首先组成闭合的图像的一方赢，问先手是否必胜。($3 \le n \le 5000$)

### 题解

每次如果不选孤立点，则对方下一次就可以画一个三角形获胜，从而每条边将整个图形分为两个部分，有：
$$
\textit{SG}(n) = \operatorname{mex}_{x+y=n-2}\textit{SG}(x)\oplus\textit{SG}(y)
$$


## **J**

**upsolved by JJLeo**

### 题意

给出一个直方图，第 $i$ 个块的高度为 $a_i$，对任意 $1 \le i \le j \le n$，点对 $(i,j)$ 对应的块构成的矩形面积定义为：
$$
(j-i+1)\min_{k=i}^ja_k
$$
求所有 $\dfrac{n(n+1)}{2}$ 个点对应的块构成的矩形面积从小到大排序后，第 $L,L+1,\cdots,R$ 个数分别是什么。($1 \le n,R - L + 1 \le 3 \times {10}^5$)

### 题解

先用单调栈求出第 $i$ 个块往左第一个**不**低于它的位置 $x$，记 $l_i=x+1$，如果不存在这样的位置记 $l_i=1$。

再用单调栈求出第 $i$ 个块往右第一个低于它的位置 $y$，记 $r_i=y-1$，如果不存在这样的位置记 $r_i=n$。

可以发现任意一个边界为 $[l,r]$ 的矩形恰好属于一个 $i$，且 $[l,r] \subseteq [l_i,r_i],\min\limits _{k=l}^ra_k = a_i$，如果属于多个 $i$ 那么两个 $i$ 高度相同，与上述定义矛盾。

二分最小的 $S$ 满足所有面积小于 $S$ 的矩形数量之和小于 $L$，相当于对于每一个 $i$ 求有多少个宽度不超过 $x = \min(r_i-l_i+1,\lfloor \dfrac{S}{a_i} \rfloor)$ 的矩形，两个端点都在 $[l_i, r_i]$ 的范围且包含 $i$。包含 $i$ 这个条件可以用容斥，先不考虑这个条件，然后减掉矩形两个端点在 $[l_i,i-1]$ 和 $[i+1,r_i]$ 的数量即可。计算长度为 $A$ 有多少个长度为 $B$ 的线段可以用一个等差数列求和公式计算。

先将排名在 $L$ 之后的面积为 $S$ 的输出，再将每个 $i$ 下一步可以扩展出的矩形大小放到优先队列里，每次选最小的可以扩展的进行输出直到总数量到达 $R$，每次可以增加的数量计算同上，用矩形两个端点在 $[l_i,r_i]$ 中的数量减掉矩形两个端点在 $[l_i,i-1]$ 和 $[i+1,r_i]$ 的数量，不过这次要求矩形的宽度恒定，不再需要等差数列求和公式。

总复杂度为 $O(n \log n)$。

## **K**

**upsolved by JJLeo**

### 题意

$1$ 到 $n$ 一共 $n$ 个数排成一列，你可以选择任意一个点作为起点，每次向左或向右移动到第一个之前没有移动到的数字，一共移动 $n$ 次。

将每次移动到的数字按顺序组成一个排列 $p_1,p_2, \cdots, p_n$，同时给定序列 $c_1,c_2,\cdots,c_n$ 和 $d_1,d_2,\cdots,d_n$，求问当出发点为 $1,2,\cdots,n$ 时，下式的最大值：
$$
\sum_{i=1}^n[p_{c_i} = i]d_i
$$
($1 \le n \le 3\times {10}^5$)

### 题解

设 $f_{i,j}$ 表示取完 $[i,j]$ 所有数的最大值，可以由 $f_{i,j}$ 转移到 $f_{i-1,j}$ 和 $f_{i,j+1}$，对于每个 $i$ 需要做一次 $O(n^2)$ dp，总复杂度为 $O(n^3)$。

考虑这个过程是反过来也是可以 dp 的，只需从初始状态 $f_{1,n}$ 做一次 dp，最后输出 $f_{i,i}$，复杂度降为 $O(n^2)$。

考虑 $f_{i,j}$ 代表矩阵中 $i$ 行 $j$ 列中这个点，最终答案即为主对角线上的值，初始状态为左上角的 $f_{1,n}$，每次可以向左或向下移动，可以发现对于每个 $d_i$，至多存在于两次转移上：

- $c_i \ne 0,i+c_i-1 \le n$，则 $f_{i,i+c_i-1} + d_i \to f_{i+1,i+c_i-1}$。
- $c_i \ne 0,i-c_i+1 \ge 1$，则 $f_{i-c_i+1,i} + d_i \to f_{i-c_i+1,i-1}$。

绝大部分的转移均没有附加权值，从而可以使用线段树优化 dp，因为可以向左走，两种转移都直接转移到左侧所有的点，线段树区间取 $\max$ 即可。

最终答案为 $f_{i,i} + [c_i=1]d_i$，时间复杂度为 $O(n \log n)$。

## **L**

**solved by 2sozx**

### 题意

给定一个长度为 $n(n\le10^5)$ 的序列，每次从序列头部出发，以单调不减或单调减向右移动，不能移动时停止，形成一个段。如果此时移动的长度小于一个值 $M$，则将长度补到 $M$，问对于不同的 $M$ 这个序列会形成几段，并且长度一共补了多少。

### 题解

先预处理一下每个点能最长移动到多远，对于每个 $M$ 求一下，复杂度为调和级数。

## **M**

**solved by JJLeo**

### 题意

给出一颗 $n$ 个节点的树，有边权，你需要选择 $k$ 条不相交的边使得边权之和最大，或判断无解。($1 \le n \le 250\,000$)

### 题解

wqs 二分裸题。

设 $F_i$ 为选择 $i$ 条边的最大权值，盲猜这个函数是上凸的，二分斜率 $K$，给每条边的权值减少 $K$，如果最优方案所选边数小于 $k$，减少斜率，否则增大斜率。设斜率为 $K$ 时最优方案权值为 $G_K$，最终答案即为 $G_K + K \cdot k$。

判断无解其实不用再来一遍 dfs，可以直接把斜率设为负无穷，此时选的边数即为最多可选边数。

## **记录**

0min：分题<br>?min：MJX看B很水但是不好写先看别的题<br>?min：看I签到MJX去写，写挂了，ZYF冲H<br>29min：ZYF AC，MJX写L，CSK推I<br>67min：MJX AC，CSK冲I<br>93min：CSK AC，ZYF先冲B<br>?min：想到了F，ZYF冲F<br>?min：WA F，ZYF冲B<br>142min：ZYF AC，拿到B一血，发现F题读错了<br>149min：ZYF AC，猜E结论<br>211min：CSK猜结论冲E，AC，ZYF冲M，MJX CSK猜D结论<br>256min：ZYF WA on46，MJX不知道咋做的猜二分范围小了，猜对了，AC<br>292min：MJX WA4 后AC<br>till end：拿了一血就很帅，不亏

## **总结**

ZYF：bug 制造机，所有题都裂开，要加强熟练度。