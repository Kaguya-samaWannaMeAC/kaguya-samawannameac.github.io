---
hide:
  - toc
---

# [2020-2021 BUAA ICPC Team Supplementary Training 03](https://codeforces.com/group/azDPdoF24f/contest/295458)

| 排名 | 当场过题数 | 至今过题数 | 总题数 |
| ---- | ---------- | ---------- | ------ |
| 5/18 | 7          | 7          | 11     |

## **A**

**solved by JJLeo**

### 题意

暴力

### 题解

暴力

## **B**

**solved by 2sozx**

### 题意

签到题

### 题解

签到题

## **C**

**upsolved by **

### 题意



### 题解



## **D**

**solved by 2sozx**

### 题意

在坐标原点有一个发射器，$(x,0)$ 处有一个目标，$0 \sim x$ 区间存在 $n(n \le 10)$ 个障碍，每个障碍高度为 $h_i$。发射器会以初始速度 $\vec{v} = v_x + v_y$ 发射一个导弹，导弹受重力影响，碰到地面后能量无损失反弹，问除最后打击目标外在碰撞至多 $b(b \le 15)$ 次且不碰撞障碍物的情况下最小初速度是多少。$g = 1.0$

### 题解

由于 $b$ 很小，因此可以枚举反弹次数，可以得到每次反弹前进的距离 $L$ ，易知此时 $v_x v_y = \frac{gL}{2}$，在通过障碍物计算出$v_y$ 的最大值。如果最大值大于 $\sqrt{\frac{gL}{2}}$ 可有均值不等式知 $v_x^2 + v_y^2 \ge gL$，否则 $v_y$ 取最大值时$\vec{v}$ 最小。

## **E**

**solved by JJLeo**

### 题意



### 题解



## **F**

**solved by 2sozx JJLeo**

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

**upsolved by **

### 题意



### 题解



## **J**

**upsolved by **

### 题意



### 题解



## **记录**

before:第一次现场赛，MJX除了队友就认识俩人，ZYF，CSK带着MJX慢慢认人，MJX恰了油泼面，异常反胃<br>
0min:开始分题，MJX冲B<br>
26min:MJX AC，ZYF冲A<br>
35min:ZYF AC，CSK冲G<br>
65min:CSK WA1后AC，抢了一血，看F可以暴力ZYF冲F<br>
101min:ZYF AC，讨论C<br>
132min:CSK想出C，冲C，AC，MJX冲D<br>
143min:MJX AC,一起冲E<br>
260min:MLE + WA后ZYF AC E<br>
after end:期间一直在讨论H，考虑套娃情况，最后讲题时发现不用考虑套娃的情况，寄了

## **总结**

