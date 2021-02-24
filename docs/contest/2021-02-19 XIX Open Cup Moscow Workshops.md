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



### 题解



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



## **记录**



## **总结**

