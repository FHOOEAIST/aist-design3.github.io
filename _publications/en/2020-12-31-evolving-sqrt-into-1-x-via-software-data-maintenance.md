---
lang: en
page_id: pub:evolving-sqrt-into-1-x-via-software-data-maintenance
permalink: /publications/evolving-sqrt-into-1-x-via-software-data-maintenance/
date: 2020-12-31
title: Evolving sqrt into 1/x via Software Data Maintenance
reference: 'Langdon W., Krauss O. GECCO ’20: Proceedings of the Genetic and Evolutionary
  Computation Conference Companion.'
categories: [ml, se]
doi: https://doi.org/10.1145/3377929.3398110
---

While most software automation research concentrates on programs' code, we have started investigating if Genetic Improvement (GI) of data can assist developers by automating aspects of the maintenance of parameters embedded in source code. We extend recent GI work on optimising compile time constants to give new functionality and describe the transformation of a GNU C library square root function into the double precision reciprocal function, drcp. Multiplying by 1/x (drcp) allows division free division without requiring the hardware to support division. The evolution (6 seconds) and indeed the GI dp division (7.14 ± 0.012 nS) are both surprisingly fast.
