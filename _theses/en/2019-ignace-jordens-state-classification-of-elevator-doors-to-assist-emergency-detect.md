---
lang: en
page_id: thesis:ignace-jordens-state-classification-of-elevator-doors-to-assist-emergency-detect
permalink: /theses/ignace-jordens-state-classification-of-elevator-doors-to-assist-emergency-detect/
date: 2019-12-31
title: State classification of elevator doors to assist emergency detection in
  elevator networks
student: Ignace Jordens
thesis_type: bachelor
categories: [cv, ml]
project_url: https://aist.fh-hagenberg.at/index.php/de/projekte/projekt-eden
---

EDEN, which stands for emergency detection in elevator networks and is a project of the AIST
research group at the University of Applied Sciences Upper Austria, aims to use sensors and cameras
to automatically detect emergencies in elevators, evaluate them, put them into context and take
appropriate actions. This bachelor’s thesis tackles the classification of the status of an elevator door.
In order to classify certain emergencies correctly, it is vitally important that the classification system
knows all the involved parameters. A certain situation can have different interpretations if all parameters are considered. The current state of the door is in this case a very important parameter.
The EDEN project uses an Intel RealSense D435 camera as a device to capture images and depth
information. These images and their corresponding depth information are analysed by the project, which is written in C++ and uses the OpenCV framework for computer vision. A first part of this paper is to research the usages of the provided depth and RGB information by the camera to detect the status of an elevator door. In the research, the different possible approaches are discussed. The most feasible approaches are elaborated in a proof of concept. The first step of the detection of the door status is localising the door itself using depth and RGB information. This is followed by the extraction of the floor, which is achieved by using edge detection and extraction techniques. With the location of the door and the floor known to the application, the status of the door can be determined. In order to correctly classify this status, the research focuses on different methods to detect the status and strategies to reduce noise interference which is caused by either the recording equipment or objects blocking the vision of the door. The second part of the paper focuses on testing the capabilities of the Intel RealSense D435 camera, more specifically the accuracy of the depth information it can provide. To comply with certain ISOstandards, an elevator car cannot have a height difference of more than 20 millimetres compared to the outlying floor. The research investigates if the D435 camera can detect such a small height difference while still maintaining a visual overview of the entire elevator car, so the application can still detect occurring emergencies.