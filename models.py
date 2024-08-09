import json
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(80), unique=False)
    last_name = db.Column(db.String(80), unique=False)
    phone = db.Column(db.String(80), unique=False)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone": self.phone,
        }

class Addresses(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    relation_to_user = db.Column(db.String(80), unique=False, nullable=False)
    street = db.Column(db.String(80), unique=False, nullable=False)
    street_number = db.Column(db.Integer, unique=False, nullable=False)
    postal_code = db.Column(db.String(10), unique=False, nullable=False)
    city = db.Column(db.String(80), unique=False, nullable=False)
    country = db.Column(db.String(80), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "relation_to_user": self.relation_to_user,
            "street": self.street,
            "street_number": self.street_number,
            "postal_code": self.postal_code,
            "city": self.city,
            "country": self.country,
        }
    
class Subscription(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_address = db.Column(db.Integer, db.ForeignKey('addresses.id'))
    order = db.Column(db.String(80), unique=False, nullable=False)
    active = db.Column(db.Boolean, nullable=False)
    start_date = db.Column(db.String(80), unique=False, nullable=False)
    end_date = db.Column(db.String(80), unique=False, nullable=False)
    payment_method = db.Column(db.String(80), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "user_address": self.user_address,
            "order": self.order,
            "active": self.active,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "payment_method": self.payment_method,
        }

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(200), unique=False, nullable=True)
    price = db.Column(db.Float, unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
        }
    
class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    subscription_id = db.Column(db.Integer, db.ForeignKey('subscription.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'))

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "subscription_id": self.subscription_id,
            "product_id": self.product_id,
        }

if __name__ == '__main__':
    app.run(debug=True)