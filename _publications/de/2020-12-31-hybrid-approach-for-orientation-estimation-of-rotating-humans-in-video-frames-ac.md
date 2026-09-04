---
lang: de
page_id: pub:hybrid-approach-for-orientation-estimation-of-rotating-humans-in-video-frames-ac
permalink: /publications/hybrid-approach-for-orientation-estimation-of-rotating-humans-in-video-frames-ac/
date: 2020-12-31
title: Hybrid Approach for Orientation-Estimation of Rotating Humans in Video
  Frames Acquired by Stationary Monocular Camera
reference: Baumgartner D., Praschl C., Zucali T., Zwettler G. Hybrid Approach for
  Orientation-Estimation of Rotating Humans in Video Frames Acquired by Stationary
  Monocular Camera.
categories: [cv, ml]
---

Die präzise Orientierungsschätzung des Menschen in Bezug auf die POSE eines monokularen Kamerasystems ist aufgrund allgemeiner Aspekte der Kamerakalibrierung und der Verformbarkeit eines sich bewegenden menschlichen Körpers eine anspruchsvolle Aufgabe. Daher sind neuartige Ansätze des Deep Learnings zur präzisen Bestimmung der Objektposition in der Robotik schwer für die Analyse des menschlichen Körpers zu adaptieren. In dieser Arbeit wird ein hybrider Ansatz für die genaue Schätzung eines menschlichen Körpers relativ zu einem Kamerasystem vorgestellt, wodurch die aus poseNet abgeleiteten Ergebnisse durch Anwendung der Analyse des optical Flows in einem Frame-zu-Frame-Vergleich deutlich verbessert werden. Der menschliche Körper, der sich vor Ort in T-Position dreht, wird dabei in der Mitte ausgerichtet, wobei Objektverfolgungsmethoden zur Kompensation von Translationen der Körperbewegung angewendet werden. Nach der 2D-Skelettextraktion wird der optical Flow für einen ROI-Bereich berechnet, der relativ zur vertikalen Skelettverbindung, die die Wirbelsäule darstellt, ausgerichtet ist, und Bild für Bild verglichen. Um die Eignung der Kleidung als Grundlage für gute Merkmale zu bewerten, wird die lokale Pixelhomogenität berücksichtigt, um den optical Flow auf heterogene Regionen mit Unterscheidungsmerkmalen wie Aufdruckmuster, Knöpfe oder Schnallen neben der lokalen Beleuchtungsänderung zu beschränken. Basierend auf dem mittleren optical Flow mit grober Annäherung an die axiale Körperform als Ellipse wird eine Genauigkeit zwischen 0,1° und 2,0° für die Orientierungsschätzung auf einem Frame-zu-Frame-Vergleich erreicht, der sowohl auf CGI-Renderings als auch auf realen Videos von Personen, die Kleidung mit unterschiedlichen Merkmalen tragen, ausgewertet und validiert wird.