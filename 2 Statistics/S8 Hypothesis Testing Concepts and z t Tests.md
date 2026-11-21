---
title: "S8 · Hypothesis Testing: Concepts, z-tests and t-tests"
tags: [math243, statistics, hypothesis-testing, z-test, t-test]
---

# S8 · Hypothesis Testing: Concepts, z-tests and t-tests

**Why this matters for the TF.** Every paper has at least one test of a mean, and the MATH 243 papers have three or four testing parts.

Past papers have asked a z-test with a P-value (2019-20), a one-sample t-test (2020-21, 2021-22, 2022-23), a z-test with a confidence interval (2022-23), two-proportion and pooled two-sample t-tests (2023-24), and short-note theory (2020-21, 2022-23, 2023-24).

The 2022-23 and 2023-24 questions are in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]].

---

## Core tools (memorize)

> [!important] Memorize: which statistic, when
> **One mean, $\sigma$ known or $n\ge30$** — use $s$ if $\sigma$ is unknown and $n$ is large:
>
> $$z=\frac{\bar x-\mu_0}{\sigma/\sqrt n}$$
>
> **One mean, small $n$, $\sigma$ unknown** — df $=n-1$:
>
> $$t=\frac{\bar x-\mu_0}{s/\sqrt n}$$
>
> **Two means, large samples:**
>
> $$z=\frac{\bar x_1-\bar x_2}{\sqrt{s_1^2/n_1+s_2^2/n_2}}$$
>
> **Two means, small samples, equal variances** — df $=n_1+n_2-2$:
>
> $$t=\frac{\bar x_1-\bar x_2}{s_p\sqrt{1/n_1+1/n_2}}$$
>
> **Pooled variance** for that test:
>
> $$s_p^2=\frac{\sum(x_1-\bar x_1)^2+\sum(x_2-\bar x_2)^2}{n_1+n_2-2}$$
>
> **Paired data** (before/after on the same units), $d=x-y$, df $=n-1$:
>
> $$t=\frac{\bar d}{s_d/\sqrt n}$$
>
> **One proportion:**
>
> $$z=\frac{\hat p-p_0}{\sqrt{p_0q_0/n}}$$
>
> **Two proportions:**
>
> $$z=\frac{\hat p_1-\hat p_2}{\sqrt{\hat p\hat q\,(1/n_1+1/n_2)}}$$
>
> **Pooled proportion** for that test:
>
> $$\hat p=\frac{x_1+x_2}{n_1+n_2}$$
>
> **Critical $z$:**
>
> Two-tailed: **1.96** (5%) and **2.58** (1%).
>
> One-tailed: **1.645** (5%) and **2.33** (1%).

> [!important] Memorize: the answer layout (marks are given for each line)
> **Hypothesis.**
>
> **Level of significance.**
>
> **Test statistic** (formula and distribution).
>
> **Critical region.**
>
> **Calculated value.**
>
> **Decision.**
>
> **Comment** in the words of the story.
>
> Read the direction of $H_1$ from the wording. "Less than", "reduced" and "improved" are one-tailed. "Differ", "significant difference" and "is the claim justified" are two-tailed.

![[m243-rejection-regions.png]]

---

## Theory the TF actually asks

### Short notes (2023-24 Q7a)

> [!important] Null and alternative hypothesis
> The ==null hypothesis $H_0$== is a statement about a population parameter that is assumed true and tested for possible rejection. It usually states "no difference" or "no effect" (for example $H_0:\mu=\mu_0$).
>
> The ==alternative hypothesis $H_1$== is the statement accepted when $H_0$ is rejected ($\mu\ne\mu_0$, $\mu>\mu_0$ or $\mu<\mu_0$).

> [!important] One-tailed and two-tailed tests
> In a ==two-tailed test== the critical region lies in both tails of the sampling distribution. It is used when $H_1:\mu\ne\mu_0$, and each tail has area $\alpha/2$.
>
> In a ==one-tailed test== the whole critical region of area $\alpha$ lies in one tail. It is right-tailed for $H_1:\mu>\mu_0$ and left-tailed for $H_1:\mu<\mu_0$.

> [!important] Degrees of freedom
> ==Degrees of freedom are the number of independent observations that are free to vary after the restrictions imposed by the estimated quantities.==
>
> For example, $n$ deviations from $\bar x$ must sum to zero, so only $n-1$ are free.
>
> This gives $n-1$ df for a one-sample $t$-test, $n_1+n_2-2$ for a pooled test, $k-1$ for goodness of fit, and $(r-1)(c-1)$ for a contingency table.

> [!important] Goodness of fit
> ==A goodness-of-fit test checks how well observed frequencies agree with the frequencies expected under a hypothesised distribution==, using
>
> $$\chi^2=\sum\frac{(O-E)^2}{E}$$
>
> with $k-1-m$ df ($m$ = parameters estimated).
>
> A small $\chi^2$ means a good fit, and $H_0$ (the data follow the distribution) is rejected if $\chi^2>\chi^2_\alpha$. See [[S9 Chi-Square Tests]].

### Differentiate (2022-23 Q7a)

> [!important] Statistic vs parameter
> A ==parameter== is a numerical characteristic of the **population** ($\mu,\sigma,p$). It is fixed but usually unknown.
>
> A ==statistic== is a numerical characteristic computed from a **sample** ($\bar x,s,\hat p$). It is known, but it changes from sample to sample and is used to estimate the parameter.

> [!important] Critical region vs acceptance region
> The sample space of the test statistic is split into two parts.
>
> The ==critical (rejection) region== is the set of values for which $H_0$ is rejected; its probability under $H_0$ is $\alpha$.
>
> The ==acceptance region== is the rest, where $H_0$ is not rejected; its probability under $H_0$ is $1-\alpha$.
>
> They are separated by the critical value(s).

> [!important] Exact (simple) vs inexact (composite) hypothesis
> An ==exact or simple hypothesis== specifies the parameter completely as one value, for example $H_0:\mu=50$.
>
> An ==inexact or composite hypothesis== specifies a range of values, for example $H_1:\mu>50$ or $\mu\ne50$.

> [!important] Unidirectional vs non-directional test
> A ==unidirectional (one-tailed, directional)== test has an alternative in one direction ($>$ or $<$), with the whole $\alpha$ in one tail.
>
> A ==non-directional (two-tailed)== test has $H_1:\ne$, with $\alpha/2$ in each tail.

> [!important] Level of significance vs P-value
> The ==level of significance $\alpha$== is the maximum probability of a Type I error, fixed **before** the test (5% or 1%).
>
> The ==P-value== is computed **from the data**: it is the probability, assuming $H_0$ is true, of getting a test statistic as extreme as or more extreme than the observed one.
>
> Reject $H_0$ when P-value $\le\alpha$.

### Type I and Type II errors (2020-21 Q8c)

> [!important] Definitions
> ==Type I error: rejecting $H_0$ when it is true==, with probability $\alpha$.
>
> ==Type II error: accepting $H_0$ when it is false==, with probability $\beta$.

> [!example] Past TF 2020-21 Q8(c) (10 marks): DNA paternity testing
> **Given.** $H_0$: the man is the father. $H_a$: he is not. The test is 100% accurate if he is not the father and 99.9% accurate if he is.
>
> **Type I error** means concluding the man is **not** the father when he actually **is**. The test is 99.9% accurate for true fathers, so
>
> $$\alpha=0.001$$
>
> **Type II error** means concluding the man **is** the father when he is **not**. The test is 100% accurate in that case, so
>
> $$\beta=0$$
>
> **Comment.** A Type I error would wrongly deny a child its real father. A Type II error would wrongly make an unrelated man legally responsible. This test makes the second error impossible and the first one very rare.

---

## Problem types you will face

### Type 1 — z-test for one mean (with a confidence interval)

**Recognise it:** $n\ge30$ or $\sigma$ given.

**Recipe:** follow the layout. If asked, add $\bar x\pm z_{\alpha/2}\sigma/\sqrt n$.

> [!example] Practice 1 (TF style): two-tailed + 95% CI
> A battery maker claims a mean life of 500 h with $\sigma=40$ h. A sample of 50 gives $\bar x=488$ h. Test the claim at 5% and find a 95% CI.
>
> **Hypothesis.** $H_0:\mu=500$ against $H_1:\mu\ne500$.
>
> **Level of significance.** $\alpha=0.05$.
>
> **Test statistic.**
>
> $$z=\frac{\bar x-\mu_0}{\sigma/\sqrt n}\sim N(0,1)$$
>
> **Critical region.** $|z|>1.96$.
>
> **Calculated value.**
>
> $$z=\frac{488-500}{40/\sqrt{50}}=\frac{-12}{5.657}=-2.12$$
>
> **Decision.** $|z|=2.12>1.96$, so reject $H_0$.
>
> **Comment.** The claim of 500 h is not justified.
>
> **95% CI.**
>
> $$488\pm1.96(5.657)$$
>
> which gives ==$476.9\le\mu\le499.1$==. It does not contain 500, which agrees with the test.

> [!example] Practice 2 (TF style): left-tailed z-test
> An ISP claims an average speed of 54 Mbps. 40 tests give $\bar x=52.5$ and $s=5$. Is the speed lower than claimed, at 5%?
>
> **Hypothesis.** $H_0:\mu=54$ against $H_1:\mu<54$.
>
> **Level of significance.** $\alpha=0.05$.
>
> **Test statistic.** $n$ is large, so $z=\frac{\bar x-\mu_0}{s/\sqrt n}\sim N(0,1)$.
>
> **Critical region.** $z<-1.645$.
>
> **Calculated value.**
>
> $$z=\frac{52.5-54}{5/\sqrt{40}}=\frac{-1.5}{0.7906}=-1.90$$
>
> **Decision.** $-1.90<-1.645$, so reject $H_0$.
>
> **Comment.** The average speed is significantly lower than 54 Mbps.

---

### Type 2 — z-test using a P-value

**Recognise it:** "Use a P-value in your conclusion."

**Recipe:** compute $z$, then the P-value:

Left-tailed: $p=\Phi(z)$.

Right-tailed: $p=1-\Phi(z)$.

Two-tailed: $p=2[1-\Phi(|z|)]$.

Reject if $p\le\alpha$.

> [!example] Past TF 2019-20 Q6(b) (18 marks): mice on a diet
> **Given.** $n=64$, $\bar x=38$, $s=5.8$. Is there reason to believe $\mu<40$?
>
> **Hypothesis.** $H_0:\mu=40$ against $H_1:\mu<40$ (left-tailed).
>
> **Test statistic.** $n$ is large, so
>
> $$z=\frac{\bar x-\mu_0}{s/\sqrt n}\sim N(0,1)$$
>
> **Calculated value.**
>
> $$z=\frac{38-40}{5.8/8}=\frac{-2}{0.725}=-2.76$$
>
> **P-value.**
>
> $$p=P(Z\le-2.76)=1-0.9971=0.0029$$
>
> **Decision.** $p=0.0029<0.01$, so reject $H_0$ even at 1%.
>
> **Comment.** Strong evidence that the mean life on this diet is less than 40 months.

> [!example] Practice 3 (TF style): right-tailed with P-value
> $n=50$, $\bar x=103.2$, $\sigma=10$. Test $H_0:\mu=100$ against $H_1:\mu>100$.
>
> **Calculated value.**
>
> $$z=\frac{3.2}{10/\sqrt{50}}=2.26$$
>
> **P-value.**
>
> $$p=1-\Phi(2.26)=1-0.9881=0.0119$$
>
> **Decision.** Since $p<0.05$, reject $H_0$ at 5%. Since $p>0.01$, do not reject at 1%.
>
> **Comment.** Significant at 5% but not at 1%.

---

### Type 3 — one-sample t-test

**Recognise it:** small $n$ ($<30$) and $\sigma$ unknown.

**Recipe:** with raw data, first compute $\bar x$ and $s$ using

$$s^2=\frac{\sum x^2-n\bar x^2}{n-1}$$

> [!example] Past TF 2020-21 Q8(b) (15 marks): sodium in cereal
> **Given.** $n=20$, $\bar x=244$, $s=24.5$. Is the mean greater than 220 mg, at 5%?
>
> **Hypothesis.** $H_0:\mu=220$ against $H_1:\mu>220$.
>
> **Level of significance.** $\alpha=0.05$.
>
> **Test statistic.**
>
> $$t=\frac{\bar x-\mu_0}{s/\sqrt n}\sim t_{19}$$
>
> **Critical region.** $t>t_{0.05,19}=1.729$.
>
> **Calculated value.**
>
> $$t=\frac{244-220}{24.5/\sqrt{20}}=\frac{24}{5.478}=4.38$$
>
> **Decision.** $4.38>1.729$, so reject $H_0$.
>
> **Comment.** The average sodium content is greater than 220 mg.

> [!example] Past TF 2021-22 Q8(a) (17 marks): heights, raw data
> **Given.** 63, 63, 64, 65, 66, 69, 69, 70, 70, 71. Test the claim that $\mu=65$ ($t_{0.05}$ for 9 df $=2.262$).
>
> **Step 1 — mean.**
>
> $$\sum x=670 \qquad \bar x=67$$
>
> **Step 2 — sample SD.**
>
> $$\sum x^2=44978$$
>
> $$\sum(x-\bar x)^2=44978-10(67^2)=88$$
>
> $$s^2=\frac{88}{9}=9.778 \qquad s=3.127$$
>
> **Hypothesis.** $H_0:\mu=65$ against $H_1:\mu\ne65$.
>
> **Level of significance.** $\alpha=0.05$.
>
> **Test statistic.** $t=\frac{\bar x-\mu_0}{s/\sqrt n}\sim t_9$.
>
> **Critical region.** $|t|>2.262$.
>
> **Calculated value.**
>
> $$t=\frac{67-65}{3.127/\sqrt{10}}=\frac{2}{0.989}=2.02$$
>
> **Decision.** $2.02<2.262$, so do not reject $H_0$.
>
> **Comment.** The data are consistent with a mean height of 65 inches.

> [!example] Practice 4 (TF style): raw data, left-tailed
> Daily scrap used to average 25.5 kg. After a modification, 10 days give 25.0, 21.9, 23.5, 25.2, 22.0, 23.0, 24.5, 25.0, 26.1, 22.8. Has the scrap reduced, at 5%?
>
> **Step 1 — mean.**
>
> $$\sum x=239 \qquad \bar x=23.9$$
>
> **Step 2 — sample SD.**
>
> $$\sum x^2=5731.2$$
>
> $$\sum(x-\bar x)^2=5731.2-10(23.9^2)=19.1$$
>
> $$s^2=\frac{19.1}{9}=2.122 \qquad s=1.457$$
>
> **Hypothesis.** $H_0:\mu=25.5$ against $H_1:\mu<25.5$.
>
> **Level of significance.** $\alpha=0.05$.
>
> **Test statistic.** $t=\frac{\bar x-\mu_0}{s/\sqrt n}\sim t_9$.
>
> **Critical region.** $t<-t_{0.05,9}=-1.833$.
>
> **Calculated value.**
>
> $$t=\frac{23.9-25.5}{1.457/\sqrt{10}}=\frac{-1.6}{0.4607}=-3.47$$
>
> **Decision.** Reject $H_0$.
>
> **Comment.** The modification has significantly reduced the scrap.

> [!example] Practice 5 (TF style): summary data
> $n=15$, $\bar x=11.8$, $s=2.4$. Test $H_0:\mu=13$ against $H_1:\mu<13$ at 5%.
>
> **Critical region.** $t<-t_{0.05,14}=-1.761$.
>
> **Calculated value.**
>
> $$t=\frac{11.8-13}{2.4/\sqrt{15}}=\frac{-1.2}{0.6197}=-1.94$$
>
> **Decision.** $-1.94<-1.761$, so reject $H_0$.
>
> **Comment.** The mean is significantly below 13.

---

### Type 4 — two independent means

**Recognise it:** two separate groups.

**Recipe:** if both $n\ge30$, use $z$; otherwise use the pooled $t$ (assume equal variances).

> [!example] Practice 6 (TF style): large samples, z
> Method A: $n_1=45$, $\bar x_1=74$, $s_1^2=81$. Method B: $n_2=50$, $\bar x_2=70$, $s_2^2=100$. Is there a difference at 5%?
>
> **Hypothesis.** $H_0:\mu_1=\mu_2$ against $H_1:\mu_1\ne\mu_2$.
>
> **Level of significance.** $\alpha=0.05$.
>
> **Critical region.** $|z|>1.96$.
>
> **Calculated value.**
>
> $$z=\frac{74-70}{\sqrt{81/45+100/50}}=\frac{4}{\sqrt{3.8}}=2.05$$
>
> **Decision.** $2.05>1.96$, so reject $H_0$.
>
> **Comment.** The two teaching methods give significantly different mean scores.

> [!example] Practice 7 (TF style): small samples, pooled t (raw data)
> Sample A: 20, 24, 22, 25, 27, 23. Sample B: 18, 21, 19, 22, 20. Test at 5% whether the means differ.
>
> **Step 1 — summary table.**
>
> | | $n$ | $\sum x$ | $\bar x$ | $\sum x^2$ | $\sum(x-\bar x)^2$ |
> |---|---|---|---|---|---|
> | A | 6 | 141 | 23.5 | 3343 | 29.5 |
> | B | 5 | 100 | 20.0 | 2010 | 10.0 |
>
> **Step 2 — pooled variance.**
>
> $$s_p^2=\frac{29.5+10}{6+5-2}=\frac{39.5}{9}=4.389$$
>
> $$s_p=2.095$$
>
> **Hypothesis.** $H_0:\mu_1=\mu_2$ against $H_1:\mu_1\ne\mu_2$.
>
> **Level of significance.** $\alpha=0.05$.
>
> **Test statistic.** Pooled $t$ with $6+5-2=9$ df.
>
> **Critical region.** $|t|>t_{0.025,9}=2.262$.
>
> **Calculated value.**
>
> $$t=\frac{23.5-20}{2.095\sqrt{1/6+1/5}}=\frac{3.5}{1.2686}=2.76$$
>
> **Decision.** $2.76>2.262$, so reject $H_0$.
>
> **Comment.** The two population means differ significantly.

---

### Type 5 — paired t-test

**Recognise it:** the same units are measured twice (before/after, two years for the same companies).

**Recipe:** work with the differences $d$.

> [!example] Practice 8 (TF style): sales of 10 companies in 2014 and 2015
> 2014: 126, 56, 86, 62, 96, 36, 52, 50, 35, 53. 2015: 123, 49, 79, 59, 92, 35, 48, 48, 32, 50. Is there a difference, at 5%?
>
> **Step 1 — differences.** $d=x_{2014}-x_{2015}$: 3, 7, 7, 3, 4, 1, 4, 2, 3, 3.
>
> $$\sum d=37 \qquad \bar d=3.7 \qquad \sum d^2=171$$
>
> **Step 2 — SD of differences.**
>
> $$s_d^2=\frac{171-10(3.7^2)}{9}=\frac{34.1}{9}=3.789$$
>
> $$s_d=1.947$$
>
> **Hypothesis.** $H_0:\mu_d=0$ against $H_1:\mu_d\ne0$.
>
> **Level of significance.** $\alpha=0.05$.
>
> **Test statistic.** $t=\frac{\bar d}{s_d/\sqrt n}\sim t_9$.
>
> **Critical region.** $|t|>t_{0.025,9}=2.262$.
>
> **Calculated value.**
>
> $$t=\frac{3.7}{1.947/\sqrt{10}}=\frac{3.7}{0.6155}=6.01$$
>
> **Decision.** Reject $H_0$.
>
> **Comment.** Sales differ significantly between the two years (they fell in 2015).

---

### Type 6 — proportions (one and two samples)

**Recognise it:** counts of "defective", "faulty" or "success" out of $n$.

**Recipe:** for two samples, pool the proportion under $H_0$. "Has the machine improved?" is one-tailed.

> [!example] Practice 9 (TF style): one proportion, two-tailed
> Historically 4% of valves are defective. In a sample of 100, 8 are defective. Has the rate changed, at 5%?
>
> **Hypothesis.** $H_0:p=0.04$ against $H_1:p\ne0.04$.
>
> **Level of significance.** $\alpha=0.05$.
>
> **Critical region.** $|z|>1.96$.
>
> **Calculated value.**
>
> $$z=\frac{0.08-0.04}{\sqrt{0.04\times0.96/100}}=\frac{0.04}{0.0196}=2.04$$
>
> **Decision.** $2.04>1.96$, so reject $H_0$.
>
> **Comment.** The defect rate has changed (it has increased).

> [!example] Practice 10 (TF style): one proportion, one-tailed
> 5% of samples usually fail. In a batch of 120, 10 fail. Has the failure rate increased, at 5%?
>
> **Hypothesis.** $H_0:p=0.05$ against $H_1:p>0.05$.
>
> **Critical region.** $z>1.645$.
>
> **Sample proportion.**
>
> $$\hat p=0.0833$$
>
> **Calculated value.**
>
> $$z=\frac{0.0833-0.05}{\sqrt{0.05\times0.95/120}}=\frac{0.0333}{0.0199}=1.68$$
>
> **Decision.** $1.68>1.645$, so reject $H_0$.
>
> **Comment.** The failure rate has increased, though only just.

> [!example] Practice 11 (TF style): two proportions, two-tailed
> Manufacturer A: 12 faulty out of 200. B: 3 faulty out of 150. Do the proportions differ, at 5%?
>
> **Hypothesis.** $H_0:p_1=p_2$ against $H_1:p_1\ne p_2$.
>
> **Critical region.** $|z|>1.96$.
>
> **Sample proportions.**
>
> $$\hat p_1=0.06 \qquad \hat p_2=0.02$$
>
> **Pooled proportion.**
>
> $$\hat p=\frac{15}{350}=0.04286$$
>
> **Standard error.**
>
> $$SE=\sqrt{0.04286\times0.95714\left(\frac1{200}+\frac1{150}\right)}=0.02188$$
>
> **Calculated value.**
>
> $$z=\frac{0.04}{0.02188}=1.83$$
>
> **Decision.** $1.83<1.96$, so do not reject $H_0$.
>
> **Comment.** No significant difference between the manufacturers.

> [!example] Practice 12 (TF style): two proportions, "has it improved?" (one-tailed)
> Before overhaul: 30 defective in 400. After: 10 defective in 300. Has the process improved, at 5%?
>
> **Hypothesis.** $H_0:p_1=p_2$ against $H_1:p_1>p_2$ (before is worse).
>
> **Critical region.** $z>1.645$.
>
> **Sample proportions.**
>
> $$\hat p_1=0.075 \qquad \hat p_2=0.0333$$
>
> **Pooled proportion.**
>
> $$\hat p=\frac{40}{700}=0.05714$$
>
> **Standard error.**
>
> $$SE=\sqrt{0.05714\times0.94286\left(\frac1{400}+\frac1{300}\right)}=0.01773$$
>
> **Calculated value.**
>
> $$z=\frac{0.0417}{0.01773}=2.35$$
>
> **Decision.** $2.35>1.645$, so reject $H_0$.
>
> **Comment.** The process has significantly improved. (2.35 also slightly exceeds the 1% one-tailed value 2.33.)

---

## Extra practice

> [!question]- Extra practice (try first, then open for answers)
> **E1.** $n=9$, $\bar x=52$, $s=6$. Test $\mu=48$ two-tailed at 5% ($t_{0.025,8}=2.306$).
>
> Answer: $t=4/2=2.00<2.306$, so do not reject.
>
> **E2.** A party claims 20% support; 60 of 400 support it. Is support lower, at 5%?
>
> Answer: $z=(0.15-0.2)/0.02=-2.5<-1.645$, so reject: support is lower.
>
> **E3.** Write the decision rule for $H_1:\mu<\mu_0$ at 1% with a large sample.
>
> Answer: reject $H_0$ if $z<-2.33$.
>
> **E4.** A test gives $z=1.80$ (two-tailed). Find the P-value and the decision at 5%.
>
> Answer: $p=2(1-0.9641)=0.0718>0.05$, so do not reject.
>
> **E5.** In a court trial, $H_0$ is "the accused is innocent". Describe the Type I and Type II errors.
>
> Answer: Type I is convicting an innocent person; Type II is acquitting a guilty person.

---

Previous: [[S7 Sampling Distributions CLT and Confidence Intervals]] · Next: [[S9 Chi-Square Tests]] · Home: [[index]]
