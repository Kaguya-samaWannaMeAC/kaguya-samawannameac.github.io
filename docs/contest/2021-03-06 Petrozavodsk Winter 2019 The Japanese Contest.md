# [Petrozavodsk Winter-2019. Fukuoka-2018](http://opentrains.snarknews.info/~ejudge/team.cgi?SID=f62c1129d0b7e4e3&action=2)

| 排名   | 当场过题数 | 至今过题数 | 总题数 |
| ------ | ---------- | ---------- | ------ |
| 19/233 | 9          | 9          | 11     |

## **B**

**solved by Bazoka13 JJLeo**

### 题意

给定一个序列，两两元素不同，随意重排后求最长的等差子序列。($1 \le n \le 5000$)

### 题解

显然排序后去求是最优的。

设 $f_{i,j}$ 为以 $i$ 结尾的公差为 $j$ 的最长等差子序列，$j$ 必然是 $a_i$ 与前面某个元素之间的差，从而只有 $O(n^2)$ 个状态。利用 unordered_map 即可实现常数较大的 $O(n^2)$。

但这个辣鸡题卡常，最终使用 pbds 的 gp_hash_table 即可卡过去。

严格 $O(n^2)$ 做法：考虑到序列是严格递增的，能从 $f_{j,x}$ 转移到的位置 $i$ 至多有一个，且 $j$ 随着 $x$ 的增大而增大，因此每个位置维护一个指针，转移时向前移动指针直到 $a_i-a_j \ge x$ 为止，每个指针移动次数均摊 $O(n)$，总时间复杂度严格 $O(n^2)$。

## **D**

**solved by 2sozx**

### 题意

给两个 $01$ 字符串，长度分别为 $n, m$ ，求最短的且字典序最小的 $01$ 字符串不是这两个串任何一个的子序列。$1\le n, m \le 4000$

### 题解

先预处理出来每位下一个 $0,1$ 在哪个位置，包括自己，之后就可以 $O(nm)$ dp，令 $f_{ij}$ 表示已经匹配过 $i \sim n,j \sim m$ 的位置最短长度是多长，转移可以枚举当前位置 $01$ 进行转移，需要注意的是状态初始化比较复杂。 

## **E**

**upsolved by **

### 题意



### 题解



## **F**

**solved by 2sozx Bazoka13**

### 题意

几乎是chocolate原题

### 题解

同chocolate，MJX 过了，CSK 没过，这必有一道题数据有问题

## **H**

**solved by Bazoka13**

### 题意

四 色 问 题

### 题解



## **I**

**upsolved by **

### 题意



### 题解



## **J**

**solved by JJLeo**

### 题意

给定一棵 $n$ 个节点的树，每个点有一个颜色，有以下两种操作：

- 更改某一个点的颜色。
- 询问包含某一种颜色所有点的最小子图边数。

($1 \le n \le 10^5$)

### 题解

经典结论题，包含 $v_1,v_2,\cdots,v_m$ 的最小子图即为将其按 dfn 排序后任意相邻（第一个点和最后一个点也相邻）两点的距离之和除以 2。

对于每个颜色按 dfn 序维护一个 set 即可，复杂度为 $O(n \log n)$。

## **K**

**solved by JJLeo**

### 题意

给定 $a_1,a_2,\cdots,a_n$ 和 $b_1,b_2,\cdots,b_n$，重排后者使得 $\sum \limits _{i=1} ^ n [b_i > a_i]$ 最大，多解要求重排后字典序最大。($1 \le n \le 5000$)

### 题解

如果不考虑字典序的限制，可以 $O(n)$ 解决问题，即两者排序后扫一遍，贪心地能匹配就匹配即可。

先算出最大值，再考虑一位位贪心放最大的，保证这一位选择后后续答案可以达到最大值。

每一位的选择要分两种情况，$b_i>a_i$ 或 $b_i \le a_i$，各自情况内选择 $b_i$ 后后续答案是否可以达到最大值是有单调性的（显然这一位越小后面越容易更大），从而可以进行二分。二分 check 时把这一位选择的标记一下删掉，再套用前面的 $O(n)$ 算法即可。注意到如果选择前者的情况会给答案带来 $1$ 的贡献，后续答案需要减少。

每一位都需要 $O(n \log n)$ 的时间，总时间复杂度为 $O(n^2 \log n)$。

## **记录**

0min：开局分题<br>5min：CSK 发现 F 是 Chocolate，直接冲<br>12min：CSK WA 2，MJX 冲 A<br>17min：MJX AC，ZYF 冲 B<br>54min：ZYF TLE 3，换CSK 冲 G<br>73min：CSK WA 1后 AC，继续卡B常<br>92min：TLE 2，MLE 1后AC，MJX 写 D，CSK 冲C<br>116min：CSK TLE 3，MJX 继续冲D<br>138min：MJX AC，CSK 继续冲 C，MJX 用另一个 Chocolate 冲F<br>143min：MJX AC F，ZYF 冲 K<br>165min：ZYF WA 2，MJX 卡 C 常 AC<br>205min：ZYF WA 4后 AC，冲 J<br>237min：ZYF WA 1后 AC，CSK 冲 H，MJX 冲I<br>262min：CSK AC<br>till end：MJX I没讨论明白，ZYF 高斯消元复杂度算错了 

## **总结**

### **Dirt replay**

F(+2)：别问，问就是计算几何

B(+6)：别问，问就是卡常（没想到 $O(n^2)$ 的算法）

G(+1)：别问，问就是没开ll

C(+3)：别问，问就是卡常，有一个是没删 freopen

K(+6)：假算法写了半天，能过去70多组数据挺离谱的

J(+1)：忘记减去之前的答案了

