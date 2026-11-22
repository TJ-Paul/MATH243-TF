---
title: "P3 · Random Variables, PMF, PDF and CDF"
tags: [math243, probability, random-variable, pdf, cdf]
---

# P3 · Random Variables, PMF, PDF and CDF

> [!abstract] Why this matters for the TF
> A "density function" question appears almost every year: 2020-21 Q6(b) (find $k$ for $k(3-x)^2$), 2021-22 Q6(c) (build a distribution and $F(x)$), 2022-23 Q1(c) (CDF of an exponential density) and 2023-24 Q2(a) (probability using both the CDF and the pdf).
>
> The last two are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]].
>
> You need three skills: ==find $k$==, ==compute a probability as a sum or an area==, and ==move between $f(x)$ and $F(x)$==.

## Core tools (memorize)

> [!important] Memorize
> **Discrete $X$ (counts)**
>
> Use $\sum=1$ to find $k$.
>
> $$
> f(x)=P(X=x)\ge0
> $$
>
> $$
> \sum_x f(x)=1
> $$
>
> **Continuous $X$ (measurements)**
>
> Use the total area $=1$ to find $k$.
>
> $$
> \int_{-\infty}^{\infty}f(x)\,dx=1
> $$
>
> **Probability is area**
>
> $$
> P(a<X<b)=\int_a^b f(x)\,dx
> $$
>
> For continuous $X$, $P(X=a)=0$, so $<$ and $\le$ give the same answer.
>
> **CDF (definition)**
>
> Discrete: add $f(t)$ for $t\le x$ (a step function).
>
> $$
> F(x)=P(X\le x)
> $$
>
> **CDF from a pdf**
>
> $$
> F(x)=\int_{-\infty}^{x} f(t)\,dt
> $$
>
> **pdf from a CDF**
>
> $$
> f(x)=F'(x)
> $$
>
> **Probability from a CDF**
>
> $$
> P(a<X\le b)=F(b)-F(a)
> $$

![[m243-pdf-area.png]]

---

## Problem types you will face

### Type 1 — Find $k$ in a pmf

**How to recognise it:** a table or formula with an unknown constant, for discrete values.

**Recipe:**

1. Add all probabilities.
2. Set the sum to 1 and solve for $k$.
3. Add the required values.

> [!example] Practice 1.1
> **Given.** $f(x)=k(x^2+1)$ for $x=0,1,2,3$. Find $k$ and $P(X\ge2)$.
>
> **Step 1 — Sum to 1.**
>
> $$
> k(1+2+5+10)=18k=1
> $$
>
> $$
> k=\frac1{18}
> $$
>
> **Step 2 — Add the required values.**
>
> $$
> P(X\ge2)=f(2)+f(3)=\frac{5+10}{18}=\frac56
> $$
>
> **Answer.** $k=\mathbf{1/18}$, $P(X\ge2)=\mathbf{5/6}$.

> [!example] Practice 1.2
> **Given.** $f(x)=kx$ for $x=1,2,3,4$. Find $k$ and $P(1<X\le3)$.
>
> **Step 1 — Sum to 1.**
>
> $$
> k(1+2+3+4)=10k=1
> $$
>
> $$
> k=\frac1{10}
> $$
>
> **Step 2 — Add the required values.**
>
> $$
> P(1<X\le3)=f(2)+f(3)=\frac{2+3}{10}=0.5
> $$
>
> **Answer.** $k=\mathbf{1/10}$, $P=\mathbf{0.5}$.

---

### Type 2 — Find $k$ in a pdf, then probabilities

**How to recognise it:** "$f(x)=k\cdot(\text{something})$ on an interval, determine $k$ ... find the probability that ...".

**Recipe:**

1. Integrate over the whole range and set equal to 1.
2. For each probability, integrate over the required interval.
3. For "magnitude exceeds $c$", use the complement:

$$
P(|X|>c)=1-P(-c\le X\le c)
$$

> [!example] Past TF 2020-21 Q6(b) (10 marks) — measurement error
> **Given.** $f(x)=k(3-x)^2$ for $-1\le x\le1$, and 0 elsewhere.
>
> **Step 1 — (i) Find $k$.**
>
> $$
> \begin{aligned}
> \int_{-1}^{1}k(3-x)^2\,dx&=k\left[-\frac{(3-x)^3}{3}\right]_{-1}^{1}\\
> &=k\cdot\frac{4^3-2^3}{3}\\
> &=\frac{56k}{3}=1
> \end{aligned}
> $$
>
> $$
> k=\frac{3}{56}
> $$
>
> **Step 2 — (ii) Error less than $\frac12$**, i.e. between $-1$ and $\frac12$.
>
> $$
> \begin{aligned}
> P\left(X<\tfrac12\right)&=\frac{3}{56}\cdot\frac{4^3-2.5^3}{3}\\
> &=\frac{64-15.625}{56}\\
> &=\frac{48.375}{56}=0.8638
> \end{aligned}
> $$
>
> **Step 3 — (iii) Magnitude exceeds 0.8**, i.e. $|X|>0.8$. First find the middle part.
>
> $$
> \begin{aligned}
> P(|X|\le0.8)&=\frac{3}{56}\cdot\frac{3.8^3-2.2^3}{3}\\
> &=\frac{54.872-10.648}{56}\\
> &=\frac{44.224}{56}=0.7897
> \end{aligned}
> $$
>
> $$
> P(|X|>0.8)=1-0.7897=0.2103
> $$
>
> **Answer.** (i) $k=\mathbf{3/56}$, (ii) **0.8638**, (iii) **0.2103**.

> [!example] Practice 2.1
> **Given.** $f(x)=kx(2-x)$ for $0<x<2$. Find $k$, $P(X>1.5)$ and $P(0.5<X<1)$.
>
> **Step 1 — Find $k$.**
>
> $$
> \int_0^2(2x-x^2)\,dx=\left[x^2-\frac{x^3}3\right]_0^2=4-\frac83=\frac43
> $$
>
> $$
> k=\frac34
> $$
>
> **Step 2 — $P(X>1.5)$.**
>
> $$
> P(X>1.5)=\frac34\left[x^2-\frac{x^3}{3}\right]_{1.5}^{2}=\frac34\left(\frac43-1.125\right)=0.15625
> $$
>
> **Step 3 — $P(0.5<X<1)$.**
>
> $$
> P(0.5<X<1)=\frac34\left[x^2-\frac{x^3}{3}\right]_{0.5}^{1}=\frac34\left(\frac23-\frac{5}{24}\right)=0.34375
> $$
>
> **Answer.** $k=\mathbf{3/4}$, **0.15625**, **0.34375**.

> [!example] Practice 2.2
> **Given.** $f(x)=ke^{-2x}$ for $x>0$. Find $k$ and $P(X>1)$.
>
> **Step 1 — Find $k$.**
>
> $$
> \int_0^\infty ke^{-2x}\,dx=\frac k2=1
> $$
>
> $$
> k=2
> $$
>
> **Step 2 — $P(X>1)$.**
>
> $$
> P(X>1)=\int_1^\infty 2e^{-2x}\,dx=e^{-2}=0.1353
> $$
>
> **Answer.** $k=\mathbf{2}$, $P(X>1)=\mathbf{0.1353}$.

---

### Type 3 — CDF from a pdf (and checking with both)

**How to recognise it:** "find the cumulative distribution function", "use $F(x)$ to find ...".

**Recipe:**

1. Integrate $f$ from the left end of the support up to $x$.
2. Write $F$ piecewise, with a 0 line and a 1 line.
3. Then $P(a<X<b)=F(b)-F(a)$.

> [!example] Practice 3.1
> **Given.** $f(x)=\frac x2$ for $0<x<2$. Find $F(x)$ and $P(0.5<X<1.5)$.
>
> **Step 1 — Integrate up to $x$.** For $0<x<2$,
>
> $$
> F(x)=\int_0^x\frac t2\,dt=\frac{x^2}{4}
> $$
>
> **Step 2 — Write $F$ piecewise.**
>
> $$
> F(x)=\begin{cases}0,&x\le0\\ x^2/4,&0<x<2\\ 1,&x\ge2\end{cases}
> $$
>
> **Step 3 — Probability from the CDF.**
>
> $$
> P(0.5<X<1.5)=F(1.5)-F(0.5)=\frac{2.25-0.25}{4}=0.5
> $$
>
> **Step 4 — Check with the pdf.**
>
> $$
> \int_{0.5}^{1.5}\frac x2\,dx=0.5\ \checkmark
> $$
>
> **Answer.** $F(x)=x^2/4$ on $(0,2)$; $P=\mathbf{0.5}$.

> [!example] Practice 3.2 — piecewise (triangular) density
> **Given.** $f(x)=x$ for $0<x<1$, $f(x)=2-x$ for $1\le x<2$, 0 elsewhere. Find $F(x)$ and $P(0.5<X<1.5)$.
>
> **Step 1 — First piece, $0<x<1$.**
>
> $$
> F(x)=\int_0^x t\,dt=\frac{x^2}2
> $$
>
> So $F(1)=\frac12$.
>
> **Step 2 — Second piece, $1\le x<2$.** Start from $F(1)$.
>
> $$
> F(x)=\frac12+\int_1^x(2-t)\,dt=1-\frac{(2-x)^2}{2}
> $$
>
> **Step 3 — Write $F$ piecewise.**
>
> $$
> F(x)=\begin{cases}0,&x\le0\\ x^2/2,&0<x<1\\ 1-(2-x)^2/2,&1\le x<2\\ 1,&x\ge2\end{cases}
> $$
>
> **Step 4 — Probability.**
>
> $$
> P(0.5<X<1.5)=F(1.5)-F(0.5)=0.875-0.125=0.75
> $$
>
> **Answer.** $P=\mathbf{0.75}$.

> [!warning] Piecewise densities
> When $f$ changes formula at $x=1$, the CDF in the second piece must start from $F(1)$, not from 0.

---

### Type 4 — Given the CDF: probabilities and the pdf

**How to recognise it:** a CDF like $F(x)=1-e^{-\lambda x}$ is given (2023-24 Q2(a)), or a pdf like $\frac{1}{\beta}e^{-x/\beta}$ is given and you must find $F$ (2022-23 Q1(c)).

**Recipe:**

1. Convert units first.
2. Use $P(X\le a)=F(a)$ and $P(X>a)=1-F(a)$.
3. Differentiate $F$ to get $f$, and confirm the same probability by integrating $f$.

> [!example] Practice 4.1 (same shape as 2023-24 Q2(a))
> **Given.** The waiting time in hours until a server receives a request has CDF $F(x)=1-e^{-3x}$ for $x\ge0$. Find the probability of waiting less than 20 minutes, using both the CDF and the pdf.
>
> **Step 1 — Convert units.** 20 minutes $=\frac13$ hour.
>
> **Step 2 — Using the CDF.**
>
> $$
> P\left(X<\tfrac13\right)=F\left(\tfrac13\right)=1-e^{-1}=0.6321
> $$
>
> **Step 3 — Using the pdf.** Differentiate:
>
> $$
> f(x)=F'(x)=3e^{-3x}
> $$
>
> $$
> \int_0^{1/3}3e^{-3x}\,dx=\left[-e^{-3x}\right]_0^{1/3}=1-e^{-1}=0.6321
> $$
>
> **Answer.** $P=\mathbf{0.6321}$ by both methods.

> [!example] Practice 4.2 (same shape as 2022-23 Q1(c))
> **Given.** The lifetime (hours) of a component has $f(x)=\frac1{50}e^{-x/50}$ for $x\ge0$. Find (i) the CDF, (ii) P(lasts more than 100 hours), (iii) P(fails between 20 and 60 hours), (iv) the median lifetime.
>
> **Step 1 — (i) CDF.** For $x\ge0$ (and $F=0$ for $x<0$):
>
> $$
> F(x)=\int_0^x\frac1{50}e^{-t/50}\,dt=1-e^{-x/50}
> $$
>
> **Step 2 — (ii) More than 100 hours.**
>
> $$
> P(X>100)=1-F(100)=e^{-2}=0.1353
> $$
>
> **Step 3 — (iii) Between 20 and 60 hours.**
>
> $$
> \begin{aligned}
> P(20<X<60)&=F(60)-F(20)\\
> &=e^{-0.4}-e^{-1.2}\\
> &=0.6703-0.3012=0.3691
> \end{aligned}
> $$
>
> **Step 4 — (iv) Median.** Solve $F(m)=0.5$.
>
> $$
> e^{-m/50}=0.5
> $$
>
> $$
> m=50\ln2=34.66 \text{ hours}
> $$
>
> **Answer.** (i) $1-e^{-x/50}$, (ii) **0.1353**, (iii) **0.3691**, (iv) **34.66 hours**.

> [!warning] Units
> If $X$ is in hours and the question says minutes, convert first (12 minutes = 0.2 hour).

---

### Type 5 — Distribution of a count from sampling without replacement, and its $F(x)$

**How to recognise it:** "a lot of $N$ items contains $k$ defective; $n$ are taken; find the probability distribution of $X$ = number defective, and $F(x)$".

**Recipe:**

1. For each possible $x$, use

$$
f(x)=\frac{\binom kx\binom{N-k}{n-x}}{\binom Nn}
$$

2. Make a table.
3. Build the step CDF by running totals.

> [!example] Past TF 2021-22 Q6(c) (15 marks) — cars with paint blemishes
> **Given.** 5 cars, 2 blemished; the agency receives 3. $X$ = number of blemished cars received, $X=0,1,2$.
>
> **Step 1 — Total samples.**
>
> $$
> \binom53=10
> $$
>
> **Step 2 — The pmf.**
>
> $$
> f(x)=\frac{\binom2x\binom3{3-x}}{10}
> $$
>
> $$
> f(0)=\frac1{10}
> $$
>
> $$
> f(1)=\frac{6}{10}
> $$
>
> $$
> f(2)=\frac{3}{10}
> $$
>
> | $x$ | 0 | 1 | 2 |
> |---|---|---|---|
> | $f(x)$ | 1/10 | 6/10 | 3/10 |
>
> **Step 3 — The CDF (running totals).**
>
> $$
> F(x)=\begin{cases}0,&x<0\\ 1/10,&0\le x<1\\ 7/10,&1\le x<2\\ 1,&x\ge2\end{cases}
> $$
>
> **Answer.** The table and $F(x)$ above.

> [!example] Practice 5.1 — markers
> **Given.** A lot of 7 markers has 3 defective. A buyer takes 3 at random. Find the distribution of $X$ = number of defective markers and $F(x)$.
>
> **Step 1 — Total samples.**
>
> $$
> \binom73=35
> $$
>
> **Step 2 — The pmf.** For $x=0,1,2,3$:
>
> $$
> f(x)=\frac{\binom3x\binom4{3-x}}{35}
> $$
>
> | $x$ | 0 | 1 | 2 | 3 |
> |---|---|---|---|---|
> | $f(x)$ | 4/35 | 18/35 | 12/35 | 1/35 |
>
> **Step 3 — The CDF.**
>
> $$
> F(x)=\begin{cases}0,&x<0\\ 4/35,&0\le x<1\\ 22/35,&1\le x<2\\ 34/35,&2\le x<3\\ 1,&x\ge3\end{cases}
> $$
>
> **Answer.** The table and $F(x)$ above.

> [!example] Practice 5.2 — coin tosses
> **Given.** A coin is tossed 3 times; $X$ = number of heads.
>
> **Step 1 — The pmf.**
>
> $$
> f(0)=\frac18
> $$
>
> $$
> f(1)=\frac38
> $$
>
> $$
> f(2)=\frac38
> $$
>
> $$
> f(3)=\frac18
> $$
>
> **Answer.** $F$ jumps to $\frac18,\frac48,\frac78,1$ at $x=0,1,2,3$.

> [!tip] Writing a discrete CDF
> Use "$\le$" on the left and "$<$" on the right of each interval.
>
> Always include the first line ($F=0$) and the last line ($F=1$).

---

## Extra practice

> [!question]- Answers (try first)
> **1.** $f(x)=cx^2$ on $0<x<3$. Find $c$ and $P(X>2)$.
>
> *Answer:* $c=\frac19$; $P=\frac{27-8}{27}=\frac{19}{27}\approx0.704$.
>
> **2.** $F(x)=1-e^{-x/4}$ ($x\ge0$). Find $f(x)$ and $P(2<X<6)$.
>
> *Answer:* $f=\frac14e^{-x/4}$; $e^{-0.5}-e^{-1.5}=0.3834$.
>
> **3.** $f(x)=\frac{x+1}{8}$ on $2<x<4$. Show it is valid and find $P(X<3.5)$.
>
> *Answer:* $\int_2^4\frac{x+1}8dx=1$; $P=\left[\frac{(x+1)^2}{16}\right]_2^{3.5}=\frac{4.5^2-3^2}{16}=0.7031$.
>
> **4.** A box has 6 good and 4 bad bulbs; 2 are taken. Distribution of the number of bad bulbs?
>
> *Answer:* $f(0)=\frac{15}{45}$, $f(1)=\frac{24}{45}$, $f(2)=\frac6{45}$.
>
> **5.** For a discrete CDF, what is the jump at $x$?
>
> *Answer:* $P(X=x)$.

Previous: [[P2 Conditional Probability Independence and Bayes]] · Next: [[P4 Joint Marginal and Conditional Distributions]] · Home: [[index]]
