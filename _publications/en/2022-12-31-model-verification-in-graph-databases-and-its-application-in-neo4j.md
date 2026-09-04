---
lang: en
page_id: pub:model-verification-in-graph-databases-and-its-application-in-neo4j
permalink: /publications/model-verification-in-graph-databases-and-its-application-in-neo4j/
date: 2022-12-31
title: Model Verification in Graph Databases and its Application in Neo4j
categories: [se]
reference: Praschl C., Pointner A., Krauss O., Helm E., Schuler A. “Model Verification
  in Graph Databases and its Application in Neo4j.” Proceedings of the 34th European
  Modeling and Simulation Symposium EMSS2022, Rom, Italy (2022).
---

This work introduces a concept for rule based model verification using a graph database on the example of Neo4j and its query language Cypher. An approach is provided that allows to define verification rules using a graph query language to detect transformation errors within a given domain model. The approach is presented based on a running example, showing its capability of detecting randomly generated errors in a transformation process. Additionally, the method’s performance is evaluated using multiple subsets of the IMDb movie data with a maximum of 17,000,000 nodes and 41,000,000 relationships. This performance evaluation is carried out in comparison to the Object Constraint Language, showing advantages in the context of highly connected datasets with a high number of nodes. Another benefit is the utilization of a well established graph database as verification tool without any need for re-implementing graph and pattern matching logic.