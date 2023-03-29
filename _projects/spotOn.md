---
layout: page
title: SpotOn
description: Making FGSM to pay more attention
img: 
importance: 3
category: work
---
As a part of a research project of amFOSS AI, we worked on creating a new attack based on the integration of vanilla FGSM and attention maps. The main idea of this attack was to add perturbation only on the area under attention maps so that it will significantly increase the attack success rate but will keep the changes unobserved on the attacked image and keep the SSIM low. We inferred that the new attack performed comparable or better(in some cases) as compared to vanilla FGSM, for example in the case of FGSM the ASR was 0.63 but we got the ASR of 0.8837 (under similar conditions).

### Under Construction