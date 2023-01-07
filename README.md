# ECOMMERCE BACKEND PROYECTO FINAL
How to install all dependencies:
``npm i or pnpm i or yarn``

## Introduction

Development of a backend ecommerce with all the functionality it includes 

### EndPoints

'/' home path, when you get login, you have to get this endpoint for getting autorize
#### /auth
'/auth/signup' to create an account
'/auth/login' access to an existing account, log in
'/auth/logout' close session, exit session, destroy session
### /products
'/products' GET all products data, POST a product, DELETE all
'/products/:id' GET one specific product, PUT product data, DELETE one
### /cart
'/cart' GET user cart, POST products to cart, DELETE all prods in cart
'/cart/prodId' PUT user cart to update chosen quantity, DELETE one specific product in cart
### /order
'/order' GET orders, POST create order
'/order/orderNumber' GET an order by orderNumber, DELETE an order by orderNumber
### /chat
'/chat' GET, method get renders a page with a form for chatting, all messages are save to the DB
### /info
'/info' GET, renders sv configurable data


### technologies
- Express
- Bcrypt
- MongoDb/Mongoose 
- ejs
- jsonwebtoken
- nanoid
- nodemailer
- passport/passport-jwt
- socket.io
