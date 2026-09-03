---
lang: en
page_id: pub:oh-deer-should-i-handle-this-seasonal-priors-for-selective-wildlife-annotation
permalink: /publications/oh-deer-should-i-handle-this-seasonal-priors-for-selective-wildlife-annotation/
date: 2026-08-03  # arXiv submission date, not necessarily the final proceedings date
title: Oh Deer, Should I Handle This? Seasonal Priors for Selective Wildlife
  Fine-Grained Annotation
reference: Markoff H\., Praschl C\., Jørgensen A\., Mogensen C\., Skadhauge M\.,
  Beery S\., Ørsted M\., Schedl D\.“Oh Deer, Should I Handle This? Seasonal
  Priors for Selective Wildlife Fine\-Grained Annotation“, CV4E Workshop @ ECCV
  2026\.
category: computer_vision
external_url: https://arxiv.org/abs/2608.02762
---

Fine\-grained wildlife classification in aerial imagery is limited not only by model performance, but also by unreliable labels: animals occupy few pixels, key visual cues vary seasonally, and modality\-specific evidence can be ambiguous\. We study adult\-male identification in red deer \(Cervus elaphus\), where the antler cycle defines predictable windows of reliable evidence for both annotation and prediction\. Using 7,295 RGB\-only, thermal\-only, and matched RGB+thermal crop sets from low\-altitude UAV surveys, labeled by three annotators, we show that seasonal structure links \(I\) annotation quality, \(II\) downstream classification, and \(III\) selective prediction\. Matched RGB+thermal review resolves more samples than either single modality, recovering majority\-male labels otherwise missed by RGB or thermal alone, in human\-based as well as model\-based classification\. Months with high annotator abstention also show lower classifier confidence, and soft seasonal priors mainly benefit the season\-limited thermal view\. Uncertainty\-band abstention further raises covered accuracy to 98\.9%, though at reduced coverage and with deferral that falls disproportionately on males\. Overall, a biologically grounded seasonal calendar predicts where annotation and prediction are unreliable, and can guide both annotation protocol design and modality weighting\.