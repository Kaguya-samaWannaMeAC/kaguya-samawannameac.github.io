# [Petrozavodsk Winter-2018. Jagiellonian U Contest](http://opentrains.snarknews.info/~ejudge/team.cgi?contest_id=001511)

| 排名   | 当场过题数 | 至今过题数 | 总题数 |
| ------ | ---------- | ---------- | ------ |
| 41/172 | 8          | 8          | 12     |

## **A**

**solved by 2sozx JJLeo**

### 题意

给定一个可重复集合 $S$ 将其分成两个子集 $A,B$ 使得两个子集内部的异或和差的绝对值最小，求最小值。$n \le 10^5, x \le 10^{18}$

### 题解

显然对于二进制的某一位如果出现了偶数次是没有意义的，将这些删去。

找到最高的二进制位给 $A$ ，其余的扔进线性基中，贪心的使得 $A$ 的每一位都为 $0$ 即可，显然线性基不能保证全部取到，因此令 $tot = \operatorname{xor}(S)$ ，因此 $tot \oplus \operatorname{xor}(A)$ 即为 $B$ ，即可得到最小值。

## **B**

**solved by 2sozx JJLeo**

### 题意



### 题解



## **C**

**solved by JJLeo**

### 题意



### 题解



## **D**

**upsolved by **

### 题意



### 题解



## **E**

**upsolved by **

### 题意



### 题解



## **G**

**upsolved by **

### 题意



### 题解



## **H**

**solved by 2sozx Bazoka13**

### 题意



### 题解



## **J**

**solved by 2sozx Bazoka13 JJLeo**

### 题意



### 题解



## **K**

**upsolved by **

### 题意



### 题解



## **L**

**solved by Bazoka13**

### 题意



### 题解



## **记录**

0min：分题<br>9min：CSK AC F<br>13min：CSK AC I<br>17min：ZYF AC B<br>50min：CSK RE1 后 AC，MJX CSK 崩 撤 卖 溜<br>81min：ZYF WA1 后 AC<br>131min：MJX 莫名其妙 AC A<br>220min：MJX AC H<br>272min：MJX CE1 WA1 TLE1 后 AC<br>till end：E是个啥玩意<br>afrer end：E又 ban 了正确的算法 

## **总结**

### **Dirt replay**

L(+1)：<br>C(+1)：<br>J(+2)：写了mx 用成了 $p_i$ ，乱搞次数搞多了，没算复杂度