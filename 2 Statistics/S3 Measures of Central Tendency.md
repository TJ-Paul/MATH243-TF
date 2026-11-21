---
title: "S3 · Measures of Central Tendency"
tags: [math243, statistics, central-tendency]
---

# S3 · Measures of Central Tendency

**Why this matters for the term final.** The mean, median, mode and quartiles are the raw material for almost every statistics question. The 2020-21 term final Q5(a)(i) asked "which factory pays higher average wages?" (solved below). Every coefficient-of-variation question ([[S4 Measures of Dispersion]]), every skewness question (Pearson needs the mode, Bowley needs quartiles, Kelly needs percentiles; see [[S5 Moments Skewness and Kurtosis]]), the ogive median of 2021-22 Q5(a) ([[S2 Frequency Distributions and Graphs]]) and the corrected-mean question of 2023-24 Q5(c) ([[TF 2023-24 Solutions]]) all start here. The median and mode from a stem-and-leaf plot (2022-23 Q6b, in [[TF 2022-23 Solutions]]) also use these definitions.

---

## 1. What is a measure of central tendency?

A **measure of central tendency** (or measure of location, or average) is a single value that represents the centre of a data set, the value around which the observations tend to cluster. The three main ones are the **mean**, the **median** and the **mode**. A good average should be rigidly defined, easy to understand and compute, based on all observations, not too affected by extreme values, and suitable for further algebraic treatment. The arithmetic mean satisfies most of these, which is why it is the most used.

## 2. Arithmetic mean

> [!important] Memorize: Arithmetic mean formulas
> **Ungrouped data** ($n$ values): $$\bar{x} = \frac{\sum x_i}{n}$$
> **Grouped data** (class marks $x_i$, frequencies $f_i$, $N = \sum f_i$): $$\bar{x} = \frac{\sum f_i x_i}{N}$$
> **Step-deviation (short-cut) method**, with assumed mean $A$ and class width $h$: $$u_i = \frac{x_i - A}{h}, \qquad \bar{x} = A + h \cdot \frac{\sum f_i u_i}{N}$$

The step-deviation method gives exactly the same answer as the direct method, but the numbers are tiny (−3, −2, −1, 0, 1, 2, 3), so arithmetic mistakes are far less likely. ==Choose $A$ as the class mark in the middle of the table (preferably where the frequency is largest) and $h$ as the common class width.== The same $u$-column is reused for variance and for moments, so one table answers the whole question.

**Properties of the mean.** The sum of deviations from the mean is zero: $\sum (x_i - \bar{x}) = 0$. The sum of squared deviations is smallest when taken about the mean: $\sum (x_i - A)^2$ is minimum at $A = \bar{x}$. If every value is changed as $y = a + bx$, then $\bar{y} = a + b\bar{x}$ (change of origin and scale). The mean uses all observations and is the basis of variance, but it is strongly affected by extreme values (outliers) and cannot be found for open-ended classes without assumptions.

**Weighted mean.** When values have different importance $w_i$: $\bar{x}_w = \dfrac{\sum w_i x_i}{\sum w_i}$. Example: a CGPA is a weighted mean of grade points with credit hours as weights. Grades 4.00 (3 credits), 3.50 (4 credits), 3.00 (2 credits) give $\bar{x}_w = (12 + 14 + 6)/9 = 3.56$.

> [!important] Memorize: Combined mean of two groups
> $$\bar{x}_c = \frac{n_1 \bar{x}_1 + n_2 \bar{x}_2}{n_1 + n_2}$$
> Example: 40 workers with mean wage 50 and 60 workers with mean wage 45 have combined mean $(40\times50 + 60\times45)/100 = (2000+2700)/100 = 47$.

> [!example] Past TF 2020-21 Q5(a)(i): Which factory pays higher average wages?
> **Data.** Daily wages 20–30, 30–40, …, 80–90. Factory A frequencies: 15, 30, 44, 60, 30, 14, 7. Factory B frequencies: 25, 40, 60, 35, 20, 15, 5. Take $A = 55$, $h = 10$, so $u = (x - 55)/10$.
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
> $$\bar{x}_A = 55 + 10 \times \frac{-70}{200} = 55 - 3.5 = 51.5 \text{ Tk}, \qquad \bar{x}_B = 55 + 10 \times \frac{-150}{200} = 55 - 7.5 = 47.5 \text{ Tk}$$
>
> **Conclusion.** Since $51.5 > 47.5$, ==Factory A pays higher average daily wages==. (Part (ii), the variability comparison, is solved in [[S4 Measures of Dispersion]].)

## 3. Median

The **median** is the middle value of the data when they are arranged in increasing order, so that half of the observations are below it and half above it. For ungrouped data with $n$ values arranged in order, the median is the $\left(\frac{n+1}{2}\right)$-th value; if $n$ is even, it is the average of the $\frac{n}{2}$-th and $\left(\frac{n}{2}+1\right)$-th values.

> [!important] Memorize: Median of grouped data
> $$\text{Median} = L + \frac{\frac{N}{2} - F}{f_m} \times h$$
> $L$ = lower boundary of the median class, $N$ = total frequency, $F$ = cumulative frequency of the class **before** the median class, $f_m$ = frequency of the median class, $h$ = width of the median class. ==The median class is the first class whose cumulative frequency is at least $N/2$.==

The logic of the formula is linear interpolation: we need $N/2 - F$ more observations after reaching the start of the median class; the class contains $f_m$ observations spread evenly over width $h$, so we move a fraction $\frac{N/2 - F}{f_m}$ of the width into the class.

**Example (Factory A data).** Cumulative frequencies: 15, 45, 89, 149, 179, 193, 200. $N/2 = 100$. The first cumulative frequency that reaches 100 is 149, so the median class is 50–60, with $L = 50$, $F = 89$, $f_m = 60$, $h = 10$:
$$\text{Median} = 50 + \frac{100 - 89}{60} \times 10 = 50 + 1.83 = 51.83.$$

The median is not affected by extreme values, can be found for open-ended classes and can be read from an ogive, so it is the better average for skewed data such as incomes. Its weakness is that it does not use the actual size of every observation and is less suitable for algebra.

## 4. Mode

The **mode** is the value that occurs most often. Data can have one mode (unimodal), two modes (bimodal), more, or none (if every value occurs once).

> [!important] Memorize: Mode of grouped data
> $$\text{Mode} = L + \frac{\Delta_1}{\Delta_1 + \Delta_2} \times h, \qquad \Delta_1 = f_m - f_1,\; \Delta_2 = f_m - f_2$$
> $L$ = lower boundary of the **modal class** (the class with the highest frequency), $f_m$ = its frequency, $f_1$ = frequency of the class **before** it, $f_2$ = frequency of the class **after** it, $h$ = class width.

**Example (Factory A data).** The highest frequency is 60, in class 50–60. So $L = 50$, $\Delta_1 = 60 - 44 = 16$, $\Delta_2 = 60 - 30 = 30$, $h = 10$:
$$\text{Mode} = 50 + \frac{16}{16 + 30} \times 10 = 50 + 3.48 = 53.48.$$

The mode is easy to understand and is the only average for qualitative data (e.g. the most popular programming language), but it may not exist or may not be unique, and it is not based on all observations.

> [!important] Memorize: Empirical relation (moderately skewed data)
> $$\text{Mean} - \text{Mode} \approx 3(\text{Mean} - \text{Median}) \quad\Longleftrightarrow\quad \text{Mode} \approx 3\,\text{Median} - 2\,\text{Mean}$$
> For a symmetric distribution, Mean = Median = Mode. For positive skew, Mode < Median < Mean. For negative skew, Mean < Median < Mode. (Diagram in [[S5 Moments Skewness and Kurtosis]].)

For Factory A: Mean 51.5, Median 51.83, Mode 53.48, so Mean < Median < Mode, suggesting a slight negative skew. The empirical formula would give Mode $\approx 3(51.83) - 2(51.5) = 52.5$, close to the formula value; the relation is only approximate.

## 5. Quartiles, deciles and percentiles (partition values)

Quartiles divide ordered data into four equal parts: $Q_1$ has 25% of observations below it, $Q_2$ is the median, and $Q_3$ has 75% below it. Deciles $D_1, \dots, D_9$ divide into ten parts, and percentiles $P_1, \dots, P_{99}$ divide into a hundred parts. Note that $Q_2 = D_5 = P_{50} = \text{Median}$, $D_1 = P_{10}$ and $D_9 = P_{90}$.

> [!important] Memorize: Partition values for grouped data (needed for Bowley and Kelly skewness)
> $$Q_j = L + \frac{\frac{jN}{4} - F}{f} \times h, \qquad D_j = L + \frac{\frac{jN}{10} - F}{f} \times h, \qquad P_j = L + \frac{\frac{jN}{100} - F}{f} \times h$$
> It is the median formula with $N/2$ replaced by the required position. $L$, $F$, $f$, $h$ refer to the class that contains that position (the first class whose cumulative frequency reaches it).

**Example (Factory A).** For $Q_1$: $N/4 = 50$. Cumulative frequencies 15, 45, 89 → the class 40–50 contains the 50th value ($F = 45$, $f = 44$): $Q_1 = 40 + \frac{50 - 45}{44}\times 10 = 41.14$. For $Q_3$: $3N/4 = 150$. The cumulative frequency up to 60 is 149, which is less than 150, so $Q_3$ is in 60–70 ($F = 149$, $f = 30$): $Q_3 = 60 + \frac{150 - 149}{30}\times 10 = 60.33$.

> [!warning] Common mistake
> When the required position exactly equals or just exceeds a cumulative frequency, read carefully: the class containing the position is the first one whose cumulative frequency is **greater than or equal to** the position. Using the class before it gives a value outside its own class, which is a sure sign of error.

For ungrouped data, the $j$-th quartile is the value at position $\frac{j(n+1)}{4}$ in the ordered list (interpolate if it is not a whole number).

## 6. Geometric and harmonic means (brief)

The **geometric mean** of $n$ positive values is $GM = (x_1 x_2 \cdots x_n)^{1/n}$, equivalently $\log GM = \frac{1}{n}\sum \log x_i$. It is used for averaging rates of growth and ratios, for example average yearly growth of users. The **harmonic mean** is $HM = \dfrac{n}{\sum (1/x_i)}$ and is used for averaging rates such as speeds over equal distances. For positive data, $AM \ge GM \ge HM$, with equality only when all values are equal. Example: speeds 40 and 60 km/h over equal distances give average speed $HM = 2/(1/40 + 1/60) = 48$ km/h, not 50.

## 7. Which average to use?

Use the mean when the data are roughly symmetric and further calculations (variance, tests) will follow. Use the median when the data are skewed or have outliers, or classes are open-ended (incomes, house prices, response times). Use the mode for qualitative data or when the "most typical" value is needed (most common shoe size). In an exam comparison question like "which pays higher on average", compute the means unless told otherwise.

---

> [!question]- Self-check
> **1. Find the mean, median and mode of 4, 7, 7, 9, 13.**
> Mean $= 40/5 = 8$; median = 3rd value = 7; mode = 7.
>
> **2. Two sections have 30 students (mean 60) and 50 students (mean 68). Combined mean?**
> $(30\times60 + 50\times68)/80 = (1800+3400)/80 = 65$.
>
> **3. In a grouped table with $N = 80$, cumulative frequencies are 10, 25, 47, 70, 80 for classes 0–10, …, 40–50. Find the median.**
> $N/2 = 40$ lies in 20–30 ($F = 25$, $f = 22$): $20 + \frac{40-25}{22}\times10 = 26.82$.
>
> **4. Which average is not affected by extreme values and can be read from an ogive?**
> The median.
>
> **5. If mean = 30 and median = 28, estimate the mode.**
> Mode $\approx 3(28) - 2(30) = 24$.

---

Previous: [[S2 Frequency Distributions and Graphs]] · Next: [[S4 Measures of Dispersion]] · Home: [[index]]
