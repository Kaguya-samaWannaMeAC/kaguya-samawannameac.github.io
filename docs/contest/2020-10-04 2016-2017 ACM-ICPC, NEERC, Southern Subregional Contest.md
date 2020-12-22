# [2016-2017 ACM-ICPC, NEERC, Southern Subregional Contest](https://codeforc.es/contest/730)

| 排名 | 当场过题数 | 至今过题数 | 总题数 |
| ---- | ---------- | ---------- | ------ |
| 31/? | 7          | 9          | 10     |

## **A**

**solved by 2sozx**

### 题意

给 $n$ 个数 $(2 \le n \le 100)$，每次可以选择 $2 \sim 5$ 个数将值减一，值不会小于零，最后要求所有数相等。求一种操作方案使得最后的数最大。

### 题解

每次操作看最大值的个数，如果等于 $n$ 直接结束。否则判断奇偶性，如果是偶数选择其中两个减一，否则判断最大值是否大于一。如果大于一则选择三个减一，否则找到次大值与最大值一起减一即可。

## **B**

**solved by 2sozx**

### 题意

给 $n$ 个数，请在比较次数不超过 $\lceil \frac{3 * n}{2} \rceil - 2$ 下找到序列的最大值和最小值。

### 题解

考虑两两比较出最大值和最小值，按照线段树的方式从子节点向上合并，总共比较次数正好是上限。

## **C**

**solved by 2sozx**

### 题意



### 题解



## **D**

**upsolved by JJLeo**

### 题意



### 题解



## **E**

**upsolved by **

### 题意



### 题解



## **F**

**upsolved by **

### 题意



### 题解



## **G**

**upsolved by **

### 题意



### 题解



## **H**

**upsolved by **

### 题意



### 题解



## **I**

**solved by JJLeo**

### 题意



### 题解



## **J**

**solved by JJLeo**

### 题意



### 题解



## **K**

**upsolved by JJLeo**

### 题意



### 题解



## **记录**

0min：分题，CSK冲G<br>
13min：CSK WA，MJX冲A<br>
20min：CSK 找到bug AC,MJX AC，CSK 冲H<br>
34min：CSK WA2，ZYF冲J<br>
36min：ZYF AC，CSK继续冲H<br>
46min：CSK AC，MJX 冲B<br>
51min：MJX挂一次后AC,ZYF 冲I<br>
64min：ZYF AC，MJX 冲C<br>
96min：MJX WA3，ZYF 冲D<br>
119min：ZYF WA，CSK 冲E<br>
138min：CSK AC，ZYF AC，MJX 继续冲C<br>
152min：MJX AC,一起冲K<br>
till end：冲不动了

## **总结**

  * MJX：求求BFS好好学学吧，太蠢了太蠢了，好几次了，还要注意审题
  * ZYF：背包写慢了，贪心写裂开了，要加强练习。