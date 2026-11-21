---
title: "S10 · ANOVA: One-Way and Two-Way"
tags: [math243, statistics, anova, f-test]
---

# S10 · ANOVA: One-Way and Two-Way

**Why this matters for the TF.** ANOVA appeared in 2021-22 Q8(b) (three salesmen, unequal sizes), 2022-23 Q8(b) (one-way, four bulb brands) and Q8(c) (**two-way**, soil blocks × corn types), and 2023-24 Q8(b) (one-way, prices in three cities, 20 marks).

The calculation is long but purely mechanical, so a practised student collects full marks. The 2022-23 and 2023-24 questions are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]].

---

## Core tools (memorize)

> [!important] Memorize: one-way ANOVA ($k$ groups, $N$ observations in total)
> $G$ is the grand total, $T_i$ the total of group $i$ and $n_i$ its size.
>
> **Correction term:**
>
> $$CT=\frac{G^2}{N}$$
>
> **Total sum of squares:**
>
> $$S_T=\sum\sum x^2-CT$$
>
> **Between-groups sum of squares:**
>
> $$S_B=\sum_i\frac{T_i^2}{n_i}-CT$$
>
> **Within-groups (error) sum of squares:**
>
> $$S_W=S_T-S_B$$
>
> **F ratio:**
>
> $$F=\frac{S_B/(k-1)}{S_W/(N-k)}\sim F_{k-1,\ N-k}$$
>
> ==Reject $H_0$ (all means equal) if $F_{cal}>F_{\alpha}(k-1,N-k)$.==

> [!important] Memorize: two-way ANOVA ($r$ blocks/rows × $c$ treatments/columns, one value per cell)
> **Correction term:**
>
> $$CT=\frac{G^2}{rc}$$
>
> **Total sum of squares:**
>
> $$S_T=\sum x^2-CT$$
>
> **Rows (blocks) sum of squares:**
>
> $$S_R=\frac{\sum R_i^2}{c}-CT$$
>
> **Columns (treatments) sum of squares:**
>
> $$S_C=\frac{\sum C_j^2}{r}-CT$$
>
> **Error sum of squares:**
>
> $$S_E=S_T-S_R-S_C$$
>
> **F ratio for rows:**
>
> $$F_R=\frac{S_R/(r-1)}{S_E/[(r-1)(c-1)]}$$
>
> **F ratio for columns:**
>
> $$F_C=\frac{S_C/(c-1)}{S_E/[(r-1)(c-1)]}$$

> [!important] Memorize: ANOVA table layout (always draw it)
>
> | Source | df | SS | MS = SS/df | $F$ |
> |---|---|---|---|---|
> | Between groups (or rows / columns) | $k-1$ | $S_B$ | $MS_B$ | $MS_B/MS_W$ |
> | Within (error) | $N-k$ | $S_W$ | $MS_W$ | |
> | Total | $N-1$ | $S_T$ | | |

> [!note] Minimal theory
> ANOVA tests $H_0:\mu_1=\mu_2=\dots=\mu_k$ against $H_1$: at least two means differ.
>
> It assumes independent random samples from normal populations with a **common variance**. The test is always right-tailed.

> [!tip] Coding trick
> Subtracting a constant from every value changes nothing.
>
> Dividing every value by $h$ divides every SS by $h^2$ but leaves $F$ unchanged.
>
> Use this to keep numbers small.

---

## Problem types you will face

### Type 1 — one-way ANOVA, equal group sizes

**Recipe:** totals $T_i$ → $G$ → $CT$ → $\sum x^2$ → $S_T$, $S_B$, $S_W$ → ANOVA table → compare with $F_\alpha$ → comment.

> [!example] Practice 1 (TF style): yield of three reactors
> A: 72, 75, 78, 74, 76. B: 65, 68, 70, 72, 69. C: 78, 82, 85, 88, 90. Test at 5% ($F_{0.05}(2,12)=3.89$).
>
> **Hypothesis.** $H_0:\mu_A=\mu_B=\mu_C$ against $H_1$: at least two means differ.
>
> **Level of significance.** $\alpha=0.05$.
>
> **Step 1 — totals.**
>
> | | A | B | C | |
> |---|---|---|---|---|
> | $T_i$ | 375 | 344 | 423 | $G=1142$ |
> | $\sum x^2$ | 28145 | 23694 | 35877 | 87716 |
>
> $N=15$, $k=3$.
>
> **Step 2 — correction term.**
>
> $$CT=\frac{1142^2}{15}=86944.27$$
>
> **Step 3 — total SS.**
>
> $$S_T=87716-86944.27=771.73$$
>
> **Step 4 — between SS.**
>
> $$S_B=\frac{375^2+344^2+423^2}{5}-86944.27=633.73$$
>
> **Step 5 — within SS.**
>
> $$S_W=771.73-633.73=138.00$$
>
> **Step 6 — ANOVA table.**
>
> | Source | df | SS | MS | $F$ |
> |---|---|---|---|---|
> | Between reactors | 2 | 633.73 | 316.87 | 27.55 |
> | Within | 12 | 138.00 | 11.50 | |
> | Total | 14 | 771.73 | | |
>
> **Decision.** $27.55>3.89$, so reject $H_0$.
>
> **Comment.** The mean yields of the reactors differ significantly. Reactor C (mean 84.6) is the highest.

---

### Type 2 — one-way ANOVA, unequal group sizes

Use $T_i^2/n_i$ with each group's own $n_i$. Nothing else changes.

> [!example] Past TF 2021-22 Q8(b) (18 marks): three salesmen
> **Given.** Sales in Tk thousand. A: 300, 400, 300, 500, 0. B: 600, 300, 300, 400. C: 700, 300, 400, 600, 500. $F_{0.05}(2,11)=3.98$.
>
> **Hypothesis.** $H_0:\mu_A=\mu_B=\mu_C$ against $H_1$: at least two differ.
>
> **Level of significance.** $\alpha=0.05$.
>
> **Step 1 — coding.** Divide by 100 (this does not change $F$).
>
> | | A | B | C |
> |---|---|---|---|
> | Coded values | 3, 4, 3, 5, 0 | 6, 3, 3, 4 | 7, 3, 4, 6, 5 |
> | $n_i$ | 5 | 4 | 5 |
> | $T_i$ | 15 | 16 | 25 |
> | $\sum x^2$ | 59 | 70 | 135 |
>
> $N=14$ and $G=56$.
>
> **Step 2 — correction term.**
>
> $$CT=\frac{56^2}{14}=224$$
>
> **Step 3 — total SS.**
>
> $$S_T=264-224=40$$
>
> **Step 4 — between SS.**
>
> $$\begin{aligned}
> S_B &= \frac{15^2}{5}+\frac{16^2}{4}+\frac{25^2}{5}-224\\
> &= 45+64+125-224\\
> &= 10
> \end{aligned}$$
>
> **Step 5 — within SS.**
>
> $$S_W=40-10=30$$
>
> **Step 6 — ANOVA table.**
>
> | Source | df | SS | MS | $F$ |
> |---|---|---|---|---|
> | Between salesmen | 2 | 10 | 5.000 | 1.83 |
> | Within | 11 | 30 | 2.727 | |
> | Total | 13 | 40 | | |
>
> **Decision.** $1.83<3.98$, so do not reject $H_0$.
>
> **Comment.** The salesmen's average sales do not differ significantly. In original units every SS is multiplied by $100^2$, but $F$ is the same.

> [!example] Practice 2 (TF style): three catalysts, unequal sizes
> A: 68, 70, 73, 75. B: 72, 74, 76, 78, 77. C: 75, 78, 80, 82, 85, 88. Test at 5% ($F_{0.05}(2,12)=3.89$).
>
> **Step 1 — totals.**
>
> | | A | B | C | |
> |---|---|---|---|---|
> | $n_i$ | 4 | 5 | 6 | $N=15$ |
> | $T_i$ | 286 | 377 | 488 | $G=1151$ |
> | $\sum x^2$ | 20478 | 28449 | 39802 | 88729 |
>
> **Step 2 — correction term.**
>
> $$CT=\frac{1151^2}{15}=88320.07$$
>
> **Step 3 — total SS.**
>
> $$S_T=88729-88320.07=408.93$$
>
> **Step 4 — between SS.**
>
> $$S_B=\frac{286^2}{4}+\frac{377^2}{5}+\frac{488^2}{6}-88320.07=245.40$$
>
> **Step 5 — within SS.**
>
> $$S_W=408.93-245.40=163.53$$
>
> **Step 6 — ANOVA table.**
>
> | Source | df | SS | MS | $F$ |
> |---|---|---|---|---|
> | Between | 2 | 245.40 | 122.70 | 9.00 |
> | Within | 12 | 163.53 | 13.63 | |
> | Total | 14 | 408.93 | | |
>
> **Decision.** $9.00>3.89$, so reject $H_0$.
>
> **Comment.** The catalysts give significantly different mean yields.

---

### Type 3 — large numbers: code first

> [!example] Practice 3 (TF style): output of three machines
> M1: 1505, 1512, 1498, 1510. M2: 1520, 1515, 1525, 1518. M3: 1500, 1495, 1508, 1502. Test at 5% ($F_{0.05}(2,9)=4.26$).
>
> **Step 1 — code** by subtracting 1500.
>
> M1: 5, 12, −2, 10. M2: 20, 15, 25, 18. M3: 0, −5, 8, 2.
>
> **Step 2 — totals.** Group totals 25, 78 and 5, so $G=108$. Sums of squares 273, 1574 and 93, which add to 1940. $N=12$.
>
> **Step 3 — correction term.**
>
> $$CT=\frac{108^2}{12}=972$$
>
> **Step 4 — total SS.**
>
> $$S_T=1940-972=968$$
>
> **Step 5 — between SS.**
>
> $$S_B=\frac{25^2+78^2+5^2}{4}-972=711.5$$
>
> **Step 6 — within SS.**
>
> $$S_W=968-711.5=256.5$$
>
> **Step 7 — F ratio.**
>
> $$F=\frac{711.5/2}{256.5/9}=\frac{355.75}{28.5}=12.48$$
>
> **Decision.** $12.48>4.26$, so reject $H_0$.
>
> **Comment.** The machines' mean outputs differ (M2 is highest).

---

### Type 4 — two-way ANOVA (blocks × treatments)

**Recognise it:** a table where rows are blocks (soil, workers, days) and columns are treatments (varieties, machines), with one value per cell, and the question asks about both factors.

**Recipe:** row totals, column totals, $CT$, $S_T$, $S_R$, $S_C$, $S_E$ by subtraction, then two $F$ ratios, each compared with its own critical value.

> [!example] Practice 4 (TF style): soil plots × fertilizers
> **Given.** Yields (kg):
>
> | Plot | F1 | F2 | F3 | $R_i$ |
> |---|---|---|---|---|
> | P1 | 45 | 43 | 51 | 139 |
> | P2 | 47 | 46 | 52 | 145 |
> | P3 | 48 | 50 | 55 | 153 |
> | P4 | 42 | 37 | 49 | 128 |
> | $C_j$ | 182 | 176 | 207 | $G=565$ |
>
> $F_{0.05}(3,6)=4.76$ and $F_{0.05}(2,6)=5.14$.
>
> **Hypotheses.** $H_{01}$: the soil plots do not differ. $H_{02}$: the fertilizers do not differ.
>
> **Level of significance.** $\alpha=0.05$.
>
> Here $r=4$, $c=3$, and $\sum x^2=26867$.
>
> **Step 1 — correction term.**
>
> $$CT=\frac{565^2}{12}=26602.08$$
>
> **Step 2 — total SS.**
>
> $$S_T=26867-26602.08=264.92$$
>
> **Step 3 — rows (plots) SS.**
>
> $$S_R=\frac{139^2+145^2+153^2+128^2}{3}-CT=110.92$$
>
> **Step 4 — columns (fertilizers) SS.**
>
> $$S_C=\frac{182^2+176^2+207^2}{4}-CT=135.17$$
>
> **Step 5 — error SS.**
>
> $$S_E=264.92-110.92-135.17=18.83$$
>
> **Step 6 — ANOVA table.**
>
> | Source | df | SS | MS | $F$ |
> |---|---|---|---|---|
> | Plots (rows) | 3 | 110.92 | 36.97 | 11.78 |
> | Fertilizers (columns) | 2 | 135.17 | 67.58 | 21.53 |
> | Error | 6 | 18.83 | 3.139 | |
> | Total | 11 | 264.92 | | |
>
> **Decision.** $11.78>4.76$ and $21.53>5.14$, so both hypotheses are rejected.
>
> **Comment.** Yields differ significantly between plots and between fertilizers. F3 is the best fertilizer.

> [!example] Practice 5 (TF style): workers × machines
> Output of 4 workers (rows) on 3 machines (columns): W1: 22, 26, 24. W2: 18, 24, 20. W3: 25, 27, 29. W4: 20, 23, 23. Test both factors at 5% ($F_{0.05}(3,6)=4.76$, $F_{0.05}(2,6)=5.14$).
>
> **Step 1 — totals.** Row totals: 72, 62, 81, 66. Column totals: 85, 100, 96. $G=281$ and $\sum x^2=6689$.
>
> **Step 2 — correction term.**
>
> $$CT=\frac{281^2}{12}=6580.08$$
>
> **Step 3 — total SS.**
>
> $$S_T=6689-6580.08=108.92$$
>
> **Step 4 — rows (workers) SS.**
>
> $$S_R=\frac{72^2+62^2+81^2+66^2}{3}-CT=68.25$$
>
> **Step 5 — columns (machines) SS.**
>
> $$S_C=\frac{85^2+100^2+96^2}{4}-CT=30.17$$
>
> **Step 6 — error SS.**
>
> $$S_E=108.92-68.25-30.17=10.50$$
>
> **Step 7 — ANOVA table.**
>
> | Source | df | SS | MS | $F$ |
> |---|---|---|---|---|
> | Workers | 3 | 68.25 | 22.75 | 13.00 |
> | Machines | 2 | 30.17 | 15.08 | 8.62 |
> | Error | 6 | 10.50 | 1.75 | |
> | Total | 11 | 108.92 | | |
>
> **Decision.** $13.00>4.76$ and $8.62>5.14$.
>
> **Comment.** Both workers and machines differ significantly in output.

---

### Type 5 — F-test for two variances

**Recipe:** put the larger variance on top:

$$F=\frac{\text{larger } s^2}{\text{smaller } s^2}$$

with df (numerator $n-1$, denominator $n-1$). For a two-tailed test at $\alpha$, compare with $F_{\alpha/2}$.

> [!example] Practice 6 (TF style): two filling machines
> Machine A ($n=8$): 52, 55, 50, 54, 53, 56, 51, 57. Machine B ($n=10$): 48, 49, 47, 50, 46, 51, 45, 49, 48, 47. Are the variances equal, at 5%?
>
> **Step 1 — variance of A.** $\sum x=428$ and $\sum x^2=22940$:
>
> $$s_A^2=\frac{22940-428^2/8}{7}=\frac{42}{7}=6.0$$
>
> **Step 2 — variance of B.** $\sum x=480$ and $\sum x^2=23070$:
>
> $$s_B^2=\frac{23070-480^2/10}{9}=\frac{30}{9}=3.33$$
>
> **Hypothesis.** $H_0:\sigma_A^2=\sigma_B^2$ against $H_1:\sigma_A^2\ne\sigma_B^2$.
>
> **Calculated value.**
>
> $$F=\frac{6.0}{3.333}=1.80$$
>
> **Critical region.** $F>F_{0.025}(7,9)=4.20$.
>
> **Decision.** $1.80<4.20$, so do not reject $H_0$.
>
> **Comment.** The variances can be regarded as equal.

---

## Extra practice

> [!question]- Extra practice (try first, then open for answers)
> **E1.** Groups: (8, 10, 12), (12, 14, 13), (6, 7, 8). One-way ANOVA at 5% ($F_{0.05}(2,6)=5.14$).
>
> Answer: $G=90$, $CT=900$, $S_T=66$, $S_B=54$, $S_W=12$, so $F=27/2=13.5>5.14$. Reject.
>
> **E2.** With $k=4$ groups and $N=20$, what are the df of the $F$ ratio?
>
> Answer: (3, 16).
>
> **E3.** In a two-way table with 5 blocks and 4 treatments, what are the error df?
>
> Answer: $(5-1)(4-1)=12$.
>
> **E4.** Every observation is divided by 10. What happens to SS and to $F$?
>
> Answer: every SS is divided by 100, and $F$ is unchanged.
>
> **E5.** $s_1^2=80.9$ with $n_1=7$ and $s_2^2=19.1$ with $n_2=8$. Is there a difference in variation at 10% ($F_{0.05}(6,7)=3.87$)?
>
> Answer: $F=4.23>3.87$, so reject: the variances differ.

---

Previous: [[S9 Chi-Square Tests]] · Next: [[Formula Sheet]] · Home: [[index]]
