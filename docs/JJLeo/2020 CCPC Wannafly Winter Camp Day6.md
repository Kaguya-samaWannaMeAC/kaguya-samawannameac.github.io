# 2020 CCPC Wannafly Winter Camp Day6

## **A**

### 题意

给定序列 $a_1,a_2,\cdots,a_n$，求下式的值：
$$
\left(\sum_{i=1}^n \sum_{j=1}^n 2^{a_ia_j}\right) \bmod {998244353}
$$
($1 \le n \le 10^5$，$0 \le a_i \le 10^5$)

### 题解

$$
\begin{aligned}
&\sum_{i=1}^n \sum_{j=1}^n 2^{a_ia_j} \newline
=& \sum_{i=1}^n \sum_{j=1}^n 2^{\frac{1}{2}\left({(a_i+a_j)}^2-a_i^2-a_j^2\right)} \newline
=& \sum_{i=1}^n \sum_{j=1}^n {\sqrt 2}^{{(a_i+a_j)}^2-a_i^2-a_j^2} \newline
=& \sum_{i=1}^n \sum_{j=1}^n {\left(\frac{1}{\sqrt 2}\right)}^{a_i^2} {\left(\frac{1}{\sqrt 2}\right)}^{a_j^2} {\sqrt 2}^{{(a_i+a_j)}^2} \newline
=& \sum_{a_i+a_j=k} {\left(\frac{1}{\sqrt 2}\right)}^{a_i^2} {\left(\frac{1}{\sqrt 2}\right)}^{a_j^2} {\sqrt 2}^{k^2}

\end{aligned}
$$

另有：
$$
\sqrt 2 \equiv 116195171 \pmod{998244353}
$$
从而可以使用 NTT 即可求解。

