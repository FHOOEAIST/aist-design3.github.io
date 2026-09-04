---
lang: de
page_id: thesis:selina-adlberger-a-conceptual-fhir-based-model-for-transparent-documentation-of
permalink: /theses/selina-adlberger-a-conceptual-fhir-based-model-for-transparent-documentation-of/
date: 2026-12-31
title: A Conceptual FHIR-Based Model for Transparent Documentation of AI Usage in
  Medical Data
student: Selina Adlberger
thesis_type: master
categories: [ehealth]
---

Künstliche Intelligenz (KI) wird im Gesundheitswesen zunehmend eingesetzt, um die Verarbeitung, Interpretation und Analyse medizinischer Daten zu unterstützen. Während KI-basierte Systeme klinische Arbeitsabläufe verbessern können, bringt ihr Einsatz auch Herausforderungen in Bezug auf Transparenz, Nachvollziehbarkeit, Verantwortlichkeit und den vertrauenswürdigen Umgang mit Patientendaten mit sich. In klinischen Kontexten ist es häufig nicht ausreichend, nur das endgültige Ergebnis zu dokumentieren. Es sollte auch möglich sein, nachzuvollziehen, welches KI-System verwendet wurde, welche Daten zu einem Ergebnis beigetragen haben, unter welchen Bedingungen das System ausgeführt wurde und wie das Ergebnis durch eine medizinische Fachperson überprüft wurde.

Diese Arbeit adressiert die Lücke zwischen abstrakten europäischen regulatorischen Transparenzanforderungen und deren konkreter technischer Repräsentation in interoperablen Gesundheitsinformationssystemen. Ziel ist die Entwicklung eines konzeptuellen, auf Fast Healthcare Interoperability Resources (FHIR) basierenden Modells zur transparenten Dokumentation des KI-Einsatzes in der Verarbeitung medizinischer Daten. Auf Grundlage eines qualitativen Design-Science-Research-Ansatzes werden transparenz- und dokumentationsbezogene Anforderungen aus dem Artificial Intelligence Act, der Datenschutz-Grundverordnung und dem European Health Data Space abgeleitet. Diese Anforderungen werden in ein konzeptuelles Modell überführt und durch Profile, Erweiterungen, Terminologiebindungen und einen Implementation Guide auf HL7 FHIR Release 5 abgebildet.

Das vorgeschlagene Modell strukturiert KI-bezogene Transparenzinformationen in drei miteinander verbundene Kontexte: statische KI-Systemmetadaten, patientenspezifischer KI-Ausgabekontext und klinischer Entscheidungskontext. Dadurch wird die Dokumentation von Systemidentifikation, Ausführungsmetadaten, Datenprovenienz, rechtlichem Kontext, Audit-Informationen, menschlicher Aufsicht und patientenbezogener Transparenz ermöglicht. Ein leichtgewichtiger Proof of Concept auf Basis eines synthetischen Akutversorgungsszenarios zeigt, dass repräsentative KI-bezogene Metadaten in FHIR-Ressourcen transformiert und syntaktisch gegen die definierten Profile validiert werden können.

Die Ergebnisse zeigen, dass das vorgeschlagene Modell eine technisch realisierbare Struktur zur Verbesserung der Nachvollziehbarkeit und Auditierbarkeit KI-gestützter medizinischer Datenverarbeitung bereitstellt. Die Validierung ist jedoch auf syntaktische Konformität beschränkt und stellt weder eine klinische Validierung noch eine rechtliche Konformitätszertifizierung oder Produktionsreife dar.
