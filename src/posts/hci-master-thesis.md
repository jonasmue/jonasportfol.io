---
title: 'Adaptive Distributional Word Models for Robust Semantic Information Systems'
date: '2019-06-07'
category: "Natural Language Processing"
image: "extrinsic-tsne.png"
teaser: "My master's thesis was concerned with improving the quality of a voice assistant using state-of-the-art word models."
pinned: false
---

My master's thesis was concerned with improving the quality of a voice assistant for the Technical Service domain using 
word vector models. In particular, I compared domain-specific intrinsic and extrinsic performances of Word2Vec^[Mikolov, T., Chen, K., Corrado, G., & Dean, J. (2013). Efficient estimation of word representations in vector space. arXiv preprint arXiv:1301.3781.], 
GloVe^[Pennington, J., Socher, R., & Manning, C. (2014, October). Glove: Global vectors for word representation. In Proceedings of the 2014 conference on empirical methods in natural language processing (EMNLP) (pp. 1532-1543).], 
FastText^[Bojanowski, P., Grave, E., Joulin, A., & Mikolov, T. (2017). Enriching word vectors with subword information. Transactions of the Association for Computational Linguistics, 5, 135-146.], 
ELMo^[Peters, M. E., Neumann, M., Iyyer, M., Gardner, M., Clark, C., Lee, K., & Zettlemoyer, L. (2018). Deep contextualized word representations. In Proceedings of NAACL-HLT (pp. 2227-2237).], 
and BERT^[Devlin, J., Chang, M. W., Lee, K., & Toutanova, K. (2019, June). BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers) (pp. 4171-4186).].

![Visualization of the performance of the models clustering natural phrases of different categories.](/images/posts/extrinsic-tsne.png)
<div class="caption">Visualization of the performance of the models clustering natural phrases of different categories.</div>

### Abstract

Voice assistants in the Technical Service domain can support technicians with predominantly manual maintenance or repair 
tasks via an audio-verbal channel. Traditional assistants often parse user input by matching it against a set of pre-defined patterns. 
However, this technique is not capable of dealing with syntactic variation in the input request. This thesis evaluates 
the applicability of state-of-the-art language representation models in the Technical Service domain. Such models map 
words or word sequences onto multi-dimensional vector embeddings enabling an automatic analysis of syntactic and semantic 
similarity relationships. Five different models, Word2Vec, GloVe, FastText, ELMo, and BERT, are evaluated on three different 
evaluation tasks: an intrinsic evaluation task measures the correlation between model-generated and human-annotated word-word 
similarity scores. Two extrinsic evaluations assess how well the models can classify natural user input questions. The 
results indicate that self-trained and fine-tuned model instances, in general, perform better than pre-trained ones. 
ELMo achieved the best performance among all fine-tuned models, FastText was the best self-trained instance, and GloVe 
represented the best pre-trained model. Furthermore, a prototypical implementation incorporating high-performing models 
is described and its advantages are outlined based on a case study. The prototype also includes a self-learning mechanism 
capable of dynamically adapting to user feedback. Further work is required and discussed to productively use the models 
in a real-world context.

### Demo Prototype
The thesis was presented at the [2019 Human Computer Games & Informatics EXPO](https://games.uni-wuerzburg.de/expo/2019/). 
The presentation featured a prototypical implementation of the enhanced voice assistant. For demonstration purposes, 
visitors  were able to ask the assistant about different properties of a bike such as its wheel size, weight or tire pressure. 
The presentation received the Best Presentation Award.

![The project at the Exhibition. Visitors could ask the assistant (in the back) about certain properties of the bike. Labels on the bike guided visitors as to what they could ask from the system. The phrasing of the request was up to them.](/images/posts/hci-expo.jpg)
<div class="caption">The project at the exhibition. Visitors could ask the assistant (in the back) about certain properties of the bike. Labels on the bike (displayed on the right) guided visitors as to what they could ask from the system. The phrasing of the request was up to them.</div>

<div class="video-wrapper">
<video playsinline autoplay muted loop>
  <source src="/videos/master-thesis-exhibition.mp4" type="video/mp4">
</video>
</div>
<div class="caption">
Some example inputs to and outputs of the demo prototype. Visitors were given some examples as inspiration but could paraphrase their request individually.
<div class="text-tiny mb-1">Icons licensed as Creative Commons CCBY – Lamp Icon, Brake Icon created by Berkah Icon from the Noun Project; Wheel Icon created by Miriam Rj from the Noun Project.</div>
</div>


### Resources

* <a href="/files/hci_master_thesis_jonas_mueller.pdf" target="_blank">Master's Thesis</a>
* <a href="/files/hci_exhibition_poster_jonas_mueller.pdf" target="_blank">Exhibition Poster</a> (Won Best Presentation Award)
