---
lang: en
page_id: pub:managing-incompatible-fhir-implementation-guides-in-a-single-backend
permalink: /publications/managing-incompatible-fhir-implementation-guides-in-a-single-backend/
date: 2026-05-12
title: "Managing Incompatible FHIR Implementation Guides in a Single Backend: Namespace-Based Storage in Neo4j and Multi-Profile Delivery"
reference: 'Krauss O., Pointner A., Praschl C. “Managing Incompatible FHIR Implementation
  Guides in a Single Backend: Namespace-Based Storage in Neo4j and Multi-Profile Delivery“,
  DHealth 2026.'
categories: [ehealth, se]
doi: https://doi.org/10.3233/SHTI260085
---

Achieving interoperability with HL7 FHIR in practice requires creating a FHIR Implementation Guide (IG). Between the many IGs at international, national, and local levels, incompatibilities are inevitable — for example, one IG requiring a field to be filled in while another explicitly forbids it. The same application, such as a FHIR server or FHIR facade, must then handle inherently incompatible resource structures. We use Germany as a real-world failure case: three competing IGs (basisprofile-de, KBV-Basis-Profile, and ISiK), which were not aligned during development, have become mandatory; many organizations must implement all three for the same patient. We systematically compare KBV Base 1.x and ISiK Basismodul v2, identifying hard structural conflicts including closed versus open slicing on Condition.onset[x] and disjoint address and name type constraints on Patient, Practitioner, and RelatedPerson. We show one possible technical response: we cannot resolve the fact that FHIR disallows one resource from conforming to all three IGs at once, but our namespace-based data management in Neo4j is designed to allow storing data without redundancy and delivering the same patient in three different formats depending on which profile the client requests. Future work includes integrating this model with FHIR profile comparison tooling, evaluating performance at scale, and aligning with HL7 Europe EHDS implementation guides as they mature.