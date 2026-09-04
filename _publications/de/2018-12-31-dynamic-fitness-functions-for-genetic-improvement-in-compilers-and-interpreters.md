---
lang: de
page_id: pub:dynamic-fitness-functions-for-genetic-improvement-in-compilers-and-interpreters
permalink: /publications/dynamic-fitness-functions-for-genetic-improvement-in-compilers-and-interpreters/
date: 2018-12-31
title: Dynamic fitness functions for genetic improvement in compilers and interpreters
reference: 'Krauss O., Mössenböck H., Affenzeller M. GECCO ’18: Proceedings of the
  Genetic and Evolutionary Computation Conference Companion.'
category: ml
external_url: https://dl.acm.org/authorize?N676105
---

Beim Versuch, die nicht-funktionalen Anforderungen von Software – insbesondere die Laufzeitleistung von Code – zu verbessern, ist es eine wesentliche Anforderung, die Korrektheit des optimierten Codes zu erhalten. Zusätzlich muss bei der Integration von Genetic Improvement in einen Compiler oder Interpreter mit den großen Suchräumen umgegangen werden, die sich aus der Menge der von einer Sprache bereitgestellten Operatoren und Operanden ergeben. Diese Publikation untersucht dynamische Fitnessfunktionen als Grundlage für den Einsatz in Genetic Improvement zur Optimierung von Programmen. Vorgestellt wird ein Ansatz, der eine Test-Suite zur Überprüfung der Code-Korrektheit im Truffle Framework und im Graal Compiler verwendet. Zwei Arten von Fitnessfunktionen werden untersucht, die die Test-Suite nach ihrer Komplexität aufteilen und versuchen, mit einem wachsenden Satz zunehmend komplexer Tests korrekte Lösungen zu erzeugen. Die eine erhöht die Anzahl der Tests sequenziell über mehrere Iterationen hinweg. Die parallele Fitnessfunktion versucht, eine Test-Suite aufzuteilen und die Ergebnisse mit zunehmend größeren Suites wieder zusammenzuführen. Die Ergebnisse zeigen, dass diese Funktionen für sich genommen die Fitnesslandschaft nur geringfügig verbessern, dass jedoch mit dynamischen Fitnessfunktionen mehr teilweise korrekte Lösungen gefunden werden können. Zukünftig könnte unser Ansatz durch die Implementierung spezifischer Crossover- und Mutationsoperationen zur Ergänzung der dynamischen Fitnessfunktionen verbessert werden.
