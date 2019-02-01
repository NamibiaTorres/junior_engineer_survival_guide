### Databases: Getting started
#### How to hook up a database:
1) Run this in terminal to setup database: `pip install flask-sqlalchemy`
2) In your file:

`
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)
`
This command: `db = SQLAlchemy`,  _hooks the database to our app_
#### Running Server on your local machine:
 STEP 1: type in terminal:
  `export FLASK_APP=code_g_day_2.py`
  STEP 2: run in development mode:
  `export FLASK_ENV=development`
  STEP 3: next terminal command:
  `flask run`


### HTTP Status Codes:
* 1xx(Informational)
* 2xx(SUccessful)
* 3xx(Redirection)
* 4xx(Client)
* 5xx(Server)

### OpenAPI specs:
* https://editor.swagger.io/
* openapi - Required
* info -Required
* paths -Required
* servers
* components
* security
* tags
* externalDocs
