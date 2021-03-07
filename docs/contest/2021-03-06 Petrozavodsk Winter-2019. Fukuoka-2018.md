# [Petrozavodsk Winter-2019. Fukuoka-2018](http://opentrains.snarknews.info/~ejudge/team.cgi?SID=f62c1129d0b7e4e3&action=2)

| 排名   | 当场过题数 | 至今过题数 | 总题数 |
| ------ | ---------- | ---------- | ------ |
| 19/233 | 9          | 9          | 11     |

## **A**

**solved by 2sozx**

### 题意

签到题

### 题解

签到题

## **B**

**solved by Bazoka13 JJLeo**

### 题意



### 题解



## **C**

**solved by 2sozx Bazoka13**

### 题意



### 题解



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

## **G**

**solved by Bazoka13**

### 题意



### 题解



## **H**

**solved by Bazoka13**

### 题意



### 题解



## **I**

**upsolved by **

### 题意



### 题解



## **J**

**solved by JJLeo**

### 题意



### 题解



## **K**

**solved by JJLeo**

### 题意



### 题解



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