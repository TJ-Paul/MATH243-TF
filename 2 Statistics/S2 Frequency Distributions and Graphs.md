---
title: "S2 · Frequency Distributions and Graphs"
tags: [math243, statistics, graphs]
---

# S2 · Frequency Distributions and Graphs

**Why this matters for the term final.** Graph and table questions appear every year. In 2023-24, Q5(a) asked "What are stem-and-leaf plots and how do you create them?" and Q5(b) asked you to explain and interpret a scatter plot of price versus rating. In 2022-23, Q5(b) asked for a frequency table using Sturges' rule, a histogram and a cumulative frequency graph from 60 raw values, and Q6(b) asked for a stem-and-leaf plot of pencil lengths with median, mode and range. In 2021-22, Q5(a) asked for an ogive to read the median and a count of workers in an interval, and Q5(b)(i) asked for class limits and class marks. The 2021-22 questions are fully solved here; the 2023-24 and 2022-23 ones are solved in [[TF 2023-24 Solutions]] and [[TF 2022-23 Solutions]], and this note gives you fresh practice of exactly the same kind.

---

## 1. Frequency distribution: the vocabulary

When we have many raw observations, we organize them into a **frequency distribution**, which is a table showing each value or class of values together with the number of observations (the **frequency**, $f$) falling in it. If there are few distinct values we list each value separately (an **ungrouped** frequency distribution). If the values are many and spread out, we group them into **classes** (a **grouped** frequency distribution).

> [!important] Memorize: Class terminology
> The ==class limits== are the smallest and largest values that can actually be **written** in a class, for example 200–219. The ==class boundaries== are the points halfway between the upper limit of one class and the lower limit of the next, for example 199.5–219.5; they remove the gaps between classes so that the classes touch each other. The ==class mark== (mid-value) is the midpoint of the class: $\text{class mark} = \dfrac{\text{lower limit} + \text{upper limit}}{2}$ (the same result is obtained from the boundaries). The ==class width== $h$ is the difference between two consecutive lower boundaries (or lower limits), equivalently upper boundary minus lower boundary.

If data are recorded to the nearest integer, boundaries are found by subtracting 0.5 from each lower limit and adding 0.5 to each upper limit. If data are recorded to one decimal place, subtract and add 0.05, and so on. When a table is written like "20–30, 30–40, …" the classes are already given by boundaries (the convention is that 30 goes into the class 30–40), and the class mark is simply $(20+30)/2 = 25$.

## 2. How many classes? Sturges' rule

> [!important] Memorize: Sturges' rule (used in 2022-23 Q5b)
> $$K = 1 + 3.322 \log_{10} N$$
> where $K$ is the number of classes and $N$ is the total number of observations. Round $K$ to a whole number. Then
> $$\text{class width } h \approx \frac{\text{Largest value} - \text{Smallest value}}{K}$$
> and round $h$ **up** to a convenient number.

For example, with $N = 50$ observations, $K = 1 + 3.322 \times \log_{10}50 = 1 + 3.322 \times 1.699 = 6.64 \approx 7$ classes. If the data run from 12 to 75, the range is 63 and $h = 63/7 = 9$, so we could use classes 12–20, 21–29, 30–38 and so on (each containing 9 integers).

**Step-by-step method to build a grouped frequency table.** First find the largest and smallest values and the range. Second, decide the number of classes $K$ (by Sturges' rule if asked, otherwise usually 5 to 15). Third, compute the width $h$ and round it up. Fourth, choose the first lower limit (the smallest value or a convenient number just below it) and write down all the classes by repeatedly adding $h$. Fifth, go through the raw data one by one and put a tally mark against the right class; this prevents missing values. Sixth, count the tallies to get the frequencies and check that the total equals $N$. Finally add columns for class boundaries, class marks and cumulative frequency, because the graphs and almost every later calculation need them.

> [!warning] Common mistake
> Always check that the frequencies add up to $N$. In a 60-value question one missed tally costs you the histogram, ogive and every number after it.

> [!example] Past TF 2021-22 Q5(b)(i): class limits and class marks
> **Problem:** 34 observations recorded to the nearest integer range from 201 to 337. Seven classes of width 20 are to be used, beginning the first class at 199.5. Find the class limits and class marks.
>
> **Solution.** Since the first class begins at 199.5 (a boundary) and the width is 20, the class boundaries are 199.5–219.5, 219.5–239.5, 239.5–259.5, 259.5–279.5, 279.5–299.5, 299.5–319.5 and 319.5–339.5. The data are integers, so each lower limit is the lower boundary plus 0.5 and each upper limit is the upper boundary minus 0.5. Hence the class limits are **200–219, 220–239, 240–259, 260–279, 280–299, 300–319, 320–339**. The class marks are the midpoints: $(200+219)/2 = 209.5$, and each next one is 20 more, giving **209.5, 229.5, 249.5, 269.5, 289.5, 309.5, 329.5**. Check: the seven classes cover 200 to 339, which contains the smallest value 201 and the largest value 337, so all 34 observations fit.

## 3. Histogram, frequency polygon and ogive

A **histogram** is a graph of a grouped frequency distribution in which the class boundaries are marked on the x-axis and a rectangle (bar) is drawn over each class with height equal to the frequency. The bars **touch each other** because the data are continuous (this is the difference from a bar chart). If class widths are unequal, the height must be the frequency per unit width (frequency density), otherwise wide classes look too important. The tallest bar marks the modal class.

A **frequency polygon** is drawn by plotting the frequency of each class against its class mark and joining the points with straight lines. To close the polygon, add one empty class at each end with zero frequency, so the polygon starts and ends on the x-axis.

> [!important] Memorize: Ogive (cumulative frequency graph)
> An ==ogive== is the graph of the **cumulative frequency**. For a "less-than" ogive, the cumulative frequency (number of observations less than a value) is plotted against the **upper class boundary**, starting from the point (first lower boundary, 0), and the points are joined by straight lines or a smooth curve. The ogive always rises from 0 to $N$. ==Its main use is to read the median, quartiles and percentiles graphically, and to count how many observations lie between two values.==

To read the median from a less-than ogive, mark $N/2$ on the y-axis, draw a horizontal line to the ogive, then drop a vertical line to the x-axis; the x-value is the median. For $Q_1$ use $N/4$, for $Q_3$ use $3N/4$, and for the $k$-th percentile use $kN/100$. To count values between $a$ and $b$, read the ogive heights at $a$ and $b$ and subtract.

The median formula used to verify the graph is (see [[S3 Measures of Central Tendency]]):

$$\text{Median} = L + \frac{\frac{N}{2} - F}{f_m} \times h$$

where $L$ is the lower boundary of the median class, $F$ is the cumulative frequency before the median class, $f_m$ is the frequency of the median class and $h$ is its width.

> [!example] Past TF 2021-22 Q5(a) (18 marks): ogive, median, workers between 2000 and 2170 Tk
> **Data.** Monthly wages and workers: 1900–1950: 6, 1950–2000: 10, 2000–2050: 22, 2050–2100: 30, 2100–2150: 16, 2150–2200: 12, 2200–2400: 15.
>
> **Choice of diagram.** The last class (2200–2400) is four times wider than the others, so a plain histogram would be misleading. Since we must read the median and count workers in an interval, the ==suitable diagram is the less-than ogive==.
>
> **Cumulative frequency table.**
>
> | Wages (less than) | 1900 | 1950 | 2000 | 2050 | 2100 | 2150 | 2200 | 2400 |
> |---|---|---|---|---|---|---|---|---|
> | Cumulative no. of workers | 0 | 6 | 16 | 38 | 68 | 84 | 96 | 111 |
>
> Plot these eight points (upper boundary, cumulative frequency) and join them. $N = 111$.
>
> ![[m243-tf2122-q5a-ogive.png]]
>
> **Median from the graph.** $N/2 = 55.5$. A horizontal line at 55.5 meets the ogive above about 2079 on the wage axis, so the median wage is about **Tk 2079**.
>
> **Verification by formula.** The 55.5-th value lies in the class 2050–2100 (cumulative frequency goes from 38 to 68). So $L = 2050$, $F = 38$, $f_m = 30$, $h = 50$:
> $$\text{Median} = 2050 + \frac{55.5 - 38}{30} \times 50 = 2050 + 29.17 = 2079.17 \text{ Tk}$$
> which agrees with the graph.
>
> **Workers earning between 2000 and 2170 Tk.** All workers of the classes 2000–2050, 2050–2100 and 2100–2150 are included: $22 + 30 + 16 = 68$. From the class 2150–2200 (12 workers, width 50) we need the part from 2150 to 2170, which is 20 out of 50, so assuming uniform spread inside the class we take $12 \times \frac{20}{50} = 4.8$. Total $= 68 + 4.8 = 72.8 \approx$ **73 workers**. From the ogive: height at 2170 is about $84 + 4.8 = 88.8$, height at 2000 is 16, difference $\approx 72.8$.

## 4. Charts for qualitative data and time (brief)

A **bar chart** shows categories (qualitative data) with separated bars whose heights are the frequencies; bars do not touch. A **compound (multiple) bar chart** puts bars of two or more groups side by side for comparison. A **Pareto chart** is a bar chart for categorical data in which the bars are arranged from the highest frequency to the lowest, which quickly shows the most important categories. A **pie chart** divides a circle into sectors whose angles are proportional to the frequencies, with angle $= \frac{f}{N} \times 360^\circ$; it shows parts of a whole. A **time series graph** (line graph) plots values against time to show trends, such as yearly sales.

## 5. Stem-and-leaf plot

> [!important] Memorize: Stem-and-leaf plot (2023-24 Q5a, 10 marks)
> A ==stem-and-leaf plot== is a way of displaying quantitative data in which each value is split into a **stem** (the leading digit or digits) and a **leaf** (the last digit). The stems are written once in a vertical column in increasing order, and the leaves of all values with the same stem are written in a row to the right of that stem, in increasing order. It looks like a histogram turned on its side, but ==unlike a histogram it keeps every original data value==, so we can still read the exact values, find the median, mode and range directly, and see the shape (symmetry, skewness, gaps, outliers) of the distribution.

**How to create a stem-and-leaf plot.** First decide how to split the numbers: for two-digit numbers the tens digit is the stem and the units digit is the leaf; for numbers like 17.4 the integer part is the stem and the decimal digit is the leaf. Second, write all possible stems from the smallest to the largest in a column, including stems with no leaves (so that gaps are visible). Third, go through the data and write each leaf next to its stem. Fourth, rewrite the plot with the leaves of each row arranged in increasing order (an **ordered** stem-and-leaf plot). Finally, always add a **key** such as "4 | 2 means 42", so the reader knows the units.

**Example (fresh).** The scores of 20 students are: 42, 57, 38, 61, 45, 49, 53, 66, 71, 58, 44, 39, 62, 55, 47, 51, 68, 74, 59, 46.

```text
Stem | Leaf           (Key: 4 | 2 means 42)
  3  | 8 9
  4  | 2 4 5 6 7 9
  5  | 1 3 5 7 8 9
  6  | 1 2 6 8
  7  | 1 4
```

From the plot we can read everything. There are $n = 20$ values, so the median is the average of the 10th and 11th ordered values. Counting leaves: stem 3 has 2 values, stem 4 has 6 (total 8), so the 9th, 10th and 11th values are 51, 53 and 55. The median is $(53 + 55)/2 = 54$. The range is $74 - 38 = 36$. No value repeats, so there is no unique mode, but the modal rows (most leaves) are the 40s and 50s. The shape is roughly symmetric with a slight tail.

**A decimal example (fresh, same style as the pencil question).** Battery lives in hours: 4.2, 3.8, 4.5, 5.1, 4.2, 3.9, 4.7, 5.0, 4.2, 4.8, 3.6, 4.4. Use the integer part as stem and the first decimal as leaf.

```text
Stem | Leaf           (Key: 4 | 2 means 4.2 hours)
  3  | 6 8 9
  4  | 2 2 2 4 5 7 8
  5  | 0 1
```

$n = 12$, so the median is the average of the 6th and 7th values: 4.2 and 4.4, giving median $= 4.3$ hours. The mode is the most repeated leaf: 4.2 appears three times, so mode $= 4.2$ hours. Range $= 5.1 - 3.6 = 1.5$ hours. If two values tie for the most repeats, the data are **bimodal** and you must report both modes.

## 6. Scatter plot

> [!important] Memorize: Scatter plot (2023-24 Q5b)
> A ==scatter plot== (scatter diagram) is a graph of **paired** data $(x, y)$ in which each pair is plotted as one point, with the independent (explanatory) variable on the x-axis and the dependent (response) variable on the y-axis. It is the first step in correlation and regression analysis, because it shows whether a relationship exists, its **direction** (positive or negative), its **form** (linear or curved) and its **strength** (how tightly the points cluster), and it reveals outliers.

![[m243-correlation-types.png]]

**How to interpret a scatter plot.** If the points rise from left to right, the relationship is positive (as $x$ increases, $y$ tends to increase). If they fall from left to right, it is negative. If the points lie close to a straight line, the linear relationship is strong; if they form a wide cloud, it is weak; if there is no pattern, there is no relationship. A curved pattern means a non-linear relationship, in which case Pearson's $r$ can be near zero even though $x$ and $y$ are strongly related (last panel above). In an exam answer, always draw the plot with labelled axes, describe direction, form and strength in words, and, if you can, support it with the value of $r$ (see [[S6 Correlation and Regression]]).

**Quick example.** Hours studied (2, 4, 5, 7, 9) and marks (45, 55, 60, 72, 85): the points rise steadily and lie close to a line, so there is a strong positive linear relationship; more study hours go with higher marks.

## 7. Box plot (box-and-whisker plot)

![[m243-boxplot.png]]

A **box plot** displays the ==five-number summary==: minimum, first quartile $Q_1$, median $Q_2$, third quartile $Q_3$ and maximum. A box is drawn from $Q_1$ to $Q_3$ with a line at the median, and "whiskers" extend from the box to the smallest and largest values that are not outliers. The length of the box is the interquartile range $IQR = Q_3 - Q_1$. A value is usually flagged as an outlier if it is below $Q_1 - 1.5\,IQR$ or above $Q_3 + 1.5\,IQR$. If the median is in the middle of the box and the whiskers are equal, the distribution is symmetric; if the right whisker is longer and the median is nearer $Q_1$, the distribution is positively skewed. Box plots are excellent for comparing two or more groups side by side.

> [!tip] Exam trick: which graph to draw?
> For raw quantitative data with few values, use a stem-and-leaf plot. For grouped data, use a histogram (shape and mode) or an ogive (median, quartiles, "how many between"). For two related variables, use a scatter plot. For categories, use a bar, Pareto or pie chart. For data over time, use a time series graph. Write one sentence justifying your choice; examiners give a mark for it.

---

> [!question]- Self-check
> **1. Classes 15–19, 20–24, 25–29 (integer data). Give the boundaries and class marks.**
> Boundaries 14.5–19.5, 19.5–24.5, 24.5–29.5; class marks 17, 22, 27; width 5.
>
> **2. Using Sturges' rule, how many classes for $N = 100$?**
> $K = 1 + 3.322 \times 2 = 7.644 \approx 8$ classes.
>
> **3. In a less-than ogive, against what is the cumulative frequency plotted?**
> Against the upper class boundary (starting at the first lower boundary with 0).
>
> **4. Why is a stem-and-leaf plot sometimes preferred to a histogram?**
> It shows the distribution's shape like a histogram but retains every original value, so exact median, mode and range can be read.
>
> **5. A scatter plot shows points forming a U shape. Will Pearson's $r$ be large?**
> No. $r$ measures only linear association, so it can be close to 0 even though there is a strong curved relationship.

---

Previous: [[S1 Introduction to Statistics Data and Sampling]] · Next: [[S3 Measures of Central Tendency]] · Home: [[index]]
