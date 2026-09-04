---
lang: en
page_id: pub:user-profile-based-recommendation-engine-mitigating-the-cold-start-problem
permalink: /publications/user-profile-based-recommendation-engine-mitigating-the-cold-start-problem/
date: 2022-12-31
title: User Profile-Based Recommendation Engine Mitigating the Cold-Start Problem
reference: Mayrhuber E., Krauss O. „User Profile-Based Recommendation Engine Mitigating
  the Cold-Start Problem“ in Proceedings of International Conference on Electrical,
  Computer, Communications and Mechatronics Engineering (ICECCME), 2022.
categories: [ml]
---

Recommendation systems can be used in many situations in daily life. Recommending people on social media networks, products in various online shops, music, or movies are only a few use cases of these systems. The cold start problem, when no information about a new or infrequent user is available, is challenging for recommendation systems. We deal with creating restaurant and category recommendations for restaurant visitors. Recommendations are generated with different metrics and technologies based on user profiles to make recommendations as individual as possible. We use kMeans and Mean-Shift for clustering users to build a base for recommendations generated using user-based and contentbased collaborative filtering methods. These suggestions consider
the location of restaurants, the similarity between users and restaurants, and the ratings users give. We mitigate the cold-start problem by using matrix factorization and spatial information for users with few restaurant visits in the past. Recommendations are evaluated and adapted as a result of other user behavior to obtain better results. As a result, we can query recommendations
via an Application Programming Interface (API), which consist of a mixture of location and user-based recommendation to please the users’ needs by combining exploration and exploitation.