# -*- coding: utf-8 -*-

from flask import Flask, request, jsonify
import jwt
import datetime
from json import loads
from bson.json_util import dumps
import connection
import console

app = Flask(__name__)

app.config['SECRET_KEY'] = 'secret'

con = connection.Connection(database_name="chess")
collection = con.db.get_collection("games")


@app.route('/api/chess', methods=['GET', 'POST'])
def chess():
    token = None
    if 'x-access-tokens' in request.headers:
        token = request.headers['x-access-tokens']

    if request.method == 'GET':
        if not token:
            plain_text = str(datetime.datetime.now())
            new_key = jwt.encode(
                {'key': plain_text},
                app.config['SECRET_KEY']).decode('UTF-8')
            document = loads(dumps(({'_id': plain_text, 'game': 'whippii'})))
            collection.insert_one(document)
            console.log('inserting this key: ' + plain_text)
            tmp = collection.find_one({'_id': plain_text})
            if tmp is not None:
                return loads(dumps({'game': tmp.get('game'),
                                    'token': new_key}))
            return jsonify({'error': 'something went wrong'})

        try:
            jwt_dict = jwt.decode(token, app.config['SECRET_KEY'])
            key = jwt_dict.get('key')
            console.log('trying this key: ' + key)
            tmp = collection.find_one({'_id': key})
            if tmp is not None:
                return loads(dumps({'game': tmp.get('game')
                                    }))
            else:
                return jsonify({'message': 'token was not in the database'})
        except:
            return jsonify({'message': 'token is invalid'})

    if request.method == 'POST':
        if not token:
            return jsonify({'message': 'there was no token'})
        json_document = request.json
        return jsonify({'message': 'ei vittu'})


if __name__ == '__main__':
    app.run(debug=True)
