---
title: "P8 · The Normal Distribution"
tags: [math243, probability, normal-distribution]
---

# P8 · Normal Distribution: Problems First

> [!abstract] Why this matters for the TF
> A normal-table calculation appears in every paper: mice lifetimes (2020-21 Q7(b)), ball bearings (2021-22 Q7(b)), the lawyer's trip times (2022-23 Q3(c)) and bulb lives (2023-24 Q4(a)).
>
> The newest papers also ask theory: ==properties of the normal curve and its mean, mode and SD== (2022-23 Q4(a)) and ==show that the mode is $\mu$== (2023-24 Q4(a)).
>
> Those two papers are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]].

## Core tools (memorize)

> [!important] Memorize: Normal
> **Normal density** ($-\infty<x<\infty$)
>
> $$
> f(x)=\frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac12\left(\frac{x-\mu}{\sigma}\right)^2}
> $$
>
> **Standardise**
>
> Use for every normal probability.
>
> $$
> Z=\frac{X-\mu}{\sigma}\sim N(0,1)
> $$
>
> **Less than** (the table gives the ==left area==)
>
> $$
> P(X<a)=\Phi(z)
> $$
>
> **More than**
>
> $$
> P(X>a)=1-\Phi(z)
> $$
>
> **Between**
>
> $$
> P(a<X<b)=\Phi(z_2)-\Phi(z_1)
> $$
>
> **Negative $z$**
>
> $$
> \Phi(-z)=1-\Phi(z)
> $$
>
> **Reverse lookup** (find a cut-off value)
>
> $$
> x=\mu+z\sigma
> $$
>
> **Empirical rule**
>
> Within $\mu\pm\sigma$, $\mu\pm2\sigma$, $\mu\pm3\sigma$: 68.27%, 95.45%, 99.73%.

![[m243-normal-empirical.png]]

![[m243-phi-area.png]]

> [!tip] Always draw the curve
> Sketch a bell curve, mark $\mu$ and your $x$ values, shade the wanted area and write the $z$ values under them.
>
> Ten seconds of drawing prevents the most common error: taking the wrong side.

---

## Theory the TF actually asks (learn word for word)

### Properties of the normal curve (2022-23 Q4(a))

> [!important] Memorize: Properties
> 1. The normal curve is ==bell-shaped and symmetric about $x=\mu$==, so ==mean = median = mode = $\mu$==.
> 2. Its highest point is at $x=\mu$, with height $\frac{1}{\sigma\sqrt{2\pi}}$.
> 3. It has points of inflection at $x=\mu\pm\sigma$.
> 4. It approaches the $x$-axis asymptotically on both sides but never touches it.
> 5. The total area under the curve is 1.
> 6. About 68.27%, 95.45% and 99.73% of the area lies within one, two and three standard deviations of the mean.
> 7. Its skewness is 0 and $\beta_2=3$ (mesokurtic).
> 8. The two parameters $\mu$ and $\sigma$ determine the curve completely: $\mu$ fixes the centre, and a larger $\sigma$ gives a lower, wider curve.

### The mode is $\mu$ (2023-24 Q4(a))

**Step 1 — Differentiate the density** with the chain rule.

$$
f'(x)=\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac12\left(\frac{x-\mu}{\sigma}\right)^2}\cdot\left(-\frac{x-\mu}{\sigma^2}\right)
$$

$$
f'(x)=-\frac{x-\mu}{\sigma^2}\,f(x)
$$

**Step 2 — Set $f'(x)=0$.** Since $f(x)>0$ always, $f'(x)=0$ gives

$$
x=\mu
$$

**Step 3 — Second derivative.**

$$
f''(x)=\frac{f(x)}{\sigma^2}\left[\frac{(x-\mu)^2}{\sigma^2}-1\right]
$$

$$
f''(\mu)=-\frac{f(\mu)}{\sigma^2}<0
$$

**Conclusion.** $f$ has its maximum at $x=\mu$: ==the mode of the normal distribution is $\mu$==.

(Also, $f''(x)=0$ at $x=\mu\pm\sigma$, which proves the points of inflection.)

### The mean is $\mu$ and the SD is $\sigma$ (2022-23 Q4(a))

**Substitution.** Put $z=\frac{x-\mu}{\sigma}$, so $x=\mu+\sigma z$ and $dx=\sigma\,dz$.

**Mean:**

$$
\begin{aligned}
E(X)&=\mu\int_{-\infty}^{\infty}\frac{1}{\sqrt{2\pi}}e^{-z^2/2}\,dz+\sigma\int_{-\infty}^{\infty}\frac{z}{\sqrt{2\pi}}e^{-z^2/2}\,dz\\
&=\mu(1)+\sigma(0)\\
&=\mu
\end{aligned}
$$

The first integral is the total area under the standard normal curve (1). The second is 0 because $z\,e^{-z^2/2}$ is an odd function.

**Variance:**

$$
\mathrm{Var}(X)=\sigma^2\int_{-\infty}^{\infty}\frac{z^2}{\sqrt{2\pi}}e^{-z^2/2}\,dz
$$

Integrate by parts with $u=z$, $dv=z\,e^{-z^2/2}dz$ (so $v=-e^{-z^2/2}$):

$$
\begin{aligned}
\int_{-\infty}^{\infty}z^2e^{-z^2/2}\,dz&=\Big[-z\,e^{-z^2/2}\Big]_{-\infty}^{\infty}+\int_{-\infty}^{\infty}e^{-z^2/2}\,dz\\
&=0+\sqrt{2\pi}
\end{aligned}
$$

So $\mathrm{Var}(X)=\sigma^2$ and the SD is $\sigma$.

> [!important] Memorize: Standard normal
> $Z=\frac{X-\mu}{\sigma}$ has ==mean 0 and variance 1==.
>
> $$
> E(Z)=\frac{E(X)-\mu}{\sigma}=0
> $$
>
> $$
> \mathrm{Var}(Z)=\frac{\mathrm{Var}(X)}{\sigma^2}=1
> $$
>
> Its density is
>
> $$
> \phi(z)=\frac{1}{\sqrt{2\pi}}e^{-z^2/2}
> $$
>
> Every normal probability can be read from this one table.

---

## Problem types you will face

### Type 1 — Forward probabilities: less than, more than, between

**Recipe:**

1. Compute $z=\frac{x-\mu}{\sigma}$ (2 decimals).
2. Read $\Phi$ from the table.
3. Use the left/right/between rule.

> [!example] Past TF 2020-21 Q7(b) (18 marks) — mice lifetimes
> **Given.** $X\sim N(40,\ 6.3^2)$ months.
>
> **Step 1 — (i) More than 32 months.**
>
> $$
> z=\frac{32-40}{6.3}=-1.27
> $$
>
> $$
> P(X>32)=1-\Phi(-1.27)=1-0.1020=0.8980
> $$
>
> **Step 2 — (ii) Between 37 and 49 months.**
>
> $$
> z_1=\frac{37-40}{6.3}=-0.48
> $$
>
> $$
> z_2=\frac{49-40}{6.3}=1.43
> $$
>
> $$
> P(37<X<49)=\Phi(1.43)-\Phi(-0.48)=0.9236-0.3156=0.6080
> $$
>
> **Answer.** (i) **0.8980**, (ii) **0.6080**.
>
> (Without rounding $z$ the answer is 0.6065; both are accepted when the table values are shown.)

> [!example] Practice 1 (TF style, like 2023-24 Q4(a)) — three questions at once
> **Given.** $X\sim N(50,\ 10^2)$. Find $P(X<45)$, $P(X>62)$ and $P(42<X<64)$.
>
> **Step 1 — Less than 45.** $z=-0.50$.
>
> $$
> P(X<45)=\Phi(-0.50)=0.3085
> $$
>
> **Step 2 — More than 62.** $z=1.20$.
>
> $$
> P(X>62)=1-\Phi(1.20)=1-0.8849=0.1151
> $$
>
> **Step 3 — Between 42 and 64.** $z_1=-0.80$, $z_2=1.40$.
>
> $$
> P(42<X<64)=\Phi(1.40)-\Phi(-0.80)=0.9192-0.2119=0.7073
> $$
>
> **Answer.** **0.3085**, **0.1151**, **0.7073**.

> [!example] Practice 2 (TF style) — exam scores
> **Given.** Scores are $N(500,\ 50^2)$. Find $P(450<X<620)$.
>
> **Step 1 — $z$ values.**
>
> $$
> z_1=\frac{450-500}{50}=-1.00
> $$
>
> $$
> z_2=\frac{620-500}{50}=2.40
> $$
>
> **Step 2 — Between.**
>
> $$
> P=\Phi(2.40)-\Phi(-1.00)=0.9918-0.1587=0.8331
> $$
>
> **Answer.** $\mathbf{0.8331}$.

> [!warning] Common mistake
> In "between" questions subtract the **areas** $\Phi(z_2)-\Phi(z_1)$, never the $z$ values.
>
> In "more than" questions remember $1-\Phi(z)$.

---

### Type 2 — "What percentage of the time" / "how many out of N"

**Recipe:** find the probability as in Type 1, then multiply by 100 (percentage) or by $N$ (count).

> [!example] Practice 3 (TF style) — 1000 students
> **Given.** Marks of 1000 students are $N(60,\ 8^2)$. How many students score (i) above 72, (ii) between 50 and 70?
>
> **Step 1 — (i) Above 72.**
>
> $$
> z=\frac{72-60}{8}=1.50
> $$
>
> $$
> P=1-0.9332=0.0668
> $$
>
> $$
> 1000\times0.0668\approx67
> $$
>
> **Step 2 — (ii) Between 50 and 70.** $z=\pm1.25$.
>
> $$
> P=\Phi(1.25)-\Phi(-1.25)=0.8944-0.1056=0.7888
> $$
>
> $$
> 1000\times0.7888\approx789
> $$
>
> **Answer.** (i) about **67** students, (ii) about **789** students.

> [!example] Practice 4 (TF style, like 2022-23 Q3(c)(i)) — late for class
> **Given.** A student's travel time is $N(25,\ 4^2)$ minutes. Class starts at 10:00 and the student leaves at 9:30. What percentage of days is the student late?
>
> **Step 1 — Translate.** Late means the trip takes more than 30 minutes.
>
> **Step 2 — Probability.**
>
> $$
> z=\frac{30-25}{4}=1.25
> $$
>
> $$
> P(X>30)=1-\Phi(1.25)=1-0.8944=0.1056
> $$
>
> **Answer.** The student is late on about ==10.6%== of days.

---

### Type 3 — Reverse lookup: find the cut-off value

**Recognise it:** "find the score above which the top 10% lie", "the time above which the slowest 15% of trips lie", "minimum mark for an A".

**Recipe:**

1. Convert to a **left** area.
2. Find $z$ inside the table.
3. Then $x=\mu+z\sigma$.

> [!example] Practice 5 (TF style) — top 12% get an A
> **Given.** Grades are $N(74,\ 7^2)$. If the top 12% get an A, find the lowest A mark.
>
> **Step 1 — Left area.** $1-0.12=0.88$.
>
> **Step 2 — Find $z$.** The table gives $\Phi(1.17)=0.8790$ and $\Phi(1.18)=0.8810$, so $z\approx1.175$.
>
> **Step 3 — Convert back.**
>
> $$
> x=74+1.175(7)=82.2
> $$
>
> **Answer.** ==The lowest A is about 82==.

> [!example] Practice 6 (TF style, like 2022-23 Q3(c)(ii)) — slowest 10% of trips
> **Given.** Trip times are $N(30,\ 4^2)$. Find the time above which the slowest 10% of trips lie.
>
> **Step 1 — Left area.** $0.90$, so $z=1.28$.
>
> **Step 2 — Convert back.**
>
> $$
> x=30+1.28(4)=35.12
> $$
>
> **Answer.** **35.12 minutes**.

> [!example] Practice 7 (TF style) — top 10% of scores
> **Given.** Scores are $N(500,\ 50^2)$. Find the score that cuts off the top 10%.
>
> **Step 1 — Left area.** $\Phi(1.28)\approx0.90$, so $z=1.28$.
>
> **Step 2 — Convert back.**
>
> $$
> x=500+1.28(50)=564
> $$
>
> **Answer.** **564**.

---

### Type 4 — Find $\mu$ or $\sigma$ from given percentages

**Recipe:** each given percentage gives one equation $x=\mu+z\sigma$; solve the pair.

> [!example] Practice 8 (TF style)
> **Given.** In a normal distribution, 10% of values are below 35 and 5% are above 85. Find $\mu$ and $\sigma$.
>
> **Step 1 — $z$ values.** Below 35 with left area 0.10 gives $z=-1.28$. Above 85 with left area 0.95 gives $z=1.645$.
>
> **Step 2 — Two equations.**
>
> $$
> 35=\mu-1.28\sigma
> $$
>
> $$
> 85=\mu+1.645\sigma
> $$
>
> **Step 3 — Subtract and solve.**
>
> $$
> 50=2.925\sigma\ \Rightarrow\ \sigma=17.09
> $$
>
> $$
> \mu=35+1.28(17.09)=56.88
> $$
>
> **Answer.** $\mu=\mathbf{56.88}$, $\sigma=\mathbf{17.09}$.

---

### Type 5 — Normal combined with binomial

**Recognise it:** "find the probability that 2 of the next 3 trips take at least half an hour".

**Recipe:**

1. Find $p$ for one item from the normal table.
2. Use the binomial with that $p$.

> [!example] Practice 9 (TF style, like 2022-23 Q3(c)(iii)) — underweight packets
> **Given.** Packet weights are $N(500,\ 10^2)$ grams. A packet is underweight if it weighs less than 485 g. Among 4 packets, find the probability that exactly one is underweight.
>
> **Step 1 — Probability for one packet.**
>
> $$
> p=P(X<485)=\Phi(-1.50)=0.0668
> $$
>
> **Step 2 — Binomial.**
>
> $$
> P(\text{exactly 1 of 4})=\binom41(0.0668)(0.9332)^3=0.2172
> $$
>
> **Answer.** $\mathbf{0.2172}$.

---

### Type 6 — Specification limits and scrap rate

**Recipe:** "accepted" means inside the limits, so

$$
P(\text{scrapped})=1-P(\text{inside})
$$

> [!example] Past TF 2021-22 Q7(b) (15 marks) — ball bearings scrapped
> **Given.** $X\sim N(3.0,\ 0.005^2)$; accepted if $2.99\le X\le3.01$.
>
> **Step 1 — $z$ values.**
>
> $$
> z_1=\frac{2.99-3.0}{0.005}=-2.0
> $$
>
> $$
> z_2=\frac{3.01-3.0}{0.005}=2.0
> $$
>
> **Step 2 — Both tails** (symmetric).
>
> $$
> P(\text{scrapped})=2\,\Phi(-2.0)=2(0.0228)=0.0456
> $$
>
> **Answer.** On average **4.56%** of the bearings will be scrapped.

> [!example] Practice 10 (TF style) — off-centre process
> **Given.** Resistors must be $100\pm2$ ohms. The process gives $N(100.5,\ 1^2)$. What fraction is rejected?
>
> **Step 1 — $z$ values.**
>
> $$
> z_1=\frac{98-100.5}{1}=-2.50
> $$
>
> $$
> z_2=\frac{102-100.5}{1}=1.50
> $$
>
> **Step 2 — Accepted fraction.**
>
> $$
> P(\text{accepted})=\Phi(1.50)-\Phi(-2.50)=0.9332-0.0062=0.9270
> $$
>
> **Answer.** ==7.3% are rejected==. (Because the process is not centred, the two tails are unequal; do not just double one tail.)

---

### Type 7 — Normal approximation to the binomial

**Recipe:**

1. Use $\mu=np$ and $\sigma=\sqrt{npq}$.
2. Apply the ==continuity correction== ($\pm0.5$).
3. Read the table.

Use it when $np\ge5$ and $nq\ge5$.

> [!important] Memorize: Continuity correction
> **At most $a$**
>
> $$
> P(X\le a)\approx\Phi\!\left(\frac{a+0.5-np}{\sqrt{npq}}\right)
> $$
>
> **At least $a$**
>
> $$
> P(X\ge a)\approx1-\Phi\!\left(\frac{a-0.5-np}{\sqrt{npq}}\right)
> $$

> [!example] Practice 11 (TF style)
> **Given.** 30% of a population has a certain trait. In a sample of 100, find $P(X\le25)$.
>
> **Step 1 — Mean and SD.**
>
> $$
> \mu=30
> $$
>
> $$
> \sigma=\sqrt{21}=4.583
> $$
>
> **Step 2 — Continuity correction.**
>
> $$
> P(X\le25)\approx\Phi\!\left(\frac{25.5-30}{4.583}\right)=\Phi(-0.98)=0.1635
> $$
>
> **Answer.** $\mathbf{0.1635}$ (exact binomial: 0.1631).

> [!example] Practice 12 (TF style)
> **Given.** A process gives 40% success; $n=60$. Find $P(20\le X\le30)$.
>
> **Step 1 — Mean and SD.**
>
> $$
> \mu=24
> $$
>
> $$
> \sigma=\sqrt{14.4}=3.795
> $$
>
> **Step 2 — Continuity correction.** The interval becomes 19.5 to 30.5.
>
> $$
> z_1=-1.19
> $$
>
> $$
> z_2=1.71
> $$
>
> **Step 3 — Between.**
>
> $$
> P=0.9564-0.1170=0.8394
> $$
>
> **Answer.** $\mathbf{0.8394}$ (exact: 0.8386).

---

## Extra practice

> [!question]- Answers (try first)
> **1.** $X\sim N(25,9)$; find $k$ with $P(X<k)=0.95$.
>
> *Answer:* $\sigma=3$, $k=25+1.645(3)=29.9$.
>
> **2.** $X\sim N(800,40^2)$; $P(X>860)$?
>
> *Answer:* $z=1.5$, so $0.0668$.
>
> **3.** Weights $N(70,5^2)$; what percentage lie between 65 and 75?
>
> *Answer:* 68.26%.
>
> **4.** $\Phi(-1.5)$ in terms of $\Phi(1.5)$?
>
> *Answer:* $1-\Phi(1.5)$.
>
> **5.** Continuity-corrected form of $P(X\ge40)$?
>
> *Answer:* $1-\Phi\big((39.5-np)/\sqrt{npq}\big)$.

Previous: [[P7 Poisson Distribution and Poisson Process]] · Next: [[P9 Uniform Exponential and Other Continuous Distributions]] · Home: [[index]]
