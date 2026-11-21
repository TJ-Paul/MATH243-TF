---
title: "P3 · Random Variables, PMF, PDF and CDF"
tags: [math243, probability, random-variable, pdf, cdf]
---

# P3 · Random Variables, PMF, PDF and CDF

> [!abstract] Why this matters for the term final
> Almost every year has a "density function" question. In 2020-21 Q6(b) you had to find $k$ for $f(x)=k(3-x)^2$ and compute probabilities; in 2021-22 Q6(c) you had to build a probability distribution and $F(x)$ for a hypergeometric variable; in 2022-23 Q1(c) you had to find the CDF of an exponential density and use it; and in 2023-24 Q2(a) you were given a CDF and asked for a probability using both the CDF and the pdf. The 2022-23 and 2023-24 ones are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]]. Master the three skills in this note: ==find the constant $k$==, ==compute a probability as a sum or an area==, and ==move between $f(x)$ and $F(x)$==.

---

## 1. Random variables

A **random variable** is a rule (a function) that assigns a number to every outcome of a random experiment. We write random variables with capital letters such as $X$ and their particular values with small letters such as $x$. For example, if a committee of 2 teachers is chosen from 4 men and 3 women, and $Y$ is the number of men chosen, then $Y$ can take the values 0, 1 or 2 depending on the outcome.

> [!important] Memorize: Discrete vs continuous random variables
> A **discrete random variable** can take only a finite or countable list of separate values, such as $0,1,2,\dots$ (number of calls, number of defective items, number of heads). A **continuous random variable** can take any value in an interval (weight, waiting time, lifetime of a bulb, temperature).

---

## 2. Discrete distributions: the probability mass function

For a discrete random variable, the **probability mass function (pmf)** gives the probability of each value: $f(x)=P(X=x)$.

> [!important] Memorize: Conditions for a valid pmf
> $$
> f(x)\ge 0 \text{ for every } x, \qquad \sum_x f(x)=1, \qquad P(X=x)=f(x).
> $$

**Worked example (lecture).** A fair coin is tossed three times and $X$ is the number of heads. The eight equally likely outcomes give $P(X=0)=\frac18$, $P(X=1)=\frac38$, $P(X=2)=\frac38$, $P(X=3)=\frac18$. These are all non-negative and add to 1, so this is a valid pmf.

**Finding $k$ in a pmf.** If $f(x)=kx$ for $x=1,2,3,4$, then $k(1+2+3+4)=1$, so $10k=1$ and $k=\frac1{10}$. The method is always the same: add up all the probabilities, set the total equal to 1 and solve.

---

## 3. Continuous distributions: the probability density function

For a continuous random variable, the probability of any single exact value is zero, so we cannot list probabilities value by value. Instead we use a **probability density function (pdf)** $f(x)$, and probabilities are ==areas under the curve==.

![[m243-pdf-area.png]]

> [!important] Memorize: Conditions for a valid pdf and how to use it
> $$
> f(x)\ge 0, \qquad \int_{-\infty}^{\infty} f(x)\,dx=1, \qquad P(a<X<b)=\int_a^b f(x)\,dx .
> $$
> For a continuous variable, $P(X=a)=0$, so $P(a<X<b)=P(a\le X\le b)=P(a\le X<b)$. The "$<$" or "$\le$" does not matter.

To find an unknown constant $k$ in a pdf, integrate $f(x)$ over the whole range where it is non-zero, set the answer equal to 1, and solve for $k$.

---

## 4. The cumulative distribution function (CDF)

The **cumulative distribution function** gives the probability that $X$ is at most $x$:

$$
F(x)=P(X\le x).
$$

> [!important] Memorize: CDF formulas and properties
> For a discrete variable, $F(x)=\sum_{t\le x}f(t)$, which is a step function.
> For a continuous variable,
> $$
> F(x)=\int_{-\infty}^{x}f(t)\,dt, \qquad f(x)=\frac{dF(x)}{dx}, \qquad P(a<X\le b)=F(b)-F(a).
> $$
> Every CDF starts at 0 (as $x\to-\infty$), ends at 1 (as $x\to\infty$), and never decreases.

These two relations are the key to questions like 2023-24 Q2(a). If you are given $f$, integrate to get $F$. If you are given $F$, differentiate to get $f$. Then you can compute the same probability in two ways, once as $F(b)-F(a)$ and once as $\int_a^b f(x)dx$, and both must agree.

> [!warning] Common mistake: units
> In the 2023-24 radar question the variable is measured in **hours** but the question asks about **12 minutes**. You must convert first: 12 minutes $=12/60=0.2$ hours. Always check the units of $x$ before substituting.

**Fresh practice: CDF from a pdf.** Let $f(x)=\frac{x}{2}$ for $0<x<2$ and $0$ elsewhere. Find $F(x)$ and $P(0.5<X<1.5)$.

First check validity: $\int_0^2 \frac{x}{2}dx=\left[\frac{x^2}{4}\right]_0^2=1$. For $0<x<2$, $F(x)=\int_0^x\frac t2dt=\frac{x^2}{4}$. So

$$
F(x)=\begin{cases}0, & x\le 0\\[2pt] \dfrac{x^2}{4}, & 0<x<2\\[4pt] 1, & x\ge 2\end{cases}
$$

Using the CDF, $P(0.5<X<1.5)=F(1.5)-F(0.5)=\frac{2.25}{4}-\frac{0.25}{4}=0.5$. Using the pdf, $\int_{0.5}^{1.5}\frac x2dx=\left[\frac{x^2}{4}\right]_{0.5}^{1.5}=0.5$. The two methods agree.

**Fresh practice: pdf from a CDF.** The time (in hours) until a server receives a request has CDF $F(x)=1-e^{-3x}$ for $x\ge0$ and $0$ otherwise. Find the probability of waiting less than 20 minutes, using both the CDF and the pdf.

Twenty minutes is $\frac{20}{60}=\frac13$ hour. With the CDF, $P(X<\frac13)=F(\frac13)=1-e^{-1}=0.6321$. Differentiating, the pdf is $f(x)=F'(x)=3e^{-3x}$ for $x\ge 0$. With the pdf,

$$
P\left(X<\tfrac13\right)=\int_0^{1/3}3e^{-3x}\,dx=\left[-e^{-3x}\right]_0^{1/3}=1-e^{-1}=0.6321 .
$$

---

## 5. Past TF questions solved

> [!example] Past TF 2020-21 Q6(b) (10 marks) — measurement error density
> The density is $f(x)=k(3-x)^2$ for $-1\le x\le 1$ and $0$ elsewhere.
>
> **(i) Finding $k$.** The total area must be 1:
> $$
> \int_{-1}^{1}k(3-x)^2\,dx=k\left[-\frac{(3-x)^3}{3}\right]_{-1}^{1}=k\left(\frac{4^3-2^3}{3}\right)=k\cdot\frac{64-8}{3}=\frac{56k}{3}=1 .
> $$
> Hence $k=\dfrac{3}{56}$.
>
> **(ii) Error less than $\frac12$.** The error must be between $-1$ and $\frac12$:
> $$
> P\left(X<\tfrac12\right)=\frac{3}{56}\int_{-1}^{1/2}(3-x)^2dx=\frac{3}{56}\cdot\frac{4^3-(2.5)^3}{3}=\frac{64-15.625}{56}=\frac{48.375}{56}=0.8638 .
> $$
>
> **(iii) Magnitude of the error exceeds 0.8.** "Magnitude exceeds 0.8" means $|X|>0.8$, which is the complement of $-0.8\le X\le 0.8$:
> $$
> P(|X|\le 0.8)=\frac{3}{56}\cdot\frac{(3.8)^3-(2.2)^3}{3}=\frac{54.872-10.648}{56}=\frac{44.224}{56}=0.7897,
> $$
> $$
> P(|X|>0.8)=1-0.7897=0.2103 .
> $$
> **Comment.** There is about a 21% chance that the error is large enough to be undesirable.

> [!example] Past TF 2021-22 Q6(c) (15 marks) — cars with paint blemishes
> A shipment of 5 cars contains 2 with paint blemishes. An agency receives 3 cars at random. Let $X$ be the number of blemished cars received, so $X$ can be 0, 1 or 2. The total number of ways to choose 3 cars from 5 is $\binom53=10$. Choosing $x$ blemished cars from 2 and $3-x$ good cars from 3 gives
> $$
> f(x)=P(X=x)=\frac{\binom{2}{x}\binom{3}{3-x}}{\binom{5}{3}},\qquad x=0,1,2 .
> $$
> So $f(0)=\frac{1\cdot1}{10}=\frac1{10}$, $f(1)=\frac{2\cdot 3}{10}=\frac35$ and $f(2)=\frac{1\cdot3}{10}=\frac3{10}$. These add to 1.
>
> | $x$ | 0 | 1 | 2 |
> |---|---|---|---|
> | $f(x)$ | 1/10 | 6/10 | 3/10 |
>
> The cumulative distribution function adds the probabilities up to each point:
> $$
> F(x)=\begin{cases}0, & x<0\\ 1/10, & 0\le x<1\\ 7/10, & 1\le x<2\\ 1, & x\ge 2\end{cases}
> $$
> This is a step function that jumps by $f(x)$ at each possible value. This distribution is the ==hypergeometric distribution==, discussed in [[P6 Bernoulli Binomial Multinomial Hypergeometric Geometric]].

> [!tip] Exam trick
> When you write a discrete CDF, use "$\le$" on the left and "$<$" on the right of each interval, as above, and always include the first line ($F=0$) and the last line ($F=1$). Missing these two lines is the most common way students lose marks here.

---

> [!question]- Self-check
> **1.** If $f(x)=cx^2$ on $0<x<3$, find $c$. *$c\cdot 27/3=1$, so $c=1/9$.*
> **2.** For a continuous $X$, what is $P(X=2)$? *Zero.*
> **3.** How do you get $f(x)$ from $F(x)$? *Differentiate.*
> **4.** Write $P(1<X\le 3)$ using the CDF. *$F(3)-F(1)$.*
> **5.** For a discrete CDF, what is the size of the jump at $x$? *$P(X=x)$.*

Previous: [[P2 Conditional Probability Independence and Bayes]] · Next: [[P4 Joint Marginal and Conditional Distributions]] · Home: [[index]]
