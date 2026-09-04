---
lang: en
page_id: thesis:eva-maria-spitzer-an-exploratory-approach-for-finding-similarities-within-hetero
permalink: /theses/eva-maria-spitzer-an-exploratory-approach-for-finding-similarities-within-hetero/
date: 2020-12-31
title: An Exploratory Approach for Finding Similarities Within Heterogeneous
  Data Sets of Small and Medium-Sized Enterprises
student: Eva-Maria Spitzer
project_url: https://aist.fh-hagenberg.at/index.php/de/projekte/projekt-kimiku
---

Customer loyalty programs are an essential tool for enterprises to get a better understanding of their customer’s needs and to take appropriate actions to increase their satisfaction. A successful realisation of such programs requires detailed analyses, assuming a lot of customer data. However, many Small and Medium-Sized Enterprises have little amounts of data. Thus, they can only use small data sets for analyses, which can lead to bad models and inaccurate results.

The idea is to find enterprises that are similar in their data characteristics in order to use a trained model from one enterprise for another similar enterprise. If an enterprise has enough data to build a good model, this model can be applied to the data of similar enterprises with less data.

The thesis describes a possible approach to identify similar enterprises, as well as the identification of features and algorithms that lead to good performing models with the respective data sets. For this purpose, data sets of six Small and Medium-Sized Enterprises are used, which were recorded by an Austrian software company via a customer loyalty app.

Extracted data characteristics identify similar enterprises. These characteristics are related to the specific use case and aim to represent the data of the respective enterprises in the best possible way. For the determination of the performance of different features and algorithms (e.g. Random Forest, Support Vector Regression) for different data sets, a regression model is trained and evaluated for each feature/algorithm combination. The particular combinations of features and algorithms are clustered together with the data characteristics using Agglomerative Hierarchical Clustering. Error metrics derived from the runs of the regression models evaluate the performance of the respective feature/algorithm combinations.

This work shows some challenges in detecting enterprises with similar data sets as well as feature and algorithm combinations that work best for specific data sets. Despite the small amount of available data, it is shown that it is feasible to find similar enterprises by using data characteristics. Although the results do not indicate features and algorithms that influence the regression task across enterprises, it was possible to observe the influence of features on specific data sets. The results of this thesis provide further research opportunities, such as detailed analyses of particular features or the prediction of the Normalised Root Mean Square Error for given features, algorithms and data characteristics for a regression task. In summary, this work provides the foundations for applying a trained model to other data sets.