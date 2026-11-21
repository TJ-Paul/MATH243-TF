---
title: "P4 · Joint, Marginal and Conditional Distributions"
tags: [math243, probability, joint-distribution]
---

# P4 · Joint, Marginal and Conditional Distributions

> [!abstract] Why this matters for the term final
> Joint distributions have been asked in three of the last four years. In 2020-21 Q5(c) you had a joint density $k(x^2+y^2)$ for tyre pressures; in 2022-23 Q2(a) a joint density $10xy^2$ on the triangle $0<x<y<1$ with marginals and a conditional density; and in 2023-24 Q2(b) (20 marks) a joint pmf built from drawing two pens from a bag, followed by $P[(X,Y)\in A]$, the marginals, $\mathrm{Var}(X)$ and $\mathrm{Cov}(X,Y)$. The last two are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]]. In this note you learn every one of these steps and practise on fresh examples of exactly the same shape.

---

## 1. Joint probability mass function (discrete case)

When two discrete random variables $X$ and $Y$ are observed on the same experiment, their **joint pmf** gives the probability of each pair of values:

$$
f(x,y)=P(X=x,\;Y=y).
$$

> [!important] Memorize: Properties of a joint pmf
> $$
> f(x,y)\ge 0,\qquad \sum_x\sum_y f(x,y)=1,\qquad P[(X,Y)\in A]=\sum\sum_{(x,y)\in A} f(x,y).
> $$

The joint pmf is usually displayed in a two-way table with $x$ values along one side and $y$ values along the other. The row and column totals of this table are the marginal distributions described below.

## 2. Joint probability density function (continuous case)

For two continuous random variables, the **joint pdf** $f(x,y)$ is a surface over the $xy$-plane, and probabilities are ==volumes under that surface==.

> [!important] Memorize: Properties of a joint pdf
> $$
> f(x,y)\ge 0,\qquad \int_{-\infty}^{\infty}\int_{-\infty}^{\infty} f(x,y)\,dx\,dy=1,\qquad P[(X,Y)\in A]=\iint_A f(x,y)\,dx\,dy .
> $$

To find an unknown constant $k$, integrate over the whole region where $f$ is non-zero and set the result equal to 1, exactly as for a single variable.

## 3. Marginal distributions

The **marginal distribution** of $X$ alone is obtained by "adding up" (summing or integrating) the joint distribution over all values of $Y$, and vice versa.

> [!important] Memorize: Marginals
> Discrete: $\displaystyle g(x)=\sum_y f(x,y)$ and $\displaystyle h(y)=\sum_x f(x,y)$ (the row and column totals of the table).
> Continuous: $\displaystyle g(x)=\int_{-\infty}^{\infty} f(x,y)\,dy$ and $\displaystyle h(y)=\int_{-\infty}^{\infty} f(x,y)\,dx$.

## 4. Conditional distributions

The conditional distribution of $Y$ given $X=x$ tells us how $Y$ behaves when we already know the value of $X$. It is the joint divided by the marginal of the variable we condition on, which is the same idea as $P(A\mid B)=P(A\cap B)/P(B)$.

> [!important] Memorize: Conditional distributions
> $$
> f(y\mid x)=\frac{f(x,y)}{g(x)},\quad g(x)>0, \qquad\qquad f(x\mid y)=\frac{f(x,y)}{h(y)},\quad h(y)>0 .
> $$
> Then $P(a<Y<b\mid X=x)=\int_a^b f(y\mid x)\,dy$ (or a sum in the discrete case).

## 5. Independence

> [!important] Memorize: Independent random variables
> $X$ and $Y$ are independent if and only if
> $$
> f(x,y)=g(x)\,h(y) \quad\text{for every } (x,y).
> $$
> To show they are **not** independent it is enough to find a single pair where this fails. A quick warning sign: if the region where $f>0$ is not a rectangle (for example a triangle like $0<x<y<1$), then $X$ and $Y$ cannot be independent.

---

## 6. Regions that are not rectangles

When the support is a triangle such as $0<x<y<1$, you must think about the limits of integration carefully. Draw the region first. For a fixed $x$, the variable $y$ runs from the line $y=x$ up to $y=1$. For a fixed $y$, the variable $x$ runs from $0$ up to $y$.

![[m243-joint-region-triangle.png]]

> [!tip] Exam trick
> Write the limits next to the region before integrating: "for marginal of $X$, integrate over $y$ from $x$ to 1; for marginal of $Y$, integrate over $x$ from 0 to $y$." Marginals of triangle-shaped densities always contain the variable in the limits, so $g(x)$ usually looks like a polynomial in $x$ with a factor such as $(1-x^3)$.

**Fresh practice (same shape as 2022-23 Q2(a)).** Let $f(x,y)=8xy$ for $0<y<x<1$ and $0$ elsewhere. Find the marginals, the conditional density of $Y$ given $X=x$, and $P(Y<\tfrac14\mid X=\tfrac12)$.

Here the triangle is below the diagonal, so for fixed $x$ the variable $y$ runs from 0 to $x$, and for fixed $y$ the variable $x$ runs from $y$ to 1.

$$
g(x)=\int_0^x 8xy\,dy=8x\cdot\frac{x^2}{2}=4x^3,\quad 0<x<1 .
$$

$$
h(y)=\int_y^1 8xy\,dx=8y\cdot\frac{1-y^2}{2}=4y(1-y^2),\quad 0<y<1 .
$$

As a check, $\int_0^1 4x^3dx=1$. The conditional density is

$$
f(y\mid x)=\frac{f(x,y)}{g(x)}=\frac{8xy}{4x^3}=\frac{2y}{x^2},\qquad 0<y<x .
$$

With $x=\tfrac12$ this is $f(y\mid \tfrac12)=8y$ for $0<y<\tfrac12$, so

$$
P\left(Y<\tfrac14\,\middle|\,X=\tfrac12\right)=\int_0^{1/4}8y\,dy=4\left(\tfrac14\right)^2=\tfrac14 .
$$

Since $g(x)h(y)=16x^3y(1-y^2)\ne 8xy$, the variables are not independent, as expected for a triangular region.

---

## 7. Building a joint pmf from a "draw from a bag" experiment

This is the 2023-24 Q2(b) type. The idea is the combination formula from [[P1 Probability Basics and Counting]]: to get $x$ items of colour 1 and $y$ items of colour 2 in a sample of size $n$, we choose them separately and fill the rest of the sample with the third colour.

$$
f(x,y)=\frac{\binom{N_1}{x}\binom{N_2}{y}\binom{N_3}{n-x-y}}{\binom{N}{n}}, \qquad x+y\le n .
$$

**Fresh practice.** A box contains 4 red, 3 green and 2 white balls. Two balls are drawn at random. Let $X$ be the number of red balls and $Y$ the number of green balls in the sample. (i) Find the joint distribution and show it graphically. (ii) Find $P[(X,Y)\in A]$ where $A=\{(x,y): x+y\le 1\}$. (iii) Find the marginal distributions. (iv) Find $\mathrm{Var}(X)$. (v) Find $\mathrm{Cov}(X,Y)$.

**(i) Joint distribution.** There are 9 balls, so the number of possible samples is $\binom92=36$. Since only 2 balls are drawn, the possible pairs are those with $x+y\le 2$. For example,

$$
f(1,1)=\frac{\binom41\binom31\binom20}{36}=\frac{12}{36}=\frac13,\qquad f(0,0)=\frac{\binom40\binom30\binom22}{36}=\frac1{36}.
$$

Doing this for every pair gives the table.

| $f(x,y)$ | $y=0$ | $y=1$ | $y=2$ | $g(x)$ |
|---|---|---|---|---|
| $x=0$ | 1/36 | 6/36 | 3/36 | 10/36 = 5/18 |
| $x=1$ | 8/36 | 12/36 | 0 | 20/36 = 5/9 |
| $x=2$ | 6/36 | 0 | 0 | 6/36 = 1/6 |
| $h(y)$ | 15/36 = 5/12 | 18/36 = 1/2 | 3/36 = 1/12 | 1 |

All entries add to $36/36=1$. To "plot $f(x,y)$ versus $(x,y)$", draw the $x$ and $y$ axes on the floor, mark each of the six points $(0,0),(0,1),(0,2),(1,0),(1,1),(2,0)$, and at each point draw a vertical stick whose height is $f(x,y)$. The tallest stick is at $(1,1)$ with height $1/3$.

**(ii)** The pairs with $x+y\le 1$ are $(0,0)$, $(0,1)$ and $(1,0)$, so

$$
P[(X,Y)\in A]=\frac{1}{36}+\frac{6}{36}+\frac{8}{36}=\frac{15}{36}=\frac{5}{12}.
$$

**(iii)** The marginals are the row and column totals of the table: $g(0)=\frac5{18}$, $g(1)=\frac59$, $g(2)=\frac16$; and $h(0)=\frac5{12}$, $h(1)=\frac12$, $h(2)=\frac1{12}$.

**(iv) Variance of $X$.** Using the marginal of $X$,

$$
E(X)=0\cdot\tfrac{5}{18}+1\cdot\tfrac59+2\cdot\tfrac16=\tfrac89,\qquad E(X^2)=0+1\cdot\tfrac59+4\cdot\tfrac16=\tfrac{11}9,
$$

$$
\mathrm{Var}(X)=E(X^2)-[E(X)]^2=\tfrac{11}{9}-\tfrac{64}{81}=\tfrac{35}{81}\approx 0.4321 .
$$

**(v) Covariance.** We need $E(XY)=\sum\sum xy\,f(x,y)$. Every term with $x=0$ or $y=0$ vanishes, and the only remaining pair is $(1,1)$, so $E(XY)=1\cdot1\cdot\frac13=\frac13$. Also $E(Y)=1\cdot\frac12+2\cdot\frac1{12}=\frac23$. Hence

$$
\mathrm{Cov}(X,Y)=E(XY)-E(X)E(Y)=\frac13-\frac89\cdot\frac23=\frac{9}{27}-\frac{16}{27}=-\frac{7}{27}\approx -0.2593 .
$$

The covariance is negative, which makes sense: with only two balls drawn, more red balls leaves less room for green balls. As a conditional example, $P(X=1\mid Y=1)=\dfrac{f(1,1)}{h(1)}=\dfrac{1/3}{1/2}=\dfrac23$.

> [!warning] Common mistake
> Students often forget the "third colour" factor $\binom{N_3}{n-x-y}$, or they include impossible cells like $(1,2)$ when only 2 items are drawn. Always check that the table adds to exactly 1.

---

## 8. Past TF question solved

> [!example] Past TF 2020-21 Q5(c) (10 marks) — tyre pressures
> The joint density is $f(x,y)=k(x^2+y^2)$ for $30\le x<50,\ 30\le y<50$, and $0$ elsewhere. Here $X$ is the right-tyre pressure and $Y$ the left-tyre pressure, and each should be 40 psi.
>
> **(i) Finding $k$.** The region is a square, so we integrate over $y$ first and then over $x$. For fixed $x$,
> $$
> \int_{30}^{50}(x^2+y^2)\,dy=20x^2+\frac{50^3-30^3}{3}=20x^2+\frac{98000}{3}.
> $$
> Integrating this over $x$ from 30 to 50,
> $$
> \int_{30}^{50}\left(20x^2+\frac{98000}{3}\right)dx=20\cdot\frac{98000}{3}+20\cdot\frac{98000}{3}=\frac{3{,}920{,}000}{3}.
> $$
> Setting $k\cdot\frac{3{,}920{,}000}{3}=1$ gives $k=\dfrac{3}{3{,}920{,}000}\approx 7.653\times10^{-7}$.
>
> **(ii) $P(30\le X\le 40,\ 40\le Y<50)$.** For fixed $x$, $\int_{40}^{50}(x^2+y^2)dy=10x^2+\frac{50^3-40^3}{3}=10x^2+\frac{61000}{3}$. Then
> $$
> \int_{30}^{40}\left(10x^2+\frac{61000}{3}\right)dx=10\cdot\frac{40^3-30^3}{3}+10\cdot\frac{61000}{3}=\frac{370000+610000}{3}=\frac{980000}{3}.
> $$
> So the probability is $k\cdot\dfrac{980000}{3}=\dfrac{980000}{3{,}920{,}000}=0.25$.
>
> **(iii) Both tyres underfilled**, meaning both pressures are below 40: $30\le X<40,\ 30\le Y<40$. By the same steps,
> $$
> \int_{30}^{40}\!\!\int_{30}^{40}(x^2+y^2)\,dy\,dx=10\cdot\frac{37000}{3}+10\cdot\frac{37000}{3}=\frac{740000}{3},
> $$
> so the probability is $\dfrac{740000}{3{,}920{,}000}=\dfrac{37}{196}\approx 0.1888$.

> [!tip] Exam trick
> For a square region and a function like $x^2+y^2$, the two halves of the integral are mirror images. Compute one carefully and double it, but show the line of working so the examiner sees where the factor 2 comes from.

---

> [!question]- Self-check
> **1.** How do you get $h(y)$ from a joint pdf? *Integrate $f(x,y)$ over $x$.*
> **2.** What is the formula for $f(y\mid x)$? *$f(x,y)/g(x)$.*
> **3.** If the support is $0<x<y<1$, can $X$ and $Y$ be independent? *No, the region is not a rectangle.*
> **4.** In a joint pmf table, where are the marginals? *In the row and column totals.*
> **5.** Formula for covariance? *$E(XY)-E(X)E(Y)$.*

Previous: [[P3 Random Variables PMF PDF CDF]] · Next: [[P5 Expectation Variance Covariance and Chebyshev]] · Home: [[index]]
