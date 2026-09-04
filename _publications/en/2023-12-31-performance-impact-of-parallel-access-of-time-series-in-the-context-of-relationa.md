---
lang: en
page_id: pub:performance-impact-of-parallel-access-of-time-series-in-the-context-of-relationa
permalink: /publications/performance-impact-of-parallel-access-of-time-series-in-the-context-of-relationa/
date: 2023-12-31
title: Performance Impact of Parallel Access of Time Series in the Context of
  Relational, NOSQL and NEWSQL Database Management Systems
reference: Pritz S., Zeinzinger M., Praschl C., Krauss O., Harrer M. „Performance
  Impact of Parallel Access of Time Series in the Context of Relational, NOSQL and
  NEWSQL Database Management Systems“ in Proceedings of International Conference on
  Electrical, Computer, Communications and Mechatronics Engineering (ICECCME), 2023.
categories: [ml, se]
---

Time series data is generated in various application areas, such as IoT devices or sensors in vehicles. This type of data is often characterized by a high resource demand due to the interval at which information is measured ranges from daily down to milliseconds. Next to the frequency, the number of data sources, for example hundreds of sensors in modern airplanes generating time series concurrently, is typical for such big data scenarios. Such scenarios require the persistence of the measurements for further evaluations. In this work, we introduce an artificial data benchmark for relational, NoSQL, and NewSQL database management systems in the context of time series. We compare these databases by having multiple read and write data sources accessing the database management systems simultaneously. The evaluation shows that no tested system outperforms all other systems. While DolphinDB shows the highest read performance in single-user scenarios, CrateDB is able to show its advantages regarding when multiple users access the data simultaneously.