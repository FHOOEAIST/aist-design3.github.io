---
lang: en
page_id: pub:inferring-attributed-grammars-from-parser-implementations
permalink: /publications/inferring-attributed-grammars-from-parser-implementations/
date: 2025-12-31
title: Inferring Attributed Grammars from Parser Implementations
reference: Pointner A., Pichler J., Prähofer H. 2025. Inferring Attributed Grammars
  from Parser Implementations. arXiv:2507.13117.
categories: [se]
doi: https://doi.org/10.48550/arXiv.2507.13117
---

Software systems that process structured inputs often lack complete and up-to-date specifications, which specify the input syntax and the semantics of input processing. While grammar mining techniques have focused on recovering syntactic structures, the semantics of input processing remains largely unexplored. In this work, we introduce a novel approach for inferring attributed grammars from parser implementations. Given an input grammar, our technique dynamically analyzes the implementation of recursive descent parsers to reconstruct the semantic aspects of input handling, resulting in specifications in the form of attributed grammars. By observing program executions and mapping the program's runtime behavior to the grammar, we systematically extract and embed semantic actions into the grammar rules. This enables comprehensive specification recovery. We demonstrate the feasibility of our approach using an initial set of programs, showing that it can accurately reproduce program behavior through the generated attributed grammars.
