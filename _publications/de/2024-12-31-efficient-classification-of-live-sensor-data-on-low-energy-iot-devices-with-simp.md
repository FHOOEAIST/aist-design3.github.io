---
lang: de
page_id: pub:efficient-classification-of-live-sensor-data-on-low-energy-iot-devices-with-simp
permalink: /publications/efficient-classification-of-live-sensor-data-on-low-energy-iot-devices-with-simp/
date: 2024-12-31
title: Efficient classification of live sensor data on Low-Energy IoT devices
  with simple Machine Learning methods
reference: Hanreich M., Krauss O., Zwettler G. “Efficient classification of live sensor
  data on Low-Energy IoT devices with simple Machine Learning methods“, EUROCAST 2024.
categories: [ml]
external_url: https://eurocast2024.fulp.ulpgc.es/documents/Eurocast_2024_Extended_Abstract_Book.pdf
---

Geräte des Internets der Dinge (IoT) sind allgegenwärtig, können aber oft nicht dauerhaft an das Stromnetz angeschlossen werden und sind daher auf Batterien und andere Energiequellen wie Solarstrom angewiesen. Diese mobilen Geräte sollten über einen langen Zeitraum laufen, ohne dass sie aufgeladen werden müssen, und dennoch in der Lage sein, vergleichsweise komplexe Aufgaben aus dem Bereich des maschinellen Lernens zu erfüllen, wie z. B. eine Klassifizierungsaufgabe für Live-Sensordaten. Der Stand der Technik, was die Genauigkeit betrifft, sind neuronale Netzwerkmodelle wie LSTM (Long short-term memory) oder CNN (Convolutional neural network). Diese Modelle beanspruchen jedoch in der Regel mehr Flash-Speicher, mehr Arbeitsspeicher der Geräte und mehr CPU-Zeit als herkömmliche maschinelle Lernansätze, was wiederum einen höheren Energiebedarf verursacht. Eine andere Möglichkeit besteht darin, die Zeitreihendaten an einen externen Server zu übertragen, um dort die Berechnungen durchzuführen und das Ergebnis zurückzusenden. Für eine kontinuierliche Klassifizierung von Sensordaten ist dieser Ansatz jedoch oft nicht praktikabel, da die ständige Übertragung einer großen Datenmenge über ein drahtloses Netzwerk erforderlich ist. Wir diskutieren eine Pipeline für eine effiziente Zeitreihenklassifizierung von Live-Sensordaten auf IoT-Geräten mit geringem Energieverbrauch und geräteinterner Verarbeitung. Wir stellen unsere Fallstudie zur Erkennung von Booten vor, die an einer IoT-fähigen Boje anlegen, die über mehrere Monate hinweg energieautark sein muss.