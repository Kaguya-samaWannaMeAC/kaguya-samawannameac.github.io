# [XVII Open Cup named after E.V. Pankratiev. Grand Prix of Moscow Workshops](http://opentrains.snarknews.info/~ejudge/team.cgi?contest_id=010377)

| 排名   | 当场过题数 | 至今过题数 | 总题数 |
| ------ | ---------- | ---------- | ------ |
| 26/188 | 9          | 11         | 11     |

## **A**

**solved by 2sozx Bazoka13 JJLeo**

### 题意

给定一颗树，判断是不是点分树。

### 题解

考虑点分树的根节点一定是整棵树的重心，至多有两个，可以分别将其设为根进行检验。

点分树的根节点确定后，所有节点都是当前子树的重心，对于每个节点必须满足最大子树不超过该子树的一半，dfs 检验一下即可。

## **B**

**solved by 2sozx**

### 题意

给定一个完全积性函数，让你给 $f(p)$ 赋值 $\pm1$ ，使得 $\max \limits_{i = 1}^{10^6}|\sum\limits_{j = 1}^i f(j)| \le 20$ ，输出 $1\sim10^6$ 所有的 $f(i)$

### 题解

一顿乱猜，考虑每个质数大概可能的贡献，最后得出$f(p) = \begin{cases}1\quad p \% 6 == 1 \and p\not = 37 \\ -1 \quad p = others\end{cases} $ 

## **C**

**upsolved by 2sozx JJLeo**

### 题意

给定一个 $n$ 个点 $m$ 条边的无向连通图，边权为 $1$，问有多少无序点对 $(u,v)$ 满足两者之间所有路径长度均为奇数/偶数。($1 \le n,m \le 2 \times 10^5$)

### 题解

首先有结论：一个点双如果是二分图，那么它所有点对之间路径的奇偶性都是确定的；否则，所有点对之间的路径既有奇也有偶。感性证明：

> 如果是二分图，所有环都是偶环，不同路径不会改变奇偶性；反之，任意两点随意选择一个路径，异或上一个奇环这两条路径的奇偶性不同

## **D**

**solved by JJLeo**

### 题意



### 题解



## **E**

**upsolved by JJLeo**

### 题意



### 题解



## **F**

**solved by JJLeo**

### 题意



### 题解



## **G**

**solved by Bazoka13**

### 题意



### 题解



## **H**

**solved by 2sozx Bazok13 JJLeo**

### 题意



### 题解



## **I**

**solved by 2sozx JJLeo**

### 题意



### 题解



## **J**

**solved by Bazoka13**

### 题意



### 题解



## **K**

**solved by JJLeo**

### 题意



### 题解



## **记录**

~~久违的记录回来了~~

假期第一场训练

0min：分题，CSK冲G<br>12min：CSK 少考虑情况WA1后AC, ZYF冲K<br>21min：ZYF AC,MJX 去乱搞B<br>83min：MJX 突然想出了I，ZYF冲I，数组开小RE1，后AC<br>102min：CSK AC J，MJX 奇奇怪怪的构造出了B冲B<br>104min：B读题错误导致输入遗漏PE3，后AC<br>204min：ZYF AC D<br>221min：判断时少判断点+测试测评机导致PE10 WA1 T1，后AC<br>?min：CSK 盲猜A题题意MJX冲<br>243min：MJX 点分树挂了WA1,ZYF改写法后AC<br>259min：ZYF发现F是模板AC<br>till end：想到了C的大概写法，但是没AC<br>after end：C细节很多

## **总结**

