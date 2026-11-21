---
title: "TF 2023-24 Solutions (MATH 243)"
tags: [math243, tf-solutions]
---

# Term Final 2023-24 — Complete Solutions

This file contains the full solution of every part of the MATH 243 (Probability and Statistics) term final of 2023-24. The questions are not repeated here, so keep your printed question paper next to you. The best way to use this file is simple: try each part yourself on paper first, then come here and compare step by step. Pay attention not only to the final number but also to how the answer is written, because the presentation shown here (definitions first, then formula, then substitution, then a clear conclusion) is exactly what earns full marks.

> [!summary]- Final answers at a glance
> Q1(a) No — two events with non-zero probabilities cannot be both mutually exclusive and independent. Q1(b) $P(\text{red}) = 103/144 = 0.7153$. Q1(c) $P(A\mid \bar V)=0.504,\ P(B\mid \bar V)=0.256,\ P(C\mid \bar V)=0.240$.
> Q2(a) $P(X<0.2) = 1-e^{-1.6} = 0.7981$. Q2(b) $P[(X,Y)\in A]=9/14$, $\operatorname{Var}(X)=45/112=0.4018$, $\operatorname{Cov}(X,Y)=-9/56=-0.1607$.
> Q3(a) At most about 31 applicants can score 84 or more, so yes, the person can count on a job. Q3(b) $P(X=2)=0.2565$. Q3(c) $0.0338,\ 0.8778,\ 0.0245$.
> Q4(a) $P(778<X<834)=0.5111$. Q4(b) $r_s = 0.679$. Q4(c) $\hat y = 11.536 + 21.654x - 2.982x^2$, $R^2 = 0.931$.
> Q5(b) Moderate positive relationship ($r\approx 0.60$). Q5(c) Mean $=59.8$, SD $=20.09$, CV $=33.60\%$.
> Q6(a) $\mu_2=236.76,\ \mu_3=264.34,\ \mu_4=141290.1,\ \beta_1=0.0053,\ \beta_2=2.52$ (nearly symmetric, platykurtic). Q6(c) $z=-4.67$, reject $H_0$, claim supported.
> Q7(b) $z=0.104$, not significant, machine not improved. Q7(c) $t=1.217<2.16$, difference not significant.
> Q8(a) $\chi^2=17.5>9.49$, association exists. Q8(b) $F=0.175<4.26$, no significant difference among cities.

---

# SECTION A

## Q1(a) — Can events be mutually exclusive and independent at the same time? (6 marks)

Two events $A$ and $B$ are called **mutually exclusive** when they cannot occur together, that is $A\cap B=\varnothing$, so $P(A\cap B)=0$. Two events are called **independent** when the occurrence of one does not change the probability of the other, which means $P(A\cap B)=P(A)\,P(B)$.

Suppose $A$ and $B$ are both mutually exclusive and independent. Then from the first property $P(A\cap B)=0$, and from the second property $P(A\cap B)=P(A)P(B)$. Putting these together we get $P(A)P(B)=0$, which is only possible when $P(A)=0$ or $P(B)=0$.

So if both events have positive probability, they **cannot** be mutually exclusive and independent simultaneously. In fact mutually exclusive events are strongly dependent: if $A$ happens, we know for certain that $B$ did not happen, so $P(B\mid A)=0\neq P(B)$. The only exception is the trivial case where at least one of the events is impossible (probability zero).

Example: in one toss of a die let $A=\{1\}$ and $B=\{2\}$. They are mutually exclusive, $P(A\cap B)=0$, but $P(A)P(B)=\tfrac1{36}\neq 0$, so they are not independent.

> [!success] Answer
> No. Mutually exclusive means $P(A\cap B)=0$, independence means $P(A\cap B)=P(A)P(B)$. Both can hold only if $P(A)=0$ or $P(B)=0$. For events with non-zero probability, it is impossible.

Concept: [[P2 Conditional Probability Independence and Bayes]]

## Q1(b) — Multiplication law and the ball-transfer problem (12 marks)

**Multiplication law of probability.** For any two events $A$ and $B$, the probability that both occur equals the probability of one of them multiplied by the conditional probability of the other given that the first has occurred:

$$P(A\cap B)=P(A)\,P(B\mid A)=P(B)\,P(A\mid B).$$

If $A$ and $B$ are independent, this reduces to $P(A\cap B)=P(A)P(B)$. For three events, $P(A_1\cap A_2\cap A_3)=P(A_1)P(A_2\mid A_1)P(A_3\mid A_1\cap A_2)$.

**Problem.** Box $A$ has 5 white and 7 red balls (12 in total). Box $B$ has 3 white and 8 red balls (11 in total). One ball is moved from $A$ to $B$, so $B$ will then have 12 balls.

Let $W_1$ be the event that the transferred ball is white and $R_1$ that it is red. Let $R$ be the event that the ball finally drawn from box $B$ is red.

$$P(W_1)=\frac{5}{12},\qquad P(R_1)=\frac{7}{12}.$$

If a white ball is transferred, box $B$ has 4 white and 8 red, so $P(R\mid W_1)=\frac{8}{12}$. If a red ball is transferred, box $B$ has 3 white and 9 red, so $P(R\mid R_1)=\frac{9}{12}$.

Since $W_1$ and $R_1$ are mutually exclusive and exhaustive, using the multiplication law for each path and then adding (total probability):

$$P(R)=P(W_1)P(R\mid W_1)+P(R_1)P(R\mid R_1)=\frac{5}{12}\cdot\frac{8}{12}+\frac{7}{12}\cdot\frac{9}{12}=\frac{40+63}{144}=\frac{103}{144}.$$

> [!success] Answer
> $P(\text{red ball from box } B)=\dfrac{103}{144}\approx 0.7153$

Concept: [[P2 Conditional Probability Independence and Bayes]]

## Q1(c) — Bayes' theorem: who is the non-voter? (17 marks)

Let $A$, $B$, $C$ be the events that a randomly chosen city dweller supports party $A$, $B$ or the other parties. Let $V$ be the event that the person voted, and $\bar V$ that the person did **not** vote. The given information is:

$$P(A)=0.45,\quad P(B)=0.40,\quad P(C)=0.15.$$

The turn-out rates are 65%, 80% and 50%, so the probabilities of **not** voting are:

$$P(\bar V\mid A)=0.35,\quad P(\bar V\mid B)=0.20,\quad P(\bar V\mid C)=0.50.$$

By the theorem of total probability:

$$P(\bar V)=P(A)P(\bar V\mid A)+P(B)P(\bar V\mid B)+P(C)P(\bar V\mid C)$$

$$=0.45(0.35)+0.40(0.20)+0.15(0.50)=0.1575+0.0800+0.0750=0.3125.$$

By Bayes' theorem, $P(A\mid\bar V)=\dfrac{P(A)P(\bar V\mid A)}{P(\bar V)}$, and similarly for $B$ and $C$:

$$P(A\mid\bar V)=\frac{0.1575}{0.3125}=0.504,\qquad P(B\mid\bar V)=\frac{0.0800}{0.3125}=0.256,\qquad P(C\mid\bar V)=\frac{0.0750}{0.3125}=0.240.$$

Check: $0.504+0.256+0.240=1$. ✓

> [!success] Answer
> Given that the person did not vote: $P(A)=0.504$, $P(B)=0.256$, $P(C)=0.240$. The non-voter is most likely a supporter of party $A$.

Concept: [[P2 Conditional Probability Independence and Bayes]]

---

## Q2(a) — Waiting time between speeders (15 marks)

The CDF is $F(x)=1-e^{-8x}$ for $x\ge 0$ and $0$ otherwise, where $x$ is in **hours**. Since 12 minutes $=\frac{12}{60}=0.2$ hour, we need $P(X<0.2)$.

**Using the CDF.** For a continuous random variable $P(X<a)=F(a)$, so

$$P(X<0.2)=F(0.2)=1-e^{-8(0.2)}=1-e^{-1.6}=1-0.2019=0.7981.$$

**Using the PDF.** The density is the derivative of the CDF:

$$f(x)=\frac{d}{dx}F(x)=\frac{d}{dx}\left(1-e^{-8x}\right)=8e^{-8x},\quad x\ge 0\quad(\text{and } 0 \text{ otherwise}).$$

Then

$$P(X<0.2)=\int_0^{0.2}8e^{-8x}\,dx=\Big[-e^{-8x}\Big]_0^{0.2}=1-e^{-1.6}=0.7981.$$

Both methods give the same answer, as they must. (This $X$ is exponential with rate $\lambda=8$ per hour, mean $1/8$ hour $=7.5$ minutes.)

> [!success] Answer
> $f(x)=8e^{-8x}$ for $x\ge0$; $\;P(\text{wait} < 12\text{ min})=1-e^{-1.6}\approx 0.7981$

Concept: [[P3 Random Variables PMF PDF CDF]] · [[P9 Uniform Exponential and Other Continuous Distributions]]

## Q2(b) — Joint distribution of red and blue pens (20 marks)

The bag has 3 red, 2 blue and 3 black pens, 8 pens in total. Two pens are selected, so the total number of equally likely samples is $\binom{8}{2}=28$. With $X$ = number of red and $Y$ = number of blue pens, the joint pmf is the multivariate hypergeometric:

$$f(x,y)=\frac{\binom{3}{x}\binom{2}{y}\binom{3}{2-x-y}}{\binom{8}{2}},\qquad x=0,1,2;\ y=0,1,2;\ 0\le x+y\le 2.$$

For example $f(0,0)=\frac{\binom30\binom20\binom32}{28}=\frac{3}{28}$, $f(1,0)=\frac{\binom31\binom20\binom31}{28}=\frac{9}{28}$, $f(1,1)=\frac{3\cdot2\cdot1}{28}=\frac{6}{28}$, and so on. The full table is:

| $f(x,y)$ | $y=0$ | $y=1$ | $y=2$ | $g(x)$ |
|---|---|---|---|---|
| $x=0$ | 3/28 | 6/28 | 1/28 | 10/28 |
| $x=1$ | 9/28 | 6/28 | 0 | 15/28 |
| $x=2$ | 3/28 | 0 | 0 | 3/28 |
| $h(y)$ | 15/28 | 12/28 | 1/28 | 1 |

**(i) Plot of $f(x,y)$ against $(x,y)$.** Since $X$ and $Y$ are discrete, the plot is a three-dimensional "stick" (or bar) diagram. Draw the $x$-axis and $y$-axis on the floor, and at each point $(x,y)$ raise a vertical stick whose height equals $f(x,y)$. The tallest stick is at $(1,0)$ with height $9/28$; sticks of height $6/28$ stand at $(0,1)$ and $(1,1)$; sticks of height $3/28$ stand at $(0,0)$ and $(2,0)$; the shortest stick of height $1/28$ stands at $(0,2)$. No sticks are drawn at $(1,2),(2,1),(2,2)$ because those points have zero probability. A top view, with the heights written in units of $1/28$, looks like this:

```
 y=2 |  1
 y=1 |  6    6
 y=0 |  3    9    3
     +---------------
       x=0  x=1  x=2      (heights in 1/28)
```

**(ii)** $A=\{(x,y): x+y\le 1\}$ contains $(0,0),(0,1),(1,0)$:

$$P[(X,Y)\in A]=\frac{3}{28}+\frac{6}{28}+\frac{9}{28}=\frac{18}{28}=\frac{9}{14}.$$

**(iii) Marginal distributions.** Add along rows and columns of the table:

$$g(x)=\sum_y f(x,y):\quad g(0)=\tfrac{10}{28}=\tfrac{5}{14},\ g(1)=\tfrac{15}{28},\ g(2)=\tfrac{3}{28}.$$

$$h(y)=\sum_x f(x,y):\quad h(0)=\tfrac{15}{28},\ h(1)=\tfrac{12}{28}=\tfrac{3}{7},\ h(2)=\tfrac{1}{28}.$$

**(iv) Variance of $X$.**

$$E(X)=0\cdot\tfrac{10}{28}+1\cdot\tfrac{15}{28}+2\cdot\tfrac{3}{28}=\tfrac{21}{28}=\tfrac34,\qquad E(X^2)=0+1\cdot\tfrac{15}{28}+4\cdot\tfrac{3}{28}=\tfrac{27}{28}.$$

$$\operatorname{Var}(X)=E(X^2)-[E(X)]^2=\frac{27}{28}-\frac{9}{16}=\frac{108-63}{112}=\frac{45}{112}\approx 0.4018.$$

**(v) Covariance.**

$$E(Y)=0\cdot\tfrac{15}{28}+1\cdot\tfrac{12}{28}+2\cdot\tfrac{1}{28}=\tfrac{14}{28}=\tfrac12.$$

$E(XY)=\sum\sum xy\,f(x,y)$; the only non-zero product term is at $(1,1)$: $E(XY)=1\cdot1\cdot\frac{6}{28}=\frac{3}{14}$.

$$\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y)=\frac{3}{14}-\frac34\cdot\frac12=\frac{3}{14}-\frac38=\frac{12-21}{56}=-\frac{9}{56}\approx-0.1607.$$

The covariance is negative, which makes sense: with only two pens drawn, getting more red pens leaves less room for blue pens.

> [!success] Answer
> $P[(X,Y)\in A]=9/14$; $g(x)=5/14,\,15/28,\,3/28$; $h(y)=15/28,\,3/7,\,1/28$; $\operatorname{Var}(X)=45/112\approx0.4018$; $\operatorname{Cov}(X,Y)=-9/56\approx-0.1607$.

Concept: [[P4 Joint Marginal and Conditional Distributions]] · [[P5 Expectation Variance Covariance and Chebyshev]]

---

## Q3(a) — Chebyshev's theorem and the job applicants (11 marks)

**Chebyshev's theorem.** For any random variable $X$ (any distribution) with mean $\mu$ and standard deviation $\sigma$, the probability that $X$ lies within $k$ standard deviations of the mean is at least $1-\frac{1}{k^2}$:

$$P(\mu-k\sigma<X<\mu+k\sigma)\ \ge\ 1-\frac1{k^2},\qquad\text{equivalently}\qquad P(|X-\mu|\ge k\sigma)\le\frac1{k^2},\quad k>1.$$

**Problem.** $\mu=60$, $\sigma=6$, 1000 applicants, 70 jobs. A score of 84 is

$$k=\frac{84-60}{6}=4$$

standard deviations above the mean. By Chebyshev,

$$P(|X-60|\ge 24)\le\frac{1}{4^2}=\frac{1}{16}.$$

The event $|X-60|\ge 24$ means $X\le 36$ or $X\ge 84$. Since the distribution is symmetric about the mean, these two tails have equal probability, so

$$P(X\ge 84)\le\frac12\cdot\frac1{16}=\frac1{32}.$$

So the number of applicants scoring 84 or more is at most $1000\times\frac1{32}=31.25$, i.e. at most about 31 people. Since 70 jobs are available and at most 31 people can score as high as (or higher than) 84, a person scoring 84 is certainly among the top 70.

> [!success] Answer
> At most $1000/32\approx31$ applicants can score $\ge 84$. Since there are 70 positions, the person scoring 84 **can count on getting a job**.

Concept: [[P5 Expectation Variance Covariance and Chebyshev]]

## Q3(b) — Binomial to Poisson, and calls at a switchboard (12 marks)

**Relation between binomial and Poisson.** The Poisson distribution is the limiting form of the binomial distribution when the number of trials $n$ is very large, the probability of success $p$ is very small, and the mean $np=\lambda$ stays fixed.

Start from the binomial pmf and put $p=\lambda/n$:

$$b(x;n,p)=\binom nx p^x(1-p)^{n-x}=\frac{n(n-1)\cdots(n-x+1)}{x!}\left(\frac{\lambda}{n}\right)^x\left(1-\frac{\lambda}{n}\right)^{n-x}$$

$$=\frac{\lambda^x}{x!}\cdot\underbrace{1\left(1-\frac1n\right)\left(1-\frac2n\right)\cdots\left(1-\frac{x-1}{n}\right)}_{\to\,1}\cdot\underbrace{\left(1-\frac{\lambda}{n}\right)^{n}}_{\to\,e^{-\lambda}}\cdot\underbrace{\left(1-\frac{\lambda}{n}\right)^{-x}}_{\to\,1}.$$

As $n\to\infty$ (with $\lambda=np$ fixed), using $\lim_{n\to\infty}\left(1-\frac{\lambda}{n}\right)^n=e^{-\lambda}$, we get

$$\lim_{n\to\infty}b(x;n,p)=\frac{e^{-\lambda}\lambda^x}{x!},\qquad x=0,1,2,\dots$$

which is the Poisson pmf. Both distributions then have mean $\lambda=np$; the binomial variance $np(1-p)$ also tends to $\lambda$ because $1-p\to 1$. In practice the approximation is good when $n\ge 20$ and $p\le 0.05$ (or $n\ge100$, $np\le 10$).

**Problem.** Calls arrive at a mean rate of 0.5 per minute, so in a 5-minute period the mean is $\lambda=0.5\times5=2.5$. With $X\sim\text{Poisson}(2.5)$:

$$P(X=2)=\frac{e^{-2.5}(2.5)^2}{2!}=\frac{0.082085\times6.25}{2}=0.2565.$$

> [!success] Answer
> Poisson is the limit of binomial as $n\to\infty,\ p\to0,\ np=\lambda$. $\;P(\text{2 calls in 5 min})=\dfrac{e^{-2.5}2.5^2}{2!}\approx0.2565$

Concept: [[P7 Poisson Distribution and Poisson Process]]

## Q3(c) — Recovery from a rare blood disease (12 marks)

Let $X$ = number of people (out of 15) who survive (recover). Each person recovers independently with $p=0.4$, so $X\sim\text{Binomial}(n=15,p=0.4)$:

$$P(X=x)=\binom{15}{x}(0.4)^x(0.6)^{15-x},\quad x=0,1,\dots,15.$$

The cumulative binomial table values needed are $B(2)=\sum_{x=0}^{2}b(x)=0.0271$, $B(8)=0.9050$, $B(9)=0.9662$.

**(i) At least 10 survive.**

$$P(X\ge10)=1-P(X\le 9)=1-0.9662=0.0338.$$

**(ii) From 3 to 8 survive.**

$$P(3\le X\le8)=P(X\le8)-P(X\le2)=0.9050-0.0271=0.8779\ (\approx0.8778).$$

**(iii) Exactly 5 die.** If 5 of the 15 die, then exactly 10 survive:

$$P(X=10)=\binom{15}{10}(0.4)^{10}(0.6)^5=3003\times0.000104858\times0.07776=0.0245.$$

> [!success] Answer
> (i) $0.0338$  (ii) $0.8778$  (iii) $P(X=10)=0.0245$

Concept: [[P6 Bernoulli Binomial Multinomial Hypergeometric Geometric]]

---

## Q4(a) — Mode of the normal distribution, and the light bulbs (11 marks)

**Mode $=\mu$.** The normal density is

$$f(x)=\frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}},\qquad -\infty<x<\infty.$$

The mode is the value of $x$ where $f(x)$ is maximum. Differentiating,

$$f'(x)=\frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}}\cdot\left(-\frac{x-\mu}{\sigma^2}\right)=-\frac{x-\mu}{\sigma^2}\,f(x).$$

Since $f(x)>0$ for all $x$, $f'(x)=0$ only when $x-\mu=0$, i.e. $x=\mu$. For the second derivative,

$$f''(x)=-\frac{1}{\sigma^2}f(x)-\frac{x-\mu}{\sigma^2}f'(x)=\frac{f(x)}{\sigma^2}\left[\frac{(x-\mu)^2}{\sigma^2}-1\right],\qquad f''(\mu)=-\frac{f(\mu)}{\sigma^2}<0.$$

So $f$ has its maximum at $x=\mu$; the mode of the normal distribution is $\mu$, the same as its mean.

**Light bulbs.** $X\sim N(\mu=800,\ \sigma=40)$. Standardise with $z=\frac{x-\mu}{\sigma}$:

$$z_1=\frac{778-800}{40}=-0.55,\qquad z_2=\frac{834-800}{40}=0.85.$$

$$P(778<X<834)=P(-0.55<Z<0.85)=\Phi(0.85)-\Phi(-0.55)=0.8023-0.2912=0.5111.$$

> [!success] Answer
> Mode $=\mu$ (shown by $f'(\mu)=0$, $f''(\mu)<0$). $\;P(778<X<834)\approx0.5111$, i.e. about 51% of bulbs.

Concept: [[P8 Normal Distribution]]

## Q4(b) — Pearson's r and rank correlation with repeated ranks (12 marks)

**Pearson's correlation coefficient** measures the strength and direction of the **linear** relationship between two quantitative variables $X$ and $Y$:

$$r=\frac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}=\frac{n\sum xy-\sum x\sum y}{\sqrt{n\sum x^2-(\sum x)^2}\ \sqrt{n\sum y^2-(\sum y)^2}},\qquad -1\le r\le 1.$$

**Rank correlation with repeated observations.** Spearman's coefficient is $r_s=1-\dfrac{6\sum D^2}{n(n^2-1)}$, where $D$ is the difference between the ranks of each pair. When some observations are repeated (tied), each tied value is given the **average** of the ranks it would have occupied, and a correction factor $\frac{m(m^2-1)}{12}=\frac{m^3-m}{12}$ is added to $\sum D^2$ for every group of $m$ tied values, in either series:

$$r_s=1-\frac{6\left[\sum D^2+\sum\frac{m^3-m}{12}\right]}{n(n^2-1)}.$$

**Calculation.** Rank both series in ascending order (smallest $=1$), averaging tied ranks.

| Store | $x$ | $R_x$ | $y$ | $R_y$ | $D=R_x-R_y$ | $D^2$ |
|---|---|---|---|---|---|---|
| 1 | 50 | 1.5 | 11 | 1 | 0.5 | 0.25 |
| 2 | 50 | 1.5 | 13 | 3 | −1.5 | 2.25 |
| 3 | 55 | 3 | 14 | 5.5 | −2.5 | 6.25 |
| 4 | 60 | 5.5 | 16 | 9.5 | −4 | 16 |
| 5 | 65 | 9 | 16 | 9.5 | −0.5 | 0.25 |
| 6 | 65 | 9 | 15 | 7.5 | 1.5 | 2.25 |
| 7 | 65 | 9 | 15 | 7.5 | 1.5 | 2.25 |
| 8 | 60 | 5.5 | 14 | 5.5 | 0 | 0 |
| 9 | 60 | 5.5 | 13 | 3 | 2.5 | 6.25 |
| 10 | 60 | 5.5 | 13 | 3 | 2.5 | 6.25 |
| | | | | | Total | 42 |

Ties in $x$: 50 occurs twice ($m=2$), 60 occurs four times ($m=4$), 65 occurs three times ($m=3$). Ties in $y$: 13 three times ($m=3$), 14, 15 and 16 each twice ($m=2$).

$$\sum\frac{m^3-m}{12}=\underbrace{\frac{6}{12}+\frac{60}{12}+\frac{24}{12}}_{x:\ 0.5+5+2}+\underbrace{\frac{24}{12}+3\cdot\frac{6}{12}}_{y:\ 2+0.5+0.5+0.5}=7.5+3.5=11.$$

$$r_s=1-\frac{6(42+11)}{10(10^2-1)}=1-\frac{318}{990}=1-0.3212=0.679.$$

> [!success] Answer
> $r_s\approx0.68$: a fairly high positive rank correlation — stores with higher sales tend to have higher expenses.

Concept: [[S6 Correlation and Regression]]

## Q4(c) — Objectives of correlation/regression, and a second-degree polynomial fit (12 marks)

**Objectives.** Correlation analysis aims to find out whether two variables are related, and to measure the degree (strength) and direction of their relationship by a single number such as $r$. Regression analysis aims to find the actual functional form of the relationship — an equation expressing a dependent variable in terms of an independent variable — so that we can estimate or predict the value of the dependent variable for a given value of the independent variable, and measure how well the fitted equation explains the variation in the data (through the coefficient of determination).

**Fitting $y=a+bx+cx^2$.** By least squares, the normal equations are

$$\sum y=na+b\sum x+c\sum x^2,\qquad \sum xy=a\sum x+b\sum x^2+c\sum x^3,\qquad \sum x^2y=a\sum x^2+b\sum x^3+c\sum x^4.$$

| $x$ | $y$ | $x^2$ | $x^3$ | $x^4$ | $xy$ | $x^2y$ | $y^2$ |
|---|---|---|---|---|---|---|---|
| 0 | 15 | 0 | 0 | 0 | 0 | 0 | 225 |
| 1 | 25 | 1 | 1 | 1 | 25 | 25 | 625 |
| 2 | 40 | 4 | 8 | 16 | 80 | 160 | 1600 |
| 3 | 55 | 9 | 27 | 81 | 165 | 495 | 3025 |
| 4 | 52 | 16 | 64 | 256 | 208 | 832 | 2704 |
| 5 | 43 | 25 | 125 | 625 | 215 | 1075 | 1849 |
| 15 | 230 | 55 | 225 | 979 | 693 | 2587 | 10028 |

Substituting ($n=6$):

$$230=6a+15b+55c\quad(1)$$

$$693=15a+55b+225c\quad(2)$$

$$2587=55a+225b+979c\quad(3)$$

Eliminate $a$: $(2)-2.5\times(1)$ gives $118=17.5b+87.5c\ (4)$. $\;(3)-\frac{55}{6}\times(1)$ gives $478.667=87.5b+474.833c\ (5)$. Then $(5)-5\times(4)$ gives $-111.333=37.333c$, so $c=-2.982$. From (4), $b=\frac{118-87.5(-2.982)}{17.5}=21.654$. From (1), $a=\frac{230-15(21.654)-55(-2.982)}{6}=11.536$.

$$\hat y=11.536+21.654x-2.982x^2.$$

**Coefficient of determination.** Fitted values $\hat y$ for $x=0,\dots,5$ are $11.54,\ 30.21,\ 42.91,\ 49.66,\ 50.44,\ 45.25$. The residuals $y-\hat y$ are $3.46,\ -5.21,\ -2.91,\ 5.34,\ 1.56,\ -2.25$, so

$$SSE=\sum(y-\hat y)^2=83.66,\qquad SST=\sum y^2-\frac{(\sum y)^2}{n}=10028-\frac{230^2}{6}=1211.33,$$

$$R^2=1-\frac{SSE}{SST}=1-\frac{83.66}{1211.33}=0.931.$$

So about 93.1% of the variation in rice yield is explained by the quadratic relationship with the nitrogen dose. The negative coefficient of $x^2$ shows the yield rises first and then falls at high doses.

> [!success] Answer
> $\hat y=11.536+21.654x-2.982x^2$, $\;R^2\approx0.931$ (93% of variation explained — a very good fit).

Concept: [[S6 Correlation and Regression]]

---

# SECTION B

## Q5(a) — Stem-and-leaf plots (10 marks)

A **stem-and-leaf plot** is a way of organising quantitative data that shows the shape of the distribution like a histogram, while still keeping every original data value visible. Each number is split into two parts: the **stem**, which is the leading digit or digits, and the **leaf**, which is the last digit. All values sharing the same stem are written on one row.

To create one: first decide how to split the numbers (for two-digit data, the tens digit is the stem and the units digit the leaf). Second, write the stems in a vertical column in increasing order, with a vertical line to their right. Third, write the leaf of each data value on the row of its stem. Fourth, arrange the leaves in each row in increasing order, and add a key such as "3 | 2 means 32".

Example: data 12, 15, 21, 24, 24, 27, 30, 33, 38, 41.

```
 1 | 2 5
 2 | 1 4 4 7
 3 | 0 3 8
 4 | 1          Key: 2 | 4 means 24
```

From this plot we can directly see that most values lie in the twenties, we can read the minimum (12), maximum (41), mode (24) and median (average of 5th and 6th values $=\frac{24+27}{2}=25.5$), and turning the plot sideways shows the shape of the distribution.

> [!success] Answer
> Split each value into stem (leading digits) and leaf (last digit), list stems vertically, write ordered leaves beside them, and add a key. It shows the distribution shape while keeping the raw data.

Concept: [[S2 Frequency Distributions and Graphs]]

## Q5(b) — Scatter plot of price vs rating (13 marks)

A **scatter plot** (scatter diagram) is a graph of paired data $(x,y)$ in which each pair is plotted as a single point, with the independent variable on the horizontal axis and the dependent variable on the vertical axis. By looking at the pattern of points we can judge whether there is a relationship, whether it is positive (points rise to the right), negative (points fall to the right) or absent (no pattern), and whether it is linear or curved. Example: plotting hours studied ($x$) against exam marks ($y$) for a class usually gives points that rise from left to right, indicating a positive relationship.

For the restaurants, plot the points A(22, 3.5), B(29, 4.0), C(15, 3.0), D(18, 4.0), E(23, 3.5), with price on the $x$-axis and rating on the $y$-axis:

![[m243-tf2324-q5b-scatter.png]]

**Interpretation.** The cheapest restaurant (C, 15 dollars) has the lowest rating (3.0) and the most expensive restaurant (B, 29 dollars) has the highest rating (4.0), so overall the points drift upward from left to right. However, the pattern is not tight: restaurant D is cheap (18 dollars) but has the top rating. So there is a **weak-to-moderate positive relationship** between price and rating. (Computing Pearson's $r$ for these five points gives $r\approx 0.60$, which confirms a moderate positive association.) With only five restaurants, this conclusion is not very reliable.

> [!success] Answer
> The points tend to rise from left to right, so there is a moderate positive relationship ($r\approx0.60$): costlier restaurants tend to get somewhat better ratings, but the relationship is not strong.

Concept: [[S2 Frequency Distributions and Graphs]] · [[S6 Correlation and Regression]]

## Q5(c) — Correcting mean and standard deviation (12 marks)

Given $n=200$, wrong mean $\bar x=60$, wrong SD $\sigma=20$. Wrongly taken: 3 and 67. Correct values: 13 and 17.

**Corrected sum.**

$$\sum x_{\text{wrong}}=n\bar x=200\times60=12000,$$

$$\sum x_{\text{correct}}=12000-(3+67)+(13+17)=12000-70+30=11960,$$

$$\bar x_{\text{correct}}=\frac{11960}{200}=59.8.$$

**Corrected sum of squares.** From $\sigma^2=\frac{\sum x^2}{n}-\bar x^2$ we have $\sum x^2=n(\sigma^2+\bar x^2)$:

$$\sum x^2_{\text{wrong}}=200(20^2+60^2)=200(400+3600)=800000,$$

$$\sum x^2_{\text{correct}}=800000-(3^2+67^2)+(13^2+17^2)=800000-4498+458=795960.$$

**Corrected SD.**

$$\sigma^2_{\text{correct}}=\frac{795960}{200}-(59.8)^2=3979.8-3576.04=403.76,\qquad \sigma_{\text{correct}}=\sqrt{403.76}=20.09.$$

**Corrected coefficient of variation.**

$$CV=\frac{\sigma}{\bar x}\times100\%=\frac{20.09}{59.8}\times100\%=33.60\%.$$

> [!success] Answer
> Correct mean $=59.8$, correct SD $=20.09$, correct CV $=33.60\%$.

Concept: [[S3 Measures of Central Tendency]] · [[S4 Measures of Dispersion]]

---

## Q6(a) — First four moments, $\beta_1$, $\beta_2$ (13 marks)

Take assumed mean $A=35$ and class width $h=10$, so $u=\frac{m-35}{10}$ where $m$ is the mid-value.

| Marks | $m$ | $f$ | $u$ | $fu$ | $fu^2$ | $fu^3$ | $fu^4$ |
|---|---|---|---|---|---|---|---|
| 0–10 | 5 | 8 | −3 | −24 | 72 | −216 | 648 |
| 10–20 | 15 | 12 | −2 | −24 | 48 | −96 | 192 |
| 20–30 | 25 | 20 | −1 | −20 | 20 | −20 | 20 |
| 30–40 | 35 | 30 | 0 | 0 | 0 | 0 | 0 |
| 40–50 | 45 | 15 | 1 | 15 | 15 | 15 | 15 |
| 50–60 | 55 | 10 | 2 | 20 | 40 | 80 | 160 |
| 60–70 | 65 | 5 | 3 | 15 | 45 | 135 | 405 |
| Total | | 100 | | −18 | 240 | −102 | 1440 |

**Raw moments about $A=35$** ($\mu'_r=\frac{\sum fu^r}{N}h^r$):

$$\mu'_1=\frac{-18}{100}(10)=-1.8,\quad \mu'_2=\frac{240}{100}(100)=240,\quad \mu'_3=\frac{-102}{100}(1000)=-1020,\quad \mu'_4=\frac{1440}{100}(10^4)=144000.$$

(Mean $=A+\mu'_1=35-1.8=33.2$.)

**Central moments (about the mean).**

$$\mu_1=0$$

$$\mu_2=\mu'_2-\mu'^2_1=240-3.24=236.76$$

$$\mu_3=\mu'_3-3\mu'_2\mu'_1+2\mu'^3_1=-1020-3(240)(-1.8)+2(-1.8)^3=-1020+1296-11.664=264.336$$

$$\mu_4=\mu'_4-4\mu'_3\mu'_1+6\mu'_2\mu'^2_1-3\mu'^4_1=144000-7344+4665.6-31.493=141290.11$$

**$\beta_1$ and $\beta_2$.**

$$\beta_1=\frac{\mu_3^2}{\mu_2^3}=\frac{(264.336)^2}{(236.76)^3}=\frac{69873.5}{13271653}=0.0053,\qquad \gamma_1=\frac{\mu_3}{\mu_2^{3/2}}=+0.073$$

$$\beta_2=\frac{\mu_4}{\mu_2^2}=\frac{141290.11}{(236.76)^2}=\frac{141290.11}{56055.3}=2.52,\qquad \gamma_2=\beta_2-3=-0.48$$

**Comment.** $\beta_1$ is almost zero and $\mu_3>0$, so the distribution is nearly symmetric with a very slight positive skew. $\beta_2=2.52<3$, so the distribution is **platykurtic** — flatter than the normal curve.

> [!success] Answer
> $\mu_2=236.76,\ \mu_3=264.34,\ \mu_4=141290.1$; $\beta_1=0.0053,\ \beta_2=2.52$. Almost symmetric (slightly positively skewed) and platykurtic.

Concept: [[S5 Moments Skewness and Kurtosis]]

## Q6(b) — Central Limit Theorem, algorithm and applications (10 marks)

**Statement.** If $\bar X$ is the mean of a random sample of size $n$ taken from a population (of any shape) with mean $\mu$ and finite variance $\sigma^2$, then as $n$ becomes large the sampling distribution of $\bar X$ approaches a normal distribution with mean $\mu$ and variance $\sigma^2/n$. In other words,

$$Z=\frac{\bar X-\mu}{\sigma/\sqrt n}\ \longrightarrow\ N(0,1)\quad\text{as } n\to\infty.$$

The approximation is generally good when $n\ge30$, whatever the shape of the population. If the population itself is normal, $\bar X$ is exactly normal for every $n$. The importance of the theorem is that it lets us use the normal table for problems about averages (and sums) even when the original population is not normal.

**Algorithm for solving CLT problems.** Step 1: identify the population mean $\mu$, population SD $\sigma$ and the sample size $n$, and check that $n$ is large (at least about 30) or that the population is normal. Step 2: write the mean and standard error of the sample mean, $\mu_{\bar X}=\mu$ and $\sigma_{\bar X}=\sigma/\sqrt n$ (for a sum $T=n\bar X$, use mean $n\mu$ and SD $\sigma\sqrt n$). Step 3: convert the required value(s) of $\bar x$ into $z=\frac{\bar x-\mu}{\sigma/\sqrt n}$. Step 4: read the probability from the standard normal table, using $P(Z<z)=\Phi(z)$, $P(Z>z)=1-\Phi(z)$ and $P(a<Z<b)=\Phi(b)-\Phi(a)$. Step 5: state the answer in the words of the problem.

**Applications in Computer Science.** In performance analysis, the average response time of a server measured over many requests is approximately normal, so confidence intervals and service-level guarantees can be computed even though individual response times are highly skewed. In A/B testing of websites and apps, CLT justifies the z-test on average click rates or conversion rates. In networking, the total number of packets or bytes arriving in a time window (a sum of many independent contributions) is modelled as normal for buffer sizing. In machine learning, the error of an average over mini-batches (stochastic gradient) and the accuracy measured on a large test set are approximately normal, which allows error bars and significance tests. In simulation and randomized algorithms (Monte Carlo methods), the average of many random runs is approximately normal, which gives the error of the estimate as $\sigma/\sqrt n$.

Concept: [[S7 Sampling Distributions CLT and Confidence Intervals]]

## Q6(c) — Stratified sampling, and testing the delivery-time claim (12 marks)

**Stratified random sampling.** In stratified random sampling the population is first divided into non-overlapping groups called **strata**, such that units inside each stratum are similar (homogeneous) while the strata differ from each other. Then a simple random sample is drawn independently from every stratum, usually with sample size proportional to the stratum size, and these samples are combined. This gives more precise estimates than simple random sampling and guarantees that every important subgroup is represented. Example: to estimate the average CGPA of a university of 10,000 students, where 4,000 are in engineering, 3,500 in science and 2,500 in arts, a stratified sample of 200 would take 80 engineering, 70 science and 50 arts students, each chosen at random within their faculty.

**Test.** Claim: mean delivery time is less than 120 minutes. Given $\sigma=30$, $n=49$, $\bar x=100$.

Hypothesis: $H_0:\mu=120$ against $H_1:\mu<120$ (left-tailed).

Level of significance: $\alpha=0.05$. Critical region: $z<-1.645$.

Test statistic (σ known, large sample): $z=\dfrac{\bar x-\mu_0}{\sigma/\sqrt n}$.

Calculated value:

$$z=\frac{100-120}{30/\sqrt{49}}=\frac{-20}{30/7}=\frac{-20}{4.286}=-4.67.$$

Decision: $z=-4.67<-1.645$, so it falls in the critical region; we reject $H_0$.

Comment: There is enough evidence at the 5% level to support the shop's claim that the mean delivery time is less than 120 minutes.

> [!success] Answer
> $z=-4.67<-1.645$ ⇒ reject $H_0$. The claim that mean delivery time is below 120 minutes is supported.

Concept: [[S1 Introduction to Statistics Data and Sampling]] · [[S8 Hypothesis Testing Concepts and z t Tests]]

---

## Q7(a) — Short notes (10 marks)

**Goodness of fit.** A goodness-of-fit test checks whether an observed frequency distribution agrees with a theoretical (expected) distribution such as binomial, Poisson, normal or uniform. If $O_i$ and $E_i$ are the observed and expected frequencies of the $k$ classes, the test statistic is $\chi^2=\sum\frac{(O_i-E_i)^2}{E_i}$ with $k-1-m$ degrees of freedom, where $m$ is the number of parameters estimated from the data. A small $\chi^2$ means a good fit; if $\chi^2$ exceeds the table value, we conclude that the assumed distribution does not fit the data. Each expected frequency should be at least 5.

**One-tailed and two-tailed test.** A test whose critical (rejection) region lies in only one tail of the sampling distribution is a one-tailed test; it is used when the alternative hypothesis has a direction, such as $H_1:\mu>\mu_0$ (right-tailed) or $H_1:\mu<\mu_0$ (left-tailed). A test whose critical region is split between both tails, with area $\alpha/2$ in each, is a two-tailed test; it is used when $H_1:\mu\neq\mu_0$. At $\alpha=0.05$ the critical value is $1.645$ for a one-tailed z-test and $\pm1.96$ for a two-tailed z-test.

**Degrees of freedom.** The degrees of freedom of a statistic is the number of values in its calculation that are free to vary independently, which equals the number of observations minus the number of restrictions (parameters estimated) imposed on them. For example, the sample variance uses $\sum(x_i-\bar x)=0$, so only $n-1$ deviations are free, and the one-sample $t$ test has $n-1$ degrees of freedom; an $r\times c$ contingency table has $(r-1)(c-1)$ degrees of freedom.

**Null and alternative hypothesis.** The null hypothesis $H_0$ is the statement of "no difference" or "no effect" about a population parameter, which is assumed true and tested for possible rejection, e.g. $H_0:\mu=50$. The alternative hypothesis $H_1$ is the statement that we accept if $H_0$ is rejected; it is contrary to $H_0$, e.g. $H_1:\mu\ne50$, $\mu>50$ or $\mu<50$. The form of $H_1$ decides whether the test is one-tailed or two-tailed.

Concept: [[S8 Hypothesis Testing Concepts and z t Tests]] · [[S9 Chi-Square Tests]]

## Q7(b) — Has the machine improved? (two proportions) (12 marks)

Before overhaul: $x_1=16$ imperfect in $n_1=500$, $p_1=\frac{16}{500}=0.032$. After overhaul: $x_2=3$ in $n_2=100$, $p_2=\frac{3}{100}=0.03$.

Hypothesis: $H_0:P_1=P_2$ (no improvement) against $H_1:P_1>P_2$ (the proportion of imperfect articles has decreased, i.e. the machine improved). This is a right-tailed test.

Level of significance: $\alpha=0.01$. Critical region: $z>2.33$ (one-tailed). Even if we use the given two-tailed value 2.58, the conclusion below will not change.

Test statistic:

$$z=\frac{p_1-p_2}{\sqrt{\hat P\hat Q\left(\frac1{n_1}+\frac1{n_2}\right)}},\qquad \hat P=\frac{x_1+x_2}{n_1+n_2},\ \hat Q=1-\hat P.$$

Calculated value: $\hat P=\frac{16+3}{600}=0.03167$, $\hat Q=0.96833$.

$$SE=\sqrt{0.03167\times0.96833\left(\frac1{500}+\frac1{100}\right)}=\sqrt{0.030664\times0.012}=0.01918,$$

$$z=\frac{0.032-0.030}{0.01918}=0.104.$$

Decision: $z=0.104<2.33$ (and $<2.58$), so it lies in the acceptance region; we do not reject $H_0$.

Comment: The difference between 3.2% and 3% is not significant. The machine has **not** improved significantly after overhauling.

> [!success] Answer
> $z=0.104$, not significant at 1%. The machine has not significantly improved.

Concept: [[S8 Hypothesis Testing Concepts and z t Tests]]

---

## Q7(c) — Difference of two small-sample means (pooled t-test) (13 marks)

Sample I ($n_1=8$): 9, 11, 13, 11, 15, 9, 12, 14. Sample II ($n_2=7$): 10, 12, 10, 14, 9, 8, 10.

$$\bar x_1=\frac{94}{8}=11.75,\qquad \bar x_2=\frac{73}{7}=10.4286.$$

| $x_1$ | $(x_1-\bar x_1)^2$ | $x_2$ | $(x_2-\bar x_2)^2$ |
|---|---|---|---|
| 9 | 7.5625 | 10 | 0.1837 |
| 11 | 0.5625 | 12 | 2.4694 |
| 13 | 1.5625 | 10 | 0.1837 |
| 11 | 0.5625 | 14 | 12.7551 |
| 15 | 10.5625 | 9 | 2.0408 |
| 9 | 7.5625 | 8 | 5.8980 |
| 12 | 0.0625 | 10 | 0.1837 |
| 14 | 5.0625 | | |
| 94 | 33.5 | 73 | 23.7143 |

Hypothesis: $H_0:\mu_1=\mu_2$ against $H_1:\mu_1\ne\mu_2$ (two-tailed).

Level of significance: $\alpha=0.05$, d.f. $=n_1+n_2-2=13$, critical region $|t|>t_{0.025,13}=2.16$.

Test statistic (variances unknown but assumed equal, small samples):

$$t=\frac{\bar x_1-\bar x_2}{s_p\sqrt{\frac1{n_1}+\frac1{n_2}}},\qquad s_p^2=\frac{\sum(x_1-\bar x_1)^2+\sum(x_2-\bar x_2)^2}{n_1+n_2-2}.$$

Calculated value:

$$s_p^2=\frac{33.5+23.7143}{13}=4.401,\qquad s_p=2.098,$$

$$t=\frac{11.75-10.4286}{2.098\sqrt{\frac18+\frac17}}=\frac{1.3214}{2.098\times0.5175}=\frac{1.3214}{1.0858}=1.217.$$

Decision: $|t|=1.217<2.16$, so we do not reject $H_0$.

Comment: The difference between the two sample means is **not significant** at the 5% level; both samples may be regarded as coming from populations with the same mean weight.

> [!success] Answer
> $t=1.217<2.16$ ⇒ the difference between the means is not significant.

Concept: [[S8 Hypothesis Testing Concepts and z t Tests]]

---

## Q8(a) — χ² test of independence: education vs job performance (15 marks)

Hypothesis: $H_0$: There is no association between educational attainment and job performance (they are independent), against $H_1$: there is an association.

Expected frequency of each cell: $E_{ij}=\dfrac{R_i\times C_j}{N}$, with $N=200$. For example $E_{11}=\frac{60\times50}{200}=15$, $E_{12}=\frac{60\times100}{200}=30$, $E_{21}=\frac{80\times50}{200}=20$, $E_{22}=\frac{80\times100}{200}=40$.

| Cell | $O$ | $E$ | $O-E$ | $(O-E)^2/E$ |
|---|---|---|---|---|
| Excellent, Below primary | 10 | 15 | −5 | 1.667 |
| Excellent, College | 40 | 30 | 10 | 3.333 |
| Excellent, University | 10 | 15 | −5 | 1.667 |
| Good, Below primary | 30 | 20 | 10 | 5.000 |
| Good, College | 30 | 40 | −10 | 2.500 |
| Good, University | 20 | 20 | 0 | 0.000 |
| Fair, Below primary | 10 | 15 | −5 | 1.667 |
| Fair, College | 30 | 30 | 0 | 0.000 |
| Fair, University | 20 | 15 | 5 | 1.667 |
| Total | 200 | 200 | 0 | 17.50 |

Test statistic: $\chi^2=\sum\sum\dfrac{(O_{ij}-E_{ij})^2}{E_{ij}}$ with $(r-1)(c-1)=(3-1)(3-1)=4$ d.f.

Calculated value: $\chi^2=17.50$.

Level of significance and critical value: $\alpha=0.05$, $\chi^2_{0.05,4}=9.49$. Critical region: $\chi^2>9.49$.

Decision: $17.50>9.49$, so we reject $H_0$.

Comment: There is a significant relationship (association) between the educational attainment and the job performance of these employees.

> [!success] Answer
> $\chi^2=17.5>9.49$ ⇒ reject $H_0$; educational attainment and job performance are associated.

Concept: [[S9 Chi-Square Tests]]

## Q8(b) — One-way ANOVA: prices in three cities (20 marks)

Hypothesis: $H_0:\mu_A=\mu_B=\mu_C$ (no difference in mean price) against $H_1$: at least two means differ.

| | City A | City B | City C |
|---|---|---|---|
| | 15 | 23 | 19 |
| | 18 | 19 | 16 |
| | 23 | 18 | 22 |
| | 24 | 24 | 31 |
| Total $T_i$ | 80 | 84 | 88 |
| $n_i$ | 4 | 4 | 4 |
| Mean | 20 | 21 | 22 |

Grand total $G=252$, $N=12$.

Correction term: $CT=\dfrac{G^2}{N}=\dfrac{252^2}{12}=5292$.

$\sum\sum x^2=15^2+18^2+23^2+24^2+23^2+19^2+18^2+24^2+19^2+16^2+22^2+31^2=5506$.

Total SS: $S_T=5506-5292=214$.

Between-cities SS: $S_B=\dfrac{80^2+84^2+88^2}{4}-5292=\dfrac{21200}{4}-5292=5300-5292=8$.

Within (error) SS: $S_W=S_T-S_B=214-8=206$.

| Source | d.f. | SS | MS | $F$ |
|---|---|---|---|---|
| Between cities | $k-1=2$ | 8 | 4.000 | $\frac{4}{22.889}=0.175$ |
| Within (error) | $N-k=9$ | 206 | 22.889 | |
| Total | 11 | 214 | | |

Level of significance: $\alpha=0.05$; critical value $F_{0.05}(2,9)=4.26$.

Decision: $F=0.175<4.26$, so we do not reject $H_0$.

Comment: There is no significant difference in the prices charged for the commodity in the three cities.

> [!success] Answer
> $F=0.175<4.26$ ⇒ no significant difference among the mean prices of the three cities.

Concept: [[S10 ANOVA One-Way and Two-Way]]

---

Home: [[index]] · Other paper: [[TF 2022-23 Solutions]] · All past questions: [[TF Question Map]]
