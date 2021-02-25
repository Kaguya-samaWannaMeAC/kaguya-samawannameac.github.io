# [Petrozavodsk Winter-2018. ITMO U 1 Contest](http://opentrains.snarknews.info/~ejudge/team.cgi?contest_id=001512)

| 排名   | 当场过题数 | 至今过题数 | 总题数 | Dirt |
| ------ | ---------- | ---------- | ------ | ---- |
| 26/160 | 6          | 6          | 12     | 50%  |

## **A**

**upsolved by **

### 题意



### 题解



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
\sum_{i=1}^n \frac{\dbinom{n-k}{2^i-1}}{\dbinom{2^n-1}{2^i-1}}
$$
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

**upsolved by **

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

**upsolved by **

### 题意



### 题解



## **J**

**solved by 2sozx JJLeo**

### 题意

给定长度为 $n$ 的数列 $a_i$ 和一个数 $h_0$。你一开始站在位置 $1$，手上拿着数 $h_0$。假设你在位置 $i$，手上拿的数是 $h$，那么你可以跳到 $i+h$ 或者 $i+a_i$。每次跳完后手上的数会变为这次你跳的距离。求从 $1$ 跳到 $n$ 的方案数。($1 \le n \le 10^5$，$1 \le a_i,h_0 < n$)

### 题解



## **K**

**upsolved by **

### 题意



### 题解



## **L**

**upsolved by **

### 题意



### 题解



## **记录**

0min：分题<br>30min：CSK 冲 G<br>53min：CSK WA2，ZYF 冲 J<br>56min：ZYF WA1后AC<br>75min：CSK AC，ZYF 冲 D<br>90min：ZYF WA1 后AC<br>121min：CSK 冲 C ，AC后学习最小树形图冲H<br>140min：CSK 发现 E题题面是神必，简化了一下题意<br>195min：验证一下E题意是否正确，CSK 冲 H<br>219min：CSK AC，集体冲E<br>280min：MJX想了个神必算法，改进之后可做，ZYF优化复杂度AC<br>after end：这场别的题太离谱了

## **总结**

### Dirt Replay

G (+3)："row" 读成环了+最大值初始值给小了

J (+1)：i = 1时未判断 $m$ 与 $a_1$ 

D (+1)：k = 1 时要特判