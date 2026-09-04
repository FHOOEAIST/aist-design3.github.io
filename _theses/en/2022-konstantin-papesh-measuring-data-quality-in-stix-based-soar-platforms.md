---
lang: en
page_id: thesis:konstantin-papesh-measuring-data-quality-in-stix-based-soar-platforms
permalink: /theses/konstantin-papesh-measuring-data-quality-in-stix-based-soar-platforms/
date: 2022-12-31
title: Measuring Data Quality in STIX-based SOAR Platforms
student: Konstantin Papesh
project_url: https://aist.fh-hagenberg.at/index.php/de/projekte/soc-toolkit
---

Security analysts use Security Orchestration, Automation, and Response (SOAR) platforms to dissect and analyse possible malicious data. These platforms rely on external services to enrich the given data. However, the data quality of new services is often unknown. To mitigate this issue, metrics can be established to assess different parameters in connection with data quality.

This thesis analyses Cyber Threat Intelligence (CTI) metrics currently proposed in the literature on their viability within Structured Threat Information Expression (STIX)-based SOAR platforms and implements the first version of such a measuring framework. Multiple metrics are compared against a list of requirements set by the nature of SOAR platforms. After viable metrics are identified, they are implemented within a framework which hooks into an existing SOAR platform. Finally, the framework is tested, and the calculated metrics are discussed.

The conclusion is that there are metrics available that can be altered to work with SOAR platforms. However, some metrics rely on parameters not readily accessible from SOAR platforms. That means the design of these platforms also needs to consider the requirements for data quality frameworks.