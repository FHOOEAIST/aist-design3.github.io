---
lang: de
page_id: thesis:eva-maria-spitzer-an-exploratory-approach-for-finding-similarities-within-hetero
permalink: /theses/eva-maria-spitzer-an-exploratory-approach-for-finding-similarities-within-hetero/
date: 2020-12-31
title: An Exploratory Approach for Finding Similarities Within Heterogeneous
  Data Sets of Small and Medium-Sized Enterprises
student: Eva-Maria Spitzer
thesis_type: master
categories: [ml]
project_url: https://aist.fh-hagenberg.at/index.php/de/projekte/projekt-kimiku
---

Kundenbindungsprogramme sind ein wichtiges Hilfsmittel für Unternehmen, um die Bedürfnisse ihrer Kundinnen und Kunden besser wahrzunehmen und dadurch geeignete Maßnahmen zur Steigerung der Zufriedenheit ergreifen zu können. Für die erfolgreiche Umsetzung solcher Programme werden detaillierte Analysen benötigt, die eine große Menge von Kundendaten voraussetzen. Viele Klein- und Mittelunternehmen haben nur wenig Daten und können folglich nur einen kleinen Datensatz für Analysen verwenden, was zu schlechteren Modellen und ungenaueren Ergebnissen führen kann.

Eine Lösung ist es, Unternehmen zu finden, die in ihren Datencharakteristiken ähnlich sind. Wenn eines der sich ähnlichen Unternehmen über genügend Daten verfügt, um ein leistungsfähiges Modell zu erstellen, kann dieses auf die Daten eines ähnlichen Unternehmens mit weniger Kundendaten angewendet werden.

Die Arbeit beschreibt einen möglichen Ansatz zur Erkennung von ähnlichen Unternehmen sowie die Identifikation von Features und Algorithmen, die bei den jeweiligen Datensätzen zu guten Ergebnissen führen. Als konkreter Anwendungsfall werden Daten von sechs Klein- und Mittelunternehmen
verwendet, die durch eine Kundenbindungsapp von einem österreichischen Software-Unternehmen aufgezeichnet wurden.

Für die Identifikation ähnlicher Unternehmen wurden Datencharakteristiken extrahiert. Diese Charakteristiken hängen mit dem spezifischen Use Case zusammen und zielen darauf ab, die Daten der jeweiligen Unternehmen bestmöglich zu repräsentieren. Zur Eruierung jener Features und Algorithmen (z.B.: Random Forest, Support Vector Regression) die in Kombination mit den
unterschiedlichen Datensätzen zu guten Ergebnissen führen wurde für jede Feature/Algorithmus-Kombination ein Regressionsmodell trainiert und evaluiert. Die jeweiligen Kombinationen der Features und Algorithmen wurden gemeinsam mit den Datencharakteristiken der Unternehmen mit Hilfe von Agglomerative Hierarchical Clustering gruppiert. Zur Evaluierung der Leistung der jeweiligen Kombinationen wurde die aus den Durchläufen der Regressionsmodellen berechnete Fehlermetrik verwendet.

Diese Arbeit zeigt, dass es einige Herausforderungen gibt, Unternehmen mit ähnlichen Datensätzen sowie Feature- und Algorithmus Kombinationen zu finden, die für bestimmte Datensätze am besten funktionieren. Trotz der geringen Anzahl an verfügbaren Daten konnte gezeigt werden, dass es möglich ist, auf Basis von Datencharakteristiken ähnliche Unternehmen zu finden. Die Ergebnisse lassen zwar nicht auf Features und Algorithmen, die die Regressionsaufgabe unternehmensübergreifend beeinflussen, rückschließen, jedoch konnten Einflüsse von Features auf bestimmte Datensätze beobachtet werden. Die Ergebnisse dieser Arbeit erschließen weitere Forschungsmöglichkeiten, wie z.B. detaillierte Analysen spezifischer Features oder die Vorhersage des Fehlers einer Regressionsaufgabe wenn bestimmte Features, Algorithmen und Datencharakteristiken verwendet werden. Zusammenfassend lässt sich feststellen, dass diese Arbeit die Grundbausteine für die Anwendung eines trainierten Modells auf andere Datensätze legt.