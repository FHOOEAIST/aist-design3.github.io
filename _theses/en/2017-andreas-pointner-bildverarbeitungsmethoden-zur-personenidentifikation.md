---
lang: en
page_id: thesis:andreas-pointner-bildverarbeitungsmethoden-zur-personenidentifikation
permalink: /theses/andreas-pointner-bildverarbeitungsmethoden-zur-personenidentifikation/
date: 2017-12-31
title: Imageprocessing Methodology for Person Identification
student: Andreas Pointner
thesis_type: bachelor
categories: [cv]
project_url: https://aist.fh-hagenberg.at/index.php/de/projekte/projekt-credi2
---

In this thesis the applicability of image processing algorithms for robust person identification is evaluated. At first the state of the domain in person identification will be analyzed in detail. Later their automation possibilities will be identified. The first step is to analyze the process and represent it in the BPMN. Therefore the key areas will be modeled to achieve a legal implementation. The three main components in the process, which are implemented by this thesis, are: the recognition of the identity card, the validation of safety features, as well as the reading of the machine-readable areas. The process starts with detecting an identity card inside a picture. The algorithmic foundations are explained for this purpose, as well as an implementation of Hough-Lines, which is used for the detection, is provided. After a successful detection and equalization of the identity card, the next step is to validate the Holograms. Therefore binary and color segmentation is used to analyze the ID card. After that the binary image can be compared to a template. With a simple pixel comparison a confidence value can be calculated. This value will be analyzed over multiple images to make a clear statement of the validity of the hologram. Later on the thesis describes the reading of the machine readable part using optical character recognition (OCR). In this process step mostly preprocessing algorithms are implemented. The actual OCR will then be provided by an OCR Framework called Tesseract. Finally, the different results of each step are evaluated. The result shows that the hologram detection has some deficits in its current implementation. Therefore a final chapter describes improvement and optimization possibilities.