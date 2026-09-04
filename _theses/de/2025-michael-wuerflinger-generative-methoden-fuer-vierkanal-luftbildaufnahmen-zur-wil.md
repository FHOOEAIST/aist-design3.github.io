---
lang: de
page_id: thesis:michael-wuerflinger-generative-methoden-fuer-vierkanal-luftbildaufnahmen-zur-wil
permalink: /theses/michael-wuerflinger-generative-methoden-fuer-vierkanal-luftbildaufnahmen-zur-wil/
date: 2025-12-31
title: Generative Methoden für Vierkanal-Luftbildaufnahmen zur Wildtierüberwachung
student: Michael Würflinger
thesis_type: bachelor
---

Die Wildtierüberwachung mittels Drohnentechnologie bietet wertvolle Einblicke in Tierpopulationen und deren Lebensräume. Da Drohnenflüge jedoch zeitintensiv und kostspielig sind, zielt diese Bachelorarbeit darauf ab, die zugrunde liegende Datenbasis mithilfe von Bildgeneratoren künstlich zu erweitern. Aufgrund der 4 verwendeten Kanäle (3 für RGB, 1 für Thermal) wurde auf ein vortrainiertes Modell verzichtet, da Modelle aus dem Stand der Technik typischerweise nur bis zu 3 Kanäle unterstützen. Somit musste eine bestehende Architektur auf 4 Kanäle erweitert werden. CompVis latent-diffusion wurde aufgrund seiner hervorragenden Bildqualität und seiner Fähigkeit zur Generierung vielfältiger Bildinhalte ausgewählt.

Im ersten Schritt wurden ungelabelte RGB-Bilder sowie 4-Kanal-Bilder generiert, wobei der vierte Kanal die Thermal-Version des dazugehörigen RGB-Bildes zeigte. Die Ergebnisse zeigten, dass auch ohne Labels neue Inhalte durch Outpainting erzeugt werden konnten, insbesondere bei strukturell ähnlichen Landschaftsbildern. Beim Outpainting wird ein Teil des Bildes entfernt und neu generiert, um so mehr Vielfalt zu erlangen. Die Erzeugung vollständig neuer, inhaltlich abweichender Bilder erwies sich hingegen als weniger effektiv. Die Bilder waren zwar qualitativ akzeptabel, allerdings sehr ähnlich, da ohne Labels eher allgemeine Bilder erstellt werden. In einem weiteren Schritt wurde das Modell mit textuellen Bildbeschreibungen trainiert. Aufgrund der hohen inhaltlichen Variabilität dieser Beschreibungen verschlechterte sich jedoch die Bildqualität im Vergleich zum ungelabelten Modell.

Diese Arbeit zeigt, dass auch mit begrenzten Ressourcen, wie einem kleineren Datensatz, begrenzter Rechenleistung und einer kurzen Trainingszeit realistische RGB-Bilder generiert werden können. Das Generieren der Thermalbilder führte zu unrealistisch aussehenden Bildern, während das Outpainting und die Rekonstruktion zu akzeptablen Ergebnissen führte. Die Beurteilung, ob ein generiertes Thermalbild realistisch ist, gestaltet sich schwierig, da es keine visuellen Merkmale dafür gibt und somit nur ein Vergleich mit realen Thermalbildern als Orientierung dient. Künftige Arbeiten könnten sich verstärkt auf die gezielte Generierung von Wildtieren konzentrieren, um die Datengrundlage für Erkennung und Analyse weiter zu verbessern.
