import random, string, warnings, nltk
from googlesearch import search
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

warnings.filterwarnings('ignore')

nltk.download('popular', quiet=True)

file = r'C:\Users\DELL\Desktop\portfolio-harshil\training\bot.txt'

f = open(file, 'r', errors='ignore')
raw = f.read()
raw = raw.lower()

sent_tokens = nltk.sent_tokenize(raw)
word_tokens = nltk.word_tokenize(raw)
lemmatizer = nltk.stem.WordNetLemmatizer()

def LemTokens(tokens):
    return [lemmatizer.lemmatize(token) for token in tokens]

remove_punc_dict = dict((ord(punc), None) for punc in string.punctuation)

def LemNormalize(text):
    return LemTokens(nltk.word_tokenize(text.lower().translate(remove_punc_dict)))

def search_online(user_response):
    query = str(user_response)

    for j in search(query, num_results=5):
        print(j)

def response(user_response):
    robo_response = ''
    sent_tokens.append(user_response)
    TfIdVec = TfidfVectorizer(tokenizer=LemNormalize, stop_words='english')
    tfidf = TfIdVec.fit_transform(sent_tokens)
    vals = cosine_similarity(tfidf[-1], tfidf)
    idx = vals.argsort()[0][-2]
    flat = vals.flatten()
    flat.sort()
    req_tfidf = flat[-2]

    GREETING_INPUTS = ("hello", "hi", "greetings", "sup", "what's up", "hey")
    GREETING_RESPONSES = ["hi", "hey", "*nods*", "hi there", "hello", "I'm glad you're talking to me"]
    for word in user_response.split():
        if (word.lower() in GREETING_INPUTS):
            return random.choice(GREETING_RESPONSES)



    if(req_tfidf == 0):
        robo_response = [
            
            "Sorry, I have not been trained to answer that yet!", 
            "Sorry, I cannot answer to that, you can reach out to Harshil at harshilpatel30401@gmail.com",
            "I cannot answer to that yet!"
            ]
        return random.choice(robo_response)
        # web_search = input("Type Yes/No: ")
        # web_search.lower()
        # if (web_search == 'yes'):
        #     print("Here are the top 5 resuts from google: \n")
        #     return search_online(user_response)                       

        # elif (web_search == 'no'):
        #     robo_response = ("Okay")
        #     return robo_response

    if (user_response == 'thanks' or user_response == 'thank you'):
            robo_response = ("You're most welcome :)")
            return robo_response
            
    elif (('not' or 'not tell' or 'not say' or 'not send') in user_response):
            robo_response = ("No problem!")
            return robo_response

    elif (('your name' or 'who are you' or 'your identity') in user_response):
            robo_response = ('My name is KITT, I\'m Harshil\'s AI powered ChatBot. I can help you know more about Harshil')
            return robo_response

    elif (('siri') in user_response):
            robo_response = ("That's like comparing apples and...not apples")
            return robo_response

    elif (('siri' or 'assistant' or 'alexa') in user_response):
            robo_response = ("I offer no resistance to helpful assistants.")
            return robo_response

    else:
        robo_response = robo_response+sent_tokens[idx]
        return robo_response

print(response(""))