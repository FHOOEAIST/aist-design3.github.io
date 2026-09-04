---
lang: de
page_id: pub:managing-incompatible-fhir-implementation-guides-in-a-single-backend
permalink: /publications/managing-incompatible-fhir-implementation-guides-in-a-single-backend/
date: 2026-05-12
title: "Managing Incompatible FHIR Implementation Guides in a Single Backend: Namespace-Based Storage in Neo4j and Multi-Profile Delivery"
reference: 'Krauss O., Pointner A., Praschl C. “Managing Incompatible FHIR Implementation
  Guides in a Single Backend: Namespace-Based Storage in Neo4j and Multi-Profile Delivery“,
  DHealth 2026.'
category: ehealth
doi: https://doi.org/10.3233/SHTI260085
---

Interoperabilität mit HL7 FHIR in der Praxis zu erreichen erfordert die Erstellung eines FHIR Implementation Guide (IG). Zwischen den vielen IGs auf internationaler, nationaler und lokaler Ebene sind Inkompatibilitäten unvermeidlich — etwa wenn ein IG ein Feld als verpflichtend vorschreibt, während ein anderer es explizit verbietet. Dieselbe Anwendung, etwa ein FHIR-Server oder eine FHIR-Facade, muss dann mit inhärent inkompatiblen Ressourcenstrukturen umgehen. Wir verwenden Deutschland als realen Fehlerfall: Drei konkurrierende IGs (basisprofile-de, KBV-Basis-Profile und ISiK), die während ihrer Entwicklung nicht aufeinander abgestimmt wurden, sind mittlerweile verpflichtend; viele Organisationen müssen alle drei für denselben Patienten implementieren. Wir vergleichen systematisch KBV Base 1.x und ISiK Basismodul v2 und identifizieren strukturelle Hartkonflikte, darunter geschlossenes versus offenes Slicing bei Condition.onset[x] sowie disjunkte Constraints für Adress- und Namenstypen bei Patient, Practitioner und RelatedPerson. Wir zeigen eine mögliche technische Lösung: Wir können nicht auflösen, dass FHIR es einer Ressource nicht erlaubt, gleichzeitig allen drei IGs zu entsprechen, doch unsere namensraumbasierte Datenverwaltung in Neo4j ermöglicht es, Daten redundanzfrei zu speichern und denselben Patienten je nach angefragtem Profil in drei unterschiedlichen Formaten auszuliefern. Zukünftige Arbeiten umfassen die Integration dieses Modells mit Tools zum Vergleich von FHIR-Profilen, die Evaluierung der Performance im großen Maßstab sowie die Angleichung an die HL7-Europe-EHDS-Implementation-Guides, sobald diese ausgereift sind.