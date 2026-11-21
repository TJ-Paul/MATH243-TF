---
title: "P7 · Poisson Distribution and Poisson Process"
tags: [math243, probability, poisson]
---

# P7 · Poisson Distribution and the Poisson Process

> [!abstract] Why this matters for the term final
> The Poisson distribution is a favourite for both theory and calculation. 2019-20 Q8(a) used the Poisson approximation for glass bubbles; 2022-23 Q3(a) asked you to discuss the Bernoulli and Poisson processes and ==derive the Poisson distribution==, and Q3(b) asked you to ==calculate the variance of a Poisson variable== and then approximate a binomial; 2023-24 Q3(b) asked you to ==establish the relation between the binomial and Poisson distributions== and then compute a call-arrival probability. These derivations are pure memory marks, so learn them line by line. The 2022-23 and 2023-24 numerical parts are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]].

---

## 1. Bernoulli process versus Poisson process

> [!important] Memorize: Bernoulli process
> A **Bernoulli process** is a sequence of trials with three properties. First, each trial has only two outcomes, success or failure. Second, the probability of success $p$ remains the same from trial to trial. Third, the trials are independent. The number of successes in $n$ trials of a Bernoulli process is binomial, $b(x;n,p)$.

> [!important] Memorize: Poisson process
> A **Poisson process** describes events that occur randomly in continuous time (or space), such as calls arriving at a switchboard, accidents in a factory, or flaws along a cable. It has three properties. First, ==the numbers of events in non-overlapping intervals are independent== (the process has no memory). Second, ==the probability of exactly one event in a very short interval is proportional to the length of the interval== and does not depend on what happened outside it. Third, ==the probability of two or more events in a very short interval is negligible==. The number of events $X$ in an interval of length $t$ then follows the Poisson distribution with mean $\lambda t$, where $\lambda$ is the average rate per unit time.

You can think of the Poisson process as the limit of a Bernoulli process in which time is cut into a huge number of tiny pieces, each piece being a trial with a tiny chance of containing an event.

## 2. The Poisson distribution

> [!important] Memorize: Poisson distribution
> $$
> p(x;\lambda t)=\frac{e^{-\lambda t}(\lambda t)^x}{x!},\qquad x=0,1,2,\dots
> $$
> Writing $\mu=\lambda t$ for the average number of events in the interval,
> $$
> E(X)=\mu,\qquad \mathrm{Var}(X)=\mu .
> $$
> The ==mean and the variance are equal==; this is the signature of a Poisson variable.

> [!warning] Common mistake: scaling the rate
> The rate must match the interval in the question. If calls arrive at 0.5 per minute and the question is about a five-minute period, then $\mu=0.5\times5=2.5$. If accidents happen 3 times per month and the question is about a year, $\mu=36$.

**Fresh practice (same shape as 2023-24 Q3(b)).** Requests reach a server at an average rate of 2 per minute. Find the probability that exactly 4 requests arrive in a particular 3-minute period. Here $\mu=2\times3=6$, so

$$
P(X=4)=\frac{e^{-6}6^4}{4!}=\frac{0.0024788\times1296}{24}=0.1339 .
$$

---

## 3. Derivation: the Poisson distribution as the limit of the binomial

This is the derivation asked as "establish the relation between binomial and Poisson" (2023-24 Q3(b)) and "derive the Poisson distribution" (2022-23 Q3(a)).

> [!important] Memorize: Derivation
> Let $X\sim b(x;n,p)$, and let $n\to\infty$ and $p\to0$ in such a way that $np=\mu$ stays fixed. Put $p=\mu/n$. Then
> $$
> b(x;n,p)=\frac{n!}{x!\,(n-x)!}\left(\frac{\mu}{n}\right)^x\left(1-\frac{\mu}{n}\right)^{n-x}.
> $$
> Rearranging the factors,
> $$
> b(x;n,p)=\frac{\mu^x}{x!}\cdot\frac{n(n-1)\cdots(n-x+1)}{n^x}\cdot\left(1-\frac{\mu}{n}\right)^{n}\cdot\left(1-\frac{\mu}{n}\right)^{-x}.
> $$
> Now let $n\to\infty$ with $x$ and $\mu$ fixed. The second factor is $1\cdot\left(1-\frac1n\right)\cdots\left(1-\frac{x-1}{n}\right)\to1$. The third factor tends to $e^{-\mu}$, because $\lim_{n\to\infty}\left(1-\frac{\mu}{n}\right)^n=e^{-\mu}$. The last factor tends to 1. Therefore
> $$
> \lim_{n\to\infty}b(x;n,p)=\frac{e^{-\mu}\mu^x}{x!}=p(x;\mu),\qquad x=0,1,2,\dots
> $$
> This shows that ==the Poisson distribution is the limiting form of the binomial when $n$ is large, $p$ is small and $np=\mu$ is moderate==.

**Relation in words.** Both distributions count successes. The binomial counts successes in a fixed number of trials; the Poisson counts events in a continuous interval. The binomial has mean $np$ and variance $npq$; when $p\to0$, $q\to1$ and the variance $npq\to np$, which is why the Poisson has equal mean and variance. In practice, use the Poisson approximation when $n$ is large (say $n\ge20$) and $p$ is small (say $p\le0.05$), with $\mu=np$.

To show that the Poisson probabilities form a valid distribution, note that $\sum_{x=0}^\infty \frac{e^{-\mu}\mu^x}{x!}=e^{-\mu}e^{\mu}=1$, using the series $e^\mu=\sum \mu^x/x!$.

---

## 4. Derivation of the mean and variance

> [!important] Memorize: Mean of the Poisson
> $$
> E(X)=\sum_{x=0}^{\infty}x\frac{e^{-\mu}\mu^x}{x!}=\mu e^{-\mu}\sum_{x=1}^{\infty}\frac{\mu^{x-1}}{(x-1)!}=\mu e^{-\mu}e^{\mu}=\mu .
> $$

> [!important] Memorize: Variance of the Poisson (asked in 2022-23 Q3(b))
> The trick, as the lecture note says, is to compute $E[X(X-1)]$ first, because $x(x-1)$ cancels nicely with $x!$:
> $$
> E[X(X-1)]=\sum_{x=2}^{\infty}x(x-1)\frac{e^{-\mu}\mu^x}{x!}=\mu^2e^{-\mu}\sum_{x=2}^{\infty}\frac{\mu^{x-2}}{(x-2)!}=\mu^2 e^{-\mu}e^{\mu}=\mu^2 .
> $$
> Then $E(X^2)=E[X(X-1)]+E(X)=\mu^2+\mu$, and
> $$
> \mathrm{Var}(X)=E(X^2)-[E(X)]^2=\mu^2+\mu-\mu^2=\mu .
> $$

---

## 5. Poisson approximation to the binomial — worked problems

**Fresh practice (same shape as 2022-23 Q3(b)).** On average, 1 in every 1000 tickets printed by a machine is misprinted. If 5000 tickets are checked, find the probability that 3, 4 or 5 of them are misprinted.

The exact distribution is binomial with $n=5000$ and $p=0.001$, which is awkward to compute, but $n$ is large and $p$ small, so we use the Poisson with $\mu=np=5$:

$$
p(3;5)=\frac{e^{-5}5^3}{3!}=0.1404,\quad p(4;5)=\frac{e^{-5}5^4}{4!}=0.1755,\quad p(5;5)=\frac{e^{-5}5^5}{5!}=0.1755 .
$$

The required probability is $0.1404+0.1755+0.1755=0.4913$.

> [!example] Past TF 2019-20 Q8(a) (10 marks) — glass bubbles
> On average 1 in every 1000 items has bubbles, so $p=0.001$, and the sample has $n=8000$ items. Since $n$ is large and $p$ is small, the number of defective items $X$ is approximately Poisson with
> $$
> \mu=np=8000\times0.001=8 .
> $$
> "Fewer than 7" means $X\le6$, so we add the Poisson probabilities from 0 to 6:
>
> | $x$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
> |---|---|---|---|---|---|---|---|
> | $e^{-8}8^x/x!$ | 0.0003 | 0.0027 | 0.0107 | 0.0286 | 0.0573 | 0.0916 | 0.1221 |
>
> $$
> P(X<7)=\sum_{x=0}^{6}\frac{e^{-8}8^x}{x!}=0.3134 .
> $$
> (From the cumulative Poisson table, $P(X\le6;\mu=8)=0.3134$.) So there is about a 31% chance that fewer than 7 of the 8000 items have bubbles.

> [!tip] Exam trick
> Compute successive Poisson terms with the recursion $p(x)=p(x-1)\cdot\dfrac{\mu}{x}$. Start from $p(0)=e^{-\mu}$, then multiply by $\mu/1$, $\mu/2$, $\mu/3$ and so on. It is much faster and less error-prone on a calculator than recomputing each factorial.

---

> [!question]- Self-check
> **1.** Mean and variance of a Poisson with $\mu=4$? *Both 4.*
> **2.** Calls arrive at 3 per hour; what is $\mu$ for 20 minutes? *1.*
> **3.** What limit is used in the derivation? *$(1-\mu/n)^n\to e^{-\mu}$.*
> **4.** When do we approximate binomial by Poisson? *$n$ large, $p$ small, $\mu=np$.*
> **5.** Why compute $E[X(X-1)]$? *Because $x(x-1)$ cancels with $x!$, giving $\mu^2$ directly.*

Previous: [[P6 Bernoulli Binomial Multinomial Hypergeometric Geometric]] · Next: [[P8 Normal Distribution]] · Home: [[index]]
