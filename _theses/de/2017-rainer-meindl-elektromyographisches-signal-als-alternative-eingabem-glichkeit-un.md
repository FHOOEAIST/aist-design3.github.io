---
lang: de
page_id: thesis:rainer-meindl-elektromyographisches-signal-als-alternative-eingabem-glichkeit-un
permalink: /theses/rainer-meindl-elektromyographisches-signal-als-alternative-eingabem-glichkeit-un/
date: 2017-12-31
title: Elektromyographisches Signal als alternative Eingabemöglichkeit unter Android
student: Rainer Meindl
project_url: https://aist.fh-hagenberg.at/index.php/en/projects/project-psii-rehab-2
---

Im Rahmen eines Forschungsprojekts mit der Firma Psii.Rehab stellt sich die Frage ob und wie Biofeedback in Form eines elektromyographischen Signals als Eingabemöglichkeit in einer Applikation verwendet werden kann. Damit soll die Effektivität der Spiegeltherapie verbessert werden. Dies soll eng mit der Virtuellen Realität, mobilen Geräten und Fingertracking zusammenspielen um ein immersiveres Erlebnis zu erzeugen. Daher wird im Rahmen der Arbeit Hardware in Form von Mobile–Virtual Reality Brillen, Fingertrackingsensoren und Elektromyographen evaluiert mit dem Ziel ein hardwareunabhängiges System zu entwickeln, das Android als Zielplattform hat und durch ein elektromyographisches Signal gestützt wird. Wegen diesen Gründen wird das Unity Framework eingesetzt

Hauptaugenmerk wird auf den Elektromyographen Thalmic Myo gelegt, da er eines der wenigen Geräte ist, die verschiedene Anforderungen, wie etwa Abgreifen von Roh–Signal, Einspeisen der Daten in Unity usw., ermöglicht. Damit sind aber viele Probleme verbunden, da die Funktionalität der vom Hersteller gelieferten Software unvollständig ist bzw. unter Android gänzlich fehlt und selbst nachimplementiert werden muss.

Das aus der Thalmic Myo erhaltene Roh–Signal muss durch spezielle Verfahren normalisiert und aufgrund der Anforderungen abstrahiert werden. Erst dann kann es für eine Demoapplikation eingesetzt werden. Diese Applikation ist lediglich eine kleine Demonstration, wie die Implementierung eines Eingabesystems basierend auf einem Elektromyographischen Signal aussehen kann und welche Möglichkeiten sich dadurch präsentieren.