---
lang: de
page_id: pub:transfer-learning-and-hyperparameter-optimization-for-instance-segmentation-with
permalink: /publications/transfer-learning-and-hyperparameter-optimization-for-instance-segmentation-with/
date: 2021-12-31
title: Transfer Learning and Hyperparameter Optimization for Instance
  Segmentation with RGB-D Images in Reflective Elevator Environments
reference: 'Reithmeier L., Krauss O., Zwettler G.,  . (2021). Transfer Learning and
  Hyperparameter Optimization forInstance Segmentation with RGB-D Images in Reflective
  Elevator Environments. In Proceedings of the 16th International Joint Conference
  on Computer Vision, Imaging and Computer Graphics Theory and Applications – Volume
  5: VISAPP, ISBN 978-989-758-488-6.'
category: cv
doi: https://doi.org/10.24132/CSRN.2021.3101.30
---

Aufzüge, ein lebenswichtiges Mittel für den städtischen Transport, verfügen in der Regel neben einem Notrufknopf über keine geeigneten Notrufsysteme. Im Falle von bewusstlosen oder anderweitig handlungsunfähigen Fahrgästen kann dies zu tödlichen Situationen führen. Ein kamerabasiertes Überwachungssystem mit KI-basierten Warnungen unter Verwendung einer Aufzugszustandsmaschine kann Fahrgästen helfen, die nicht in der Lage sind, einen Notruf auszulösen. In dieser Forschungsarbeit wird die Anwendbarkeit von RGB-D-Bildern als Input für die Objektsegmentierung in der stark reflektierenden Umgebung einer Aufzugskabine evaluiert. Für die Objektsegmentierung wird ein Region-based Convolution Neural Network (R-CNN) Deep-Learning-Modell so angepasst, dass es neben RGB auch Tiefen-Eingangsdaten verwenden kann, indem Transfer-Learning, Hyperparameter-Optimierung und Re-Training auf einem neu aufbereiteten Aufzugsbild-Datensatz angewendet werden. Auswertungen beweisen, dass mit der gewählten Strategie die Genauigkeit der R-CNN-Instanzsegmentierung auf RGB-D-Daten anwendbar ist, wodurch die mangelnde Bildqualität in den verrauschten und reflektierenden Aufzugskabinen behoben wird. Die mittlere durchschnittliche Genauigkeit (mAP) von 0,753 wird nach der Einbeziehung zusätzlicher Tiefendaten auf 0,768 erhöht und mit zusätzlichem FuseNet-FPN-Backbone auf RGB-D wird die mAP weiter auf 0,794 erhöht. Mit dem vorgeschlagenen Instanzsegmentierungsmodell wird eine zuverlässige Aufzugsüberwachung machbar, wie erste Prototypen und Praxistests beweisen.