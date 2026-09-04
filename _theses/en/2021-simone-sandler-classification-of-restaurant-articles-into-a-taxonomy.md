---
lang: en
page_id: thesis:simone-sandler-classification-of-restaurant-articles-into-a-taxonomy
permalink: /theses/simone-sandler-classification-of-restaurant-articles-into-a-taxonomy/
date: 2021-12-31
title: Classification of Restaurant Articles into a Taxonomy
student: Simone Sandler
thesis_type: master
categories: [ml]
project_url: https://aist.fh-hagenberg.at/index.php/de/projekte/projekt-voigas
---

This thesis deals with the classification of articles from different restaurants into a taxonomy. The features available are the name of the article and a restaurant internal category. Both features are strings provided by the restaurant owner and therefore error prone.Methods are developed to classify this kind of data into hierarchically structured
categories. In this thesis the categories are represented by a food and drink taxonomy, which is stored as a tree. The methods can be divided into preclassification and classification methods. Preclassification methods attempt to find the best subtree inside the categories tree for an article and classification methods classify the article inside this subtree. In total of three preclassification and two classification methods are developed.The first preclassification method is called Category Similarity Preclassification and works by comparing the name of the internal category with the category names inside the taxonomy. The Common Ancestor Preclassification searches for the common ancestor of already classified items with the same internal category and the Substring Preclassification comperes the internal category with substrings that are unique for one category.The classification methods are called String Similarity Classification and Substring Classification. The first method compares the article name with names of already classified articles and the second method compares the article name of substrings unique for a category inside the preclassified subtree.These methods are part of a semi-automatic classification system, that deals with
the classification of the articles using the developed methods and offers the possibility to extend the food and drink taxonomy when needed.
Due to the error prone data the percentage of classifiable articles is estimated to be 72%. The classification system is able to classify this amount of articles with a accuracy of 83% for finding the best possible category and 90% for finding a fitting category.