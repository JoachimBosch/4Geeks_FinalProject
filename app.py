from flask import Flask, redirect, request, jsonify
from models import db, User, Addresses, Subscription, Order, Product
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, unset_jwt_cookies, unset_jwt_cookies, jwt_required, get_jwt_identity, get_jwt, set_access_cookies, set_refresh_cookies
from argon2 import PasswordHasher
from config import *
from datetime import datetime, timedelta, timezone
import json
import stripe
import os

#STRIPE_PUBLISHABLE_KEY = STR_PUBLISHABLE_KEY
stripe.api_key = STR_SECRET_KEY

app = Flask(__name__, static_url_path='', static_folder='public')
CORS(app, supports_credentials=True, resources={r"/*": {"origins": "*", "allow_headers": ["Authorization", "Content-Type"]}})
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

YOUR_DOMAIN = 'http://localhost:5173'


app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{DB_UserName}:{DB_Password}@finalproject-4geeks-finalproject-4geeks.l.aivencloud.com:22468/defaultdb?sslmode=require'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = JWT_Secret_Key
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)


db.init_app(app)
ph = PasswordHasher()
jwt = JWTManager(app)

with app.app_context():
    db.create_all()

@app.route("/")
def hello():
    return "<p>Hello World</p>"

# User related

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

    if user and ph.verify(user.password, data['password']):
        access_token = create_access_token(identity=user.email)
        return jsonify({"access_token": access_token, "user": user.serialize()}), 200
        
    return jsonify({"message": "Invalid credentials"}), 401

@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            set_access_cookies(response, access_token)              
        return response
    except (RuntimeError, KeyError):
        return response

@app.route("/logout", methods=['POST'])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

@app.route("/user/<int:user_id>", methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return 'User not found', 404

    user_data = {
        'id': user.id,
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'phone': user.phone
    }
    return jsonify(user_data), 200

@app.route("/change-password", methods=['POST'])
def change_password():
    try:
        data = request.get_json()

        if not data:
            return 'error: Missing required fields', 400

        user = User.query.filter_by(email=data['email']).first()
        if not user:
            return 'Error: user not found', 404

        if not ph.verify(user.password, data['old_password']):
            return 'Error: passwords do not match', 401
        
        new_password = ph.hash(str(data['new_password']))
        user.password = new_password
        db.session.commit()
        return 'Successfully updated password', 200
    except Exception as e:
        db.session.rollback()
        return f'Internal Server Error: {str(e)}', 500

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

# Address related

@app.route('/user/<int:user_id>/addresses', methods=['GET'])
def get_user_addresses(user_id):
    user = User.query.get(user_id)
    if not user:
        return 'User not found', 404

    addresses = Addresses.query.filter_by(user_id=user_id).all()
    if not addresses:
        return 'No addresses found', 404

    address_list = []
    for address in addresses:
        address_data = {
            'id': address.id,
            'relation_to_user': address.relation_to_user,
            'street': address.street,
            'street_number': address.street_number,
            'postal_code': address.postal_code,
            'city': address.city,
            'country': address.country
        }
        address_list.append(address_data)

    return jsonify(address_list), 200

@app.route("/address", methods=['POST'])
def add_address():
    data = request.get_json()
    if not data or 'user_id' not in data or 'relation_to_user' not in data or 'street' not in data or 'street_number' not in data or 'postal_code' not in data or 'city' not in data or 'country' not in data:
        return 'Bad Request: All address fields are required', 400

    try:
        new_address = Addresses()
        new_address.user_id=data['user_id']
        new_address.relation_to_user=data['relation_to_user']
        new_address.street=data['street']
        new_address.street_number=data['street_number']
        new_address.postal_code=data['postal_code']
        new_address.city=data['city']
        new_address.country=data['country']
        db.session.add(new_address)
        db.session.commit()
        return 'Address added successfully', 200
    except Exception as e:
        db.session.rollback()
        print("Error:", str(e))
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

@app.route('/address/<int:address_id>', methods=['DELETE'])
def delete_address(address_id):
    try:
        address = Addresses.query.get(address_id)

        if address is None:
            return 'Address not found', 404

        db.session.delete(address)
        db.session.commit()

        return 'Address deleted successfully', 200

    except Exception as e:
        db.session.rollback()
        return 'Error while deleting address', 500

# Subscription related

@app.route("/subscriptions", methods=['POST'])
def add_subscription():
    data = request.get_json()
    if not data or 'user_id' not in data or 'billing_address' not in data or 'shipping_address' not in data or 'order' not in data or 'start_date' not in data or 'end_date' not in data or 'payment_method' not in data:
        return 'Bad Request: All fields are required', 400

    try:
        new_subscription = Subscription()
        new_subscription.active=True
        new_subscription.user_id=data['user_id']
        new_subscription.billing_address=data['billing_address']
        new_subscription.shipping_address=data['shipping_address']
        new_subscription.order=data['order']
        new_subscription.start_date=data['start_date']
        new_subscription.end_date=data['end_date']
        new_subscription.payment_method=data['payment_method']
        db.session.add(new_subscription)
        db.session.commit()
        return 'Subscription added successfully', 200
    except Exception as e:
        db.session.rollback()
        print("Error:", str(e))
        return f'Internal Server Error: {str(e)}', 500
  
@app.route('/user/<int:user_id>/subscriptions', methods=['GET'])
def get_user_subscriptions(user_id):
    user = User.query.get(user_id)
    if not user:
        return 'User not found', 404

    subscriptions = Subscription.query.filter_by(user_id=user_id).all()
    if not subscriptions:
        return 'No subscriptions found', 404
    
    subscriptions_list = []
    for sub in subscriptions:
        subscription_data = {
            'id': sub.id,
            'user_id': sub.user_id,
            'order': sub.order,
            'start_date': sub.start_date,
            'end_date': sub.end_date,
        }
        subscriptions_list.append(subscription_data)

    return jsonify(subscriptions_list), 200

@app.route("/subscriptions/<int:subscription_id>", methods=['PUT'])
def update_user_subscription(subscription_id):
    data = request.get_json()
    subscription = Subscription.query.get(subscription_id)

    if not subscription:
        return 'Subscription not found', 404

    try:
        if 'billing_address' in data:
            subscription.billing_address = data['billing_address']
        if 'shipping_address' in data:
            subscription.shipping_address = data['shipping_address']
        if 'active' in data:
            subscription.active = data['active']
        if 'end_date' in data:
            subscription.end_date = data['end_date']

        db.session.commit()
        return 'Subscription updated successfully', 200
    except Exception as e:
        db.session.rollback()
        return f'Internal Server Error: {str(e)}', 500
    


# Stripe API integration


""" @app.route('/config', methods=['GET'])
def get_config():
    return jsonify({"publishableKey": STRIPE_PUBLISHABLE_KEY})

@app.route("/payment", methods=['POST'])
def create_payment_intent():
    try:
        data = request.get_json()
        #payment_method_type = data['paymentMethodType']
        #currency = data['currency']
        
        payment_intent = stripe.PaymentIntent.create(
            amount="2000",
            currency="eur",
            automatic_payment_methods={
                'enabled': True
            },
        )
        return jsonify({"client_secret": payment_intent.client_secret})
    except stripe.error.StripeError as e:
        return jsonify({'error': {'message': e.user_message}}), 400
    except Exception as e:
        return jsonify({'error': {'message': str(e)}}), 500 """



@app.route('/create-payment-intent', methods=['POST'])
def create_payment_intent():
    try:
        data = request.get_json()
        amount = int(data['amount'])
        print(data)
        intent = stripe.PaymentIntent.create(
            amount=amount,
            currency='eur',
            automatic_payment_methods={
                'enabled': True
            }
        )
    except stripe.error.StripeError as e:
        return jsonify({"error": str(e)}), 400
    return jsonify({
            'clientSecret': intent['client_secret'],
            # [DEV]: For demo purposes only, you should avoid exposing the PaymentIntent ID in the client-side code.
            'dpmCheckerLink': 'https://dashboard.stripe.com/settings/payment_methods/review?transaction_id={}'.format(intent['id']),
        })



@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        data = request.get_json()
        amount = int(data['amount']) * 100  # Convert to cents
        checkout_session = stripe.checkout.Session.create(
            line_items=[{
                'price_data': {
                    'currency': 'eur',
                    'product_data': {
                        'name': 'Your order',
                    },
                'unit_amount': amount,
                },
                'quantity': 1,
            }], 
            mode='payment',
            success_url=YOUR_DOMAIN + '/success',
            cancel_url=YOUR_DOMAIN + '/canceled',
        )
    except Exception as e:
        return str(e)
    print(checkout_session.url)
    return jsonify(url=checkout_session.url)




@app.route('/session-status', methods=['GET'])
def session_status():
  session = stripe.checkout.Session.retrieve(request.args.get('session_id'))

  return jsonify(status=session.status, customer_email=session.customer_details.email)

app.run(host='0.0.0.0', port=3000)