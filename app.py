from flask import Flask, render_template, url_for, request
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

 

@app.route('/')
@app.route('/home')
def home():
    return render_template("index.html")



@app.route('/result',methods=['POST', 'GET'])
def result():
    output = request.form.to_dict()
    print(output)
    keyword = output["inputKeyword"]



    def recommended():
        #Load & Preprocessed Data
        books = pd.read_csv('/content/Books.csv')
        books.head(5)

        #Split data into features and target
        df = books[['book_id','Title']]
        df = df.sample(frac=1, random_state=42)
        df = df.head(10000)
        df.isnull().sum()
        tf = TfidfVectorizer()
        tf.fit(df['Title']) 
        tfidf_matrix = tf.fit_transform(df['Title']) 
        tfidf_matrix.todense()
        pd.DataFrame(
            tfidf_matrix.todense(), 
            columns=tf.get_feature_names(),
            index=df.Title
        ).sample(22, axis=1).sample(10, axis=0)
        cosine_sim = cosine_similarity(tfidf_matrix) 
        cosine_sim_df = pd.DataFrame(cosine_sim, index=df['Title'], columns=df['Title'])
        return cosine_sim_df

        #Model
    def books_recommendations(title, similarity_data, k=15):
        index = similarity_data.loc[:,title].to_numpy().argpartition(
            range(-1, -k, -1))
        closest = similarity_data.columns[index[-1:-(k+2):-1]]
        closest = closest.drop(title, errors='ignore')
        return pd.DataFrame(closest).head(k)

    # validasi = df[df.title.eq('The Tenth Circle')]
    # validasi

    model = recommended()
    predict = books_recommendations(keyword, model)


    return render_template('index.html', rekom = predict)
    




if __name__ == "__main__":
    app.run(debug=True)