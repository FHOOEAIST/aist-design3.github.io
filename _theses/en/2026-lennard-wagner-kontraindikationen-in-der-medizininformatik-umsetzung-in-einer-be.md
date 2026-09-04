---
lang: en
page_id: thesis:lennard-wagner-kontraindikationen-in-der-medizininformatik-umsetzung-in-einer-be
permalink: /theses/lennard-wagner-kontraindikationen-in-der-medizininformatik-umsetzung-in-einer-be/
date: 2026-12-31
title: Contraindications in Medical Informatics – Implementation in an Existing
  Software
student: Lennard Wagner
thesis_type: bachelor
categories: [ehealth]
---

The goal of this thesis is the digitalization and computer-aided validation of contraindications in radiologic diagnostics based upon Clinical Decision Support Systems (CDSS). CDSSs aid healthcare professionals in dealing with growing complexity of health-related information and reduce errors. In order to replace the often dangerous manual processing steps, the thesis has developed a software module as part of a CDSS in an already existing radiology information system.

One cornerstone of patient safety is the precise and complete identification of risk factors in clinical practice — e.g. metallic implants or contrast media allergy. These risk factors can be clearly identified and documented via standardized pre-exam patient interviews and structured medical history forms. The subsequent, laborious visual check performed by healthcare staff in comparison with the technical parameters of the selected imaging procedure (e.g., MRI or CT), however, places high mental stress on them, thus increasing the likelihood that life-threatening contraindications could go unnoticed.

For that reason, the software module developed and implemented in this thesis was integrated into an existing radiology information system. All modifications to master data as well as all subsequent assignments of patients are logged and versioned with respect to their origin using a database-side shadow-table-concept, which therefore provides a full audit trail. The core-logical component of the module transfers the verification-point to the clinically decisive moment of service-definition.

This means precisely at the point when the type of radiographic examination (e.g., X-ray, CT) is decided. A corresponding relation-network ensures that, due to the matching function, patient-specific risk-factors are automatically mapped onto the technical-profiles of the respective examination-modalities and equipment.

The results of the functional-evaluation demonstrate that the system reliably identifies critical matches and manages the clinical-workflow proactively. When a match occurs, medical-staff receive warnings or are blocked from completing the final-referral, while non-critical cases may continue to be handled without interfering with the workflow. Testing also identified a limitation, however; namely that the efficiency of the automatic check continues to depend on the initial manual input of contraindications for each patient. One potential solution for this problem is a future integration of this module with electronic medical-history-forms and standard catalogs that will allow for a completely automated data-entry-process.
