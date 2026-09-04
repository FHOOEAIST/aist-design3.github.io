---
lang: en
page_id: pub:integrating-heuristiclab-with-compilers-and-interpreters-for-non-functional-code
permalink: /publications/integrating-heuristiclab-with-compilers-and-interpreters-for-non-functional-code/
date: 2020-12-31
title: Integrating HeuristicLab with Compilers and Interpreters for
  Non-Functional Code Optimization
category: se
reference: 'Dorfmeister D., Krauss O. 2020. “Integrating HeuristicLab with Compilers
  and Interpreters for Non-Functional Code Optimization.” In Proceedings of the Genetic
  and Evolutionary Computation Conference Companion – GECCO ’20. Cancun, Mexico: ACM
  Press..'
doi: https://doi.org/10.1145/3377929.3398103
---

Modern compilers and interpreters provide code optimizations during compile and run time, simplifying the development process for the developer and resulting in optimized software. These optimizations are often based on formal proof, or alternatively stochastic optimizations have recovery paths as backup. The Genetic Compiler Optimization Environment (GCE) uses a novel approach, which utilizes genetic improvement to optimize the run-time performance of code with stochastic machine learning techniques. In this paper, we propose an architecture to integrate GCE, which directly integrates with low-level interpreters and compilers, with HeuristicLab, a high-level optimization framework that features a wide range of heuristic and evolutionary algorithms, and a graphical user interface to control and monitor the machine learning process. The defined architecture supports parallel and distributed execution to compensate long run times of the machine learning process caused by abstract syntax tree (AST) transformations. The architecture does not depend on specific operating systems, programming languages, compilers or interpreters.
