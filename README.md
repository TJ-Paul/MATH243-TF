# MATH 243 — Probability and Statistics: Term Final Guide

A complete, exam-focused study guide for **MATH 243 (Probability and Statistics), L-2/T-2 CSE**. It teaches every topic in the course order (probability first, then statistics), works through every probability and statistics question from the last five term finals (2019-20 to 2023-24), and ends with full solutions of the 2022-23 and 2023-24 papers.

**Read it online:** https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME/

> Replace the link above with your own address after the first deployment (see "Publishing the website" below).

## What is inside

| Folder | Contents |
|---|---|
| `index.md` | Home page and reading order |
| `1 Probability/` | P1–P9: basics, conditional probability and Bayes, random variables, joint distributions, expectation and Chebyshev, binomial family, Poisson, normal, exponential |
| `2 Statistics/` | S1–S10: data and sampling, graphs, central tendency, dispersion, moments/skewness/kurtosis, correlation and regression, CLT and confidence intervals, hypothesis tests, chi-square, ANOVA |
| `3 Exam Toolkit/` | Formula sheet, map of every past TF question, answer templates and strategy |
| `4 TF Solutions/` | Complete solutions of the 2023-24 and 2022-23 term finals |
| `assets/` | Diagrams used in the notes |
| `resources/` | Original lecture slides, statistical tables and the past-paper PDF |

## Reading the notes on your own computer

There are three ways to read the notes offline. Pick whichever suits you.

### Option 1 — Obsidian (easiest, recommended)

1. Download this repository: click the green **Code** button on GitHub, then **Download ZIP**, and unzip it.
2. Install [Obsidian](https://obsidian.md) (free).
3. In Obsidian choose **Open folder as vault** and select the unzipped folder.
4. Open `index.md` and start reading. Formulas, diagrams, callout boxes and links all work out of the box.

### Option 2 — As a website in your browser (needs Node.js)

This builds exactly the same website as the online version and opens it at `http://localhost:8080`.

1. Install [Node.js](https://nodejs.org) version 22 or newer, and [Git](https://git-scm.com).
2. Download or clone this repository.
3. Open a terminal in the repository folder and run:

```bash
bash scripts/build-site.sh
```

4. Open `http://localhost:8080` in your browser. Press `Ctrl + C` in the terminal to stop the server.

The first run downloads the [Quartz](https://quartz.jzhao.xyz) site generator into a hidden `.quartz-build` folder, which takes a minute; later runs are fast. On Windows, run the command from **Git Bash**.

### Option 3 — Download the ready-built website

After the website has been published once, the built site lives on the `gh-pages` branch.

1. On GitHub, switch the branch selector to **gh-pages**, then **Code → Download ZIP**, and unzip it.
2. Open a terminal inside the unzipped folder and run:

```bash
npx serve .
```

3. Open the address it prints (usually `http://localhost:3000`).

A small local server is needed because the website uses clean page addresses, which do not work when you double-click the HTML files directly.

## Publishing the website (for the repository owner)

The website is built automatically by GitHub Actions using [Quartz](https://quartz.jzhao.xyz), which understands Obsidian links, callouts, LaTeX formulas and Mermaid diagrams.

1. Create a new **public** repository on GitHub and upload the contents of this folder (so that `index.md` sits at the top level of the repository) to the `main` branch.
2. Go to **Settings → Actions → General → Workflow permissions** and select **Read and write permissions**, then save.
3. Push any change (or open **Actions → Build and publish website → Run workflow**). Wait for the workflow to finish; it creates a `gh-pages` branch.
4. Go to **Settings → Pages**, set **Source** to **Deploy from a branch**, choose **gh-pages** and **/ (root)**, then save.
5. After a minute the site is live at `https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME/`. Put that link at the top of this README.

Every later push to `main` rebuilds and republishes the site automatically.

## How to study with this guide

Read the probability notes P1–P9 and then the statistics notes S1–S10 in order, solving every "Past TF" example yourself before reading the worked solution. Use `3 Exam Toolkit/TF Question Map.md` to practise every older question, read the formula sheet daily, and finally sit the 2022-23 and 2023-24 papers as timed mock exams before checking `4 TF Solutions/`.
