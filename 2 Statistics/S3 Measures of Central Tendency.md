---
title: "S3 · Measures of Central Tendency"
tags: [math243, statistics, central-tendency]
---

# S3 · Measures of Central Tendency

**Why this matters for the TF.** The mean, median, mode and quartiles are rarely a whole question, but they are the first step of almost every statistics question.

They appear in "which factory pays more on average" (2020-21 Q5a), the median from an ogive (2021-22 Q5a, see [[S2 Frequency Distributions and Graphs]]), Pearson/Bowley/Kelly skewness and moments ([[S5 Moments Skewness and Kurtosis]]), CV ([[S4 Measures of Dispersion]]) and the corrected mean of 2023-24 Q5(c) ([[TF 2023-24 Solutions]]).

Get fast and accurate at the grouped-data formulas below.

---

## Core tools (memorize)

> [!important] Memorize
> **Step deviation** — use for every grouped mean, the numbers stay small:
>
> $$u=\frac{x-A}{h}$$
>
> **Mean by step deviation:**
>
> $$\bar x=A+h\cdot\frac{\sum fu}{N}$$
>
> Take $A$ = class mark of the highest-frequency (or middle) class and $h$ = class width.
>
> **Median, quartiles, deciles, percentiles** (grouped) — find the position, then:
>
> $$\text{Value}=L+\frac{\text{position}-F}{f}\times h$$
>
> **Positions to use:**
>
> $$\text{Median: }\frac N2 \qquad Q_1:\ \frac N4 \qquad Q_3:\ \frac{3N}4 \qquad D_j:\ \frac{jN}{10} \qquad P_j:\ \frac{jN}{100}$$
>
> $L$ = lower boundary of the first class whose cumulative frequency reaches the position, $F$ = cumulative frequency before it, $f$ = its frequency.
>
> **Mode** (grouped) — use in the highest-frequency class:
>
> $$\text{Mode}=L+\frac{\Delta_1}{\Delta_1+\Delta_2}\times h$$
>
> with $\Delta_1=f_m-f_{\text{before}}$ and $\Delta_2=f_m-f_{\text{after}}$.
>
> **Combined mean** — use when two groups are merged:
>
> $$\bar x_c=\frac{n_1\bar x_1+n_2\bar x_2}{n_1+n_2}$$
>
> **Empirical relation** — use to estimate one average from the other two:
>
> $$\text{Mode}\approx 3\,\text{Median}-2\,\text{Mean}$$
>
> **Shape check:**
>
> Symmetric: Mean = Median = Mode.
>
> Positive skew: Mode < Median < Mean.
>
> Negative skew: Mean < Median < Mode.

---

## Theory the TF actually asks

No past paper has asked for a definition of the mean, median or mode on its own. If a short comparison is needed, one sentence each is enough.

The **mean** uses every value and suits further calculation, but is pulled by extreme values.

The **median** is the middle value, unaffected by extremes and readable from an ogive, so it suits skewed data like incomes.

The **mode** is the most frequent value and the only average for categories, but may not be unique.

---

## Problem types you will face

### Type 1 — Grouped mean by step deviation, and comparing two groups

**Recognise it:** a frequency table and "find the average" or "which pays/lasts more on average".

**Recipe:** make a table with $x$, $u$, $f$, $fu$. Compute $\bar x$ for each group. State the comparison in words.

> [!example] Past TF 2020-21 Q5(a)(i): Which factory pays higher average wages?
> **Given.** Daily wages 20–30, …, 80–90; Factory A: 15, 30, 44, 60, 30, 14, 7; Factory B: 25, 40, 60, 35, 20, 15, 5. Take $A=55$, $h=10$.
>
> **Step 1 — calculation table.**
>
> | Wages | $x$ | $u$ | $f_A$ | $f_A u$ | $f_B$ | $f_B u$ |
> |---|---|---|---|---|---|---|
> | 20–30 | 25 | −3 | 15 | −45 | 25 | −75 |
> | 30–40 | 35 | −2 | 30 | −60 | 40 | −80 |
> | 40–50 | 45 | −1 | 44 | −44 | 60 | −60 |
> | 50–60 | 55 | 0 | 60 | 0 | 35 | 0 |
> | 60–70 | 65 | 1 | 30 | 30 | 20 | 20 |
> | 70–80 | 75 | 2 | 14 | 28 | 15 | 30 |
> | 80–90 | 85 | 3 | 7 | 21 | 5 | 15 |
> | Total | | | 200 | −70 | 200 | −150 |
>
> **Step 2 — mean of Factory A.**
>
> $$\bar x_A=55+10\times\frac{-70}{200}=51.5\ \text{Tk}$$
>
> **Step 3 — mean of Factory B.**
>
> $$\bar x_B=55+10\times\frac{-150}{200}=47.5\ \text{Tk}$$
>
> **Answer.** Since $51.5>47.5$, ==**Factory A pays higher average daily wages**==.
>
> Part (ii), which factory is more variable, is solved in [[S4 Measures of Dispersion]].

> [!example] Practice 1 (TF style)
> Scores of 100 students: 10–20: 6, 20–30: 14, 30–40: 25, 40–50: 32, 50–60: 15, 60–70: 8. Find the mean.
>
> **Given.** Take $A=45$ (highest frequency), $h=10$.
>
> **Step 1 — calculation table.**
>
> | Class | $x$ | $f$ | $u$ | $fu$ |
> |---|---|---|---|---|
> | 10–20 | 15 | 6 | −3 | −18 |
> | 20–30 | 25 | 14 | −2 | −28 |
> | 30–40 | 35 | 25 | −1 | −25 |
> | 40–50 | 45 | 32 | 0 | 0 |
> | 50–60 | 55 | 15 | 1 | 15 |
> | 60–70 | 65 | 8 | 2 | 16 |
> | Total | | 100 | | −40 |
>
> **Step 2 — mean.**
>
> $$\bar x=45+10\times\frac{-40}{100}=41$$
>
> **Answer.** **Mean = 41.**

---

### Type 2 — Median, mode, quartiles and percentiles of grouped data

**Recognise it:** "find the median/mode", or you need $Q_1,Q_2,Q_3$ (Bowley) or $P_{10},P_{50},P_{90}$ (Kelly).

**Recipe:** add a cumulative-frequency column and compute each position. Pick the first class whose cumulative frequency reaches it, then apply the formula.

> [!example] Practice 2 (TF style, same data as Practice 1)
> Find the median, mode, $Q_1$, $Q_3$, $P_{10}$ and $P_{90}$, and comment on the shape.
>
> **Given.** Cumulative frequencies (classes 10–20, …, 60–70): 6, 20, 45, 77, 92, 100. $N=100$.
>
> **Step 1 — median.** Position $N/2=50$; class 40–50, $F=45$, $f=32$:
>
> $$\text{Median}=40+\frac{50-45}{32}\times10=41.56$$
>
> **Step 2 — mode.** Modal class 40–50, $\Delta_1=32-25=7$, $\Delta_2=32-15=17$:
>
> $$\text{Mode}=40+\frac{7}{7+17}\times10=42.92$$
>
> **Step 3 — $Q_1$.** Position 25; class 30–40, $F=20$, $f=25$:
>
> $$Q_1=30+\frac{25-20}{25}\times10=32$$
>
> **Step 4 — $Q_3$.** Position 75; class 40–50, $F=45$, $f=32$:
>
> $$Q_3=40+\frac{75-45}{32}\times10=49.38$$
>
> **Step 5 — $P_{10}$.** Position 10; class 20–30, $F=6$, $f=14$:
>
> $$P_{10}=20+\frac{10-6}{14}\times10=22.86$$
>
> **Step 6 — $P_{90}$.** Position 90; class 50–60, $F=77$, $f=15$:
>
> $$P_{90}=50+\frac{90-77}{15}\times10=58.67$$
>
> **Answer — shape.** Mean 41 < Median 41.56 < Mode 42.92, so the distribution is slightly **negatively skewed** (tail to the left).

> [!example] Practice 3 (TF style, width 20)
> Monthly data-usage (GB) of 100 users: 0–20: 12, 20–40: 25, 40–60: 38, 60–80: 17, 80–100: 8. Find mean, median, mode and $Q_3$.
>
> **Given.** $A=50$, $h=20$, so $u=-2,-1,0,1,2$. Cumulative frequencies: 12, 37, 75, 92, 100.
>
> **Step 1 — mean.**
>
> $$\sum fu=-24-25+0+17+16=-16$$
>
> $$\bar x=50+20\times\frac{-16}{100}=46.8\ \text{GB}$$
>
> **Step 2 — median.** Position 50, class 40–60:
>
> $$\text{Median}=40+\frac{50-37}{38}\times20=46.84$$
>
> **Step 3 — mode.** $\Delta_1=38-25=13$, $\Delta_2=38-17=21$:
>
> $$\text{Mode}=40+\frac{13}{13+21}\times20=47.65$$
>
> **Step 4 — $Q_3$.** Position 75, class 40–60:
>
> $$Q_3=40+\frac{75-37}{38}\times20=60$$
>
> **Answer.** Mean ≈ Median ≈ Mode, so the distribution is **nearly symmetric**.

> [!warning] Picking the class
> The class you use is the **first** one whose cumulative frequency is **at least** the position.
>
> In Practice 3, $3N/4=75$ equals the cumulative frequency of 40–60 exactly, so $Q_3$ is the upper boundary 60.
>
> If your answer falls outside the class you used, you picked the wrong class.

---

### Type 3 — Combined mean and missing frequency

**Recognise it:** two groups with sizes and means, or a table with one unknown frequency and a given mean.

**Recipe:** use the combined mean formula. For a missing frequency, write $\bar x=\sum fx/\sum f$ with the unknown and solve the linear equation.

> [!example] Practice 4 (TF style)
> Section A has 60 students with mean 72 and Section B has 40 students with mean 65. Find the combined mean.
>
> $$\begin{aligned}
> \bar x_c &= \frac{60(72)+40(65)}{100}\\
> &= \frac{4320+2600}{100}\\
> &= 69.2
> \end{aligned}$$
>
> **Answer.** **Combined mean = 69.2.**

> [!example] Practice 5 (TF style)
> Classes 0–10, 10–20, 20–30, 30–40, 40–50 have frequencies 4, 6, $f$, 10, 5 and the mean is 27. Find $f$.
>
> **Step 1 — totals.** Class marks are 5, 15, 25, 35, 45, so
>
> $$\sum fx=20+90+25f+350+225=685+25f$$
>
> $$N=25+f$$
>
> **Step 2 — solve.**
>
> $$\begin{aligned}
> \frac{685+25f}{25+f} &= 27\\
> 685+25f &= 675+27f\\
> f &= 5
> \end{aligned}$$
>
> **Answer.** **$f=5$.**

---

### Type 4 — Ungrouped data (often after a stem-and-leaf plot)

**Recognise it:** a short list.

**Recipe:** sort the values. The median is the $\frac{n+1}{2}$-th value (average the two middle ones if $n$ is even). The mode is the most repeated value (report all ties). The quartile position is $\frac{j(n+1)}{4}$.

> [!example] Practice 6 (TF style)
> Data: 12, 7, 15, 9, 12, 20, 11, 12, 8, 14. Find mean, median, mode and $Q_1$.
>
> **Step 1 — sort.** 7, 8, 9, 11, 12, 12, 12, 14, 15, 20.
>
> **Step 2 — mean.**
>
> $$\bar x=\frac{120}{10}=12$$
>
> **Step 3 — median.** $n=10$, so average the 5th and 6th values:
>
> $$\frac{12+12}{2}=12$$
>
> **Step 4 — mode.** 12 appears three times.
>
> **Step 5 — $Q_1$.** Position $11/4=2.75$:
>
> $$Q_1=8+0.75(9-8)=8.75$$
>
> **Answer.** **Mean 12, median 12, mode 12, $Q_1$ = 8.75.**

---

## Extra practice

> [!question]- Answers
> **1.** Mean, median and mode of 4, 7, 7, 9, 13?
>
> 8, 7, 7.
>
> **2.** 30 students with mean 60 and 50 students with mean 68: combined mean?
>
> 65.
>
> **3.** $N=80$, cumulative frequencies 10, 25, 47, 70, 80 for 0–10, …, 40–50: median?
>
> $20+\frac{40-25}{22}\times10=26.82$.
>
> **4.** Mean 30 and median 28: estimate the mode.
>
> $3(28)-2(30)=24$.
>
> **5.** For Factory A in 2020-21 Q5(a) (cumulative 15, 45, 89, 149, 179, 193, 200), find the median and mode.
>
> Median $=50+\frac{100-89}{60}\times10=51.83$.
>
> Mode $=50+\frac{16}{16+30}\times10=53.48$.
>
> **6.** Speeds 40 and 60 km/h over equal distances: average speed?
>
> Harmonic mean $=48$ km/h.

---

Previous: [[S2 Frequency Distributions and Graphs]] · Next: [[S4 Measures of Dispersion]] · Home: [[index]]
