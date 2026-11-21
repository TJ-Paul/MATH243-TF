---
title: "S10 · ANOVA: One-Way and Two-Way"
tags: [math243, statistics, anova, f-test]
---

# S10 · ANOVA: One-Way and Two-Way

**Why this matters for the term final.** ANOVA is a big-mark question that appears almost every year. 2021-22 Q8(b) (18 marks): one-way ANOVA with **unequal** group sizes (three salesmen) — solved below. 2022-23 Q8(b) (10 marks): one-way ANOVA for four brands of bulbs at 5% and 1%, and Q8(c) (15 marks): **two-way ANOVA** (corn types × soil blocks). 2023-24 Q8(b) (20 marks): one-way ANOVA for prices in three cities. The 2022-23 and 2023-24 solutions are in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]]; this note teaches the method and includes a fresh two-way practice. ==The calculation is completely mechanical: learn the five formulas and the table layout and you cannot lose these marks.==

---

## 1. The idea of analysis of variance

Suppose we want to compare the means of three or more groups (three teaching methods, four bulb brands, three cities' prices). Doing many separate two-sample $t$-tests would be tedious and would inflate the chance of a Type I error. **Analysis of variance (ANOVA)**, developed by R. A. Fisher, tests all the means at once:

$$H_0: \mu_1 = \mu_2 = \dots = \mu_k \qquad\text{against}\qquad H_1: \text{at least two means are unequal}$$

> [!important] Memorize: The ANOVA idea
> ==ANOVA splits the total variation of all observations into parts due to identifiable sources (variation **between** groups, caused by differences among group means) and a part due to chance (variation **within** groups).== If the between-group variation is large compared with the within-group variation, the group means are significantly different. The comparison is made with the $F$ ratio:
> $$F = \frac{\text{mean square between groups}}{\text{mean square within groups (error)}}$$
> If $H_0$ is true, both mean squares estimate the same $\sigma^2$ and $F$ is close to 1. A large $F$ leads to rejection. The test is always **right-tailed**.

> [!important] Memorize: Assumptions of ANOVA
> The samples are drawn independently and at random; each population is **normally** distributed; all populations have the **same variance** $\sigma^2$ (homogeneity of variance); and the effects are additive.

## 2. F-test for two variances (brief)

To test $H_0: \sigma_1^2 = \sigma_2^2$, compute $F = \dfrac{s_1^2}{s_2^2}$ with the **larger** sample variance in the numerator (so $F \ge 1$), and compare with $F_{\alpha,(n_1 - 1),(n_2 - 1)}$ (for a two-tailed test use $\alpha/2$ in the table). Lecture example: route variances $8.9947^2$ and $4.3753^2$ give $F = 4.23$; with 6 and 7 df at $\alpha/2 = 0.05$, the critical value is 3.87, so the variances differ. This is the same $F$ distribution that ANOVA uses (see [[S7 Sampling Distributions CLT and Confidence Intervals]]).

## 3. One-way ANOVA (completely randomized design)

We have $k$ groups; group $i$ has $n_i$ observations with total $T_i$. Let $N = \sum n_i$ and $G = \sum T_i$ (grand total).

> [!important] Memorize: One-way ANOVA formulas
> $$\text{Correction term: } CT = \frac{G^2}{N}$$
>
> $$\text{Total SS: } S_T = \sum\sum x_{ij}^2 - CT$$
>
> $$\text{Between-groups SS: } S_B = \sum_{i=1}^{k} \frac{T_i^2}{n_i} - CT$$
>
> $$\text{Within-groups (error) SS: } S_W = S_T - S_B$$
>
> $$F = \frac{S_B/(k - 1)}{S_W/(N - k)} \sim F_{(k-1),\,(N-k)}$$
> Reject $H_0$ if $F_{cal} > F_{\alpha,(k-1),(N-k)}$.

> [!important] Memorize: One-way ANOVA table
> | Source of variation | df | Sum of squares | Mean square | $F$ |
> |---|---|---|---|---|
> | Between groups | $k - 1$ | $S_B$ | $MS_B = S_B/(k-1)$ | $MS_B/MS_W$ |
> | Within groups (error) | $N - k$ | $S_W$ | $MS_W = S_W/(N-k)$ | |
> | Total | $N - 1$ | $S_T$ | | |

**Why it works.** $S_T$ measures how all $N$ observations vary around the grand mean. $S_B$ measures how the group means vary around the grand mean (weighted by group size). $S_W$ is what is left: the scatter of observations around their own group mean, which can only be chance. Note that the formula $\sum T_i^2/n_i$ handles **unequal** group sizes automatically; just divide each squared total by its own $n_i$.

> [!tip] Exam trick: coding the data
> Subtracting the same constant from every observation does not change $S_T$, $S_B$, $S_W$ or $F$, and dividing every observation by the same constant $c$ divides every sum of squares by $c^2$, so $F$ is unchanged. So you may subtract a convenient number (e.g. 20) or divide by 100 to make the arithmetic small. State clearly that you coded the data. If you report sums of squares, convert back (multiply by $c^2$).

> [!example] Past TF 2021-22 Q8(b) (18 marks): Do three salesmen differ in average sales?
> **Data** (weekly sales, Tk thousand). A (5 sales): 300, 400, 300, 500, 0. B (4 sales): 600, 300, 300, 400. C (5 sales): 700, 300, 400, 600, 500. Given $F_{0.05,(2,11)} = 3.98$.
>
> **Hypothesis:** $H_0: \mu_A = \mu_B = \mu_C$ (the salesmen's average sales are equal) against $H_1$: at least two means differ.
>
> **Coding:** divide every value by 100 (this does not change $F$).
>
> | | A | B | C |
> |---|---|---|---|
> | | 3 | 6 | 7 |
> | | 4 | 3 | 3 |
> | | 3 | 3 | 4 |
> | | 5 | 4 | 6 |
> | | 0 | – | 5 |
> | $n_i$ | 5 | 4 | 5 |
> | $T_i$ | 15 | 16 | 25 |
> | $\sum x^2$ | 59 | 70 | 135 |
>
> $N = 14$, $k = 3$, $G = 15 + 16 + 25 = 56$.
> $$CT = \frac{56^2}{14} = 224, \qquad S_T = (59 + 70 + 135) - 224 = 264 - 224 = 40$$
>
> $$S_B = \frac{15^2}{5} + \frac{16^2}{4} + \frac{25^2}{5} - 224 = 45 + 64 + 125 - 224 = 10, \qquad S_W = 40 - 10 = 30$$
>
> | Source | df | SS | MS | $F$ |
> |---|---|---|---|---|
> | Between salesmen | 2 | 10 | 5.000 | $5/2.727 = 1.83$ |
> | Within (error) | 11 | 30 | 2.727 | |
> | Total | 13 | 40 | | |
>
> (In original units every SS is multiplied by $100^2$: $S_B = 100{,}000$, $S_W = 300{,}000$, $S_T = 400{,}000$; $F$ is the same.)
>
> **Decision:** $F_{cal} = 1.83 < F_{0.05,(2,11)} = 3.98$, so we do not reject $H_0$.
> **Comment:** There is no significant difference among the average sales of the three salesmen at the 5% level; the observed differences (means 300, 400 and 500 thousand Tk) can be explained by chance variation.

**Pairwise comparison (if $H_0$ is rejected).** The lecture compares each pair with $t = \dfrac{|\bar{x}_i - \bar{x}_j|}{\sqrt{MS_W\left(\frac{1}{n_i} + \frac{1}{n_j}\right)}}$ against $t_{\alpha/2,(N-k)}$, to find which particular means differ. Only do this when the overall $F$ test is significant (or when asked).

## 4. Two-way ANOVA without replication (randomized block design)

Sometimes the observations are classified by **two** factors, with exactly one observation in each cell. A typical example: four types of corn (treatments, columns) are each planted in five blocks of land (rows), and the blocks may differ in soil fertility. Two-way ANOVA separates the variation due to **rows**, the variation due to **columns**, and the remaining random **error**, and tests both factors.

Let there be $r$ rows and $c$ columns, $N = rc$ observations, row totals $R_i$, column totals $C_j$, grand total $G$.

> [!important] Memorize: Two-way ANOVA formulas (one observation per cell)
> $$CT = \frac{G^2}{N}, \qquad S_T = \sum\sum x_{ij}^2 - CT$$
>
> $$S_R = \frac{\sum R_i^2}{c} - CT \;(\text{rows / blocks}), \qquad S_C = \frac{\sum C_j^2}{r} - CT \;(\text{columns / treatments})$$
>
> $$S_E = S_T - S_R - S_C$$
>
> | Source | df | SS | MS | $F$ |
> |---|---|---|---|---|
> | Rows (blocks) | $r - 1$ | $S_R$ | $MS_R = S_R/(r-1)$ | $F_R = MS_R/MS_E$ |
> | Columns (treatments) | $c - 1$ | $S_C$ | $MS_C = S_C/(c-1)$ | $F_C = MS_C/MS_E$ |
> | Error | $(r-1)(c-1)$ | $S_E$ | $MS_E = S_E/[(r-1)(c-1)]$ | |
> | Total | $rc - 1$ | $S_T$ | | |
> ==Compare $F_R$ with $F_{\alpha,(r-1),(r-1)(c-1)}$ and $F_C$ with $F_{\alpha,(c-1),(r-1)(c-1)}$.== Note: row totals are divided by the number of **columns** (each row total is a sum of $c$ values), and column totals by the number of **rows**.

Two null hypotheses are tested: $H_{01}$: there is no difference among the row (block) means, and $H_{02}$: there is no difference among the column (treatment) means.

**Fresh practice (two-way).** Three fertilizers (columns) are tried on four plots of different soil (rows); yields (kg):

| Soil plot | Fertilizer F1 | F2 | F3 | Row total $R_i$ |
|---|---|---|---|---|
| P1 | 45 | 43 | 51 | 139 |
| P2 | 47 | 46 | 52 | 145 |
| P3 | 48 | 50 | 55 | 153 |
| P4 | 42 | 37 | 49 | 128 |
| Column total $C_j$ | 182 | 176 | 207 | $G = 565$ |

Test at 5% whether yields differ (i) among soil plots and (ii) among fertilizers. Given $F_{0.05,(3,6)} = 4.76$ and $F_{0.05,(2,6)} = 5.14$.

$r = 4$, $c = 3$, $N = 12$. $CT = 565^2/12 = 26602.08$. $\sum x^2 = 26867$, so $S_T = 26867 - 26602.08 = 264.92$.

$S_R = \dfrac{139^2 + 145^2 + 153^2 + 128^2}{3} - CT = \dfrac{80139}{3} - 26602.08 = 26713.00 - 26602.08 = 110.92$.

$S_C = \dfrac{182^2 + 176^2 + 207^2}{4} - CT = \dfrac{106949}{4} - 26602.08 = 26737.25 - 26602.08 = 135.17$.

$S_E = 264.92 - 110.92 - 135.17 = 18.83$.

| Source | df | SS | MS | $F$ |
|---|---|---|---|---|
| Soil plots (rows) | 3 | 110.92 | 36.97 | 11.78 |
| Fertilizers (columns) | 2 | 135.17 | 67.58 | 21.53 |
| Error | 6 | 18.83 | 3.139 | |
| Total | 11 | 264.92 | | |

**Decision.** (i) $F_R = 11.78 > 4.76$: reject $H_{01}$; the soil plots differ significantly in yield. (ii) $F_C = 21.53 > 5.14$: reject $H_{02}$; the fertilizers differ significantly, F3 giving the highest total yield.

> [!warning] Common mistakes in ANOVA
> Forgetting to subtract $CT$; dividing row totals by the number of rows instead of the number of columns; using $N$ instead of $N - k$ for the error df; putting the smaller mean square in the numerator; and, with coded data, forgetting that $F$ is unchanged but sums of squares scale by $c^2$. When a question asks for two significance levels (5% and 1%), compare the same $F_{cal}$ with both critical values and write both decisions.

## 5. How the parts connect

$S_T = S_B + S_W$ (one-way) and $S_T = S_R + S_C + S_E$ (two-way) mirror the regression identity $SST = SSR + SSE$ in [[S6 Correlation and Regression]]: in every case we split total variation into an explained part and an unexplained part, and the $F$ ratio compares them after dividing each by its degrees of freedom. The degrees of freedom also add up: $(k - 1) + (N - k) = N - 1$.

---

> [!question]- Self-check
> **1. Three groups of sizes 4, 5, 6. Degrees of freedom of $F$?**
> $k - 1 = 2$ and $N - k = 15 - 3 = 12$.
>
> **2. $G = 120$, $N = 12$, $\sum x^2 = 1300$. Find $CT$ and $S_T$.**
> $CT = 14400/12 = 1200$; $S_T = 100$.
>
> **3. In a two-way table with 5 rows and 4 columns, what are the error df?**
> $(5-1)(4-1) = 12$.
>
> **4. $MS_B = 12$, $MS_W = 3$, critical $F = 3.89$. Decision?**
> $F = 4 > 3.89$: reject $H_0$, means differ.
>
> **5. Why can't we just do several $t$-tests instead of ANOVA?**
> Many separate tests increase the overall chance of a Type I error and are tedious; ANOVA tests all means simultaneously at the chosen $\alpha$.

---

Previous: [[S9 Chi-Square Tests]] · Next: [[Formula Sheet]] · Home: [[index]]
