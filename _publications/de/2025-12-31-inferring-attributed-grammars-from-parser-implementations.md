---
lang: de
page_id: pub:inferring-attributed-grammars-from-parser-implementations
permalink: /publications/inferring-attributed-grammars-from-parser-implementations/
date: 2025-12-31
title: Inferring Attributed Grammars from Parser Implementations
reference: Andreas Pointner, Josef Pichler, and Herbert Prähofer. 2025. Inferring Attributed Grammars from Parser Implementations. arXiv:2507.13117.
category: se
doi: https://doi.org/10.48550/arXiv.2507.13117
---

Softwaresysteme, die strukturierte Eingaben verarbeiten, verfügen oft nicht über vollständige und aktuelle Spezifikationen, die sowohl die Eingabesyntax als auch die Semantik der Eingabeverarbeitung beschreiben\. Während sich Verfahren zum Grammar Mining bisher auf die Wiederherstellung syntaktischer Strukturen konzentriert haben, blieb die Semantik der Eingabeverarbeitung weitgehend unerforscht\. In dieser Arbeit stellen wir einen neuartigen Ansatz zur Ableitung attributierter Grammatiken aus Parser\-Implementierungen vor\. Ausgehend von einer Eingabegrammatik analysiert unsere Technik dynamisch die Implementierung rekursiv\-absteigender Parser, um die semantischen Aspekte der Eingabeverarbeitung zu rekonstruieren, wodurch Spezifikationen in Form attributierter Grammatiken entstehen\. Durch die Beobachtung von Programmausführungen und die Abbildung des Laufzeitverhaltens des Programms auf die Grammatik extrahieren wir systematisch semantische Aktionen und betten sie in die Grammatikregeln ein\. Dies ermöglicht eine umfassende Wiederherstellung der Spezifikation\. Wir demonstrieren die Machbarkeit unseres Ansatzes anhand einer ersten Reihe von Programmen und zeigen, dass er das Programmverhalten mithilfe der generierten attributierten Grammatiken präzise reproduzieren kann\.
