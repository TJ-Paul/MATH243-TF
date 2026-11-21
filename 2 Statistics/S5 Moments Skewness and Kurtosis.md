---
title: "S5 · Moments, Skewness and Kurtosis"
tags: [math243, statistics, moments, skewness, kurtosis]
---

# S5 · Moments, Skewness and Kurtosis

**Why this matters for the TF.** This is the most repeated long calculation in the statistics half.

"First four moments about an assumed mean, convert to moments about the mean, find $\beta_1,\beta_2$ or $\gamma_1,\gamma_2$, and comment" appeared in 2019-20 Q5(b) (25 marks), 2022-23 Q6(c) (15 marks) and 2023-24 Q6(a) (13 marks).

Bowley's and Kelly's skewness appeared in 2020-21 Q5(b) (15 marks), a kurtosis concept question in 2021-22 Q5(b)(ii), and definitions in 2022-23 Q6(a).

==Master the one-table method below and these are almost free marks.== The 2022-23 and 2023-24 questions are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]].

---

## Core tools (memorize)

> [!important] Memorize
> **Raw moments about $A$** — from the $u$-table, $u=\frac{x-A}{h}$:
>
> $$\mu_r'=h^r\cdot\frac{\sum fu^r}{N}$$
>
> **Mean from the first raw moment:**
>
> $$\bar x=A+\mu_1'$$
>
> **Second central moment (variance):**
>
> $$\mu_2=\mu_2'-\mu_1'^2$$
>
> **Third central moment:**
>
> $$\mu_3=\mu_3'-3\mu_2'\mu_1'+2\mu_1'^3$$
>
> **Fourth central moment:**
>
> $$\mu_4=\mu_4'-4\mu_3'\mu_1'+6\mu_2'\mu_1'^2-3\mu_1'^4$$
>
> **Skewness coefficients:**
>
> $$\beta_1=\frac{\mu_3^2}{\mu_2^3}$$
>
> $$\gamma_1=\frac{\mu_3}{\mu_2^{3/2}}$$
>
> **Kurtosis coefficients:**
>
> $$\beta_2=\frac{\mu_4}{\mu_2^2}$$
>
> $$\gamma_2=\beta_2-3$$
>
> ==$\gamma_1>0$ positive skew, $\gamma_1<0$ negative skew, $\gamma_1=0$ symmetric.==
>
> ==$\beta_2>3$ leptokurtic, $\beta_2=3$ mesokurtic, $\beta_2<3$ platykurtic.==
>
> **Karl Pearson's skewness** — use when "coefficient of skewness" has no name:
>
> $$SK_P=\frac{\text{Mean}-\text{Mode}}{\sigma}$$
>
> or, when the mode is unclear,
>
> $$SK_P=\frac{3(\text{Mean}-\text{Median})}{\sigma}$$
>
> **Bowley's skewness** — always between $-1$ and $+1$:
>
> $$SK_B=\frac{Q_3+Q_1-2Q_2}{Q_3-Q_1}$$
>
> **Kelly's skewness:**
>
> $$SK_K=\frac{P_{90}-2P_{50}+P_{10}}{P_{90}-P_{10}}$$

> [!warning] Two traps
> The lecture slide reverses the sign rule for $\gamma_1$. The correct rule is **$\gamma_1>0$ means positive skew** (it carries the sign of $\mu_3$).
>
> Moments in original units need the factor $h^r$; $\beta$ and $\gamma$ are pure numbers and do not.

![[m243-skewness.png]]

---

## Theory the TF actually asks

### Define skewness, kurtosis and moments with examples (2022-23 Q6a)

> [!important] Exam answer
> **Moments** are averages of powers of deviations. The $r$-th central moment is
>
> $$\mu_r=\frac1N\sum f(x-\bar x)^r$$
>
> $\mu_1=0$, $\mu_2$ is the variance, $\mu_3$ measures skewness and $\mu_4$ measures kurtosis. Example: for 2, 4, 4, 4, 5, 5, 7, 9 (mean 5), $\mu_2=4$.
>
> **Skewness** means ==lack of symmetry==.
>
> In a positively skewed distribution the right tail is longer and Mode < Median < Mean (example: incomes, where a few very high earners pull the mean up).
>
> In a negatively skewed one the left tail is longer and Mean < Median < Mode (example: marks in a very easy exam).
>
> **Kurtosis** is ==the degree of peakedness or flatness of a frequency curve compared with the normal curve==, measured by $\beta_2=\mu_4/\mu_2^2$ (3 for the normal).
>
> Leptokurtic ($\beta_2>3$) is more peaked with heavy tails, for example errors of a precise machine with occasional big slips.
>
> Platykurtic ($\beta_2<3$) is flatter, for example marks spread almost evenly over 40–80.

![[m243-kurtosis.png]]

### Advantages and drawbacks of Bowley's and Kelly's measures (2020-21 Q5b)

> [!important] Exam answer
> **Bowley's** coefficient is easy to compute, always lies between $-1$ and $+1$, is not affected by extreme values and works with open-ended classes.
>
> Its main drawback is that it uses only the middle 50% of the data (between $Q_1$ and $Q_3$) and ignores both tails, where skewness usually shows, so it can understate skewness.
>
> **Kelly's** coefficient uses the middle 80% (between $P_{10}$ and $P_{90}$), so it captures more of the tails and is more sensitive than Bowley's, while still ignoring the most extreme values and working with open-ended classes.
>
> Its drawbacks are the extra calculation of percentiles, and it still ignores 20% of the data.
>
> Neither is based on all observations or suitable for further algebra; the moment coefficient $\gamma_1$ is theoretically best. **Pearson's** coefficient uses the mean and SD (all observations) but needs the mode, which is unstable in grouped data.

### Same mean, SD and skewness but different kurtosis? (2021-22 Q5b(ii))

> [!important] Exam answer
> The mean fixes location, the SD (from $\mu_2$) fixes spread and the skewness (from $\mu_3$) fixes asymmetry. None of them involves $\mu_4$, which depends on how much of the data sits in the centre versus the tails.
>
> So two distributions can share the same mean, SD and skewness and still have different $\mu_4$ and different $\beta_2=\mu_4/\mu_2^2$.
>
> **Example.** The normal distribution and the uniform distribution on $(-\sqrt3,\sqrt3)$ both have mean 0, SD 1 and zero skewness. But $\beta_2=3$ (mesokurtic) for the normal and $\beta_2=1.8$ (platykurtic) for the uniform.
>
> ==Mean, SD and skewness do not describe a distribution completely; kurtosis is also needed.== If values of $\mu_4$ are given, compute $\beta_2$ for each and say which is more peaked.

---

## Problem types you will face

### Type 1 — First four moments, $\beta_1,\beta_2,\gamma_1,\gamma_2$ and comment (the big one)

**Recognise it:** a grouped table and "first four moments about assumed mean / about the mean".

**Recipe.**

**Step 1.** One table: class, $x$, $f$, $u$, $fu$, $fu^2$, $fu^3$, $fu^4$. Fill quickly: $fu^2=fu\times u$, $fu^3=fu^2\times u$, $fu^4=fu^3\times u$.

**Step 2.** Raw moments $\mu_r'=h^r\sum fu^r/N$.

**Step 3.** Convert to $\mu_2,\mu_3,\mu_4$, writing each term separately to avoid sign slips.

**Step 4.** $\beta_1,\gamma_1,\beta_2,\gamma_2$, then one sentence on skewness and one on kurtosis.

> [!tip] Self-checks while you work
> $fu^2$ and $fu^4$ are never negative; $fu^3$ has the sign of $u$.
>
> $\mu_2$ and $\mu_4$ must be positive.
>
> $\beta_2\ge1$ always, and exam tables usually give $\beta_2$ between 2 and 4.

> [!example] Past TF 2019-20 Q5(b) (25 marks): Moments of earnings
> **Given.** Earnings 50–70, …, 170–190 (Tk); employees 4, 8, 12, 20, 6, 7, 3. Take $A=120$, $h=20$.
>
> **Step 1 — calculation table.**
>
> | Earnings | $x$ | $f$ | $u$ | $fu$ | $fu^2$ | $fu^3$ | $fu^4$ |
> |---|---|---|---|---|---|---|---|
> | 50–70 | 60 | 4 | −3 | −12 | 36 | −108 | 324 |
> | 70–90 | 80 | 8 | −2 | −16 | 32 | −64 | 128 |
> | 90–110 | 100 | 12 | −1 | −12 | 12 | −12 | 12 |
> | 110–130 | 120 | 20 | 0 | 0 | 0 | 0 | 0 |
> | 130–150 | 140 | 6 | 1 | 6 | 6 | 6 | 6 |
> | 150–170 | 160 | 7 | 2 | 14 | 28 | 56 | 112 |
> | 170–190 | 180 | 3 | 3 | 9 | 27 | 81 | 243 |
> | Total | | 60 | | **−11** | **141** | **−41** | **825** |
>
> (The lecture slide prints $\sum fu=-5$ for this table; that is an addition slip: $-12-16-12+0+6+14+9=-11$.)
>
> **Step 2 — raw moments about 120.**
>
> $$\begin{aligned}
> \mu_1' &= 20\times\frac{-11}{60}=-3.667\\
> \mu_2' &= 400\times\frac{141}{60}=940\\
> \mu_3' &= 8000\times\frac{-41}{60}=-5466.67\\
> \mu_4' &= 160000\times\frac{825}{60}=2{,}200{,}000
> \end{aligned}$$
>
> **Mean:**
>
> $$\bar x=120-3.667=116.33\ \text{Tk}$$
>
> **Step 3 — central moments.**
>
> $$\mu_2=940-13.44=926.56$$
>
> $$\mu_3=-5466.67+10340-98.59=4774.74$$
>
> $$\mu_4=2200000-80177.8+75822.2-542.3=2{,}195{,}106.6$$
>
> **Step 4 — coefficients.**
>
> $$\gamma_1=\frac{4774.74}{926.56^{1.5}}=\frac{4774.74}{28204.0}=0.169$$
>
> $$\beta_1=0.0287$$
>
> $$\beta_2=\frac{2195106.6}{858513.6}=2.557$$
>
> $$\gamma_2=-0.443$$
>
> **Answer.** $\gamma_1=0.169>0$: **slightly positively skewed** (longer tail toward high earnings). $\beta_2=2.557<3$: **platykurtic**, flatter than the normal curve.

> [!example] Practice 1 (TF style, $h=10$)
> Scores of 90 students: 10–20: 5, 20–30: 9, 30–40: 16, 40–50: 24, 50–60: 20, 60–70: 12, 70–80: 4. Find the first four moments about the mean, $\beta_1,\beta_2$, and comment.
>
> **Given.** Take $A=45$, $h=10$.
>
> **Step 1 — calculation table.**
>
> | $x$ | $f$ | $u$ | $fu$ | $fu^2$ | $fu^3$ | $fu^4$ |
> |---|---|---|---|---|---|---|
> | 15 | 5 | −3 | −15 | 45 | −135 | 405 |
> | 25 | 9 | −2 | −18 | 36 | −72 | 144 |
> | 35 | 16 | −1 | −16 | 16 | −16 | 16 |
> | 45 | 24 | 0 | 0 | 0 | 0 | 0 |
> | 55 | 20 | 1 | 20 | 20 | 20 | 20 |
> | 65 | 12 | 2 | 24 | 48 | 96 | 192 |
> | 75 | 4 | 3 | 12 | 36 | 108 | 324 |
> | Total | 90 | | 7 | 201 | 1 | 1101 |
>
> **Step 2 — raw moments about 45.**
>
> $$\begin{aligned}
> \mu_1' &= 10\times\frac{7}{90}=0.7778\\
> \mu_2' &= 100\times\frac{201}{90}=223.33\\
> \mu_3' &= 1000\times\frac{1}{90}=11.11\\
> \mu_4' &= 10000\times\frac{1101}{90}=122333.33
> \end{aligned}$$
>
> **Mean:** $45.78$.
>
> **Step 3 — central moments.**
>
> $$\mu_2=223.33-0.605=222.73$$
>
> $$\mu_3=11.11-521.11+0.94=-509.06$$
>
> $$\mu_4=122333.33-34.57+810.62-1.10=123108.28$$
>
> **Step 4 — coefficients.**
>
> $$\beta_1=\frac{509.06^2}{222.73^3}=0.0235$$
>
> $$\gamma_1=\frac{-509.06}{222.73^{1.5}}=-0.153$$
>
> $$\beta_2=\frac{123108.28}{222.73^2}=2.48$$
>
> $$\gamma_2=-0.52$$
>
> **Answer.** $\gamma_1<0$: slightly **negatively skewed** (a longer tail toward low scores). $\beta_2<3$: **platykurtic**.

> [!example] Practice 2 (TF style, $h=5$)
> Weights (kg) of 100 people: 25–30: 3, 30–35: 10, 35–40: 22, 40–45: 30, 45–50: 18, 50–55: 12, 55–60: 5. Find the moments about the mean, $\gamma_1$, $\gamma_2$, and comment.
>
> **Given.** Take $A=42.5$, $h=5$.
>
> **Step 1 — calculation table.**
>
> | $x$ | $f$ | $u$ | $fu$ | $fu^2$ | $fu^3$ | $fu^4$ |
> |---|---|---|---|---|---|---|
> | 27.5 | 3 | −3 | −9 | 27 | −81 | 243 |
> | 32.5 | 10 | −2 | −20 | 40 | −80 | 160 |
> | 37.5 | 22 | −1 | −22 | 22 | −22 | 22 |
> | 42.5 | 30 | 0 | 0 | 0 | 0 | 0 |
> | 47.5 | 18 | 1 | 18 | 18 | 18 | 18 |
> | 52.5 | 12 | 2 | 24 | 48 | 96 | 192 |
> | 57.5 | 5 | 3 | 15 | 45 | 135 | 405 |
> | Total | 100 | | 6 | 200 | 66 | 1040 |
>
> **Step 2 — raw moments about 42.5.**
>
> $$\begin{aligned}
> \mu_1' &= 5(0.06)=0.3\\
> \mu_2' &= 25(2)=50\\
> \mu_3' &= 125(0.66)=82.5\\
> \mu_4' &= 625(10.4)=6500
> \end{aligned}$$
>
> **Mean:** $42.8$ kg.
>
> **Step 3 — central moments.**
>
> $$\mu_2=50-0.09=49.91$$
>
> $$\mu_3=82.5-45+0.054=37.554$$
>
> $$\mu_4=6500-99+27-0.024=6427.98$$
>
> **Step 4 — coefficients.**
>
> $$\gamma_1=\frac{37.554}{49.91^{1.5}}=0.107$$
>
> $$\beta_1=0.0113$$
>
> $$\beta_2=\frac{6427.98}{49.91^2}=2.58$$
>
> $$\gamma_2=-0.42$$
>
> **Answer.** Slightly **positively skewed** and **platykurtic**.

---

### Type 2 — Moments of ungrouped data

**Recognise it:** a short list of values.

**Recipe:** find $\bar x$, then deviations $d=x-\bar x$ and the columns $d^2,d^3,d^4$. Divide each sum by $n$.

> [!example] Practice 3 (TF style)
> Values 3, 5, 6, 8, 8, 9, 10, 15. Find $\mu_2,\mu_3,\mu_4$, $\gamma_1$, $\beta_2$.
>
> **Step 1 — mean and deviations.**
>
> $$\bar x=\frac{64}{8}=8$$
>
> Deviations: $-5,-3,-2,0,0,1,2,7$.
>
> **Step 2 — sums of powers.**
>
> $$\sum d^2=92$$
>
> $$\sum d^3=-125-27-8+1+8+343=192$$
>
> $$\sum d^4=625+81+16+1+16+2401=3140$$
>
> **Step 3 — moments.**
>
> $$\mu_2=11.5 \qquad \mu_3=24 \qquad \mu_4=392.5$$
>
> **Step 4 — coefficients.**
>
> $$\gamma_1=\frac{24}{11.5^{1.5}}=0.615$$
>
> $$\beta_2=\frac{392.5}{132.25}=2.97$$
>
> **Answer.** **Positively skewed** (because of the long tail at 15) and **almost mesokurtic**, very slightly platykurtic.

---

### Type 3 — Bowley's and Kelly's coefficients from grouped data

**Recognise it:** "Bowley's", "Kelly's", "quartile coefficient of skewness".

**Recipe:** add a cumulative frequency column. Positions are $N/4, N/2, 3N/4$ (Bowley) and $N/10, 9N/10$ (Kelly). Use $L+\frac{\text{pos}-F}{f}h$, substitute, then interpret and compare.

> [!example] Past TF 2020-21 Q5(b) (15 marks): Bowley's and Kelly's coefficients
> **Given.** Weight 30–40, …, 80–90; frequencies 18, 37, 45, 27, 15, 8.
>
> **Step 1 — cumulative table.**
>
> | Weight | $f$ | Cumulative $F$ |
> |---|---|---|
> | 30–40 | 18 | 18 |
> | 40–50 | 37 | 55 |
> | 50–60 | 45 | 100 |
> | 60–70 | 27 | 127 |
> | 70–80 | 15 | 142 |
> | 80–90 | 8 | 150 |
>
> $N=150$, $h=10$.
>
> **Step 2 — quartiles.**
>
> $Q_1$ (position 37.5, class 40–50):
>
> $$Q_1=40+\frac{37.5-18}{37}\times10=45.27$$
>
> $Q_2$ (position 75, class 50–60):
>
> $$Q_2=50+\frac{75-55}{45}\times10=54.44$$
>
> $Q_3$ (position 112.5, class 60–70):
>
> $$Q_3=60+\frac{112.5-100}{27}\times10=64.63$$
>
> **Step 3 — percentiles.**
>
> $P_{10}$ (position 15, class 30–40):
>
> $$P_{10}=30+\frac{15}{18}\times10=38.33$$
>
> $P_{90}$ (position 135, class 70–80):
>
> $$P_{90}=70+\frac{135-127}{15}\times10=75.33$$
>
> **Step 4 — Bowley's coefficient.**
>
> $$SK_B=\frac{64.63+45.27-2(54.44)}{64.63-45.27}=\frac{1.01}{19.36}=0.052$$
>
> **Step 5 — Kelly's coefficient.**
>
> $$SK_K=\frac{75.33-2(54.44)+38.33}{75.33-38.33}=\frac{4.78}{37.00}=0.129$$
>
> **Answer.** **$SK_B=0.052$, $SK_K=0.129$.** Both are positive, so the weights are **mildly positively skewed**.
>
> **Interpretation.** Kelly's value is larger because it uses the middle 80% and "sees" more of the right tail (70–90), while Bowley's uses only the middle 50%. This shows Bowley's drawback and Kelly's advantage; Kelly's costs more work and both ignore the extreme values.

> [!example] Practice 4 (TF style)
> Frequencies for 0–10, …, 50–60: 10, 24, 36, 28, 14, 8. Find Bowley's and Kelly's coefficients.
>
> **Given.** $N=120$; cumulative 10, 34, 70, 98, 112, 120.
>
> **Step 1 — quartiles and percentiles.**
>
> $$\begin{aligned}
> Q_1 &= 18.33 && \text{(pos 30, class 10–20, } F=10,\ f=24)\\
> Q_2 &= 27.22 && \text{(pos 60, class 20–30, } F=34,\ f=36)\\
> Q_3 &= 37.14 && \text{(pos 90, class 30–40, } F=70,\ f=28)\\
> P_{10} &= 10.83 && \text{(pos 12, class 10–20)}\\
> P_{90} &= 47.14 && \text{(pos 108, class 40–50, } F=98,\ f=14)
> \end{aligned}$$
>
> **Step 2 — Bowley's coefficient.**
>
> $$SK_B=\frac{37.14+18.33-54.44}{37.14-18.33}=0.055$$
>
> **Step 3 — Kelly's coefficient.**
>
> $$SK_K=\frac{47.14-54.44+10.83}{47.14-10.83}=0.097$$
>
> **Answer.** Both slightly positive: a mild right tail, picked up more strongly by Kelly's measure.

---

### Type 4 — Karl Pearson's coefficient of skewness

**Recognise it:** "coefficient of skewness" with no name given, or "Pearson's".

**Recipe:** mean and SD (step deviation), mode (grouped formula), then $SK_P=(\text{Mean}-\text{Mode})/\sigma$. If the modal class is at an end or unclear, use $3(\text{Mean}-\text{Median})/\sigma$.

> [!example] Practice 5 (TF style, data of Practice 1)
> **Given.** From Practice 1: mean $=45.78$ and
>
> $$\sigma=\sqrt{222.73}=14.92$$
>
> **Step 1 — mode.** Modal class 40–50 with $\Delta_1=24-16=8$, $\Delta_2=24-20=4$:
>
> $$\text{Mode}=40+\frac{8}{12}\times10=46.67$$
>
> **Step 2 — Pearson's coefficient.**
>
> $$SK_P=\frac{45.78-46.67}{14.92}=-0.060$$
>
> **Answer.** Slightly negatively skewed, which agrees with $\gamma_1=-0.153$.

---

## Extra practice

> [!question]- Answers
> **1.** $\mu_1'=1$, $\mu_2'=5$, $\mu_3'=12$, $\mu_4'=50$. Find $\mu_2,\mu_3,\mu_4$.
>
> $\mu_2=4$, $\mu_3=12-15+2=-1$, $\mu_4=50-48+30-3=29$.
>
> **2.** Comment on those values.
>
> $\gamma_1=-1/8=-0.125$ (slightly negative skew); $\beta_2=29/16=1.81$ (platykurtic).
>
> **3.** $Q_1=20$, $Q_2=30$, $Q_3=45$: Bowley's coefficient?
>
> $5/25=0.2$, positive skew.
>
> **4.** Mean 52, median 50, SD 12: Pearson's coefficient (median form)?
>
> $3(2)/12=0.5$, positively skewed.
>
> **5.** Why is $\gamma_1$ preferred to $\beta_1$?
>
> $\beta_1$ is a square, always non-negative, so it hides the direction; $\gamma_1$ keeps the sign of $\mu_3$.
>
> **6.** $\mu_2=16$ and $\mu_4=900$: kurtosis?
>
> $\beta_2=900/256=3.52>3$, leptokurtic.

---

Previous: [[S4 Measures of Dispersion]] · Next: [[S6 Correlation and Regression]] · Home: [[index]]
