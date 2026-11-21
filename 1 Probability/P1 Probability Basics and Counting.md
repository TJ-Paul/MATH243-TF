---
title: "P1 · Probability Basics and Counting"
tags: [math243, probability, basics]
---

# P1 · Probability Basics and Counting

> [!abstract] Why this matters for the TF
> No past term final asks "define a sample space", but every probability question is built on this note.
>
> ==Combinations== are used every time you pick balls, pens or cars at random (2021-22 Q6(c), 2023-24 Q2(b)).
>
> The ==addition and complement rules== appear inside almost every Bayes and distribution question.
>
> Treat this note as a warm-up: solve every problem below until counting feels automatic.

## Core tools (memorize)

> [!important] Memorize: the only formulas you need here
> **Classical probability**
>
> Use when all outcomes are equally likely.
>
> $$
> P(A)=\frac{n(A)}{n(S)}
> $$
>
> **Complement**
>
> Use for "at least one" and "neither".
>
> $$
> P(A^c)=1-P(A)
> $$
>
> **Addition rule (two events)**
>
> Use for "A or B".
>
> $$
> P(A\cup B)=P(A)+P(B)-P(A\cap B)
> $$
>
> **Addition rule (three events)**
>
> $$
> P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(A\cap B)-P(A\cap C)-P(B\cap C)+P(A\cap B\cap C)
> $$
>
> **De Morgan**
>
> Use for "neither".
>
> $$
> (A\cup B)^c=A^c\cap B^c
> $$
>
> $$
> P(\text{neither})=1-P(A\cup B)
> $$
>
> **Combination**
>
> Order does not matter. Use for "drawn at random", committees, samples.
>
> $$
> {}^nC_r=\binom{n}{r}=\frac{n!}{r!\,(n-r)!}
> $$
>
> **Permutation**
>
> Order matters. Use for arrangements and posts like president/secretary.
>
> $$
> {}^nP_r=\frac{n!}{(n-r)!}
> $$
>
> **Odds in favour of $A$ are $a:b$**
>
> $$
> P(A)=\frac{a}{a+b}
> $$
>
> **Odds against $A$ are $a:b$**
>
> $$
> P(A)=\frac{b}{a+b}
> $$

Two short definitions are enough for this course.

Events are ==mutually exclusive== if they cannot happen together, so $P(A\cap B)=0$.

Events are ==exhaustive== if together they cover the whole sample space.

A set of events that is both mutually exclusive and exhaustive is a **partition**. That is exactly what you need for the total probability rule and Bayes' theorem in [[P2 Conditional Probability Independence and Bayes]].

> [!warning] Do not mix these up
> Mutually exclusive ("cannot happen together") is not the same as independent ("one does not change the chance of the other").
>
> 2023-24 Q1(a) asked about this; the exam answer is in [[P2 Conditional Probability Independence and Bayes]].

---

## Problem types you will face

### Type 1 — Drawing items at random (combinations)

**How to recognise it:** "a bag contains ... balls, ... are drawn at random", "a committee is chosen", "a lot contains defective items".

**Recipe:**

1. Count the total number of samples with $\binom{N}{n}$.
2. Count the favourable samples by choosing each colour separately and multiplying.
3. Divide.

**General formula (three types of item):**

$$
P(\text{exactly } x \text{ of type 1 and } y \text{ of type 2})=\frac{\binom{N_1}{x}\binom{N_2}{y}\binom{N_3}{n-x-y}}{\binom{N}{n}}
$$

> [!example] Example 1.1 (lecture) — black balls
> **Given.** A bag has 10 balls, 4 black and 6 white. Three are drawn without replacement. Find $P(\text{exactly 2 black})$.
>
> **Step 1 — Total samples.**
>
> $$
> \binom{10}{3}=120
> $$
>
> **Step 2 — Favourable samples.** Choose 2 of the 4 black and 1 of the 6 white.
>
> $$
> \binom42\binom61=6\times6=36
> $$
>
> **Answer.**
>
> $$
> P(\text{exactly 2 black})=\frac{36}{120}=\mathbf{0.3}
> $$

> [!example] Practice 1.2 (TF style) — three colours
> **Given.** A bag contains 5 red, 4 white and 3 blue balls. Three balls are drawn at random. Find the probability that (i) all are red, (ii) one of each colour is drawn, (iii) at least one is blue.
>
> **Step 1 — Total samples.** There are 12 balls.
>
> $$
> \binom{12}{3}=220
> $$
>
> **Step 2 — (i) All red.** There are $\binom53=10$ ways.
>
> $$
> P=\frac{10}{220}=\frac1{22}\approx0.0455
> $$
>
> **Step 3 — (ii) One of each colour.** There are $\binom51\binom41\binom31=60$ ways.
>
> $$
> P=\frac{60}{220}=\frac3{11}\approx0.2727
> $$
>
> **Step 4 — (iii) At least one blue.** This has many cases, so use the complement "no blue". With no blue, all 3 balls come from the 9 non-blue balls: $\binom93=84$ ways.
>
> $$
> P(\text{at least one blue})=1-\frac{84}{220}=\frac{34}{55}\approx0.6182
> $$
>
> **Answer.** (i) **0.0455**, (ii) **0.2727**, (iii) **0.6182**.

> [!example] Practice 1.3 (TF style) — committee
> **Given.** A committee of 4 is chosen at random from 6 men and 4 women. Find the probability that it contains (i) exactly 2 women, (ii) at least one woman.
>
> **Step 1 — Total committees.**
>
> $$
> \binom{10}{4}=210
> $$
>
> **Step 2 — (i) Exactly 2 women.** Choose 2 of the 4 women and 2 of the 6 men.
>
> $$
> \binom42\binom62=6\times15=90
> $$
>
> $$
> P=\frac{90}{210}=\frac37\approx0.4286
> $$
>
> **Step 3 — (ii) At least one woman.** The complement is "no woman", i.e. all 4 are men: $\binom64=15$ ways.
>
> $$
> P(\text{at least one woman})=1-\frac{15}{210}=\frac{13}{14}\approx0.9286
> $$
>
> **Answer.** (i) **0.4286**, (ii) **0.9286**.

> [!example] Practice 1.4 — cards
> **Given.** Two cards are drawn from a well-shuffled deck of 52. Find the probability that (i) one is a king and the other a queen, (ii) both are of the same suit.
>
> **Step 1 — Total.**
>
> $$
> \binom{52}{2}=1326
> $$
>
> **Step 2 — (i) King and queen.** One king from 4 and one queen from 4 gives $4\times4=16$ ways.
>
> $$
> P=\frac{16}{1326}=\frac{8}{663}\approx0.0121
> $$
>
> **Step 3 — (ii) Same suit.** Choose the suit (4 ways), then 2 cards of that suit, $\binom{13}{2}=78$. Total $4\times78=312$.
>
> $$
> P=\frac{312}{1326}=\frac4{17}\approx0.2353
> $$
>
> **Answer.** (i) **0.0121**, (ii) **0.2353**.

> [!tip] Permutation or combination?
> Ask: "If I swap two chosen objects, is it a different result?"
>
> Choosing a team of 3 from 5 is a combination: ${}^5C_3=10$.
>
> Electing a president, vice-president and secretary from 5 is a permutation: ${}^5P_3=60$.
>
> In TF bag problems it is almost always combinations.

---

### Type 2 — Overlapping events (addition rule and "neither")

**How to recognise it:** percentages of people who do A, do B, and do both.

**Recipe:**

1. Write $P(A)$, $P(B)$ and $P(A\cap B)$.
2. Use the addition rule for "at least one".
3. Use $1-P(A\cup B)$ for "neither".
4. Use $P(A)-P(A\cap B)$ for "A only".

> [!example] Example 2.1 (lecture) — newspapers
> **Given.** In an office of 100 employees, 75 read an English daily, 50 read a Bangla daily and 40 read both. Find the probability that a randomly chosen employee reads at least one paper, and neither.
>
> $P(E)=0.75$, $P(B)=0.50$, $P(E\cap B)=0.40$.
>
> **Step 1 — At least one.**
>
> $$
> P(E\cup B)=0.75+0.50-0.40=0.85
> $$
>
> **Step 2 — Neither.**
>
> $$
> P(\text{neither})=1-0.85=0.15
> $$
>
> **Answer.** At least one: **0.85**. Neither: **0.15**.

> [!example] Practice 2.2 — rings and necklaces (lecture style)
> **Given.** At a college, 60% of students wear neither a ring nor a necklace, 20% wear a ring and 30% wear a necklace. Find the probability that a student wears both.
>
> **Step 1 — At least one.** "Neither" is 0.60, so
>
> $$
> P(R\cup N)=1-0.60=0.40
> $$
>
> **Step 2 — Rearrange the addition rule.**
>
> $$
> \begin{aligned}
> P(R\cap N)&=P(R)+P(N)-P(R\cup N)\\
> &=0.20+0.30-0.40\\
> &=0.10
> \end{aligned}
> $$
>
> **Answer.** $P(\text{both})=\mathbf{0.10}$.

> [!example] Practice 2.3 — subjects
> **Given.** In a class, 60% passed Mathematics, 50% passed Physics and 30% passed both. Find the probability that a student passed (i) at least one subject, (ii) neither, (iii) Mathematics only.
>
> **Step 1 — (i) At least one.**
>
> $$
> P(M\cup P)=0.6+0.5-0.3=0.8
> $$
>
> **Step 2 — (ii) Neither.**
>
> $$
> P(\text{neither})=1-0.8=0.2
> $$
>
> **Step 3 — (iii) Mathematics only.**
>
> $$
> P(M \text{ only})=P(M)-P(M\cap P)=0.6-0.3=0.3
> $$
>
> **Answer.** (i) **0.8**, (ii) **0.2**, (iii) **0.3**.

> [!example] Example 2.4 (lecture) — men or brown eyes
> **Given.** A class has 10 men and 20 women; half of each group has brown eyes. Find $P(\text{man or brown eyes})$.
>
> **Step 1 — Count.** Of 30 people, 10 are men, 15 have brown eyes and 5 are brown-eyed men.
>
> **Step 2 — Addition rule.**
>
> $$
> P(M\cup Br)=\frac{10}{30}+\frac{15}{30}-\frac{5}{30}=\frac{20}{30}
> $$
>
> **Answer.** $P=\mathbf{2/3}$.

---

### Type 3 — Odds

**How to recognise it:** "odds in favour" or "odds against".

**Recipe:**

1. Convert the odds to probabilities first.
2. Then solve as a normal (usually independent) probability problem.

**Odds in favour $a:b$:**

$$
P=\frac{a}{a+b}
$$

**Odds against $a:b$:**

$$
P=\frac{b}{a+b}
$$

> [!example] Example 3.1 (lecture) — two students
> **Given.** The odds against X solving a problem are $8:6$ and the odds in favour of Y solving it are $14:16$. They work independently. Find the probability that (a) both solve, (b) at least one solves, (c) exactly one solves.
>
> **Step 1 — Convert odds to probabilities.**
>
> $$
> P(X)=\frac{6}{14}=\frac37,\qquad P(\bar X)=\frac47
> $$
>
> $$
> P(Y)=\frac{14}{30}=\frac7{15},\qquad P(\bar Y)=\frac8{15}
> $$
>
> **Step 2 — (a) Both solve.**
>
> $$
> P(X\cap Y)=\frac37\cdot\frac7{15}=\frac15
> $$
>
> **Step 3 — (b) At least one solves.**
>
> $$
> \begin{aligned}
> P(\text{at least one})&=1-P(\bar X)P(\bar Y)\\
> &=1-\frac47\cdot\frac8{15}\\
> &=1-\frac{32}{105}=\frac{73}{105}\approx0.695
> \end{aligned}
> $$
>
> **Step 4 — (c) Exactly one solves.** Remove the "both" case from "at least one".
>
> $$
> P(\text{exactly one})=\frac{73}{105}-\frac{21}{105}=\frac{52}{105}\approx0.495
> $$
>
> **Answer.** (a) **1/5**, (b) **0.695**, (c) **0.495**.

> [!example] Practice 3.2
> **Given.** The odds against A hitting a target are $3:2$ and the odds in favour of B hitting it are $4:5$. They shoot independently. Find the probability that (i) both hit, (ii) exactly one hits, (iii) the target is hit.
>
> **Step 1 — Convert odds.**
>
> $$
> P(A)=\frac{2}{5},\qquad P(B)=\frac{4}{9}
> $$
>
> **Step 2 — (i) Both hit.**
>
> $$
> \frac25\cdot\frac49=\frac{8}{45}\approx0.178
> $$
>
> **Step 3 — (ii) Exactly one hits.**
>
> $$
> \begin{aligned}
> P(A)P(\bar B)+P(\bar A)P(B)&=\frac25\cdot\frac59+\frac35\cdot\frac49\\
> &=\frac{10+12}{45}=\frac{22}{45}\approx0.489
> \end{aligned}
> $$
>
> **Step 4 — (iii) Target is hit (at least one hits).**
>
> $$
> 1-P(\bar A)P(\bar B)=1-\frac35\cdot\frac59=1-\frac13=\frac23
> $$
>
> **Answer.** (i) **0.178**, (ii) **0.489**, (iii) **2/3**.

---

### Type 4 — "At least one" with independent events

**How to recognise it:** several independent parts, trials or people; "at least one fails", "the problem is solved".

**Recipe:**

$$
P(\text{at least one})=1-P(\text{none})
$$

and $P(\text{none})$ is a product of complements.

> [!example] Practice 4.1 — machine components
> **Given.** A machine has three independent components that fail with probabilities 0.10, 0.20 and 0.05. Find the probability that (i) at least one fails, (ii) exactly one fails.
>
> **Step 1 — (i) None fails.**
>
> $$
> P(\text{none fails})=0.9\times0.8\times0.95=0.684
> $$
>
> $$
> P(\text{at least one fails})=1-0.684=0.316
> $$
>
> **Step 2 — (ii) Exactly one fails.** Add the three "only this one fails" cases.
>
> $$
> \begin{aligned}
> P&=0.1(0.8)(0.95)+0.9(0.2)(0.95)+0.9(0.8)(0.05)\\
> &=0.076+0.171+0.036\\
> &=0.283
> \end{aligned}
> $$
>
> **Answer.** (i) **0.316**, (ii) **0.283**.

> [!example] Practice 4.2 — how many trials?
> **Given.** How many times must a fair die be rolled so that the probability of getting at least one six is at least 0.9?
>
> **Step 1 — Set up the inequality.**
>
> $$
> P(\text{at least one six in } n \text{ rolls})=1-\left(\frac56\right)^n\ge0.9
> $$
>
> $$
> \left(\frac56\right)^n\le0.1
> $$
>
> **Step 2 — Take logs.**
>
> $$
> n\ge\frac{\ln 0.1}{\ln(5/6)}=12.6
> $$
>
> **Step 3 — Check.** $1-(5/6)^{13}=0.9065$, while 12 rolls give only $0.8878$.
>
> **Answer.** $n=\mathbf{13}$ rolls.

---

## Extra practice

> [!question]- Answers (try first)
> **1.** From 8 red and 4 green pens, 3 are chosen. P(exactly 1 green)?
>
> *Answer:* $\binom41\binom82/\binom{12}3=112/220=28/55\approx0.509$.
>
> **2.** $P(A)=0.5$, $P(B)=0.4$, $P(A\cup B)=0.7$. Find $P(A\cap B)$ and $P(\text{neither})$.
>
> *Answer:* 0.2 and 0.3.
>
> **3.** Odds in favour of an event are $5:3$. Find its probability.
>
> *Answer:* $5/8$.
>
> **4.** Three coins are tossed. P(at least one head)?
>
> *Answer:* $1-1/8=7/8$.
>
> **5.** In how many ways can a president, secretary and treasurer be chosen from 7 members?
>
> *Answer:* ${}^7P_3=210$.
>
> **6.** Two dice are thrown. P(sum = 8)?
>
> *Answer:* $5/36$.

Previous: [[index]] · Next: [[P2 Conditional Probability Independence and Bayes]] · Home: [[index]]
