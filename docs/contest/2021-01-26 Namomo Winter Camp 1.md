# [Namomo Winter Camp 1](https://vjudge.net/contest/419865)

| 排名 | 当场过题数 | 至今过题数 | 总题数 |
| ---- | ---------- | ---------- | ------ |
| 2/68 | 10         | 10         | 15     |

## **A**

**solved by Bazoka13**

### 题意



### 题解



## **B**

**solved by 2sozx**

### 题意

签到

### 题解

签到

## **C**

**upsolved by 2sozx**

### 题意

给定两个字符串集合 $A,B$ ，每次可以选择 $A, B$ 中各一个串 $x, y$ 并将其拼接为 $x + y$ 。如果存在 $x_1, x_2 \in A, y_1, y_2 \in B$ 使得 $x_1 + y_1 = x_2 + y_2$ 则称这四个串不是好的，问 $A,B$ 中好串各有多少个。

$\sum|x| \le 10 ^ 6$  

### 题解

此题直接乱搞，将式子移项得 $x_1 - x_2 = y_2 - y_1 = s$

将 $A,B$ 中的串按照长度直接排序，并算出来每个串的 $hash$，暴力计算 $A$ 中能产生多少种 $s$ ，在 $B$ 中有多少个 $s$ 能能产生作用，用 $map$ 搞搞就可以。

## **D**

**upsolved by 2sozx**

### 题意

开始有两圈人，

### 题解



## **E**

**solved by JJLeo**

### 题意

签到

### 题解

签到

## **F**

**solved by Bazoka13**

### 题意

签到

### 题解

签到

## **G**

**solved by Bazoka13**

### 题意

签到

### 题解

签到

## **H**

**solved by 2sozx**

### 题意

签到

### 题解

签到

## **I**

**solved by Bazoka13**

### 题意



### 题解



## **J**

**upsolved by **

### 题意



### 题解



## **K**

**solved by Bazoka13**

### 题意



### 题解



## **L**

**solved by JJLeo**

### 题意

签到

### 题解

签到

## **M**

**upsolved by JJLeo**

### 题意

二维平面上有 $n$ 个点，$q$ 次询问，从 $(a,b)$ 向右发射两条斜率为 $\pm \dfrac{1}{2}$ 的射线，对中间的点的下标求一个多项式哈希函数，强制在线。保证所有询问包含的点数 $m$ 不超过 $10^6$。($1 \le n, q \le 10^5$，$1 \le x_i, y_i \le 10^9$)

### 题解

斜率固定，可以进行坐标系变换，解如下方程：
$$
\begin{pmatrix}
1&\dfrac{1}{2} \newline
1&-\dfrac{1}{2}
\end{pmatrix}
\begin{pmatrix}
x' \newline 
y'
\end{pmatrix}
=
\begin{pmatrix}
x \newline 
y
\end{pmatrix}
$$
解得：
$$
\begin{pmatrix}
x' \newline 
y'
\end{pmatrix}
=
\begin{pmatrix}
\dfrac{1}{2}x+y \newline 
\dfrac{1}{2}x-y
\end{pmatrix}
$$
坐标变换后，等价于求直角坐标系下求 $x' \ge a' , y' \ge b'$ 的点对，第一维用线段树，第二维每个节点开一个 set，查询时将对应的点的下标取出来进行合并即可，时间复杂度为 $O(n \log ^2 n + m \log n)$，空间复杂度为 $O(n \log n)$，因为总点数 $m \le 10^6$，所以可以通过。

## **N**

**solved by JJLeo**

### 题意

模板题

### 题解

模板题

## **O**

**upsolved by JJLeo**

### 题意

二维平面上一个宇宙飞船，走折线依次到达给定的 $n$ 个点，形过一个回路，每次飞船头会对准目前的方向向量。有水平的沿 $x$ 负方向的阳光，设一个位置关于宇宙飞船圆心的极角为 $\theta$，则该位置的单位路程所受的光强为 $\max(0,\cos \theta)$。你需要选择一个位置，使得全程你一直处于该位置受到的光强之和最小，注意随着飞船头方向的改变，你的位置也会随之相对变化。($2 \le n \le 10^5$)

### 题解

~~模拟退火失败~~

设所选位置关于飞船头的极角为 $\theta$，则对于某一段路程，设该路程的方向向量为 $\alpha$，路程长度为 $x$，则该段路程所受光强为：
$$
\begin{aligned}
&\max(x\cos(\theta+\alpha), 0) \newline
= &
\begin{cases}
x\cos(\theta+\alpha), & -\dfrac{\pi}{2} \le \theta+\alpha \le \dfrac{\pi}{2} \newline
0, &\text{otherwise}
\end{cases}
\newline
= &
\begin{cases}
x\cos\theta\cos\alpha-x\sin\theta\sin\alpha, & -\dfrac{\pi}{2} \le \theta+\alpha \le \dfrac{\pi}{2} \newline
0, &\text{otherwise}
\end{cases}
\end{aligned}
$$
因此可以分别对 $\cos \theta$ 和 $\sin \theta$ 前面的系数进行区间覆盖，考虑到最终函数是数个三角函数的叠加且为非负值，因此任意一个部分都是形似“上凸”的，最小值一定是在边界处取得，扫描一遍获取每个端点的值即可。

## **记录**



## **总结**

