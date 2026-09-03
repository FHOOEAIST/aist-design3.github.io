---
lang: en
page_id: pub:evaluation-of-novel-view-synthesis-in-the-context-of-radiometric-drone-imagery
permalink: /publications/evaluation-of-novel-view-synthesis-in-the-context-of-radiometric-drone-imagery/
date: 2026-03-01  # month confirmed (March 2026); exact day unknown
title: Evaluation of Novel View Synthesis in the Context of Radiometric Drone
  Imagery
reference: Praschl C\., Schoibesberger S\., Schedl D\.“Evaluation of Novel View
  Synthesis in the Context of Radiometric Drone Imagery“, GRIVAPP 2026\.
category: computer_vision
external_url: https://doi.org/10.5220/0014460900004728
---

Recent advancements in neural scene representations, specifically Neural Radiance Fields \(NeRF\) and 3D Gaussian Splatting \(3DGS\), have revolutionized novel\-view synthesis\. However, these methods are predominantly optimized for and evaluated on ground\-based, visible\-spectrum \(RGB\) data, leaving a significant gap in their application to aerial, radiometric thermal imagery, which is critical for industrial inspection, search\-and\-rescue, and environmental monitoring\. In this work, we systematically investigate the applicability of these state\-of\-the\-art paradigms to radiometric thermal imagery acquired from airborne drone platforms\. We introduce a novel, publicly available multimodal dataset captured using a DJI M30T system, comprising synchronized RGB and radiometric thermal frames of a building\. We conduct a comprehensive evaluation comparing specialized thermal approaches \(ThermalNeRF, ThermoNeRF, Thermal3DGS\) against general\-purpose methods \(nerfacto, gsplat\)\. Our assessment utilizes a suite of quantitative metrics \(PSNR, SSIM, MAE, LPIPS, and DISTS\) complemented by qualitative visual analysis\. Results indicate that Thermal3DGS achieves state\-of\-the\-art performance in the thermal domain \(PSNR 22\.99, SSIM 0\.845\), effectively mitigating artifacts common in low\-texture thermal data\. Conversely, gsplat demonstrates superior RGB synthesis and competitive thermal performance, suggesting that general\-purpose splatting representations are robust enough for cross\-spectral applications\. This work bridges the gap between aerial radiometric sensing and neural rendering, demonstrating that off\-the\-shelf drone thermography can be utilized for high\-fidelity 3D thermal reconstruction with minimal adaptation\.