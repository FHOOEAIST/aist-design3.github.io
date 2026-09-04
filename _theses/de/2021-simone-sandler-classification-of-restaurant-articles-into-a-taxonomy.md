---
lang: de
page_id: thesis:simone-sandler-classification-of-restaurant-articles-into-a-taxonomy
permalink: /theses/simone-sandler-classification-of-restaurant-articles-into-a-taxonomy/
date: 2021-12-31
title: Classification of Restaurant Articles into a Taxonomy
student: Simone Sandler
thesis_type: master
project_url: https://aist.fh-hagenberg.at/index.php/de/projekte/projekt-voigas
---

Diese Arbeit beschäftigt sich mit der Klassifizierung von Artikeln aus verschiedenen Restaurants in eine Taxonomie. Die verfügbaren Daten dabei sind der Name des Artikels und eine restaurantinterne Kategorie. Beide Merkmale sind Strings, die vom Restaurantbesitzer bereitgestellt werden und sind daher fehleranfällig.
Es werden Methoden entwickelt, um diese Art von Daten in hierarchisch strukturierte Kategorien zu klassifizieren. In dieser Arbeit werden die Kategorien durch eine Speisen- und Getränketaxonomie dargestellt, welche in Form eines Baumes gespeichert wird. Die Methoden können in Vorklassifizierungs- und Klassifizierungsmethoden unterteilt werden. Vorklassifizierungsmethoden versuchen, den besten Teilbaum innerhalb des Kategorienbaums für einen Artikel zu finden und Klassifikationsmethoden klassifizieren den Artikel innerhalb dieses Teilbaums. Insgesamt werden drei Vorklassifizierungs- und zwei Klassifizierungsmethoden entwickelt.
Die erste Vorklassifizierungsmethode wird Category Similarity Preclassification genannt und arbeitet durch den Vergleich des Namens der internen Kategorie mit den Kategorienamen der Taxonomie. Die Methode Common Ancestor Preclassification sucht nach dem gemeinsamen Vorfahren von bereits klassifizierten Artikel mit derselben internen Kategorie und die Methode Substring Preclassification vergleicht die interne Kategorie mit Zeicheketten, die für eine Kategorie eindeutig sind.
Die Klassifizierungsmethoden heißen String Similarity Classification und Substring Classification. Die erste Methode vergleicht den Artikelnamen mit Namen von bereits klassifizierten Artikeln und die zweite Methode vergleicht den Artikelnamen mit Zeichenketten, die für eine Kategorie innerhalb des vorklassifizierten Teilbaums eindeutig sind.
Diese Methoden sind Teil eines halbautomatischen Klassifikationssystems, dass die Klassifizierung der Artikel mit Hilfe der entwickelten Methoden durchführt und die Möglichkeit bietet, die Essens- und Getränketaxonomie bei Bedarf zu erweitern.
Aufgrund der fehleranfälligen Daten wird der Prozentsatz der klassifizierbaren Artikel auf 72% geschätzt. Das Klassifikationssystem ist in der Lage, diese Menge an Artikeln mit einer Genauigkeit von 83% für das Finden der bestmöglichen Kategorie und 90% für das Finden einer passenden Kategorie zu klassifizieren.