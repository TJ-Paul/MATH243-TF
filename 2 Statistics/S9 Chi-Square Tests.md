---
title: "S9 · Chi-Square Tests"
tags: [math243, statistics, chi-square, contingency-table, goodness-of-fit]
---

# S9 · Chi-Square Tests

**Why this matters for the TF.** Both MATH 243 papers had a chi-square contingency question: a 3×3 table on education and job performance (2023-24 Q8a, 15 marks, the lecture example) and a 2×2 table on a drug and typhoid (2022-23 Q8a). 2023-24 Q7(a) also asked a short note on goodness of fit.

These questions are completely mechanical, so they are safe marks. The two papers are solved in [[TF 2023-24 Solutions]] and [[TF 2022-23 Solutions]].

---

## Core tools (memorize)

> [!important] Memorize
> **Chi-square statistic** — use in all chi-square tests:
>
> $$\chi^2=\sum\frac{(O-E)^2}{E}$$
>
> **Shortcut form** (same value):
>
> $$\chi^2=\sum\frac{O^2}{E}-N$$
>
> **Goodness of fit** — use when asked whether counts follow a given distribution or ratio:
>
> $$E_i=Np_i$$
>
> with df $=k-1-m$, where $m$ is the number of parameters estimated from the data.
>
> **Contingency table, $r\times c$** — use when asked whether two attributes are associated:
>
> $$E_{ij}=\frac{R_i\times C_j}{N}$$
>
> with df $=(r-1)(c-1)$.
>
> **2×2 table with Yates' correction** (cells $a,b,c,d$), df $=1$:
>
> $$\chi^2=\frac{N\left(\lvert ad-bc\rvert-\frac N2\right)^2}{(a+b)(c+d)(a+c)(b+d)}$$
>
> **Decision.** The test is always right-tailed. Reject $H_0$ if $\chi^2_{cal}\ge\chi^2_{\alpha,\,df}$.
>
> **Critical values at 5%:**
>
> df 1: **3.84** · df 2: **5.99** · df 3: **7.81** · df 4: **9.49** · df 5: **11.07**

> [!note] Minimal theory
> $H_0$ always says "no association" (independence) or "the data fit the stated distribution".
>
> The test needs random samples and every expected frequency at least 5; merge small classes otherwise.
>
> A large $\chi^2$ means observed and expected frequencies disagree.

> [!warning] Common mistakes
> Expected frequencies must be computed from the **totals**, never copied from the observed table.
>
> Check that every row of $E$ adds up to the row total.
>
> Use frequencies, never percentages.

---

## Problem types you will face

### Type 1 — $r\times c$ contingency table (test of independence)

**Recipe:** write $H_0$/$H_1$. Compute every $E_{ij}=R_iC_j/N$ (put them in brackets in the table). Make a table of $(O-E)^2/E$, sum it, and compare with $\chi^2_{\alpha,(r-1)(c-1)}$.

> [!example] Practice 1 (TF style): gender and first-choice major (4×2)
> **Given.**
>
> | Major | Male | Female | Total |
> |---|---|---|---|
> | Mathematics | 12 | 29 | 41 |
> | Biology | 27 | 16 | 43 |
> | Physics | 15 | 19 | 34 |
> | Chemistry | 9 | 14 | 23 |
> | Total | 63 | 78 | 141 |
>
> **Hypothesis.** $H_0$: gender and choice of major are independent. $H_1$: they are associated.
>
> **Level of significance.** $\alpha=0.05$.
>
> **Step 1 — expected frequencies.**
>
> $$E_{11}=\frac{41\times63}{141}=18.32$$
>
> $$E_{12}=\frac{41\times78}{141}=22.68$$
>
> The other rows follow in the same way: Biology 19.21 and 23.79, Physics 15.19 and 18.81, Chemistry 10.28 and 12.72.
>
> **Step 2 — chi-square table.**
>
> | Cell | $O$ | $E$ | $(O-E)^2/E$ |
> |---|---|---|---|
> | Math, M | 12 | 18.32 | 2.180 |
> | Math, F | 29 | 22.68 | 1.761 |
> | Bio, M | 27 | 19.21 | 3.156 |
> | Bio, F | 16 | 23.79 | 2.549 |
> | Phys, M | 15 | 15.19 | 0.002 |
> | Phys, F | 19 | 18.81 | 0.002 |
> | Chem, M | 9 | 10.28 | 0.159 |
> | Chem, F | 14 | 12.72 | 0.128 |
> | **Total** | 141 | 141 | **9.94** |
>
> **Critical region.** df $=(4-1)(2-1)=3$, so reject if $\chi^2\ge\chi^2_{0.05,3}=7.81$.
>
> **Calculated value.** $\chi^2=9.94$.
>
> **Decision.** $9.94>7.81$, so reject $H_0$.
>
> **Comment.** Choice of major is associated with gender. Males lean towards biology and females towards mathematics.

> [!example] Practice 2 (TF style): immunization and mother's education (2×4)
> **Given.**
>
> | | Illiterate | Primary | Secondary | Higher | Total |
> |---|---|---|---|---|---|
> | Immunized | 150 | 100 | 80 | 70 | 400 |
> | Not immunized | 40 | 30 | 20 | 10 | 100 |
> | Total | 190 | 130 | 100 | 80 | 500 |
>
> **Hypothesis.** $H_0$: the immunization rate does not depend on education.
>
> **Level of significance.** $\alpha=0.05$.
>
> **Step 1 — expected frequencies.**
>
> Row 1: $400\times190/500=152$, then 104, 80, 64.
>
> Row 2: 38, 26, 20, 16.
>
> **Step 2 — chi-square.**
>
> $$\chi^2=\frac{4}{152}+\frac{16}{104}+0+\frac{36}{64}+\frac{4}{38}+\frac{16}{26}+0+\frac{36}{16}$$
>
> $$\chi^2=0.026+0.154+0+0.563+0.105+0.615+0+2.25=3.71$$
>
> **Critical region.** df $=(2-1)(4-1)=3$; critical value 7.81.
>
> **Decision.** $3.71<7.81$, so do not reject $H_0$.
>
> **Comment.** Immunization rates do not differ significantly across education levels.

---

### Type 2 — 2×2 table (use Yates' correction)

**Recipe:** label the cells $a,b$ (row 1) and $c,d$ (row 2), find the four margins, and use the shortcut formula. Compare with 3.84 at 5%.

If the question does not mention Yates, it is safest to show the corrected value and mention the uncorrected one.

> [!example] Practice 3 (TF style): smoking and lung disease
> **Given.**
>
> | | Disease | No disease | Total |
> |---|---|---|---|
> | Smoker | 36 ($a$) | 14 ($b$) | 50 |
> | Non-smoker | 18 ($c$) | 32 ($d$) | 50 |
> | Total | 54 | 46 | 100 |
>
> **Hypothesis.** $H_0$: lung disease is independent of smoking.
>
> **Level of significance.** $\alpha=0.05$; critical value $\chi^2_{0.05,1}=3.84$.
>
> **Step 1 — cross-product difference.**
>
> $$ad-bc=36\times32-14\times18=1152-252=900$$
>
> **Step 2 — calculated value.**
>
> $$\chi^2=\frac{100\,(900-50)^2}{50\times50\times54\times46}=\frac{72{,}250{,}000}{6{,}210{,}000}=11.63$$
>
> **Decision.** $11.63>3.84$, so reject $H_0$.
>
> **Comment.** Lung disease is associated with smoking. (Without Yates' correction $\chi^2=13.04$, which gives the same decision.)

> [!example] Practice 4 (TF style): online course and passing
> **Given.**
>
> | | Passed | Failed | Total |
> |---|---|---|---|
> | Used course | 42 | 18 | 60 |
> | Did not use | 30 | 30 | 60 |
> | Total | 72 | 48 | 120 |
>
> **Step 1 — cross-product difference.**
>
> $$ad-bc=42\times30-18\times30=720$$
>
> **Step 2 — calculated value.**
>
> $$\chi^2=\frac{120\,(720-60)^2}{60\times60\times72\times48}=\frac{52{,}272{,}000}{12{,}441{,}600}=4.20$$
>
> **Decision.** $4.20>3.84$, so reject $H_0$.
>
> **Comment.** Using the course is associated with passing.

> [!example] Practice 5 (TF style): gender and job type
> **Given.** Male: 40 technical, 20 non-technical. Female: 25 technical, 35 non-technical. $N=120$.
>
> **Step 1 — cross-product difference.**
>
> $$ad-bc=40\times35-20\times25=900$$
>
> **Step 2 — calculated value.**
>
> $$\chi^2=\frac{120\,(900-60)^2}{60\times60\times65\times55}=6.58$$
>
> **Decision.** $6.58>3.84$, so reject $H_0$.
>
> **Comment.** Job type depends on gender.

---

### Type 3 — goodness of fit

**Recipe:** compute expected counts from the hypothesised probabilities ($E=Np$), then $\chi^2$. Use df $=k-1$, or fewer if parameters were estimated from the data.

> [!example] Practice 6 (TF style): is the die fair?
> 120 throws give the faces 1 to 6 with frequencies 25, 17, 15, 23, 24, 16. Test at 5%.
>
> **Hypothesis.** $H_0$: the die is fair, so $p_i=1/6$ and every $E_i=20$.
>
> **Step 1 — chi-square table.**
>
> | Face | 1 | 2 | 3 | 4 | 5 | 6 |
> |---|---|---|---|---|---|---|
> | $O$ | 25 | 17 | 15 | 23 | 24 | 16 |
> | $E$ | 20 | 20 | 20 | 20 | 20 | 20 |
> | $(O-E)^2/E$ | 1.25 | 0.45 | 1.25 | 0.45 | 0.80 | 0.80 |
>
> **Calculated value.**
>
> $$\chi^2=5.00$$
>
> **Critical region.** df $=6-1=5$; critical value 11.07.
>
> **Decision.** $5.00<11.07$, so do not reject $H_0$.
>
> **Comment.** The die can be regarded as fair.

> [!example] Practice 7 (TF style): fit to a 9:3:3:1 ratio
> Observed pea types: 315, 108, 101, 32 (total 556). Do they fit the 9:3:3:1 ratio, at 5%?
>
> **Step 1 — expected frequencies.**
>
> $$556\times\frac{9}{16}=312.75$$
>
> $$556\times\frac{3}{16}=104.25\ \text{(twice)}$$
>
> $$556\times\frac{1}{16}=34.75$$
>
> **Step 2 — calculated value.**
>
> $$\begin{aligned}
> \chi^2 &= \frac{2.25^2}{312.75}+\frac{3.75^2}{104.25}+\frac{3.25^2}{104.25}+\frac{2.75^2}{34.75}\\
> &= 0.016+0.135+0.101+0.218\\
> &= 0.47
> \end{aligned}$$
>
> **Critical region.** df $=3$; critical value 7.81.
>
> **Decision.** $0.47<7.81$, so do not reject $H_0$.
>
> **Comment.** The data fit the 9:3:3:1 ratio very well.

---

## Extra practice

> [!question]- Extra practice (try first, then open for answers)
> **E1.** 200 births: 115 boys and 85 girls. Are boys and girls equally likely, at 5%?
>
> Answer: $E=100$ each, $\chi^2=2.25+2.25=4.5>3.84$, so reject: they are not equally likely.
>
> **E2.** 2×2 table with $a=20$, $b=30$, $c=40$, $d=10$. Test independence at 5% with Yates' correction.
>
> Answer: $|ad-bc|=1000$, $N=100$, $\chi^2=15.04>3.84$, so reject.
>
> **E3.** What is the df for a 3×4 contingency table?
>
> Answer: $(3-1)(4-1)=6$.
>
> **E4.** A cell has $R=60$, $C=50$, $N=200$. Find $E$.
>
> Answer: $60\times50/200=15$.
>
> **E5.** Why is the chi-square test always right-tailed?
>
> Answer: because $\chi^2\ge0$, and only large values show disagreement with $H_0$.

---

Previous: [[S8 Hypothesis Testing Concepts and z t Tests]] · Next: [[S10 ANOVA One-Way and Two-Way]] · Home: [[index]]
