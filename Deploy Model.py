#!/usr/bin/env python
# coding: utf-8

# In[1]:


#Load & Preprocessed Data
import pandas as pd

books = pd.read_csv('datasets/books.csv')
books.head(5)


# In[5]:


#Split data into features and target
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

df = books[['book_id','title']]
df = df.sample(frac=1, random_state=42)
df = df.head(10000)
df.isnull().sum()
tf = TfidfVectorizer()
tf.fit(df['title']) 
tfidf_matrix = tf.fit_transform(df['title']) 
tfidf_matrix.todense()
pd.DataFrame(
    tfidf_matrix.todense(), 
    columns=tf.get_feature_names(),
    index=df.title
).sample(22, axis=1).sample(10, axis=0)
cosine_sim = cosine_similarity(tfidf_matrix) 
cosine_sim_df = pd.DataFrame(cosine_sim, index=df['title'], columns=df['title'])


# In[31]:


#Model
def books_recommendations(title, similarity_data=cosine_sim_df, items=df[['book_id', 'title']], k=15):
    index = similarity_data.loc[:,title].to_numpy().argpartition(
        range(-1, -k, -1))
    closest = similarity_data.columns[index[-1:-(k+2):-1]]
    return pd.DataFrame(closest).merge(items).head(k)


# In[14]:


validasi = df[df.title.eq('The Tenth Circle')]
validasi


# In[15]:


predict = books_recommendations('The Tenth Circle')
predict


# In[18]:


import pickle
import joblib
saved_model = pickle.dumps(books_recommendations)


# In[19]:


joblib.dump(books_recommendations, 'model.pkl')


# In[28]:


import numpy as np 
test_data = "The Calvin and Hobbes Tenth Anniversary Book"
#print(test_data)


# In[29]:


#declare path where you saved your model
outFileFolder = 'datasets/'

filePath = outFileFolder + 'model.pkl'
#Open File
file = open(filePath, "rb")

#Load model
trained_model = joblib.load(file)


# In[30]:


prediction = trained_model(test_data)
print(prediction)


# In[ ]:




