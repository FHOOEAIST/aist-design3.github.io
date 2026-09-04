---
lang: en
page_id: pub:generating-inputs-for-grammar-mining-using-dynamic-symbolic-execution
permalink: /publications/generating-inputs-for-grammar-mining-using-dynamic-symbolic-execution/
date: 2025-12-31
title: Generating Inputs for Grammar Mining using Dynamic Symbolic Execution
reference: Pointner A., Pichler J., Prähofer H. 2025. Generating Inputs for Grammar
  Mining using Dynamic Symbolic Execution. The Art, Science, and Engineering of Programming,
  10(2), Article 16.
categories: [se]
doi: https://doi.org/10.22152/programming-journal.org/2025/10/16
---

A vast number of software systems include components that parse and process structured input. In addition to programming languages, which are analyzed by compilers or interpreters, there are numerous components that process standardized or proprietary data formats of varying complexity. Even if such components were initially developed and tested based on a specification, such as a grammar, numerous modifications and adaptations over the course of software evolution can make it impossible to precisely determine which inputs they actually accept.

In this situation, grammar mining can be used to reconstruct the specification in the form of a grammar. Established approaches already produce useful results, provided that sufficient input data is available to fully cover the input language. However, achieving this completeness is a major challenge. In practice, only input data recorded during the operation of the software systems is available. If this data is used for grammar mining, the resulting grammar reflects only the actual processed inputs but not the complete grammar of the input language accepted by the software component. As a result, edge cases or previously supported features that no longer appear in the available input data are missing from the generated grammar.

This work addresses this challenge by introducing a novel approach for the automatic generation of inputs for grammar mining. Although input generators have already been used for fuzz testing, it remains unclear whether they are also suitable for grammar miners. Building on the grammar miner Mimid, this work presents a fully automated approach to input generation. The approach leverages Dynamic Symbolic Execution (DSE) and extends it with two mechanisms to overcome the limitations of DSE regarding structured input parsers. First, the search for new inputs is guided by an iterative expansion that starts with a single-character input and gradually extends it. Second, input generation is structured into a novel three-phase approach, which separates the generation of inputs for parser functions.

The proposed method was evaluated against a diverse set of eleven benchmark applications from the existing literature. Results demonstrate that the approach achieves precision and recall for extracted grammars close to those derived from state-of-the-art grammar miners such as Mimid. Notably, it successfully uncovers subtle features and edge cases in parsers that are typically missed by such grammar miners. The effectiveness of the method is supported by empirical evidence, showing that it can achieve high performance in various domains without requiring prior input samples.

This contribution is significant for researchers and practitioners in software engineering, offering an automated, scalable, and precise solution for grammar mining. By eliminating the need for manual input generation, the approach not only reduces workload but also enhances the robustness and comprehensiveness of the extracted grammars. Following this approach, software engineers can reconstruct specification from existing (legacy) parsers.
