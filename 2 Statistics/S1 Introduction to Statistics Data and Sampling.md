---
title: "S1 · Introduction to Statistics, Data and Sampling"
tags: [math243, statistics, theory]
---

# S1 · Introduction to Statistics, Data and Sampling

**Why this matters for the TF.** This is the one statistics chapter where the term final asks theory instead of calculations, so these are easy marks if you have the answers ready. The papers have asked about statistical data and its sources in Bangladesh (2022-23 Q5a, 10 marks), stratified random sampling with an example (2023-24 Q6c), and statistic versus parameter (2022-23 Q7a). Each of those answers is written below in exam form, followed by the few small calculation types (allocating a stratified sample, systematic sampling, classifying variables) that go with them. The real papers are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]].

---

## Core tools (memorize)

> [!important] Memorize
> **Proportional allocation in stratified sampling** (use it whenever a question gives stratum sizes and a total sample size):
>
> $$n_h = n\times\frac{N_h}{N}$$
>
> **Systematic sampling interval** (use it when you take every k-th unit from a list):
>
> $$k=\frac{N}{n}$$
>
> **Random start** — pick one number at random:
>
> $$r\in\{1,2,\dots,k\}$$
>
> **Units selected:**
>
> $$r,\quad r+k,\quad r+2k,\quad \dots$$
>
> **Parameter vs statistic:** **P**arameter describes the **P**opulation (Greek letters $\mu,\ \sigma,\ P$).
>
> **S**tatistic describes the **S**ample (Latin letters $\bar x,\ s,\ \hat p$).

---

## Theory the TF actually asks

### Statistics, population and sample (2-3 mark definitions)

==Statistics is the science of collecting, organizing, summarizing, analyzing and interpreting data, and of drawing conclusions from data in the presence of uncertainty.== A **population** is the complete set of individuals or objects under study, and a **sample** is the part of it that we actually observe. Collecting data from every member of the population is a **census**. **Descriptive statistics** only summarizes the data in hand (tables, graphs, mean, SD), while **inferential statistics** uses a sample to draw conclusions about the population (estimation and hypothesis testing), so it needs probability.

### Statistic vs parameter (2022-23 Q7a)

> [!important] Exam answer: Statistic and parameter
> A ==parameter== is a numerical characteristic of a **population**, such as the population mean $\mu$, variance $\sigma^2$ or proportion $P$. It is a fixed constant, but usually unknown.
>
> A ==statistic== is a numerical characteristic calculated from a **sample**, such as the sample mean $\bar x$, variance $s^2$ or proportion $\hat p$. It is known once the sample is drawn, but it changes from sample to sample, so it is a random variable. Statistics are used to estimate and test parameters.
>
> Example: the mean GPA of all students of a college ($\mu$) is a parameter; the mean GPA of 40 randomly chosen students ($\bar x=2.8$) is a statistic.

### Statistical data: meaning, production, need and sources in Bangladesh (2022-23 Q5a)

> [!important] Exam answer: What is statistical data?
> ==Statistical data are aggregates of facts, expressed numerically or classified into categories, collected systematically for a pre-determined purpose, and affected by many causes.== A single number such as "Rahim is 170 cm tall" is not statistical data, but the heights of 500 students collected to study average height are. Statistical data must be numerical, reasonably accurate, collected systematically and comparable with each other.

**How they are produced.** ==Primary data== are collected for the first time by the investigator for a specific purpose, by personal interview, questionnaires, enumerators filling schedules, direct observation and measurement, or designed experiments (for example testing bulb life in a laboratory). ==Secondary data== were already collected by someone else and are taken from published or unpublished sources such as government reports, yearbooks, journals and company records. Many data also come from **administrative records** such as birth and death registration, tax, hospital, school and banking records. Data are produced either by a **census** (all units) or a **sample survey** (selected units), and either by **observation** or by **experiment**.

**Why we need them.** Decisions need facts rather than guesses. The government needs population, income and price data to plan schools, hospitals and the budget and to measure poverty, inflation and unemployment. Businesses need sales and cost data to forecast demand and control quality. Engineers and scientists need data to compare designs, test claims and measure reliability, and in computer science data are needed to measure system performance and to train and evaluate machine-learning models.

> [!important] Exam answer: Sources of statistical data in Bangladesh
> The main source is the ==Bangladesh Bureau of Statistics (BBS)==, the national statistical office under the Ministry of Planning. It conducts the **Population and Housing Census** (every 10 years, latest 2022), the **Household Income and Expenditure Survey (HIES)** for poverty and income, the **Labour Force Survey** for employment, the **Agriculture and Economic Censuses**, and the **MICS** survey with UNICEF. It publishes the **Statistical Yearbook of Bangladesh**, the Monthly Statistical Bulletin, GDP estimates and the consumer price index.
>
> Other sources: **Bangladesh Bank** (money supply, interest and exchange rates, remittances, reserves); the **Ministry of Finance** (Bangladesh Economic Review); **DGHS** (health statistics) and **NIPORT** (Bangladesh Demographic and Health Survey); **BANBEIS** (education statistics); research institutes **icddr,b** and **BIDS**; the Export Promotion Bureau, National Board of Revenue and BTRC; and international bodies such as the World Bank, WHO and UNICEF.

In the exam, write the BBS part in detail and then name at least four other organizations with one line each.

### Stratified random sampling with an example (2023-24 Q6c)

> [!important] Exam answer: Stratified random sampling
> In ==stratified random sampling== the population is first divided into non-overlapping groups called **strata**, each as homogeneous as possible with respect to the characteristic being studied (for example level, gender or region). A simple random sample is then drawn **from every stratum separately**, usually in proportion to the stratum size ($n_h=nN_h/N$), and the samples are combined.
>
> **Example.** A CSE department has 600 students: 180 in Level 1, 160 in Level 2, 140 in Level 3 and 120 in Level 4. To estimate average daily screen time with a sample of 60, we take $60\times180/600=18$, $16$, $14$ and $12$ students from the four levels, each chosen at random within its level.
>
> **Advantages:** every stratum is represented in the right proportion, estimates are more precise than a simple random sample of the same size, and separate estimates are available for each stratum. **Disadvantage:** the stratum of every unit and the stratum sizes must be known in advance.

For contrast, in **simple random sampling** every unit has the same chance and we pick $n$ numbers at random from a numbered list. In **systematic sampling** we take every $k$-th unit after a random start. In **cluster sampling** we pick some whole groups (clusters, which are mixed inside) at random and study all units in them.

> [!warning] Strata vs clusters
> Strata are **homogeneous inside** and we sample **from every** stratum. Clusters are **heterogeneous inside** and we sample **only some** clusters.

---

## Problem types you will face

### Type 1 — Identify parameter, statistic and type of variable

**Recognise it:** a short story with a number, and you are asked which quantity is a parameter or statistic, or whether a variable is qualitative, discrete or continuous. **Recipe:** ask "is this number about everyone (parameter) or about the observed part (statistic)?", and "is the variable counted (discrete), measured (continuous) or a category (qualitative)?".

> [!example] Practice 1 (TF style)
> A mobile operator says its average download speed across Bangladesh is 25 Mbps. A researcher tests 120 random connections and finds an average of 21.4 Mbps, and 18% of them drop at least once. Identify the parameters and statistics.
>
> **Solution.** The operator's 25 Mbps refers to all connections, so it is a claimed value of the parameter $\mu$. The true proportion of all connections that drop is the parameter $P$. The 21.4 Mbps is the sample mean $\bar x$ and the 18% is the sample proportion $\hat p=0.18$; both are statistics because they come from the 120 tested connections.

> [!example] Practice 2 (TF style)
> Classify each variable: (a) number of students absent today, (b) time taken to compile a program, (c) operating system used, (d) a student's grade A/B/C, (e) monthly income in Tk.
>
> **Solution.** (a) quantitative discrete, because it is counted; (b) quantitative continuous, because it is measured; (c) qualitative (nominal), because it is a category with no order; (d) qualitative (ordinal), because the categories have an order; (e) quantitative continuous (money is often treated as continuous because it is measured on a fine scale).

### Type 2 — Allocate a stratified sample

**Recognise it:** stratum sizes and a total sample size are given. **Recipe:** $n_h=n\times N_h/N$ for each stratum, round to whole numbers so the total stays $n$, then say "select each by simple random sampling within the stratum".

> [!example] Practice 3 (TF style)
> An online shop has 2400 customers: 1200 in Dhaka, 720 in Chattogram and 480 in Sylhet. A sample of 150 customers is needed to estimate the mean delivery time. Allocate it proportionally and explain why stratifying by city is sensible.
>
> **Given.** $N=2400$ and $n=150$, so the sampling fraction is $150/2400=1/16$.
>
> **Step 1 — Dhaka:**
>
> $$n_{\text{Dhaka}}=150\times\frac{1200}{2400}=75$$
>
> **Step 2 — Chattogram:**
>
> $$n_{\text{Ctg}}=150\times\frac{720}{2400}=45$$
>
> **Step 3 — Sylhet:**
>
> $$n_{\text{Syl}}=150\times\frac{480}{2400}=30$$
>
> **Check.** $75+45+30=150$.
>
> **Answer.** **75 from Dhaka, 45 from Chattogram, 30 from Sylhet.**
>
> **Why stratify?** Delivery time depends strongly on the city, so customers within one city are similar to each other (homogeneous strata). Stratifying guarantees every city is represented in its true proportion and gives a more precise estimate than choosing 150 customers completely at random.

> [!example] Practice 4 (TF style, rounding needed)
> A factory has 350 day-shift, 250 evening-shift and 100 night-shift workers. Allocate a sample of 50 proportionally.
>
> **Given.** $N=700$, $n=50$.
>
> **Step 1 — exact shares:**
>
> $$\begin{aligned}
> n_{\text{day}} &= 50\times\tfrac{350}{700}=25\\
> n_{\text{evening}} &= 50\times\tfrac{250}{700}=17.86\\
> n_{\text{night}} &= 50\times\tfrac{100}{700}=7.14
> \end{aligned}$$
>
> **Step 2 — round so the total stays 50:** $25,\ 18,\ 7$.
>
> **Answer.** **25 day, 18 evening and 7 night-shift workers.**

### Type 3 — Systematic sample

**Recognise it:** "every k-th item", or a list of $N$ items and a sample of $n$. **Recipe:** $k=N/n$, pick a random start between 1 and $k$, then add $k$ repeatedly.

> [!example] Practice 5 (TF style)
> From a list of 1200 transactions a sample of 40 is needed. With random start 13, write the first five selected transactions and the last one.
>
> **Step 1 — interval:**
>
> $$k=\frac{1200}{40}=30$$
>
> **Step 2 — first five:** $13,\ 43,\ 73,\ 103,\ 133$.
>
> **Step 3 — last (the 40th):**
>
> $$13+39\times30=1183$$
>
> **Answer.** **13, 43, 73, 103, 133, …, 1183.**

---

## Extra practice

> [!question]- Answers
> **1.** A survey of 400 voters finds 52% support a candidate. Name the parameter and the statistic. — Parameter: the true proportion $P$ of all voters; statistic: $\hat p=0.52$.
>
> **2.** A university has 3000 science, 2000 engineering and 1000 arts students. Allocate a stratified sample of 120. — 60, 40 and 20.
>
> **3.** Why is a census not used to find the mean life of bulbs? — Testing life destroys the bulb, so a census would destroy the whole production; a sample is used.
>
> **4.** Name the BBS survey that measures poverty, and the one that measures unemployment. — HIES and the Labour Force Survey.
>
> **5.** A list has 500 names and a sample of 25 is needed; the random start is 9. Give the third and the last selected names. — $k=20$; third is 49, last is $9+24\times20=489$.
>
> **6.** In one sentence each, distinguish primary and secondary data. — Primary data are collected first-hand by the investigator for the current purpose; secondary data were collected earlier by someone else and are reused from published or recorded sources.

---

Previous: [[P9 Uniform Exponential and Other Continuous Distributions]] · Next: [[S2 Frequency Distributions and Graphs]] · Home: [[index]]
