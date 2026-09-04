---
lang: en
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

Fitting real world data into a model for classification, is a challenging task. Modern approaches to classification are often resource intensive and may become bottlenecks. A microservice architecture that allows maintaining a model of real world data, and adding new information as it becomes available is presented in this paper. Updates to the model are handled via different microservices. The architecture and connected workflows are demonstrated in a use case of classifying text data in a taxonomy represented by a directed acyclic graph (DAG). The presented architecture removes the classification bottleneck, as multiple data points can be added independent of each other, and reading access to the model is not restricted. Additional microservices also enable a manual intervention to update the model.