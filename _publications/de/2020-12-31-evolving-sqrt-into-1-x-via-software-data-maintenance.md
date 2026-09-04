---
lang: de
page_id: pub:evolving-sqrt-into-1-x-via-software-data-maintenance
permalink: /publications/evolving-sqrt-into-1-x-via-software-data-maintenance/
date: 2020-12-31
title: Evolving sqrt into 1/x via Software Data Maintenance
reference: 'Langdon W., Krauss O. GECCO ’20: Proceedings of the Genetic and Evolutionary
  Computation Conference Companion.'
category: ml
doi: https://doi.org/10.1145/3377929.3398110
---

Während sich die Forschung zur Software-Automatisierung überwiegend auf den Programmcode konzentriert, haben wir begonnen zu untersuchen, ob Genetic Improvement (GI) von Daten Entwicklerinnen und Entwickler unterstützen kann, indem Aspekte der Wartung von im Quellcode eingebetteten Parametern automatisiert werden. Wir erweitern aktuelle GI-Arbeiten zur Optimierung von Compile-Zeit-Konstanten um neue Funktionalität und beschreiben die Transformation einer Quadratwurzelfunktion der GNU-C-Bibliothek in die Kehrwertfunktion mit doppelter Genauigkeit, drcp. Die Multiplikation mit 1/x (drcp) ermöglicht eine divisionsfreie Division, ohne dass die Hardware Division unterstützen muss. Sowohl die Evolution (6 Sekunden) als auch die GI-Division mit doppelter Genauigkeit (7,14 ± 0,012 ns) sind überraschend schnell.
