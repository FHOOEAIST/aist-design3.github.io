---
lang: de
page_id: pub:pre-and-post-processing-strategies-for-generic-slice-wise-segmentation-of-tomogr
permalink: /publications/pre-and-post-processing-strategies-for-generic-slice-wise-segmentation-of-tomogr/
date: 2020-12-31
title: Pre- and Post-processing Strategies for Generic Slice-wise Segmentation
  of Tomographic 3D datasets Utilizing U-Net Deep Learning Models Trained for
  Specific Diagnostic Domains
reference: Zwettler G., Holmes D. III, Backfrieder W. Pre- and Post-processing Strategies
  for Generic Slice-wise Segmentation of Tomographic 3D datasets Utilizing U-Net Deep
  Learning Models Trained for Specific Diagnostic Domains – Proceedings of the VISAPP
  2020, Valetta, Malta, 2020, pp. 66-78.
categories: [ehealth, cv, ml]
---

Ein automatisiertes und allgemein anwendbares Verfahren zur Segmentierung steht nach wie vor im Fokus der medizinischen Bildverarbeitungsforschung. Seit einigen Jahren zeigen Methoden der künstlichen Intelligenz vielversprechende Ergebnisse, insbesondere mit weit verbreiteten skalierbaren Deep-Learning-Bibliotheken. In dieser Arbeit wird ein fünfschichtiges Hybrid-U-Netz zur scheibenweisen Segmentierung von Leber-Datensätzen entwickelt. Die Trainingsdaten stammen aus der Medical Segmentation Decathlon-Datenbank, die 131 vollständig segmentierte Bände umfasst. Es wird ein schichtorientiertes Segmentierungsmodell unter Verwendung von Algorithmen für Deep Learning mit Anpassungen für variable Parenchymform entlang der Stapelrichtung und Ähnlichkeiten zwischen benachbarten Schichten implementiert. Beide werden für koronale und sagittale Ansichten transformiert. Die Implementierung erfolgt auf einem GPU-Rack mit TensorFlow und Keras. Für ein quantitatives Maß der Segmentierungsgenauigkeit werden standardisierte Volumen- und Oberflächenmetriken verwendet. Die Ergebnisse DSC=97.59, JI=95.29 und NSD=99.37 zeigen eine korrekte Segmentierung, vergleichbar mit 3D-U-Netzen und anderen dem Stand der Technik entsprechenden U-Netzen. Die Entwicklung eines 2D-Schnittes orientierte Segmentierung wir durch die Vorteile kurzer Trainingszeiten und geringere Komplexität gerechtfertigt und reduziert auch massiv den Speicherverbrauch. Diese Arbeit manifestiert das hohe Potenzial von KI-Methoden für die allgemeine Anwendung in der Medizin. Segmentierung als voll- oder halbautomatisches Werkzeug unter Aufsicht des fachkundigen Benutzers.