---
lang: de
page_id: pub:performance-impact-of-parallel-access-of-time-series-in-the-context-of-relationa
permalink: /publications/performance-impact-of-parallel-access-of-time-series-in-the-context-of-relationa/
date: 2023-12-31
title: Performance Impact of Parallel Access of Time Series in the Context of
  Relational, NOSQL and NEWSQL Database Management Systems
reference: Pritz S., Zeinzinger M., Praschl C., Krauss O., Harrer M. „Performance
  Impact of Parallel Access of Time Series in the Context of Relational, NOSQL and
  NEWSQL Database Management Systems“ in Proceedings of International Conference on
  Electrical, Computer, Communications and Mechatronics Engineering (ICECCME), 2023.
category: ml
---

Zeitreihendaten werden in verschiedenen Anwendungsbereichen erzeugt, z. B. in IoT-Geräten oder Sensoren in Fahrzeugen. Diese Art von Daten zeichnet sich häufig durch einen hohen Ressourcenbedarf aus, da die Intervalle, in denen die Informationen gemessen werden, von täglich bis hin zu Millisekunden reichen. Neben der Häufigkeit ist auch die Anzahl der Datenquellen, z. B. Hunderte von Sensoren in modernen Flugzeugen, die gleichzeitig Zeitreihen erzeugen, typisch für solche Big-Data-Szenarien. Solche Szenarien erfordern die Persistenz der Messungen für weitere Auswertungen. In dieser Arbeit führen wir einen künstlichen Datenbenchmark für relationale, NoSQL- und NewSQL-Datenbankmanagementsysteme im Kontext von Zeitreihen ein. Wir vergleichen diese Datenbanken, indem wir mehrere lesende und schreibende Datenquellen gleichzeitig auf die Datenbankmanagementsysteme zugreifen lassen. Die Auswertung zeigt, dass kein getestetes System alle anderen Systeme übertrifft. Während DolphinDB in Einzelnutzerszenarien die höchste Leseleistung aufweist, kann CrateDB seine Vorteile ausspielen, wenn mehrere Nutzer gleichzeitig auf die Daten zugreifen.