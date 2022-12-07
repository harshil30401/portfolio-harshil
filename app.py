from flask import Flask, render_template, request


import random, string, warnings, nltk

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

warnings.filterwarnings('ignore')

nltk.download('popular', quiet=True)

file = "/home/Harshil3004/mysite/static/training/bot.txt"

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

GREETING_INPUTS = ("hello", "hi", "greetings", "sup", "what's up", "hey")
GREETING_RESPONSES = ["hi", "hey", "*nods*", "hi there", "hello", "I'm glad you're talking to me"]

def greeting(sentence):
    for word in sentence.split():
        if (word.lower() in GREETING_INPUTS):
            return random.choice(GREETING_RESPONSES)

def dropSpecialChars(user_response):
    final_string = ""
    for character in user_response:
        if  character == " ":
            final_string = final_string + character
        else:
            if(character.isalnum()):
                final_string = final_string + character
    return (final_string)

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
    if(req_tfidf == 0):
        arr = [
            'Sorry, I have not been trained to answer that yet!',
            'Sorry, I do not understand',
            'Sorry, I cannot answer to that. You can send an email to Harshil from the "Contacts" section'
        ]
        robo_response = random.choice(arr)
        return robo_response
    else:
        robo_response = robo_response+sent_tokens[idx]
        return robo_response

def botResponse(user_response):

    user_response = user_response.lower()
    user_response = dropSpecialChars(user_response)
    if(user_response != 'bye'):
        if(('thanks' or 'thank you' or 'ty') in user_response):
            # flag = False
            robo_response = ("You're most welcome!")
            return robo_response
        elif (('not' or 'not tell' or 'not say' or 'not send') in user_response):
            robo_response = ("Okay, i won't")
            return robo_response

        elif (('your name' or 'who are you' or 'your identity') in user_response):
            robo_response = ('My name is KITT, I\'m an AI powered ChatBot')
            return robo_response

        else:
            if(greeting(user_response) != None):
                robo_response = (""+greeting(user_response))
                return robo_response
            else:
                print("",end="")
                robo_response = (response(user_response))
                sent_tokens.remove(user_response)
                return robo_response
    else:
        robo_response = ("Have a great day!")
        return robo_response




app = Flask(__name__)

@app.route("/")
def main():
    return render_template('index.html')

@app.route("/get")
def get_bot_response():

    userMessage = request.args.get('userMessage')   #requesting input value as an argument

    print("-"*100)
    print("user-message: "+userMessage)
    processedOutput = botResponse(userMessage)
    print("bot-response: "+processedOutput)
    print("-"*100)

    return str(processedOutput)

if __name__ == "__main__":
    app.run()