---
title: "S6 · Correlation and Regression"
tags: [math243, statistics, correlation, regression]
---

# S6 · Correlation and Regression

**Why this matters for the TF.** A correlation or regression question has appeared in every one of the last five term finals, usually worth 12 to 20 marks.

You will be asked some mix of these: Pearson's $r$, the two regression lines with predictions, SST/SSR/$R^2$, rank correlation (often **with tied ranks**), and fitting a **second-degree polynomial**.

The 2019-20, 2020-21 and 2021-22 questions are solved below. The 2022-23 and 2023-24 ones are in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]].

---

## Core tools (memorize)

> [!important] Memorize: every formula in this topic
> **Building blocks** — use in every problem:
>
> $$S_{xx}=\sum x^2-\frac{(\sum x)^2}{n}$$
>
> $$S_{yy}=\sum y^2-\frac{(\sum y)^2}{n}$$
>
> $$S_{xy}=\sum xy-\frac{\sum x\sum y}{n}$$
>
> **Pearson's correlation** — strength and direction of a linear relation:
>
> $$r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}$$
>
> Always $-1\le r\le 1$, and it links to the regression coefficients by
>
> $$r=\pm\sqrt{b_{yx}\,b_{xy}}$$
>
> **Regression coefficient of $Y$ on $X$** — use to predict $Y$ from a known $X$:
>
> $$b_{yx}=\frac{S_{xy}}{S_{xx}}$$
>
> **Line of $Y$ on $X$:**
>
> $$y-\bar y=b_{yx}(x-\bar x)$$
>
> **Regression coefficient of $X$ on $Y$** — use to predict $X$ from a known $Y$:
>
> $$b_{xy}=\frac{S_{xy}}{S_{yy}}$$
>
> **Line of $X$ on $Y$:**
>
> $$x-\bar x=b_{xy}(y-\bar y)$$
>
> **Goodness of fit** — use when asked for SST, SSR, SSE, $R^2$:
>
> $$SST=S_{yy}$$
>
> $$SSR=b_{yx}S_{xy}$$
>
> $$SSE=SST-SSR$$
>
> $$R^2=\frac{SSR}{SST}$$
>
> **Rank correlation with ties** — use when data are ranks, or when asked for "rank correlation":
>
> $$r_s=1-\frac{6\left[\sum D^2+\sum\frac{m^3-m}{12}\right]}{n(n^2-1)}$$
>
> **Second-degree fit** $y=a+bx+cx^2$ — use for curved data. The three normal equations:
>
> $$\sum y=na+b\sum x+c\sum x^2$$
>
> $$\sum xy=a\sum x+b\sum x^2+c\sum x^3$$
>
> $$\sum x^2y=a\sum x^2+b\sum x^3+c\sum x^4$$

---

## Theory the TF actually asks

These answers have been asked word for word. Learn them as written.

> [!important] Pearson's correlation coefficient (2023-24 Q4b)
> ==Karl Pearson's coefficient of correlation $r$ is a numerical measure of the strength and direction of the **linear** relationship between two quantitative variables.==
>
> It is defined as the covariance of $x$ and $y$ divided by the product of their standard deviations:
>
> $$r=\frac{\operatorname{Cov}(x,y)}{\sigma_x\sigma_y}=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}$$
>
> It always lies between −1 and +1. $r=+1$ is perfect positive, $r=-1$ perfect negative, and $r=0$ means no linear relationship.
>
> It is a pure number, unaffected by change of origin and scale.

> [!important] Modifying the rank formula for repeated ranks (2023-24 Q4b)
> When some observations are equal, ==each tied value gets the **average** of the ranks it would occupy==. Two values tying for ranks 3 and 4 both get 3.5; three values tying for 4, 5, 6 all get 5.
>
> Because ties reduce the spread of the ranks, ==a correction factor $\frac{m^3-m}{12}$ is added to $\sum D^2$ for **every** tied group in **both** variables==, where $m$ is how many times the value is repeated:
>
> $$r_s=1-\frac{6\left[\sum D^2+\sum\frac{m^3-m}{12}\right]}{n(n^2-1)}$$
>
> Values for quick use: $m=2$ gives 0.5, $m=3$ gives 2, $m=4$ gives 5.

> [!important] Objectives of correlation and regression analysis (2023-24 Q4c)
> **Correlation analysis** aims to find out whether two variables are related, to measure how strong that relationship is, and to tell whether it is positive or negative. It also tells us whether fitting a straight line is worthwhile.
>
> **Regression analysis** aims to find the equation that describes the average relationship between a dependent variable and an independent variable.
>
> It is used to predict unknown values of the dependent variable, for example yield for a given fertilizer dose. It also measures the change in $Y$ for a unit change in $X$ (the regression coefficient) and how good the fit is ($R^2$).

> [!important] Correlation versus regression (2022-23 Q4b)
> Correlation measures the **degree of association** between two variables, while regression gives the **equation of the relationship** and is used for **prediction**.
>
> In correlation both variables are treated alike, so $r_{xy}=r_{yx}$. In regression one variable is dependent and the other independent, so $b_{yx}\ne b_{xy}$ in general.
>
> $r$ is a pure number between −1 and +1, but regression coefficients have units and can take any value.
>
> Correlation does not show cause and effect, whereas regression is set up with a cause-and-effect direction in mind.
>
> The two are linked by
>
> $$r^2=b_{yx}\,b_{xy}$$

> [!note] Coefficient of determination
> ==$R^2$ is the proportion of the total variation in $Y$ that is explained by the regression.== For a straight line $R^2=r^2$.
>
> For example, $R^2=0.87$ means 87% of the variation in $Y$ is explained by $X$, and 13% is due to other factors.

![[m243-correlation-types.png]]

---

## Problem types you will face

### Type 1 — Pearson's $r$ from raw data

**Recognise it:** "Compute the correlation coefficient and interpret."

**Recipe:** make a table with $x,\ y,\ x^2,\ y^2,\ xy$ and get the five totals. Compute $S_{xx},S_{yy},S_{xy}$, then $r$.

Finish with one sentence on sign and strength: $|r|$ above 0.9 is very high, 0.7 to 0.9 high, 0.5 to 0.7 moderate, 0.3 to 0.5 low, and below 0.3 negligible.

> [!example] Practice 1 (TF style): hours studied and marks
> $x$ (hours): 2, 3, 5, 6, 8, 9, 10, 13. $y$ (marks): 45, 50, 58, 60, 68, 74, 76, 85.
>
> **Step 1 — calculation table.**
>
> | $x$ | $y$ | $x^2$ | $y^2$ | $xy$ |
> |---|---|---|---|---|
> | 2 | 45 | 4 | 2025 | 90 |
> | 3 | 50 | 9 | 2500 | 150 |
> | 5 | 58 | 25 | 3364 | 290 |
> | 6 | 60 | 36 | 3600 | 360 |
> | 8 | 68 | 64 | 4624 | 544 |
> | 9 | 74 | 81 | 5476 | 666 |
> | 10 | 76 | 100 | 5776 | 760 |
> | 13 | 85 | 169 | 7225 | 1105 |
> | **56** | **516** | **488** | **34590** | **3965** |
>
> **Step 2 — building blocks.**
>
> $$S_{xx}=488-\frac{56^2}{8}=96$$
>
> $$S_{yy}=34590-\frac{516^2}{8}=1308$$
>
> $$S_{xy}=3965-\frac{56\times516}{8}=353$$
>
> **Step 3 — correlation.**
>
> $$r=\frac{353}{\sqrt{96\times1308}}=\frac{353}{354.35}=0.996$$
>
> **Answer.** **$r=0.996$**, a very high positive correlation: students who study more hours get higher marks almost perfectly linearly.

> [!example] Practice 2 (TF style): price and demand (negative correlation)
> $x$ (price): 10, 12, 15, 18, 20. $y$ (demand): 40, 38, 30, 26, 20.
>
> **Given.** $\sum x=75$, $\sum y=154$, $\sum x^2=1193$, $\sum y^2=5020$, $\sum xy=2174$, $n=5$.
>
> **Step 1 — building blocks.**
>
> $$S_{xx}=1193-\frac{75^2}{5}=68$$
>
> $$S_{yy}=5020-\frac{154^2}{5}=276.8$$
>
> $$S_{xy}=2174-\frac{75\times154}{5}=-136$$
>
> **Step 2 — correlation.**
>
> $$r=\frac{-136}{\sqrt{68\times276.8}}=-0.991$$
>
> **Answer.** **$r=-0.991$**, a very high negative correlation: as price rises, demand falls.

---

### Type 2 — the two regression lines and predictions

**Recognise it:** "Find the two regression lines", "most likely value of $X$ when $Y=\dots$".

**Recipe:** compute $b_{yx}$ and $b_{xy}$ from the same $S$ values. Write both lines through $(\bar x,\bar y)$, and then predict.

> [!tip] Which line for which prediction?
> ==Regress the variable you want on the variable you know.==
>
> "Most likely age of husband when wife is 30" means husband from wife, so use the line of husband on wife.

> [!example] Practice 3 (TF style): heights of fathers and sons
> Father $x$: 65, 66, 67, 67, 68, 69, 70, 72. Son $y$: 67, 68, 65, 68, 72, 72, 69, 71. Find both lines, the son's height when the father is 70, and the father's height when the son is 66.
>
> **Given.** $\sum x=544$, $\sum y=552$, $\sum x^2=37028$, $\sum y^2=38132$, $\sum xy=37560$, $n=8$.
>
> **Step 1 — means.**
>
> $$\bar x=68 \qquad \bar y=69$$
>
> **Step 2 — building blocks.**
>
> $$S_{xx}=37028-\frac{544^2}{8}=36$$
>
> $$S_{yy}=38132-\frac{552^2}{8}=44$$
>
> $$S_{xy}=37560-\frac{544\times552}{8}=24$$
>
> **Step 3 — regression coefficients.**
>
> $$b_{yx}=\frac{24}{36}=0.667$$
>
> $$b_{xy}=\frac{24}{44}=0.545$$
>
> **Step 4 — the two lines.**
>
> $Y$ on $X$: $y-69=0.667(x-68)$, so
>
> $$y=23.67+0.667x$$
>
> $X$ on $Y$: $x-68=0.545(y-69)$, so
>
> $$x=30.36+0.545y$$
>
> **Step 5 — predictions.**
>
> Son when father is 70:
>
> $$y=23.67+0.667(70)=70.33\ \text{inches}$$
>
> Father when son is 66:
>
> $$x=30.36+0.545(66)=66.36\ \text{inches}$$
>
> **Check.**
>
> $$r=\sqrt{0.667\times0.545}=0.603$$
>
> **Answer.** ==$y=23.67+0.667x$== and ==$x=30.36+0.545y$==; son **70.33 in**, father **66.36 in**; $r=0.603$, a moderate positive correlation.

> [!example] Practice 4 (TF style): regression lines given, find means and $r$
> The two regression lines are $8x-10y+66=0$ and $40x-18y=214$, and $\sigma_x^2=9$. Find $\bar x$, $\bar y$, $r$ and $\sigma_y$.
>
> **Step 1 — means.** Both lines pass through $(\bar x,\bar y)$, so solve them together.
>
> $$\begin{aligned}
> 40x-50y &= -330 && \text{(first line} \times 5)\\
> 40x-18y &= 214 && \text{(second line)}\\
> 32y &= 544 && \text{(subtract)}\\
> \bar y &= 17
> \end{aligned}$$
>
> Then $8x=10(17)-66=104$, so
>
> $$\bar x=13$$
>
> **Step 2 — which line is which?** Assume the first is $Y$ on $X$:
>
> $$y=0.8x+6.6 \quad\Rightarrow\quad b_{yx}=0.8$$
>
> and the second is $X$ on $Y$:
>
> $$x=0.45y+5.35 \quad\Rightarrow\quad b_{xy}=0.45$$
>
> Since $b_{yx}b_{xy}=0.36\le1$, the assumption is valid. (Had the product exceeded 1, we would swap them.)
>
> **Step 3 — correlation.**
>
> $$r=+\sqrt{0.8\times0.45}=0.6$$
>
> **Step 4 — SD of $y$.**
>
> $$\sigma_y=\frac{b_{yx}\sigma_x}{r}=\frac{0.8\times3}{0.6}=4$$
>
> **Answer.** **$\bar x=13$, $\bar y=17$, $r=0.6$, $\sigma_y=4$.**

> [!example] Past TF 2019-20 Q6(a) (17 marks): signal strength on distance
> **Given.** Distance $X$ (m): 13, 12, 17, 19, 14, 15, 15, 8, 13, 3. Strength $Y$ (dB): 34.4, 38.4, 30.4, 29.7, 30.1, 33.9, 32.8, 35.2, 34.9, 36.8. $n=10$.
>
> **Step 1 — totals** (from the $x,\ y,\ x^2,\ xy$ table):
>
> $$\sum x=129 \qquad \sum y=336.6 \qquad \sum x^2=1851 \qquad \sum xy=4256.7$$
>
> $$\bar x=12.9 \qquad \bar y=33.66$$
>
> **Step 2 — building blocks.**
>
> $$S_{xx}=1851-\frac{129^2}{10}=186.9$$
>
> $$S_{xy}=4256.7-\frac{129\times336.6}{10}=-85.44$$
>
> **Step 3 — slope.**
>
> $$b=\frac{-85.44}{186.9}=-0.4571$$
>
> **Step 4 — intercept.**
>
> $$a=33.66-(-0.4571)(12.9)=39.557$$
>
> **Step 5 — prediction at 10 m.**
>
> $$\hat y=39.557-4.571=34.99\ \text{dB}$$
>
> **Answer.** ==$\hat y=39.557-0.4571x$==; predicted strength at 10 m **= 34.99 dB**. The signal weakens by about 0.46 dB per extra metre.

> [!example] Past TF 2021-22 Q7(a) (20 marks): loblolly pines, both coefficients and $r$
> **Step 1 — totals.** Build the $x,\ y,\ x^2,\ y^2,\ xy$ table for the 15 pairs.
>
> $$n=15 \qquad \sum x=7.296 \qquad \sum y=788{,}510$$
>
> $$\sum x^2=3.620132 \qquad \sum y^2=47{,}598{,}707{,}772 \qquad \sum xy=403{,}686.826$$
>
> **Means:**
>
> $$\bar x=0.4864 \qquad \bar y=52{,}567.33$$
>
> **Step 2 — building blocks.**
>
> $$S_{xx}=3.620132-\frac{7.296^2}{15}=0.0713576$$
>
> $$S_{yy}=6{,}148{,}839{,}765.3$$
>
> $$S_{xy}=403{,}686.826-\frac{7.296\times788{,}510}{15}=20{,}155.562$$
>
> **Step 3 — (i) regression coefficient of $y$ on $x$.**
>
> $$b_{yx}=\frac{20155.562}{0.0713576}=282{,}458.5$$
>
> $$\hat y=-84{,}820.5+282{,}458.5\,x$$
>
> **Step 4 — regression coefficient of $x$ on $y$.**
>
> $$b_{xy}=\frac{20155.562}{6{,}148{,}839{,}765.3}=3.278\times10^{-6}$$
>
> $$\hat x=0.3141+3.278\times10^{-6}\,y$$
>
> **Step 5 — (ii) correlation.**
>
> $$r=\frac{20155.562}{\sqrt{0.0713576\times6{,}148{,}839{,}765.3}}=0.962$$
>
> **Check.**
>
> $$\sqrt{282458.5\times3.278\times10^{-6}}=0.962$$
>
> **Answer.** **$r=0.962$**, a very strong positive relationship. Denser wood is stronger, and $r^2=0.926$ means 92.6% of the variation in modulus of rupture is explained by specific gravity.

---

### Type 3 — regression with SST, SSR, SSE and $R^2$

**Recognise it:** "Find SSR and SST", "coefficient of determination".

**Recipe:** fit the line as in Type 2, then use $SST=S_{yy}$, $SSR=bS_{xy}$, $SSE=SST-SSR$, $R^2=SSR/SST$.

![[m243-regression-residuals.png]]

> [!example] Past TF 2020-21 Q6(a) (15 marks): experience and performance
> **Given.** $X$: 16, 12, 18, 4, 3. $Y$: 87, 88, 89, 68, 58. $n=5$.
>
> **Step 1 — calculation table.**
>
> | $x$ | $y$ | $x^2$ | $xy$ | $y^2$ |
> |---|---|---|---|---|
> | 16 | 87 | 256 | 1392 | 7569 |
> | 12 | 88 | 144 | 1056 | 7744 |
> | 18 | 89 | 324 | 1602 | 7921 |
> | 4 | 68 | 16 | 272 | 4624 |
> | 3 | 58 | 9 | 174 | 3364 |
> | **53** | **390** | **749** | **4496** | **31222** |
>
> $$\bar x=10.6 \qquad \bar y=78$$
>
> **Step 2 — building blocks.**
>
> $$S_{xx}=749-561.8=187.2$$
>
> $$S_{xy}=4496-4134=362$$
>
> $$S_{yy}=31222-30420=802$$
>
> **Step 3 — (i) fitted line.**
>
> $$b=\frac{362}{187.2}=1.9338$$
>
> $$a=78-1.9338(10.6)=57.50$$
>
> $$\hat y=57.50+1.934x$$
>
> **Step 4 — (ii) sums of squares.**
>
> $$SST=802$$
>
> $$SSR=1.9338\times362=700.02$$
>
> $$SSE=802-700.02=101.98$$
>
> **Step 5 — (iii) coefficient of determination.**
>
> $$R^2=\frac{700.02}{802}=0.873$$
>
> **Answer.** ==$\hat y=57.50+1.934x$==, **SST = 802, SSR = 700.02, SSE = 101.98, $R^2$ = 0.873**: 87.3% of the variation in rating is explained by experience.

> [!example] Practice 5 (TF style): advertising and sales
> $x$: 1, 2, 3, 4, 5, 6. $y$: 3, 5, 4, 7, 9, 10.
>
> **Given.** $\sum x=21$, $\sum y=38$, $\sum x^2=91$, $\sum y^2=280$, $\sum xy=158$. Means $\bar x=3.5$, $\bar y=6.333$.
>
> **Step 1 — building blocks.**
>
> $$S_{xx}=91-73.5=17.5$$
>
> $$S_{xy}=158-133=25$$
>
> $$S_{yy}=280-240.67=39.33$$
>
> **Step 2 — fitted line.**
>
> $$b=\frac{25}{17.5}=1.4286$$
>
> $$a=6.333-1.4286(3.5)=1.333$$
>
> $$\hat y=1.333+1.429x$$
>
> **Step 3 — sums of squares.**
>
> $$SST=39.33$$
>
> $$SSR=1.4286\times25=35.71$$
>
> $$SSE=3.62$$
>
> **Step 4 — $R^2$.**
>
> $$R^2=0.908$$
>
> **Answer.** About **90.8%** of the variation in sales is explained by advertising.

---

### Type 4 — rank correlation (with and without ties)

**Recognise it:** "Compute the rank correlation coefficient", judges' rankings, or marks with repeated values.

**Recipe:** rank each variable separately in the same direction (smallest = 1). Give tied values the average rank. Find $D$ and $D^2$, check $\sum D=0$, and add $\frac{m^3-m}{12}$ for every tie group.

> [!example] Practice 6 (TF style): two judges, no ties
> Ranks given by judge A: 1, 2, 3, 4, 5, 6, 7, 8. By judge B: 3, 1, 4, 2, 6, 8, 5, 7.
>
> **Step 1 — differences.** $D=-2,\ 1,\ -1,\ 2,\ -1,\ -2,\ 2,\ 1$ (sum 0), so
>
> $$\sum D^2=20$$
>
> **Step 2 — rank correlation.**
>
> $$r_s=1-\frac{6(20)}{8(63)}=1-\frac{120}{504}=0.762$$
>
> **Answer.** **$r_s=0.762$**, fairly high agreement between the judges.

> [!example] Practice 7 (TF style): marks, no ties, rank them yourself
> $x$: 48, 33, 40, 9, 16, 65, 24. $y$: 13, 15, 24, 6, 4, 20, 9.
>
> **Step 1 — rank table.**
>
> | $x$ | $R_x$ | $y$ | $R_y$ | $D$ | $D^2$ |
> |---|---|---|---|---|---|
> | 48 | 6 | 13 | 4 | 2 | 4 |
> | 33 | 4 | 15 | 5 | −1 | 1 |
> | 40 | 5 | 24 | 7 | −2 | 4 |
> | 9 | 1 | 6 | 2 | −1 | 1 |
> | 16 | 2 | 4 | 1 | 1 | 1 |
> | 65 | 7 | 20 | 6 | 1 | 1 |
> | 24 | 3 | 9 | 3 | 0 | 0 |
> | | | | | **0** | **12** |
>
> **Step 2 — rank correlation.**
>
> $$r_s=1-\frac{6(12)}{7(48)}=1-\frac{72}{336}=0.786$$
>
> **Answer.** **$r_s=0.786$.**

> [!example] Practice 8 (TF style): ties in both variables
> Test X: 68, 64, 75, 50, 64, 80, 75, 40, 55, 64. Test Y: 62, 58, 68, 45, 81, 60, 68, 48, 50, 70.
>
> **Step 1 — rank table.**
>
> | X | $R_x$ | Y | $R_y$ | $D$ | $D^2$ |
> |---|---|---|---|---|---|
> | 68 | 7 | 62 | 6 | 1 | 1 |
> | 64 | 5 | 58 | 4 | 1 | 1 |
> | 75 | 8.5 | 68 | 7.5 | 1 | 1 |
> | 50 | 2 | 45 | 1 | 1 | 1 |
> | 64 | 5 | 81 | 10 | −5 | 25 |
> | 80 | 10 | 60 | 5 | 5 | 25 |
> | 75 | 8.5 | 68 | 7.5 | 1 | 1 |
> | 40 | 1 | 48 | 2 | −1 | 1 |
> | 55 | 3 | 50 | 3 | 0 | 0 |
> | 64 | 5 | 70 | 9 | −4 | 16 |
> | | | | | **0** | **72** |
>
> **Step 2 — ties and corrections.**
>
> In X, 64 occurs 3 times, sharing ranks 4, 5 and 6, so each gets 5 and the correction is 2.
>
> In X, 75 occurs twice, sharing ranks 8 and 9, so each gets 8.5 and the correction is 0.5.
>
> In Y, 68 occurs twice and gets 7.5, correction 0.5.
>
> $$\text{Total correction}=2+0.5+0.5=3$$
>
> **Step 3 — rank correlation.**
>
> $$r_s=1-\frac{6(72+3)}{10(99)}=1-\frac{450}{990}=0.545$$
>
> **Answer.** **$r_s=0.545$**, a moderate positive rank correlation.

> [!example] Practice 9 (TF style): sales and expenses with many ties
> Sales $x$: 10, 15, 12, 15, 18, 20, 12, 25. Expenses $y$: 8, 10, 10, 12, 15, 15, 9, 20.
>
> **Step 1 — ranks of $x$.** 10→1; the two 12s share ranks 2 and 3, so each gets 2.5; the two 15s get 4.5; 18→6; 20→7; 25→8.
>
> **Step 2 — ranks of $y$.** 8→1; 9→2; the two 10s get 3.5; 12→5; the two 15s get 6.5; 20→8.
>
> **Step 3 — differences.** In order:
>
> $R_x$ = 1, 4.5, 2.5, 4.5, 6, 7, 2.5, 8
>
> $R_y$ = 1, 3.5, 3.5, 5, 6.5, 6.5, 2, 8
>
> $D$ = 0, 1, −1, −0.5, −0.5, 0.5, 0.5, 0
>
> $$\sum D^2=3$$
>
> **Step 4 — correction.** Two tie groups of size 2 in $x$ and two in $y$:
>
> $$4\times0.5=2$$
>
> **Step 5 — rank correlation.**
>
> $$r_s=1-\frac{6(3+2)}{8(63)}=1-\frac{30}{504}=0.940$$
>
> **Answer.** **$r_s=0.940$.**

---

### Type 5 — second-degree polynomial and $R^2$

**Recognise it:** "Fit a second degree polynomial / parabola", or data that rise and then fall.

**Recipe:** make a table with $x,\ y,\ x^2,\ x^3,\ x^4,\ xy,\ x^2y$, write the three normal equations, and solve by elimination. Then $R^2=1-SSE/SST$ with $SSE=\sum(y-\hat y)^2$.

> [!tip] Shortcut for equally spaced $x$
> With an odd number of equally spaced points, use $X=x-\text{middle value}$. Then $\sum X=\sum X^3=0$ and the equations almost solve themselves.
>
> Give the answer in terms of $X$ and state what $X$ is, or convert back.

> [!example] Practice 10 (TF style): direct method
> $x$: 0, 1, 2, 3, 4. $y$: 1.0, 1.8, 1.3, 2.5, 6.3.
>
> **Step 1 — calculation table.**
>
> | $x$ | $y$ | $x^2$ | $x^3$ | $x^4$ | $xy$ | $x^2y$ |
> |---|---|---|---|---|---|---|
> | 0 | 1.0 | 0 | 0 | 0 | 0 | 0 |
> | 1 | 1.8 | 1 | 1 | 1 | 1.8 | 1.8 |
> | 2 | 1.3 | 4 | 8 | 16 | 2.6 | 5.2 |
> | 3 | 2.5 | 9 | 27 | 81 | 7.5 | 22.5 |
> | 4 | 6.3 | 16 | 64 | 256 | 25.2 | 100.8 |
> | **10** | **12.9** | **30** | **100** | **354** | **37.1** | **130.3** |
>
> **Step 2 — normal equations.**
>
> $$\begin{aligned}
> 12.9 &= 5a+10b+30c && (1)\\
> 37.1 &= 10a+30b+100c && (2)\\
> 130.3 &= 30a+100b+354c && (3)
> \end{aligned}$$
>
> **Step 3 — eliminate $a$.**
>
> $$\begin{aligned}
> (2)-2\times(1):\quad 11.3 &= 10b+40c\\
> (3)-6\times(1):\quad 52.9 &= 40b+174c
> \end{aligned}$$
>
> **Step 4 — solve.**
>
> $$c=0.55 \qquad b=-1.07 \qquad a=1.42$$
>
> **Step 5 — fitted curve.**
>
> $$\hat y=1.42-1.07x+0.55x^2$$
>
> **Step 6 — $R^2$.** Fitted values are 1.42, 0.90, 1.48, 3.16, 5.94.
>
> $$SSE=1.584$$
>
> $$SST=\sum y^2-n\bar y^2=51.87-33.282=18.588$$
>
> $$R^2=1-\frac{1.584}{18.588}=0.915$$
>
> **Answer.** ==$\hat y=1.42-1.07x+0.55x^2$==, **$R^2=0.915$**.

> [!example] Practice 11 (TF style): shortcut with $X=x-3$
> $x$: 1, 2, 3, 4, 5. $y$: 2, 6, 7, 8, 10.
>
> **Step 1 — shift the origin.** Let $X=x-3$, so $X=-2,-1,0,1,2$.
>
> $$\sum X=0 \qquad \sum X^2=10 \qquad \sum X^3=0 \qquad \sum X^4=34$$
>
> $$\sum y=33 \qquad \sum Xy=18 \qquad \sum X^2y=62$$
>
> **Step 2 — the middle equation gives $b$ at once.**
>
> $$\sum Xy=b\sum X^2 \;\Rightarrow\; 18=10b \;\Rightarrow\; b=1.8$$
>
> **Step 3 — the other two equations.**
>
> $$\begin{aligned}
> 33 &= 5a+10c\\
> 62 &= 10a+34c
> \end{aligned}$$
>
> Doubling the first and subtracting gives $-4=14c$, so
>
> $$c=-0.2857 \qquad a=7.1714$$
>
> **Step 4 — fitted curve.**
>
> $$\hat y=7.171+1.8X-0.286X^2,\quad X=x-3$$
>
> **Step 5 — $R^2$.** The fitted values 2.43, 5.09, 7.17, 8.69, 9.63 give
>
> $$SSE=1.657 \qquad SST=35.2$$
>
> $$R^2=0.953$$
>
> **Answer.** ==$\hat y=7.171+1.8X-0.286X^2$== with $X=x-3$; **$R^2=0.953$**.

---

## Extra practice

> [!question]- Extra practice (try first, then open for answers)
> **E1.** $x$: 1 to 7; $y$: 9, 8, 10, 12, 11, 13, 14. Find $r$ and the line of $y$ on $x$.
>
> Answer: $S_{xx}=28$, $S_{yy}=28$, $S_{xy}=26$, so $r=0.929$ and $\hat y=7.286+0.929x$.
>
> **E2.** $x$: 12, 18, 18, 25, 30, 30, 30, 42; $y$: 20, 25, 22, 30, 30, 35, 28, 40. Find the rank correlation.
>
> Answer: $\sum D^2=8$; the corrections are 0.5 (18) + 2 (30) in $x$ and 0.5 (30) in $y$, total 3. So $r_s=1-6(11)/504=0.869$.
>
> **E3.** Fit $y=a+bx+cx^2$ to $x$: 1 to 6; $y$: 5, 9, 12, 13, 12, 9.
>
> Answer: $\hat y=-1.5+7.232x-0.911x^2$, with $R^2=0.996$.
>
> **E4.** $b_{yx}=-0.6$ and $b_{xy}=-1.2$. Find $r$.
>
> Answer: $r=-\sqrt{0.72}=-0.849$ (it takes the common negative sign).
>
> **E5.** Can $b_{yx}=1.5$ and $b_{xy}=0.8$?
>
> Answer: No, because then $r^2=1.2>1$, which is impossible.

---

Previous: [[S5 Moments Skewness and Kurtosis]] · Next: [[S7 Sampling Distributions CLT and Confidence Intervals]] · Home: [[index]]
