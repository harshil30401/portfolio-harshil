from flask import Flask, render_template, request, redirect
from chatbot import main
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ProcessUserinfo/<string:userMessage>', methods=['GET','POST'])
def ProcessUserinfo(userMessage):
    userMessage = json.loads(userMessage)
    print()
    print(main(userMessage))
    print()
    return('/')

if __name__ == "__main__":
    app.run(debug=True)