---
lang: en
page_id: pub:reconstructionless-airborne-radiance-fields
permalink: /publications/reconstructionless-airborne-radiance-fields/
date: 2024-12-31
title: Reconstructionless Airborne Radiance Fields
reference: Praschl C., Böss L., Schedl D.C. 2024. Reconstructionless Airborne Radiance
  Fields. SIGGRAPH 2024.
category: cv
doi: https://doi.org/10.1145/3641234.3671077
---

For some years now, radiation fields and in particular neural radiation fields (NeRF) have represented a ground-breaking advance in computer graphics. They make it possible to generate high-quality new views for scenes that have been captured from different angles using multiple photos or videos. Instead of conventional methods that rely on geometric representations or explicit scene networks, NeRF uses neural networks to directly model the volumetric scene function. In this way, the approach has dramatically changed the landscape of novel-view synthesis, offering unprecedented realism and flexibility in the representation of complex scenes. However, the training of NeRF models is typically based on computationally intensive image-based reconstructions of camera positions and visual features of the targeted scenes using Structure from Motion (SfM). In aerial imaging, camera positions are already explicitly available through accurate global navigation satellite systems (e.g. GPS) and internal sensors of aircraft. In this work, we present a novel processing pipeline developed to effectively utilise image and sensor data captured by unmanned aerial vehicles (UAVs) to train NeRF-like models without the need for SfM.