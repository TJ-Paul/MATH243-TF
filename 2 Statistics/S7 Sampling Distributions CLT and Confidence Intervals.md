---
title: "S7 · Sampling Distributions, CLT and Confidence Intervals"
tags: [math243, statistics, sampling-distribution, clt, estimation]
---

# S7 · Sampling Distributions, CLT and Confidence Intervals

**Why this matters for the term final.** This chapter is the bridge between probability and hypothesis testing. 2023-24 Q6(b) (10 marks) asked: "What do you mean by the central limit theorem? Write an algorithm to solve problems involving the CLT. Discuss its applications in Computer Science." 2022-23 Q7(b) asked for a **99% confidence interval** for a population mean, and 2019-20 and 2020-21 tests (see [[S8 Hypothesis Testing Concepts and z t Tests]]) rely on the standard error $\sigma/\sqrt{n}$, which comes from here. The 2023-24 and 2022-23 answers are in [[TF 2023-24 Solutions]] and [[TF 2022-23 Solutions]]; this note builds the full understanding and gives fresh solved practice.

---

## 1. Sampling distribution and standard error

If we take a random sample of size $n$ and compute its mean $\bar{x}$, we get one number. If we took another sample, we would get a slightly different $\bar{x}$. So the sample mean is itself a **random variable**, and its probability distribution (over all possible samples) is called the **sampling distribution of $\bar{x}$**. In general, the probability distribution of any statistic is called its **sampling distribution**.

> [!important] Memorize: Mean and standard error of $\bar{x}$
> If a population has mean $\mu$ and standard deviation $\sigma$, and $\bar{x}$ is the mean of a random sample of size $n$ (with replacement, or from a large population), then
> $$E(\bar{x}) = \mu, \qquad SD(\bar{x}) = \sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$$
> ==The standard deviation of a sampling distribution is called the **standard error (SE)**.== It measures how much the statistic varies from sample to sample. Larger samples give smaller standard errors, so $\bar{x}$ becomes a more precise estimate of $\mu$.

For sampling **without** replacement from a finite population of size $N$, multiply by the finite population correction: $\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}\sqrt{\frac{N - n}{N - 1}}$ (ignore it when $n$ is less than about 5% of $N$).

Other standard errors you will need: for a sample proportion $\hat{p}$, $SE(\hat{p}) = \sqrt{\frac{P(1-P)}{n}}$; for a difference of two independent means, $SE(\bar{x}_1 - \bar{x}_2) = \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$; for a difference of proportions, $SE(\hat{p}_1 - \hat{p}_2) = \sqrt{\frac{P_1Q_1}{n_1} + \frac{P_2Q_2}{n_2}}$.

## 2. The Central Limit Theorem

> [!important] Memorize: Central Limit Theorem (CLT)
> ==If $\bar{x}$ is the mean of a random sample of size $n$ taken from **any** population (of any shape) with finite mean $\mu$ and finite variance $\sigma^2$, then, as $n$ becomes large, the sampling distribution of $\bar{x}$ approaches a normal distribution with mean $\mu$ and variance $\sigma^2/n$:==
> $$Z = \frac{\bar{x} - \mu}{\sigma/\sqrt{n}} \;\longrightarrow\; N(0,1) \quad \text{as } n \to \infty$$
> Equivalently, the **sum** $T = x_1 + \dots + x_n$ is approximately $N(n\mu,\; n\sigma^2)$. The approximation is usually good when $n \ge 30$. If the population itself is normal, $\bar{x}$ is exactly normal for every $n$.

**Why it is so important.** In real life we rarely know the shape of the population (waiting times are skewed, file sizes are skewed, defect counts are discrete). The CLT says that, regardless of the shape, averages of large samples behave normally. That is why we can use the normal ($z$) table for large-sample tests and confidence intervals, and why the normal distribution appears everywhere: many measured quantities are the sum of many small independent effects. It also explains the normal approximation to the binomial and Poisson distributions (a binomial count is a sum of $n$ Bernoulli variables; see [[P6 Bernoulli Binomial Multinomial Hypergeometric Geometric]] and [[P8 Normal Distribution]]).

> [!important] Memorize: Algorithm for solving CLT problems (2023-24 Q6b)
> **Step 1.** Identify the population mean $\mu$, population SD $\sigma$ and sample size $n$, and decide whether the question is about a single observation, a sample mean $\bar{x}$ or a sample total $T$.
> **Step 2.** Check the conditions: random, independent observations; $n \ge 30$ (or the population is normal).
> **Step 3.** Find the mean and standard error of the statistic: for $\bar{x}$, mean $\mu$ and SE $\sigma/\sqrt{n}$; for the total $T$, mean $n\mu$ and SE $\sigma\sqrt{n}$.
> **Step 4.** Convert the required value to a $z$-score: $z = \dfrac{\bar{x} - \mu}{\sigma/\sqrt{n}}$ (or $z = \dfrac{T - n\mu}{\sigma\sqrt{n}}$).
> **Step 5.** Draw the normal curve, shade the required area, and read $\Phi(z)$ from the standard normal table (use $1 - \Phi(z)$ for right tails and $\Phi(z_2) - \Phi(z_1)$ for intervals).
> **Step 6.** State the answer in words in the context of the problem.

In pseudo-code form (examiners like this for a CS class):

```text
INPUT  mu, sigma, n, type ("mean" or "sum"), bounds a, b
IF n < 30 AND population not normal: warn "CLT approximation may be poor"
IF type == "mean":  center = mu;     se = sigma / sqrt(n)
ELSE:               center = n*mu;   se = sigma * sqrt(n)
z1 = (a - center) / se ;  z2 = (b - center) / se
prob = Phi(z2) - Phi(z1)          # use -inf / +inf for one-sided
OUTPUT prob
```

**Applications of the CLT in Computer Science.** In **performance engineering and benchmarking**, we run a program many times and average the run times; by the CLT the average is approximately normal, so we can report a confidence interval such as "mean latency 12.4 ± 0.3 ms" and compare two algorithms with a $z$- or $t$-test. In **A/B testing** of websites and apps, the click-through rate of each version is an average of many 0/1 outcomes, so the CLT justifies the two-proportion $z$-test used to decide which design is better. In **networking and queueing**, the total delay of a packet over many hops or the total load from many independent users is a sum of many random terms, so it is approximately normal, which helps in capacity planning (e.g., the probability that total traffic exceeds link capacity). In **machine learning**, the average loss or accuracy over a large test set is approximately normal, which gives error bars on model accuracy; mini-batch gradients are averages of many per-example gradients and are approximately normal. In **Monte Carlo simulation and randomized algorithms**, an estimate is an average of many random samples, and the CLT tells us the error shrinks like $1/\sqrt{n}$ and how many samples we need for a given accuracy. In **reliability and storage**, the total size of many files or the total number of bit errors in a large transmission can be approximated by the normal distribution. CLT also underlies **random number generation** (summing 12 uniform numbers gives an approximately normal number) and **anomaly detection** (flagging averages that are more than 3 standard errors from normal behavior).

**Fresh practice 1 (sample mean).** A server's response time has mean 50 ms and SD 10 ms (the distribution is skewed). For a random sample of 36 requests, what is the probability that the average response time exceeds 52 ms?
By the CLT, $\bar{x} \sim N(50, 10^2/36)$, so $SE = 10/6 = 1.667$. $z = (52 - 50)/1.667 = 1.20$. $P(\bar{x} > 52) = 1 - \Phi(1.20) = 1 - 0.8849 = 0.1151$.

**Fresh practice 2 (sum).** File sizes have mean 2 MB and SD 1.2 MB. What is the probability that 36 files will not fit on an 80 MB disk?
The total $T$ is approximately $N(36 \times 2,\; 36 \times 1.2^2)$, i.e. mean 72 MB and SD $1.2\sqrt{36} = 7.2$ MB. $z = (80 - 72)/7.2 = 1.11$. $P(T > 80) = 1 - \Phi(1.11) = 1 - 0.8665 = 0.1335$.

## 3. The $t$, $\chi^2$ and $F$ distributions (sampling distributions you must know)

> [!important] Memorize: Student's $t$ distribution
> If $x_1, \dots, x_n$ is a random sample from a **normal** population and $\sigma$ is unknown, then
> $$t = \frac{\bar{x} - \mu}{s/\sqrt{n}}, \qquad s^2 = \frac{\sum (x_i - \bar{x})^2}{n - 1}$$
> follows a $t$ distribution with $\nu = n - 1$ degrees of freedom. The $t$ curve is bell-shaped and symmetric about 0 like $Z$, but has **heavier tails** (more spread), with variance $\nu/(\nu - 2)$ for $\nu > 2$. As $\nu \to \infty$ it approaches the standard normal. It is used for small samples ($n < 30$) when $\sigma$ is unknown.

The **chi-square distribution** with $\nu$ degrees of freedom is the distribution of a sum of squares of $\nu$ independent standard normal variables. It takes only non-negative values, is positively skewed, has mean $\nu$ and variance $2\nu$, and becomes more symmetric as $\nu$ grows. For a normal sample, $\frac{(n-1)s^2}{\sigma^2} \sim \chi^2_{n-1}$. It is used for tests on a variance and for goodness-of-fit and independence tests ([[S9 Chi-Square Tests]]).

The **$F$ distribution** with $(\nu_1, \nu_2)$ degrees of freedom is the ratio of two independent chi-squares each divided by its degrees of freedom: $F = \dfrac{\chi^2_{\nu_1}/\nu_1}{\chi^2_{\nu_2}/\nu_2}$. It is non-negative and positively skewed. For two normal samples, $F = s_1^2/s_2^2$ follows $F_{n_1 - 1,\,n_2 - 1}$ when the population variances are equal. It is used to compare variances and in ANOVA ([[S10 ANOVA One-Way and Two-Way]]).

**Degrees of freedom** means the number of values that are free to vary after the constraints are imposed. If $n$ deviations $(x_i - \bar{x})$ must add up to zero, only $n - 1$ of them are free, so $s^2$ has $n - 1$ degrees of freedom.

## 4. Estimation: point and interval

A **point estimate** is a single number used to estimate a parameter, such as $\bar{x}$ for $\mu$, $s^2$ for $\sigma^2$, or $\hat{p}$ for $P$. A good estimator is **unbiased** (its expected value equals the parameter, e.g. $E(\bar{x}) = \mu$, $E(s^2) = \sigma^2$, which is why we divide by $n - 1$), **consistent** (gets closer to the parameter as $n$ grows) and **efficient** (has the smallest variance).

A point estimate is almost never exactly right, so we also give an **interval estimate** (confidence interval): a range of values, computed from the sample, which contains the parameter with a stated confidence level $1 - \alpha$, such as 95%.

> [!important] Memorize: Confidence interval for a population mean $\mu$
> **$\sigma$ known, or $n \ge 30$ (use $s$ for $\sigma$):**
> $$\bar{x} - z_{\alpha/2}\frac{\sigma}{\sqrt{n}} \;\le\; \mu \;\le\; \bar{x} + z_{\alpha/2}\frac{\sigma}{\sqrt{n}}$$
> **$\sigma$ unknown and $n < 30$ (normal population):**
> $$\bar{x} - t_{\alpha/2,\,n-1}\frac{s}{\sqrt{n}} \;\le\; \mu \;\le\; \bar{x} + t_{\alpha/2,\,n-1}\frac{s}{\sqrt{n}}$$
> ==Critical values: 90% → $z = 1.645$; 95% → $z = 1.96$; 99% → $z = 2.58$ (more precisely 2.576).==

**Meaning of a 95% confidence interval.** If we repeated the sampling many times and built an interval each time, about 95% of those intervals would contain the true $\mu$. It does **not** mean "$\mu$ has a 95% probability of being in this particular interval"; $\mu$ is fixed and the interval is random. Higher confidence (99%) gives a wider interval; a larger sample gives a narrower interval.

The quantity $E = z_{\alpha/2}\frac{\sigma}{\sqrt{n}}$ is the **margin of error**. Solving for $n$ gives the sample size needed for a desired margin: $n = \left(\dfrac{z_{\alpha/2}\,\sigma}{E}\right)^2$, rounded up.

**Fresh practice 3 (large sample, 95% CI).** A sample of 64 batteries has mean life 72 hours; the population SD is 12 hours. The 95% CI is $72 \pm 1.96 \times \frac{12}{8} = 72 \pm 2.94$, i.e. **69.06 to 74.94 hours**. A 99% interval would be $72 \pm 2.58 \times 1.5 = 72 \pm 3.87$, i.e. 68.13 to 75.87 hours (wider, as expected).

**Fresh practice 4 (small sample, $t$ interval).** Eight measurements of a resistor (ohms): 12.1, 11.8, 12.4, 12.0, 11.6, 12.3, 12.2, 11.9. Find a 95% CI for the mean.
$\bar{x} = 96.3/8 = 12.0375$. $s = 0.2669$ (from $s^2 = \sum(x - \bar{x})^2/7$). With $\nu = 7$, $t_{0.025,7} = 2.365$. Margin $= 2.365 \times 0.2669/\sqrt8 = 2.365 \times 0.0944 = 0.223$. CI: **11.81 to 12.26 ohms**.

**Fresh practice 5 (sample size).** How many observations are needed to estimate a mean within ±2 units with 95% confidence if $\sigma = 10$? $n = (1.96 \times 10/2)^2 = 96.04$, so take $n = 97$.

> [!warning] Common mistake
> Using $z$ instead of $t$ for a small sample with unknown $\sigma$, or using the one-tailed value 1.645 for a 95% two-sided interval. A confidence interval is always two-sided here, so use $z_{\alpha/2}$: 1.96 for 95%, 2.58 for 99%.

---

> [!question]- Self-check
> **1. Population SD is 20. What sample size makes the standard error 2?**
> $20/\sqrt n = 2 \Rightarrow n = 100$.
>
> **2. State the CLT in one sentence.**
> For large $n$, the mean of a random sample from any population with finite variance is approximately normal with mean $\mu$ and SD $\sigma/\sqrt n$.
>
> **3. $\bar{x} = 50$, $s = 8$, $n = 16$, $t_{0.025,15} = 2.131$. 95% CI?**
> $50 \pm 2.131 \times 2 = 50 \pm 4.26$: 45.74 to 54.26.
>
> **4. What happens to the width of a CI if $n$ is multiplied by 4?**
> The SE is halved, so the width is halved.
>
> **5. Name two differences between the $t$ and the standard normal distribution.**
> $t$ has heavier tails (larger variance $\nu/(\nu-2)$) and depends on degrees of freedom; it approaches $N(0,1)$ as $\nu \to \infty$.

---

Previous: [[S6 Correlation and Regression]] · Next: [[S8 Hypothesis Testing Concepts and z t Tests]] · Home: [[index]]
