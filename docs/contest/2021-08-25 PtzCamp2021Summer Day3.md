---
hide:
  - toc
---

# [Petrozavodsk Camp, Summer 2021 IQ test](https://official.contest.yandex.com/ptz-summer-2021/contest/28722/enter)

| 排名  | 当场过题数 | 至今过题数 | 总题数 |
| ----- | ---------- | ---------- | ------ |
| 46/90 | 5          | 12         | 13     |

## **B**

**upsolved by JJLeo**

### 题意

数据结构，给定定值 $k,w$，维护序列 $a_1,a_2,\ldots,a_n$，有 $m$ 次以下两种操作：

- 设 $b_1,b_2,\ldots,b_n$ 是将 $a_1,a_2,\ldots,a_n$ 升序排序后的结果，输出 $\displaystyle\sum  _{i=1}^n \left\lfloor \frac{b_i i^k}{w} \right\rfloor$。
- 单点修改 $a_i$。

($1 \le n \le 10^5$，$1 \le k,w \le 5$，$0 \le a_i \le 10^5$)

### 题解

$$
\sum  _{i=1}^n \left\lfloor \frac{b_i i^k}{w} \right\rfloor=\sum_{i=1}^n\frac{b_ii^k-b_ii^k \bmod w}{w}
$$

因此题目转化为分别维护 $\displaystyle \sum_{i=1}^nb_ii^k$ 和 $\displaystyle \sum_{i=1}^n\left(b_ii^k \bmod w\right)$。

注意到 $a_i$ 范围比较小 (当然很大也是可以离散化的)，建立权值线段树，分别解决这两个问题：

- 对于前者，权值线段树维护某个权值内所有的元素排序后的 $\displaystyle \sum_{i}b_ii^l$，这里 $l=0,1,\ldots,k$。

  合并时右侧区间的元素排名会增大 $x$，这里 $x$ 是左区间元素的个数，变为 $\displaystyle \sum_{i}b_i{(i+x)}^l=\sum_i \sum_{j=0}^l\binom{l}{j}b_ii^jx^{l-j}= \sum_{j=0}^l\binom{l}{j}x^{l-j}\left(\sum_i b_ii^j\right)$，预处理组合数和 $0,1,2,\ldots,n$ 的 $0,1,2,\ldots,k$ 次幂即可 $O\left(k^2\right)$ 合并。

- 对于后者，$\displaystyle \sum_{i=1}^n\left(b_ii^k \bmod w\right)=\displaystyle \sum_{i=1}^n\left((b_i\bmod w){(i \bmod w)}^k \bmod w\right)$，因此至多有 $O\left(w^2\right)$ 种不同的取值。

  权值线段树维护某个权值内所有的元素排序后 $b_i \bmod w = A \land i \bmod w = B$ 的元素数 $c_{A,B}$。

  合并时右侧区间的元素排名会增大 $x$，这里 $x$ 是左区间元素的个数，会对 $B$ 产生一个 $x$ 的偏移量，二重循环枚举可以 $O\left(w^2\right)$ 合并。

总时间复杂度为 $O\left(m\left(k^2+w^2\right) \log n\right)$。

## **C**

**upsolved by **

### 题意

官方题解是三页论文。

### 题解

建议发表。

## **D**

**upsolved by JJLeo**

### 题意

初始长度为 $n$ 的序列 $1,2,\ldots,n$，$n$ 是偶数。每次可以选择两个相邻的数 $i,j$ 删去，获得 $c_{i,j}$ 的权值，最小化所有获得权值的最大值。($2 \le n \le 4000$)

### 题解

考虑一个 $O\left(n^3\right)$ 的区间 dp：

- 如果 $l,r$ 一起选，则有 $\max(f_{l+1,r-1},c_{l,r}) \to f_{l,r}$。
- 否则设 $l$ 和 $k$ 一起选，那么 $[l,k]$ 和 $[k+1,r]$ 独立，因此有 $\max(f_{l,k},f_{k+1,r}) \to f_{l,r}$。

可以发现 $f$ 至多有 $O\left(n^2\right)$ 个不同的值，可以利用这一点来进行优化。

## **E**

**solved by 2sozx Bazoka13 JJLeo**

### 题意



### 题解



## **F**

**solved by 2sozx JJLeo**

### 题意



### 题解



## **G**

**upsolved by JJLeo**

### 题意



### 题解



## **H**

**solved by 2sozx Bazoka13 JJLeo**

### 题意



### 题解



## **I**

**upsolved by JJLeo**

### 题意



### 题解



## **J**

**upsolved by JJLeo**

### 题意



### 题解



## **K**

**upsolved by JJLeo**

### 题意



### 题解



## **L**

**upsolved by JJLeo**

### 题意



### 题解



## **记录**

0h：MJX 说 M 是签到，ZYF 懵了。懵了一会儿好像懂了，直接暴力过了。然后 MJX 看了看 A 想了下过了，开始和ZYF CSK 想F，逆十字7min过了，但是啥也想不出来，IQ--。

1h：然后卡到快俩小时，E 看错了题意没看到连通，完全是个新题，随机一发过了。ZYF开始想恒等式的解法，推了半天，发现是个恒等式。但是其实是对的，少开个 long long wa 了一发，然后过了。

2~5h：然后开始做梦构造H，开始CSK想了个构造的方法，但是好像覆盖不全，经过亿点点的推进，想到了先构造几个完全图，然后再连起来，去构造这60个数，感觉暴力跑不完就先考虑俩完全图连一起(？为啥不直接考虑一个？)，暴力跑了一堆数据出来，发现差了点，最后想到好像一个完全图自己就最优了（？为什么最后才能想到，属于是构造题血脉压制了）。

## **总结**

## **Dirt**



