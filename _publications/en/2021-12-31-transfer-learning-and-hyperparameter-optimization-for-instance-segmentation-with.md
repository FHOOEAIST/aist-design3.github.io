---
lang: en
page_id: pub:transfer-learning-and-hyperparameter-optimization-for-instance-segmentation-with
permalink: /publications/transfer-learning-and-hyperparameter-optimization-for-instance-segmentation-with/
date: 2021-12-31
title: Transfer Learning and Hyperparameter Optimization for Instance
  Segmentation with RGB-D Images in Reflective Elevator Environments
reference: 'Reithmeier L., Krauss O., Zwettler G.,  . (2021). Transfer Learning and
  Hyperparameter Optimization forInstance Segmentation with RGB-D Images in Reflective
  Elevator Environments. In Proceedings of the 16th International Joint Conference
  on Computer Vision, Imaging and Computer Graphics Theory and Applications – Volume
  5: VISAPP, ISBN 978-989-758-488-6.'
categories: [cv, ml]
doi: https://doi.org/10.24132/CSRN.2021.3101.30
---

Elevators, a vital means for urban transportation, are generally lacking proper emergency call systems besides an emergency button. In the case of unconscious or otherwise incapacitated passengers this can lead to lethal situations. A camera-based surveillance system with AI-based alerts utilizing an elevator state machine can help passengers unable to initiate an emergency call. In this research work, the applicability of RGB-D images as input for instance segmentation in the highly reflective environment of an elevator cabin is evaluated. For object segmentation, a Region-based Convolution Neural Network (R-CNN) deep learning model is adapted to use depth input data besides RGB by applying transfer learning, hyperparameter optimization and re-training on a newly prepared elevator image dataset. Evaluations prove that with the chosen strategy, the accuracy of R-CNN instance segmentation is applicable on RGB-D data, thereby resolving lack of image quality in the noise affected and reflective elevator cabins. The mean average precision (mAP) of 0.753 is increased to 0.768 after the incorporation of additional depth data and with additional FuseNet-FPN backbone on RGB-D the mAP is further increased to 0.794. With the proposed instance segmentation model, reliable elevator surveillance becomes feasible as first prototypes and on-road tests proof.