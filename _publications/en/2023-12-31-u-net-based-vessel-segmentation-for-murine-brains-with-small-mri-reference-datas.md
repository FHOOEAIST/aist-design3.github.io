---
lang: en
page_id: pub:u-net-based-vessel-segmentation-for-murine-brains-with-small-mri-reference-datas
permalink: /publications/u-net-based-vessel-segmentation-for-murine-brains-with-small-mri-reference-datas/
date: 2023-12-31
title: U-Net based vessel segmentation for murine brains with small μMRI
  reference datasets
reference: Praschl C., Zopf L., Kiemeyer E., Langthallner I., Ritzberger D., Slowak
  A., Weigl M., Blüml V., Nešić N., Stojmenović M., Kniewallner K., Aigner L., Winkler
  S., Walter A. “U-Net based vessel segmentation for murine brains with small μMRI
  reference datasets“. Plos one (2023).
categories: [ehealth, cv, ml]
doi: https://doi.org/10.1371/journal.pone.0291946
---

Identification and quantitative segmentation of individual blood vessels in mice visualized with preclinical imaging techniques is a tedious, manual or semiautomated task that can require weeks of reviewing hundreds of levels of individual data sets. Preclinical imaging, such as micro-magnetic resonance imaging (µMRI) can produce tomographic datasets of murine vasculature across length scales and organs, which is of outmost importance to study tumor progression, angiogenesis, or vascular risk factors for diseases such as Alzheimer’s. Training a neural network capable of accurate segmentation results requires a sufficiently large amount of labelled data, which takes a long time to compile. Recently, several reasonably automated approaches have emerged in the preclinical context but still require significant manual input and are less accurate than the deep learning approach presented in this paper – quantified by the Dice score. In this work, the implementation of a shallow, three-dimensional U-Net architecture for the segmentation of vessels in murine brains is presented, which is (1) open-source, (2) can be achieved with a small dataset (in this work only 8 μMRI imaging stacks of mouse brains were available), and (3) requires only a small subset of labelled training data. The presented model is evaluated together with two post-processing methodologies using a cross-validation, which results in an average Dice score of 61.34% in its best setup. The results show, that the methodology is able to detect blood vessels faster and more reliably compared to state-of-the-art vesselness filters with an average Dice score of 43.88% for the used dataset.