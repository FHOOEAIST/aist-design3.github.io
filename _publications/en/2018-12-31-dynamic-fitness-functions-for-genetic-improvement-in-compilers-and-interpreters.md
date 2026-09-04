---
lang: en
page_id: pub:dynamic-fitness-functions-for-genetic-improvement-in-compilers-and-interpreters
permalink: /publications/dynamic-fitness-functions-for-genetic-improvement-in-compilers-and-interpreters/
date: 2018-12-31
title: Dynamic fitness functions for genetic improvement in compilers and interpreters
reference: 'Krauss O., Mössenböck H., Affenzeller M. GECCO ’18: Proceedings of the
  Genetic and Evolutionary Computation Conference Companion.'
category: ml
external_url: https://dl.acm.org/authorize?N676105
---

When attempting to improve the non-functional requirements of software, specifically run-time performance of code, an important requirement is to preserve the correctness of the optimized code. Additionally when attempting to integrate Genetic Improvement into a compiler or interpreter, the large search spaces resulting from the amount of operators and operands a language provides needs to be dealt with. This publication explores dynamic fitness functions as a foundation for a use in Genetic Improvement to optimize programs. An approach of using a test suite to verify code correctness in the Truffle Framework [19, 20] and Graal Compiler [11] is presented. Two types of fitness functions are explored, which split the test suite according to their complexity and attempt to generate correct solutions with a growing set of increasingly complex tests. One of them increases the amount of tests sequentially over several iterations. The parallel fitness function attempts to split a test suite and to re-combine the results with increasingly large suites. The results show that these functions only marginally improve the fitness landscape on their own, but show that more partially correct solutions can be found with dynamic fitness functions. In the future, our approach may be improved by implementing specific crossover and mutator operations to accompany the dynamic fitness functions.
