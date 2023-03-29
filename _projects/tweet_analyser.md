---
layout: page
title: Tweet Analyser
description: A Tweet Analyser that will classify your tweet into few labels such as abusive, non-abusive, hate, and humour. It fetches the tweet on particular query using Twitter API and after filtering analyses the tweet.
img: 
importance: 3
github: https://github.com/iamsh4shank/Tweet_Analyser
category: fun
---

The rise of social media leads to tremendous interest among internet users nowadays. Data from these social networking sites are used for many purposes like prediction, marketing, sentiment analysis, etc. In this paper, we are considering the social media site Twitter for analyzing the sentiments because a huge number of tweets received every year could be subjected to sentiment analysis. Sentiment Analysis is a technique used in text mining. It may, therefore, be described as a text mining technique for analyzing the underlying sentiment of a text message, i.e., a tweet. 

Twitter sentiment or opinion expressed through it may be positive, negative, or neutral. Methods like, positive and negative words to find on the sentence are however inappropriate, because the flavor of the text block depends a lot on the context.

### :brain:  What is Sentimental Analysis
Sentiment analysis can be interpreted as a process that automates the mining of attitudes, opinions, views, frame of mind, and emotions from text, speech, tweets, and database sources processing through Natural Language Processing (NLP). Sentiment analysis involves opinions text to be classified as ”positive” or ”negative” or ”neutral”. It’s also referred to as subjectivity analysis, opinion mining, and appraisal extraction. 

As a part of Natural Language Processing, algorithms like SVM, Naive Bayes is used in sentences to predict the polarity of that sentence. Sentiment analysis of Twitter data may also depend upon sentence level and document level. Sentiment Analysis for Twitter has a number of applications in Business analysis, political analysis, public actions, etc.

## :wrench: How I Developed
For data collection, as in our case, the data is the tweets, so we scraped the actual tweets based on some keywords using Twitter Developer APIs. These APIs provide us the support of fetching tweets, searching tweets, retweeting, and various other functionalities which are present in Twitter. The scraped data is further stored in a CSV file where the first column represents the scraped tweet and the second column represents the username of that particular tweet which will further help us to send a message to a particular user if he tweeted some negative tweets.


After this, we have a tweet filtering module which will take each of the individual tweets from the CSV file and then pass it with the filter layer so that all the links, images, videos, special character, and other punctuations will get removed and emojis and short sentences will get expanded to the actual words Here we’ll also use tokenization i.e. it will separate the big text into different sentences and words. This makes reading between the lines much easier. Once the tweets are filtered then next we’ll take the help of a ”bad word” file which will check which tweet contains abused words or which is a positive tweet. We also put a label as ” label NEGATIVE” for negative tweets and ” labal POSITIVE” for positive tweets. 

Further, the tweets are upsampled to make an equal number of data under both classes. After this, our final training data is ready which will get stored in a new CSV file. After this we will apply NLP using the fastText library by Facebook AI, this will help us to prepare a model from the training dataset where it will train the model to map the tweet based on the label and the bad word used.

### :star: Outputs
I performed it on various queries on Twitter like - Fake news, movie reviews, religious, and political topics. 