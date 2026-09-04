---
lang: en
page_id: pub:multi-resolution-localization-of-individual-logs-in-wooden-piles-utilizing-yolo-
permalink: /publications/multi-resolution-localization-of-individual-logs-in-wooden-piles-utilizing-yolo-/
date: 2021-12-31
title: Multi-Resolution Localization of Individual Logs in Wooden Piles
  Utilizing YOLO with Tiling on Client/Server Architectures
reference: Praschl C., Auserperg-Castell P., Forster-Heinlein B. (2021). In Proceedings
  of 33rd European Modeling & Simulation Symposium.
categories: [cv, ml]
doi: https://doi.org/10.46354/i3m.2021.emss.042
---

In industrial domains with time and cost intensive manual or semi-automated inspection the demand for automation is high. Utilizing state of the art deep learning models for localization in vision-based domains such as wood log analysis, the precision can be increased while reducing the demand for manual inspection. In this paper a YOLO network is trained on wood log images to allow for detection of single wood piles in images with hundreds and thousands instances. Due to the high variability in scale and large amount of wood logs within the images, common YOLO architectures are not applicable. Thus, tiling is necessitated to implicitly form a multi-resolution image pyramid. Due to lack in training data, besides common data augmentation modelling of different seasonal and weather conditions is applied. The wood log detection process can be run on a client/server architecture to allow for both, preview and refined results. Evaluation on real-world data sets shows an log detection accuracy of 82,9% utilizing a tiny YOLO model and 94,1% with a fully connected YOLO model, respectively.