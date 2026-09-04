---
lang: de
page_id: thesis:anthony-alessi-face-recognition-system-for-night-vision-images-using-deep-learni
permalink: /theses/anthony-alessi-face-recognition-system-for-night-vision-images-using-deep-learni/
date: 2022-12-31
title: Face Recognition system for Night Vision Images using Deep Learning
student: Anthony Alessi
thesis_type: bachelor
project_url: https://aist.fh-hagenberg.at/index.php/de/projekte/epilepsie-monitoring
---

Advanced Information Systems and Technology, kurz AIST, ist eine Forschungsgruppe der Fachhochschule Oberösterreich, angesiedelt am Campus Hagenberg, Oberösterreich. Ihre Schwerpunkte liegen in den Bereichen Machine Learning & Data Mining, Computer Vision und eHealth. Die Aufgabe für dieses Praktikum war es, am EpiMon-Projekt mitzuarbeiten.

Das Ziel des EpiMon-Projekts ist die Erkennung von epileptischen Anfällen bei kleinen bis jugendlichen Patienten, wenn diese schlafen. Eines der Anzeichen für einen aufsteigenden epileptischen Anfall ist, dass der Patient aufwacht und ständig starrt, woraufhin ein Anfall auftreten kann. Dies wird als Prévost-Zeichen bezeichnet. Es gibt noch weitere Anzeichen, wie z. B. Muskelkontraktionen, aber es gibt bereits Technologien zur Überwachung dieser Symptome. Dieses Projekt konzentriert sich speziell auf die Augen und besteht aus zwei Hardwarekomponenten: einem Raspberry Pi mit Nachtsichtkameras und einem Smartphone.

Diese Lösung verwendet Nachtsichtkameras, um den Patienten im Schlaf zu überwachen. Diese Kameras sind mit einem Raspberry Pi verbunden, der als Hauptsystem fungiert und alle anderen Komponenten miteinander verbindet. Die Bilder der Kameras werden an den Raspberry Pi übertragen, der eine Gesichtserkennung durchführt, um die Position des Gesichts auf dem Bild zu ermitteln und es zuzuschneiden. Anschließend wird das Bild des ausgeschnittenen Gesichts an ein Modell weitergeleitet, das erkennen kann, ob der Patient offene oder geschlossene Augen hat. Der Alarm ertönt, wenn offene Augen über einen längeren Zeitraum erkannt werden. Die mobile Anwendung auf dem Smartphone wird verwendet, um zu steuern, wann der Raspberry Pi mit der Überwachung beginnt, und um verschiedene Einstellungen vorzunehmen.

Das Forschungsthema dieser Arbeit ist die Gesichtserkennung. Ein Patient könnte im selben Bett schlafen wie sein Partner oder ein Familienmitglied. Das Hauptsystem muss wissen, welches Gesicht es zu überwachen hat. Durch die Aufnahme mehrerer Bilder des Patienten und seiner Familienmitglieder aus verschiedenen Blickwinkeln können die erforderlichen Daten für das Gesichtserkennungsmodell bereitgestellt werden.