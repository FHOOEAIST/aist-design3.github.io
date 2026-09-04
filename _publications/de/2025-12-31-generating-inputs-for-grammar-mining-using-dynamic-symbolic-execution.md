---
lang: de
page_id: pub:generating-inputs-for-grammar-mining-using-dynamic-symbolic-execution
permalink: /publications/generating-inputs-for-grammar-mining-using-dynamic-symbolic-execution/
date: 2025-12-31
title: Generating Inputs for Grammar Mining using Dynamic Symbolic Execution
reference: Pointner A., Pichler J., Prähofer H. 2025. Generating Inputs for Grammar
  Mining using Dynamic Symbolic Execution. The Art, Science, and Engineering of Programming,
  10(2), Article 16.
categories: [se]
doi: https://doi.org/10.22152/programming-journal.org/2025/10/16
---

Eine Vielzahl von Softwaresystemen enthält Komponenten, die strukturierte Eingaben parsen und verarbeiten. Neben Programmiersprachen, die von Compilern oder Interpretern analysiert werden, gibt es zahlreiche Komponenten, die standardisierte oder proprietäre Datenformate unterschiedlicher Komplexität verarbeiten. Selbst wenn solche Komponenten ursprünglich auf Basis einer Spezifikation, etwa einer Grammatik, entwickelt und getestet wurden, können zahlreiche Änderungen und Anpassungen im Laufe der Softwareentwicklung dazu führen, dass sich nicht mehr genau bestimmen lässt, welche Eingaben tatsächlich akzeptiert werden.

In dieser Situation kann Grammar Mining eingesetzt werden, um die Spezifikation in Form einer Grammatik zu rekonstruieren. Etablierte Verfahren liefern bereits brauchbare Ergebnisse, sofern ausreichend Eingabedaten zur vollständigen Abdeckung der Eingabesprache vorhanden sind. Diese Vollständigkeit zu erreichen, stellt jedoch eine große Herausforderung dar. In der Praxis stehen meist nur Eingabedaten zur Verfügung, die während des Betriebs der Softwaresysteme aufgezeichnet wurden. Werden diese Daten für das Grammar Mining verwendet, spiegelt die resultierende Grammatik nur die tatsächlich verarbeiteten Eingaben wider, nicht jedoch die vollständige Grammatik der von der Softwarekomponente akzeptierten Eingabesprache. Dadurch fehlen in der generierten Grammatik Randfälle oder zuvor unterstützte Funktionen, die in den verfügbaren Eingabedaten nicht mehr vorkommen.

Diese Arbeit begegnet dieser Herausforderung, indem sie einen neuartigen Ansatz zur automatischen Generierung von Eingaben für das Grammar Mining vorstellt. Obwohl Eingabegeneratoren bereits für Fuzz-Testing eingesetzt werden, ist unklar, ob sie sich auch für Grammar Miner eignen. Aufbauend auf dem Grammar Miner Mimid präsentiert diese Arbeit einen vollautomatisierten Ansatz zur Eingabegenerierung. Der Ansatz nutzt Dynamic Symbolic Execution (DSE) und erweitert diese um zwei Mechanismen, um die Einschränkungen von DSE bei strukturierten Eingabe-Parsern zu überwinden. Erstens wird die Suche nach neuen Eingaben durch eine iterative Erweiterung gesteuert, die mit einer Eingabe aus einem einzelnen Zeichen beginnt und diese schrittweise erweitert. Zweitens ist die Eingabegenerierung in einen neuartigen dreiphasigen Ansatz gegliedert, der die Generierung von Eingaben für Parser-Funktionen aufteilt.

Die vorgeschlagene Methode wurde anhand einer vielfältigen Menge von elf Benchmark-Anwendungen aus der bestehenden Literatur evaluiert. Die Ergebnisse zeigen, dass der Ansatz für die extrahierten Grammatiken eine Präzision und Trefferquote erreicht, die nahe an jener liegt, die mit modernsten Grammar Minern wie Mimid erzielt wird. Bemerkenswert ist, dass er erfolgreich subtile Merkmale und Randfälle in Parsern aufdeckt, die von solchen Grammar Minern typischerweise übersehen werden. Die Wirksamkeit der Methode wird durch empirische Belege gestützt, die zeigen, dass sie in verschiedenen Domänen auch ohne vorab vorhandene Eingabebeispiele eine hohe Leistung erzielen kann.

Dieser Beitrag ist für Forschende und Praktiker im Software Engineering von Bedeutung, da er eine automatisierte, skalierbare und präzise Lösung für das Grammar Mining bietet. Indem die Notwendigkeit einer manuellen Eingabegenerierung entfällt, reduziert der Ansatz nicht nur den Arbeitsaufwand, sondern verbessert auch die Robustheit und Vollständigkeit der extrahierten Grammatiken. Mit diesem Ansatz können Software-Entwickler:innen Spezifikationen aus bestehenden (Legacy-)Parsern rekonstruieren.
