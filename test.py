import os
from flask import url_for

print(str(url_for('static', filename='training/bot.txt')))