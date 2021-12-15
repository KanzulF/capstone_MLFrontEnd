#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


# In[3]:


books = pd.read_csv('datasets/books.csv')
books.head(5)


# In[4]:


books.info()


# In[5]:


books.describe()


# In[6]:


df = books[['book_id','title']]
df = df.sample(frac=1, random_state=42)
df = df.head(10000)
df


# In[7]:


df.isnull().sum()


# In[8]:


tf = TfidfVectorizer()
tf.fit(df['title']) 
tf.get_feature_names()


# In[9]:


tfidf_matrix = tf.fit_transform(df['title']) 
tfidf_matrix.shape


# In[10]:


tfidf_matrix.todense()


# In[11]:


pd.DataFrame(
    tfidf_matrix.todense(), 
    columns=tf.get_feature_names(),
    index=df.title
).sample(22, axis=1).sample(10, axis=0)


# In[12]:


cosine_sim = cosine_similarity(tfidf_matrix) 
cosine_sim


# In[13]:


cosine_sim_df = pd.DataFrame(cosine_sim, index=df['title'], columns=df['title'])
print('Shape:', cosine_sim_df.shape)
print()
cosine_sim_df.sample(5, axis=1).sample(10, axis=0)


# In[14]:


def books_recommendations(title, similarity_data=cosine_sim_df, items=df[['book_id', 'title']], k=15):
    index = similarity_data.loc[:,title].to_numpy().argpartition(
        range(-1, -k, -1))
    
    closest = similarity_data.columns[index[-1:-(k+2):-1]]
    closest = closest.drop(title, errors='ignore')
 
    return pd.DataFrame(closest).merge(items).head(k)


# In[18]:


validasi = df[df.title.eq('The Tenth Circle')]
validasi


# In[19]:


predict = books_recommendations('The Tenth Circle')
predict

