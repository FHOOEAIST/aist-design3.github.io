---
lang: de
page_id: pub:integrating-heuristiclab-with-compilers-and-interpreters-for-non-functional-code
permalink: /publications/integrating-heuristiclab-with-compilers-and-interpreters-for-non-functional-code/
date: 2020-12-31
title: Integrating HeuristicLab with Compilers and Interpreters for
  Non-Functional Code Optimization
categories: [ml, se]
reference: 'Dorfmeister D., Krauss O. 2020. “Integrating HeuristicLab with Compilers
  and Interpreters for Non-Functional Code Optimization.” In Proceedings of the Genetic
  and Evolutionary Computation Conference Companion – GECCO ’20. Cancun, Mexico: ACM
  Press..'
doi: https://doi.org/10.1145/3377929.3398103
---

Moderne Compiler und Interpreter bieten Code-Optimierungen während der Kompilier- und Laufzeit, vereinfachen dadurch den Entwicklungsprozess und führen zu optimierter Software. Diese Optimierungen beruhen häufig auf formalen Beweisen; alternativ verfügen stochastische Optimierungen über Recovery-Pfade als Rückfallebene. Das Genetic Compiler Optimization Environment (GCE) verfolgt einen neuartigen Ansatz, der Genetic Improvement nutzt, um die Laufzeitleistung von Code mit stochastischen Methoden des maschinellen Lernens zu optimieren. In dieser Arbeit schlagen wir eine Architektur vor, um GCE, das direkt an Low-Level-Interpreter und -Compiler anbindet, mit HeuristicLab zu integrieren – einem High-Level-Optimierungsframework, das ein breites Spektrum heuristischer und evolutionärer Algorithmen sowie eine grafische Benutzeroberfläche zur Steuerung und Überwachung des Lernprozesses bietet. Die definierte Architektur unterstützt parallele und verteilte Ausführung, um die langen Laufzeiten des Lernprozesses auszugleichen, die durch Transformationen abstrakter Syntaxbäume (AST) entstehen. Die Architektur ist unabhängig von konkreten Betriebssystemen, Programmiersprachen, Compilern oder Interpretern.
