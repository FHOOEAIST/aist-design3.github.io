---
lang: de
page_id: thesis:martin-hanreich-semantic-clustering-of-structured-categorical-data-using-the-gpt
permalink: /theses/martin-hanreich-semantic-clustering-of-structured-categorical-data-using-the-gpt/
date: 2022-12-31
title: Semantic clustering of structured categorical data using the GPT-3
  language model
student: Martin Hanreich
thesis_type: master
categories: [ml]
---

Clustering ist ein weit verbreitetes Verfahren des maschinellen Lernens, das dazu genutzt werden kann, Elemente nach ihrer Ähnlichkeit in Klassen einzuteilen. Damit das Clustering-Verfahren bestimmen kann, zu welcher Klasse ein Element zuzuordnen ist, braucht es Informationen über die Ähnlichkeit der Elemente zueinander. Mit numerischen Werten ist diese Ähnlichkeit leicht zu berechnen, da mathematische Operationen angewandt werden können. Mit sogenannten kategoriellen Daten, welche aus nicht-numerischen Werten bestehen wie etwa ’grob’, ’Data Scientist’ oder ’Google Chrome’, fällt diese Berechnung deutlich schwerer. Zur Anwendung kommen in der Praxis verschiedene Methoden, die sich hauptsächlich auf die Verteilung der Werte innerhalb des Datensatzes beziehen.

Allerdings lassen sich diese kategoriellen Daten auch auf eine andere Art betrachten. Anstatt diese als beliebig austauschbare Elemente zu behandeln, kann man sie auch als implizite Träger von weiteren Informationen sehen z.B. mit dem Wort ’Katze’ kann man ’Tier’, ’Haustier’, ’Vierbeiner’ verbinden. Anhand dieser Betrachtungsweise ergibt sich eine andere Art die Ähnlichkeit zwischen Elementen zu bestimmen und dadurch das Clustering durchzuführen.

In den letzten Jahren haben die sogenannten Transformer im Bereich der natürlichen Sprachverarbeitung neue Maßstäbe gesetzt. Insbesondere das Modell GPT-3 aus der Familie der Transformer erhielt einiges an Aufmerksamkeit, dank dessen Fähigkeit menschenähnliche Texte zu verfassen. Um dies zu bewerkstelligen, muss das Modell Informationen über eine große Anzahl an Objekten besitzen und auch in einer Form verstehen, was diese für Eigenschaften haben und wie sie benutzt werden. In dieser Arbeit wird untersucht, wie ein Modell wie GPT-3 für das Semantische Clustering eingesetzt werden kann. Zuerst werden einige Varianten vorgestellt, wie das GPT-3-Modell dazu benutzt werden kann, um die semantische Ähnlichkeit zwischen zwei kategoriellen Werten zu ermitteln. Diese werden miteinander verglichen anhand der Performance auf verschiedenen Benchmark-Datensätzen sowie anderer relevanter Metriken, die deren Eignung für das Semantische Clustering anzeigen. Anschließend wird dargestellt, wie diese semantischen Ähnlichkeitswerte im Zuge des Semantischen Clusterings genutzt werden können. Diskutiert werden Anforderungen bezüglich Vorverarbeitung, die Cluster-Interpretation sowie mögliche Probleme, welche anhand eines Prototyps, geschrieben in der Programmiersprache Python, gezeigt werden. Die Arbeit bietet somit einen Überblick über die Thematik und gibt tieferen Einblick in einige wichtige Aspekte zu dessen praktischer Anwendung.