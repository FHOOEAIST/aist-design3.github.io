---
lang: en
page_id: pub:line-clustering-and-contour-extraction-in-the-context-of-2d-building-plans
permalink: /publications/line-clustering-and-contour-extraction-in-the-context-of-2d-building-plans/
date: 2021-12-31
title: Line Clustering and Contour Extraction in the Context of 2D Building Plans
reference: Pointner A., Praschl C., Krauss O., Schuler A., Helm E., Zwettler G. (2021).
  Line Clustering and Contour Extraction in the Context of 2D Building Plans. In Proceedings
  of 29. International Conference in Central Europe on Computer Graphics, Visualization
  and Computer Vision.
categories: [cv]
doi: https://doi.org/10.24132/CSRN.2021.3101.2
---

For the purpose of analyzing a building according to its accessibility or structural resilience, printed 2D floor plans are not sufficient because of the missing link to semantic information.
This paper tackles this issue and introduces a concept for clustering classified lines of a floor plan and for creating semantically enriched contour elements based on different image processing, 
computer vision and machine learning algorithms. Based on a general line clustering approach, we introduce type specific methods for walls, windows, doors and stairs. 
The resulting clusters are in turn used for a contour creation, which uses minimal rotated rectangles. Those rectangles are transformed to polygons that are refined using post processing steps.The approach is evaluated via positive testing using a pixel-based comparison of the process’s result. For this, automatically generated as well as real world building plans are used. The final evaluation shows, that the concept reaches a confidence of >90% for door, stair and windows and only around 10% for stairs with the run-time linearly scaling with the size of the input.