---
lang: de
page_id: pub:evaluation-of-novel-view-synthesis-in-the-context-of-radiometric-drone-imagery
permalink: /publications/evaluation-of-novel-view-synthesis-in-the-context-of-radiometric-drone-imagery/
date: 2026-03-01  # month confirmed (March 2026); exact day unknown
title: Evaluation of Novel View Synthesis in the Context of Radiometric Drone
  Imagery
reference: Praschl C., Schoibesberger S., Schedl D. “Evaluation of Novel View Synthesis
  in the Context of Radiometric Drone Imagery“, GRIVAPP 2026.
categories: [cv, geo]
doi: https://doi.org/10.5220/0014460900004728
---

Jüngste Fortschritte bei neuronalen Szenenrepräsentationen, insbesondere Neural Radiance Fields (NeRF) und 3D Gaussian Splatting (3DGS), haben die Synthese neuer Ansichten revolutioniert. Diese Verfahren sind jedoch überwiegend für bodengestützte Daten im sichtbaren Spektrum (RGB) optimiert und evaluiert, wodurch eine erhebliche Lücke bei ihrer Anwendung auf luftgestützte, radiometrische Thermalbilddaten entsteht, die für industrielle Inspektion, Such- und Rettungseinsätze sowie Umweltmonitoring von zentraler Bedeutung sind. In dieser Arbeit untersuchen wir systematisch die Anwendbarkeit dieser modernen Paradigmen auf radiometrische Thermalbilddaten, die von luftgestützten Drohnenplattformen erfasst wurden. Wir stellen einen neuen, öffentlich verfügbaren multimodalen Datensatz vor, der mit einem DJI-M30T-System aufgenommen wurde und synchronisierte RGB- und radiometrische Thermal-Frames eines Gebäudes umfasst. Wir führen eine umfassende Evaluierung durch, in der spezialisierte Thermal-Ansätze (ThermalNeRF, ThermoNeRF, Thermal3DGS) mit allgemeinen Verfahren (nerfacto, gsplat) verglichen werden. Unsere Bewertung nutzt eine Reihe quantitativer Metriken (PSNR, SSIM, MAE, LPIPS und DISTS), ergänzt durch qualitative visuelle Analyse. Die Ergebnisse zeigen, dass Thermal3DGS im thermalen Bereich Spitzenleistungen erzielt (PSNR 22,99, SSIM 0,845) und dabei Artefakte, die bei texturarmen Thermaldaten häufig auftreten, wirksam reduziert. Demgegenüber zeigt gsplat eine überlegene RGB-Synthese und eine konkurrenzfähige thermale Leistung, was darauf hindeutet, dass allgemeine Splatting-Repräsentationen robust genug für spektrenübergreifende Anwendungen sind. Diese Arbeit schließt die Lücke zwischen luftgestützter radiometrischer Sensorik und neuronalem Rendering und zeigt, dass handelsübliche Drohnen-Thermografie mit minimaler Anpassung für hochwertige 3D-Thermalrekonstruktionen genutzt werden kann.