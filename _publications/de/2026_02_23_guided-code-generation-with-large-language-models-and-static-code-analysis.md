---
lang: de
page_id: pub:guided-code-generation-with-large-language-models-and-static-code-analysis
permalink: /publications/guided-code-generation-with-large-language-models-and-static-code-analysis/
date: 2026-02-23  # Eurocast 2026 conference start date (Feb 23–27); exact day unknown
title: Guided Code Generation with Large Language Models and Static Code
  Analysis
reference: Dalkilic M., Praschl C. “Guided Code Generation with Large Language Models
  and Static Code Analysis“, Eurocast 2026.
categories: [ml, se]
---

Wir setzen einen iterativen, LLM-gestützten Code-Generierungs-Workflow in Kombination mit statischer Analyse ein. Für jeden Prompt erzeugt das LLM einen ersten Codekandidaten, der mit SonarQube bewertet wird. Die Analyseergebnisse (Sicherheit, Qualität, Wartbarkeit) werden an das Modell zurückgespielt, um die Neugenerierung zu steuern. Die Iteration wird fortgesetzt, bis die Fehlerschwellenwerte erreicht sind oder eine maximale Anzahl an Iterationen erreicht wurde. Wir evaluierten unseren Ansatz anhand von 50 Code-Generierungs-Prompts, die Sicherheitslücken, Codequalität, algorithmische Aufgaben und Komplexitätsherausforderungen abdecken. Jeder Prompt durchlief bis zu fünf iterative Verfeinerungszyklen, wobei das SonarQube-Feedback in die nächste Generierung des LLM einfloss. Für jeden Durchlauf erfassten wir die anfängliche und finale Anzahl an Findings, die Anzahl der Iterationen und kategorisierten die Findings nach Typ und Schweregrad. 94 % aller Durchläufe wurden erfolgreich abgeschlossen und lösten alle erkannten Probleme nach durchschnittlich 1,34 Verfeinerungsiterationen, wobei die Mehrheit (74 %) nur eine einzige Iteration benötigte.