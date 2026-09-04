---
lang: en
page_id: pub:pre-and-post-processing-strategies-for-generic-slice-wise-segmentation-of-tomogr
permalink: /publications/pre-and-post-processing-strategies-for-generic-slice-wise-segmentation-of-tomogr/
date: 2020-12-31
title: Pre- and Post-processing Strategies for Generic Slice-wise Segmentation
  of Tomographic 3D datasets Utilizing U-Net Deep Learning Models Trained for
  Specific Diagnostic Domains
reference: Zwettler G., Holmes D. III, Backfrieder W. Pre- and Post-processing Strategies
  for Generic Slice-wise Segmentation of Tomographic 3D datasets Utilizing U-Net Deep
  Learning Models Trained for Specific Diagnostic Domains – Proceedings of the VISAPP
  2020, Valetta, Malta, 2020, pp. 66-78.
categories: [ehealth, cv, ml]
---

An automated and generally applicable method for segmentation is still in the focus of medical image processing research. For several years, artificial intelligence methods have shown promising results, especially with widely available scalable deep learning libraries. In this work, a five-layer hybrid U-network is developed for slice-wise segmentation of liver datasets. The training data is obtained from the Medical Segmentation Decathlon database, which contains 131 fully segmented volumes. A slice-based segmentation model is implemented using Deep Learning algorithms with adjustments for variable parenchyma shape along the stacking direction and similarities between adjacent slices. Both are transformed for coronal and sagittal views. The implementation is done on a GPU rack using TensorFlow and Keras. Standardized volume and surface metrics are used for a quantitative measure of segmentation accuracy. The results DSC=97.59, JI=95.29 and NSD=99.37 show correct segmentation comparable to 3D U-meshes and other state of the art U-meshes. The development of a 2D slice oriented segmentation we justified by the advantages of short training times and lower complexity and also massively reduces memory consumption. This work manifests the high potential of AI methods for general application in medicine. Segmentation as a fully or semi-automatic tool under the supervision of the expert user.