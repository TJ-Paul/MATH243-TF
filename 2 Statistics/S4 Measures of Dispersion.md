---
title: "S4 · Measures of Dispersion"
tags: [math243, statistics, dispersion]
---

# S4 · Measures of Dispersion

**Why this matters for the TF.** "Which is more variable or more consistent?" is a favourite question.

2019-20 Q5(a) asked for a CV. 2020-21 Q5(a)(ii) asked which factory's wages vary more. 2022-23 Q5(c) asked which company's bulbs to buy (mean and CV). 2023-24 Q5(c) asked for the corrected mean, SD and CV after two values were copied wrongly. 2022-23 Q6(a) also asked you to define and illustrate SD and variance.

The older two are solved here. The newer ones are in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]], with fresh practice of the same shape below.

---

## Core tools (memorize)

> [!important] Memorize
> **SD of grouped data by step deviation** — use the same $u$-table as the mean:
>
> $$\sigma=h\sqrt{\frac{\sum fu^2}{N}-\left(\frac{\sum fu}{N}\right)^2}$$
>
> **Variance of ungrouped data:**
>
> $$\sigma^2=\frac{\sum x^2}{n}-\bar x^2$$
>
> **Coefficient of variation** — use to compare the variability of two groups:
>
> $$CV=\frac{\sigma}{\bar x}\times100\%$$
>
> ==Larger CV = more variable = less consistent.==
>
> **Rebuild the totals** — use in corrected mean/SD questions:
>
> $$\sum x=n\bar x$$
>
> $$\sum x^2=n(\sigma^2+\bar x^2)$$
>
> **Combined SD** — use when two groups are merged ($d_i=\bar x_i-\bar x_c$):
>
> $$\sigma_c^2=\frac{n_1(\sigma_1^2+d_1^2)+n_2(\sigma_2^2+d_2^2)}{n_1+n_2}$$
>
> **Others, if asked:**
>
> $$\text{Range}=L-S$$
>
> $$\text{Quartile deviation}=\frac{Q_3-Q_1}{2}$$
>
> $$\text{Mean deviation}=\frac{\sum f\lvert x-\bar x\rvert}{N}$$

---

## Theory the TF actually asks

### Define and illustrate variance and standard deviation (2022-23 Q6a)

> [!important] Exam answer
> The ==variance== is the mean of the squared deviations of the observations from their mean:
>
> $$\sigma^2=\frac{1}{n}\sum(x_i-\bar x)^2$$
>
> The ==standard deviation== is its positive square root, $\sigma=\sqrt{\sigma^2}$. It is in the same units as the data and measures how far, on average, the observations lie from the mean.
>
> Deviations are squared because plain deviations from the mean always add to zero.
>
> **Illustration.** For 2, 4, 4, 4, 5, 5, 7, 9:
>
> $$\bar x=\frac{40}{8}=5$$
>
> The squared deviations 9, 1, 1, 1, 0, 0, 4, 16 add to 32, so
>
> $$\sigma^2=\frac{32}{8}=4$$
>
> $$\sigma=2$$
>
> The values lie about 2 units from the mean on average.

> [!warning] $n$ or $n-1$?
> For descriptive questions (frequency tables, CV, corrected SD) divide by $n$, as the lecture slides do.
>
> In tests and confidence intervals, the sample estimate $s^2=\frac{\sum(x-\bar x)^2}{n-1}$ is used ([[S8 Hypothesis Testing Concepts and z t Tests]]).

---

## Problem types you will face

### Type 1 — SD and CV of a grouped table

**Recognise it:** one frequency table and "calculate the coefficient of variation" or "standard deviation".

**Recipe:** make columns $x$, $f$, $u$, $fu$, $fu^2$. Find the mean, then the SD, then the CV. Finish with one interpretation line.

> [!example] Past TF 2019-20 Q5(a) (10 marks): CV of profits
> **Given.** Profits 20–30, …, 90–100; companies 4, 8, 18, 30, 15, 10, 8, 7. Take $A=55$, $h=10$.
>
> **Step 1 — calculation table.**
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
> **Step 2 — mean.**
>
> $$\bar x=55+10\times\frac{41}{100}=59.1$$
>
> **Step 3 — standard deviation.**
>
> $$\begin{aligned}
> \sigma &= 10\sqrt{3.25-0.41^2}\\
> &= 10\sqrt{3.0819}\\
> &= 17.555
> \end{aligned}$$
>
> **Step 4 — coefficient of variation.**
>
> $$CV=\frac{17.555}{59.1}\times100=29.70\%$$
>
> **Answer.** **CV = 29.70%.** The SD of profits is about 30% of the mean profit, so the companies' profits vary moderately.

---

### Type 2 — Compare two groups: which is more variable, which to prefer

**Recognise it:** two frequency columns or two samples; "which is more variable / consistent / which would you prefer".

**Recipe:** compute mean, SD and CV for both. Compare CVs for variability and means for level. Finish with a clear recommendation tied to the goal.

> [!example] Past TF 2020-21 Q5(a)(ii): Which factory has greater variability?
> **Given.** Same table as [[S3 Measures of Central Tendency]] ($A=55$, $h=10$).
>
> **Step 1 — calculation table.**
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
> **Step 2 — Factory A** (mean 51.5):
>
> $$\sigma_A=10\sqrt{2.24-0.1225}=14.55$$
>
> $$CV_A=\frac{14.55}{51.5}\times100=28.26\%$$
>
> **Step 3 — Factory B** (mean 47.5):
>
> $$\sigma_B=10\sqrt{2.85-0.5625}=15.12$$
>
> $$CV_B=\frac{15.12}{47.5}\times100=31.84\%$$
>
> **Answer.** $CV_B>CV_A$, so ==**Factory B has greater variability**==. Factory A pays both higher and more uniform wages.

> [!example] Practice 1 (TF style, like 2022-23 Q5c)
> Life (hours) of 100 bulbs each from brands X and Y; classes 600–800, 800–1000, 1000–1200, 1200–1400, 1400–1600. X: 8, 22, 40, 20, 10. Y: 5, 30, 48, 14, 3. Prices are equal. Which brand would you buy?
>
> **Given.** Take $A=1100$, $h=200$, $u=-2,-1,0,1,2$.
>
> **Step 1 — calculation table.**
>
> | $u$ | $f_X$ | $f_Xu$ | $f_Xu^2$ | $f_Y$ | $f_Yu$ | $f_Yu^2$ |
> |---|---|---|---|---|---|---|
> | −2 | 8 | −16 | 32 | 5 | −10 | 20 |
> | −1 | 22 | −22 | 22 | 30 | −30 | 30 |
> | 0 | 40 | 0 | 0 | 48 | 0 | 0 |
> | 1 | 20 | 20 | 20 | 14 | 14 | 14 |
> | 2 | 10 | 20 | 40 | 3 | 6 | 12 |
> | Total | 100 | 2 | 114 | 100 | −20 | 76 |
>
> **Step 2 — Brand X.**
>
> $$\bar x_X=1100+200(0.02)=1104$$
>
> $$\sigma_X=200\sqrt{1.14-0.0004}=213.50$$
>
> $$CV_X=19.34\%$$
>
> **Step 3 — Brand Y.**
>
> $$\bar x_Y=1100+200(-0.20)=1060$$
>
> $$\sigma_Y=200\sqrt{0.76-0.04}=169.71$$
>
> $$CV_Y=16.01\%$$
>
> **Step 4 — decision.** X lasts longer on average (1104 vs 1060 hours), but Y is more consistent (smaller CV).
>
> Since prices are equal and the buyer wants the most light per taka, ==prefer X== for its longer average life. If uniform, predictable life matters more (for example replacing all bulbs at once), prefer Y.
>
> **Answer.** **Buy X** (longer average life); Y is the more consistent brand. Always state the trade-off and then choose.

> [!example] Practice 2 (TF style, ungrouped samples)
> Times (minutes) for two samples of 7 workers. A: 130, 124, 119, 134, 142, 130, 141. B: 132, 144, 136, 143, 132, 133, 140. Which sample is more variable and which takes less time on average?
>
> **Step 1 — sample A.**
>
> $$\sum x=920 \qquad \sum x^2=121338$$
>
> $$\bar x_A=131.43$$
>
> $$\sigma_A=\sqrt{\frac{121338}{7}-131.43^2}=7.78$$
>
> $$CV_A=5.92\%$$
>
> **Step 2 — sample B.**
>
> $$\sum x=960 \qquad \sum x^2=131818$$
>
> $$\bar x_B=137.14$$
>
> $$\sigma_B=4.79$$
>
> $$CV_B=3.50\%$$
>
> **Answer.** **Sample A takes less time on average**, while sample A is also **more variable** ($5.92\%>3.50\%$); B is more consistent.

---

### Type 3 — Corrected mean, SD and CV after wrong entries

**Recognise it:** "at the time of calculation, some items were wrongly taken as … instead of …".

**Recipe:** rebuild $\sum x$ and $\sum x^2$ from the wrong results. Remove the wrong values and add the correct ones, then recompute. $n$ does not change.

> [!example] Practice 3 (TF style, like 2023-24 Q5c)
> The mean and SD of 50 observations were 40 and 5. Two values were wrongly taken as 32 and 58 instead of 23 and 85. Find the correct mean, SD and CV.
>
> **Step 1 — rebuild the wrong totals.**
>
> $$\sum x=50\times40=2000$$
>
> $$\sum x^2=50(25+1600)=81250$$
>
> **Step 2 — correct the totals.**
>
> $$\sum x=2000-90+108=2018$$
>
> $$\sum x^2=81250-(1024+3364)+(529+7225)=84616$$
>
> **Step 3 — correct mean.**
>
> $$\bar x=\frac{2018}{50}=40.36$$
>
> **Step 4 — correct SD.**
>
> $$\begin{aligned}
> \sigma &= \sqrt{\frac{84616}{50}-40.36^2}\\
> &= \sqrt{63.39}\\
> &= 7.96
> \end{aligned}$$
>
> **Step 5 — correct CV.**
>
> $$CV=\frac{7.96}{40.36}\times100=19.73\%$$
>
> **Answer.** **Mean 40.36, SD 7.96, CV 19.73%.**

> [!example] Practice 4 (TF style, one wrong value)
> The mean and SD of 100 items are 45 and 8. One item was recorded as 19 instead of 91. Find the correct mean, SD and CV.
>
> **Step 1 — rebuild.**
>
> $$\sum x=4500$$
>
> $$\sum x^2=100(64+2025)=208900$$
>
> **Step 2 — correct.**
>
> $$\sum x=4500-19+91=4572$$
>
> $$\sum x^2=208900-361+8281=216820$$
>
> **Step 3 — recompute.**
>
> $$\bar x=45.72$$
>
> $$\sigma=\sqrt{2168.2-45.72^2}=\sqrt{77.88}=8.83$$
>
> $$CV=19.30\%$$
>
> **Answer.** **Mean 45.72, SD 8.83, CV 19.30%.**

> [!warning] Common mistake
> Never "adjust" the SD directly. Always go through $\sum x^2$.
>
> Remember $\sum x^2=n(\sigma^2+\bar x^2)$, not $n\sigma^2$.

---

### Type 4 — Combined mean and SD of two groups

> [!example] Practice 5 (TF style)
> Group 1: 40 items, mean 50, SD 6. Group 2: 60 items, mean 45, SD 8. Find the combined mean and SD.
>
> **Step 1 — combined mean.**
>
> $$\bar x_c=\frac{2000+2700}{100}=47$$
>
> so $d_1=3$ and $d_2=-2$.
>
> **Step 2 — combined variance.**
>
> $$\begin{aligned}
> \sigma_c^2 &= \frac{40(36+9)+60(64+4)}{100}\\
> &= \frac{1800+4080}{100}\\
> &= 58.8
> \end{aligned}$$
>
> **Step 3 — combined SD.**
>
> $$\sigma_c=7.67$$
>
> **Answer.** **Combined mean 47, combined SD 7.67.**

---

## Extra practice

> [!question]- Answers
> **1.** SD of 3, 5, 7?
>
> Variance $8/3$, SD $1.633$.
>
> **2.** Batsman A: mean 50, SD 15; B: mean 40, SD 8. Who is more consistent?
>
> $CV_A=30\%$, $CV_B=20\%$; B.
>
> **3.** Every value is multiplied by 3 and then 10 is added. What happens to the SD?
>
> It is multiplied by 3 (adding 10 has no effect); the CV changes because the mean changes.
>
> **4.** Mean and SD of 20 values are 10 and 2. Find $\sum x$ and $\sum x^2$.
>
> 200 and 2080.
>
> **5.** Grouped data with $h=5$, $N=50$, $\sum fu=10$, $\sum fu^2=90$, $A=30$. Find mean, SD and CV.
>
> $\bar x=31$, $\sigma=5\sqrt{1.8-0.04}=6.63$, $CV=21.4\%$.

---

Previous: [[S3 Measures of Central Tendency]] · Next: [[S5 Moments Skewness and Kurtosis]] · Home: [[index]]
