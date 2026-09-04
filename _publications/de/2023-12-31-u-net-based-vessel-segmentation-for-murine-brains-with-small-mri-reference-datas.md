---
lang: de
page_id: pub:u-net-based-vessel-segmentation-for-murine-brains-with-small-mri-reference-datas
permalink: /publications/u-net-based-vessel-segmentation-for-murine-brains-with-small-mri-reference-datas/
date: 2023-12-31
title: U-Net based vessel segmentation for murine brains with small μMRI
  reference datasets
reference: Praschl C., Zopf L., Kiemeyer E., Langthallner I., Ritzberger D., Slowak
  A., Weigl M., Blüml V., Nešić N., Stojmenović M., Kniewallner K., Aigner L., Winkler
  S., Walter A. “U-Net based vessel segmentation for murine brains with small μMRI
  reference datasets“. Plos one (2023).
categories: [ehealth, cv, ml]
doi: https://doi.org/10.1371/journal.pone.0291946
---

Die Identifizierung und quantitative Segmentierung einzelner Blutgefäße in Mäusen, die mit präklinischen Bildgebungsverfahren visualisiert wurden, ist eine mühsame, manuelle oder halbautomatische Aufgabe, die die wochenlange Durchsicht von Hunderten von Ebenen einzelner Datensätze erfordern kann. Präklinische Bildgebungsverfahren wie die Mikro-Magnetresonanztomographie (µMRI) können tomographische Datensätze der Gefäße von Mäusen auf verschiedenen Längenskalen und in verschiedenen Organen erzeugen, was für die Untersuchung von Tumorwachstum, Angiogenese oder vaskulären Risikofaktoren für Krankheiten wie Alzheimer von größter Bedeutung ist. Das Training eines neuronalen Netzes, das genaue Segmentierungsergebnisse liefert, erfordert eine ausreichend große Menge an markierten Daten, deren Zusammenstellung viel Zeit in Anspruch nimmt. In jüngster Zeit sind im präklinischen Kontext mehrere einigermaßen automatisierte Ansätze entstanden, die jedoch immer noch erhebliche manuelle Eingaben erfordern und weniger genau sind als der in dieser Arbeit vorgestellte Deep-Learning-Ansatz – quantifiziert durch den Dice-Score. In dieser Arbeit wird die Implementierung einer flachen, dreidimensionalen U-Net-Architektur für die Segmentierung von Gefäßen in Mäusegehirnen vorgestellt, die (1) quelloffen ist, (2) mit einem kleinen Datensatz erreicht werden kann (in dieser Arbeit standen nur 8 μMRI-Bildstapel von Mäusegehirnen zur Verfügung) und (3) nur eine kleine Teilmenge von markierten Trainingsdaten benötigt. Das vorgestellte Modell wird zusammen mit zwei Nachbearbeitungsmethoden unter Verwendung einer Kreuzvalidierung evaluiert, was zu einem durchschnittlichen Dice-Score von 61,34 % in der besten Einstellung führt. Die Ergebnisse zeigen, dass die Methodik in der Lage ist, Blutgefäße schneller und zuverlässiger zu erkennen als moderne Vesselness-Filter mit einem durchschnittlichen Dice-Score von 43,88 % für den verwendeten Datensatz.