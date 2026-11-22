---
title: "P4 · Joint, Marginal and Conditional Distributions"
tags: [math243, probability, joint-distribution]
---

# P4 · Joint, Marginal and Conditional Distributions

> [!abstract] Why this matters for the TF
> Joint distributions were asked in 2020-21 Q5(c) (joint density $k(x^2+y^2)$), 2022-23 Q2(a) (density $10xy^2$ on a triangle: marginals, conditional, conditional probability) and 2023-24 Q2(b) (20 marks: joint pmf from drawing pens, then $P[(X,Y)\in A]$, marginals, variance and covariance).
>
> The last two are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]].
>
> Every one of those shapes is practised below.

## Core tools (memorize)

> [!important] Memorize
> **Joint pmf (discrete)**
>
> $$
> f(x,y)=P(X=x,\ Y=y)
> $$
>
> $$
> \sum_x\sum_y f(x,y)=1
> $$
>
> $P[(X,Y)\in A]$ is the sum of the cells in $A$.
>
> **Joint pdf (continuous)**
>
> Use the total $=1$ to find $k$.
>
> $$
> \iint f(x,y)\,dx\,dy=1
> $$
>
> $$
> P[(X,Y)\in A]=\iint_A f(x,y)\,dx\,dy
> $$
>
> **Marginals**
>
> Discrete: row and column totals. Continuous:
>
> $$
> g(x)=\int f(x,y)\,dy
> $$
>
> $$
> h(y)=\int f(x,y)\,dx
> $$
>
> **Conditional**
>
> $$
> f(y\mid x)=\frac{f(x,y)}{g(x)}
> $$
>
> $$
> f(x\mid y)=\frac{f(x,y)}{h(y)}
> $$
>
> $$
> P(a<Y<b\mid X=x)=\int_a^b f(y\mid x)\,dy
> $$
>
> **Independence**
>
> $X$ and $Y$ are independent if, for every $(x,y)$,
>
> $$
> f(x,y)=g(x)\,h(y)
> $$
>
> If the support is not a rectangle (for example $0<x<y<1$), $X$ and $Y$ are **not** independent.
>
> **Drawing objects of three colours (sample of size $n$)**
>
> Valid for $x+y\le n$.
>
> $$
> f(x,y)=\frac{\binom{N_1}{x}\binom{N_2}{y}\binom{N_3}{n-x-y}}{\binom{N}{n}}
> $$

---

## Problem types you will face

### Type 1 — Joint pmf from drawing objects (the 2023-24 Q2(b) shape)

**How to recognise it:** "a bag contains ... of three colours, $n$ are selected; $X$ = number of colour 1, $Y$ = number of colour 2".

**Recipe:**

1. List all pairs with $x+y\le n$.
2. Compute each cell with the three-colour formula.
3. Fill the table with row and column totals (the marginals) and check it adds to 1.
4. Answer $P[(X,Y)\in A]$ by adding cells.
5. Find $E(X)$, $E(X^2)$ and $\mathrm{Var}(X)$ from $g(x)$; $E(XY)$ from the table; then $\mathrm{Cov}=E(XY)-E(X)E(Y)$.

> [!example] Practice 1.1 (full 2023-24 Q2(b) shape)
> **Given.** A box has 4 red, 3 green and 2 white balls. Two balls are drawn at random. $X$ = number of red, $Y$ = number of green. (i) Find the joint distribution and plot it. (ii) Find $P[(X,Y)\in A]$, $A=\{(x,y): x+y\le1\}$. (iii) Marginals. (iv) $\mathrm{Var}(X)$. (v) $\mathrm{Cov}(X,Y)$.
>
> **Step 1 — (i) Total samples.**
>
> $$
> \binom92=36
> $$
>
> **Step 2 — (i) Two sample cells.**
>
> $$
> f(1,1)=\frac{\binom41\binom31\binom20}{36}=\frac{12}{36}
> $$
>
> $$
> f(0,0)=\frac{\binom22}{36}=\frac1{36}
> $$
>
> All cells:
>
> | $f(x,y)$ | $y=0$ | $y=1$ | $y=2$ | $g(x)$ |
> |---|---|---|---|---|
> | $x=0$ | 1/36 | 6/36 | 3/36 | 10/36 |
> | $x=1$ | 8/36 | 12/36 | 0 | 20/36 |
> | $x=2$ | 6/36 | 0 | 0 | 6/36 |
> | $h(y)$ | 15/36 | 18/36 | 3/36 | 1 |
>
> **Plot.** Draw the $x$ and $y$ axes on the floor and mark the six points $(0,0),(0,1),(0,2),(1,0),(1,1),(2,0)$. Draw a vertical stick at each point with height $f(x,y)$. The tallest stick is at $(1,1)$, height $\frac13$.
>
> **Step 3 — (ii) Add the cells with $x+y\le1$**: $(0,0),(0,1),(1,0)$.
>
> $$
> P[(X,Y)\in A]=\frac{1+6+8}{36}=\frac{15}{36}=\frac5{12}
> $$
>
> **Step 4 — (iii) Marginals** (row and column totals).
>
> $$
> g(0)=\frac5{18},\quad g(1)=\frac59,\quad g(2)=\frac16
> $$
>
> $$
> h(0)=\frac5{12},\quad h(1)=\frac12,\quad h(2)=\frac1{12}
> $$
>
> **Step 5 — (iv) Variance of $X$.**
>
> $$
> E(X)=\frac59+2\cdot\frac16=\frac89
> $$
>
> $$
> E(X^2)=\frac59+4\cdot\frac16=\frac{11}9
> $$
>
> $$
> \mathrm{Var}(X)=\frac{11}9-\frac{64}{81}=\frac{35}{81}\approx0.4321
> $$
>
> **Step 6 — (v) Covariance.** Only the $(1,1)$ cell has $xy\ne0$.
>
> $$
> E(XY)=1\cdot1\cdot\frac{12}{36}=\frac13
> $$
>
> $$
> E(Y)=\frac12+2\cdot\frac1{12}=\frac23
> $$
>
> $$
> \begin{aligned}
> \mathrm{Cov}(X,Y)&=E(XY)-E(X)E(Y)\\
> &=\frac13-\frac89\cdot\frac23\\
> &=\frac{9-16}{27}=-\frac7{27}\approx-0.2593
> \end{aligned}
> $$
>
> **Answer.** (ii) **5/12**, (iv) **35/81 ≈ 0.4321**, (v) **−7/27 ≈ −0.2593**.
>
> The negative covariance makes sense: more red balls leave less room for green ones.

> [!warning] Common mistakes
> Forgetting the third-colour factor $\binom{N_3}{n-x-y}$.
>
> Including impossible cells such as $(1,2)$ when only 2 items are drawn.
>
> Always check the table totals 1.

---

### Type 2 — Joint pmf given by a formula

**How to recognise it:** "$f(x,y)=k(\dots)$ for $x=\dots$, $y=\dots$".

**Recipe:**

1. Add over all cells to find $k$.
2. Find the marginals by summing.
3. Conditional = cell ÷ marginal.
4. Check independence by comparing $f$ with $g\cdot h$.

> [!example] Practice 2.1
> **Given.** $f(x,y)=k(x+y)$ for $x=0,1,2$ and $y=0,1,2,3$. Find (i) $k$, (ii) the marginals, (iii) $P(X\le1,\,Y\ge2)$, (iv) $f(y\mid x=1)$, (v) $\mathrm{Cov}(X,Y)$.
>
> **Step 1 — (i) Find $k$.**
>
> $$
> \sum\sum(x+y)=4(0+1+2)+3(0+1+2+3)=12+18=30
> $$
>
> $$
> k=\frac1{30}
> $$
>
> **Step 2 — (ii) Marginal of $X$.**
>
> $$
> g(x)=\sum_{y=0}^3\frac{x+y}{30}=\frac{4x+6}{30}
> $$
>
> $$
> g(0)=\frac15,\quad g(1)=\frac13,\quad g(2)=\frac7{15}
> $$
>
> **Step 3 — (ii) Marginal of $Y$.**
>
> $$
> h(y)=\sum_{x=0}^2\frac{x+y}{30}=\frac{3+3y}{30}
> $$
>
> $$
> h(0)=\frac1{10},\quad h(1)=\frac15,\quad h(2)=\frac3{10},\quad h(3)=\frac25
> $$
>
> **Step 4 — (iii) Add cells** $(0,2),(0,3),(1,2),(1,3)$.
>
> $$
> P(X\le1,\ Y\ge2)=\frac{2+3+3+4}{30}=\frac{12}{30}=\frac25
> $$
>
> **Step 5 — (iv) Conditional.** For $y=0,1,2,3$:
>
> $$
> f(y\mid1)=\frac{(1+y)/30}{1/3}=\frac{1+y}{10}
> $$
>
> **Step 6 — (v) Covariance.**
>
> $$
> E(X)=\frac13+2\cdot\frac7{15}=\frac{19}{15}
> $$
>
> $$
> E(Y)=\frac15+\frac{6}{10}+\frac{6}{5}=2
> $$
>
> $$
> E(XY)=\sum\sum xy\,\frac{x+y}{30}=\frac{12}5
> $$
>
> $$
> \mathrm{Cov}(X,Y)=\frac{12}{5}-\frac{19}{15}\cdot2=\frac{36-38}{15}=-\frac2{15}
> $$
>
> **Answer.** $k=\mathbf{1/30}$, (iii) **2/5**, (v) **−2/15**.
>
> Since $\mathrm{Cov}\ne0$, $X$ and $Y$ are not independent (also $f(0,0)=0\ne g(0)h(0)$).

---

### Type 3 — Joint pdf on a rectangle: find $k$ and rectangle probabilities

**How to recognise it:** "$f(x,y)=k(\dots)$ for $a\le x<b,\ c\le y<d$".

**Recipe:**

1. Integrate over $y$ first (treat $x$ as a constant), then over $x$.
2. Set the total to 1 to find $k$.
3. For each probability, use the same integral with the new limits.
4. Translate words into limits carefully ("underfilled" = below the target).

> [!example] Past TF 2020-21 Q5(c) (10 marks) — tyre pressures
> **Given.** $f(x,y)=k(x^2+y^2)$ for $30\le x<50$, $30\le y<50$.
>
> **Step 1 — (i) Inner integral.** For fixed $x$:
>
> $$
> \int_{30}^{50}(x^2+y^2)\,dy=20x^2+\frac{50^3-30^3}{3}=20x^2+\frac{98000}{3}
> $$
>
> **Step 2 — (i) Outer integral.**
>
> $$
> \int_{30}^{50}\left(20x^2+\frac{98000}3\right)dx=20\cdot\frac{98000}{3}+20\cdot\frac{98000}{3}=\frac{3{,}920{,}000}{3}
> $$
>
> $$
> k=\frac{3}{3{,}920{,}000}\approx7.653\times10^{-7}
> $$
>
> **Step 3 — (ii) $P(30\le X\le40,\ 40\le Y<50)$.** For fixed $x$:
>
> $$
> \int_{40}^{50}(x^2+y^2)\,dy=10x^2+\frac{61000}{3}
> $$
>
> $$
> \int_{30}^{40}\left(10x^2+\frac{61000}3\right)dx=\frac{370000+610000}{3}=\frac{980000}3
> $$
>
> $$
> P=\frac{980000}{3{,}920{,}000}=0.25
> $$
>
> **Step 4 — (iii) Both underfilled** ($30\le X<40$, $30\le Y<40$).
>
> $$
> \int_{30}^{40}\!\!\int_{30}^{40}(x^2+y^2)\,dy\,dx=\frac{370000}{3}+\frac{370000}{3}=\frac{740000}{3}
> $$
>
> $$
> P=\frac{740000}{3{,}920{,}000}=\frac{37}{196}\approx0.1888
> $$
>
> **Answer.** (i) $k=\mathbf{3/3{,}920{,}000}$, (ii) **0.25**, (iii) **0.1888**.

> [!example] Practice 3.1
> **Given.** $f(x,y)=k(x+2y)$ for $0<x<1$, $0<y<1$. Find $k$, $P(X<\frac12,Y<\frac12)$, the marginals, and check independence.
>
> **Step 1 — Find $k$.**
>
> $$
> \int_0^1\!\int_0^1(x+2y)\,dy\,dx=\int_0^1(x+1)\,dx=\frac32
> $$
>
> $$
> k=\frac23
> $$
>
> **Step 2 — Rectangle probability.**
>
> $$
> \begin{aligned}
> P\left(X<\tfrac12,\ Y<\tfrac12\right)&=\frac23\int_0^{1/2}\!\!\int_0^{1/2}(x+2y)\,dy\,dx\\
> &=\frac23\int_0^{1/2}\left(\frac x2+\frac14\right)dx\\
> &=\frac23\cdot\frac{3}{16}=\frac18
> \end{aligned}
> $$
>
> **Step 3 — Marginals.**
>
> $$
> g(x)=\frac23\int_0^1(x+2y)\,dy=\frac23(x+1)
> $$
>
> $$
> h(y)=\frac23\int_0^1(x+2y)\,dx=\frac23\left(\frac12+2y\right)
> $$
>
> **Step 4 — Independence.** The product $g(x)h(y)$ is not $\frac23(x+2y)$.
>
> **Answer.** $k=\mathbf{2/3}$, $P=\mathbf{1/8}$, **not independent**.

> [!example] Practice 3.2 — an independent case
> **Given.** $f(x,y)=kxy$ for $0<x<1$, $0<y<2$. Find $k$ and show $X$, $Y$ are independent.
>
> **Step 1 — Find $k$.**
>
> $$
> k\int_0^1x\,dx\int_0^2y\,dy=k\cdot\frac12\cdot2=k=1
> $$
>
> **Step 2 — Marginals.**
>
> $$
> g(x)=\int_0^2xy\,dy=2x
> $$
>
> $$
> h(y)=\int_0^1xy\,dx=\frac y2
> $$
>
> **Step 3 — Check.**
>
> $$
> g(x)\,h(y)=2x\cdot\frac y2=xy=f(x,y)
> $$
>
> **Answer.** $k=\mathbf{1}$, and $X$, $Y$ are **independent**.

---

### Type 4 — Joint pdf on a triangle: marginals, conditional, conditional probability

**How to recognise it:** support like $0<x<y<1$ (the 2022-23 Q2(a) shape).

**Recipe:**

1. Draw the region.
2. For $g(x)$, integrate over $y$ from the line to the edge.
3. For $h(y)$, integrate over $x$.
4. $f(y\mid x)=f/g$.
5. Substitute the given $x$ and integrate over the required $y$-range (keeping inside the support).

![[m243-joint-region-triangle.png]]

> [!example] Practice 4.1
> **Given.** $f(x,y)=8xy$ for $0<y<x<1$. Find the marginals, $f(y\mid x)$ and $P(Y<\frac14\mid X=\frac12)$.
>
> **Step 1 — Limits.** For fixed $x$, $y$ runs from 0 to $x$. For fixed $y$, $x$ runs from $y$ to 1.
>
> **Step 2 — Marginal of $X$** ($0<x<1$).
>
> $$
> g(x)=\int_0^x8xy\,dy=4x^3
> $$
>
> **Step 3 — Marginal of $Y$** ($0<y<1$).
>
> $$
> h(y)=\int_y^18xy\,dx=4y(1-y^2)
> $$
>
> **Step 4 — Conditional** ($0<y<x$).
>
> $$
> f(y\mid x)=\frac{8xy}{4x^3}=\frac{2y}{x^2}
> $$
>
> **Step 5 — Conditional probability.** At $x=\frac12$, $f(y\mid\frac12)=8y$ on $0<y<\frac12$.
>
> $$
> P\left(Y<\tfrac14\mid X=\tfrac12\right)=\int_0^{1/4}8y\,dy=\frac14
> $$
>
> **Answer.** $g(x)=4x^3$, $h(y)=4y(1-y^2)$, $f(y\mid x)=2y/x^2$, $P=\mathbf{1/4}$.

> [!example] Practice 4.2
> **Given.** $f(x,y)=6x$ for $0<x<y<1$. Find $g(x)$, $h(y)$, $f(x\mid y)$, $P(X<\frac14\mid Y=\frac12)$ and $P(X+Y<1)$.
>
> **Step 1 — Marginal of $X$** ($0<x<1$).
>
> $$
> g(x)=\int_x^16x\,dy=6x(1-x)
> $$
>
> **Step 2 — Marginal of $Y$** ($0<y<1$).
>
> $$
> h(y)=\int_0^y6x\,dx=3y^2
> $$
>
> **Step 3 — Conditional** ($0<x<y$).
>
> $$
> f(x\mid y)=\frac{6x}{3y^2}=\frac{2x}{y^2}
> $$
>
> **Step 4 — Conditional probability.** At $y=\frac12$, $f(x\mid\frac12)=8x$ on $0<x<\frac12$.
>
> $$
> P\left(X<\tfrac14\mid Y=\tfrac12\right)=\int_0^{1/4}8x\,dx=\frac14
> $$
>
> **Step 5 — $P(X+Y<1)$.** Inside the triangle, $x$ runs from 0 to $\frac12$ and $y$ from $x$ to $1-x$.
>
> $$
> \begin{aligned}
> P(X+Y<1)&=\int_0^{1/2}\!\int_x^{1-x}6x\,dy\,dx\\
> &=\int_0^{1/2}6x(1-2x)\,dx\\
> &=6\left(\frac18-\frac1{12}\right)=\frac14
> \end{aligned}
> $$
>
> **Answer.** $g=6x(1-x)$, $h=3y^2$, $f(x\mid y)=2x/y^2$, **1/4**, **1/4**.

> [!tip] Limits on a triangle
> Write the limits next to the sketch before integrating.
>
> Marginals of triangle densities always have the variable in the limits, so they look like $6x(1-x)$ or $\frac{10x}{3}(1-x^3)$, never a constant.

---

## Extra practice

> [!question]- Answers (try first)
> **1.** From 3 red, 2 blue, 1 green pen, 2 are chosen. $X$ = red, $Y$ = blue. Find $f(1,1)$ and $P(X=0)$.
>
> *Answer:* $f(1,1)=\frac{3\cdot2}{15}=\frac25$; $P(X=0)=\frac{\binom32}{15}=\frac15$.
>
> **2.** $f(x,y)=c\,xy$ for $x=1,2$, $y=1,2,3$. Find $c$.
>
> *Answer:* $c(1+2)(1+2+3)=18c=1$, so $c=\frac1{18}$ (and $X$, $Y$ are independent).
>
> **3.** $f(x,y)=4xy$ on the unit square. Find $P(X<\frac12,Y>\frac12)$.
>
> *Answer:* $\frac14\cdot\frac34=\frac3{16}$.
>
> **4.** $f(x,y)=2$ on $0<x<y<1$. Find $g(x)$ and $f(y\mid x)$.
>
> *Answer:* $g(x)=2(1-x)$; $f(y\mid x)=\frac1{1-x}$, $x<y<1$.
>
> **5.** Why can't $X$, $Y$ be independent on $0<x<y<1$?
>
> *Answer:* The support is not a rectangle.

Previous: [[P3 Random Variables PMF PDF CDF]] · Next: [[P5 Expectation Variance Covariance and Chebyshev]] · Home: [[index]]
