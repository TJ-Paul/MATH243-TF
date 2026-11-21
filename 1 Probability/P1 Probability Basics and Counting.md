---
title: "P1 · Probability Basics and Counting"
tags: [math243, probability, basics]
---

# P1 · Probability Basics and Counting

> [!abstract] Why this matters for the term final
> No past term final asks a pure "define sample space" question, but every probability question you will meet (Bayes in 2019-20 Q7(a), 2022-23 Q1, 2023-24 Q1; joint distributions in 2023-24 Q2(b); hypergeometric in 2021-22 Q6(c)) is built on the ideas in this note: events, the addition rule, complements and combinations. In particular, ==combinations ($^nC_r$)== are used every time you pick balls, pens or cars "at random without replacement". Learn this note well and the later notes become easy.

---

## 1. What probability measures

Probability is a number between 0 and 1 that tells us how likely an outcome is. A probability of 0 means the event cannot happen, and a probability of 1 means it will certainly happen. Every other event lies somewhere in between. We use probability when we cannot predict the exact result of an experiment, but we do know the list of results that are possible. For example, when we toss a fair coin we cannot say whether a head or a tail will appear, but we know the only possibilities are H and T, and each has probability 0.5.

## 2. Random experiment, sample space and events

A **random experiment** is an experiment that satisfies three conditions. First, all the possible outcomes are known in advance. Second, on any single performance we cannot say exactly which outcome will occur. Third, the experiment can be repeated under identical conditions. Tossing a coin, rolling a die and drawing a card from a deck are all random experiments.

> [!important] Memorize: Sample space and event
> The **sample space** $S$ is the set of ==all possible outcomes== of a random experiment. An **event** is any subset of the sample space, that is, a collection of some of the outcomes. An event "occurs" if the outcome of the experiment is one of its elements.

For a single die, $S=\{1,2,3,4,5,6\}$. The event "an even number appears" is $A=\{2,4,6\}$. For two tosses of a coin, $S=\{HH, HT, TH, TT\}$, and the event "at least one head" is $\{HH, HT, TH\}$. When a pair of dice is thrown, the sample space has $6\times 6=36$ equally likely ordered pairs, which is something you should remember because dice problems appear often in lectures.

The **complement** of an event $A$, written $A^c$ or $\bar A$, is the set of outcomes in $S$ that are not in $A$. The **union** $A\cup B$ is the event that $A$ or $B$ (or both) occurs. The **intersection** $A\cap B$ is the event that both $A$ and $B$ occur.

### Types of events

Two events are **mutually exclusive** (or disjoint) when they cannot happen together, which means $A\cap B=\emptyset$. Getting a 1 and getting a 6 on one roll of a die are mutually exclusive, because a single roll cannot show both faces.

A collection of events is **exhaustive** when together they cover the whole sample space, so at least one of them must happen. For a die, the events $\{1,2\}$, $\{3,4\}$ and $\{5,6\}$ are exhaustive (and also mutually exclusive). Events that are both mutually exclusive and exhaustive form a **partition** of the sample space; this idea is the backbone of the total probability rule and Bayes' theorem in [[P2 Conditional Probability Independence and Bayes]].

Events are **equally likely** when they have the same chance of happening. Head and tail of a fair coin are equally likely; the six faces of a fair die are equally likely.

> [!warning] Common mistake
> Do not confuse **mutually exclusive** with **independent**. Mutually exclusive means "cannot happen together" ($P(A\cap B)=0$). Independent means "one does not change the chance of the other" ($P(A\cap B)=P(A)P(B)$). These are completely different ideas, and in fact two events with non-zero probabilities can never be both. This exact point was asked in 2023-24 Q1(a), and it is explained fully in [[P2 Conditional Probability Independence and Bayes]].

### De Morgan's laws

De Morgan's laws connect complements, unions and intersections. In words, the complement of a union is the intersection of the complements, and the complement of an intersection is the union of the complements.

$$
(A\cup B)^c = A^c\cap B^c \qquad\qquad (A\cap B)^c = A^c\cup B^c
$$

These are very useful for "neither" and "at least one" questions. "Neither $A$ nor $B$ happens" is $A^c\cap B^c=(A\cup B)^c$, so $P(\text{neither}) = 1-P(A\cup B)$.

For example, let $S=\{a,b,c,d,e\}$, $A=\{a,b,c\}$ and $B=\{b,d\}$. Then $A\cap B=\{b\}$, so $(A\cap B)^c=\{a,c,d,e\}$. Checking with De Morgan, $A^c=\{d,e\}$ and $B^c=\{a,c,e\}$, whose union is $\{a,c,d,e\}$. Both sides agree.

---

## 3. Definitions of probability

### Classical (a priori) definition

If an experiment has $n(S)$ equally likely, mutually exclusive outcomes, and $n(A)$ of them are favourable to event $A$, then

$$
P(A)=\frac{n(A)}{n(S)}=\frac{\text{number of favourable outcomes}}{\text{total number of outcomes}} .
$$

This definition only works when the outcomes are equally likely and finite in number. For example, the probability of an even number on a fair die is $3/6=0.5$, and the probability of choosing a girl from a class of 12 girls and 18 boys is $12/30=0.4$.

### Axiomatic definition

The modern definition says a probability is any rule $P$ that assigns a number to each event and obeys three axioms.

> [!important] Memorize: The three axioms of probability
> First, $P(A)\ge 0$ for every event $A$. Second, $P(S)=1$. Third, if $A_1, A_2, \dots$ are mutually exclusive events, then $P(A_1\cup A_2\cup\cdots)=P(A_1)+P(A_2)+\cdots$.

From these axioms we can prove everything else, for example that $P(\emptyset)=0$, that $0\le P(A)\le 1$, and the complement rule

$$
P(A^c)=1-P(A).
$$

The complement rule is one of the most useful tricks in the whole course. Whenever a question says "at least one", it is almost always easier to compute $1-P(\text{none})$.

### Relative frequency (empirical) definition

If an experiment is repeated $n$ times and event $A$ occurs $f$ times, then the relative frequency $f/n$ approaches $P(A)$ as $n$ becomes very large. This is how probabilities such as "1 in every 1000 glass items has a bubble" (2019-20 Q8(a)) are obtained in practice.

---

## 4. The addition rule

> [!important] Memorize: Addition rule
> For any two events,
> $$
> P(A\cup B)=P(A)+P(B)-P(A\cap B).
> $$
> If $A$ and $B$ are mutually exclusive, $P(A\cap B)=0$ and the rule becomes $P(A\cup B)=P(A)+P(B)$.
> For three events,
> $$
> P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(A\cap B)-P(A\cap C)-P(B\cap C)+P(A\cap B\cap C).
> $$

The reason we subtract $P(A\cap B)$ is that the outcomes in both $A$ and $B$ were counted twice, once inside $P(A)$ and once inside $P(B)$. If you picture two overlapping circles inside a rectangle (a Venn diagram), the union is "A only" plus "overlap" plus "B only", and simply adding the two circles counts the overlap twice, so we remove it once.

**Worked example (lecture style).** In an office of 100 employees, 75 read an English daily, 50 read a Bangla daily and 40 read both. What is the probability that a randomly selected employee reads at least one of the two papers, and what is the probability that the employee reads neither?

Let $E$ be "reads English" and $B$ be "reads Bangla". Then $P(E)=0.75$, $P(B)=0.50$ and $P(E\cap B)=0.40$. By the addition rule,

$$
P(E\cup B)=0.75+0.50-0.40=0.85 .
$$

By De Morgan, "reads neither" is the complement of "reads at least one", so $P(\text{neither})=1-0.85=0.15$. So 85% read at least one paper and 15% read neither.

---

## 5. Counting: permutations and combinations

When the outcomes are equally likely we need to count them, and counting is done with the multiplication principle, permutations and combinations.

The **multiplication principle** says that if one job can be done in $m$ ways and, after it, a second job can be done in $n$ ways, then the two jobs together can be done in $m\times n$ ways. This is why two dice give $6\times 6=36$ outcomes.

> [!important] Memorize: Permutation and combination
> A **permutation** is an arrangement where ==order matters==. The number of ways to arrange $r$ objects chosen from $n$ distinct objects is
> $$
> ^nP_r=\frac{n!}{(n-r)!}.
> $$
> A **combination** is a selection where ==order does not matter==. The number of ways to choose $r$ objects from $n$ is
> $$
> ^nC_r=\binom{n}{r}=\frac{n!}{r!\,(n-r)!}.
> $$

The way to decide which to use is to ask yourself, "If I swap two of the chosen objects, do I get a different result?" Electing a president, vice-president and secretary from 5 members is a permutation, because swapping the president and the secretary gives a different committee: $^5P_3 = 5!/2! = 60$ ways. Choosing a team of 3 from 5 members is a combination, because the same three people form the same team in any order: $^5C_3=10$ ways.

> [!tip] Exam trick: "drawn at random" from a bag
> In almost every bag problem (balls, pens, cars, markers), the items are drawn together or without replacement and their order is irrelevant, so you use combinations. The probability of getting exactly $x$ items of type 1 and $y$ items of type 2 is
> $$
> P=\frac{\binom{\text{type-1 total}}{x}\binom{\text{type-2 total}}{y}\binom{\text{others}}{\text{rest}}}{\binom{\text{all items}}{\text{sample size}}} .
> $$
> This one formula is behind 2021-22 Q6(c) (hypergeometric), 2023-24 Q2(b) (joint distribution of pens) and many lecture problems.

**Worked example.** A bag contains 10 balls of which 4 are black and 6 are white. Three balls are drawn at random without replacement. Find the probability that exactly 2 are black.

The total number of ways to choose 3 balls from 10 is $\binom{10}{3}=120$. To get exactly 2 black balls we must choose 2 of the 4 black balls and 1 of the 6 white balls, which can be done in $\binom{4}{2}\binom{6}{1}=6\times 6=36$ ways. Hence

$$
P(\text{exactly 2 black})=\frac{36}{120}=0.3 .
$$

**Worked example.** Two cards are drawn from a standard deck of 52 without replacement. Find the probability that both are aces. There are $\binom{4}{2}=6$ ways to pick two aces and $\binom{52}{2}=1326$ ways to pick any two cards, so the probability is $6/1326=1/221\approx 0.0045$. You can also get the same answer with the multiplication law, $\frac{4}{52}\times\frac{3}{51}=\frac{1}{221}$, which is a nice check.

---

## 6. Odds

Odds compare the chance that an event happens with the chance that it does not happen. They are a ratio, not a probability.

> [!important] Memorize: Odds and probability
> If $P(A)=p$, then the **odds in favour** of $A$ are $\dfrac{p}{1-p}$ and the **odds against** $A$ are $\dfrac{1-p}{p}$. Odds in favour and odds against are reciprocals of each other.
> If the odds in favour of $A$ are $a:b$, then
> $$
> P(A)=\frac{a}{a+b}, \qquad P(A^c)=\frac{b}{a+b}.
> $$

If the odds in favour of red balls are $3:7$, then out of every $3+7=10$ balls, 3 are red, so $P(\text{red})=0.3$ and $P(\text{blue})=0.7$. If the probability of an athlete winning is 0.2, the odds against winning are $0.8/0.2=4$, written $4:1$, which means for every one chance of winning there are four chances of losing.

**Worked example (lecture Problem 1).** The odds against student X solving a problem are $8:6$, and the odds in favour of student Y solving it are $14:16$. They work independently. Find the probability that at least one solves the problem.

From "odds against X are $8:6$", we get $P(\bar X)=\frac{8}{14}=\frac47$ and $P(X)=\frac{6}{14}=\frac37$. From "odds in favour of Y are $14:16$", we get $P(Y)=\frac{14}{30}=\frac{7}{15}$ and $P(\bar Y)=\frac{8}{15}$. Since they work independently, the probability that neither solves it is $P(\bar X)P(\bar Y)=\frac47\cdot\frac{8}{15}=\frac{32}{105}$. Therefore

$$
P(\text{at least one solves})=1-\frac{32}{105}=\frac{73}{105}\approx 0.695 .
$$

The probability that both solve is $\frac37\cdot\frac{7}{15}=\frac{1}{5}$, and the probability that exactly one solves is $\frac{73}{105}-\frac{21}{105}=\frac{52}{105}$.

---

## 7. Joint probability tables

When we classify people by two characteristics, it is very helpful to arrange the probabilities in a two-way table. The inside cells are joint probabilities like $P(A\cap B)$, and the row and column totals are the single (marginal) probabilities. This is exactly the structure that becomes a joint probability distribution in [[P4 Joint Marginal and Conditional Distributions]].

**Worked example (lecture Problem 3).** A class contains 10 men and 20 women. Half of the men and half of the women have brown eyes. Find the probability that a person chosen at random is a man or has brown eyes.

There are 30 people, 10 men, and $5+10=15$ brown-eyed people, of whom 5 are men. So $P(M)=\frac{10}{30}$, $P(Br)=\frac{15}{30}$ and $P(M\cap Br)=\frac{5}{30}$. Then

$$
P(M\cup Br)=\frac{10}{30}+\frac{15}{30}-\frac{5}{30}=\frac{20}{30}=\frac23 .
$$

---

> [!question]- Self-check
> **1.** A die is rolled. Are "even" and "greater than 3" mutually exclusive? *No: they share 4 and 6.*
> **2.** $P(A)=0.5$, $P(B)=0.4$, $P(A\cup B)=0.7$. Find $P(A\cap B)$. *$0.5+0.4-0.7=0.2$.*
> **3.** How many ways can 2 pens be chosen from 8? *$\binom82=28$.*
> **4.** Odds in favour of an event are $5:3$. What is its probability? *$5/8$.*
> **5.** Why use $1-P(\text{none})$ for "at least one"? *Because "none" is a single simple case, while "at least one" splits into many cases.*

Previous: [[index]] · Next: [[P2 Conditional Probability Independence and Bayes]] · Home: [[index]]
