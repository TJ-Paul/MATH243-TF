---
title: "S9 · Chi-Square Tests"
tags: [math243, statistics, chi-square, hypothesis-testing]
---

# S9 · Chi-Square Tests

**Why this matters for the term final.** The contingency-table $\chi^2$ test appeared in both of the latest papers. 2023-24 Q8(a) (15 marks) gave a 3×3 table of job performance against educational attainment (this is exactly the lecture's Problem 1), and 2022-23 Q8(a) (10 marks) gave a 2×2 table of drug versus typhoid. Goodness of fit appeared as a short note in 2023-24 Q7(a). Both full solutions are in [[TF 2023-24 Solutions]] and [[TF 2022-23 Solutions]]; this note teaches the method with fresh practice of each type. The general testing steps are in [[S8 Hypothesis Testing Concepts and z t Tests]].

---

## 1. The chi-square statistic

All chi-square tests compare **observed frequencies** $O$ (what we counted) with **expected frequencies** $E$ (what we would expect if $H_0$ were true):

> [!important] Memorize: The chi-square statistic
> $$\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i} \qquad\left(\text{equivalently } \chi^2 = \sum \frac{O_i^2}{E_i} - N\right)$$
> It follows (approximately) a chi-square distribution with $\nu$ degrees of freedom. ==If $O$ and $E$ agree closely, $\chi^2$ is small and we accept $H_0$; if they disagree a lot, $\chi^2$ is large and we reject $H_0$.== The test is always **right-tailed**: reject $H_0$ if $\chi^2_{cal} \ge \chi^2_{\alpha,\nu}$.

Why square and divide by $E$? Squaring stops positive and negative differences cancelling, and dividing by $E$ makes a difference of 10 count more when we expected 15 than when we expected 1000.

> [!important] Memorize: Conditions for a valid chi-square test
> The observations must be independent and counted (frequencies, not percentages or measurements). The total $N$ should be reasonably large (at least 50). ==Every expected frequency should be at least 5==; if some are smaller, merge neighbouring classes and reduce the degrees of freedom accordingly. The sum of the expected frequencies must equal the sum of the observed frequencies.

Useful critical values: $\chi^2_{0.05}$ with 1, 2, 3, 4, 5, 6 df is 3.84, 5.99, 7.81, 9.49, 11.07, 12.59; $\chi^2_{0.01}$ with 1, 2, 3, 4 df is 6.63, 9.21, 11.34, 13.28.

## 2. Goodness-of-fit test

> [!important] Memorize: Goodness of fit
> A ==goodness-of-fit test== checks whether an observed frequency distribution agrees with a hypothesized theoretical distribution (uniform, a given ratio, binomial, Poisson, normal, …). $H_0$: the data follow the stated distribution; $H_1$: they do not.
> $$\nu = k - 1 - m$$
> where $k$ is the number of classes (after merging small ones) and $m$ is the number of parameters **estimated from the data** to compute the expected frequencies (e.g. $m = 1$ when $\lambda$ of a Poisson is estimated by $\bar{x}$; $m = 0$ when all probabilities are given).

**Fresh practice 1 (is a die fair?).** A die is rolled 120 times: faces 1 to 6 appear 22, 17, 20, 26, 18, 17 times. Test at 5% whether the die is fair.

$H_0$: the die is fair, so each face has probability $1/6$ and expected frequency $E = 120/6 = 20$. $H_1$: the die is not fair.

| Face | 1 | 2 | 3 | 4 | 5 | 6 | Total |
|---|---|---|---|---|---|---|---|
| $O$ | 22 | 17 | 20 | 26 | 18 | 17 | 120 |
| $E$ | 20 | 20 | 20 | 20 | 20 | 20 | 120 |
| $(O-E)^2/E$ | 0.20 | 0.45 | 0.00 | 1.80 | 0.20 | 0.45 | **3.10** |

$\nu = 6 - 1 = 5$, critical value $\chi^2_{0.05,5} = 11.07$. Since $3.10 < 11.07$, we do not reject $H_0$: the die may be regarded as fair; the differences are due to chance.

**Fresh practice 2 (given ratio).** In a genetics experiment 556 seeds are classified into four types with observed counts 315, 108, 101, 32. Theory predicts the ratio 9:3:3:1. Expected frequencies: $556 \times 9/16 = 312.75$, $556 \times 3/16 = 104.25$, $104.25$, $556 \times 1/16 = 34.75$. Then $\chi^2 = \frac{2.25^2}{312.75} + \frac{3.75^2}{104.25} + \frac{(-3.25)^2}{104.25} + \frac{(-2.75)^2}{34.75} = 0.016 + 0.135 + 0.101 + 0.218 = 0.47$. With $\nu = 3$, $\chi^2_{0.05,3} = 7.81$; $0.47 < 7.81$, so the data fit the 9:3:3:1 theory very well.

## 3. Contingency table: test of independence (association)

A **contingency table** is a two-way table of frequencies in which individuals are classified by two qualitative attributes $A$ (with $r$ categories, the rows) and $B$ (with $c$ categories, the columns). The categories of each attribute must be mutually exclusive and exhaustive.

> [!important] Memorize: Test of independence in an $r \times c$ table
> $H_0$: there is no association between $A$ and $B$ (they are independent). $H_1$: there is an association.
> $$E_{ij} = \frac{R_i \times C_j}{N} = \frac{(\text{row total}) \times (\text{column total})}{\text{grand total}}$$
>
> $$\chi^2 = \sum_i \sum_j \frac{(O_{ij} - E_{ij})^2}{E_{ij}}, \qquad \nu = (r - 1)(c - 1)$$
> Reject $H_0$ if $\chi^2 \ge \chi^2_{\alpha,(r-1)(c-1)}$.

**Where the expected frequency formula comes from.** If $A$ and $B$ are independent, $P(A_i \cap B_j) = P(A_i)P(B_j) = \frac{R_i}{N}\cdot\frac{C_j}{N}$, so the expected count in cell $(i,j)$ is $N \cdot \frac{R_i}{N}\cdot\frac{C_j}{N} = \frac{R_iC_j}{N}$. **Why $(r - 1)(c - 1)$ degrees of freedom?** With all row and column totals fixed, once we fill in $(r - 1)(c - 1)$ cells, the remaining cells are forced by the totals.

**Fresh practice 3 (2×3 table).** 200 students are classified by gender and preferred study mode.

| | Online | Offline | Hybrid | Total |
|---|---|---|---|---|
| Male | 25 | 35 | 40 | 100 |
| Female | 35 | 25 | 40 | 100 |
| Total | 60 | 60 | 80 | 200 |

Test at 5% whether study preference depends on gender.

$H_0$: preference is independent of gender; $H_1$: there is an association. Expected frequencies: $E_{11} = 100 \times 60/200 = 30$, $E_{12} = 30$, $E_{13} = 100 \times 80/200 = 40$, and the same for the second row.

| Cell | $O$ | $E$ | $O - E$ | $(O-E)^2/E$ |
|---|---|---|---|---|
| (1,1) | 25 | 30 | −5 | 0.833 |
| (1,2) | 35 | 30 | 5 | 0.833 |
| (1,3) | 40 | 40 | 0 | 0 |
| (2,1) | 35 | 30 | 5 | 0.833 |
| (2,2) | 25 | 30 | −5 | 0.833 |
| (2,3) | 40 | 40 | 0 | 0 |
| Total | 200 | 200 | 0 | **3.333** |

$\nu = (2 - 1)(3 - 1) = 2$, critical value $\chi^2_{0.05,2} = 5.99$. Since $3.33 < 5.99$, we do not reject $H_0$: there is no significant association between gender and preferred study mode.

> [!tip] Exam trick: layout
> Write the expected frequency in brackets under each observed frequency inside the original table (exactly as in the lecture), then make the $(O - E)^2/E$ column table. Check that $\sum O = \sum E$ and $\sum(O - E) = 0$. Keep two or three decimal places in each term.

## 4. The 2×2 table and Yates' correction

> [!important] Memorize: 2×2 contingency table shortcut (lecture formula, with Yates' correction)
> | | $B_1$ | $B_2$ | Total |
> |---|---|---|---|
> | $A_1$ | $a$ | $b$ | $a+b$ |
> | $A_2$ | $c$ | $d$ | $c+d$ |
> | Total | $a+c$ | $b+d$ | $N$ |
> $$\chi^2 = \frac{N\left(\left|ad - bc\right| - \frac{N}{2}\right)^2}{(a+b)(c+d)(a+c)(b+d)} \sim \chi^2_1$$
> Without the correction the formula is $\chi^2 = \dfrac{N(ad - bc)^2}{(a+b)(c+d)(a+c)(b+d)}$. Critical value at 5% with 1 df: ==3.84==.

**Yates' correction for continuity.** The chi-square distribution is continuous but frequencies are discrete; with only 1 degree of freedom this makes the uncorrected $\chi^2$ slightly too large. Yates suggested reducing $|ad - bc|$ by $N/2$ (equivalently reducing each $|O - E|$ by 0.5). It is especially important when some expected frequencies are small (between 5 and 10). The course's lecture formula includes the correction, so use it, and you may mention the uncorrected value as well.

**Fresh practice 4 (lecture Problem 1: smoking and lung disease).**

| | Lung disease | No lung disease | Total |
|---|---|---|---|
| Smoker | 36 | 14 | 50 |
| Non-smoker | 18 | 32 | 50 |
| Total | 54 | 46 | 100 |

$H_0$: lung disease is independent of smoking. $a = 36$, $b = 14$, $c = 18$, $d = 32$, $N = 100$. $ad - bc = 1152 - 252 = 900$.
$$\chi^2 = \frac{100\,(900 - 50)^2}{50 \times 50 \times 54 \times 46} = \frac{100 \times 722500}{6210000} = 11.63$$
(Without correction: $100 \times 900^2/6210000 = 13.04$.) Since $11.63 > 3.84$ (1 df, 5%), reject $H_0$: lung disease is associated with smoking.

> [!warning] Common mistake: "effective" questions
> A question like "can it be concluded that the drug is effective?" is answered with this test of independence. If $H_0$ (independence) is rejected, look at the table to decide the **direction** of the association (e.g. the typhoid rate is much lower in the drug group), and only then say "the drug is effective". Rejecting independence by itself only shows that there is an association.

---

> [!question]- Self-check
> **1. In a 4×3 table, how many degrees of freedom?**
> $(4-1)(3-1) = 6$.
>
> **2. Row total 60, column total 50, grand total 200. Expected frequency?**
> $60 \times 50/200 = 15$.
>
> **3. A goodness-of-fit test to a Poisson distribution uses 6 classes and estimates $\lambda$ from the data. df?**
> $6 - 1 - 1 = 4$.
>
> **4. Why is the chi-square test right-tailed only?**
> Because $\chi^2$ is a sum of non-negative terms; only large values indicate disagreement with $H_0$.
>
> **5. What should you do if an expected frequency is 3?**
> Merge that class with a neighbouring class (and reduce the degrees of freedom), or use Yates' correction in a 2×2 table.

---

Previous: [[S8 Hypothesis Testing Concepts and z t Tests]] · Next: [[S10 ANOVA One-Way and Two-Way]] · Home: [[index]]
