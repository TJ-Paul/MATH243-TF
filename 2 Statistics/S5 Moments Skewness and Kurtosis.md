---
title: "S5 · Moments, Skewness and Kurtosis"
tags: [math243, statistics, moments, skewness, kurtosis]
---

# S5 · Moments, Skewness and Kurtosis

**Why this matters for the term final.** This is the single most repeated long calculation in the statistics half. "Calculate the first four moments about an assumed mean, convert them to moments about the mean, find $\beta_1, \beta_2$ (or $\gamma_1, \gamma_2$) and comment" appeared in 2019-20 Q5(b) (25 marks!), 2022-23 Q6(c) (15 marks) and 2023-24 Q6(a) (13 marks). Bowley's and Kelly's coefficients of skewness appeared in 2020-21 Q5(b) (15 marks), a kurtosis concept question in 2021-22 Q5(b)(ii), and definitions of skewness, kurtosis and moments in 2022-23 Q6(a). The 2019-20, 2020-21 and 2021-22 questions are fully solved here; the 2022-23 and 2023-24 ones are in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]]. ==If you master the one table method in Section 4, you can earn 13–25 marks almost mechanically.==

---

## 1. Skewness: meaning

> [!important] Memorize: Skewness
> ==Skewness means lack of symmetry.== A distribution is symmetric if its two halves around the centre are mirror images; then Mean = Median = Mode. A distribution is **positively skewed** (skewed to the right) if it has a long tail to the right; then Mode < Median < Mean. It is **negatively skewed** (skewed to the left) if it has a long tail to the left; then Mean < Median < Mode. Measures of dispersion tell us **how much** the data vary; measures of skewness tell us the **direction** in which the data are spread out.

![[m243-skewness.png]]

A memory aid: the mean is "pulled" toward the long tail by the extreme values, while the mode stays at the peak. So the order of mean and mode tells you the direction of skew. Incomes, waiting times and file sizes are typical positively skewed variables; marks in an easy exam are often negatively skewed.

## 2. Three coefficients of skewness

> [!important] Memorize: Karl Pearson's coefficient of skewness
> $$SK_P = \frac{\text{Mean} - \text{Mode}}{\sigma} \qquad\text{or, when the mode is ill-defined,}\qquad SK_P = \frac{3(\text{Mean} - \text{Median})}{\sigma}$$
> $SK_P > 0$: positively skewed; $SK_P < 0$: negatively skewed; $SK_P = 0$: symmetric. In practice it usually lies between −3 and +3.

> [!important] Memorize: Bowley's coefficient (quartile coefficient) of skewness
> $$SK_B = \frac{(Q_3 - Q_2) - (Q_2 - Q_1)}{Q_3 - Q_1} = \frac{Q_3 + Q_1 - 2Q_2}{Q_3 - Q_1}$$
> If $Q_3 - Q_2 = Q_2 - Q_1$ the distribution is symmetric ($SK_B = 0$); if the upper quartile is farther from the median than the lower one, it is positively skewed ($SK_B > 0$); otherwise negatively skewed. ==$SK_B$ always lies between −1 and +1.==

> [!important] Memorize: Kelly's coefficient of skewness
> $$SK_K = \frac{P_{90} - 2P_{50} + P_{10}}{P_{90} - P_{10}} = \frac{D_9 - 2D_5 + D_1}{D_9 - D_1}$$
> It is Bowley's idea applied to the 10th and 90th percentiles instead of the quartiles.

**Advantages and drawbacks (needed for the "interpret by discussing advantages and drawbacks" part of 2020-21 Q5b).** Pearson's coefficient uses the mean and standard deviation, so it is based on all observations; its drawbacks are that it needs the mode, which is often ill-defined or unstable in grouped data, it has no fixed limits, and it is affected by extreme values. Bowley's coefficient is easy to compute, has fixed limits of ±1, is not affected by extreme values and can be used for open-ended classes; its big drawback is that it uses only the middle 50% of the data (between $Q_1$ and $Q_3$) and completely ignores the two tails, which is exactly where skewness usually shows up, so it can underestimate skewness. Kelly's coefficient improves on Bowley by using the middle 80% (between $P_{10}$ and $P_{90}$), so it captures more of the tails and is usually more sensitive, while still being free of the most extreme values and usable for open-ended classes; its drawbacks are that it still ignores 20% of the data, needs more calculation, and is not suitable for further algebraic treatment. Neither Bowley nor Kelly is based on all observations; the moment coefficient $\gamma_1$ (Section 5) is the theoretically best measure.

**Quick Pearson example.** For Factory A in [[S3 Measures of Central Tendency]] and [[S4 Measures of Dispersion]]: mean 51.5, mode 53.48, median 51.83, $\sigma = 14.55$. $SK_P = (51.5 - 53.48)/14.55 = -0.136$, or with the median, $3(51.5 - 51.83)/14.55 = -0.069$. Both are slightly negative, so the wage distribution is slightly negatively skewed.

> [!example] Past TF 2020-21 Q5(b) (15 marks): Bowley's and Kelly's coefficients
> **Data.** Weight 30–40, 40–50, 50–60, 60–70, 70–80, 80–90 with frequencies 18, 37, 45, 27, 15, 8.
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
> $N = 150$, $h = 10$. Use $\text{value} = L + \frac{\text{position} - F}{f}\times h$.
>
> $Q_1$: position $N/4 = 37.5$, class 40–50 ($F = 18$, $f = 37$): $Q_1 = 40 + \frac{37.5 - 18}{37}\times10 = 45.27$.
>
> $Q_2$: position $N/2 = 75$, class 50–60 ($F = 55$, $f = 45$): $Q_2 = 50 + \frac{75 - 55}{45}\times10 = 54.44$.
>
> $Q_3$: position $3N/4 = 112.5$, class 60–70 ($F = 100$, $f = 27$): $Q_3 = 60 + \frac{112.5 - 100}{27}\times10 = 64.63$.
>
> $P_{10}$: position $10N/100 = 15$, class 30–40 ($F = 0$, $f = 18$): $P_{10} = 30 + \frac{15 - 0}{18}\times10 = 38.33$.
>
> $P_{90}$: position $90N/100 = 135$, class 70–80 ($F = 127$, $f = 15$): $P_{90} = 70 + \frac{135 - 127}{15}\times10 = 75.33$.
>
> **Bowley:** $$SK_B = \frac{64.63 + 45.27 - 2(54.44)}{64.63 - 45.27} = \frac{1.01}{19.36} = 0.052$$
>
> **Kelly:** $$SK_K = \frac{75.33 - 2(54.44) + 38.33}{75.33 - 38.33} = \frac{4.78}{37.00} = 0.129$$
>
> **Interpretation.** Both coefficients are positive, so the distribution of weights is **positively skewed** (a longer tail toward heavier weights), but the skewness is mild. Kelly's value (0.129) is larger than Bowley's (0.052) because Kelly's measure uses the middle 80% of the data and therefore "sees" more of the right tail (the classes 70–90), whereas Bowley's measure uses only the middle 50% and misses most of the tail. This illustrates the main drawback of Bowley's method and the advantage of Kelly's; the price of Kelly's method is the extra work of computing deciles/percentiles, and both still ignore the extreme observations.

## 3. Moments

> [!important] Memorize: Moments
> Moments are averages of powers of deviations. They give a complete description of a distribution: the first moment about zero is the mean (location), the second central moment is the variance (spread), the third central moment measures skewness, and the fourth central moment measures kurtosis (peakedness).
>
> **Raw moments about an assumed value $A$:** $$\mu_r' = \frac{\sum f_i (x_i - A)^r}{N}, \quad r = 1,2,3,4$$
> **Central moments (about the mean):** $$\mu_r = \frac{\sum f_i (x_i - \bar{x})^r}{N}$$
> Always $\mu_0 = 1$, $\mu_1 = 0$, $\mu_2 = \sigma^2$, and $\bar{x} = A + \mu_1'$.

Computing central moments directly is painful because $\bar{x}$ is usually not a round number. So we compute raw moments about a convenient $A$ and convert them.

> [!important] Memorize: Converting raw moments to central moments
> $$\mu_2 = \mu_2' - \mu_1'^2$$
>
> $$\mu_3 = \mu_3' - 3\mu_2'\mu_1' + 2\mu_1'^3$$
>
> $$\mu_4 = \mu_4' - 4\mu_3'\mu_1' + 6\mu_2'\mu_1'^2 - 3\mu_1'^4$$
> Pattern to remember: the coefficients are binomial coefficients with alternating signs, and the last term's coefficient is "power minus 1" ($\mu_3$: $+2$, $\mu_4$: $-3$).

**Using the step deviation $u = (x - A)/h$.** It is much easier to compute $\frac{\sum f u^r}{N}$ (call these "moments in $u$-units"). Then the raw moments in original units are $\mu_r' = h^r \cdot \frac{\sum f u^r}{N}$. You can either convert to original units first and then apply the conversion formulas, or apply the conversion formulas in $u$-units and multiply each central moment by $h^r$ at the end ($\mu_2$ by $h^2$, $\mu_3$ by $h^3$, $\mu_4$ by $h^4$). Both give the same answer. ==$\beta_1, \beta_2, \gamma_1, \gamma_2$ are pure numbers, so you can even compute them directly in $u$-units without multiplying by $h$ at all.==

> [!warning] Common mistake
> Forgetting to multiply by $h^r$ when the question asks for moments "about the mean" in original units. The ratios $\beta_1$, $\beta_2$ are unaffected, but the moments themselves are wrong by factors of 10, 100, 1000, 10000.

## 4. Moment measures of skewness and kurtosis

> [!important] Memorize: $\beta_1$, $\gamma_1$, $\beta_2$, $\gamma_2$
> $$\beta_1 = \frac{\mu_3^2}{\mu_2^3}, \qquad \gamma_1 = \sqrt{\beta_1} = \frac{\mu_3}{\mu_2^{3/2}}\ (\text{takes the sign of } \mu_3)$$
>
> $$\beta_2 = \frac{\mu_4}{\mu_2^2}, \qquad \gamma_2 = \beta_2 - 3$$
> ==$\gamma_1 = 0$: symmetric; $\gamma_1 > 0$: positively skewed; $\gamma_1 < 0$: negatively skewed.==
> ==$\beta_2 > 3$ ($\gamma_2 > 0$): leptokurtic; $\beta_2 = 3$ ($\gamma_2 = 0$): mesokurtic (normal); $\beta_2 < 3$ ($\gamma_2 < 0$): platykurtic.==

> [!warning] Typo in the lecture slide
> The lecture slide on page 13 says "for positively and negatively skewed distribution $\gamma_1 < 0$ and $\gamma_1 > 0$ respectively". That is reversed. The correct statement is: **$\gamma_1 > 0$ means positive skew** and **$\gamma_1 < 0$ means negative skew**, because $\gamma_1$ has the sign of $\mu_3$, and a long right tail makes the cubed positive deviations dominate.

$\beta_1$ is always non-negative (it is a square), so it measures only the **amount** of skewness, not the direction. That is why Karl Pearson recommended $\gamma_1$, which keeps the sign.

## 5. Kurtosis

> [!important] Memorize: Kurtosis
> ==Kurtosis refers to the degree of flatness or peakedness of a frequency curve near its mode, compared with the normal curve.== A curve as peaked as the normal curve is **mesokurtic**; more peaked (with heavier tails) is **leptokurtic**; flatter than normal is **platykurtic**. It is measured by $\beta_2 = \mu_4/\mu_2^2$, which equals 3 for the normal distribution.

![[m243-kurtosis.png]]

**Definitions with examples (2022-23 Q6a style).** Moments: the $r$-th central moment $\mu_r = \frac{1}{N}\sum f(x - \bar{x})^r$; for example, $\mu_2$ of 2, 4, 4, 4, 5, 5, 7, 9 is 4. Skewness: lack of symmetry; for example, the income of a city's people is positively skewed because a few very rich people make a long right tail. Kurtosis: peakedness; for example, a set of measurements from a very precise machine with occasional large errors is leptokurtic (tall narrow centre with heavy tails), while marks spread almost uniformly over 40–80 would be platykurtic.

**Why can two distributions with the same mean, SD and skewness have different kurtosis? (2021-22 Q5b(ii))** The mean fixes the location, the SD (from $\mu_2$) fixes the overall spread, and the skewness (from $\mu_3$) fixes the asymmetry. None of these involves the fourth moment $\mu_4$, which depends on how the observations are distributed between the centre and the tails. Two distributions can share the same $\bar{x}$, $\mu_2$ and $\mu_3$ but have different $\mu_4$, and therefore different $\beta_2 = \mu_4/\mu_2^2$. For example, consider two symmetric distributions with mean 0 and variance 1: the normal distribution has $\beta_2 = 3$ (mesokurtic), while a uniform distribution on $(-\sqrt3, \sqrt3)$ also has mean 0, variance 1 and zero skewness, yet $\beta_2 = 1.8$ (platykurtic). The comment to write is: =="mean, standard deviation and skewness alone do not characterize a distribution completely; the fourth moment (kurtosis) is needed to describe its peakedness and tail-heaviness, so the two distributions may still differ in shape."== If numerical values of $\mu_4$ are given, compute $\beta_2$ for each and state which is lepto-, meso- or platykurtic; the one with larger $\beta_2$ is more peaked.

## 6. The complete method (one table does everything)

To answer a full moments question, build a single table with columns: class, mid-value $x$, $f$, $u = (x - A)/h$, $fu$, $fu^2$, $fu^3$, $fu^4$. A quick way to fill it: $fu^2 = (fu)\times u$, $fu^3 = (fu^2)\times u$, $fu^4 = (fu^3)\times u$. Then divide each column total by $N$ to get $\mu_1', \mu_2', \mu_3', \mu_4'$ in $u$-units, multiply by $h, h^2, h^3, h^4$ to get raw moments about $A$, apply the conversion formulas, and finally compute $\beta_1, \beta_2, \gamma_1, \gamma_2$ and write the comment on skewness and kurtosis.

> [!example] Past TF 2019-20 Q5(b) (25 marks): Moments of earnings
> **Data.** Earnings (Tk) 50–70, 70–90, …, 170–190 with employees 4, 8, 12, 20, 6, 7, 3. Take $A = 120$, $h = 20$.
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
> (The lecture slide prints $\sum fu = -5$ for this same table; that is an addition slip. $-12 - 16 - 12 + 0 + 6 + 14 + 9 = -11$. Use −11.)
>
> **Raw moments about $A = 120$:**
> $$\mu_1' = 20\times\frac{-11}{60} = -3.667, \quad \mu_2' = 400\times\frac{141}{60} = 940, \quad \mu_3' = 8000\times\frac{-41}{60} = -5466.67, \quad \mu_4' = 160000\times\frac{825}{60} = 2{,}200{,}000$$
> Mean $= A + \mu_1' = 120 - 3.667 = 116.33$ Tk.
>
> **Central moments:**
> $$\mu_2 = 940 - (-3.667)^2 = 940 - 13.44 = 926.56$$
>
> $$\mu_3 = -5466.67 - 3(940)(-3.667) + 2(-3.667)^3 = -5466.67 + 10340 - 98.59 = 4774.74$$
>
> $$\mu_4 = 2200000 - 4(-5466.67)(-3.667) + 6(940)(-3.667)^2 - 3(-3.667)^4 = 2200000 - 80177.8 + 75822.2 - 542.3 = 2{,}195{,}106.6$$
>
> **Coefficients:**
> $$\gamma_1 = \frac{\mu_3}{\mu_2^{3/2}} = \frac{4774.74}{(926.56)^{1.5}} = \frac{4774.74}{28204.0} = 0.169, \qquad \beta_1 = \gamma_1^2 = 0.0287$$
>
> $$\beta_2 = \frac{\mu_4}{\mu_2^2} = \frac{2195106.6}{858513.6} = 2.557, \qquad \gamma_2 = \beta_2 - 3 = -0.443$$
>
> **Comment.** Since $\gamma_1 = 0.169 > 0$, the distribution of earnings is **slightly positively skewed** (a slightly longer tail toward high earnings). Since $\beta_2 = 2.557 < 3$ ($\gamma_2 < 0$), the distribution is **platykurtic**, i.e. flatter than the normal curve.

> [!tip] Exam trick: check your arithmetic
> The $fu^2$ and $fu^4$ columns can never contain negative numbers, and $fu^3$ has the same sign as $u$. $\mu_2$ and $\mu_4$ must come out positive; if $\mu_2 < 0$ you have made an error. Also $\beta_2 \ge 1$ always, and for typical exam tables $\beta_2$ is between about 2 and 4.

**Fresh mini-practice.** For the values 2, 4, 4, 4, 5, 5, 7, 9 (mean 5): deviations −3, −1, −1, −1, 0, 0, 2, 4. $\mu_2 = 32/8 = 4$, $\mu_3 = (-27 - 1 - 1 - 1 + 0 + 0 + 8 + 64)/8 = 42/8 = 5.25$, $\mu_4 = (81 + 1 + 1 + 1 + 0 + 0 + 16 + 256)/8 = 356/8 = 44.5$. So $\gamma_1 = 5.25/4^{1.5} = 5.25/8 = 0.656$ (positively skewed, because of the long tail at 9) and $\beta_2 = 44.5/16 = 2.78$ (slightly platykurtic).

---

> [!question]- Self-check
> **1. Given $\mu_1' = 1$, $\mu_2' = 5$, $\mu_3' = 12$, $\mu_4' = 50$ (about $A$), find $\mu_2, \mu_3, \mu_4$.**
> $\mu_2 = 5 - 1 = 4$; $\mu_3 = 12 - 15 + 2 = -1$; $\mu_4 = 50 - 48 + 30 - 3 = 29$.
>
> **2. With those values, comment on skewness and kurtosis.**
> $\gamma_1 = -1/8 = -0.125$ (slightly negatively skewed); $\beta_2 = 29/16 = 1.81 < 3$ (platykurtic).
>
> **3. $Q_1 = 20$, $Q_2 = 30$, $Q_3 = 45$. Bowley's coefficient?**
> $(45 + 20 - 60)/(45 - 20) = 5/25 = 0.2$, positively skewed.
>
> **4. Why is $\gamma_1$ preferred to $\beta_1$?**
> $\beta_1 = \mu_3^2/\mu_2^3$ is always non-negative and cannot show the direction; $\gamma_1$ keeps the sign of $\mu_3$.
>
> **5. What is $\beta_2$ for a normal distribution, and what does $\beta_2 = 4.2$ mean?**
> 3; $\beta_2 = 4.2 > 3$ means leptokurtic (more peaked, heavier tails).

---

Previous: [[S4 Measures of Dispersion]] · Next: [[S6 Correlation and Regression]] · Home: [[index]]
