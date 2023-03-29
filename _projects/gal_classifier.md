---
layout: page
title: Galaxy Classifier
description: AI Tool for morphological classfication using Deep ConvNet. It shows how computational cosmology could help to make hard classificaiton easy.
img: 
github: https://github.com/iamsh4shank/gal-classifier
importance: 2
category: work
---

This project is based on morphological classfication using Deep COnvolution Neural Network. It shows how computational cosmology could help to make hard classificaiton easy. The galaxy can be classified in various ways, they can be in three classes namely - Elliptical, Spiral, Irregular or they could be classified more deeper as Disturbed, Merging, Round smooth, barred spiral, bulge, etc. Project [URL](https://github.com/iamsh4shank/gal-classifier)

This project uses astroNN dataset, This dataset is generated from [DESI Legacy Imaging Survey](https://www.legacysurvey.org/), and the labels comes from [Galaxy Zoo](https://www.galaxyzoo.org/). We can even preprocess Galaxy Zoo and can convert it into three main classes  - Elliptical, Spiral, Irregular.  AstroNN dataset contains images for 10 different labels namely - 

```
Galaxy10 dataset (17736 images)
├── Class 0 (1081 images): Disturbed Galaxies
├── Class 1 (1853 images): Merging Galaxies
├── Class 2 (2645 images): Round Smooth Galaxies
├── Class 3 (2027 images): In-between Round Smooth Galaxies
├── Class 4 ( 334 images): Cigar Shaped Smooth Galaxies
├── Class 5 (2043 images): Barred Spiral Galaxies
├── Class 6 (1829 images): Unbarred Tight Spiral Galaxies
├── Class 7 (2628 images): Unbarred Loose Spiral Galaxies
├── Class 8 (1423 images): Edge-on Galaxies without Bulge
└── Class 9 (1873 images): Edge-on Galaxies with Bulge
```


The proposed ConvNet galaxy arcitecture consists of one input layer having 16 filters, followed by 4 hidden layers, 1 penultimate dense layer and an Output Softmax layer. I also included data augmentation such as shear, zoom, rotation, rescaling, and flip. I used tanh activation function but one can also try ReLU.

The dataset could also be generated manually using Hubblesite collection and other similar digital surveys and then after preprocessing can be used for training.

### Future Work -
* Apply more augmentation techniques, one paper mentioned images generated using chainging rotation angles multiple time helps in getting better results.
* Update the dataset with the Galaxy Zoo to get more detailed images.


References - 
1. [Deep Learning for Astronomical Object Classification: A Case Study](https://www.scitepress.org/Papers/2020/89398/89398.pdf)
2. [Improving galaxy morphologies for SDSS with Deep Learning](https://arxiv.org/abs/1711.05744)
2. [Star–galaxy classification using deep convolutional neural networks](https://academic.oup.com/mnras/article/464/4/4463/2417400)
2. [Self-supervised Learning for Astronomical Image Classification](https://arxiv.org/pdf/2004.11336.pdf)