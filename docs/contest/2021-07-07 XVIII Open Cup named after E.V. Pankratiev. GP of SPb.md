# [XVIII Open Cup named after E.V. Pankratiev. GP of SPb](http://opentrains.snarknews.info/~ejudge/team.cgi?SID=c46e31e5c8c8d7af&action=2)

| 排名   | 当场过题数 | 至今过题数 | 总题数 |
| ------ | ---------- | ---------- | ------ |
| 56/250 | 9          | 10         | 12     |

## **A**

**solved by JJLeo 2sozx**

### 题意

两个数用$(i - 1)$ 进制表示，问和的 $(i - 1)$ 进制表示是什么。

### 题解

$2_{i-1} = 0011_{i-1}$ ，递推即可 

## **D**

**solved by Bazoka13**

### 题意



### 题解



## **E**

**upsolved by 2sozx**

### 题意

求一个分数 $\dfrac{p}{q}$ ，使得化成小数的前18位为给定的小数，$p < q \le 10^9$

### 题解

设给定的小数为 $x$ ，即求 $\dfrac{p}{q}$ 满足 $\dfrac{10^{19}x - 5}{10^{19}} \le \dfrac{p}{q} < \dfrac{10^{19}x - 5}{10^{19}}$ 

对于 $\dfrac{a}{b} < \dfrac{p}{q} < \dfrac{c}{d},a < b, p < q, c < d$ 

- 若 $a =0$ ，则可取 $p = 1, q = \lfloor\dfrac{d}{c}\rfloor + 1$。

- 否则可以取倒数，$\lfloor\dfrac{b}{a}\rfloor + \dfrac{b \% a}{a} < \dfrac{q}{p} < \lfloor\dfrac{d}{c}\rfloor + \dfrac{d \% c}{c}$ 。

  > - 若 $\lfloor\dfrac{b}{a}\rfloor = \lfloor\dfrac{d}{c}\rfloor = x$ ，则 $\dfrac{b \% a}{a} < \dfrac{q - xp}{p} < \lfloor\dfrac{d}{c}\rfloor + \dfrac{d \% c}{c}$，递归即可
  > - 否则我们可以取 $p = 1, q = \lfloor\dfrac{b}{a}\rfloor + 1$

- 由于题中左端为闭区间，因此最后需要判断一下左端是否可以直接成为答案

## **F**

**upsolved by **

### 题意



### 题解



## **H**

**upsolved by **

### 题意



### 题解



## **I**

**solved by Bazoka13 JJLeo**

### 题意



### 题解



## **J**

**solved by JJLeo 2sozx**

### 题意



### 题解



## **K**

**solved by Bazoka13 2sozx**

### 题意



### 题解

## **记录**

准备更新一种记录方式

## **总结**

MJX：E差点推出来了，就差一步而且很显然，经典神智不清

## **Dirt**

