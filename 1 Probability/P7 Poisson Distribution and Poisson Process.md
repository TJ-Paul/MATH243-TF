---
title: "P7 · Poisson Distribution and Poisson Process"
tags: [math243, probability, poisson]
---

# P7 · Poisson Distribution: Problems First

> [!abstract] Why this matters for the TF
> Poisson appears in every recent paper: glass bubbles (2019-20 Q8(a)), tax-return errors plus two derivations (2022-23 Q3(a),(b)), and switchboard calls plus the binomial–Poisson relation (2023-24 Q3(b)).
>
> The numerical parts are quick; the derivations below are pure memory marks.
>
> The 2022-23 and 2023-24 parts are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]].

## Core tools (memorize)

> [!important] Memorize: Poisson
> **Poisson pmf** ($x=0,1,2,\dots$)
>
> $$
> p(x;\mu)=\frac{e^{-\mu}\mu^x}{x!}
> $$
>
> **Mean and variance are equal**
>
> $$
> E(X)=\mu
> $$
>
> $$
> \mathrm{Var}(X)=\mu
> $$
>
> **Mean for a rate (use for counts in time or space)**
>
> ==Counts of events in time or space at an average rate==: the rate times the length of the interval.
>
> $$
> \mu=\lambda t
> $$
>
> **Mean for approximating a binomial (large $n$, small $p$)**
>
> $$
> \mu=np
> $$

> [!tip] Fast calculation
> Use the recursion, starting from $p(0)=e^{-\mu}$:
>
> $$
> p(x)=p(x-1)\cdot\frac{\mu}{x}
> $$
>
> It is faster and safer than recomputing every factorial.

---

## Theory the TF actually asks (learn word for word)

### Bernoulli process vs Poisson process (2022-23 Q3(a))

> [!important] Memorize: Bernoulli process
> A **Bernoulli process** is a sequence of trials with three properties.
>
> 1. Each trial has only two outcomes (success or failure).
> 2. The probability of success $p$ stays the same from trial to trial.
> 3. The trials are independent.
>
> The number of successes in $n$ trials of a Bernoulli process is binomial, $b(x;n,p)$.

> [!important] Memorize: Poisson process
> A **Poisson process** describes events occurring randomly in continuous time or space (calls at a switchboard, accidents, flaws along a cable). It has three properties.
>
> 1. ==The numbers of events in non-overlapping intervals are independent== (no memory).
> 2. ==The probability of exactly one event in a very short interval is proportional to the length of the interval== and does not depend on events outside it.
> 3. ==The probability of two or more events in a very short interval is negligible==.
>
> The number of events $X$ in an interval of length $t$ is then Poisson with mean $\mu=\lambda t$, where $\lambda$ is the average rate per unit time.

A Poisson process can be viewed as a Bernoulli process in which time is cut into a huge number of tiny pieces. Each piece is a trial with a tiny chance of containing an event.

### Deriving Poisson from binomial (2022-23 Q3(a), 2023-24 Q3(b) "establish the relation")

> [!important] Memorize: Derivation
> Let $X\sim b(x;n,p)$ and let $n\to\infty$, $p\to0$ with $np=\mu$ fixed.
>
> **Step 1 — Put $p=\mu/n$.**
>
> $$
> b(x;n,p)=\frac{n!}{x!\,(n-x)!}\left(\frac{\mu}{n}\right)^x\left(1-\frac{\mu}{n}\right)^{n-x}
> $$
>
> **Step 2 — Rearrange into four factors.**
>
> $$
> b(x;n,p)=\frac{\mu^x}{x!}\cdot\frac{n(n-1)\cdots(n-x+1)}{n^x}\cdot\left(1-\frac{\mu}{n}\right)^{n}\cdot\left(1-\frac{\mu}{n}\right)^{-x}
> $$
>
> **Step 3 — Take the limit of each factor** as $n\to\infty$ with $x$ and $\mu$ fixed.
>
> The second factor is $1\cdot(1-\frac1n)\cdots(1-\frac{x-1}{n})$, so
>
> $$
> \frac{n(n-1)\cdots(n-x+1)}{n^x}\to1
> $$
>
> The third factor:
>
> $$
> \left(1-\frac{\mu}{n}\right)^{n}\to e^{-\mu}
> $$
>
> The last factor:
>
> $$
> \left(1-\frac{\mu}{n}\right)^{-x}\to1
> $$
>
> **Step 4 — Result.** For $x=0,1,2,\dots$
>
> $$
> \lim_{n\to\infty}b(x;n,p)=\frac{e^{-\mu}\mu^x}{x!}=p(x;\mu)
> $$
>
> ==The Poisson distribution is the limiting form of the binomial when $n$ is large, $p$ is small and $np=\mu$ is moderate.==
>
> It is a valid distribution because
>
> $$
> \sum_x \frac{e^{-\mu}\mu^x}{x!}=e^{-\mu}e^{\mu}=1
> $$

**Relation in words.** Both count successes: the binomial in a fixed number of trials, the Poisson in a continuous interval.

The binomial has mean $np$ and variance $npq$. As $p\to0$, $q\to1$, so the variance $npq\to np$. That is why the Poisson has equal mean and variance.

In practice, approximate the binomial by the Poisson when $n\ge20$ and $p\le0.05$, using $\mu=np$.

### Mean and variance (2022-23 Q3(b) "calculate the variance")

> [!important] Memorize: Mean
> $$
> \begin{aligned}
> E(X)&=\sum_{x=0}^{\infty}x\,\frac{e^{-\mu}\mu^x}{x!}\\
> &=\mu e^{-\mu}\sum_{x=1}^{\infty}\frac{\mu^{x-1}}{(x-1)!}\\
> &=\mu e^{-\mu}e^{\mu}\\
> &=\mu
> \end{aligned}
> $$

> [!important] Memorize: Variance (via $E[X(X-1)]$)
> **Step 1 — Find $E[X(X-1)]$.**
>
> $$
> \begin{aligned}
> E[X(X-1)]&=\sum_{x=2}^{\infty}x(x-1)\,\frac{e^{-\mu}\mu^x}{x!}\\
> &=\mu^2e^{-\mu}\sum_{x=2}^{\infty}\frac{\mu^{x-2}}{(x-2)!}\\
> &=\mu^2
> \end{aligned}
> $$
>
> **Step 2 — Find $E(X^2)$.**
>
> $$
> E(X^2)=E[X(X-1)]+E(X)=\mu^2+\mu
> $$
>
> **Step 3 — Variance.**
>
> $$
> \mathrm{Var}(X)=E(X^2)-[E(X)]^2=\mu^2+\mu-\mu^2=\mu
> $$

---

## Problem types you will face

### Type 1 — A rate per unit time, scaled to the interval asked

**Recognise it:** "on average 0.5 calls per minute ... in a five-minute period".

**Recipe:**

1. Scale the rate to the interval (in matching units):

$$
\mu=\text{rate}\times\text{interval length}
$$

2. Use the Poisson formula.

> [!warning] Common mistake: scaling the rate
> If calls arrive at 0.5 per minute and the question is about 5 minutes, $\mu=2.5$, not 0.5.
>
> If accidents happen 3 times per month and the question is about two months, $\mu=6$.

> [!example] Practice 1 (TF style, like 2023-24 Q3(b)) — server requests
> **Given.** Requests reach a server at an average rate of 2 per minute. Find the probability that exactly 4 arrive in a 3-minute period.
>
> **Step 1 — Scale the rate.**
>
> $$
> \mu=2\times3=6
> $$
>
> **Step 2 — Poisson formula.**
>
> $$
> \begin{aligned}
> P(X=4)&=\frac{e^{-6}6^4}{4!}\\
> &=\frac{0.0024788\times1296}{24}\\
> &=0.1339
> \end{aligned}
> $$
>
> **Answer.** $\mathbf{0.1339}$.

> [!example] Practice 2 (TF style) — factory accidents
> **Given.** Accidents occur in a factory at an average of 3 per month. Find (i) the probability of no accident in a two-month period, (ii) the probability of at least 2 accidents in a month.
>
> **Step 1 — (i) Two months**, so $\mu=6$.
>
> $$
> P(X=0)=e^{-6}=0.0025
> $$
>
> **Step 2 — (ii) One month**, so $\mu=3$.
>
> $$
> \begin{aligned}
> P(X\ge2)&=1-e^{-3}(1+3)\\
> &=1-0.0498\times4\\
> &=0.8009
> \end{aligned}
> $$
>
> **Answer.** (i) **0.0025**, (ii) **0.8009**.

> [!example] Practice 3 (TF style) — typing errors
> **Given.** A typist makes on average 0.4 errors per page. Find the probability that a 5-page report has at most one error.
>
> **Step 1 — Scale the rate.**
>
> $$
> \mu=0.4\times5=2
> $$
>
> **Step 2 — At most one.**
>
> $$
> P(X\le1)=e^{-2}(1+2)=0.1353\times3=0.4060
> $$
>
> **Answer.** $\mathbf{0.4060}$.

---

### Type 2 — Poisson approximation to a binomial

**Recognise it:** "1 in every 1000 ...", a huge sample ($n$ in thousands), "find the probability that 6, 7 or 8 ..." or "fewer than 7".

**Recipe:**

1. State that $n$ is large and $p$ small.
2. Put $\mu=np$.
3. Add the required Poisson terms (use the recursion).

> [!example] Past TF 2019-20 Q8(a) (10 marks) — glass bubbles
> **Given.** On average 1 in 1000 items has bubbles, so $p=0.001$, with $n=8000$.
>
> **Step 1 — Justify the approximation.** Since $n$ is large and $p$ small, $X$ is approximately Poisson with
>
> $$
> \mu=np=8000\times0.001=8
> $$
>
> **Step 2 — "Fewer than 7" means $X\le6$.** Compute the terms:
>
> | $x$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
> |---|---|---|---|---|---|---|---|
> | $e^{-8}8^x/x!$ | 0.0003 | 0.0027 | 0.0107 | 0.0286 | 0.0573 | 0.0916 | 0.1221 |
>
> **Step 3 — Add.**
>
> $$
> P(X<7)=\sum_{x=0}^{6}\frac{e^{-8}8^x}{x!}=0.3134
> $$
>
> **Answer.** $\mathbf{0.3134}$: about a 31% chance that fewer than 7 of the 8000 items have bubbles.

> [!example] Practice 4 (TF style, like 2022-23 Q3(b)) — misprinted tickets
> **Given.** On average 1 ticket in 1000 is misprinted. If 5000 tickets are checked, find the probability that 3, 4 or 5 are misprinted.
>
> **Step 1 — Mean.**
>
> $$
> \mu=5000\times0.001=5
> $$
>
> **Step 2 — The terms (recursion).**
>
> $$
> p(3)=\frac{e^{-5}5^3}{3!}=0.1404
> $$
>
> $$
> p(4)=p(3)\cdot\frac54=0.1755
> $$
>
> $$
> p(5)=p(4)\cdot\frac55=0.1755
> $$
>
> **Step 3 — Add.**
>
> $$
> P(3\le X\le5)=0.1404+0.1755+0.1755=0.4913
> $$
>
> **Answer.** $\mathbf{0.4913}$.

> [!example] Practice 5 (TF style) — defective chips
> **Given.** A chip is defective with probability 0.002. In a batch of 1500 chips, find the probability of at least 2 defectives.
>
> **Step 1 — Mean.**
>
> $$
> \mu=1500\times0.002=3
> $$
>
> **Step 2 — At least 2.**
>
> $$
> P(X\ge2)=1-e^{-3}(1+3)=0.8009
> $$
>
> **Answer.** $\mathbf{0.8009}$. (The exact binomial gives 0.8012, so the approximation is excellent.)

---

### Type 3 — Find $\mu$ from a relation between probabilities

**Recognise it:** "if $P(X=1)=P(X=2)$, find the mean and SD".

**Recipe:**

1. Write both sides with the formula.
2. Cancel $e^{-\mu}$ and solve for $\mu$.
3. Then mean $=\mu$ and SD $=\sqrt\mu$.

> [!example] Practice 6 (TF style)
> **Given.** For a Poisson variable $P(X=1)=P(X=2)$. Find the mean, SD and $P(X\ge1)$.
>
> **Step 1 — Set up the equation.**
>
> $$
> e^{-\mu}\mu=\frac{e^{-\mu}\mu^2}{2}
> $$
>
> **Step 2 — Solve.**
>
> $$
> \mu=2
> $$
>
> **Step 3 — SD and probability.**
>
> $$
> \sigma=\sqrt2=1.4142
> $$
>
> $$
> P(X\ge1)=1-e^{-2}=0.8647
> $$
>
> **Answer.** Mean **2**, SD **1.4142**, $P(X\ge1)=\mathbf{0.8647}$.

> [!example] Practice 7 (TF style)
> **Given.** For a Poisson variable $3P(X=2)=2P(X=1)$. Find $\mu$ and $P(X=0)$.
>
> **Step 1 — Set up and cancel $e^{-\mu}$.**
>
> $$
> 3\cdot\frac{\mu^2}{2}=2\mu
> $$
>
> **Step 2 — Solve.**
>
> $$
> \mu=\frac43
> $$
>
> **Step 3 — $P(X=0)$.**
>
> $$
> P(X=0)=e^{-4/3}=0.2636
> $$
>
> **Answer.** $\mu=\mathbf{4/3}$, $P(X=0)=\mathbf{0.2636}$.

---

## Extra practice

> [!question]- Answers (try first)
> **1.** Calls arrive at 3 per hour. Probability of no call in 20 minutes?
>
> *Answer:* $\mu=1$, so $e^{-1}=0.3679$.
>
> **2.** 1 person in 500 has a rare blood type. Among 1000 donors, $P(\text{exactly } 3)$?
>
> *Answer:* $\mu=2$, so $e^{-2}2^3/6=0.1804$.
>
> **3.** Mean and variance of a Poisson with $\mu=4$?
>
> *Answer:* Both 4.
>
> **4.** Which limit is used in the derivation?
>
> *Answer:* $(1-\mu/n)^n\to e^{-\mu}$.
>
> **5.** Why compute $E[X(X-1)]$ for the variance?
>
> *Answer:* Because $x(x-1)$ cancels with $x!$, giving $\mu^2$ directly.

Previous: [[P6 Bernoulli Binomial Multinomial Hypergeometric Geometric]] · Next: [[P8 Normal Distribution]] · Home: [[index]]
