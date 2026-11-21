---
title: "P5 · Expectation, Variance, Covariance and Chebyshev's Theorem"
tags: [math243, probability, expectation, variance, chebyshev]
---

# P5 · Expectation, Variance, Covariance and Chebyshev's Theorem

> [!abstract] Why this matters for the term final
> Expectation questions are short, quick marks. 2019-20 Q7(b) asked for $E(e^{2X/3})$; 2020-21 Q8(a) asked for the average hospital stay $E(Y)$ where $Y=X+4$; 2022-23 Q2(b) asked for the mean and variance of $Y=3X-2$, and 2022-23 Q2(c) asked you to compute $P(\mu-2\sigma<X<\mu+2\sigma)$ and compare with Chebyshev's theorem; 2023-24 Q2(b) asked for a variance and a covariance, and 2023-24 Q3(a) asked you to state Chebyshev's theorem and use it in a job-selection story. The 2022-23 and 2023-24 versions are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]]; this note teaches the rules and gives fresh practice of the same type.

---

## 1. Expected value (mean) of a random variable

The **expected value** $E(X)$, also called the mean $\mu$, is the long-run average value of $X$ if the experiment is repeated many times. It is a weighted average of the possible values, with the probabilities as weights.

> [!important] Memorize: Expected value
> $$
> \mu=E(X)=\sum_x x\,f(x)\ \ \text{(discrete)},\qquad \mu=E(X)=\int_{-\infty}^{\infty}x\,f(x)\,dx\ \ \text{(continuous)}.
> $$
> For any function $g(X)$,
> $$
> E[g(X)]=\sum_x g(x)f(x)\quad\text{or}\quad E[g(X)]=\int_{-\infty}^{\infty}g(x)f(x)\,dx .
> $$

The second formula is very important: you do **not** need to find the distribution of $g(X)$ first. You simply multiply $g(x)$ by the original density and integrate.

**Worked example.** Let $X$ have pmf $f(0)=0.1,\ f(1)=0.3,\ f(2)=0.4,\ f(3)=0.2$. Then $E(X)=0(0.1)+1(0.3)+2(0.4)+3(0.2)=1.7$, and $E(X^2)=0+0.3+1.6+1.8=3.7$.

## 2. Variance and standard deviation

The **variance** measures how spread out $X$ is around its mean. It is the expected squared distance from the mean.

> [!important] Memorize: Variance
> $$
> \sigma^2=\mathrm{Var}(X)=E\big[(X-\mu)^2\big]=E(X^2)-\mu^2 ,\qquad \sigma=\sqrt{\mathrm{Var}(X)} .
> $$
> The shortcut $E(X^2)-[E(X)]^2$ is almost always easier.

In the example above, $\mathrm{Var}(X)=3.7-1.7^2=3.7-2.89=0.81$ and $\sigma=0.9$.

## 3. Rules for linear functions

> [!important] Memorize: Linear rules
> For constants $a$ and $b$,
> $$
> E(aX+b)=aE(X)+b,\qquad \mathrm{Var}(aX+b)=a^2\,\mathrm{Var}(X).
> $$
> Adding a constant shifts the mean but ==does not change the variance==; multiplying by $a$ multiplies the variance by $a^2$ (not by $a$). Also, $E(X\pm Y)=E(X)\pm E(Y)$ always, and
> $$
> \mathrm{Var}(aX+bY)=a^2\mathrm{Var}(X)+b^2\mathrm{Var}(Y)+2ab\,\mathrm{Cov}(X,Y).
> $$

These rules solve 2022-23 Q2(b) type questions instantly. For example, if $E(X)=5$ and $\mathrm{Var}(X)=4$, and $Y=2X-3$, then $E(Y)=2(5)-3=7$ and $\mathrm{Var}(Y)=4\times4=16$. A full exponential version is practised in [[P9 Uniform Exponential and Other Continuous Distributions]].

> [!warning] Common mistake
> $\mathrm{Var}(3X-2)$ is $9\,\mathrm{Var}(X)$, not $3\,\mathrm{Var}(X)-2$ and not $9\,\mathrm{Var}(X)-2$. The constant disappears and the multiplier is squared.

## 4. Covariance and correlation of two random variables

The **covariance** measures how two random variables move together. A positive covariance means large values of $X$ tend to come with large values of $Y$; a negative covariance means large $X$ tends to come with small $Y$.

> [!important] Memorize: Covariance
> $$
> \sigma_{XY}=\mathrm{Cov}(X,Y)=E\big[(X-\mu_X)(Y-\mu_Y)\big]=E(XY)-\mu_X\mu_Y ,
> $$
> where $E(XY)=\sum_x\sum_y xy\,f(x,y)$ (discrete) or $\iint xy\,f(x,y)\,dx\,dy$ (continuous). The **correlation coefficient** is $\rho_{XY}=\dfrac{\sigma_{XY}}{\sigma_X\sigma_Y}$, which always lies between $-1$ and $1$.
> If $X$ and $Y$ are independent, then $E(XY)=E(X)E(Y)$ and so $\mathrm{Cov}(X,Y)=0$. The converse is not true: zero covariance does not prove independence.

A complete covariance calculation from a joint table is worked in [[P4 Joint Marginal and Conditional Distributions]].

---

## 5. Chebyshev's theorem

Sometimes we know only the mean and standard deviation of a variable, not its distribution. Chebyshev's theorem still gives a guaranteed lower bound on how much probability lies near the mean.

> [!important] Memorize: Chebyshev's theorem — statement (asked in 2023-24 Q3(a))
> ==The probability that any random variable $X$ will assume a value within $k$ standard deviations of the mean is at least $1-\dfrac{1}{k^2}$.== That is, for any $k>1$,
> $$
> P(\mu-k\sigma<X<\mu+k\sigma)\ \ge\ 1-\frac{1}{k^2},\qquad\text{equivalently}\qquad P(|X-\mu|\ge k\sigma)\ \le\ \frac1{k^2}.
> $$
> With $k=2$ at least $\frac34=75\%$ of the probability lies within $2\sigma$; with $k=3$ at least $\frac89\approx 88.9\%$ lies within $3\sigma$. It holds for every distribution, which is why it is only a bound and is usually quite conservative.

### Using Chebyshev in a "will I get the job?" story

**Fresh practice (same logic as 2023-24 Q3(a)).** Fifty jobs are available and 800 applicants take a test. The mean score is 70 and the standard deviation is 5. Assuming the score distribution is symmetric about the mean, can an applicant who scores 85 expect to get a job?

The score 85 is $85-70=15$ points above the mean, which is $k=15/5=3$ standard deviations. By Chebyshev, $P(|X-70|\ge 15)\le \frac1{9}$. This bound covers both tails, below 55 and above 85. Because the distribution is symmetric, the upper tail has at most half of it:

$$
P(X\ge 85)\le \frac{1}{2}\cdot\frac{1}{9}=\frac1{18}.
$$

So at most $800\times\frac{1}{18}\approx 44.4$, that is at most about 44 applicants, can score 85 or more. Since 50 jobs are available and at most 44 people can score as high or higher, a person scoring 85 should get a job.

> [!tip] Exam trick
> The three-line answer pattern is: compute $k=\dfrac{\text{score}-\mu}{\sigma}$; apply Chebyshev and halve because of symmetry; multiply by the number of applicants and compare with the number of jobs.

### Comparing an exact probability with Chebyshev's bound

**Fresh practice (same logic as 2022-23 Q2(c)).** Let $f(x)=3x^2$ for $0<x<1$. Compute $P(\mu-2\sigma<X<\mu+2\sigma)$ and compare with Chebyshev's theorem.

First, $\mu=\int_0^1x\cdot3x^2dx=\frac34$ and $E(X^2)=\int_0^1x^2\cdot3x^2dx=\frac35$, so $\sigma^2=\frac35-\frac9{16}=\frac{3}{80}=0.0375$ and $\sigma=0.1936$. The interval is $\mu\pm2\sigma=(0.3627,\ 1.1373)$. Because the density is zero above 1, the upper limit is effectively 1, so

$$
P(0.3627<X<1)=\int_{0.3627}^{1}3x^2\,dx=1-(0.3627)^3=1-0.0477=0.9523 .
$$

Chebyshev's theorem with $k=2$ only guarantees at least $1-\frac14=0.75$. The exact probability 0.9523 is larger, which agrees with the theorem: the bound is always satisfied, but it is not sharp for a particular distribution.

---

## 6. Past TF questions solved

> [!example] Past TF 2019-20 Q7(b) (18 marks) — expected value of $g(X)=e^{2X/3}$
> The density is $f(x)=e^{-x}$ for $x>0$ and $0$ otherwise. Using $E[g(X)]=\int g(x)f(x)\,dx$,
> $$
> E\left(e^{2X/3}\right)=\int_0^{\infty}e^{2x/3}\,e^{-x}\,dx=\int_0^{\infty}e^{-x/3}\,dx=\Big[-3e^{-x/3}\Big]_0^{\infty}=0-(-3)=3 .
> $$
> So the expected value of $g(X)$ is 3. Notice that we did not need the distribution of $g(X)$ at all.

> [!example] Past TF 2020-21 Q8(a) (10 marks) — average hospital stay
> The hospital stay is $Y=X+4$ where $f(x)=\dfrac{32}{(x+4)^3}$ for $x>0$. We want $E(Y)=E(X+4)$. Directly,
> $$
> E(X+4)=\int_0^{\infty}(x+4)\frac{32}{(x+4)^3}\,dx=32\int_0^{\infty}(x+4)^{-2}\,dx=32\left[-\frac{1}{x+4}\right]_0^{\infty}=32\cdot\frac14=8 .
> $$
> Equivalently, $E(X)=4$ and $E(Y)=E(X)+4=8$. So a patient is hospitalized for **8 days** on average.

---

> [!question]- Self-check
> **1.** $E(X)=3$, $\mathrm{Var}(X)=2$. Find $E(4X+1)$ and $\mathrm{Var}(4X+1)$. *13 and 32.*
> **2.** What does Chebyshev guarantee for $k=3$? *At least 8/9 of the probability is within $3\sigma$.*
> **3.** If $\mathrm{Cov}(X,Y)=0$, are $X$ and $Y$ independent? *Not necessarily.*
> **4.** Shortcut formula for variance? *$E(X^2)-[E(X)]^2$.*
> **5.** Why halve Chebyshev's bound in the job problem? *Symmetry puts at most half of the tail probability on the high side.*

Previous: [[P4 Joint Marginal and Conditional Distributions]] · Next: [[P6 Bernoulli Binomial Multinomial Hypergeometric Geometric]] · Home: [[index]]
