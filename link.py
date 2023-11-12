import time
import pymongo
import knxpy

client = pymongo.MongoClient('mongodb://localhost:27017/')
db = client['smart-home']
devices = db['devices']


connection = knxpy.Connection('192.168.1.100', 3671)
connection.connect()

def knx_event(evt, src, dest, value):
    print('KNX event:', evt, src, dest, value)
    devices.update_one({'address': dest}, {'$set': {'value': value}})

connection.register_callback(knx_event)

app = Flask(_name_)

@app.route('/devices', methods=['GET'])
def get_devices():
    result = devices.find({})
    output = []
    for device in result:
        output.append({'name': device['name'], 'type': device['type'], 'address': device['address'], 'value': device['value']})
    return jsonify(output)

@app.route('/devices/<id>', methods=['GET'])
def get_device(id):
    result = devices.find_one({'_id': ObjectId(id)})
    if result:
        output = {'name': result['name'], 'type': result['type'], 'address': result['address'], 'value': result['value']}
    else:
        output = {'error': 'Device not found'}
    return jsonify(output)

@app.route('/devices/<id>', methods=['PUT'])
def update_device(id):
    value = request.json['value']
    result = devices.find_one({'_id': ObjectId(id)})
    if result:
        connection.write(result['address'], value, 'DPT1')
        output = {'name': result['name'], 'type': result['type'], 'address': result['address'], 'value': value}
    else:
        output = {'error': 'Device not found'}
    return jsonify(output)

if _name_ == '_main_':
    app.run(host='0.0.0.0', port=3000)