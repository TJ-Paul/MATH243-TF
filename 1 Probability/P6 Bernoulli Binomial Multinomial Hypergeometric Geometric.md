---
title: "P6 · Bernoulli, Binomial, Multinomial, Hypergeometric and Geometric"
tags: [math243, probability, binomial, discrete-distributions]
---

# P6 · Binomial Family: Problems First

> [!abstract] Why this matters for the TF
> A binomial-type story problem appears in almost every paper: lottery tickets and delegates (2021-22 Q6), diodes and Valium prescriptions (2020-21 Q6–Q7), and recovery from a blood disease (2023-24 Q3(c), solved in [[TF 2023-24 Solutions]]).
>
> These are quick, reliable marks once you can recognise the distribution and translate words like "at least" into $x$ values.

## Core tools (memorize)

> [!important] Memorize: the five distributions
> **Binomial**
>
> Use for a fixed number $n$ of independent trials, two outcomes, constant $p$.
>
> $$
> b(x;n,p)=\binom nx p^x q^{n-x}
> $$
>
> $$
> \mu=np
> $$
>
> $$
> \sigma^2=npq
> $$
>
> **Multinomial**
>
> Use when each trial has $k$ outcomes, with $\sum x_i=n$.
>
> $$
> P=\frac{n!}{x_1!\cdots x_k!}\,p_1^{x_1}\cdots p_k^{x_k}
> $$
>
> **Hypergeometric**
>
> Use when you draw $n$ without replacement from $N$ items containing $k$ successes.
>
> $$
> h(x)=\frac{\binom kx\binom{N-k}{n-x}}{\binom Nn}
> $$
>
> $$
> \mu=\frac{nk}{N}
> $$
>
> **Geometric**
>
> Use for "the first success is on trial $x$".
>
> $$
> g(x)=p\,q^{x-1}
> $$
>
> $$
> \mu=\frac1p
> $$
>
> **Negative binomial**
>
> Use for "the $k$-th success is on trial $x$".
>
> $$
> b^*(x;k,p)=\binom{x-1}{k-1}p^k q^{x-k}
> $$

> [!tip] Translating words into $x$ values
> "At least 10" is $1-P(X\le9)$.
>
> "From 3 to 8" is $P(X\le8)-P(X\le2)$.
>
> "At most 2" is $P(X\le2)$.
>
> "Exactly 5 die" when $X$ counts survivors out of 15 means exactly 10 survive.
>
> Always write one sentence saying what $X$ counts before you calculate.

## Theory the TF may ask (short)

Only the mean and variance of the binomial are ever needed, and a two-line argument is enough.

$X$ is the sum of $n$ independent Bernoulli variables $X_i$, each equal to 1 with probability $p$ and 0 with probability $q$.

**Each Bernoulli variable:**

$$
E(X_i)=p
$$

$$
\mathrm{Var}(X_i)=p-p^2=pq
$$

Means add, and for independent variables variances add, so:

**Binomial mean:**

$$
E(X)=np
$$

**Binomial variance:**

$$
\mathrm{Var}(X)=npq
$$

---

## Problem types you will face

### Type 1 — Binomial: "at least", "between", "exactly k fail"

**Recognise it:** a fixed number of people or items, each independently succeeding with the same probability.

**Recipe:**

1. Define $X$ and write $X\sim b(x;n,p)$.
2. Translate the words into $x$ values.
3. Add the needed terms (use the complement when it has fewer terms).

> [!example] Past TF 2021-22 Q6(a) (10 marks) — lottery tickets
> **Given.** Out of 500 tickets, 200 pay back at least their cost. You buy 5 tickets.
>
> **Step 1 — Define $X$.** Let $X$ be the number of tickets that win back at least their cost.
>
> $$
> p=\frac{200}{500}=0.4,\qquad q=0.6,\qquad n=5
> $$
>
> 5 is tiny compared with 500, so the tickets are treated as independent. We need $P(X\ge3)$.
>
> **Step 2 — The three terms.**
>
> $$
> P(X=3)=\binom53(0.4)^3(0.6)^2=10(0.064)(0.36)=0.2304
> $$
>
> $$
> P(X=4)=\binom54(0.4)^4(0.6)=0.0768
> $$
>
> $$
> P(X=5)=(0.4)^5=0.01024
> $$
>
> **Step 3 — Add.**
>
> $$
> P(X\ge3)=0.2304+0.0768+0.01024=0.3174
> $$
>
> **Answer.** $P(X\ge3)=\mathbf{0.3174}$.

> [!example] Practice 1 (TF style, like 2023-24 Q3(c)) — recovery
> **Given.** The probability that a patient recovers from an illness is 0.3. If 12 people have the illness, find the probability that (i) at least 8 recover, (ii) from 2 to 5 recover, (iii) exactly 4 die.
>
> **Step 1 — Define $X$.** Let $X$ = number who recover, $X\sim b(x;12,0.3)$.
>
> **Step 2 — (i) At least 8 recover.**
>
> $$
> P(X\ge8)=\sum_{x=8}^{12}\binom{12}{x}(0.3)^x(0.7)^{12-x}=0.0095
> $$
>
> **Step 3 — (ii) From 2 to 5 recover.**
>
> $$
> P(2\le X\le5)=P(X\le5)-P(X\le1)=0.7971
> $$
>
> **Step 4 — (iii) Exactly 4 die** means exactly 8 recover.
>
> $$
> \begin{aligned}
> P(X=8)&=\binom{12}{8}(0.3)^8(0.7)^4\\
> &=495\times0.00006561\times0.2401\\
> &=0.0078
> \end{aligned}
> $$
>
> **Answer.** (i) **0.0095**, (ii) **0.7971**, (iii) **0.0078**.

> [!example] Practice 2 (TF style) — defective items
> **Given.** 10% of the bolts made by a machine are defective. In a box of 10 bolts find the probability of (i) at most 2 defective, (ii) at least 2 defective, (iii) exactly 8 good bolts.
>
> **Step 1 — Define $X$.** Let $X$ = number of defectives, $X\sim b(x;10,0.1)$.
>
> **Step 2 — The first three terms.**
>
> $$
> P(0)=(0.9)^{10}=0.3487
> $$
>
> $$
> P(1)=10(0.1)(0.9)^9=0.3874
> $$
>
> $$
> P(2)=45(0.01)(0.9)^8=0.1937
> $$
>
> **Step 3 — (i) At most 2.**
>
> $$
> P(X\le2)=0.3487+0.3874+0.1937=0.9298
> $$
>
> **Step 4 — (ii) At least 2.** The complement is much shorter than adding 9 terms.
>
> $$
> P(X\ge2)=1-P(0)-P(1)=1-0.3487-0.3874=0.2639
> $$
>
> **Step 5 — (iii) 8 good** means 2 defective.
>
> $$
> P(X=2)=0.1937
> $$
>
> **Answer.** (i) **0.9298**, (ii) **0.2639**, (iii) **0.1937**.

> [!example] Practice 3 (TF style) — a new drug
> **Given.** A drug cures 70% of patients. It is given to 12 patients. Find (i) $P(\text{at least 9 cured})$, (ii) $P(4\le X\le7)$, (iii) $P(\text{exactly 3 not cured})$.
>
> **Step 1 — Define $X$.** $X$ = number cured, $X\sim b(x;12,0.7)$.
>
> **Step 2 — (i) At least 9.**
>
> $$
> P(9)=0.2397,\quad P(10)=0.1678,\quad P(11)=0.0712,\quad P(12)=0.0138
> $$
>
> $$
> P(X\ge9)=0.2397+0.1678+0.0712+0.0138=0.4925
> $$
>
> **Step 3 — (ii) From 4 to 7.**
>
> $$
> P(4\le X\le7)=P(X\le7)-P(X\le3)=0.2763-0.0017=0.2747
> $$
>
> **Step 4 — (iii) 3 not cured** means 9 cured.
>
> $$
> P(X=9)=\binom{12}{9}(0.7)^9(0.3)^3=0.2397
> $$
>
> **Answer.** (i) **0.4925**, (ii) **0.2747**, (iii) **0.2397**.

> [!example] Practice 4 (TF style) — guessing a test
> **Given.** A quiz has 6 multiple-choice questions with 4 options each. A student guesses every answer. Find the probability of getting at least 3 correct.
>
> **Step 1 — Define $X$.** $X\sim b(x;6,0.25)$.
>
> **Step 2 — The terms.**
>
> $$
> P(3)=0.1318,\quad P(4)=0.0330,\quad P(5)=0.0044,\quad P(6)=0.0002
> $$
>
> **Step 3 — Add.**
>
> $$
> P(X\ge3)=0.1694
> $$
>
> **Answer.** $\mathbf{0.1694}$.

---

### Type 2 — Binomial mean, variance and "nothing fails"

**Recognise it:** "what is the mean number of failures", "the variance", "the board works only if none is defective".

**Recipe:**

$$
\mu=np
$$

$$
\sigma^2=npq
$$

$$
P(\text{none})=P(X=0)=q^n
$$

> [!example] Past TF 2020-21 Q7(a) (17 marks) — diode failures
> **Given.** Each of the $n=200$ diodes fails independently with $p=0.03$, so $X\sim b(x;200,0.03)$ with $q=0.97$.
>
> **Step 1 — (i) Mean.**
>
> $$
> \mu=np=200(0.03)=6 \text{ failures}
> $$
>
> **Step 2 — (ii) Variance.**
>
> $$
> \sigma^2=npq=200(0.03)(0.97)=5.82
> $$
>
> $$
> \sigma=2.41
> $$
>
> **Step 3 — (iii) The board works only if no diode fails.**
>
> $$
> P(X=0)=(0.97)^{200}=0.00226
> $$
>
> **Answer.** (i) **6**, (ii) **5.82**, (iii) **0.00226**.
>
> **Comment.** The board almost never works. The Poisson approximation with $\lambda=6$ gives $e^{-6}=0.00248$, which is close (see [[P7 Poisson Distribution and Poisson Process]]).

> [!example] Practice 5 (TF style) — resistors
> **Given.** A resistor is faulty with probability 0.02. A circuit uses 400 resistors. Find the mean and SD of the number of faulty resistors and the probability that the circuit has no faulty resistor.
>
> **Step 1 — Mean.**
>
> $$
> \mu=400(0.02)=8
> $$
>
> **Step 2 — Variance and SD.**
>
> $$
> \sigma^2=400(0.02)(0.98)=7.84
> $$
>
> $$
> \sigma=2.8
> $$
>
> **Step 3 — No faulty resistor.**
>
> $$
> P(X=0)=(0.98)^{400}=0.0003
> $$
>
> **Answer.** Mean **8**, SD **2.8**, $P(\text{none})=\mathbf{0.0003}$. The circuit is practically certain to contain a faulty resistor.

---

### Type 3 — Find $n$ and $p$ from the mean and variance

**Recipe:**

1. Divide the variance by the mean to get $q$:

$$
q=\frac{npq}{np}
$$

2. Then $p=1-q$.
3. Then $n=\mu/p$.

> [!example] Practice 6 (TF style)
> **Given.** A binomial variable has mean 4 and variance 3.2. Find $n$, $p$ and $P(X=2)$.
>
> **Step 1 — Find $q$ and $p$.**
>
> $$
> q=\frac{3.2}{4}=0.8
> $$
>
> $$
> p=0.2
> $$
>
> **Step 2 — Find $n$.**
>
> $$
> n=\frac{4}{0.2}=20
> $$
>
> **Step 3 — $P(X=2)$.**
>
> $$
> \begin{aligned}
> P(X=2)&=\binom{20}{2}(0.2)^2(0.8)^{18}\\
> &=190\times0.04\times0.01801\\
> &=0.1369
> \end{aligned}
> $$
>
> **Answer.** $n=\mathbf{20}$, $p=\mathbf{0.2}$, $P(X=2)=\mathbf{0.1369}$.

> [!warning] Check your answer
> The variance of a binomial is always **smaller** than its mean (because $q<1$).
>
> $n$ must come out as a whole number. If either fails, re-read the question.

---

### Type 4 — Multinomial

**Recognise it:** each trial has three or more outcomes and you want a given count of each.

**Recipe:**

1. Check the counts add to $n$.
2. Coefficient times product of powers.

> [!example] Past TF 2021-22 Q6(b) (10 marks) — how delegates arrived
> **Given.** Probabilities: air 0.4, bus 0.2, automobile 0.3, train 0.1. We want 3, 3, 1, 2 out of $n=9$.
>
> **Step 1 — Check the counts.** $3+3+1+2=9$ ✓
>
> **Step 2 — Multinomial coefficient.**
>
> $$
> \frac{9!}{3!\,3!\,1!\,2!}=5040
> $$
>
> **Step 3 — Probability.**
>
> $$
> \begin{aligned}
> P&=5040\,(0.4)^3(0.2)^3(0.3)(0.1)^2\\
> &=5040\times1.536\times10^{-6}\\
> &=0.00774
> \end{aligned}
> $$
>
> **Answer.** $P=\mathbf{0.00774}$.

> [!example] Practice 7 (TF style) — a die
> **Given.** A fair die is rolled 6 times. Find the probability that a 1 or 2 appears twice, a 3, 4 or 5 appears three times, and a 6 appears once.
>
> **Step 1 — Outcome probabilities.**
>
> $$
> p_1=\frac13,\qquad p_2=\frac12,\qquad p_3=\frac16
> $$
>
> **Step 2 — Multinomial.**
>
> $$
> \begin{aligned}
> P&=\frac{6!}{2!\,3!\,1!}\left(\tfrac13\right)^2\left(\tfrac12\right)^3\left(\tfrac16\right)\\
> &=60\times\frac19\times\frac18\times\frac16\\
> &=0.1389
> \end{aligned}
> $$
>
> **Answer.** $\mathbf{0.1389}$.

> [!example] Practice 8 (TF style) — blood groups
> **Given.** In a population, blood groups O, A, B, AB occur with probabilities 0.45, 0.40, 0.11, 0.04. Among 8 randomly chosen donors, find the probability of 3 O, 3 A, 1 B and 1 AB.
>
> **Step 1 — Multinomial coefficient.**
>
> $$
> \frac{8!}{3!\,3!\,1!\,1!}=1120
> $$
>
> **Step 2 — Probability.**
>
> $$
> \begin{aligned}
> P&=1120\,(0.45)^3(0.40)^3(0.11)(0.04)\\
> &=1120\times(2.566\times10^{-5})\\
> &=0.0287
> \end{aligned}
> $$
>
> **Answer.** $\mathbf{0.0287}$.

---

### Type 5 — Hypergeometric: distribution and $F(x)$

**Recognise it:** "a lot/shipment of $N$ contains $k$ defective; $n$ are chosen" (without replacement).

**Recipe:**

1. List all possible $x$.
2. Compute $h(x)$ for each.
3. Build the cumulative $F(x)$ as a step function.

The 2021-22 Q6(c) cars problem ($N=5,k=2,n=3$, giving $\frac1{10},\frac35,\frac3{10}$) is solved in [[P3 Random Variables PMF PDF CDF]].

> [!example] Practice 9 (TF style) — a lot of 10 items
> **Given.** A lot of 10 items contains 3 defectives. An inspector picks 4 at random. Find the probability distribution and the CDF of $X$, the number of defectives picked.
>
> **Step 1 — Total samples.**
>
> $$
> \binom{10}{4}=210
> $$
>
> **Step 2 — The pmf.**
>
> $$
> h(x)=\frac{\binom3x\binom7{4-x}}{210}
> $$
>
> | $x$ | 0 | 1 | 2 | 3 |
> |---|---|---|---|---|
> | $f(x)$ | $\frac{35}{210}=\frac16$ | $\frac{105}{210}=\frac12$ | $\frac{63}{210}=\frac{3}{10}$ | $\frac{7}{210}=\frac1{30}$ |
> | $F(x)$ | $\frac16$ | $\frac23$ | $\frac{29}{30}$ | 1 |
>
> **Step 3 — The CDF.**
>
> $$
> F(x)=\begin{cases}0,&x<0\\ 1/6,&0\le x<1\\ 2/3,&1\le x<2\\ 29/30,&2\le x<3\\ 1,&x\ge3\end{cases}
> $$
>
> **Step 4 — Check the mean.**
>
> $$
> \mu=\frac{nk}{N}=\frac{4\times3}{10}=1.2
> $$
>
> **Answer.** The table and $F(x)$ above.

> [!example] Practice 10 (TF style) — a committee
> **Given.** A committee of 3 is chosen at random from 6 men and 4 women. Find the probability that at least 2 women are chosen.
>
> **Step 1 — Add the "2 women" and "3 women" cases.**
>
> $$
> \begin{aligned}
> P&=\frac{\binom42\binom61+\binom43\binom60}{\binom{10}{3}}\\
> &=\frac{36+4}{120}\\
> &=\frac13
> \end{aligned}
> $$
>
> **Answer.** $\mathbf{1/3\approx0.3333}$.

---

### Type 6 — Geometric and negative binomial

**Recognise it:** "the 5th prescription is the first/third ...", "the first success occurs on trial ...".

**Recipe:**

1. The last trial is a success.
2. Arrange the remaining $k-1$ successes among the first $x-1$ trials.

> [!example] Past TF 2020-21 Q6(c) (10 marks) — Valium prescriptions
> **Given.** A prescription is for a woman (success) with $p=\frac23$, $q=\frac13$.
>
> **Step 1 — (i) Fifth prescription is the first for a woman** (geometric, $x=5$).
>
> $$
> g(5)=\left(\tfrac23\right)\left(\tfrac13\right)^4=\frac{2}{243}=0.00823
> $$
>
> **Step 2 — (ii) Fifth prescription is the third for a woman** (negative binomial, $k=3$, $x=5$).
>
> $$
> \begin{aligned}
> b^*(5;3,\tfrac23)&=\binom42\left(\tfrac23\right)^3\left(\tfrac13\right)^2\\
> &=6\cdot\frac{8}{27}\cdot\frac19\\
> &=0.1975
> \end{aligned}
> $$
>
> **Answer.** (i) **0.00823**, (ii) **0.1975**.

> [!warning] Common mistake
> Do not use $\binom53$ in part (ii).
>
> The last trial is forced to be a success, so only the first 4 trials are free, giving $\binom42$.

> [!example] Practice 11 (TF style) — oil drilling
> **Given.** Each well drilled strikes oil with probability 0.3. Find the probability that (i) the first strike comes on the 4th well, (ii) the 3rd strike comes on the 7th well.
>
> **Step 1 — (i) Geometric.**
>
> $$
> g(4)=(0.7)^3(0.3)=0.1029
> $$
>
> **Step 2 — (ii) Negative binomial.**
>
> $$
> \begin{aligned}
> b^*(7;3,0.3)&=\binom62(0.3)^3(0.7)^4\\
> &=15\times0.027\times0.2401\\
> &=0.0972
> \end{aligned}
> $$
>
> **Answer.** (i) **0.1029**, (ii) **0.0972**.

> [!example] Practice 12 (TF style) — free throws
> **Given.** A player makes 80% of free throws. Find the probability that the 5th throw is the player's second miss.
>
> **Step 1 — Define the success.** A miss is the "success" here, so $p=0.2$.
>
> **Step 2 — Negative binomial.**
>
> $$
> \begin{aligned}
> b^*(5;2,0.2)&=\binom41(0.2)^2(0.8)^3\\
> &=4\times0.04\times0.512\\
> &=0.0819
> \end{aligned}
> $$
>
> **Answer.** $\mathbf{0.0819}$.

---

## Extra practice

> [!question]- Answers (try first)
> **1.** 5% of items are defective; in a sample of 8, find $P(\text{at most 1 defective})$.
>
> *Answer:* $(0.95)^8+8(0.05)(0.95)^7=0.6634+0.2793=0.9427$.
>
> **2.** Mean of a binomial is 6, SD is 2. Find $n$ and $p$.
>
> *Answer:* $q=4/6$, $p=1/3$, $n=18$.
>
> **3.** A coin is tossed until the first head; probability it takes exactly 4 tosses?
>
> *Answer:* $(1/2)^4=1/16$.
>
> **4.** Mean and variance of $b(x;20,0.25)$?
>
> *Answer:* 5 and 3.75.
>
> **5.** From 5 cars of which 2 are blemished, 3 are bought. $P(\text{no blemished car})$?
>
> *Answer:* $\binom33/\binom53=1/10$.
>
> **6.** Multinomial coefficient for counts 2, 1, 1 out of 4?
>
> *Answer:* $4!/(2!1!1!)=12$.

Previous: [[P5 Expectation Variance Covariance and Chebyshev]] · Next: [[P7 Poisson Distribution and Poisson Process]] · Home: [[index]]
