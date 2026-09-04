---
lang: en
page_id: pub:guided-code-generation-with-large-language-models-and-static-code-analysis
permalink: /publications/guided-code-generation-with-large-language-models-and-static-code-analysis/
date: 2026-02-23  # Eurocast 2026 conference start date (Feb 23–27); exact day unknown
title: Guided Code Generation with Large Language Models and Static Code
  Analysis
reference: Dalkilic M., Praschl C. “Guided Code Generation with Large Language Models
  and Static Code Analysis“, Eurocast 2026.
categories: [ml, se]
---

We employ an iterative LLM-assisted code-generation workflow coupled with static analysis. For each prompt, the LLM produces an initial code candidate, which is evaluated using SonarQube. Analysis findings (security, quality, maintainability) are fed back to the model to guide regeneration. Iteration continues until issue thresholds are satisfied or a maximum iteration count is reached. We evaluated our approach on 50 code generation prompts covering security vulnerabilities, code quality, algorithmic tasks, and complexity challenges. Each prompt underwent up to five iterative refinement cycles, incorporating SonarQube feedback into the LLM's next generation. For each run, we recorded initial and final issue counts, iteration numbers, and categorized issues by type and severity. 94% of all runs successfully completed, resolving all detected issues after an average of 1.34 refinement iterations, with the majority (74%) requiring only a single iteration.