---
hide:
  - toc
---

# [XVIII Open Cup named after E.V. Pankratiev. Grand Prix of Urals](http://opentrains.snarknews.info/~ejudge/team.cgi?contest_id=010392)

| 排名   | 当场过题数 | 至今过题数 | 总题数 |
| ------ | ---------- | ---------- | ------ |
| 60/201 | 5          | 8          | 11     |

## **A**

**solved by JJLeo**

### 题意



### 题解



## **B**

**solved by 2sozx**

### 题意

求满足对于 $\forall i \in [L, R]$ 有 $(i \bmod Q)\bmod x = i\bmod x$ 的 $x$ 的数量，$1 \le L, R, Q\le 10^{12}$

### 题解

显然 $Q > R$ 时有无穷解。

考虑 $Q \le R$ 。

- 先考虑单独的 $s \in [L, R]$ 。

  $(s - (s \bmod Q)) \bmod x = 0$ ，显然 $x$ 应该是 $s - (s - \bmod Q) = Q\lfloor\dfrac{s}{Q}\rfloor$ 的因子。

- 若 $\lfloor\dfrac{L}{Q}\rfloor = \lfloor\dfrac{R}{Q}\rfloor$ ，显然答案即为 $Q\lfloor\dfrac{L}{Q}\rfloor$ 的因子个数。
- 否则答案 $x$ 则为 $x | Q\times gcd(\lfloor\dfrac{L}{Q}\rfloor, \lfloor\dfrac{L}{Q}\rfloor + 1, \dots, \lfloor\dfrac{R}{Q}\rfloor)$ ，显然 $x | Q$ ，即答案为 $Q$ 的因子个数。

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



## **F**

**upsolved by **

### 题意



### 题解



## **G**

**upsolved by **

### 题意



### 题解



## **H**

**solved by JJLeo**

### 题意

Claris yyds！CSK yyds！

### 题解

Claris yyds！CSK yyds！

## **I**

**upsolved by **

### 题意



### 题解



## **J**

**upsolved by **

### 题意



### 题解



## **K**

**solved by JJLeo Bazoka13 2sozx**

### 题意



### 题解

## **记录**



## **总结**

啊啊，一体机测si！

## **Dirt**



