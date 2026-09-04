---
lang: de
page_id: pub:towards-modelling-namespaces-in-graph-databases
permalink: /publications/towards-modelling-namespaces-in-graph-databases/
date: 2022-12-31
title: Towards Modelling Namespaces in Graph Databases
category: se
reference: Pointner A., Praschl C., Krauss O. “Towards Modelling Namespaces in Graph
  Databases”. Proceedings of the 34rd European Modeling and Simulation Symposium EMSS2022,
  Rom, Italy (2022).
---

Wir stellen einen neuen Ansatz vor, um Daten mit verschiedenen Kontexten in einem Eigenschaftsgraphenmodell zu speichern. Wir führen Namespaces ein, ähnlich den Namespaces in XML, und erweitern Knoten und Beziehungen mit Labels, um sie einem bestimmten Kontext, d.h. Namespace, zuzuordnen. Auch einzelne Eigenschaften eines Knotens oder einer Beziehung können in einen Namensraum gestellt werden. Diese Arbeit zielt speziell auf die Nutzung in Graphdatenbanken ab, wobei eine Referenzimplementierung über die Datenbank Neo4j bereitgestellt wird. Neben dem theoretischen Ansatz wird ein Object-to-Graph-Mapper für die Programmiersprache Java implementiert und zur Evaluierung des Ansatzes verwendet. Als Evaluierungsbeispiel wird eine Universitätsorganisation verwendet, die in zwei Domänen aufgeteilt ist. Die Experimente zeigen, dass Informationen verschiedener Domänen innerhalb desselben Modells unter Verwendung von Namespaces gespeichert werden können. Dadurch ist es möglich, gemeinsam genutzte Informationen über mehrere Kontexte hinweg wiederzuverwenden, was die Datenduplizierung in der Graphdatenbank reduziert, da ansonsten mehrere Knoten erforderlich wären.