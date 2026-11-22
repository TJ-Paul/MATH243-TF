---
title: "P9 · Uniform, Exponential and Other Continuous Distributions"
tags: [math243, probability, exponential, uniform, continuous-distributions]
---

# P9 · Exponential and Uniform: Problems First

> [!abstract] Why this matters for the TF
> Exponential waiting times appear in four of the five papers: fire-station calls (2019-20 Q8(b), 25 marks), the DVD component (2022-23 Q1(c)), $Y=3X-2$ (2022-23 Q2(b)) and the radar speeders (2023-24 Q2(a)).
>
> These questions are almost pure calculation, so they are safe marks once you handle units correctly.
>
> The 2022-23 and 2023-24 parts are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]].

## Core tools (memorize)

> [!important] Memorize: Exponential (mean $\beta$, rate $\lambda=1/\beta$)
> **Density** ($x>0$)
>
> $$
> f(x)=\frac1\beta e^{-x/\beta}=\lambda e^{-\lambda x}
> $$
>
> **CDF**
>
> Use for "fails before / within $x$".
>
> $$
> F(x)=1-e^{-x/\beta}
> $$
>
> **Survival**
>
> Use for "lasts more than $x$".
>
> $$
> P(X>x)=e^{-x/\beta}
> $$
>
> **Mean**
>
> $$
> E(X)=\beta=\frac1\lambda
> $$
>
> **Variance**
>
> $$
> \mathrm{Var}(X)=\beta^2=\frac1{\lambda^2}
> $$
>
> **Memoryless**
>
> $$
> P(X>s+t\mid X>s)=P(X>t)
> $$
>
> **Poisson link**
>
> If events occur at rate $\lambda$, the waiting time is exponential with rate $\lambda$, and
>
> $$
> P(\text{no event in time } t)=e^{-\lambda t}
> $$

> [!important] Memorize: Uniform on $[A,B]$
> **Density**
>
> $$
> f(x)=\frac{1}{B-A}
> $$
>
> **Mean**
>
> $$
> \mu=\frac{A+B}{2}
> $$
>
> **Variance**
>
> $$
> \sigma^2=\frac{(B-A)^2}{12}
> $$
>
> **Probability**
>
> $$
> P(c<X<d)=\frac{d-c}{B-A}
> $$

![[m243-exponential.png]]

> [!tip] Identify the parameter first
> $\frac{1}{2000}e^{-x/2000}$ means mean $\beta=2000$.
>
> $8e^{-8x}$ or $F(x)=1-e^{-8x}$ means rate $\lambda=8$, mean $\frac18$.
>
> Once you know $\beta$, every answer follows from the box.

> [!warning] Units, units, units
> Mixing units is the number-one error.
>
> If the rate is per day and the question says 15 minutes, convert: 15 minutes $=\frac{1}{96}$ day.
>
> If the CDF is in hours and the question says 12 minutes, use $x=0.2$.
>
> Write the conversion in your answer.

## Theory the TF may ask (minimal)

**CDF from the pdf** ($x>0$):

$$
\begin{aligned}
F(x)&=\int_0^x\frac1\beta e^{-t/\beta}\,dt\\
&=\Big[-e^{-t/\beta}\Big]_0^x\\
&=1-e^{-x/\beta}
\end{aligned}
$$

**Mean and variance.** These follow from the integral

$$
\int_0^\infty x^n e^{-x/\beta}\,dx=n!\,\beta^{n+1}
$$

$$
E(X)=\beta
$$

$$
E(X^2)=2\beta^2
$$

$$
\mathrm{Var}(X)=2\beta^2-\beta^2=\beta^2
$$

**Memoryless property:**

$$
\begin{aligned}
P(X>s+t\mid X>s)&=\frac{P(X>s+t)}{P(X>s)}\\
&=\frac{e^{-(s+t)/\beta}}{e^{-s/\beta}}\\
&=e^{-t/\beta}=P(X>t)
\end{aligned}
$$

The **$\chi^2$, $t$ and $F$** distributions are only needed as tables for tests.

$\chi^2$ (non-negative, right-skewed) is used for goodness-of-fit and contingency tests.

$t$ (like $Z$ but with heavier tails) is used for small-sample means.

$F$ (a ratio of variances) is used for comparing variances and for ANOVA.

See [[S8 Hypothesis Testing Concepts and z t Tests]], [[S9 Chi-Square Tests]] and [[S10 ANOVA One-Way and Two-Way]].

---

## Problem types you will face

### Type 1 — Find the CDF from the pdf, then probabilities

**Recognise it:** "find the cumulative distribution function", "probability it lasts more than ... / fails before ...".

**Recipe:**

1. Integrate to get $F(x)=1-e^{-x/\beta}$ (state $F(x)=0$ for $x<0$).
2. Use the rules below.

$$
P(X\le a)=F(a)
$$

$$
P(X>a)=1-F(a)
$$

$$
P(a<X<b)=F(b)-F(a)
$$

> [!example] Practice 1 (TF style, like 2022-23 Q1(c))
> **Given.** A component's life in years has $f(x)=\frac13e^{-x/3}$, $x>0$. Find the CDF, $P(X>6)$ and $P(1<X<4)$.
>
> **Step 1 — CDF.** For $x\ge0$ (and $F(x)=0$ for $x<0$):
>
> $$
> F(x)=\int_0^x\frac13e^{-t/3}\,dt=1-e^{-x/3}
> $$
>
> **Step 2 — More than 6 years.**
>
> $$
> P(X>6)=e^{-6/3}=e^{-2}=0.1353
> $$
>
> **Step 3 — Between 1 and 4 years.**
>
> $$
> \begin{aligned}
> P(1<X<4)&=F(4)-F(1)\\
> &=e^{-1/3}-e^{-4/3}\\
> &=0.7165-0.2636=0.4529
> \end{aligned}
> $$
>
> **Answer.** $F(x)=1-e^{-x/3}$; **0.1353**; **0.4529**.

> [!example] Practice 2 (TF style, like 2023-24 Q2(a)) — CDF given, unit change
> **Given.** The waiting time in hours between buses has CDF $F(x)=1-e^{-5x}$, $x\ge0$. Find the probability of waiting less than 6 minutes, using the CDF and then the pdf.
>
> **Step 1 — Convert units.** 6 minutes $=0.1$ hour.
>
> **Step 2 — Using the CDF.**
>
> $$
> P(X<0.1)=1-e^{-0.5}=0.3935
> $$
>
> **Step 3 — Using the pdf.**
>
> $$
> f(x)=F'(x)=5e^{-5x}
> $$
>
> $$
> \int_0^{0.1}5e^{-5x}\,dx=\big[-e^{-5x}\big]_0^{0.1}=1-e^{-0.5}=0.3935
> $$
>
> **Answer.** $\mathbf{0.3935}$; both methods agree.

---

### Type 2 — Lifetimes with a given mean

> [!example] Practice 3 (TF style)
> **Given.** The life of a battery is exponential with mean 5 years. Find the probability that it (i) fails within 2 years, (ii) lasts more than 8 years.
>
> **Step 1 — (i) Fails within 2 years.**
>
> $$
> P(X\le2)=1-e^{-2/5}=1-0.6703=0.3297
> $$
>
> **Step 2 — (ii) Lasts more than 8 years.**
>
> $$
> P(X>8)=e^{-8/5}=0.2019
> $$
>
> **Answer.** (i) **0.3297**, (ii) **0.2019**.

---

### Type 3 — Memoryless questions

**Recognise it:** "it has already worked for 500 hours", "no call so far, 15 minutes to go".

**Recipe:** the past does not matter; answer as if starting fresh.

> [!example] Practice 4 (TF style)
> **Given.** A bulb's life is exponential with mean 1000 hours. It has already burned for 500 hours. Find the probability that it lasts at least another 1000 hours.
>
> **Step 1 — Apply the memoryless property.**
>
> $$
> P(X>1500\mid X>500)=P(X>1000)
> $$
>
> **Step 2 — Compute.**
>
> $$
> P(X>1000)=e^{-1000/1000}=e^{-1}=0.3679
> $$
>
> **Answer.** $\mathbf{0.3679}$.

---

### Type 4 — Rate of events: "no event in a period", several periods

**Recipe:**

1. Use $P(\text{no event in time } t)=e^{-\lambda t}$, with $\lambda t$ in matching units.
2. For several non-overlapping periods, multiply (independence).

> [!example] Past TF 2019-20 Q8(b) (25 marks) — calls to a fire station
> **Given.** The rate is $\lambda=1.8$ calls per day (equivalently $0.075$ per hour).
>
> **Step 1 — (i) A call within the next 15 minutes.** 15 minutes $=\frac{1}{96}$ day.
>
> $$
> \begin{aligned}
> P\left(T\le\tfrac{1}{96}\right)&=1-e^{-1.8/96}\\
> &=1-e^{-0.01875}\\
> &=0.0186
> \end{aligned}
> $$
>
> **Step 2 — (ii) No call so far, 15 minutes left.** By the memoryless property the answer is the same: $\mathbf{0.0186}$.
>
> **Step 3 — (iii) No calls in a 10-hour shift.** Mean number of calls in the shift:
>
> $$
> 1.8\times\frac{10}{24}=0.75
> $$
>
> $$
> P(\text{no call})=e^{-0.75}=0.4724
> $$
>
> **Step 4 — (iv) No calls in four successive shifts.** Non-overlapping shifts are independent.
>
> $$
> P=(e^{-0.75})^4=e^{-3}=0.0498
> $$
>
> **Step 5 — (v) In 10% of shifts there is a call in the first $x$ hours.**
>
> $$
> 1-e^{-0.075x}=0.1
> $$
>
> $$
> x=\frac{-\ln0.9}{0.075}=\frac{0.10536}{0.075}=1.40 \text{ hours}
> $$
>
> **Answer.** (i) **0.0186**, (ii) **0.0186**, (iii) **0.4724**, (iv) **0.0498**, (v) **1.4 hours**.

> [!example] Practice 5 (TF style) — website errors
> **Given.** Errors occur on a website at 0.6 per day. Find (i) the probability of no error in a 5-day week, (ii) the probability of at least one error on each of 3 given days.
>
> **Step 1 — (i) No error in 5 days.**
>
> $$
> e^{-0.6\times5}=e^{-3}=0.0498
> $$
>
> **Step 2 — (ii) At least one error on one day.**
>
> $$
> P(\text{at least one})=1-e^{-0.6}=0.4512
> $$
>
> **Step 3 — Three independent days.**
>
> $$
> (0.4512)^3=0.0918
> $$
>
> **Answer.** (i) **0.0498**, (ii) **0.0918**.

> [!example] Practice 6 (TF style) — customers
> **Given.** Customers arrive at 4 per hour. Find the probability that the time to the next arrival is (i) more than 30 minutes, (ii) between 10 and 20 minutes.
>
> **Step 1 — Rate in minutes.**
>
> $$
> \lambda=\frac{4}{60}=\frac1{15}\text{ per minute},\qquad \beta=15 \text{ minutes}
> $$
>
> **Step 2 — (i) More than 30 minutes.**
>
> $$
> P(T>30)=e^{-30/15}=e^{-2}=0.1353
> $$
>
> **Step 3 — (ii) Between 10 and 20 minutes.**
>
> $$
> \begin{aligned}
> P(10<T<20)&=e^{-10/15}-e^{-20/15}\\
> &=0.5134-0.2636\\
> &=0.2498
> \end{aligned}
> $$
>
> **Answer.** (i) **0.1353**, (ii) **0.2498**.

---

### Type 5 — Solve for $x$ given a percentage (percentile, median)

**Recipe:** set $1-e^{-x/\beta}=p$ and take logs.

$$
x=-\beta\ln(1-p)
$$

> [!example] Practice 7 (TF style)
> **Given.** Component life is exponential with mean 400 hours. Find (i) the time by which 20% of components fail, (ii) the median life.
>
> **Step 1 — (i) 20% fail.**
>
> $$
> x=-400\ln0.8=89.26 \text{ hours}
> $$
>
> **Step 2 — (ii) Median.**
>
> $$
> 1-e^{-x/400}=0.5
> $$
>
> $$
> x=400\ln2=277.26 \text{ hours}
> $$
>
> **Answer.** (i) **89.26 hours**, (ii) **277.26 hours**. (The median is less than the mean because the distribution is skewed right.)

---

### Type 6 — Mean and variance of $Y=aX+b$

**Recipe:**

1. Identify $E(X)=\beta$ and $\mathrm{Var}(X)=\beta^2$.
2. Apply the linear rules (the constant $b$ does not affect variance). See [[P5 Expectation Variance Covariance and Chebyshev]].

$$
E(Y)=a\,E(X)+b
$$

$$
\mathrm{Var}(Y)=a^2\,\mathrm{Var}(X)
$$

> [!example] Practice 8 (TF style, like 2022-23 Q2(b))
> **Given.** Processing time is $Y=2X+5$ minutes, where $f(x)=\frac13e^{-x/3}$, $x>0$. Find $E(Y)$, $\mathrm{Var}(Y)$ and $P(Y>11)$.
>
> **Step 1 — Moments of $X$.** $\beta=3$.
>
> $$
> E(X)=3
> $$
>
> $$
> \mathrm{Var}(X)=9
> $$
>
> **Step 2 — Mean of $Y$.**
>
> $$
> E(Y)=2(3)+5=11
> $$
>
> **Step 3 — Variance of $Y$.**
>
> $$
> \mathrm{Var}(Y)=2^2(9)=36
> $$
>
> **Step 4 — $P(Y>11)$.** $Y>11$ means $X>3$.
>
> $$
> P(Y>11)=P(X>3)=e^{-1}=0.3679
> $$
>
> **Answer.** $E(Y)=\mathbf{11}$, $\mathrm{Var}(Y)=\mathbf{36}$, $P(Y>11)=\mathbf{0.3679}$.

---

### Type 7 — Uniform distribution

> [!example] Practice 9 (TF style) — conference room
> **Given.** A reservation lasts $X\sim U[0,4]$ hours.
>
> **Step 1 — Probability.**
>
> $$
> P(X\ge3)=\frac{4-3}{4}=0.25
> $$
>
> **Step 2 — Mean.**
>
> $$
> \mu=\frac{0+4}{2}=2 \text{ hours}
> $$
>
> **Step 3 — Variance.**
>
> $$
> \sigma^2=\frac{16}{12}=\frac43
> $$
>
> **Answer.** **0.25**, mean **2 hours**, variance **4/3**.

> [!example] Practice 10 (TF style) — bus wait
> **Given.** A bus comes every 20 minutes, and your waiting time is uniform on $[0,20]$. Find $P(\text{wait}>5)$, the mean and the variance.
>
> **Step 1 — Probability.**
>
> $$
> P(X>5)=\frac{20-5}{20}=0.75
> $$
>
> **Step 2 — Mean.**
>
> $$
> \mu=10 \text{ minutes}
> $$
>
> **Step 3 — Variance.**
>
> $$
> \sigma^2=\frac{400}{12}=33.33
> $$
>
> **Answer.** **0.75**, mean **10 minutes**, variance **33.33**.

---

## Extra practice

> [!question]- Answers (try first)
> **1.** Mean and variance of $f(x)=\frac1{500}e^{-x/500}$?
>
> *Answer:* 500 and 250,000.
>
> **2.** Calls arrive at 2 per hour; probability of no call in 30 minutes?
>
> *Answer:* $e^{-1}=0.3679$.
>
> **3.** $f(x)=\frac15e^{-x/5}$ and $Y=4X-3$: $E(Y)$ and $\mathrm{Var}(Y)$?
>
> *Answer:* 17 and 400.
>
> **4.** Life is exponential with mean 2500 hours; $P(\text{fails before }1000)$?
>
> *Answer:* $1-e^{-0.4}=0.3297$.
>
> **5.** Mean of $U(2,10)$?
>
> *Answer:* 6.
>
> **6.** Which distribution is used to compare two variances?
>
> *Answer:* $F$.

Previous: [[P8 Normal Distribution]] · Next: [[S1 Introduction to Statistics Data and Sampling]] · Home: [[index]]
