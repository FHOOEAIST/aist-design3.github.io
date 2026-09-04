---
lang: en
page_id: pub:towards-knowledge-guided-genetic-improvement
permalink: /publications/towards-knowledge-guided-genetic-improvement/
date: 2020-12-31
title: Towards Knowledge-guided Genetic Improvement
reference: Krauss O., Mössenböck H., Affenzeller M. Proceedings of the 8th International
  Workshop on Genetic Improvement.
categories: [ml, se]
doi: https://doi.org/10.1145/3387940.3392172
---

We propose Knowledge-guided Genetic Improvement as a combination of Grammar-guided Genetic Programming with Tree-based Genetic Programming. Instead of utilizing a grammar directly, an operator graph based on that grammar is created, that is responsible for producing abstract syntax trees. Each operator contains knowledge about the grammar symbol it represents and returns only trees valid according to user-defined restrictions such as depth, complexity and approximated run-time performance. The expected benefits are a search space that excludes invalid individuals in an evolutionary run, ensuing a reduced overhead to evaluate invalid solutions and improving overall quality of the explored search space. The operator graph supports improvements based on previously run experiments and extensions towards further non-functional features.
