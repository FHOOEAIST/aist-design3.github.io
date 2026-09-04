---
lang: en
page_id: thesis:anna-lackerbauer-digitalising-consent-in-healthcare-development-of-an-econsent-b
permalink: /theses/anna-lackerbauer-digitalising-consent-in-healthcare-development-of-an-econsent-b/
date: 2018-12-31
title: "Digitalising Consent in Healthcare: Development of an eConsent Backend"
student: Anna Lackerbauer
thesis_type: master
---

One of the key elements for protecting human subjects of research studies and patients who receive medical treatment is obtaining informed consent. Not only is this about giving the subject or patient freedom of choice, but it is a whole process that provides sufficient information, asserts comprehension and later documents the decision made. Currently, this is very often achieved by oral information sessions, in some cases supported with print-out material, and the later signature of a paper-based consent form. Transforming it to a digital process of obtaining consent electronically (eConsent) has the potential for increasing comprehension, data quality and patient empowerment while at the same time reducing costs. This thesis identifies eight requirements for an eConsent architecture for research studies as well as for medical treatment. Subsequently, a backend model for this architecture based on the HL7 FHIR standard is proposed and implemented as part of an open-source prototype. The thesis was realised in cooperation with two stakeholders in Toronto, Canada: The Centre for Global eHealth Innovation and Dr. Alvin Lin. The proposed concept makes use of the existing consent model of HL7 FHIR, which has been implemented for the privacy consent use case. Moreover, some extensions of the standard help meet the requirements while focusing on the capability to auto-generate a user interface (UI). To enable semantic interoperability with other health information

systems, SNOMED CT is used as an internationally standardised terminology for selected predefined parts of the information. The proposed eConsent architecture meets most of the identified requirements. That said, the system is limited by the low maturity of the implemented FHIR resources and the fact that the terminology for the use case is currently not exhaustive. Additional custom extensions of the used FHIR resources or switching to another digital source of information than the proposed FHIR QuestionnaireResponse must be considered.