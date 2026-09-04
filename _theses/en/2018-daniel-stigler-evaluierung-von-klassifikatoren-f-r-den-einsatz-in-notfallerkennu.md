---
lang: en
page_id: thesis:daniel-stigler-evaluierung-von-klassifikatoren-f-r-den-einsatz-in-notfallerkennu
permalink: /theses/daniel-stigler-evaluierung-von-klassifikatoren-f-r-den-einsatz-in-notfallerkennu/
date: 2018-12-31
title: Evaluation of classifiers for use in emergency detection systems
student: Daniel Stigler
project_url: https://aist.fh-hagenberg.at/index.php/de/projekte/projekt-eden
---

In this thesis an evaluation of different algorithms of machine learning for information retrieval from image data for later emergency detection in elevator systems shall be performed. For this purpose, a classification prototype will be created, which will be divided into three parts to determine the information. In the first step, images of segmented objects are analyzed and it is determined whether the object is a person or an object. In the second part, objects are classified into further object categories, which allows a statement about an existing dangerous situation to be made. In the third part, objects classified as human beings are subjected to a posture classification based on their silhouette shape, which can later trigger an emergency signal if a person is lying on the ground for a longer period of time. The tested algorithms are provided by OpenCV and are limited to K-Nearest Neighbor, Support Vector Machine, Random Forest and neural network. The results show that Support Vector Machines, with a hit rate of over 98%, using HOG descriptors, are best suited for categorizing objects into human and object. Also, compared to other classifiers, this combination provided the best results for further grouping of objects, but with a 73% classification rate, it is not very satisfying. When classifying posture using silhouette features, the neural network proved to be the most suitable classifier, with a correct classification of 92% of all test data.