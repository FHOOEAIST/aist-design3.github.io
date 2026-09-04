---
lang: en
page_id: pub:towards-modelling-namespaces-in-graph-databases
permalink: /publications/towards-modelling-namespaces-in-graph-databases/
date: 2022-12-31
title: Towards Modelling Namespaces in Graph Databases
categories: [se]
reference: Pointner A., Praschl C., Krauss O. “Towards Modelling Namespaces in Graph
  Databases”. Proceedings of the 34rd European Modeling and Simulation Symposium EMSS2022,
  Rom, Italy (2022).
---

We present a novel approach to store data with different contexts inside a property graph model. We introduce namespaces, similar to namespaces in XML, and extend nodes and relationships with labels to assign them to a specific context, i.e. namespace. Individual properties of a node or relationship can also be put in a namespace. This work is specifically targeting the utilization in graph databases, with a reference implementation provided via the Neo4j database. In addition to the theoretical approach, an object to graph mapper for the programming language Java is implemented and used to evaluate the approach. As an evaluation example, a university organization is used, which is split into two domains. The experiments show, that information of different domains can be stored within the same model using namespaces. Thus, it is possible to reuse shared information over multiple contexts, which reduces data duplication in the graph database, as otherwise multiple nodes would be required.