---
lang: de
page_id: pub:line-clustering-and-contour-extraction-in-the-context-of-2d-building-plans
permalink: /publications/line-clustering-and-contour-extraction-in-the-context-of-2d-building-plans/
date: 2021-12-31
title: Line Clustering and Contour Extraction in the Context of 2D Building Plans
reference: Pointner A., Praschl C., Krauss O., Schuler A., Helm E., Zwettler G. (2021).
  Line Clustering and Contour Extraction in the Context of 2D Building Plans. In Proceedings
  of 29. International Conference in Central Europe on Computer Graphics, Visualization
  and Computer Vision.
categories: [cv]
doi: https://doi.org/10.24132/CSRN.2021.3101.2
---

Für die Analyse eines Gebäudes hinsichtlich seiner Zugänglichkeit oder strukturellen Belastbarkeit sind ausgedruckte 2D-Grundrisse aufgrund der fehlenden Verknüpfung mit semantischen Informationen nicht ausreichend.
Die vorliegende Arbeit greift dieses Problem auf und stellt ein Konzept zur Clusterung klassifizierter Linien eines Grundrisses und zur Erzeugung semantisch angereicherter Konturelemente auf der Basis verschiedener Bildverarbeitungs-, 
Algorithmen der Bildverarbeitung, des maschinellen Sehens und des maschinellen Lernens. Ausgehend von einem allgemeinen Ansatz zum Clustering von Linien werden typspezifische Verfahren für Wände, Fenster, Türen und Treppen eingeführt. 
Die resultierenden Cluster werden wiederum für eine Konturerzeugung verwendet, die minimal gedrehte Rechtecke verwendet. Diese Rechtecke werden in Polygone transformiert, die durch Nachbearbeitungsschritte verfeinert werden.
Die Evaluierung des Ansatzes erfolgt über eine Positivprüfung anhand eines pixelbasierten Vergleichs des Verfahrensergebnisses. Hierfür werden sowohl automatisch generierte als auch reale Gebäudepläne verwendet. 
Die abschließende Auswertung zeigt, dass das Konzept eine Sicherheit von >90% für Türen, Treppen und Fenster und nur etwa 10% für Treppen erreicht, wobei die Laufzeit linear mit der Größe der Eingabe skaliert.