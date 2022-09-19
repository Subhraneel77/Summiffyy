from NLPmodel import Abstractive_Summarizer
from flask import Flask,request
from flask_cors import CORS,cross_origin
app = Flask(__name__)
CORS(app)
p = Abstractive_Summarizer()



@app.route('/')
@cross_origin()
def hello_world():
    return 'Hello, World!'

@app.route('/summarize', methods=['GET'])
def search():
    k = p.main(request.args.get("article"))
    return k

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6001)

# flask run --host=0.0.0.0 --port=6000