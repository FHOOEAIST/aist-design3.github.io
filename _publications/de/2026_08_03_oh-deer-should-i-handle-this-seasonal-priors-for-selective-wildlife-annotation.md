---
lang: de
page_id: pub:oh-deer-should-i-handle-this-seasonal-priors-for-selective-wildlife-annotation
permalink: /publications/oh-deer-should-i-handle-this-seasonal-priors-for-selective-wildlife-annotation/
date: 2026-08-03  # arXiv submission date, not necessarily the final proceedings date
title: Oh Deer, Should I Handle This? Seasonal Priors for Selective Wildlife
  Fine-Grained Annotation
reference: Markoff H., Praschl C., Jørgensen A., Mogensen C., Skadhauge M., Beery
  S., Ørsted M., Schedl D. “Oh Deer, Should I Handle This? Seasonal Priors for Selective
  Wildlife Fine-Grained Annotation“, CV4E Workshop @ ECCV 2026.
categories: [cv, ml, geo]
external_url: https://arxiv.org/abs/2608.02762
---

Feingranulare Wildtierklassifikation in Luftbildern wird nicht nur durch die Modellleistung eingeschränkt, sondern auch durch unzuverlässige Labels: Tiere nehmen nur wenige Pixel ein, wichtige visuelle Hinweise variieren saisonal, und modalitätsspezifische Evidenz kann mehrdeutig sein. Wir untersuchen die Identifikation adulter männlicher Rothirsche (Cervus elaphus), bei denen der Geweihzyklus vorhersagbare Zeitfenster verlässlicher Evidenz sowohl für die Annotation als auch für die Vorhersage definiert. Anhand von 7.295 RGB-only-, Thermal-only- und gepaarten RGB+Thermal-Ausschnitten aus niedrig fliegenden UAV-Befliegungen, die von drei Annotatoren gelabelt wurden, zeigen wir, dass die saisonale Struktur (I) die Annotationsqualität, (II) die nachgelagerte Klassifikation und (III) die selektive Vorhersage miteinander verknüpft. Die gemeinsame Betrachtung von RGB und Thermal löst mehr Fälle auf als jede Einzelmodalität und gewinnt Mehrheits-männlich-Labels zurück, die bei alleiniger Nutzung von RGB oder Thermal sowohl bei menschlicher als auch bei modellbasierter Klassifikation übersehen werden. Monate mit hoher Enthaltungsrate der Annotatoren zeigen zudem eine geringere Modellsicherheit, wobei weiche saisonale Priors vor allem der saisonal eingeschränkten Thermal-Ansicht zugutekommen. Eine Enthaltung mittels Unsicherheitsband erhöht die abgedeckte Genauigkeit weiter auf 98,9 %, allerdings bei reduzierter Abdeckung und einer Zurückstellung, die überproportional männliche Tiere betrifft. Insgesamt sagt ein biologisch fundierter Saisonkalender voraus, wo Annotation und Vorhersage unzuverlässig sind, und kann sowohl die Gestaltung von Annotationsprotokollen als auch die Gewichtung der Modalitäten leiten.