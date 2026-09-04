---
lang: de
page_id: thesis:lennard-wagner-kontraindikationen-in-der-medizininformatik-umsetzung-in-einer-be
permalink: /theses/lennard-wagner-kontraindikationen-in-der-medizininformatik-umsetzung-in-einer-be/
date: 2026-12-31
title: Kontraindikationen in der Medizininformatik – Umsetzung in einer bestehenden
  Software
student: Lennard Wagner
---

In dieser Arbeit wird die Digitalisierung und softwaretechnische Absicherung von Kontraindikationen in der radiologischen Diagnostik durch den Einsatz von Clinical Decision Support Systems (CDSS) behandelt. Solche Systeme unterstützen das medizinische Personal dabei, die stetig wachsende Komplexität medizinischer Informationen zu bewältigen und Fehler zu reduzieren. Zur Lösung der potenziell fehleranfälligen manuellen Abläufe wird in dieser Arbeit ein Softwaremodul als integratives CDSS innerhalb eines bestehenden Radiologieinformationssystems entwickelt.

Gerade in der klinischen Praxis ist die richtige und lückenlose Identifikation von Risikofaktoren wie z. B. metallischen Implantaten oder Kontrastmittelallergien eine der tragenden Säulen der Patientensicherheit. Kritische Risikofaktoren lassen sich im Rahmen der klassischen präuntersuchungsbezogenen Patienteninterviews und strukturierten Anamnesebögen durchaus erfolgreich bestimmen und erheben. Der dann folgende manuelle Abgleichung dieser Faktoren mit den physikalischen und technischen Parametern der speziellen Bildgebungsverfahren wie MRT oder CT ist aufwendig. Die visuelle Kontrolle durch das medizinische Personal führt zu hoher geistiger Beanspruchung und damit zu der Möglichkeit, dass lebensbedrohliche Kontraindikationen übersehen werden.

Zur Lösung des Problems wurde das in dieser Arbeit konzipierte und implementierte Softwaremodul innerhalb eines bestehenden Radiologieinformationssystems integriert. Jede Änderung in den Stammdaten oder nachträgliche Neuzuordnung eines Patienten wird über ein datenbankseitiges Schatten-Tabellenkonzept historisiert und versioniert und damit vollständig revisionssicher gehalten. Die logische Kernkomponente des Moduls verlagert den Prüfungszeitpunkt auf den klinisch kritischen Zeitpunkt der Leistungsdefinition, also genau dann wenn die spezifische Art der radiologischen Untersuchung (z. B. Röntgen, CT) festgelegt wird. Über ein entsprechendes Beziehungsnetzwerk erfolgt der Abgleich der patientenspezifischen Risikofaktoren mit den technischen Profilen der jeweiligen Untersuchungsmodalitäten und Geräten vollautomatisch.

Die Ergebnisse der funktionalen Evaluierung zeigen, dass das System kritische Übereinstimmungen zuverlässig abfängt und den klinischen Ablauf proaktiv steuert. Liegt ein Treffer vor, wird das medizinische Personal bei der endgültigen Zuweisung entweder gewarnt oder blockiert, während unkritische Fälle ohne Workflowunterbrechung abgearbeitet werden können. Einschränkend zeigt sich im Testbetrieb jedoch, dass die Effizienz der automatisierten Prüfung noch von der manuellen Ersteingabe der Kontraindikationen je Patient abhängt. Einen wesentlichen Ausblick bildet hier die zukünftige Kopplung dieses Moduls mit elektronischen Anamneseblättern und standardisierten Katalogen, mit deren Hilfe der Erfassungsprozess vollständig automatisiert werden kann.
