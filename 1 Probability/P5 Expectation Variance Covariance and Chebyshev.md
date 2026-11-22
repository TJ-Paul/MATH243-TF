---
title: "P5 · Expectation, Variance, Covariance and Chebyshev's Theorem"
tags: [math243, probability, expectation, variance, chebyshev]
---

# P5 · Expectation, Variance, Covariance and Chebyshev's Theorem

> [!abstract] Why this matters for the TF
> These are quick, reliable marks.
>
> 2019-20 Q7(b) asked for $E(e^{2X/3})$; 2020-21 Q8(a) for $E(X+4)$; 2022-23 Q2(b) for the mean and variance of $3X-2$ and Q2(c) for $P(\mu-2\sigma<X<\mu+2\sigma)$ compared with Chebyshev; 2023-24 Q2(b) for a variance and covariance, and Q3(a) for Chebyshev's theorem in a job-selection story.
>
> The 2022-23 and 2023-24 versions are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]].

## Core tools (memorize)

> [!important] Memorize
> **Mean**
>
> $$
> E(X)=\sum x\,f(x)\quad\text{or}\quad\int x\,f(x)\,dx
> $$
>
> **Function of $X$**
>
> No need to find the distribution of $g(X)$.
>
> $$
> E[g(X)]=\sum g(x)\,f(x)\quad\text{or}\quad\int g(x)\,f(x)\,dx
> $$
>
> **Variance**
>
> $$
> \mathrm{Var}(X)=E(X^2)-[E(X)]^2
> $$
>
> $$
> \sigma=\sqrt{\mathrm{Var}(X)}
> $$
>
> **Linear rule for the mean**
>
> $$
> E(aX+b)=a\,E(X)+b
> $$
>
> **Linear rule for the variance**
>
> The constant $b$ disappears and $a$ is squared.
>
> $$
> \mathrm{Var}(aX+b)=a^2\,\mathrm{Var}(X)
> $$
>
> **Covariance**
>
> $$
> \mathrm{Cov}(X,Y)=E(XY)-E(X)\,E(Y)
> $$
>
> where $E(XY)=\sum\sum xy\,f(x,y)$ or $\iint xy\,f(x,y)\,dx\,dy$. Independent implies $\mathrm{Cov}=0$ (not the other way round).
>
> **Correlation coefficient**
>
> $$
> \rho=\frac{\mathrm{Cov}(X,Y)}{\sigma_X\,\sigma_Y}
> $$
>
> **Chebyshev**
>
> Use when only $\mu$ and $\sigma$ are known.
>
> $$
> P(\mu-k\sigma<X<\mu+k\sigma)\ge1-\frac1{k^2}
> $$
>
> Equivalently,
>
> $$
> P(|X-\mu|\ge k\sigma)\le\frac1{k^2}
> $$

---

## Theory the TF actually asks

### State Chebyshev's theorem (2023-24 Q3(a))

> [!important] Exam answer
> **Chebyshev's theorem.** ==The probability that any random variable $X$ will assume a value within $k$ standard deviations of its mean is at least $1-\dfrac1{k^2}$.==
>
> That is, for any $k>1$,
>
> $$
> P(\mu-k\sigma<X<\mu+k\sigma)\ge1-\frac1{k^2}
> $$
>
> It holds for every distribution, whatever its shape, so it gives only a lower bound.
>
> For $k=2$, at least 75% of the probability lies within $2\sigma$ of the mean. For $k=3$, at least $88.9\%$.
>
> If the distribution is symmetric, each tail gets at most half of the remaining probability:
>
> $$
> P(X\ge\mu+k\sigma)\le\frac{1}{2k^2}
> $$

---

## Problem types you will face

### Type 1 — Mean and variance of a discrete variable

**How to recognise it:** a pmf table or a story (insurance, profit, defective items).

**Recipe:**

1. Make columns $x$, $f(x)$, $xf(x)$, $x^2f(x)$ and add them.
2. Then $\mathrm{Var}=E(X^2)-\mu^2$.

> [!example] Practice 1.1
> **Given.** $f(0)=0.1,\ f(1)=0.3,\ f(2)=0.4,\ f(3)=0.2$. Find the mean and SD.
>
> **Step 1 — Mean.**
>
> $$
> E(X)=0.3+0.8+0.6=1.7
> $$
>
> **Step 2 — $E(X^2)$.**
>
> $$
> E(X^2)=0.3+1.6+1.8=3.7
> $$
>
> **Step 3 — Variance and SD.**
>
> $$
> \mathrm{Var}(X)=3.7-2.89=0.81
> $$
>
> $$
> \sigma=\sqrt{0.81}=0.9
> $$
>
> **Answer.** Mean **1.7**, SD **0.9**.

> [!example] Practice 1.2 — insurance
> **Given.** An insurance company sells a one-year policy of Tk 50,000 for a premium of Tk 500. The probability that the holder dies during the year is 0.002. Find the company's expected gain per policy.
>
> **Step 1 — Possible gains.** The gain is $500$ with probability 0.998, and $500-50000=-49500$ with probability 0.002.
>
> **Step 2 — Expected gain.**
>
> $$
> \begin{aligned}
> E(\text{gain})&=500(0.998)+(-49500)(0.002)\\
> &=499-99\\
> &=400
> \end{aligned}
> $$
>
> **Answer.** Expected gain **Tk 400** per policy.

> [!example] Practice 1.3 — defective markers
> **Given.** From the distribution in [[P3 Random Variables PMF PDF CDF]] ($f(0)=\frac4{35}$, $f(1)=\frac{18}{35}$, $f(2)=\frac{12}{35}$, $f(3)=\frac1{35}$), find the mean and variance of the number of defective markers.
>
> **Step 1 — Mean.**
>
> $$
> E(X)=\frac{0+18+24+3}{35}=\frac{45}{35}=\frac97
> $$
>
> **Step 2 — $E(X^2)$.**
>
> $$
> E(X^2)=\frac{0+18+48+9}{35}=\frac{75}{35}=\frac{15}7
> $$
>
> **Step 3 — Variance.**
>
> $$
> \mathrm{Var}(X)=\frac{15}{7}-\frac{81}{49}=\frac{24}{49}\approx0.490
> $$
>
> **Answer.** Mean **9/7**, variance **24/49 ≈ 0.490**.

---

### Type 2 — Mean and variance of a continuous variable, and $E[g(X)]$

**How to recognise it:** a pdf is given and the question asks for $E(X)$, $\mathrm{Var}(X)$, an "average", or the expected value of some function.

**Recipe:** integrate $x f$, $x^2 f$, or $g(x) f$ over the support.

> [!example] Past TF 2019-20 Q7(b) (18 marks) — $E(e^{2X/3})$
> **Given.** $f(x)=e^{-x}$ for $x>0$.
>
> **Step 1 — Write the integral.**
>
> $$
> E\left(e^{2X/3}\right)=\int_0^\infty e^{2x/3}\,e^{-x}\,dx
> $$
>
> **Step 2 — Combine and integrate.**
>
> $$
> \begin{aligned}
> E\left(e^{2X/3}\right)&=\int_0^\infty e^{-x/3}\,dx\\
> &=\left[-3e^{-x/3}\right]_0^\infty\\
> &=3
> \end{aligned}
> $$
>
> **Answer.** $E(e^{2X/3})=\mathbf{3}$.

> [!example] Past TF 2020-21 Q8(a) (10 marks) — average hospital stay
> **Given.** $Y=X+4$ with $f(x)=\dfrac{32}{(x+4)^3}$, $x>0$.
>
> **Step 1 — Write the integral.**
>
> $$
> E(Y)=\int_0^\infty(x+4)\,\frac{32}{(x+4)^3}\,dx
> $$
>
> **Step 2 — Simplify and integrate.**
>
> $$
> \begin{aligned}
> E(Y)&=32\int_0^\infty(x+4)^{-2}\,dx\\
> &=32\left[-\frac1{x+4}\right]_0^\infty\\
> &=\frac{32}{4}=8
> \end{aligned}
> $$
>
> **Answer.** The average stay is **8 days** (equivalently $E(X)=4$ and $E(Y)=E(X)+4$).

> [!example] Practice 2.1
> **Given.** $f(x)=2(1-x)$ for $0<x<1$. Find $E(X)$, $\mathrm{Var}(X)$ and $E[(3X+2)^2]$.
>
> **Step 1 — Mean.**
>
> $$
> E(X)=\int_0^12x(1-x)\,dx=1-\frac23=\frac13
> $$
>
> **Step 2 — $E(X^2)$.**
>
> $$
> E(X^2)=\int_0^12x^2(1-x)\,dx=\frac23-\frac12=\frac16
> $$
>
> **Step 3 — Variance.**
>
> $$
> \mathrm{Var}(X)=\frac16-\frac19=\frac1{18}
> $$
>
> **Step 4 — Expand $(3X+2)^2$ and take expectations.**
>
> $$
> \begin{aligned}
> E[(3X+2)^2]&=9E(X^2)+12E(X)+4\\
> &=\frac96+4+4\\
> &=9.5
> \end{aligned}
> $$
>
> **Answer.** $E(X)=\mathbf{1/3}$, $\mathrm{Var}(X)=\mathbf{1/18}$, $E[(3X+2)^2]=\mathbf{9.5}$.

---

### Type 3 — Mean and variance of $Y=aX+b$

**How to recognise it:** "$Y=3X-2$ where $X$ has density ..., find the mean and variance of $Y$" (2022-23 Q2(b)).

**Recipe:** find $E(X)$ and $\mathrm{Var}(X)$ first, then apply the linear rules.

> [!example] Practice 3.1
> **Given.** $X$ has $f(x)=\frac15e^{-x/5}$, $x>0$ (exponential, mean 5). The cost is $Y=4X+10$. Find $E(Y)$ and $\mathrm{Var}(Y)$.
>
> **Step 1 — Moments of $X$.** For this exponential (see [[P9 Uniform Exponential and Other Continuous Distributions]]):
>
> $$
> E(X)=5
> $$
>
> $$
> \mathrm{Var}(X)=25
> $$
>
> **Step 2 — Mean of $Y$.**
>
> $$
> E(Y)=4(5)+10=30
> $$
>
> **Step 3 — Variance and SD of $Y$.**
>
> $$
> \mathrm{Var}(Y)=16(25)=400
> $$
>
> $$
> \sigma_Y=20
> $$
>
> **Answer.** $E(Y)=\mathbf{30}$, $\mathrm{Var}(Y)=\mathbf{400}$.

> [!warning] The classic slip
> $\mathrm{Var}(3X-2)=9\,\mathrm{Var}(X)$, not $3\,\mathrm{Var}(X)-2$.

---

### Type 4 — Covariance and correlation from a joint distribution

**How to recognise it:** a joint table or joint pdf and "find $\mathrm{Cov}(X,Y)$" or "$\rho$".

**Recipe:**

1. Marginals → $E(X)$, $E(Y)$.
2. Table → $E(XY)$.
3. $\mathrm{Cov}=E(XY)-E(X)E(Y)$.
4. For $\rho$, also find the variances.

> [!example] Practice 4.1
> **Given.** The joint pmf is:
>
> | $f(x,y)$ | $x=1$ | $x=2$ | $x=3$ |
> |---|---|---|---|
> | $y=1$ | 0.10 | 0.20 | 0.10 |
> | $y=2$ | 0.20 | 0.10 | 0.30 |
>
> Find $\mathrm{Cov}(X,Y)$ and $\rho$.
>
> **Step 1 — Marginals.**
>
> $$
> g(1)=0.3,\quad g(2)=0.3,\quad g(3)=0.4
> $$
>
> $$
> h(1)=0.4,\quad h(2)=0.6
> $$
>
> **Step 2 — Means.**
>
> $$
> E(X)=0.3+0.6+1.2=2.1
> $$
>
> $$
> E(Y)=0.4+1.2=1.6
> $$
>
> **Step 3 — $E(XY)$.**
>
> $$
> E(XY)=1(0.1)+2(0.2)+3(0.1)+2(0.2)+4(0.1)+6(0.3)=3.4
> $$
>
> **Step 4 — Covariance.**
>
> $$
> \mathrm{Cov}(X,Y)=3.4-2.1(1.6)=0.04
> $$
>
> **Step 5 — Variances.**
>
> $$
> E(X^2)=0.3+1.2+3.6=5.1,\qquad \mathrm{Var}(X)=5.1-4.41=0.69
> $$
>
> $$
> E(Y^2)=0.4+2.4=2.8,\qquad \mathrm{Var}(Y)=2.8-2.56=0.24
> $$
>
> **Step 6 — Correlation.**
>
> $$
> \rho=\frac{0.04}{\sqrt{0.69\times0.24}}=0.098
> $$
>
> **Answer.** $\mathrm{Cov}=\mathbf{0.04}$, $\rho=\mathbf{0.098}$: a very weak positive relationship.

> [!example] Practice 4.2 — continuous
> **Given.** $f(x,y)=x+y$ for $0<x<1$, $0<y<1$. Find $\mathrm{Cov}(X,Y)$.
>
> **Step 1 — Marginal and mean of $X$.**
>
> $$
> g(x)=x+\frac12
> $$
>
> $$
> E(X)=\int_0^1x\left(x+\frac12\right)dx=\frac13+\frac14=\frac7{12}
> $$
>
> By symmetry, $E(Y)=\frac7{12}$.
>
> **Step 2 — $E(XY)$.**
>
> $$
> E(XY)=\int_0^1\!\!\int_0^1xy(x+y)\,dx\,dy=\frac16+\frac16=\frac13
> $$
>
> **Step 3 — Covariance.**
>
> $$
> \mathrm{Cov}(X,Y)=\frac13-\frac{49}{144}=-\frac{1}{144}
> $$
>
> **Answer.** $\mathrm{Cov}(X,Y)=\mathbf{-1/144}$.

A full covariance calculation for a "draw from a bag" table is in [[P4 Joint Marginal and Conditional Distributions]].

---

### Type 5 — Exact probability within $\mu\pm k\sigma$ compared with Chebyshev

**How to recognise it:** "compute $P(\mu-2\sigma<X<\mu+2\sigma)$ and compare with Chebyshev's theorem" (2022-23 Q2(c)).

**Recipe:**

1. Find $\mu$ and $\sigma$.
2. Form the interval (cut it at the support boundary).
3. Integrate $f$ over it.
4. Compare with $1-\frac1{k^2}$.

> [!example] Practice 5.1
> **Given.** $f(x)=3x^2$ for $0<x<1$.
>
> **Step 1 — Mean.**
>
> $$
> \mu=\int_0^13x^3\,dx=\frac34
> $$
>
> **Step 2 — Variance and SD.**
>
> $$
> E(X^2)=\int_0^13x^4\,dx=\frac35
> $$
>
> $$
> \sigma^2=\frac35-\frac9{16}=\frac3{80}
> $$
>
> $$
> \sigma=0.1936
> $$
>
> **Step 3 — The interval.**
>
> $$
> \mu\pm2\sigma=(0.3627,\ 1.1373)
> $$
>
> Above 1 the density is zero, so integrate only up to 1.
>
> **Step 4 — Exact probability.**
>
> $$
> P=\int_{0.3627}^{1}3x^2\,dx=1-0.3627^3=0.9523
> $$
>
> **Step 5 — Compare.** Chebyshev guarantees at least $1-\frac14=0.75$.
>
> **Answer.** Exact **0.9523** ≥ Chebyshev bound **0.75**, consistent with the theorem (the bound is conservative).

> [!example] Practice 5.2
> **Given.** $f(x)=e^{-x}$, $x>0$ (so $\mu=1$, $\sigma=1$). Find $P(\mu-2\sigma<X<\mu+2\sigma)$ and compare.
>
> **Step 1 — The interval.** $(-1,3)$, effectively $(0,3)$.
>
> **Step 2 — Exact probability.**
>
> $$
> P=1-e^{-3}=0.9502
> $$
>
> **Answer.** **0.9502** ≥ 0.75.

---

### Type 6 — Chebyshev applications (bounds, jobs, intervals)

**How to recognise it:** only $\mu$ and $\sigma$ are known, no distribution.

**Recipe:**

1. Compute

$$
k=\frac{\text{distance from mean}}{\sigma}
$$

2. Apply the bound.
3. Halve it if the distribution is symmetric and only one tail is wanted.
4. Multiply by the number of people if needed.

> [!example] Practice 6.1 (same logic as 2023-24 Q3(a)) — jobs
> **Given.** 50 jobs, 800 applicants; test scores have mean 70 and SD 5, symmetric. Can a person who scores 85 count on a job?
>
> **Step 1 — Find $k$.**
>
> $$
> k=\frac{85-70}{5}=3
> $$
>
> **Step 2 — Chebyshev bound.**
>
> $$
> P(|X-70|\ge15)\le\frac19
> $$
>
> **Step 3 — One tail (symmetric).**
>
> $$
> P(X\ge85)\le\frac1{18}
> $$
>
> **Step 4 — Convert to people.**
>
> $$
> 800\times\frac1{18}\approx44
> $$
>
> **Answer.** At most about 44 applicants can score 85 or more. Since there are 50 jobs, **yes**, a score of 85 should get a job.

> [!example] Practice 6.2 — bounds
> **Given.** $X$ has mean 8 and variance 9 (distribution unknown). Find (i) a lower bound for $P(-4<X<20)$, (ii) an upper bound for $P(|X-8|\ge6)$.
>
> $\sigma=3$.
>
> **Step 1 — (i)** $-4$ and $20$ are $12=4\sigma$ from the mean, so $k=4$.
>
> $$
> P(-4<X<20)\ge1-\frac1{16}=\frac{15}{16}
> $$
>
> **Step 2 — (ii)** $6=2\sigma$, so $k=2$.
>
> $$
> P(|X-8|\ge6)\le\frac14
> $$
>
> **Answer.** (i) **≥ 15/16**, (ii) **≤ 1/4**.

> [!example] Practice 6.3 — reverse question
> **Given.** Marks have mean 60 and SD 8. (i) At least what fraction lies between 40 and 80? (ii) Find an interval that contains at least 90% of the marks.
>
> **Step 1 — (i)**
>
> $$
> k=\frac{20}{8}=2.5
> $$
>
> $$
> 1-\frac1{6.25}=0.84
> $$
>
> **Step 2 — (ii)** Solve for $k$.
>
> $$
> 1-\frac1{k^2}=0.9\ \Rightarrow\ k=\sqrt{10}=3.162
> $$
>
> $$
> 60\pm3.162(8)=(34.7,\ 85.3)
> $$
>
> **Answer.** (i) at least **84%**, (ii) **(34.7, 85.3)**.

> [!tip] Three-line Chebyshev answer
> Compute $k$.
>
> State the bound (halve it for one tail if symmetric).
>
> Convert to people or compare with what is asked.

---

## Extra practice

> [!question]- Answers (try first)
> **1.** $E(X)=3$, $\mathrm{Var}(X)=2$. Find $E(4X+1)$ and $\mathrm{Var}(4X+1)$.
>
> *Answer:* 13 and 32.
>
> **2.** $f(x)=\frac{x}{2}$ on $0<x<2$. Find $E(X)$ and $\mathrm{Var}(X)$.
>
> *Answer:* $\frac43$; $E(X^2)=2$, so $\mathrm{Var}=2-\frac{16}9=\frac29$.
>
> **3.** $f(x)=2e^{-2x}$, $x>0$. Find $E(e^{X})$.
>
> *Answer:* $\int_0^\infty2e^{-x}dx=2$.
>
> **4.** Mean 100, SD 10. Lower bound for P(80 < X < 120)?
>
> *Answer:* $k=2$: at least 0.75.
>
> **5.** If $\mathrm{Cov}(X,Y)=0$, must $X$ and $Y$ be independent?
>
> *Answer:* No.

Previous: [[P4 Joint Marginal and Conditional Distributions]] · Next: [[P6 Bernoulli Binomial Multinomial Hypergeometric Geometric]] · Home: [[index]]
