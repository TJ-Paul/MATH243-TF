---
title: Formula Sheet (memorize everything here)
tags: [math243, exam-toolkit, formulas]
---

# Formula Sheet

This is the page to read on the last evening and on the morning of the exam.

Every formula here has been used in at least one of the last five term finals, or is needed to reach one. Each formula has a one-line "use when", because knowing *when* is as important as knowing the formula.

If a formula feels unfamiliar, click the linked note and read the explanation again.

> [!important] The five things students most often forget
> **1.** Skewness by moments is **positive for positive (right) skew**:
>
> $$\gamma_1=\frac{\mu_3}{\mu_2^{3/2}}$$
>
> **2.** With step deviations $u=\dfrac{x-A}{h}$, the $r$-th moment must be multiplied by $h^r$.
>
> **3.** The sample variance in tests divides by $n-1$:
>
> $$s^2=\frac{\sum (x-\bar x)^2}{n-1}$$
>
> **4.** The normal table gives the **left area**:
>
> $$\Phi(z)=P(Z\le z)$$
>
> **5.** In rank correlation with ties, add $\dfrac{m^3-m}{12}$ for **every** tied group in **both** variables.

---

## 1. Basic probability — [[P1 Probability Basics and Counting]]

Use these whenever you count outcomes or combine events.

**Addition rule** — use when you need "A or B":

$$P(A\cup B)=P(A)+P(B)-P(A\cap B)$$

**Complement rule** — use for "at least one" questions:

$$P(A^c)=1-P(A)$$

**Addition rule for three events:**

$$P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC)$$

**Permutation** — use when order matters (arrangements, posts):

$${}^nP_r=\frac{n!}{(n-r)!}$$

**Combination** — use when order does not matter (selections, committees, drawing balls):

$${}^nC_r=\binom{n}{r}=\frac{n!}{r!\,(n-r)!}$$

**De Morgan's laws:**

$$(A\cup B)^c=A^c\cap B^c$$

$$(A\cap B)^c=A^c\cup B^c$$

**Odds** — if the odds in favour of $A$ are $a:b$, then

$$P(A)=\frac{a}{a+b}$$

---

## 2. Conditional probability and Bayes — [[P2 Conditional Probability Independence and Bayes]]

Use the multiplication law when events happen one after another. Use total probability when the final event can happen through several routes. Use Bayes when you are asked "given the result, what is the probability of the cause".

**Conditional probability:**

$$P(A\mid B)=\frac{P(A\cap B)}{P(B)}$$

**Multiplication law:**

$$P(A\cap B)=P(A)\,P(B\mid A)$$

**Independence test:**

$$A,\ B \text{ independent}\iff P(A\cap B)=P(A)\,P(B)$$

**Total probability** — the final event can happen through causes $A_1, A_2, \dots$:

$$P(B)=\sum_i P(A_i)\,P(B\mid A_i)$$

**Bayes' theorem** — the result $B$ is known, find the probability of cause $A_k$:

$$P(A_k\mid B)=\frac{P(A_k)\,P(B\mid A_k)}{\sum_i P(A_i)\,P(B\mid A_i)}$$

> [!warning] Mutually exclusive is not independent
> If $P(A)>0$, $P(B)>0$ and $A\cap B=\varnothing$, then
>
> $$P(A\cap B)=0\ne P(A)P(B)$$
>
> so the events are **dependent**. Two events can be both mutually exclusive and independent only if one of them has probability zero.

---

## 3. Random variables — [[P3 Random Variables PMF PDF CDF]] and [[P4 Joint Marginal and Conditional Distributions]]

To find an unknown constant $k$, set the total probability equal to 1.

**Discrete pmf:**

$$P(X=x)=f(x),\qquad \sum_x f(x)=1$$

**Continuous pdf** — probability is an area:

$$P(a<X<b)=\int_a^b f(x)\,dx$$

$$\int_{-\infty}^{\infty} f(x)\,dx=1$$

**Cumulative distribution function (CDF):**

$$F(x)=P(X\le x)=\int_{-\infty}^{x} f(t)\,dt$$

**pdf from CDF:**

$$f(x)=F'(x)$$

**Probability from CDF:**

$$P(a<X\le b)=F(b)-F(a)$$

**Marginal of $X$** — integrate out $y$:

$$g(x)=\int f(x,y)\,dy$$

**Marginal of $Y$** — integrate out $x$:

$$h(y)=\int f(x,y)\,dx$$

**Conditional density of $Y$ given $X=x$:**

$$f(y\mid x)=\frac{f(x,y)}{g(x)}$$

**Independence of $X$ and $Y$:**

$$f(x,y)=g(x)\,h(y)$$

---

## 4. Expectation — [[P5 Expectation Variance Covariance and Chebyshev]]

**Mean:**

$$E(X)=\sum x f(x)\quad\text{or}\quad \int x f(x)\,dx$$

**Mean of a function** — use for $E(X^2)$, $E(e^{X})$, etc.:

$$E[g(X)]=\sum g(x)f(x)\quad\text{or}\quad \int g(x)f(x)\,dx$$

**Variance:**

$$\operatorname{Var}(X)=E(X^2)-[E(X)]^2$$

**Linear change** — use for $Y=aX+b$:

$$E(aX+b)=aE(X)+b$$

$$\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X)$$

**Covariance:**

$$\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y)$$

**Variance of a combination:**

$$\operatorname{Var}(aX+bY)=a^2\sigma_X^2+b^2\sigma_Y^2+2ab\operatorname{Cov}(X,Y)$$

> [!important] Chebyshev's theorem
> For **any** distribution with mean $\mu$ and standard deviation $\sigma$:
>
> $$P(\mu-k\sigma<X<\mu+k\sigma)\ \ge\ 1-\frac{1}{k^2}$$
>
> Equivalently, the probability of falling far from the mean is small:
>
> $$P(|X-\mu|\ge k\sigma)\ \le\ \frac{1}{k^2}$$
>
> With $k=2$, at least 75% lies within two SDs. With $k=3$, at least 88.9%.
>
> If the distribution is symmetric, each tail gets at most half:
>
> $$P(X\ge \mu+k\sigma)\le \frac{1}{2k^2}$$

---

## 5. Discrete distributions — [[P6 Bernoulli Binomial Multinomial Hypergeometric Geometric]] and [[P7 Poisson Distribution and Poisson Process]]

| Distribution | pmf | Mean | Variance | Use it when |
|---|---|---|---|---|
| Bernoulli | $p^x q^{1-x}$ | $p$ | $pq$ | one trial, success or failure |
| Binomial | $\binom{n}{x}p^x q^{n-x}$ | $np$ | $npq$ | fixed $n$ independent trials, constant $p$ |
| Multinomial | see below | $np_i$ | $np_i(1-p_i)$ | each trial has $k$ outcomes |
| Hypergeometric | see below | $\frac{nk}{N}$ | see below | sampling **without replacement** |
| Geometric | $q^{x-1}p$ | $\frac1p$ | $\frac{q}{p^2}$ | trial on which the **first** success occurs |
| Negative binomial | $\binom{x-1}{k-1}p^k q^{x-k}$ | $\frac kp$ | $\frac{kq}{p^2}$ | trial on which the **$k$-th** success occurs |
| Poisson | $\frac{e^{-\lambda}\lambda^x}{x!}$ | $\lambda$ | $\lambda$ | counts in time/space; or binomial with large $n$, small $p$ |

**Multinomial pmf** — $n$ trials, outcome $i$ happens $x_i$ times:

$$P=\frac{n!}{x_1!\,x_2!\cdots x_k!}\;p_1^{x_1}p_2^{x_2}\cdots p_k^{x_k}$$

**Hypergeometric pmf** — choose $n$ from $N$ items, of which $k$ are "successes":

$$P(X=x)=\frac{\binom{k}{x}\binom{N-k}{n-x}}{\binom{N}{n}}$$

**Hypergeometric variance:**

$$\sigma^2=\frac{N-n}{N-1}\cdot n\cdot\frac{k}{N}\left(1-\frac{k}{N}\right)$$

**Poisson approximation to binomial** — when $n$ is large and $p$ is small:

$$\lambda=np$$

---

## 6. Continuous distributions — [[P8 Normal Distribution]] and [[P9 Uniform Exponential and Other Continuous Distributions]]

### Uniform on $(A,B)$

**pdf:**

$$f(x)=\frac{1}{B-A},\qquad A<x<B$$

**Mean:**

$$\mu=\frac{A+B}{2}$$

**Variance:**

$$\sigma^2=\frac{(B-A)^2}{12}$$

### Exponential with rate $\lambda$ (mean $\beta=1/\lambda$)

**pdf:**

$$f(x)=\lambda e^{-\lambda x},\qquad x\ge 0$$

**CDF** — probability of happening within time $x$:

$$F(x)=1-e^{-\lambda x}$$

**Survival** — probability of lasting beyond $x$:

$$P(X>x)=e^{-\lambda x}$$

**Mean:**

$$\mu=\frac1\lambda$$

**Variance:**

$$\sigma^2=\frac1{\lambda^2}$$

**Memoryless property:**

$$P(X>s+t\mid X>s)=P(X>t)$$

### Normal $N(\mu,\sigma^2)$

**pdf:**

$$f(x)=\frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

**Standardising** — always the first step:

$$Z=\frac{X-\mu}{\sigma}\sim N(0,1)$$

**Probability between two values:**

$$P(a<X<b)=\Phi\!\left(\frac{b-\mu}{\sigma}\right)-\Phi\!\left(\frac{a-\mu}{\sigma}\right)$$

**Negative $z$:**

$$\Phi(-z)=1-\Phi(z)$$

**Normal approximation to binomial** — when $np\ge5$ and $nq\ge5$, use a continuity correction of $\pm0.5$ with

$$\mu=np,\qquad \sigma=\sqrt{npq}$$

> [!important] Normal-table values to know by heart
> $\Phi(1)=0.8413$
>
> $\Phi(1.645)=0.95$
>
> $\Phi(1.96)=0.975$
>
> $\Phi(2)=0.9772$
>
> $\Phi(2.33)=0.99$
>
> $\Phi(2.58)=0.995$
>
> $\Phi(3)=0.9987$
>
> Within $1\sigma$, $2\sigma$, $3\sigma$ of the mean: 68.27%, 95.45%, 99.73%.

---

## 7. Frequency tables — [[S2 Frequency Distributions and Graphs]]

**Sturges' rule** — number of classes:

$$K=1+3.322\log_{10}N$$

**Class width:**

$$h\approx\frac{\text{Largest}-\text{Smallest}}{K}$$

**Class mark** (mid-value):

$$x=\frac{\text{lower limit}+\text{upper limit}}{2}$$

Class boundaries lie halfway between the upper limit of one class and the lower limit of the next.

---

## 8. Central tendency — [[S3 Measures of Central Tendency]]

**Step deviation:**

$$u=\frac{x-A}{h}$$

**Mean** (grouped data):

$$\bar x=\frac{\sum fx}{N}=A+\frac{\sum fu}{N}\times h$$

**Median:**

$$\text{Median}=L+\frac{\frac N2-F}{f_m}\times h$$

**Mode:**

$$\text{Mode}=L+\frac{\Delta_1}{\Delta_1+\Delta_2}\times h$$

where $\Delta_1=f_m-f_{m-1}$ and $\Delta_2=f_m-f_{m+1}$.

**Quartiles:**

$$Q_i=L+\frac{\frac{iN}{4}-F}{f}\times h$$

**Deciles:**

$$D_i=L+\frac{\frac{iN}{10}-F}{f}\times h$$

**Percentiles:**

$$P_i=L+\frac{\frac{iN}{100}-F}{f}\times h$$

In these, $L$ is the lower boundary of the class containing the position, $F$ is the cumulative frequency **before** that class, $f$ is its frequency, and $h$ is its width.

**Combined mean:**

$$\bar x=\frac{n_1\bar x_1+n_2\bar x_2}{n_1+n_2}$$

---

## 9. Dispersion — [[S4 Measures of Dispersion]]

**Variance** (grouped data):

$$\sigma^2=\frac{\sum f x^2}{N}-\bar x^2$$

**Variance with step deviations:**

$$\sigma^2=h^2\left[\frac{\sum fu^2}{N}-\left(\frac{\sum fu}{N}\right)^2\right]$$

**Coefficient of variation** — larger CV means more variable (less consistent):

$$CV=\frac{\sigma}{\bar x}\times100\%$$

**Corrected mean and SD** — first rebuild the totals, then remove the wrong values and add the right ones:

$$\sum x=N\bar x$$

$$\sum x^2=N(\sigma^2+\bar x^2)$$

---

## 10. Moments, skewness, kurtosis — [[S5 Moments Skewness and Kurtosis]]

**Raw moments about $A$:**

$$\mu_r'=\frac{\sum f u^r}{N}\times h^r$$

**Central moments from raw moments:**

$$\mu_2=\mu_2'-\mu_1'^2$$

$$\mu_3=\mu_3'-3\mu_2'\mu_1'+2\mu_1'^3$$

$$\mu_4=\mu_4'-4\mu_3'\mu_1'+6\mu_2'\mu_1'^2-3\mu_1'^4$$

**Skewness by moments:**

$$\beta_1=\frac{\mu_3^2}{\mu_2^3}$$

$$\gamma_1=\frac{\mu_3}{\mu_2^{3/2}}$$

**Kurtosis by moments:**

$$\beta_2=\frac{\mu_4}{\mu_2^2}$$

$$\gamma_2=\beta_2-3$$

$\beta_2>3$ leptokurtic (peaked), $\beta_2=3$ mesokurtic (normal), $\beta_2<3$ platykurtic (flat).

**Pearson's coefficient of skewness:**

$$SK_P=\frac{\text{Mean}-\text{Mode}}{\sigma}$$

**Bowley's coefficient of skewness** (quartiles):

$$SK_B=\frac{Q_3+Q_1-2Q_2}{Q_3-Q_1}$$

**Kelly's coefficient of skewness** (percentiles):

$$SK_K=\frac{P_{90}-2P_{50}+P_{10}}{P_{90}-P_{10}}$$

---

## 11. Correlation and regression — [[S6 Correlation and Regression]]

**Corrected sums of squares and products:**

$$S_{xx}=\sum x^2-\frac{(\sum x)^2}{n}$$

$$S_{yy}=\sum y^2-\frac{(\sum y)^2}{n}$$

$$S_{xy}=\sum xy-\frac{\sum x\sum y}{n}$$

**Pearson's correlation coefficient:**

$$r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}$$

**Regression coefficient of $Y$ on $X$:**

$$b_{yx}=\frac{S_{xy}}{S_{xx}}$$

**Regression coefficient of $X$ on $Y$:**

$$b_{xy}=\frac{S_{xy}}{S_{yy}}$$

**Link between them:**

$$r=\pm\sqrt{b_{yx}\,b_{xy}}$$

**Regression line of $Y$ on $X$** — use to predict $y$ from $x$:

$$y-\bar y=b_{yx}(x-\bar x)$$

**Regression line of $X$ on $Y$** — use to predict $x$ from $y$:

$$x-\bar x=b_{xy}(y-\bar y)$$

**Sums of squares:**

$$SST=S_{yy}$$

$$SSR=b_{yx}S_{xy}$$

$$SSE=SST-SSR$$

**Coefficient of determination:**

$$R^2=\frac{SSR}{SST}\quad(=r^2\text{ for a straight line})$$

**Spearman's rank correlation with ties:**

$$r_s=1-\frac{6\left[\sum D^2+\sum\frac{m^3-m}{12}\right]}{n(n^2-1)}$$

**Second-degree fit $y=a+bx+cx^2$** — solve these three normal equations:

$$\sum y=na+b\sum x+c\sum x^2$$

$$\sum xy=a\sum x+b\sum x^2+c\sum x^3$$

$$\sum x^2y=a\sum x^2+b\sum x^3+c\sum x^4$$

---

## 12. Sampling and estimation — [[S7 Sampling Distributions CLT and Confidence Intervals]]

**Central limit theorem** (large $n$):

$$\bar X\approx N\!\left(\mu,\ \frac{\sigma^2}{n}\right)$$

**Standard error of the mean:**

$$SE(\bar x)=\frac{\sigma}{\sqrt n}$$

**Confidence interval, $\sigma$ known or $n\ge30$:**

$$\bar x\pm z_{\alpha/2}\,\frac{\sigma}{\sqrt n}$$

**Confidence interval, small $n$:**

$$\bar x\pm t_{\alpha/2,\,n-1}\,\frac{s}{\sqrt n}$$

---

## 13. Hypothesis tests — [[S8 Hypothesis Testing Concepts and z t Tests]], [[S9 Chi-Square Tests]], [[S10 ANOVA One-Way and Two-Way]]

| Situation | Test statistic | Distribution |
|---|---|---|
| One mean, $\sigma$ known or $n\ge30$ | $z=\frac{\bar x-\mu_0}{\sigma/\sqrt n}$ | $N(0,1)$ |
| One mean, small $n$, $\sigma$ unknown | $t=\frac{\bar x-\mu_0}{s/\sqrt n}$ | $t_{n-1}$ |
| Two means, large samples | $z=\frac{\bar x_1-\bar x_2}{\sqrt{s_1^2/n_1+s_2^2/n_2}}$ | $N(0,1)$ |
| Two means, small samples, equal variances | $t=\frac{\bar x_1-\bar x_2}{s_p\sqrt{1/n_1+1/n_2}}$ | $t_{n_1+n_2-2}$ |
| Paired samples | $t=\frac{\bar d}{s_d/\sqrt n}$ | $t_{n-1}$ |
| One proportion | $z=\frac{\hat p-p_0}{\sqrt{p_0q_0/n}}$ | $N(0,1)$ |
| Two proportions | $z=\frac{\hat p_1-\hat p_2}{\sqrt{\hat p\hat q(1/n_1+1/n_2)}}$ | $N(0,1)$ |
| Goodness of fit / contingency | $\chi^2=\sum\frac{(O-E)^2}{E}$ | $\chi^2_{k-1}$ or $\chi^2_{(r-1)(c-1)}$ |
| 2×2 table (Yates) | see below | $\chi^2_1$ |
| Two variances | $F=\frac{s_1^2}{s_2^2}$ (larger on top) | $F_{n_1-1,\,n_2-1}$ |

**Pooled variance** — for the small-sample two-mean t-test:

$$s_p^2=\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}$$

**Pooled proportion** — for the two-proportion z-test:

$$\hat p=\frac{x_1+x_2}{n_1+n_2},\qquad \hat q=1-\hat p$$

**Expected frequency** in a contingency table:

$$E=\frac{R\times C}{N}$$

**2×2 table with Yates' correction:**

$$\chi^2=\frac{N\left(\lvert ad-bc\rvert-\frac N2\right)^2}{(a+b)(c+d)(a+c)(b+d)}$$

> [!important] Critical values of $z$
> **Two-tailed:** 1.96 at 5%, 2.58 at 1%.
>
> **One-tailed:** 1.645 at 5%, 2.33 at 1%.
>
> A left-tailed test uses the negative value.

> [!important] One-way ANOVA
> **Correction term:**
>
> $$CT=\frac{G^2}{N}$$
>
> **Total sum of squares:**
>
> $$SST=\sum\sum x^2-CT$$
>
> **Between-groups sum of squares:**
>
> $$SSB=\sum\frac{T_i^2}{n_i}-CT$$
>
> **Within-groups sum of squares:**
>
> $$SSW=SST-SSB$$
>
> **F statistic:**
>
> $$F=\frac{SSB/(k-1)}{SSW/(N-k)}\sim F_{k-1,\ N-k}$$

> [!important] Two-way ANOVA ($r$ blocks, $c$ treatments)
> **Rows (blocks):**
>
> $$SSR=\sum\frac{R_i^2}{c}-CT$$
>
> **Columns (treatments):**
>
> $$SSC=\sum\frac{C_j^2}{r}-CT$$
>
> **Error:**
>
> $$SSE=SST-SSR-SSC$$
>
> Error degrees of freedom are $(r-1)(c-1)$.

Home: [[index]] · Question map: [[TF Question Map]] · Answer format: [[Exam Answer Templates and Strategy]]
