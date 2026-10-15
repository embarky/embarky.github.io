---
title: "Predicting subscriber churn for a streaming service"
summary: "A gradient-boosted model that flags at-risk subscribers 30 days out, with a cost-sensitive threshold tied to retention budget."
date: 2026-07-20
tags: ["Python", "XGBoost", "SHAP", "Feature engineering"]
repo: "https://github.com/embarky/churn-prediction"
role: "Solo project, MSc coursework"
---

## The problem

The service was spending its retention budget on discount offers sent to
everyone whose usage dipped. Most of those users would have stayed anyway,
so the money bought very little. The actual question was not "who is less
active" but "who would stay if we intervened, and who is leaving regardless."

## Data

14 months of subscription records for roughly 180,000 accounts: billing
history, session logs, device mix, support tickets, and plan changes. Churn
was defined as a cancellation or a lapsed renewal within the following 30 days.

The class balance was about 6% positive, which shaped almost every decision
downstream.

## Approach

I built features in three groups: **tenure and billing** (plan, price changes,
payment failures), **engagement trends** (rolling 7/30-day watch time, ratio of
recent to historical activity), and **friction signals** (support contacts,
failed streams, device churn).

The engagement ratios mattered more than raw levels. A heavy user dropping to
half their usual watch time is a stronger signal than a light user staying
light.

For the model I compared logistic regression, random forest, and XGBoost. XGBoost
won on ranking quality, but the more useful decision was abandoning accuracy as a
metric entirely. With 6% positives, a model predicting "nobody churns" scores 94%.
I optimized for precision in the top decile instead, because that is the slice
the retention team can actually act on within budget.

Threshold selection was a cost calculation, not a statistical one: expected
margin lost to a churned subscriber versus the cost of a discount sent to
someone who would have stayed.

## Results

| Model | AUC | Precision @ top 10% | Recall @ top 10% |
|---|---|---|---|
| Logistic regression | 0.79 | 0.31 | 0.52 |
| Random forest | 0.84 | 0.38 | 0.63 |
| XGBoost | 0.87 | 0.44 | 0.71 |

At the chosen threshold the model captures 71% of churners in the top decile of
risk. Against the previous blanket-discount policy, the simulated retention
spend drops by roughly 60% for the same number of saves.

SHAP values showed payment friction — a failed charge in the prior cycle —
carrying far more weight than the team expected. That turned out to be the most
actionable finding in the project, since it points at a fixable operational
problem rather than a preference problem.

## What I would do differently

The model predicts *who* churns, not *who can be saved*. Those are different
questions, and the second one needs an uplift model trained on a randomized
holdout. Without that experiment the threshold is still partly guesswork.

I also leaned on a single time-based split rather than rolling-origin validation,
which probably makes the reported numbers slightly optimistic.