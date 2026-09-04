---
lang: en
page_id: pub:how-do-android-developers-improve-non-functional-properties-of-software
permalink: /publications/how-do-android-developers-improve-non-functional-properties-of-software/
date: 2022-12-31
title: How do Android developers improve non-functional properties of software?
category: se
reference: 'Callan J., et al. „How do Android developers improve non-functional properties
  of software?.“ Empirical Software Engineering 27.5 (2022): 1-42.'
doi: https://doi.org/10.1007/s10664-022-10137-2
---

Nowadays there is an increased pressure on mobile app developers to take non-functional properties into account. An app that is too slow or uses much bandwidth will decrease user satisfaction, and thus can lead to users simply abandoning the app. Although automated software improvement techniques exist for traditional software, these are not as prevalent in the mobile domain. Moreover, it is yet unknown if the same software changes would be as effective. With that in mind, we mined overall 100 Android repositories to find out how developers improve execution time, memory consumption, bandwidth usage and frame rate of mobile apps. We categorised non-functional property (NFP) improving commits related to performance to see how existing automated software improvement techniques can be improved. Our results show that although NFP improving commits related to performance are rare, such improvements appear throughout the development lifecycle. We found altogether 560 NFP commits out of a total of 74,408 commits analysed. Memory consumption is sacrificed most often when improving execution time or bandwidth usage, although similar types of changes can improve multiple non-functional properties at once. Code deletion is the most frequently utilised strategy except for frame rate, where increase in concurrency is the dominant strategy. We find that automated software improvement techniques for mobile domain can benefit from addition of SQL query improvement, caching and asset manipulation. Moreover, we provide a classifier which can drastically reduce manual effort to analyse NFP improving commits.