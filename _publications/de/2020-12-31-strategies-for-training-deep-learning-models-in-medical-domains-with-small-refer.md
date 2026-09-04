---
lang: de
page_id: pub:strategies-for-training-deep-learning-models-in-medical-domains-with-small-refer
permalink: /publications/strategies-for-training-deep-learning-models-in-medical-domains-with-small-refer/
date: 2020-12-31
title: Strategies for Training Deep Learning Models in Medical Domains with
  Small Reference Datasets
reference: Zwettler G., Holmes D., Backfrieder W. „Strategies for Training Deep Learning
  Models in Medical Domains with Small Reference Datasets“. WSCG ’20.
category: cv
---

Mit dem stetigen Fortschritt von Deep Learning (DL)

stehen nun leistungsfähige Werkzeuge für anspruchsvolle Segmentierungsaufgaben zur Verfügung. Dennoch kann der allgemein sehr hohe Bedarf an Trainingsdaten und präzisen Referenzsegmentierungen im medizinischen Bereich bei der Bearbeitung kleiner und individueller Studien oder Erfassungsprotokolle oft nicht gedeckt werden. Als gängige Strategien sind Reinforcement Learning oder Transfer Learning anwendbar, aber aufgrund der domänenspezifischen Anpassung mit immensem Aufwand kohärent. In dieser Arbeit wird die Anwendbarkeit einer U-Netz-Kaskade für das Training auf einer sehr geringen Menge von abdominellen MRT-Datensätzen des Parenchyms evaluiert und Strategien zur Kompensation des Mangels an Trainingsdaten diskutiert. Obwohl die Modellgenauigkeit beim Training auf 13 MRT-Bändern mit erreichbarem JI=89,41 eher gering ist, sind die Ergebnisse immer noch gut genug für eine jährliche Nachbearbeitung unter Verwendung eines Graph-Cut (GC)-Ansatzes mit mittlerem Bedarf an Benutzerinteraktion. Auf diese Weise werden die DL-Modelle umgeschult, wenn zusätzliche Testdatensätze verfügbar werden, um die Klassifikationsgenauigkeit anschließend zu verbessern. Mit nur 2 zusätzlichen GC-Postprocessing-Datensätzen beträgt die Genauigkeit nach der Modellneuschulung JI= 89,87. Darüber hinaus wird die Anwendbarkeit von Generativen Adversialen Netzwerken (GAN) im medizinischen Bereich evaluiert, wobei diskutiert wird, axiale CT-Schnitte zusammen mit perfekten Ground-Truth-Referenz-Segmentierungen zu synthetisieren. Es wird für abdominale CT-Schnitte des Parenchyms gezeigt, dass bei fehlenden Trainingsdaten synthetisierte Schnitte, die in beliebiger Anzahl abgeleitet werden können, den DL-Trainingsprozess signifikant verbessern können, wenn nur eine unzureichende Datenmenge zur Verfügung steht. Während das Training auf 2.200 Realbildern nur zu einer Genauigkeit von JI=88,75 führt, führt die Anreicherung mit 2.200 zusätzlichen Bildern, die aus einer auf 5.000 Datensätzen trainierten GAN synthetisiert werden, zu einer Steigerung bis zu JI=92,02. Selbst wenn das DL-Modell ausschließlich auf 4.400 computergenerierten Bildern trainiert wird, ist die Klassifikationsgenauigkeit auf Realweltdaten mit JI=90,81 bemerkenswert.