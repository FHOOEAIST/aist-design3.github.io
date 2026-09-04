---
lang: en
page_id: pub:hybrid-approach-for-orientation-estimation-of-rotating-humans-in-video-frames-ac
permalink: /publications/hybrid-approach-for-orientation-estimation-of-rotating-humans-in-video-frames-ac/
date: 2020-12-31
title: Hybrid Approach for Orientation-Estimation of Rotating Humans in Video
  Frames Acquired by Stationary Monocular Camera
reference: Baumgartner D., Praschl C., Zucali T., Zwettler G. Hybrid Approach for
  Orientation-Estimation of Rotating Humans in Video Frames Acquired by Stationary
  Monocular Camera.
category: cv
---

Accurate human orientation estimation with respect to the POSE of a monocular camera system is a challenging task due to general aspects of camera calibration and the deformability of a moving human body. Therefore, novel deep learning approaches for precise object position determination in robotics are difficult to adapt for human body analysis. In this work, we present a hybrid approach for accurately estimating a human body relative to a camera system, significantly improving the results derived from poseNet by applying optical flow analysis in a frame-to-frame comparison. The human body, which rotates in the T-position in situ, is thereby center-aligned, with object tracking methods applied to compensate for translations of the body motion. After 2D skeletal extraction, optical flow is calculated for an ROI region aligned relative to the vertical skeletal junction representing the spine and compared frame by frame. To evaluate the suitability of clothing as a basis for good features, local pixel homogeneity is considered to constrain optical flow to heterogeneous regions with distinguishing features such as imprint patterns, buttons, or buckles in addition to local illumination change. Based on the mean optical flow with rough approximation of the axial body shape as an ellipse, accuracy between 0.1° and 2.0° is achieved for orientation estimation on a frame-to-frame comparison evaluated and validated on both CGI renderings and real videos of people wearing clothes with different features.