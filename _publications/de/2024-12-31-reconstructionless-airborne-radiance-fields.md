---
lang: de
page_id: pub:reconstructionless-airborne-radiance-fields
permalink: /publications/reconstructionless-airborne-radiance-fields/
date: 2024-12-31
title: Reconstructionless Airborne Radiance Fields
reference: Praschl C., Böss L., Schedl D.C. 2024. Reconstructionless Airborne Radiance
  Fields. SIGGRAPH 2024.
categories: [cv, geo]
doi: https://doi.org/10.1145/3641234.3671077
---

Seit einigen Jahren stellen Strahlungsfelder und insbesondere neuronale Strahlungsfelder (NeRF) einen bahnbrechenden Fortschritt in der Computergrafik dar. Sie ermöglichen die Erzeugung qualitativ hochwertiger neuer Ansichten für Szenen, die aus verschiedenen Winkeln durch mehrere Fotos oder Videos aufgenommen wurden. Anstelle herkömmlicher Methoden, die sich auf geometrische Darstellungen oder explizite Szenennetze stützen, nutzt NeRF neuronale Netze zur direkten Modellierung der volumetrischen Szenenfunktion. Auf diese Weise hat der Ansatz die Landschaft der Novel-View-Synthese dramatisch verändert und bietet einen noch nie dagewesenen Realismus und Flexibilität bei der Darstellung komplexer Szenen. Das Training von NeRF-Modellen basiert jedoch in der Regel auf rechenintensiven bildbasierten Rekonstruktionen von Kamerapositionen und visuellen Merkmalen der angesprochenen Szenen unter Verwendung von Structure from Motion (SfM). Bei der Bildgebung aus der Luft sind die Kamerapositionen bereits explizit durch exakte globale Navigationssatellitensysteme (z. B. GPS) und interne Sensoren von Luftfahrzeugen verfügbar. In dieser Arbeit stellen wir eine neuartige Verarbeitungspipeline vor, die entwickelt wurde, um Bild- und Sensordaten, die von unbemannten Luftfahrzeugen (UAVs) erfasst wurden, effektiv zu nutzen, um NeRF-ähnliche Modelle zu trainieren, ohne SfM zu benötigen.