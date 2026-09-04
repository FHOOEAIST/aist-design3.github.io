---
lang: en
page_id: thesis:lukas-reithmeier-influence-of-depth-data-on-the-performance-of-instance-segmenta
permalink: /theses/lukas-reithmeier-influence-of-depth-data-on-the-performance-of-instance-segmenta/
date: 2020-12-31
title: Influence of depth data on the performance of instance segmentation
  utilizing Mask R-CNN and RGB-D images
student: Lukas Reithmeier
thesis_type: bachelor
project_url: https://aist.fh-hagenberg.at/index.php/de/projekte/projekt-eden
---

Elevators are a vital means of transportation in the modern urban life. If an emergency happens in an elevator a person must press an emergency button calling for help. Since pressing the emergency button is not always possible, the research group AIST is developing a system that detects emergencies in elevators using RGB-D camera footage, compromising both RGB images as well as depth images. The detection of persons in various poses and various different objects as well as the creation of masks from classified persons and objects to track these over the course of several camera frames, it is aimed to add an instance segmentation module using the Mask R-CNN algorithm to this system.

Due to metal walls and mirrors elevator environments are highly reflective and noisy, especially the depth images provided by RGB-D cameras. Instance segmentation algorithms, like the Mask R-CNN, are well understood when using RGB images. This raises the question if instance segmentation can be improved when using the highly reflective and noisy depth images provided by the RGB-D cameras.

In this thesis a comparison of four different model-versions, which differ in their input and backbone network and use the Mask R-CNN algorithm is done. The first uses solely RGB images, the second solely depth images and the third uses RGB-D images. These three model-versions use a ResNet-FPN backbone network. The fourth model-version uses RGB-D images and a FuseNet-FPN backbone network. This thesis also introduces the Elevator RGB-D dataset that contains RGB-D images from elevator scenes. To provide an equitable comparison the hyperparameters of the four model-versions are optimized using tree-structured parzen estimators. To improve the generalization of the trained models, these models are pre-trained using the SUN RGB-D dataset. Transfer learning is used to initialize the models with the pre-trained weights. These models are trained using the Elevator RGB-D dataset.

In this thesis the equivalence of using RGB and depth images combined and solely RGB images to perform instance segmentation in regards of the results in highly reflective and noisy elevator environments was proven. Both approaches lead to better results than relying on depth images only. The usage of a backbone convolutional neural network specialized on RGB-D images improves the performance of the Mask R-CNN.