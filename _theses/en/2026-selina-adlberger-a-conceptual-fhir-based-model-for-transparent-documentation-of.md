---
lang: en
page_id: thesis:selina-adlberger-a-conceptual-fhir-based-model-for-transparent-documentation-of
permalink: /theses/selina-adlberger-a-conceptual-fhir-based-model-for-transparent-documentation-of/
date: 2026-12-31
title: A Conceptual FHIR-Based Model for Transparent Documentation of AI Usage in
  Medical Data
student: Selina Adlberger
thesis_type: master
---

Artificial Intelligence (AI) is increasingly used in healthcare to support the processing, interpretation, and analysis of medical data. While AI-based systems can improve clinical workflows, their use also introduces challenges related to transparency, traceability, accountability, and the trustworthy handling of patient data. In clinical contexts, documenting only the final result is often insufficient. It should also be possible to reconstruct which AI system was used, which data contributed to an output, under which conditions the system was executed, and how the result was reviewed by a healthcare professional.

This thesis addresses the gap between high-level European regulatory transparency requirements and their concrete technical representation in interoperable healthcare information systems. The aim is to develop a conceptual Fast Healthcare Interoperability Resources (FHIR)-based model for the transparent documentation of AI usage in medical data processing. Based on a qualitative Design Science Research approach, transparency- and documentation-related requirements are derived from the Artificial Intelligence Act, the General Data Protection Regulation, and the European Health Data Space. These requirements are translated into a conceptual model and mapped to HL7 FHIR Release 5 through profiles, extensions, terminology bindings, and an Implementation Guide.

The proposed model structures AI-related transparency information into three connected contexts: static AI system metadata, patient-specific AI output context, and clinical decision context. This enables the documentation of system identification, execution metadata, data provenance, legal context, audit information, human oversight, and patient-facing transparency. A lightweight proof of concept based on a synthetic acute-care scenario demonstrates that representative AI-related metadata can be transformed into FHIR resources and syntactically validated against the defined profiles.

The results show that the proposed model provides a technically feasible structure for improving the traceability and auditability of AI-supported medical data processing. However, the validation is limited to syntactic conformance and does not constitute clinical validation, legal compliance certification, or production readiness.
