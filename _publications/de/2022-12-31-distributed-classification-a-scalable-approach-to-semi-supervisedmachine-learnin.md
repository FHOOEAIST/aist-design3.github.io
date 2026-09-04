---
lang: de
page_id: pub:distributed-classification-a-scalable-approach-to-semi-supervisedmachine-learnin
permalink: /publications/distributed-classification-a-scalable-approach-to-semi-supervisedmachine-learnin/
date: 2022-12-31
title: Distributed Classification - A Scalable Approach to Semi
  SupervisedMachine Learning
reference: Meindl R., Sandler S., Mayrhuber E., Krauss O. “Distributed Classification
  – A Scalable Approach to Semi SupervisedMachine Learning” Proceedings of the 34th
  European Modeling and Simulation Symposium EMSS2022, Rom, Italy (2022).
categories: [ml, se]
---

Die Anpassung von realen Daten an ein Klassifizierungsmodell ist eine anspruchsvolle Aufgabe. Moderne Klassifizierungsansätze sind oft ressourcenintensiv und können zu Engpässen führen. In diesem Papier wird eine Microservice-Architektur vorgestellt, die es ermöglicht, ein Modell der realen Daten zu pflegen und neue Informationen hinzuzufügen, sobald sie verfügbar sind. Aktualisierungen des Modells werden über verschiedene Mikroservices abgewickelt. Die Architektur und die damit verbundenen Arbeitsabläufe werden in einem Anwendungsfall der Klassifizierung von Textdaten in einer Taxonomie, die durch einen gerichteten azyklischen Graphen (DAG) dargestellt wird, demonstriert. Die vorgestellte Architektur beseitigt den Engpass bei der Klassifizierung, da mehrere Datenpunkte unabhängig voneinander hinzugefügt werden können und der lesende Zugriff auf das Modell nicht eingeschränkt ist. Zusätzliche Microservices ermöglichen auch einen manuellen Eingriff zur Aktualisierung des Modells.