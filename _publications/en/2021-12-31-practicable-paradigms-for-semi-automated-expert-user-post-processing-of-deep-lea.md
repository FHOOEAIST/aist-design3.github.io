---
lang: en
page_id: pub:practicable-paradigms-for-semi-automated-expert-user-post-processing-of-deep-lea
permalink: /publications/practicable-paradigms-for-semi-automated-expert-user-post-processing-of-deep-lea/
date: 2021-12-31
title: Practicable Paradigms for Semi-Automated Expert-User Post-Processing of
  Deep-Learning Segmentations in 3D Radiology
reference: Jany J., Zwettler G. (2021). In Proceedings of 33rd European Modeling &
  Simulation Symposium.
categories: [ehealth, cv, ml]
doi: https://doi.org/10.46354/i3m.2021.iwish.007
---

With recent improvements in deep-learning architectures and availability of GPU hardware, state of the art deep learning (DL) has already manifested as powerful image processing technology in the clinical routine to provide segmentation results of high accuracy. As a drawback, it’s black-box nature does not naturally feature inspection and post-processing by medical experts. We present a Graph segmentation (GS) approach that derives it’s fitness function from arbitrary DL results in a generic way. To allow for efficient and effective post-processing by the medical experts, various interaction paradigms are presented and evaluated in this paper. The trade-off of GS compared to the initial DL results is marginal (delta JI= 0.196%), yet potential DL segmentation errors can be corrected in a reliable way. The intuitive approach shows a high level of both, inter and intra user reproducibility. Change propagation of corrected slices keeps the demand for user-interaction to a minimum when successfully correction potential weaknesses in the DL segmentations. Thereby, the formerly error-prone slice mini-batches get corrected in an automated way with the JI being significantly increased.