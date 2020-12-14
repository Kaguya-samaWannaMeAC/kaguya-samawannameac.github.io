# Welcome to MkDocs

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.

## 渲染测试
首先，容易证明以下两个等式成立，以便反演中使用

$$f(n)=|\mu(n)|=\mu^2(n)$$

$$\sum_{a_1=1}^{n}\sum_{a_2=1}^n\dotsb\sum_{a_x=1}^n\left(\prod_{j=1}^xa_j^k\right)=\left(\sum_{i=1}^ni^k\right)^x$$

接下来我们开始反演

$$\sum_{a_1=1}^{n}\sum_{a_2=1}^{n}\ldots \sum_{a_x=1}^{n}\left (\prod_{j=1}^{x}a_j^k\right )f(\gcd(a_1,a_2,\ldots ,a_x))\cdot \gcd(a_1,a_2,\ldots ,a_x)$$

枚举$d=\gcd(a_1,a_2,\ldots ,a_x)$

$$=\sum_{d=1}^n\mu^2\left(d\right)d\sum_{a_1=1}^{\left\lfloor \frac{n}{d} \right\rfloor}\sum_{a_2=1}^{\left\lfloor \frac{n}{d} \right\rfloor}\dotsb\sum_{a_x=1}^{\left\lfloor \frac{n}{d} \right\rfloor}\left(\prod_{j=1}^x(a_jd)^k\right)[\gcd\left(a_1,a_2,\dots,a_x\right)=1]$$

$$=\sum_{d=1}^n\mu^2\left(d\right)d^{kx+1}\sum_{a_1=1}^{\left\lfloor \frac{n}{d} \right\rfloor}\sum_{a_2=1}^{\left\lfloor \frac{n}{d} \right\rfloor}\dotsb\sum_{a_x=1}^{\left\lfloor \frac{n}{d} \right\rfloor}\left(\prod_{j=1}^xa_j^k\right)[\gcd\left(a_1,a_2,\dots,a_x\right)=1]$$

利用$\epsilon = \mu * 1$

$$=\sum_{d=1}^n\mu^2\left(d\right)d^{kx+1}\sum_{a_1=1}^{\left\lfloor \frac{n}{d} \right\rfloor}\sum_{a_2=1}^{\left\lfloor \frac{n}{d} \right\rfloor}\dotsb\sum_{a_x=1}^{\left\lfloor \frac{n}{d} \right\rfloor}\left(\prod_{j=1}^xa_j^k\right)\sum_{p|\gcd(a_1,a_2,\dots,a_x)}\mu(p)$$

枚举$p$

$$=\sum_{d=1}^n\mu^2\left(d\right)d^{kx+1}\sum_{p=1}^{\left\lfloor \frac{n}{d} \right\rfloor}\mu(p)\sum_{a_1=1}^{\left\lfloor \frac{n}{dp} \right\rfloor}\sum_{a_2=1}^{\left\lfloor \frac{n}{dp} \right\rfloor}\dotsb\sum_{a_x=1}^{\left\lfloor \frac{n}{dp} \right\rfloor}\left(\prod_{j=1}^x(a_jp)^k\right)$$

$$=\sum_{d=1}^n\mu^2\left(d\right)d^{kx+1}\sum_{p=1}^{\left\lfloor \frac{n}{d} \right\rfloor}\mu(p)p^{kx}\sum_{a_1=1}^{\left\lfloor \frac{n}{dp} \right\rfloor}\sum_{a_2=1}^{\left\lfloor \frac{n}{dp} \right\rfloor}\dotsb\sum_{a_x=1}^{\left\lfloor \frac{n}{dp} \right\rfloor}\left(\prod_{j=1}^xa_j^k\right)$$

$$=\sum_{d=1}^n\mu^2\left(d\right)d^{kx+1}\sum_{p=1}^{\left\lfloor \frac{n}{d} \right\rfloor}\mu(p)p^{kx}\left(\sum_{i=1}^{\left\lfloor \frac{n}{dp} \right\rfloor}i^k\right)^x$$

$$=\sum_{d=1}^n\mu^2\left(d\right)d\sum_{p=1}^{\left\lfloor \frac{n}{d} \right\rfloor}\mu(p){(dp)}^{kx}\left(\sum_{i=1}^{\left\lfloor \frac{n}{dp} \right\rfloor}i^k\right)^x$$

令$T=dp$，枚举$T$

$$=\sum_{T=1}^n{T}^{kx}\left(\sum_{i=1}^{\left\lfloor \frac{n}{T} \right\rfloor}i^k\right)^x\sum_{d|T}\mu^2\left(d\right)\mu(\frac{T}{d})d$$

$$=\sum_{T=1}^n\left(\sum_{i=1}^{\left\lfloor \frac{n}{T} \right\rfloor}i^k\right)^x{T}^{kx}\sum_{d|T}\mu^2\left(d\right)\mu(\frac{T}{d})d$$

设

$$F(n)=\left(\sum_{i=1}^{n}i^k\right)^x$$

$$G(n)={n}^{kx}\sum_{d|n}\mu^2\left(d\right)\mu(\frac{n}{d})d$$

则所求式子化为

$$\sum_{T=1}^{n}F(\left\lfloor \frac{n}{T} \right\rfloor)G(T)$$

$O(n \log n)$分别处理出$F(n)$和$G(n)$，对于每组询问$O(\sqrt{n})$整除分块即可，总复杂度$O(n \log n + t \sqrt{n})$。
