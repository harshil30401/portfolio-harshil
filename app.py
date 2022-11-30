from flask import Flask, render_template, request

app = Flask(__name__)

from chatbot import botResponse

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
    app.run(debug=True)