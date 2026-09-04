---
lang: de
page_id: thesis:daniel-stigler-evaluierung-von-klassifikatoren-f-r-den-einsatz-in-notfallerkennu
permalink: /theses/daniel-stigler-evaluierung-von-klassifikatoren-f-r-den-einsatz-in-notfallerkennu/
date: 2018-12-31
title: Evaluierung von Klassifikatoren für den Einsatz in Notfallerkennungssystemen
student: Daniel Stigler
thesis_type: bachelor
categories: [ml, cv]
project_url: https://aist.fh-hagenberg.at/index.php/de/projekte/projekt-eden
---

In dieser Arbeit soll eine Evaluierung von verschiedenen Algorithmen des maschinellen Lernens, für die Informationsgewinnung aus Bilddaten zur späteren Notfallerkennung in Aufzugsystemen, durchgeführt werden. Dazu wird, zur Ermittlung der Informationen, ein Klassifikations-Prototyp erstellt, welcher in drei Teile aufgeteilt wird. Im ersten Schritt werden Bilder von segmentierten Objekten analysiert und eruiert, ob es sich dabei um einen Menschen oder Gegenstand handelt. Im zweiten Teil werden Gegenstände in weitere Objektkategorien klassifiziert, wodurch eine Aussage über eine bestehende Gefahrensituation gemacht werden kann. Im dritten Teil werden, als Mensch klassifizierte, Objekte einer Haltungsklassifikation auf Basis ihrer Silhouettenform unterzogen, wodurch später ein Notfallsignal ausgelöst werden kann, sollte eine Person über einen längeren Zeitraum am Boden liegen. Die getesteten Algorithmen werden von OpenCV angeboten und beschränken sich dabei auf K-Nearest Neighbor, Support Vector Machine, Random Forest sowie neuronales Netz. Die Ergebnisse zeigen, dass sich Support Vector Machines, mit einer Trefferquote von über 98%, unter Verwendung von HOG-Deskriptoren, bestens für eine Kategorisierung von Objekten in Mensch und Gegenstand eignen. Auch lieferte diese Kombination, im Vergleich zu anderen Klassifikatoren, zwar die besten Resultate für die weitere Gruppierung von Gegenständen, allerdings sind diese mit einer 73-prozentigen Klassifikationsrate nicht sonderlich befriedigend. Bei der Haltungsklassifikation mittels Silhouetten-Merkmale, erwies sich das neuronale Netz, mit einer korrekten Klassifikation von 92% aller Testdaten, als der geeignetste Klassifikator.