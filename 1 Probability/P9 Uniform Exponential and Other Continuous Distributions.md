---
title: "P9 · Uniform, Exponential and Other Continuous Distributions"
tags: [math243, probability, exponential, uniform, continuous-distributions]
---

# P9 · Uniform, Exponential and Other Continuous Distributions

> [!abstract] Why this matters for the term final
> The exponential distribution is examined almost every year, often hidden inside a "density function" question. 2019-20 Q8(b) (25 marks) was a five-part exponential question on fire-station calls including the ==memoryless property==; 2022-23 Q1(c) gave the DVD-player lifetime density $\frac{1}{2000}e^{-x/2000}$ and asked for the CDF and two probabilities; 2022-23 Q2(b) asked for the mean and variance of $Y=3X-2$ when $X$ is exponential with mean 4; and 2023-24 Q2(a) used the exponential CDF $1-e^{-8x}$. The 2022-23 and 2023-24 versions are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]]. The chi-square, $t$ and $F$ distributions introduced briefly here are the tools of [[S8 Hypothesis Testing Concepts and z t Tests]], [[S9 Chi-Square Tests]] and [[S10 ANOVA One-Way and Two-Way]].

---

## 1. The continuous uniform distribution

The uniform distribution describes a variable that is equally likely to fall anywhere in an interval $[A,B]$. Its density is flat, like a rectangle.

> [!important] Memorize: Uniform distribution
> $$
> f(x;A,B)=\frac{1}{B-A},\quad A\le x\le B,\qquad \mu=\frac{A+B}{2},\qquad \sigma^2=\frac{(B-A)^2}{12}.
> $$
> Probabilities are simply proportional to length: $P(c<X<d)=\dfrac{d-c}{B-A}$ for $A\le c<d\le B$.

**Worked example (Walpole 6.1).** A conference room can be reserved for at most 4 hours, and the length of a reservation $X$ is uniform on $[0,4]$. The probability that a conference lasts at least 3 hours is $P(X\ge3)=\frac{4-3}{4}=\frac14$. The mean length is $\frac{0+4}{2}=2$ hours and the variance is $\frac{16}{12}=\frac43$.

---

## 2. The exponential distribution

The exponential distribution models ==waiting times and lifetimes==: the time between calls, the time until a component fails, the time between speeders passing a radar.

> [!important] Memorize: Exponential distribution
> $X$ is exponential with mean $\beta$ (equivalently rate $\lambda=1/\beta$) if
> $$
> f(x)=\frac{1}{\beta}e^{-x/\beta}=\lambda e^{-\lambda x},\qquad x>0,
> $$
> and $0$ elsewhere. Its CDF and "survival" probability are
> $$
> F(x)=P(X\le x)=1-e^{-x/\beta},\qquad P(X>x)=e^{-x/\beta}.
> $$
> Its mean and variance are
> $$
> \mu=\beta=\frac1\lambda,\qquad \sigma^2=\beta^2=\frac1{\lambda^2}.
> $$

![[m243-exponential.png]]

> [!tip] Exam trick: recognise the parameter
> If the density is written $\frac{1}{2000}e^{-x/2000}$, the mean is $\beta=2000$. If it is written $8e^{-8x}$ (or the CDF is $1-e^{-8x}$), the rate is $\lambda=8$ and the mean is $\frac18$. Always identify $\beta$ first, then everything else follows from the boxed formulas.

### Deriving the CDF, mean and variance

The CDF comes from integrating the pdf:

$$
F(x)=\int_0^x\frac1\beta e^{-t/\beta}dt=\Big[-e^{-t/\beta}\Big]_0^x=1-e^{-x/\beta},\qquad x>0 .
$$

For the mean, integrate by parts (or use $\int_0^\infty x^{n}e^{-x/\beta}dx=n!\,\beta^{n+1}$):

$$
E(X)=\int_0^\infty x\cdot\frac1\beta e^{-x/\beta}dx=\frac1\beta\cdot1!\,\beta^2=\beta,\qquad E(X^2)=\frac1\beta\cdot2!\,\beta^3=2\beta^2 .
$$

So $\mathrm{Var}(X)=2\beta^2-\beta^2=\beta^2$.

### The memoryless property

> [!important] Memorize: Memoryless (lack of memory) property
> For an exponential variable and any $s,t>0$,
> $$
> P(X>s+t\mid X>s)=P(X>t).
> $$
> In words, ==if you have already waited $s$ units without the event happening, the chance of waiting a further $t$ units is the same as if you had just started==. The past does not matter.

The proof uses the definition of conditional probability. The event $\{X>s+t\}$ is contained in $\{X>s\}$, so

$$
P(X>s+t\mid X>s)=\frac{P(X>s+t)}{P(X>s)}=\frac{e^{-(s+t)/\beta}}{e^{-s/\beta}}=e^{-t/\beta}=P(X>t).
$$

### Relation to the Poisson process

If events occur according to a Poisson process with rate $\lambda$ per unit time (see [[P7 Poisson Distribution and Poisson Process]]), then the waiting time $T$ until the next event is exponential with rate $\lambda$. The reason is that "the wait is longer than $t$" means "no events in an interval of length $t$", and the Poisson probability of zero events is

$$
P(T>t)=P(\text{0 events in } t)=\frac{e^{-\lambda t}(\lambda t)^0}{0!}=e^{-\lambda t}.
$$

So the Poisson counts *how many* events happen, and the exponential measures *how long* we wait between them. This link is exactly what 2019-20 Q8(b) parts (iii) and (iv) test.

### Linear functions of an exponential variable

**Fresh practice (same shape as 2022-23 Q2(b)).** The time to process an order, in minutes, is $Y=2X+5$, where $X$ has density $f(x)=\frac13e^{-x/3}$ for $x>0$. Find the mean and variance of $Y$, and $P(Y>11)$.

Here $X$ is exponential with $\beta=3$, so $E(X)=3$ and $\mathrm{Var}(X)=9$. By the linear rules in [[P5 Expectation Variance Covariance and Chebyshev]],

$$
E(Y)=2E(X)+5=2(3)+5=11,\qquad \mathrm{Var}(Y)=2^2\,\mathrm{Var}(X)=4(9)=36 .
$$

For the probability, translate the event back to $X$: $Y>11$ means $2X+5>11$, so $X>3$, and $P(X>3)=e^{-3/3}=e^{-1}=0.3679$.

---

## 3. Past TF question solved

> [!example] Past TF 2019-20 Q8(b) (25 marks) — calls to a fire station
> The time between calls is exponential with rate $\lambda=1.8$ calls per day, so the mean time between calls is $\frac{1}{1.8}$ day. Because the rate is per **day**, every time must be converted into days (or the rate into hours: $1.8/24=0.075$ per hour).
>
> **(i) A call within the next 15 minutes after clocking on.** Fifteen minutes is $\frac{15}{1440}=\frac1{96}$ day.
> $$
> P\left(T\le\tfrac{1}{96}\right)=1-e^{-1.8/96}=1-e^{-0.01875}=0.0186 .
> $$
> **(ii) No call so far, 15 minutes left in the shift.** By the memoryless property, the time already waited does not matter, so the answer is the same as in (i): $\mathbf{0.0186}$.
>
> **(iii) No calls in a 10-hour shift.** Ten hours is $\frac{10}{24}$ day. "No calls" means the waiting time exceeds the shift, equivalently zero Poisson events with mean $1.8\times\frac{10}{24}=0.75$:
> $$
> P(\text{no call})=e^{-0.75}=0.4724 .
> $$
> **(iv) No calls in four successive shifts.** The shifts do not overlap, so in a Poisson process they are independent:
> $$
> P=(e^{-0.75})^4=e^{-3}=0.0498 .
> $$
> **(v) "In 10% of shifts there is a call in the first $x$ hours."** We need $P(T\le x)=0.1$ with the rate $0.075$ per hour:
> $$
> 1-e^{-0.075x}=0.1\ \Rightarrow\ e^{-0.075x}=0.9\ \Rightarrow\ x=\frac{-\ln 0.9}{0.075}=\frac{0.10536}{0.075}=1.40 .
> $$
> So $x\approx\mathbf{1.4}$ hours.

> [!warning] Common mistake
> Mixing units is the number-one error in exponential questions. Write the rate and the time in the same unit before substituting, and say so in your answer ("15 minutes = 1/96 day").

---

## 4. Other continuous distributions you must recognise

These three distributions are mainly used as **sampling distributions** for test statistics. You do not need to memorize their density formulas, but you must know their shapes, their parameters (degrees of freedom) and when each is used.

> [!important] Memorize: Chi-square, $t$ and $F$
> The **chi-square distribution** $\chi^2_v$ with $v$ degrees of freedom is the distribution of a sum of $v$ squared independent standard normal variables. It takes only non-negative values, is skewed to the right, has mean $v$ and variance $2v$, and becomes more symmetric as $v$ grows. It is used for goodness-of-fit and contingency-table tests and for the sample variance, since $\frac{(n-1)S^2}{\sigma^2}\sim\chi^2_{n-1}$.
>
> The **$t$ distribution** $t_v$ is bell-shaped and symmetric about 0 like $Z$, but it has heavier tails, so its critical values are larger than those of $Z$. As $v\to\infty$ it approaches the standard normal. It is used when $\sigma$ is unknown and the sample is small: $T=\frac{\bar X-\mu}{S/\sqrt n}\sim t_{n-1}$.
>
> The **$F$ distribution** $F_{v_1,v_2}$ is the ratio of two independent chi-square variables, each divided by its degrees of freedom. It takes only non-negative values and is skewed right. It is used to compare two variances ($F=S_1^2/S_2^2$) and in ANOVA ($F=\text{MS}_{\text{between}}/\text{MS}_{\text{within}}$).

The **gamma distribution** is a generalisation of the exponential (the exponential is gamma with $\alpha=1$), and the chi-square is gamma with $\alpha=v/2$ and $\beta=2$. This is mentioned in the lecture on other distributions for completeness.

---

> [!question]- Self-check
> **1.** Mean and variance of $f(x)=\frac1{500}e^{-x/500}$? *500 and 250,000.*
> **2.** State the memoryless property. *$P(X>s+t\mid X>s)=P(X>t)$.*
> **3.** Calls arrive at 2 per hour; probability of no call in 30 minutes? *$e^{-1}=0.3679$.*
> **4.** Mean of $U(2,10)$? *6.*
> **5.** Which distribution compares two variances? *The $F$ distribution.*

Previous: [[P8 Normal Distribution]] · Next: [[S1 Introduction to Statistics Data and Sampling]] · Home: [[index]]
