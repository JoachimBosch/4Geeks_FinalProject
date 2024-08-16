from flask import Flask, request, jsonify
from models import db, User, Addresses, Subscription, Order, Product
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token
from argon2 import PasswordHasher
from config import *

app = Flask(__name__)
CORS(app)

# app.config["JWT_SECRET_KEY"] = Secret_Key
# jwt = JWTManager(app)

app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{DB_UserName}:{DB_Password}@finalproject-4geeks-finalproject-4geeks.l.aivencloud.com:22468/defaultdb?sslmode=require'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
ph = PasswordHasher()

with app.app_context():
    db.create_all()

@app.route("/")
def hello():
    return "<p>Hello World</p>"

""" @app.route("/token", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(username=username, password=password).first()

    if user is None:
        return jsonify({"msg": "Bad username or password"}), 401
    
    # Create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id }) """


@app.route("/register", methods=['POST'])
def subscribe():
    data = request.get_json()
    if not data or 'email' not in data or 'password' not in data:
        return 'Bad Request: Email and password are required', 400

    try:
        email = data['email']
        secure_password = ph.hash(data['password'])
        new_user = User()
        new_user.email = email
        new_user.password = secure_password
        db.session.add(new_user)
        db.session.commit()
        return 'Success', 200
    except Exception as e:
        db.session.rollback()
        return f'Internal Server Error: {str(e)}', 500

@app.route("/login", methods=['POST'])
def login():
    data = request.get_json()
    if not data or 'email' not in data or 'password' not in data:
        return 'Bad Request: Email and password are required', 400

    user = User.query.filter_by(email=data['email']).first()

    if user:
        if ph.verify(user.password, data['password']):
            return 'Login successful', 200
        else:
            return 'Invalid email or password', 401
   
    else:
        return 'Invalid email or password', 401


@app.route("/user/<int:user_id>", methods=['PUT'])
def modify_user(user_id):
    data = request.get_json()
    user = User.query.get(user_id)

    if not user:
        return 'User not found', 404

    try:
        if 'email' in data:
            user.email = data['email']
        if 'first_name' in data:
            user.first_name = data['first_name']
        if 'last_name' in data:
            user.last_name = data['last_name']
        if 'phone' in data:
            user.phone = data['phone']

        db.session.commit()
        return 'User updated successfully', 200
    except Exception as e:
        db.session.rollback()
        return f'Internal Server Error: {str(e)}', 500

@app.route("/user/<int:user_id>/password", methods=['PUT'])
def update_password(user_id):
    data = request.get_json()
    user = User.query.get(user_id)

    if not user:
        return 'User not found', 404

    if 'password' not in data:
        return 'Bad Request: Password is required', 400

    try:
        user.password = data['password']
        db.session.commit()
        return 'Password updated successfully', 200
    except Exception as e:
        db.session.rollback()
        return f'Internal Server Error: {str(e)}', 500

@app.route("/address", methods=['POST'])
def add_address():
    data = request.get_json()
    if not data or 'user_id' not in data or 'relation_to_user' not in data or 'street' not in data or 'street_number' not in data or 'postal_code' not in data or 'city' not in data or 'country' not in data:
        return 'Bad Request: All address fields are required', 400

    try:
        address = Addresses(
            user_id=data['user_id'],
            relation_to_user=data['relation_to_user'],
            street=data['street'],
            street_number=data['street_number'],
            postal_code=data['postal_code'],
            city=data['city'],
            country=data['country']
        )
        db.session.add(address)
        db.session.commit()
        return 'Address added successfully', 200
    except Exception as e:
        db.session.rollback()
        return f'Internal Server Error: {str(e)}', 500

@app.route("/address/<int:address_id>", methods=['PUT'])
def update_address(address_id):
    data = request.get_json()
    address = Addresses.query.get(address_id)

    if not address:
        return 'Address not found', 404

    try:
        if 'relation_to_user' in data:
            address.relation_to_user = data['relation_to_user']
        if 'street' in data:
            address.street = data['street']
        if 'street_number' in data:
            address.street_number = data['street_number']
        if 'postal_code' in data:
            address.postal_code = data['postal_code']
        if 'city' in data:
            address.city = data['city']
        if 'country' in data:
            address.country = data['country']

        db.session.commit()
        return 'Address updated successfully', 200
    except Exception as e:
        db.session.rollback()
        return f'Internal Server Error: {str(e)}', 500

app.run(host='0.0.0.0', port=3000)