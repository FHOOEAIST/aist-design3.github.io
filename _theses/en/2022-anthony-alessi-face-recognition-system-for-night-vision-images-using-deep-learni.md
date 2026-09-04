---
lang: en
page_id: thesis:anthony-alessi-face-recognition-system-for-night-vision-images-using-deep-learni
permalink: /theses/anthony-alessi-face-recognition-system-for-night-vision-images-using-deep-learni/
date: 2022-12-31
title: Face Recognition system for Night Vision Images using Deep Learning
student: Anthony Alessi
project_url: https://aist.fh-hagenberg.at/index.php/de/projekte/epilepsie-monitoring
---

Advanced Information Systems and Technology, or AIST for short, is a research group of the University of Applied Sciences Upper Austria, located at the Campus Hagenberg, Upper Austria. Their main focus lies on Machine Learning & Data Mining, Computer Vision and eHealth [1]. For this internship, the task was to work on the EpiMon project.

The goal of the EpiMon project is to detect uprising epileptic seizures of infantile to juvenile patients when they are sleeping. One of the signs of an uprising epileptic seizure is the patient waking up and permanently gazing, after which a seizure may occur. This is called the Prévost sign. There are other signs such as muscle contraction, but technology to monitor these symptoms already exist. This project focuses on the eyes specifically and consists of two hardware components: a Raspberry Pi with night-vision cameras and a smartphone.

This solution uses night-vision cameras to monitor the patient while asleep. These cameras are connected to a Raspberry Pi, which acts as the main system that connects all the other components. The images of the cameras get transferred to the Raspberry Pi, which runs face detection to discover the position of the face on the image and crop it. Afterwards it feeds the image of the cropped face to a model which can recognize whether the patient has opened or closed eyes. The alarm will ring when open eyes are detected for a longer period of time. The mobile application on the smartphone is used to control when the Raspberry Pi starts monitoring, along with several settings.

The research topic of this thesis is Face Recognition. A patient might be sleeping in the same bed as a partner or family member. The main system must know which face it has to monitor. By making several pictures of the patient and their family members from different angles, the necessary data for the face recognition model can be provided.