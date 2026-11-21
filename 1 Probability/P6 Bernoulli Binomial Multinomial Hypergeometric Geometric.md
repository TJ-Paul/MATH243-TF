---
title: "P6 · Bernoulli, Binomial, Multinomial, Hypergeometric and Geometric"
tags: [math243, probability, binomial, discrete-distributions]
---

# P6 · Bernoulli, Binomial, Multinomial, Hypergeometric and Geometric Distributions

> [!abstract] Why this matters for the term final
> Discrete distributions are tested every single year. 2020-21 asked a geometric/negative binomial question (Q6(c), the "fifth prescription") and a binomial question on diodes (Q7(a)); 2021-22 asked a binomial lottery question (Q6(a)), a multinomial question (Q6(b)) and a hypergeometric distribution (Q6(c)); 2022-23 Q3(c)(iii) used the binomial on top of a normal probability; and 2023-24 Q3(c) (12 marks) was a pure binomial question with "at least", "from ... to" and "exactly ... die". The 2022-23 and 2023-24 parts are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]]. The key skill is ==recognising which distribution the story describes==.

![[m243-binom-poisson.png]]

---

## 1. Bernoulli trials and the Bernoulli distribution

A **Bernoulli trial** is a single experiment with exactly two outcomes, called "success" and "failure", with $P(\text{success})=p$ and $P(\text{failure})=q=1-p$. A **Bernoulli process** is a sequence of such trials in which the trials are independent and $p$ stays the same from trial to trial.

If $X=1$ for success and $X=0$ for failure, then $X$ has the Bernoulli distribution $f(x)=p^xq^{1-x}$ for $x=0,1$, with $E(X)=p$ and $\mathrm{Var}(X)=pq$. The binomial distribution with $n=1$ is exactly the Bernoulli distribution.

## 2. The binomial distribution

> [!important] Memorize: Binomial distribution
> If a Bernoulli trial with success probability $p$ is repeated $n$ times independently, the number of successes $X$ has the **binomial distribution**
> $$
> b(x;n,p)=\binom{n}{x}p^x q^{\,n-x},\qquad x=0,1,2,\dots,n,\quad q=1-p .
> $$
> Its mean and variance are
> $$
> \mu=np,\qquad \sigma^2=npq .
> $$
> Use it when four conditions hold: a ==fixed number of trials $n$==, ==two outcomes per trial==, ==constant $p$==, and ==independent trials==.

The reason for the formula is simple. A particular arrangement with $x$ successes and $n-x$ failures has probability $p^xq^{n-x}$ by independence, and there are $\binom nx$ ways to choose which $x$ of the $n$ trials are the successes.

### Derivation of the mean and variance

Using $x\binom nx=n\binom{n-1}{x-1}$,

$$
E(X)=\sum_{x=0}^{n}x\binom nx p^xq^{n-x}=np\sum_{x=1}^{n}\binom{n-1}{x-1}p^{x-1}q^{n-x}=np\,(p+q)^{n-1}=np .
$$

For the variance it is easiest to find $E[X(X-1)]$ first, using $x(x-1)\binom nx=n(n-1)\binom{n-2}{x-2}$:

$$
E[X(X-1)]=n(n-1)p^2\sum_{x=2}^{n}\binom{n-2}{x-2}p^{x-2}q^{n-x}=n(n-1)p^2 .
$$

Then $E(X^2)=E[X(X-1)]+E(X)=n(n-1)p^2+np$, and

$$
\mathrm{Var}(X)=n(n-1)p^2+np-n^2p^2=np-np^2=np(1-p)=npq .
$$

A quicker argument: $X$ is the sum of $n$ independent Bernoulli variables, each with mean $p$ and variance $pq$, so the means and variances add to give $np$ and $npq$.

> [!tip] Exam trick: translating words into $x$ values
> "At least 10" means $x\ge 10$, which is $1-P(X\le 9)$. "From 3 to 8" means $3\le x\le 8$, which is $P(X\le8)-P(X\le2)$. "At most 2" means $x\le 2$. "Exactly 5 die" when $X$ counts survivors among 15 means exactly $15-5=10$ survive. Always state clearly what $X$ counts, then translate the words.

**Fresh practice (same shape as 2023-24 Q3(c)).** The probability that a patient recovers from a certain illness is 0.3. If 12 people have the illness, find the probability that (i) at least 8 recover, (ii) from 2 to 5 recover, (iii) exactly 4 die.

Let $X$ be the number who recover; then $X\sim b(x;12,0.3)$. Using the binomial formula (or the cumulative binomial table),

$$
P(X\ge 8)=\sum_{x=8}^{12}\binom{12}{x}(0.3)^x(0.7)^{12-x}=0.0095 ,
$$

$$
P(2\le X\le 5)=P(X\le5)-P(X\le1)=0.7971 .
$$

Exactly 4 die means exactly 8 recover:

$$
P(X=8)=\binom{12}{8}(0.3)^8(0.7)^4=495\times 0.00006561\times 0.2401=0.0078 .
$$

### Past TF questions solved

> [!example] Past TF 2021-22 Q6(a) (10 marks) — lottery tickets
> Out of 500 tickets, 200 pay back at least their cost, so for each ticket $p=\frac{200}{500}=0.4$ and $q=0.6$. Buying 5 tickets gives $n=5$ (we treat the tickets as independent, since 5 is tiny compared with 500). Let $X$ be the number of tickets that win back at least their cost. We need $P(X\ge3)$:
> $$
> P(X=3)=\binom53(0.4)^3(0.6)^2=10(0.064)(0.36)=0.2304,
> $$
> $$
> P(X=4)=\binom54(0.4)^4(0.6)=5(0.0256)(0.6)=0.0768,\qquad P(X=5)=(0.4)^5=0.01024 .
> $$
> $$
> P(X\ge3)=0.2304+0.0768+0.01024=0.3174 .
> $$

> [!example] Past TF 2020-21 Q7(a) (17 marks) — diode failures on a circuit board
> Each of the $n=200$ diodes fails independently with $p=0.03$, so the number of failures $X$ is binomial with $n=200$, $p=0.03$, $q=0.97$.
>
> **(i) Mean:** $\mu=np=200(0.03)=6$ failures.
> **(ii) Variance:** $\sigma^2=npq=200(0.03)(0.97)=5.82$, so $\sigma=2.41$.
> **(iii) The board works only if no diode fails:**
> $$
> P(X=0)=\binom{200}{0}(0.03)^0(0.97)^{200}=(0.97)^{200}=0.00226 .
> $$
> **Comment.** The board will almost never work. As a check, the Poisson approximation with $\lambda=np=6$ gives $e^{-6}=0.00248$, which is close (see [[P7 Poisson Distribution and Poisson Process]]).

---

## 3. The multinomial distribution

The binomial distribution has two outcomes per trial. If each trial can end in one of $k$ outcomes with probabilities $p_1,\dots,p_k$ (adding to 1), the counts $X_1,\dots,X_k$ in $n$ independent trials follow the **multinomial distribution**.

> [!important] Memorize: Multinomial distribution
> $$
> f(x_1,\dots,x_k;\,p_1,\dots,p_k,n)=\frac{n!}{x_1!\,x_2!\cdots x_k!}\;p_1^{x_1}p_2^{x_2}\cdots p_k^{x_k},\qquad \sum x_i=n,\ \ \sum p_i=1 .
> $$

> [!example] Past TF 2021-22 Q6(b) (10 marks) — how delegates arrived
> The probabilities of arriving by air, bus, automobile and train are $0.4,\ 0.2,\ 0.3,\ 0.1$. Among $n=9$ delegates we want 3 by air, 3 by bus, 1 by automobile and 2 by train (check: $3+3+1+2=9$).
> $$
> P=\frac{9!}{3!\,3!\,1!\,2!}(0.4)^3(0.2)^3(0.3)^1(0.1)^2=\frac{362880}{72}\times0.064\times0.008\times0.3\times0.01 .
> $$
> The coefficient is $5040$ and the product of the powers is $1.536\times10^{-6}$, so
> $$
> P=5040\times1.536\times10^{-6}=0.00774 .
> $$

---

## 4. The hypergeometric distribution

The binomial needs independent trials with constant $p$. When we sample ==without replacement from a small finite population==, $p$ changes after each draw, and we use the **hypergeometric distribution** instead.

> [!important] Memorize: Hypergeometric distribution
> A population of $N$ items contains $k$ "successes". A sample of $n$ is drawn without replacement. The number of successes $X$ in the sample has
> $$
> h(x;N,n,k)=\frac{\binom{k}{x}\binom{N-k}{n-x}}{\binom{N}{n}},\qquad \mu=\frac{nk}{N},\qquad \sigma^2=\frac{N-n}{N-1}\cdot n\cdot\frac kN\left(1-\frac kN\right).
> $$

The 2021-22 Q6(c) cars problem ($N=5$, $k=2$, $n=3$) is solved step by step in [[P3 Random Variables PMF PDF CDF]]; its mean is $\frac{3\times2}{5}=1.2$, which matches $0(0.1)+1(0.6)+2(0.3)=1.2$. When $n$ is small compared with $N$ (say $n/N\le 0.05$), the hypergeometric is well approximated by the binomial with $p=k/N$, which is why the lottery question above could use the binomial.

---

## 5. Geometric and negative binomial distributions

Sometimes the number of trials is not fixed; instead we keep going until we obtain a certain number of successes. Then the random variable is the **trial number** on which a success occurs.

> [!important] Memorize: Negative binomial and geometric
> The probability that the $k$-th success occurs on the $x$-th trial is the **negative binomial** distribution
> $$
> b^*(x;k,p)=\binom{x-1}{k-1}p^k q^{\,x-k},\qquad x=k,k+1,\dots
> $$
> The reasoning: the $x$-th trial must be a success, and among the first $x-1$ trials there must be exactly $k-1$ successes.
> The special case $k=1$ (the first success occurs on trial $x$) is the **geometric** distribution
> $$
> g(x;p)=p\,q^{\,x-1},\qquad x=1,2,\dots,\qquad \mu=\frac1p,\qquad \sigma^2=\frac{q}{p^2}.
> $$

> [!example] Past TF 2020-21 Q6(c) (10 marks) — Valium prescriptions
> Two-thirds of Valium users are women, so a prescription is "for a woman" (success) with $p=\frac23$ and $q=\frac13$. Prescriptions are treated as independent trials.
>
> **(i) The fifth prescription is the first one for a woman.** The first four must be for men and the fifth for a woman, which is geometric with $x=5$:
> $$
> g(5;\tfrac23)=\left(\tfrac23\right)\left(\tfrac13\right)^4=\frac{2}{243}=0.00823 .
> $$
> **(ii) The fifth prescription is the third one for a woman.** This is negative binomial with $k=3$, $x=5$: among the first four there are exactly two for women, and the fifth is for a woman:
> $$
> b^*(5;3,\tfrac23)=\binom{4}{2}\left(\tfrac23\right)^3\left(\tfrac13\right)^2=6\cdot\frac{8}{27}\cdot\frac19=\frac{48}{243}=0.1975 .
> $$

> [!warning] Common mistake
> Do not use $\binom{5}{3}$ in part (ii). The last trial is forced to be a success, so only the first $x-1=4$ trials are free to be arranged, giving $\binom{4}{2}$.

---

## 6. How to recognise the distribution quickly

Read the story and ask a few questions in order. If there is a fixed number of independent trials with two outcomes and constant $p$, it is **binomial**. If each trial has more than two outcomes and you want counts of each, it is **multinomial**. If you draw without replacement from a small population that contains a known number of successes, it is **hypergeometric**. If you count trials until the first (or the $k$-th) success, it is **geometric** (or **negative binomial**). If you count events in an interval of time or space at an average rate, or $n$ is huge and $p$ is tiny, it is **Poisson**, covered in [[P7 Poisson Distribution and Poisson Process]].

---

> [!question]- Self-check
> **1.** Mean and variance of $b(x;20,0.25)$? *5 and 3.75.*
> **2.** "At least 10 out of 15" in terms of the CDF? *$1-P(X\le 9)$.*
> **3.** Probability the first head appears on the 4th toss of a fair coin? *$(1/2)^4=1/16$.*
> **4.** When does hypergeometric become binomial? *When the sample is small relative to the population.*
> **5.** Multinomial coefficient for counts 2, 1, 1 out of 4? *$4!/(2!1!1!)=12$.*

Previous: [[P5 Expectation Variance Covariance and Chebyshev]] · Next: [[P7 Poisson Distribution and Poisson Process]] · Home: [[index]]
