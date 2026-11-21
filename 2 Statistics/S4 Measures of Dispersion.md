---
title: "S4 · Measures of Dispersion"
tags: [math243, statistics, dispersion]
---

# S4 · Measures of Dispersion

**Why this matters for the term final.** "Which is more variable / more consistent?" is a favourite question. The 2019-20 term final Q5(a) asked for the coefficient of variation of a grouped profit table, and 2020-21 Q5(a)(ii) asked which factory has greater variability in wages; both are solved below. The 2023-24 term final Q5(c) asked you to correct a mean and standard deviation after two values were wrongly copied and then find the correct coefficient of variation, and 2022-23 Q5(c) asked which company's bulbs to prefer (higher mean life, lower CV); those two are solved in [[TF 2023-24 Solutions]] and [[TF 2022-23 Solutions]], and this note gives you a fresh practice of each type. 2022-23 Q6(a) also asked you to "define and illustrate" standard deviation and variance.

---

## 1. What is dispersion and why do we need it?

Two data sets can have the same mean but be completely different. The marks 49, 50, 51 and the marks 0, 50, 100 both have mean 50, but in the first set everyone is close to the average and in the second set the marks are widely scattered. A **measure of dispersion** (variation, spread, scatter) tells us how much the observations differ from each other or from the central value. We need it to judge how reliable the average is (a small spread means the average represents the data well), to compare the consistency of two groups (two machines, two factories, two players), and as the foundation of all statistical inference (standard errors, tests, confidence intervals).

Measures of dispersion are of two types. **Absolute measures** (range, quartile deviation, mean deviation, standard deviation) are expressed in the same units as the data, so they cannot compare data in different units or with very different means. **Relative measures** (coefficient of range, coefficient of quartile deviation, coefficient of variation) are pure numbers (ratios or percentages), so they can compare any two distributions.

## 2. Range, quartile deviation, mean deviation

The **range** is $R = \text{Largest} - \text{Smallest}$, and the coefficient of range is $\dfrac{L - S}{L + S}$. It is very easy but depends only on the two extreme values, so a single outlier changes it completely.

The **quartile deviation** (semi-interquartile range) is $QD = \dfrac{Q_3 - Q_1}{2}$, with coefficient $\dfrac{Q_3 - Q_1}{Q_3 + Q_1}$. It uses the middle 50% of data, so it is not affected by extremes and works for open-ended classes, but it ignores half of the data.

The **mean deviation** about the mean is $MD = \dfrac{\sum f_i |x_i - \bar{x}|}{N}$. It uses all observations, but the absolute value sign makes it unsuitable for algebraic work.

## 3. Variance and standard deviation

> [!important] Memorize: Definitions of variance and standard deviation
> The ==variance== is the mean of the squared deviations of the observations from their mean. The ==standard deviation (SD)== is the positive square root of the variance. SD is in the same units as the data and is the most important and most used measure of dispersion.
> $$\sigma^2 = \frac{\sum (x_i - \bar{x})^2}{n} = \frac{\sum x_i^2}{n} - \bar{x}^2, \qquad \sigma = \sqrt{\sigma^2}$$
> **Grouped data:** $$\sigma^2 = \frac{\sum f_i x_i^2}{N} - \left(\frac{\sum f_i x_i}{N}\right)^2$$
> **Step-deviation** ($u = \frac{x - A}{h}$): $$\sigma = h\sqrt{\frac{\sum f_i u_i^2}{N} - \left(\frac{\sum f_i u_i}{N}\right)^2}$$

Why squares? Deviations from the mean add to zero, so we cannot simply average them. Squaring makes all deviations positive and gives more weight to large deviations, and it has excellent mathematical properties (it is the second central moment $\mu_2$, see [[S5 Moments Skewness and Kurtosis]]).

**Illustration (for "define and illustrate" questions).** For the data 2, 4, 4, 4, 5, 5, 7, 9: $n = 8$, $\sum x = 40$, $\bar{x} = 5$. The deviations are −3, −1, −1, −1, 0, 0, 2, 4, their squares are 9, 1, 1, 1, 0, 0, 4, 16, summing to 32. Variance $= 32/8 = 4$ and SD $= 2$. Interpretation: on average the observations lie about 2 units away from the mean of 5.

> [!warning] Divisor $n$ or $n-1$?
> In descriptive statistics (the grouped tables in this course and the lecture slides), divide by $N$ to get $\sigma$. In hypothesis tests and confidence intervals, where a sample is used to **estimate** the population variance, use $s^2 = \dfrac{\sum (x_i - \bar{x})^2}{n - 1}$ (see [[S8 Hypothesis Testing Concepts and z t Tests]]). If a question just says "standard deviation" of a frequency table, use $N$.

**Properties of SD.** SD is not affected by a change of origin (adding a constant to every value does not change it), but it is affected by a change of scale: if $y = a + bx$, then $\sigma_y = |b|\sigma_x$. That is exactly why the step-deviation formula multiplies by $h$. SD is zero only if all values are equal.

## 4. Coefficient of variation

> [!important] Memorize: Coefficient of variation (CV)
> $$CV = \frac{\sigma}{\bar{x}} \times 100\%$$
> ==The group with the **larger** CV is **more variable** (less consistent, less uniform, less stable). The group with the **smaller** CV is more consistent.== CV is a pure number, so it compares distributions with different means or different units.

The CV was introduced by Karl Pearson. A company asking "which machine is more reliable", "which factory has more uniform wages" or "whose performance is more consistent" is asking for CV. When the means are equal, comparing SDs directly gives the same answer; when means differ, you must use CV.

> [!example] Past TF 2020-21 Q5(a)(ii): Which factory has greater variability in wages?
> Using the same table as in [[S3 Measures of Central Tendency]] ($A = 55$, $h = 10$), add the $f u^2$ columns.
>
> | $x$ | $u$ | $f_A$ | $f_A u$ | $f_A u^2$ | $f_B$ | $f_B u$ | $f_B u^2$ |
> |---|---|---|---|---|---|---|---|
> | 25 | −3 | 15 | −45 | 135 | 25 | −75 | 225 |
> | 35 | −2 | 30 | −60 | 120 | 40 | −80 | 160 |
> | 45 | −1 | 44 | −44 | 44 | 60 | −60 | 60 |
> | 55 | 0 | 60 | 0 | 0 | 35 | 0 | 0 |
> | 65 | 1 | 30 | 30 | 30 | 20 | 20 | 20 |
> | 75 | 2 | 14 | 28 | 56 | 15 | 30 | 60 |
> | 85 | 3 | 7 | 21 | 63 | 5 | 15 | 45 |
> | Total | | 200 | −70 | 448 | 200 | −150 | 570 |
>
> **Factory A:** $\bar{x}_A = 51.5$. $$\sigma_A = 10\sqrt{\frac{448}{200} - \left(\frac{-70}{200}\right)^2} = 10\sqrt{2.24 - 0.1225} = 10\sqrt{2.1175} = 14.55$$ $$CV_A = \frac{14.55}{51.5}\times100 = 28.26\%$$
>
> **Factory B:** $\bar{x}_B = 47.5$. $$\sigma_B = 10\sqrt{\frac{570}{200} - \left(\frac{-150}{200}\right)^2} = 10\sqrt{2.85 - 0.5625} = 10\sqrt{2.2875} = 15.12$$ $$CV_B = \frac{15.12}{47.5}\times100 = 31.84\%$$
>
> **Conclusion.** $CV_B > CV_A$, so ==Factory B has greater variability== in paying wages, while Factory A pays both higher and more uniform wages.

> [!example] Past TF 2019-20 Q5(a) (10 marks): Coefficient of variation of profits
> **Data.** Profits 20–30, …, 90–100 with numbers of companies 4, 8, 18, 30, 15, 10, 8, 7. Take $A = 55$, $h = 10$.
>
> | Profits | $x$ | $f$ | $u$ | $fu$ | $fu^2$ |
> |---|---|---|---|---|---|
> | 20–30 | 25 | 4 | −3 | −12 | 36 |
> | 30–40 | 35 | 8 | −2 | −16 | 32 |
> | 40–50 | 45 | 18 | −1 | −18 | 18 |
> | 50–60 | 55 | 30 | 0 | 0 | 0 |
> | 60–70 | 65 | 15 | 1 | 15 | 15 |
> | 70–80 | 75 | 10 | 2 | 20 | 40 |
> | 80–90 | 85 | 8 | 3 | 24 | 72 |
> | 90–100 | 95 | 7 | 4 | 28 | 112 |
> | Total | | 100 | | 41 | 325 |
>
> $$\bar{x} = 55 + 10\times\frac{41}{100} = 59.1, \qquad \sigma = 10\sqrt{\frac{325}{100} - (0.41)^2} = 10\sqrt{3.25 - 0.1681} = 10\sqrt{3.0819} = 17.555$$
>
> $$CV = \frac{17.555}{59.1}\times 100 = 29.70\%$$
> **Interpretation.** The standard deviation of profits is about 29.7% of the mean profit, which indicates moderate variability among the companies.

## 5. Combined standard deviation

> [!important] Memorize: Combined mean and SD of two groups
> $$\bar{x}_c = \frac{n_1\bar{x}_1 + n_2\bar{x}_2}{n_1 + n_2}, \qquad \sigma_c^2 = \frac{n_1(\sigma_1^2 + d_1^2) + n_2(\sigma_2^2 + d_2^2)}{n_1 + n_2}$$
> where $d_1 = \bar{x}_1 - \bar{x}_c$ and $d_2 = \bar{x}_2 - \bar{x}_c$.

**Example.** Group 1: $n_1 = 40$, mean 50, SD 6. Group 2: $n_2 = 60$, mean 45, SD 8. Combined mean $= (2000 + 2700)/100 = 47$, so $d_1 = 3$ and $d_2 = -2$. Then $\sigma_c^2 = \dfrac{40(36 + 9) + 60(64 + 4)}{100} = \dfrac{1800 + 4080}{100} = 58.8$, and $\sigma_c = 7.67$. Notice that the combined SD is larger than a simple average of 6 and 8 would suggest, because the two group means also differ.

## 6. Correcting the mean and SD when values were wrongly recorded

This is a classic exam type (2023-24 Q5c). The idea is simple: ==the mean and SD are built from $\sum x$ and $\sum x^2$, so we rebuild these two totals, remove the wrong values, add the correct ones, and recompute.==

> [!important] Memorize: The correction method
> From the incorrect results: $\sum x = n\bar{x}$ and $\sum x^2 = n(\sigma^2 + \bar{x}^2)$ (because $\sigma^2 = \frac{\sum x^2}{n} - \bar{x}^2$).
> Corrected $\sum x$ = incorrect $\sum x$ − (wrong values) + (correct values).
> Corrected $\sum x^2$ = incorrect $\sum x^2$ − (squares of wrong values) + (squares of correct values).
> Then corrected $\bar{x} = \dfrac{\text{corrected }\sum x}{n}$ and corrected $\sigma = \sqrt{\dfrac{\text{corrected }\sum x^2}{n} - (\text{corrected }\bar{x})^2}$.

**Practice (fresh numbers).** The mean and SD of 50 observations were found to be 40 and 5. Later it was found that two values were wrongly taken as 32 and 58 instead of 23 and 85. Find the correct mean, SD and CV.

*Step 1: rebuild the totals.* $\sum x = 50 \times 40 = 2000$. $\sum x^2 = 50(5^2 + 40^2) = 50 \times 1625 = 81250$.

*Step 2: correct the totals.* Corrected $\sum x = 2000 - (32 + 58) + (23 + 85) = 2000 - 90 + 108 = 2018$. Corrected $\sum x^2 = 81250 - (32^2 + 58^2) + (23^2 + 85^2) = 81250 - (1024 + 3364) + (529 + 7225) = 81250 - 4388 + 7754 = 84616$.

*Step 3: recompute.* Correct mean $= 2018/50 = 40.36$. Correct variance $= 84616/50 - 40.36^2 = 1692.32 - 1628.93 = 63.39$, so correct SD $= \sqrt{63.39} = 7.96$. Correct CV $= \dfrac{7.96}{40.36} \times 100 = 19.73\%$.

> [!warning] Common mistake
> Do not try to correct the SD by "adjusting" it directly. Always go through $\sum x^2$. Also, the number of observations $n$ stays the same because values were replaced, not added.

## 7. Which measure to use?

The SD is the best measure in almost all situations because it uses every observation, has nice algebraic properties and is used in all later theory (normal distribution, tests, regression). Use the quartile deviation when the data have extreme values or open-ended classes. Use the CV whenever you compare the variability of two groups with different means or units. In "prefer which product" questions (like choosing bulbs), the usual reasoning is: prefer the product with the higher mean life **and** lower CV; if one is higher mean but also more variable, explain the trade-off and decide according to the stated goal (long life on average versus predictability).

---

> [!question]- Self-check
> **1. Data 3, 5, 7: find SD.**
> Mean 5, squared deviations 4, 0, 4, variance $8/3 = 2.667$, SD $= 1.633$.
>
> **2. Two batsmen: A has mean 50, SD 15; B has mean 40, SD 8. Who is more consistent?**
> $CV_A = 30\%$, $CV_B = 20\%$. B has smaller CV, so B is more consistent (A scores more on average).
>
> **3. If every value is multiplied by 3 and then 10 is added, what happens to SD and CV?**
> SD is multiplied by 3. The mean becomes $3\bar{x} + 10$, so the CV changes (it is not invariant to change of origin).
>
> **4. Mean and SD of 20 values are 10 and 2. Find $\sum x$ and $\sum x^2$.**
> $\sum x = 200$; $\sum x^2 = 20(4 + 100) = 2080$.
>
> **5. Why is the mean deviation rarely used in advanced work?**
> The absolute value sign makes it hard to handle algebraically; SD avoids this by squaring.

---

Previous: [[S3 Measures of Central Tendency]] · Next: [[S5 Moments Skewness and Kurtosis]] · Home: [[index]]
