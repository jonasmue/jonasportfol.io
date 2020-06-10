---
title: 'Sortify: Using Song Vectors to Sort Playlists'
date: '2019-11-02'
category: "Natural Language Processing"
image: "sortify-animated.gif"
teaser: "Creating song vectors to capture semantic song similarity and sort playlists."
---

**Note: Due to server capacity limitations, Sortify is not online at the moment.**

## The Challenge
Imagine you want to throw a party — obviously, you need a great party playlist! To satisfy everyone's taste and get the 
crowd excited, it should contain music from different genres. Hence, you collect some rock classics, EDM, a little hip 
hop, great 90s dance tracks, and, of course, the latest charts. Finally, you top off your legendary playlist with some 
evergreens everyone gets off to at later hours. You end up with a colorful mix of great music. However, your tracks are 
not at all geared to each other. Hitting play, you might end up with the unfortunate sequence of *Bad Karma* fading into 
*Don't Stop Believin'* fading into *Candy Shop*. How can you bring order into such a ragbag playlist?

## A Natural Language Processing Approach

The idea is to learn song vectors by analogy with the nowadays omnipresent word vectors in the domain of Natural Language 
Processing. The objective of such word vectors is to capture semantic properties of words in a numerical way. To achieve 
this, words are mapped onto a multi-dimensional vector space. The position of such an embedding in the vector space 
represents semantic properties of the corresponding word. In other words, two semantically similar words or phrases 
(think *cookie* and *brownie*) are represented by similar vectors whereas two dissimilar concepts (e.g. *cookie* and 
*pickup truck*) should also numerically differ in their vector representation.

![Word Vectors numerically incorporate semantic relationships between words. In this simplified sketch, 'woman' behaves to 'queen' as 'man' behaves to 'king'](/images/posts/word-vectors.png)
<div class="caption">Word Vectors numerically incorporate semantic relationships between words. In this simplified sketch, 'woman' behaves to 'queen' as 'man' behaves to 'king'</div>

A seminal approach to generate such vectors is called GloVe^[Pennington, J., Socher, R., & Manning, C. (2014, October). Glove: Global vectors for word representation. In Proceedings of the 2014 conference on empirical methods in natural language processing (EMNLP) (pp. 1532-1543).], 
which is short for Global Vectors. GloVe takes advantage of global co-occurrence statistics in large text corpora: 
it generates a global co-occurrence matrix over the whole text corpus with each matrix cell denoting the co-occurrence 
count of two words. Think of it as reading through a (very, very long) text and for every two words occurring next to each 
other, you increment the corresponding matrix cell associated with these two words. This leaves you with a huge square 
matrix – it has the dimensions |V| x |V| with |V| being the size of your vocabulary, i.e. the number of individual words 
in your text. The authors of GloVe now propose running a weighted least squares approach on this matrix to reduce its 
huge dimensionality and generate dense vectors (typically 50-300 dimensional). These final vectors now incorporate the 
semantic word properties.

## Transferring GloVe to Songs

Similar to word vectors, we should be able to also generate song vectors using the GloVe objective: imagine you have a 
large dataset of playlists. Each of these playlists contains a set of songs. Hence, you can create a co-occurrence matrix, 
but instead of incrementing for adjacent words, you increment a matrix cell if two songs mutually occur in the same playlist.

![Preview of Sortify.](/images/posts/sortify-animated.gif)
<div class="caption">Preview of Sortify.</div>

### The Dataset

In 2015, Martin Pichl and Eva Zangerle published the [Spotify Playlists Dataset](https://zenodo.org/record/2594557#.XeNsLS2ZO9Z)^[Pichl, M., Zangerle, E., & Specht, G. (2015, November). Towards a context-aware music recommendation approach: What is hidden in the playlist name?. In 2015 IEEE International Conference on Data Mining Workshop (ICDMW) (pp. 1360-1365). IEEE.]. 
It was obtained by crawling the Twitter API for tweets sent via Spotify indicating users listening to music. The dataset 
consists of &lt;user, track, artist, playlist&gt;-quadruples, in sum 12,856,867 data points were collected. The authors 
indicate the dataset to contain data of 15,345 unique users who have created 143,528 unique playlists. In these playlists, 
1,878,457 unique song tracks by 276,848 unique artists were collected. Each playlist on average contains 703 songs (*SD* = 2,092).

![Sample data points from the Spotify Playlists Dataset.](/images/posts/spotify-dataset.png)
<div class="caption">Sample data points from the Spotify Playlists Dataset.</div>

### Generating Song Vectors

Having downloaded and preprocessed the dataset, I generated a song co-occurrence matrix. As described above, each matrix 
cell denoted the count of two songs mutually occurring in the same playlist. Subsequently, I ran the GloVe objective on 
this huge sparse matrix.

The objective ran for 10 iterations each taking about 36 hours on a Google Cloud instance with 2 Intel Haswell vCPUs and 
75 GB memory. As described above, this transformed the large matrix into dense, 100-dimensional song vectors. Using 
Principal Component Analysis (PCA), the following figure showcases a two dimensional projection the top 100 most occurring 
songs in the dataset. As we can see, there are forming clusters of similar songs which can be interpreted as different genres.

<div class="loadable-iframe">
<div id="spinner"><div><img alt="Loading" src="/assets/svg/puff.svg" /></div></div>
<iframe src="/plots/top100.html" onload="document.getElementById('spinner').style.display='none';"></iframe>
</div>
<div class="caption">Two dimensional PCA projections of the Top 100 songs.</div>

## Sorting Playlists with Song Vectors

Given our newly generated song vectors, we can now sort playlists. For Sortify, I employed a greedy approach: given a 
start song (chosen by the user), the algorithm chooses the next song based on the closest cosine distance of the vectors 
of the remaining songs. This process is repeated until no more songs are left and the whole playlist is sorted!

![Example of a shuffled playlists and its sorted counterpart. In this example, the algorithm clearly clusters the songs by genre.](/images/posts/list_sorted_1.png)
<div class="caption">Example of a shuffled playlists and its sorted counterpart. In this example, the algorithm clearly clusters the songs by genre.</div>

However, dataset only covers songs of the years 2015 and before. For other songs, a fallback is incorporated: 
[Spotify's audio features](https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/)
are used to function as 8-dimensional vector with the dimensions acousticness, danceability, energy, instrumentalness, 
liveness, speechiness, valence, and tempo. The same greedy approach is applied to also sort these songs.

## Limitations
As it currently is just a proof of concept, Sortify comes with a set of limitations:

* Using a greedy approach, the sorting quality tends to get worse towards the end of a playlist as cosine distances increase.
* The fallback of sorting songs by Spotify's audio feature vectors appears to have a much worse sorting quality than the GloVe approach.
* Currently the number of songs in a playlist is capped to 300, as Spotify limits the requests to their API for requesting the audio features mentioned above.

## Web Links

* [Sortify Repository on GitHub](http://github.com/jonasmue/sortify)
