---
title: "P8 · The Normal Distribution"
tags: [math243, probability, normal-distribution]
---

# P8 · The Normal Distribution

> [!abstract] Why this matters for the term final
> The normal distribution is the most important continuous distribution in the course and it is used again in every hypothesis test. It appeared in 2020-21 Q7(b) (mice lifetimes), 2021-22 Q7(b) (ball bearings scrapped), 2022-23 Q3(c) (lawyer's commute, including a percentile and a binomial on top) and Q4(a) (properties of the normal curve; mean, mode and standard deviation; standard normal), and 2023-24 Q4(a) (==show that the mode equals $\mu$==, then a light-bulb probability). The 2022-23 and 2023-24 ones are solved in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]]. You must be fast and accurate with the $z$-table.

---

## 1. The normal density

> [!important] Memorize: Normal pdf
> A random variable $X$ is normal with mean $\mu$ and variance $\sigma^2$, written $X\sim N(\mu,\sigma^2)$, if its density is
> $$
> n(x;\mu,\sigma)=\frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2},\qquad -\infty<x<\infty .
> $$

![[m243-normal-empirical.png]]

## 2. Properties of the normal curve (asked in 2022-23 Q4(a))

> [!important] Memorize: Properties of the normal curve
> The normal curve is ==bell-shaped and symmetric about the vertical line $x=\mu$==. Because of this symmetry, ==the mean, median and mode are all equal to $\mu$==, and the highest point of the curve is at $x=\mu$, where the height is $\frac{1}{\sigma\sqrt{2\pi}}$. The curve has points of inflection at $x=\mu\pm\sigma$; it is concave downward between them and concave upward outside them. The curve approaches the horizontal axis asymptotically in both directions but never touches it, so $X$ can in principle take any real value. The total area under the curve and above the axis is 1. About 68.27% of the area lies within $\mu\pm\sigma$, 95.45% within $\mu\pm2\sigma$ and 99.73% within $\mu\pm3\sigma$ (the empirical rule). The coefficient of skewness is 0 and $\beta_2=3$ (mesokurtic). Finally, the two parameters $\mu$ and $\sigma$ completely determine the curve: $\mu$ fixes the centre and $\sigma$ fixes the spread, so a larger $\sigma$ gives a lower, wider curve.

## 3. Mean, mode and standard deviation of the normal distribution

### The mode is $\mu$ (2023-24 Q4(a))

The mode is the value of $x$ at which the density is largest. Write $f(x)=n(x;\mu,\sigma)$. Differentiating with the chain rule,

$$
f'(x)=\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac12\left(\frac{x-\mu}{\sigma}\right)^2}\cdot\left(-\frac{x-\mu}{\sigma^2}\right)=-\frac{x-\mu}{\sigma^2}\,f(x).
$$

Since $f(x)>0$ for every $x$, setting $f'(x)=0$ gives $x-\mu=0$, so $x=\mu$. To confirm it is a maximum, differentiate again:

$$
f''(x)=-\frac{1}{\sigma^2}f(x)+\frac{(x-\mu)^2}{\sigma^4}f(x)=\frac{f(x)}{\sigma^2}\left[\frac{(x-\mu)^2}{\sigma^2}-1\right].
$$

At $x=\mu$ this is $-\dfrac{f(\mu)}{\sigma^2}<0$, so $f$ has a maximum at $x=\mu$. Hence ==the mode of the normal distribution is $\mu$==. As a bonus, $f''(x)=0$ when $(x-\mu)^2=\sigma^2$, that is at $x=\mu\pm\sigma$, which proves the points of inflection.

### The mean is $\mu$

$$
E(X)=\int_{-\infty}^{\infty}\frac{x}{\sigma\sqrt{2\pi}}e^{-\frac12\left(\frac{x-\mu}{\sigma}\right)^2}dx .
$$

Substitute $z=\dfrac{x-\mu}{\sigma}$, so $x=\mu+\sigma z$ and $dx=\sigma\,dz$:

$$
E(X)=\mu\int_{-\infty}^{\infty}\frac{1}{\sqrt{2\pi}}e^{-z^2/2}dz+\sigma\int_{-\infty}^{\infty}\frac{z}{\sqrt{2\pi}}e^{-z^2/2}dz=\mu(1)+\sigma(0)=\mu .
$$

The first integral is the total area under the standard normal curve, which is 1, and the second is zero because $z\,e^{-z^2/2}$ is an odd function.

### The standard deviation is $\sigma$

With the same substitution,

$$
\mathrm{Var}(X)=E[(X-\mu)^2]=\sigma^2\int_{-\infty}^{\infty}\frac{z^2}{\sqrt{2\pi}}e^{-z^2/2}dz .
$$

Integrating by parts with $u=z$ and $dv=z\,e^{-z^2/2}dz$ (so $v=-e^{-z^2/2}$),

$$
\int_{-\infty}^{\infty}z^2e^{-z^2/2}dz=\Big[-z\,e^{-z^2/2}\Big]_{-\infty}^{\infty}+\int_{-\infty}^{\infty}e^{-z^2/2}dz=0+\sqrt{2\pi}.
$$

So $\mathrm{Var}(X)=\sigma^2\cdot\dfrac{\sqrt{2\pi}}{\sqrt{2\pi}}=\sigma^2$ and the standard deviation is $\sigma$. The median is also $\mu$, because the curve is symmetric about $\mu$ and so exactly half the area lies on each side.

## 4. The standard normal distribution

> [!important] Memorize: Standardizing
> If $X\sim N(\mu,\sigma^2)$, then
> $$
> Z=\frac{X-\mu}{\sigma}
> $$
> has the **standard normal distribution** $N(0,1)$, with ==mean 0 and variance 1==, and density $\phi(z)=\frac{1}{\sqrt{2\pi}}e^{-z^2/2}$. This follows from the linear rules: $E(Z)=\frac{E(X)-\mu}{\sigma}=0$ and $\mathrm{Var}(Z)=\frac{\mathrm{Var}(X)}{\sigma^2}=1$. Every normal probability can therefore be read from one single table.

## 5. Using the standard normal table

The table attached to the exam paper gives $\Phi(z)=P(Z\le z)$, the area to the ==left== of $z$.

![[m243-phi-area.png]]

> [!important] Memorize: Table rules
> $$
> P(Z\le z)=\Phi(z),\qquad P(Z>z)=1-\Phi(z),\qquad P(a<Z<b)=\Phi(b)-\Phi(a),\qquad \Phi(-z)=1-\Phi(z).
> $$

Round $z$ to two decimals, find the row for the first decimal and the column for the second. For example $\Phi(1.43)$ is in row 1.4, column 0.03, giving 0.9236. If your table only has positive $z$, use $\Phi(-z)=1-\Phi(z)$.

> [!tip] Exam trick: always draw the curve
> Draw a small bell curve, mark $\mu$ and the $x$ values, shade the area you want, and write the $z$ values under them. This takes ten seconds and prevents the most common error, which is taking the wrong side.

### Reverse lookup: finding $x$ for a given probability

If the question gives a probability and asks for a value (a percentile, a cut-off, "the slowest 15%"), you go backwards. Find $z$ in the body of the table such that $\Phi(z)$ equals the required left area, then convert back with

$$
x=\mu+z\sigma .
$$

**Fresh practice.** Exam scores are $N(500,\,50^2)$. Find $P(450<X<620)$ and the score that cuts off the top 10%.

For the probability, $z_1=\frac{450-500}{50}=-1.00$ and $z_2=\frac{620-500}{50}=2.40$. So $P=\Phi(2.40)-\Phi(-1.00)=0.9918-0.1587=0.8331$.

For the top 10%, the left area is 0.90. The table gives $\Phi(1.28)\approx0.8997$, so $z=1.28$ and $x=500+1.28(50)=564$. Students scoring above 564 are in the top 10%.

---

## 6. Normal approximation to the binomial (with continuity correction)

When $n$ is large and $p$ is not too close to 0 or 1 (a common rule is $np\ge5$ and $nq\ge5$), the binomial $X$ is approximately normal with $\mu=np$ and $\sigma=\sqrt{npq}$.

> [!important] Memorize: Continuity correction
> The binomial is discrete and the normal is continuous, so each integer $x$ is represented by the interval from $x-0.5$ to $x+0.5$. Therefore
> $$
> P(X\le a)\approx P\!\left(Z\le\frac{a+0.5-np}{\sqrt{npq}}\right),\qquad P(X\ge a)\approx P\!\left(Z\ge\frac{a-0.5-np}{\sqrt{npq}}\right).
> $$

**Fresh practice.** A coin-type process has $p=0.3$ and $n=100$. Find $P(X\le25)$. Here $\mu=30$ and $\sigma=\sqrt{100(0.3)(0.7)}=\sqrt{21}=4.583$. With the continuity correction,

$$
P(X\le25)\approx P\!\left(Z\le\frac{25.5-30}{4.583}\right)=P(Z\le-0.98)=0.1635 .
$$

The exact binomial answer is 0.1631, so the approximation is very good.

---

## 7. Past TF questions solved

> [!example] Past TF 2020-21 Q7(b) (18 marks) — mice lifetimes
> Lifetimes are normal with $\mu=40$ months and $\sigma=6.3$ months.
>
> **(i) More than 32 months.** $z=\dfrac{32-40}{6.3}=-1.27$. Then
> $$
> P(X>32)=P(Z>-1.27)=1-\Phi(-1.27)=1-0.1020=0.8980 .
> $$
> **(ii) Between 37 and 49 months.** $z_1=\dfrac{37-40}{6.3}=-0.48$ and $z_2=\dfrac{49-40}{6.3}=1.43$. Then
> $$
> P(37<X<49)=\Phi(1.43)-\Phi(-0.48)=0.9236-0.3156=0.6080 .
> $$
> (Without rounding $z$ the answer is 0.6065; either is accepted when you show the table values.) So about 89.8% of mice live more than 32 months and about 61% live between 37 and 49 months.

> [!example] Past TF 2021-22 Q7(b) (15 marks) — ball bearings scrapped
> The diameter is $X\sim N(3.0,\ 0.005^2)$ and the specification is $3.0\pm0.01$, so a bearing is accepted if $2.99\le X\le3.01$ and scrapped otherwise. The $z$ values of the limits are
> $$
> z_1=\frac{2.99-3.0}{0.005}=-2.0,\qquad z_2=\frac{3.01-3.0}{0.005}=+2.0 .
> $$
> $$
> P(\text{scrapped})=P(Z<-2)+P(Z>2)=2\,\Phi(-2.0)=2(0.0228)=0.0456 .
> $$
> On average **4.56%** of the ball bearings will be scrapped.

> [!warning] Common mistake
> In "between" questions do not subtract the $z$ values; subtract the **areas** $\Phi(z_2)-\Phi(z_1)$. And in "more than" questions remember to take $1-\Phi(z)$, because the table gives the left area.

---

> [!question]- Self-check
> **1.** Where is the mode of $N(\mu,\sigma^2)$ and how do you prove it? *At $x=\mu$; set $f'(x)=0$ and check $f''(\mu)<0$.*
> **2.** Mean and variance of $Z$? *0 and 1.*
> **3.** $\Phi(-1.5)$ in terms of $\Phi(1.5)$? *$1-\Phi(1.5)$.*
> **4.** What $z$ gives the slowest 15% (upper tail)? *$z\approx1.04$ since $\Phi(1.04)\approx0.85$.*
> **5.** Continuity-corrected form of $P(X\ge 40)$? *$P(Z\ge (39.5-np)/\sqrt{npq})$.*

Previous: [[P7 Poisson Distribution and Poisson Process]] · Next: [[P9 Uniform Exponential and Other Continuous Distributions]] · Home: [[index]]
