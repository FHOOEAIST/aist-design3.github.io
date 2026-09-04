---
lang: de
page_id: thesis:lukas-reithmeier-influence-of-depth-data-on-the-performance-of-instance-segmenta
permalink: /theses/lukas-reithmeier-influence-of-depth-data-on-the-performance-of-instance-segmenta/
date: 2020-12-31
title: Influence of depth data on the performance of instance segmentation
  utilizing Mask R-CNN and RGB-D images
student: Lukas Reithmeier
project_url: https://aist.fh-hagenberg.at/index.php/de/projekte/projekt-eden
---

Aufzüge sind eine Transportart, die aus dem modernen urbanen Leben nicht mehr wegzudenken ist. Bei Notfäallen in Aufzügen kann ein Notfallschalter betätigt werden, um Hilfe zu rufen. Dies ist nicht immer möglich. Daher entwickelt die Forschungsgruppe AIST ein System zur Notfallerkennung in Aufzügen unter Verwendung von RGB-D Kameras, welche RGB Bilder und Tiefenbilder liefern. Um Personen in unterschiedlichen Posen und verschiedene Objekte zu erkennen und um deren Masken zur Verfolgung über mehrere Kamera Bilder zu verwenden, wird ein Instanzsegmentierungs-Modul mit dem Mask R-CNN Algorithmus zum System hinzugefügt.

Dank Metallwänden und Spiegel von Aufzugumgebungen enthalten die Bilder der RGB-D Kamers viele Reflektionen und starkes Rauschen. Die Verwendung von RGB Bildern mit Instanzsegmentierungs-Algorithmen, wie dem Mask RCNN Algorithmus, ist wohlbekannt und wird oft durchgeführt. Dies wirft die Frage auf, ob Instanzsegmentierung durch die Verwendung von stark reflektierenden und rauschenden Tiefenbildern verbessert werden kann.

Diese Arbeit vergleicht vier verschiedene Modellversionen, die sich durch ihre Eingabe und dem verwendeten Backbone Netzwerk unterscheiden. Die Erste verwendet ausschließlich RGB Bilder, die Zweite ausschließlich Tiefenbilder, die Dritte verwendet RGB-D Bilder. Diese drei Modellversionen verwenden ResNet-FPN als Backbone Netzwerk. Die vierte Modellversion verwendet RGB-D Bilder und ein FuseNet-FPN Netzwerk. Diese Arbeit führt außerdem den Elevator RGB-D Datensatz ein, welcher RGB-D Bilder aus Aufzug-Szenen enthält. Um einen fairen Vergleich zu erreichen, werden die Hyperparameter der Modellversionen mit Tree-structured Parzen Estimators optimiert. Um die Generalisierung der trainierten Modelle zu verbessern, werden die Modelle zuerst mit dem SUN RGB-D Datenset vortrainiert. Mittels Transferlernen werden die Modelle mit den vortrainierten Gewichten initialisiert und anschließend mit dem Elevator RGB-D Datensatz trainiert.

Diese Arbeit beweist die Äquivalenz der Resultate unter Verwendung von RGB-D Bildern und von RGB Bildern zur Instanzsegmentierung in stark reflektierenden und rauschenden Aufzugumgebungen. Die ausschließliche Verwendung der Tiefenbilder führt hingegen zu schlechteren Resultaten. Wenn ein, auf RGB-D Bilder spezialisiertes Backbone-Netzwerk verwendet wird, verbessert dies die Resultate von Mask R-CNN.