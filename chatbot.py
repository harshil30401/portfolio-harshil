import random, string, warnings, nltk

# from googlesearch import search
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
# from nltk.stem import WordNetLemmatizer

warnings.filterwarnings('ignore')

# from nltk.stem import WordNetLemmatizer
nltk.download('popular', quiet=True)

# from google.colab import drive
# drive.mount('/content/drive')

file = r"../static/training/bot.txt"

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

# def search_online(user_response):
#     query = str(user_response)

#     for j in search(query, num_results=5):
#         print(j)

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
        #print("Sorry, i don't understand, do you want me to do a web search?")
        # web_search = input("Type Yes/No: ")
        # web_search.lower()
        # if (web_search == 'yes'):
        #     print("KITT: Here are the top 5 resuts from google: \n")
        #     return search_online(user_response)                       

        # elif (web_search == 'no'):
        #     robo_response = ("KITT: Okay")
        #     return robo_response

        # else:
        #     robo_response = ("KITT: Not a valid response!")
        #     return robo_response

    else:
        robo_response = robo_response+sent_tokens[idx]
        return robo_response

def botResponse(user_response):

    user_response = user_response.lower()
    user_response = dropSpecialChars(user_response)
    # print(user_response)
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






































# import random, string, warnings, nltk
# from googlesearch import search
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.metrics.pairwise import cosine_similarity
# # from nltk.stem import WordNetLemmatizer

# warnings.filterwarnings('ignore')

# # from nltk.stem import WordNetLemmatizer
# nltk.download('popular', quiet=True)

# # from google.colab import drive
# # drive.mount('/content/drive')

# file = r'C:\Users\DELL\Desktop\Testing\training\bot.txt'

# f = open(file, 'r', errors='ignore')
# raw = f.read()
# raw = raw.lower()

# sent_tokens = nltk.sent_tokenize(raw)
# word_tokens = nltk.word_tokenize(raw)
# lemmatizer = nltk.stem.WordNetLemmatizer()

# def LemTokens(tokens):
#     return [lemmatizer.lemmatize(token) for token in tokens]

# remove_punc_dict = dict((ord(punc), None) for punc in string.punctuation)

# def LemNormalize(text):
#     return LemTokens(nltk.word_tokenize(text.lower().translate(remove_punc_dict)))

# # def search_online(user_response):
# #     query = str(user_response)

# #     for j in search(query, num_results=5):
# #         print(j)

# def response(user_response):
#     robo_response = ''
#     sent_tokens.append(user_response)
#     TfIdVec = TfidfVectorizer(tokenizer=LemNormalize, stop_words='english')
#     tfidf = TfIdVec.fit_transform(sent_tokens)
#     vals = cosine_similarity(tfidf[-1], tfidf)
#     idx = vals.argsort()[0][-2]
#     flat = vals.flatten()
#     flat.sort()
#     req_tfidf = flat[-2]

#     GREETING_INPUTS = ("hello", "hi", "greetings", "sup", "what's up", "hey")
#     GREETING_RESPONSES = ["hi", "hey", "*nods*", "hi there", "hello", "I'm glad you're talking to me"]
#     for word in user_response.split():
#         if (word.lower() in GREETING_INPUTS):
#             return random.choice(GREETING_RESPONSES)



#     if(req_tfidf == 0):
#         robo_response = [
#             "Sorry, I have not been trained to answer that yet!", 
#             "Sorry, I cannot answer to that, you can reach out to Harshil at harshilpatel30401@gmail.com",
#             "Please download the resume from the 'About me' section for a more in-depth illustration of Harshil's projects, experiences and accomplishments."
#             ]
#         return random.choice(robo_response)
#         # web_search = input("Type Yes/No: ")
#         # web_search.lower()
#         # if (web_search == 'yes'):
#         #     print("Here are the top 5 resuts from google: \n")
#         #     return search_online(user_response)                       

#         # elif (web_search == 'no'):
#         #     robo_response = ("Okay")
#         #     return robo_response

#     if (user_response == 'thanks' or user_response == 'thank you'):
#             robo_response = ("You're most welcome :)")
#             return robo_response
            
#     elif (('not' or 'not tell' or 'not say' or 'not send') in user_response):
#             robo_response = ("No problem!")
#             return robo_response

#     elif (('your name' or 'who are you' or 'your identity') in user_response):
#             robo_response = ('My name is KITT, I\'m Harshil\'s AI powered ChatBot. I can help you know more about Harshil')
#             return robo_response

#     elif (('siri' and 'better') in user_response):
#             robo_response = ("That's like comparing apples and...not apples")
#             return robo_response

#     elif (('siri' or 'assistant' or 'alexa') in user_response):
#             robo_response = ("I offer no resistance to helpful assistants.")
#             return robo_response

#     else:
#         robo_response = robo_response+sent_tokens[idx]
#         return robo_response

# response("Who is Harshil?")



















