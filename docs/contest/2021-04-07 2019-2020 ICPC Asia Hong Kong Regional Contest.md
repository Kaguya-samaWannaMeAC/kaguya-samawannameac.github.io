# [2019-2020 ICPC Asia Hong Kong Regional Contest](https://codeforces.com/gym/102452)

| 排名  | 当场过题数 | 至今过题数 | 总题数 |
| ----- | ---------- | ---------- | ------ |
| 9/341 | 8          | 8          | 11     |

## **A**

**solved by 2sozx Bazoka13**

### 题意

给定二维平面 $n$ 个矩形，平行于坐标轴，寻找对称轴。$n\le 10^5$

### 题解

显然对称轴只有平行于坐标轴与 $k = \pm1$ 两种情况。

将每个矩形的关键点抠出，即出现奇数次的点，存入 $map$ 中，就可以 $log$ 查询。

平行于坐标轴时考虑 $max_x,max_y,min_x,min_y$ 即可。

$k = 1$ 时可以考虑最右上和最上右的点的中垂线即为唯一又可能的对称轴，之后枚举关键点看对称过去是否有点即可。$k = -1$ 同理

## **C**

**solved by JJLeo**

### 题意



### 题解



## **E**

**solved by Bazoka13**

### 题意



### 题解



## **F**

**upsolved by **

### 题意

恶心人几何爬

### 题解



## **G**

**solved by Bazoka13**

### 题意



### 题解



## **H**

**upsolved by **

### 题意



### 题解



## **I**

**solved by 2sozx Bazoka13 JJLeo**

### 题意



### 题解



## **J**

**solved by JJLeo**

### 题意



### 题解



## **K**

**upsolved by **

### 题意



### 题解



## **记录**

0min：分题，MJX冲D<br>15min：MJX AC，期间CSK冲E，MJX冲B<br>18min：MJX AC，CSK冲E<br>25min：CSK WA1 后AC，冲G<br>60min：CSK WA2 后AC，期间ZYF冲J<br>68min：ZYF AC，看C可做写C，CSK看I<br>149min：ZYF AC，期间MJX写I<br>164min：MJX AC，冲A<br>268min：MJX WA2 后AC，直接下机看题解去<br>till end：题解让人迷惑

## **总结**

E(+1):<br>G(+2):<br>I(+2):输出结尾不能有空格，读题不认真，有一个输入不异或上一次答案<br>A(+2):%未取abs，平行坐标轴时模数应为4