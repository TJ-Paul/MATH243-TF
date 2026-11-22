---
title: "S7 · Sampling Distributions, CLT and Confidence Intervals"
tags: [math243, statistics, sampling-distribution, clt, confidence-interval]
---

# S7 · Sampling Distributions, CLT and Confidence Intervals

**Why this matters for the TF.** 2023-24 Q6(b) asked for the central limit theorem, an algorithm for CLT problems and its applications in computer science (10 marks of pure theory).

2022-23 Q7(b) and 2018-19 asked for a 99% confidence interval. Every z-test in [[S8 Hypothesis Testing Concepts and z t Tests]] also rests on the CLT.

Solutions of those papers are in [[TF 2023-24 Solutions]] and [[TF 2022-23 Solutions]].

---

## Core tools (memorize)

> [!important] Memorize
> **Mean of the sample mean** — use in any question about $\bar x$:
>
> $$E(\bar X)=\mu$$
>
> **Standard error of the sample mean:**
>
> $$SE(\bar X)=\frac{\sigma}{\sqrt n}$$
>
> **Standardising $\bar X$** (normal for large $n$):
>
> $$Z=\frac{\bar X-\mu}{\sigma/\sqrt n}\approx N(0,1)$$
>
> **z-interval for $\mu$** — use when $\sigma$ is known or $n\ge30$ (use $s$ for $\sigma$ when $n$ is large):
>
> $$\bar x\pm z_{\alpha/2}\frac{\sigma}{\sqrt n}$$
>
> **Values of $z_{\alpha/2}$:**
>
> $$90\%:\ 1.645 \qquad\qquad 95\%:\ 1.96 \qquad\qquad 99\%:\ 2.58$$
>
> **t-interval for $\mu$** — use for a small sample with $\sigma$ unknown:
>
> $$\bar x\pm t_{\alpha/2,\,n-1}\frac{s}{\sqrt n}$$
>
> **Sample SD** (divide by $n-1$):
>
> $$s^2=\frac{\sum(x-\bar x)^2}{n-1}=\frac{\sum x^2-n\bar x^2}{n-1}$$
>
> **Sample size for a margin of error $E$** — always round up:
>
> $$n=\left(\frac{z_{\alpha/2}\,\sigma}{E}\right)^2$$

---

## Theory the TF actually asks (2023-24 Q6b, keep in full)

> [!important] Central Limit Theorem — statement
> ==If $\bar X$ is the mean of a random sample of size $n$ taken from **any** population with mean $\mu$ and finite variance $\sigma^2$, then as $n$ becomes large the distribution of $\bar X$ approaches the normal distribution with mean $\mu$ and variance $\sigma^2/n$:==
>
> $$Z=\frac{\bar X-\mu}{\sigma/\sqrt n}\ \longrightarrow\ N(0,1)\quad\text{as } n\to\infty.$$
>
> In practice the approximation is good when $n\ge30$, whatever the shape of the population. If the population is itself normal, $\bar X$ is exactly normal for every $n$.
>
> The theorem is important because it lets us use the normal table for sample means and totals even when we do not know the population's distribution. That is the basis of large-sample z-tests and confidence intervals.

> [!important] An algorithm to solve problems using the CLT
> **Step 1.** Identify the population mean $\mu$, population standard deviation $\sigma$ (or the sample SD $s$ for large $n$), and the sample size $n$.
>
> **Step 2.** Check the conditions: random, independent observations and $n\ge30$ (or a normal population).
>
> **Step 3.** Compute the standard error $SE=\sigma/\sqrt n$. If the question is about a **total** $\sum X$, use mean $n\mu$ and SD $\sigma\sqrt n$, or divide the total by $n$ to turn it into a question about $\bar X$.
>
> **Step 4.** Convert the required value(s) of $\bar x$ to $z=(\bar x-\mu)/SE$.
>
> **Step 5.** Read $\Phi(z)$ from the standard normal table and combine the areas: left tail $\Phi(z)$, right tail $1-\Phi(z)$, between $\Phi(z_2)-\Phi(z_1)$.
>
> **Step 6.** State the answer in the words of the problem.
>
> The same algorithm written as pseudo-code:
>
> ```
> input mu, sigma, n, a, b
> se = sigma / sqrt(n)
> z1 = (a - mu) / se ;  z2 = (b - mu) / se
> prob = Phi(z2) - Phi(z1)
> output prob
> ```

> [!important] Applications of the CLT in Computer Science
> **Performance measurement and benchmarking.** The average response time, latency or execution time over many runs is approximately normal. So we can report a mean with a confidence interval and test whether a new algorithm is really faster.
>
> **A/B testing of software and websites.** Click-through rates and conversion averages from many users are compared with z-tests that rely on the CLT.
>
> **Monte Carlo simulation and randomized algorithms.** The average of many random trials, as in estimating $\pi$ or an integral, is approximately normal. This lets us compute the error of the estimate and the number of trials needed.
>
> **Networking and queueing.** The total traffic, packet delay or load from many independent users is approximately normal. This is used for capacity planning and setting buffer sizes.
>
> **Machine learning and data science.** Averaged errors, cross-validation scores, bootstrap estimates and mini-batch gradients behave approximately normally, which justifies confidence intervals for model accuracy.
>
> **Quality control and reliability.** Average defect counts or failure times from samples are monitored with control charts based on normal limits.

> [!note] Point vs interval estimate, in one line each
> A ==point estimate== is a single value used to estimate a parameter ($\bar x$ for $\mu$).
>
> An ==interval estimate (confidence interval)== is a range that contains the parameter with a stated confidence. 95% means that 95% of such intervals built from repeated samples would contain $\mu$.

---

## Problem types you will face

### Type 1 — probability about a sample mean (CLT)

**Recognise it:** "A random sample of $n$ is taken... find the probability that the sample mean is...".

**Recipe:** follow the CLT algorithm above.

> [!example] Practice 1 (TF style): bulb lifetimes
> Bulb life has mean 800 h and SD 40 h. Find the probability that the mean life of a random sample of 16 bulbs is less than 775 h.
>
> **Step 1 — standard error.**
>
> $$SE=\frac{40}{\sqrt{16}}=10$$
>
> **Step 2 — standardise.**
>
> $$z=\frac{775-800}{10}=-2.5$$
>
> **Step 3 — probability.**
>
> $$P(\bar X<775)=\Phi(-2.5)=1-0.9938=0.0062$$
>
> **Answer.** **0.0062.** (The population of lifetimes is assumed normal here, since $n=16<30$.)

> [!example] Practice 2 (TF style): mean between two values
> A population has $\mu=50$ and $\sigma=12$. For $n=36$, find $P(48<\bar X<53)$.
>
> **Step 1 — standard error.**
>
> $$SE=\frac{12}{6}=2$$
>
> **Step 2 — standardise both ends.**
>
> $$z_1=\frac{48-50}{2}=-1$$
>
> $$z_2=\frac{53-50}{2}=1.5$$
>
> **Step 3 — probability.**
>
> $$\begin{aligned}
> P &= \Phi(1.5)-\Phi(-1)\\
> &= 0.9332-(1-0.8413)\\
> &= 0.7745
> \end{aligned}$$
>
> **Answer.** **0.7745.**

> [!example] Practice 3 (TF style): skewed population, large sample
> Waiting times are exponential with mean 4 minutes, so $\sigma=4$. For 64 customers, find $P(\bar X>4.5)$.
>
> **Step 1 — check the CLT.** The population is skewed, but $n=64\ge30$, so the CLT applies.
>
> **Step 2 — standard error and $z$.**
>
> $$SE=\frac{4}{8}=0.5$$
>
> $$z=\frac{4.5-4}{0.5}=1$$
>
> **Step 3 — probability.**
>
> $$P(\bar X>4.5)=1-\Phi(1)=1-0.8413=0.1587$$
>
> **Answer.** **0.1587.**

> [!example] Practice 4 (TF style): a total (elevator problem)
> Passenger weights have $\mu=70$ kg and $\sigma=14$ kg. A lift carries 49 passengers and has a limit of 3600 kg. Find the probability that the limit is exceeded.
>
> **Step 1 — turn the total into a mean.** A total above 3600 means a mean above
>
> $$\frac{3600}{49}=73.47$$
>
> **Step 2 — standard error and $z$.**
>
> $$SE=\frac{14}{7}=2$$
>
> $$z=\frac{73.47-70}{2}=1.73$$
>
> **Step 3 — probability.**
>
> $$P=1-\Phi(1.73)=1-0.9582=0.0418$$
>
> **Answer.** **0.0418.**

---

### Type 2 — confidence interval for a mean

**Recognise it:** "Compute a 95% / 99% confidence interval for the population mean."

**Recipe:** decide between $z$ (σ known or $n\ge30$) and $t$ (small $n$, σ unknown). Compute the margin $E$, and write $\bar x-E\le\mu\le\bar x+E$ with a one-line interpretation.

> [!example] Practice 5 (TF style): $\sigma$ known, 95%
> $n=36$, $\bar x=2.6$, $\sigma=0.3$.
>
> **Step 1 — margin of error.**
>
> $$E=1.96\times\frac{0.3}{6}=0.098$$
>
> **Step 2 — interval.**
>
> $$2.6-0.098\le\mu\le2.6+0.098$$
>
> **Answer.** 95% CI: ==$2.502\le\mu\le2.698$==.

> [!example] Practice 6 (TF style): large sample, 99%
> $n=100$, $\bar x=42$, $s=8$.
>
> **Step 1 — margin of error.**
>
> $$E=2.58\times\frac{8}{10}=2.064$$
>
> **Step 2 — interval.**
>
> $$42-2.064\le\mu\le42+2.064$$
>
> **Answer.** 99% CI: ==$39.94\le\mu\le44.06$==. We are 99% confident that the population mean lies in this range.

> [!example] Practice 7 (TF style): small sample from raw data, $t$-interval
> Ten measurements: 9.8, 10.2, 10.4, 9.8, 10.0, 10.2, 9.6, 10.1, 10.3, 9.9. Find a 95% CI.
>
> **Step 1 — totals and mean.**
>
> $$\sum x=100.3 \qquad \sum x^2=1006.59$$
>
> $$\bar x=10.03$$
>
> **Step 2 — sample SD.**
>
> $$\begin{aligned}
> s^2 &= \frac{1006.59-10(10.03)^2}{9}\\
> &= \frac{0.581}{9}\\
> &= 0.06456
> \end{aligned}$$
>
> $$s=0.2541$$
>
> **Step 3 — critical value.** df = 9, so
>
> $$t_{0.025,9}=2.262$$
>
> **Step 4 — margin of error.**
>
> $$E=2.262\times\frac{0.2541}{\sqrt{10}}=0.182$$
>
> **Answer.** 95% CI: ==$9.848\le\mu\le10.212$==.

> [!example] Practice 8 (TF style): small sample, summary data, 99%
> $n=16$, $\bar x=27.9$, $s=3.23$.
>
> **Step 1 — critical value.** df = 15, so
>
> $$t_{0.005,15}=2.947$$
>
> **Step 2 — margin of error.**
>
> $$E=2.947\times\frac{3.23}{4}=2.380$$
>
> **Answer.** 99% CI: ==$25.52\le\mu\le30.28$==.

---

### Type 3 — sample size (occasionally asked)

> [!example] Practice 9 (TF style)
> How large a sample is needed to estimate $\mu$ within 0.05 with 95% confidence if $\sigma=0.3$?
>
> **Step 1 — formula.**
>
> $$n=\left(\frac{1.96\times0.3}{0.05}\right)^2=138.3$$
>
> **Step 2 — round up.**
>
> **Answer.** **$n=139$.**

---

## Extra practice

> [!question]- Extra practice (try first, then open for answers)
> **E1.** $\mu=50$, $\sigma=8$, $n=25$. Find $P(\bar X>52)$.
>
> Answer: $z=2/1.6=1.25$, so $P=0.1056$.
>
> **E2.** $n=64$, $\bar x=120$, $s=16$. Find the 95% CI.
>
> Answer: $120\pm1.96(2)$, which is $116.08$ to $123.92$.
>
> **E3.** $n=9$, $\bar x=20$, $s=3$. Find the 95% CI ($t_{0.025,8}=2.306$).
>
> Answer: $20\pm2.306$, which is $17.69$ to $22.31$.
>
> **E4.** Why can a z-interval be used for $n=100$ even when the population is skewed?
>
> Answer: by the CLT, $\bar X$ is approximately normal for large $n$.
>
> **E5.** How does the width of a CI change if $n$ is multiplied by 4?
>
> Answer: it halves, because the width is proportional to $1/\sqrt n$.

---

Previous: [[S6 Correlation and Regression]] · Next: [[S8 Hypothesis Testing Concepts and z t Tests]] · Home: [[index]]
