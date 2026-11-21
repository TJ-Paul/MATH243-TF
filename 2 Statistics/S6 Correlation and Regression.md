---
title: "S6 · Correlation and Regression"
tags: [math243, statistics, correlation, regression]
---

# S6 · Correlation and Regression

**Why this matters for the term final.** A correlation or regression question has appeared in every single one of the last five term finals. 2019-20 Q6(a): regression line of signal strength on distance and a prediction. 2020-21 Q6(a): fit a regression line, find SSR and SST. 2021-22 Q7(a): both regression coefficients and the correlation coefficient for 15 trees (20 marks). 2022-23 Q4(b): difference between correlation and regression plus a **rank correlation with tied ranks**, and Q4(c): two regression lines, predictions and a comment on $r$. 2023-24 Q4(b): Pearson's $r$, the **tie-corrected rank correlation**, and Q4(c): objectives of correlation and regression plus fitting a **second-degree polynomial** and $R^2$. The 2019-20, 2020-21 and 2021-22 questions are fully solved below; the 2022-23 and 2023-24 ones are in [[TF 2022-23 Solutions]] and [[TF 2023-24 Solutions]], and this note contains fresh practice for each of those types.

---

## 1. Objectives, and the difference between correlation and regression

> [!important] Memorize: Definitions
> ==**Correlation** analysis measures the strength and direction of the (linear) relationship between two variables.== It treats both variables symmetrically and gives a single number, the correlation coefficient $r$, between −1 and +1.
>
> ==**Regression** analysis finds the mathematical equation (the average functional relationship) by which one variable (dependent, $Y$) can be estimated or predicted from another (independent, $X$).== It is not symmetric: the regression of $Y$ on $X$ differs from that of $X$ on $Y$.

**Objectives of correlation analysis (2023-24 Q4c).** To find whether two variables are related at all; to measure how strong the relationship is and whether it is positive or negative; to judge whether a linear model is worth fitting; and, through $r^2$, to tell what fraction of the variation of one variable is linearly explained by the other. **Objectives of regression analysis.** To find the equation that describes the average relationship between a dependent variable and one or more independent variables; to predict or estimate unknown values of the dependent variable for given values of the independent variable (for example yield for a given fertilizer dose); to measure the effect of a unit change in $X$ on $Y$ (the regression coefficient); and to measure the error of prediction and the goodness of fit ($R^2$).

**Difference between correlation and regression (2022-23 Q4b).** Correlation measures the degree of association between two variables, while regression describes the nature of the relationship and is used for prediction. In correlation both variables are random and treated alike, so $r_{xy} = r_{yx}$; in regression one variable is dependent and the other independent, so the two regression coefficients $b_{yx}$ and $b_{xy}$ are generally different. The correlation coefficient is a pure number independent of units and of change of origin and scale; regression coefficients have units (units of $Y$ per unit of $X$) and depend on change of scale (though not of origin). Correlation does not imply cause and effect, whereas regression is usually set up with a cause-and-effect direction in mind. Finally, $r$ is limited to $[-1, 1]$ but a regression coefficient can take any real value; they are linked by $r^2 = b_{yx}\,b_{xy}$.

## 2. Scatter diagram

Before calculating anything, a scatter diagram shows whether the relationship is linear, positive or negative, strong or weak (see [[S2 Frequency Distributions and Graphs]] for interpretation).

![[m243-correlation-types.png]]

## 3. Karl Pearson's correlation coefficient

> [!important] Memorize: Pearson's correlation coefficient
> $$r = \frac{\operatorname{Cov}(x,y)}{\sigma_x\sigma_y} = \frac{S_{xy}}{\sqrt{S_{xx}\,S_{yy}}}$$
> with the computing forms
> $$S_{xx} = \sum x^2 - \frac{(\sum x)^2}{n},\quad S_{yy} = \sum y^2 - \frac{(\sum y)^2}{n},\quad S_{xy} = \sum xy - \frac{(\sum x)(\sum y)}{n}$$
> Equivalent one-line form: $$r = \frac{n\sum xy - \sum x\sum y}{\sqrt{\left[n\sum x^2 - (\sum x)^2\right]\left[n\sum y^2 - (\sum y)^2\right]}}$$

**Properties of $r$.** It always lies between −1 and +1. $r = +1$ means perfect positive linear relationship, $r = -1$ perfect negative, and $r = 0$ no **linear** relationship (there may still be a curved one). $r$ is independent of change of origin and scale: if $u = (x - a)/h$ and $v = (y - b)/k$ with $h, k > 0$, then $r_{uv} = r_{xy}$; this lets us simplify data before computing. $r$ is the geometric mean of the two regression coefficients, $r = \pm\sqrt{b_{yx}b_{xy}}$, taking the common sign of the coefficients. $r$ is symmetric, $r_{xy} = r_{yx}$.

**How to interpret the size of $r$.** A rough scale used in comments: $|r|$ from 0.9 to 1 is very high, 0.7 to 0.9 high, 0.5 to 0.7 moderate, 0.3 to 0.5 low, and below 0.3 negligible. Always mention the sign (direction) and the strength, and if possible $r^2$ (the proportion of variation explained). Example comment: "$r = 0.95$ indicates a very high positive correlation between the ages of husbands and wives: older husbands tend to have older wives."

## 4. Spearman's rank correlation coefficient

When data are ranks (judges' rankings) or when we only care about order, we rank each variable separately and compute Spearman's coefficient.

> [!important] Memorize: Spearman's rank correlation (no ties)
> $$r_s = 1 - \frac{6\sum D^2}{n(n^2 - 1)}$$
> where $D$ is the difference between the two ranks of each item and $n$ is the number of pairs. $r_s$ lies between −1 and +1, and it equals Pearson's $r$ computed on the ranks.

> [!important] Memorize: Spearman's rank correlation with tied (repeated) ranks
> When some values are repeated, each tied value receives the **average** of the ranks they would occupy. For example, if two values tie for 3rd and 4th place, both get 3.5; if three values tie for 4th, 5th and 6th, all get 5. Then a correction factor is added for **every** group of ties in **either** variable:
> $$r_s = 1 - \frac{6\left[\sum D^2 + \sum \frac{m^3 - m}{12}\right]}{n(n^2 - 1)}$$
> where $m$ is the number of times a value is repeated, and the sum $\sum \frac{m^3 - m}{12}$ runs over all tied groups in $x$ and in $y$. A value repeated twice contributes $\frac{8-2}{12} = 0.5$; three times contributes $\frac{27-3}{12} = 2$; four times contributes $\frac{64-4}{12} = 5$.

> [!warning] Common mistake
> Rank both variables in the **same direction** (both smallest = 1, as in the lecture, or both largest = 1). Forgetting the correction factor for ties, or forgetting ties in one of the two variables, is the most common way to lose marks. Check that $\sum D = 0$; if not, your ranks are wrong.

**Fresh practice (ties in both variables).** Marks of 10 students in two tests:

| Student | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Test X | 68 | 64 | 75 | 50 | 64 | 80 | 75 | 40 | 55 | 64 |
| Test Y | 62 | 58 | 68 | 45 | 81 | 60 | 68 | 48 | 50 | 70 |
| Rank $R_x$ | 7 | 5 | 8.5 | 2 | 5 | 10 | 8.5 | 1 | 3 | 5 |
| Rank $R_y$ | 6 | 4 | 7.5 | 1 | 10 | 5 | 7.5 | 2 | 3 | 9 |
| $D$ | 1 | 1 | 1 | 1 | −5 | 5 | 1 | −1 | 0 | −4 |
| $D^2$ | 1 | 1 | 1 | 1 | 25 | 25 | 1 | 1 | 0 | 16 |

Ranking X from smallest: 40 (1), 50 (2), 55 (3), then 64 appears three times occupying ranks 4, 5, 6, so each gets 5; 68 gets 7; 75 appears twice for ranks 8 and 9, each gets 8.5; 80 gets 10. Ranking Y: 45 (1), 48 (2), 50 (3), 58 (4), 60 (5), 62 (6), 68 twice for ranks 7 and 8 → 7.5 each, 70 (9), 81 (10). $\sum D = 0$ as a check, and $\sum D^2 = 72$.

Correction: in X, 64 repeated $m = 3$ times gives $\frac{27-3}{12} = 2$ and 75 repeated $m = 2$ times gives $0.5$; in Y, 68 repeated twice gives $0.5$. Total correction $= 3$.

$$r_s = 1 - \frac{6(72 + 3)}{10(100 - 1)} = 1 - \frac{450}{990} = 1 - 0.4545 = 0.545$$

Comment: there is a moderate positive rank correlation; students who rank high in test X tend to rank high in test Y, but not consistently.

## 5. Regression lines and the method of least squares

> [!important] Memorize: The two regression lines
> **Regression of $Y$ on $X$** (to predict $Y$ from $X$): $$\hat{y} = a + b_{yx}x, \qquad b_{yx} = \frac{S_{xy}}{S_{xx}}, \qquad a = \bar{y} - b_{yx}\bar{x}$$ or equivalently $y - \bar{y} = b_{yx}(x - \bar{x})$.
>
> **Regression of $X$ on $Y$** (to predict $X$ from $Y$): $$\hat{x} = c + b_{xy}y, \qquad b_{xy} = \frac{S_{xy}}{S_{yy}}, \qquad x - \bar{x} = b_{xy}(y - \bar{y})$$
>
> Also $b_{yx} = r\dfrac{\sigma_y}{\sigma_x}$, $b_{xy} = r\dfrac{\sigma_x}{\sigma_y}$, $r^2 = b_{yx}b_{xy}$, and ==both lines pass through the point $(\bar{x}, \bar{y})$==.

**Why least squares?** For each observed point, the vertical distance between the observed $y_i$ and the line's value $\hat{y}_i$ is the **residual** $e_i = y_i - \hat{y}_i$. The **method of least squares** chooses $a$ and $b$ so that the sum of squared residuals $\sum (y_i - a - bx_i)^2$ is as small as possible. Setting the partial derivatives with respect to $a$ and $b$ equal to zero gives the **normal equations**:

$$\sum y = na + b\sum x, \qquad \sum xy = a\sum x + b\sum x^2$$

Solving them gives exactly the formulas above. In the exam you may either solve the normal equations or use the $S_{xy}/S_{xx}$ formula; both earn full marks if shown clearly.

![[m243-regression-residuals.png]]

> [!tip] Exam trick: which line for which prediction?
> "Most likely age of husband when wife's age is 30" means predict husband ($X$) from wife ($Y$), so use the regression of $X$ on $Y$. "Most likely age of wife when husband is 25" uses $Y$ on $X$. ==Always regress the variable you want to predict on the variable you know.==

## 6. Goodness of fit: SST, SSR, SSE and $R^2$

> [!important] Memorize: Sums of squares and coefficient of determination
> $$SST = \sum (y_i - \bar{y})^2 = S_{yy} \quad(\text{total variation})$$
>
> $$SSR = \sum (\hat{y}_i - \bar{y})^2 = b\,S_{xy} \quad(\text{explained by regression})$$
>
> $$SSE = \sum (y_i - \hat{y}_i)^2 = SST - SSR \quad(\text{unexplained, residual})$$
>
> $$R^2 = \frac{SSR}{SST} = 1 - \frac{SSE}{SST}, \qquad 0 \le R^2 \le 1$$
> ==$R^2$ (coefficient of determination) is the proportion of the total variation in $Y$ that is explained by the regression.== For a straight line, $R^2 = r^2$.

Interpretation example: $R^2 = 0.87$ means 87% of the variation in performance is explained by experience, and 13% is due to other factors.

> [!example] Past TF 2020-21 Q6(a) (15 marks): Linear regression, SSR and SST
> **Data.** Experience $X$: 16, 12, 18, 4, 3. Performance $Y$: 87, 88, 89, 68, 58. $n = 5$.
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
> $\bar{x} = 10.6$, $\bar{y} = 78$.
> $$S_{xx} = 749 - \frac{53^2}{5} = 749 - 561.8 = 187.2, \quad S_{xy} = 4496 - \frac{53\times390}{5} = 4496 - 4134 = 362, \quad S_{yy} = 31222 - \frac{390^2}{5} = 802$$
> **(i) Regression of $Y$ on $X$:** $b = \dfrac{362}{187.2} = 1.9338$, $a = 78 - 1.9338\times10.6 = 57.50$. So ==$\hat{y} = 57.50 + 1.934x$==. Each extra year of experience raises the expected rating by about 1.93 points.
>
> **(ii) Sums of squares:** $SST = S_{yy} = 802$. $SSR = b\,S_{xy} = 1.9338\times362 = 700.02$. $SSE = 802 - 700.02 = 101.98$.
>
> **(iii) If asked:** $R^2 = 700.02/802 = 0.873$, and $r = \sqrt{0.873} = 0.934$ (positive since $b > 0$). About 87.3% of the variation in performance rating is explained by experience.

> [!example] Past TF 2019-20 Q6(a) (17 marks): Regression of signal strength on distance
> **Data.** Distance $X$ (m): 13, 12, 17, 19, 14, 15, 15, 8, 13, 3. Strength $Y$ (dB): 34.4, 38.4, 30.4, 29.7, 30.1, 33.9, 32.8, 35.2, 34.9, 36.8. $n = 10$.
>
> Column totals (make the $x$, $y$, $x^2$, $xy$ table exactly as above): $\sum x = 129$, $\sum y = 336.6$, $\sum x^2 = 1851$, $\sum xy = 4256.7$ (and $\sum y^2 = 11406.52$ if $r$ is needed). $\bar{x} = 12.9$, $\bar{y} = 33.66$.
> $$S_{xx} = 1851 - \frac{129^2}{10} = 1851 - 1664.1 = 186.9, \qquad S_{xy} = 4256.7 - \frac{129\times336.6}{10} = 4256.7 - 4342.14 = -85.44$$
>
> $$b = \frac{-85.44}{186.9} = -0.4571, \qquad a = 33.66 - (-0.4571)(12.9) = 33.66 + 5.897 = 39.557$$
> ==$\hat{y} = 39.557 - 0.4571x$==. The negative slope means the signal weakens by about 0.46 dB for every extra metre.
>
> **Prediction at 10 m:** $\hat{y} = 39.557 - 0.4571\times10 = 34.99$ dB.
> (For reference, $r = -0.714$: a fairly strong negative linear relationship.)

> [!example] Past TF 2021-22 Q7(a) (20 marks): Regression coefficients and $r$ for loblolly pines
> **Data.** 15 pairs of specific gravity $x$ (g/cm³) and modulus of rupture $y$ (kPa) as in the paper. Build the table with columns $x, y, x^2, y^2, xy$ (a calculator in statistics mode is a big time-saver). The totals are:
> $$n = 15,\ \sum x = 7.296,\ \sum y = 788{,}510,\ \sum x^2 = 3.620132,\ \sum y^2 = 47{,}598{,}707{,}772,\ \sum xy = 403{,}686.826$$
> $\bar{x} = 0.4864$, $\bar{y} = 52{,}567.33$.
> $$S_{xx} = 3.620132 - \frac{7.296^2}{15} = 0.0713576, \quad S_{yy} = 47{,}598{,}707{,}772 - \frac{788510^2}{15} = 6{,}148{,}839{,}765.3$$
>
> $$S_{xy} = 403{,}686.826 - \frac{7.296\times788{,}510}{15} = 20{,}155.562$$
> **(i) Regression coefficients.**
> $$b_{yx} = \frac{S_{xy}}{S_{xx}} = \frac{20155.562}{0.0713576} = 282{,}458.5, \qquad a = \bar{y} - b_{yx}\bar{x} = 52567.33 - 282458.5(0.4864) = -84{,}820.5$$
> so $\hat{y} = -84{,}820.5 + 282{,}458.5\,x$: an increase of 0.01 g/cm³ in specific gravity raises the modulus of rupture by about 2825 kPa on average.
> $$b_{xy} = \frac{S_{xy}}{S_{yy}} = \frac{20155.562}{6{,}148{,}839{,}765.3} = 3.278\times10^{-6}, \qquad \hat{x} = 0.3141 + 3.278\times10^{-6}\,y$$
> **(ii) Correlation coefficient.**
> $$r = \frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}} = \frac{20155.562}{\sqrt{0.0713576\times6148839765.3}} = 0.962$$
> Check: $\sqrt{b_{yx}b_{xy}} = \sqrt{282458.5\times3.278\times10^{-6}} = \sqrt{0.9259} = 0.962$. ✓
>
> **Interpretation.** $r = 0.962$ shows a very strong positive linear relationship: denser wood (higher specific gravity) is much stronger. $r^2 = 0.926$, so about 92.6% of the variation in modulus of rupture is explained by specific gravity.

## 7. Fitting a second-degree polynomial (parabola)

When the scatter plot is curved (for example yield first rises with fertilizer and then falls), a straight line is not suitable. We fit $\hat{y} = a + bx + cx^2$ by least squares.

> [!important] Memorize: Normal equations for $y = a + bx + cx^2$
> $$\sum y = na + b\sum x + c\sum x^2$$
>
> $$\sum xy = a\sum x + b\sum x^2 + c\sum x^3$$
>
> $$\sum x^2y = a\sum x^2 + b\sum x^3 + c\sum x^4$$
> Make a table with columns $x, y, x^2, x^3, x^4, xy, x^2y$, substitute the totals and solve the three equations by elimination. Then $R^2 = 1 - \dfrac{SSE}{SST}$ with $SSE = \sum(y - \hat{y})^2$ and $SST = \sum(y - \bar{y})^2$.

> [!tip] Exam trick: shift $x$ to simplify
> If the $x$-values are equally spaced, replace $x$ by $X = x - \bar{x}$ (for an odd number of points) so that $\sum X = \sum X^3 = 0$. The equations then split into easy pieces. Just remember to convert back to the original $x$ at the end (or keep the answer in $X$ and state $X = x - \bar{x}$).

**Fresh practice.** Fit $y = a + bx + cx^2$ to $x$: 0, 1, 2, 3, 4 and $y$: 1.0, 1.8, 1.3, 2.5, 6.3, and find $R^2$.

| $x$ | $y$ | $x^2$ | $x^3$ | $x^4$ | $xy$ | $x^2y$ |
|---|---|---|---|---|---|---|
| 0 | 1.0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 1.8 | 1 | 1 | 1 | 1.8 | 1.8 |
| 2 | 1.3 | 4 | 8 | 16 | 2.6 | 5.2 |
| 3 | 2.5 | 9 | 27 | 81 | 7.5 | 22.5 |
| 4 | 6.3 | 16 | 64 | 256 | 25.2 | 100.8 |
| **10** | **12.9** | **30** | **100** | **354** | **37.1** | **130.3** |

The normal equations are $12.9 = 5a + 10b + 30c$, $37.1 = 10a + 30b + 100c$ and $130.3 = 30a + 100b + 354c$. Multiply the first by 2 and subtract from the second: $11.3 = 10b + 40c$, so $b = 1.13 - 4c$. Multiply the first by 6 and subtract from the third: $52.9 = 40b + 174c$. Substituting $b$: $52.9 = 45.2 - 160c + 174c = 45.2 + 14c$, so $c = 0.55$. Then $b = 1.13 - 2.2 = -1.07$ and $a = (12.9 + 10.7 - 16.5)/5 = 1.42$. The fitted curve is ==$\hat{y} = 1.42 - 1.07x + 0.55x^2$==.

Fitted values: 1.42, 0.90, 1.48, 3.16, 5.94. Residuals: −0.42, 0.90, −0.18, −0.66, 0.36, so $SSE = 0.1764 + 0.81 + 0.0324 + 0.4356 + 0.1296 = 1.584$. $\bar{y} = 2.58$ and $SST = \sum y^2 - n\bar{y}^2 = 51.87 - 33.282 = 18.588$. Therefore $R^2 = 1 - 1.584/18.588 = 0.915$: the parabola explains about 91.5% of the variation in $y$.

---

> [!question]- Self-check
> **1. $b_{yx} = 0.8$ and $b_{xy} = 0.45$. Find $r$.**
> $r = +\sqrt{0.8\times0.45} = +\sqrt{0.36} = 0.6$ (positive because both coefficients are positive).
>
> **2. The two regression lines are $y = 2 + 0.5x$ and $x = 4 + 0.8y$. Find $\bar{x}, \bar{y}$.**
> Solve together: $x = 4 + 0.8(2 + 0.5x) = 5.6 + 0.4x$, so $x = 9.33$, $y = 6.67$.
>
> **3. Three values tie in $x$ and two in $y$. What correction is added to $\sum D^2$?**
> $\frac{27-3}{12} + \frac{8-2}{12} = 2 + 0.5 = 2.5$.
>
> **4. If $r = -0.9$, what fraction of the variation of $Y$ is explained by the linear regression on $X$?**
> $r^2 = 0.81$, i.e. 81%.
>
> **5. Does $r = 0$ mean $X$ and $Y$ are unrelated?**
> No; it means there is no linear relationship. A strong curved relationship can still exist.

---

Previous: [[S5 Moments Skewness and Kurtosis]] · Next: [[S7 Sampling Distributions CLT and Confidence Intervals]] · Home: [[index]]
