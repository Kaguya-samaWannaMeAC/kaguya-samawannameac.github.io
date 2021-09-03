---
hide:
  - toc
---

# [Moscow Pre-Finals Workshop 2016. National Taiwan U Selection.](http://opentrains.snarknews.info/~ejudge/team.cgi?contest_id=006282)

| 排名   | 当场过题数 | 至今过题数 | 总题数 | dirt |
| ------ | ---------- | ---------- | ------ | ---- |
| 47/145 | 6          | 9          | 10     | 53%  |

## **A**

**solved by 2sozx**

### 题意

给定一个只包含 $e,a,s,y$ 的字符串 $S$ ，每次询问一个区间问区间内包含最多 $easy$ 的子序列有多少个 $easy$ 。$Q \le 10^5, |S| \le 10^5$

### 题解

预处理每一位后面（包括自己）第一个 $e$ 的位置；预处理每一位后面应该出现字母的位置；每次询问倍增查找即可。

## **B**

**solved by 2sozx**

### 题意

模板

### 题解

模板

## **C**

**upsolved by **

### 题意



### 题解



## **D**

**solved by Bazoka13**

### 题意

一个包含 $n$ ($1\leq n \leq 1000$) 个点的点集，每次选两个点连线，不能与之前连线重合，不能经过其他点，判断后手是否必胜。$T$ 次询问 $1\leq T\leq 1000$

### 题解

最后结果一定是一个三角剖分，结合平面图欧拉定理（注意此处平面图欧拉定理还要考虑无限大的基础平面）可以推出结果只与凸包上点数有关，然后就很好搞了。

但是要注意 $Graham$ 不适用，具体在个人页面的Bug整理

## **E**

**upsolved by JJLeo**

### 题意

$T$ 组数据，给定 $n,m$ 求有多少点对 $(r,s)(r \le s)$ 满足如下四条性质：

- $\gcd(r,s) = 1$。
- $r \not \equiv s \pmod 2$。
- $r+s \le \min(n,m)$。
- $s \le \lfloor\dfrac{\max(n,m)}{2}\rfloor$。

($1 \le T \le 5000$，$1 \le n,m \le {10}^7$)

### 题解

$f(n,m)$ 表示 $n \times m$ 的棋盘，满足除了 $\gcd(r,s) = 1$ 的其它三条性质的 $(r,s)$ 数量。

手写几个可以发现对于固定的 $n,m(n \le m)$，当 $r=1,2,3, \cdots, \lfloor\dfrac{\max(n,m)}{2}\rfloor$ 时，方案数形如：
$$
0,1,1,2,2,3,2,2,1,1,0
$$
上面是 $n=11,m=22$ 的例子，其它当奇偶不同时中间会略有变化，可以 $O(1)$ 求解。

到这里都会，然后最终答案为：
$$
\sum_{d=1}^{\min(n,m)}\mu(d)f\left(\lfloor\frac{n}{d}\rfloor,\lfloor\frac{m}{d}\rfloor\right)[d \bmod 2 = 1]
$$
我只想知道为啥。

!!! notice ""
    2021-02-24 update，我终于知道为啥了：

设 $g(r,s)$ 为 $n \times m$ 的棋盘，点对 $(r,s)$ 不考虑 $\gcd(r,s)=1$ 是否合法，合法为 $1$，否则为 $0$。

则所求即为：

$$
\begin{aligned}
&\sum_{i=1}^n\sum_{j=1}^mg(i,j)[\gcd(i,j)=1] \newline
=& \sum_{i=1}^n\sum_{j=1}^mg(i,j)\sum_{d \mid \gcd(i,j)} \mu(d) \newline
=& \sum_{d=1}^{\min(n,m)}\mu(d)\sum_{i=1}^{\lfloor\frac{n}{d}\rfloor}\sum_{j=1}^{\lfloor\frac{m}{d}\rfloor}g(id,jd)
\end{aligned}
$$

注意到，如果 $d$ 为偶数，则 $id \equiv jd \pmod 2$，必然有 $g(id,jd)=0$；否则 $(id,jd)$ 在 $n \times m$ 的棋盘中合法（不考虑互质），等价于 $(i,j)$ 在  $\lfloor\dfrac{n}{d}\rfloor \times \lfloor\dfrac{m}{d}\rfloor$ 的棋盘中合法，因为剩下两条限制都满足整除的条件。从而有：

$$
\sum_{i=1}^{\lfloor\frac{n}{d}\rfloor}\sum_{j=1}^{\lfloor\frac{m}{d}\rfloor}g(id,jd)=f\left(\lfloor\frac{n}{d}\rfloor,\lfloor\frac{m}{d}\rfloor\right)[d \bmod 2 = 1]
$$

这就转化为了上面最终的式子，利用整除分块，时间复杂度为 $O(T\sqrt n)$。

## **F**

**solved by Bazoka13**

### 题意

$F_n$代表斐波那契序列第 $n$ 项，求 $F_{F_n}$ mod 20160519 ($1\leq n\leq 10^9$)，$T$ 次询问 ($1\leq T\leq 10000$) 

### 题解

显然可以求出mod 20160519下下标的循环节，然后先跑出来下标，再跑值

## **G**

**upsolved by Bazoka13**

#### 注：本题数据正确性存疑

### 题意



### 题解



## **H**

**upsolved by JJLeo**

### 题意

字符集为所有大写字母，给定哈希模数 $M$ 和底数 $p$，上述两者为质数，问所有长度为 $n$ 的字符串有多少对串的哈希值相同。($1 \le n \le 10^6$，$2 \le p \le m \le 30000$)

### 题解

FFT + 快速幂，每次变换相当于左边的乘以一个 $p^n$ 再和右边卷，然后再把同余的加到一起即可。时间复杂度为 $O(m \log m \log n)$。

直接裸 FFT 精度会裂开，只需要四次的 MTT NB！三模 NTT 爬！

## **I**

**solved by JJLeo**

### 题意

$m$ 组数据，求 $[l_i,r_i]$ 中有多少数字一位一位来看是非严格单调的。($1 \le m \le 10^5$，$1 \le l_i \le r_i \le 10^{18}$)

### 题解

数位 dp，处理单调时需要特殊处理一下，额外加一个既没单增也没单减的状态，且一直是 $0$ 的话也要算这个状态。

另外，不记忆化搜索会 TLE，可以将所有不压上界的情况直接记录，这样每次询问复杂度仅为 $O(10\log r_i)$。

## **J**

**solved by JJLeo**

### 题意

定义一种卷积运算，对于序列 $a_0,a_1,\cdots,a_{n-1}$ 和 $b_0,b_1,\cdots,b_{n-1}$，得到序列 $c_0,c_1,\cdots,c_{n-1}$：
$$
c_k = \max \limits _{(i+j) \bmod n = k} (a_i+b_j)
$$
给定**随机生成**的 $0$ 到 $n-1$ 的排列 $a_0,a_1,\cdots,a_{n-1}$ 和 $b_0,b_1,\cdots,b_{n-1}$，求 $c_0,c_1,\cdots,c_{n-1}$。($1 \le n \le 2\times 10^5$)

### 题解

因为是随机生成的，可以从 $2n-2$ 开始往下枚举，找到所有满足 $c_i$ 等于该值的 $i$ 并将其赋值，直到 $c_0,c_1,\cdots,c_{n-1}$ 全都被覆盖为止。随机生成保证了这样不会 TLE。

## **记录**



## **总结**

