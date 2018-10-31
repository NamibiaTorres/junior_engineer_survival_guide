

## Getting Started with Rails

#### Creating a new Rails application:

* In your terminal, go to the folder where the application will be stored, and then type in: ```rails new [name_of_application]```

* **Removing Minitest:** If you want to use the default minitest in rails leave the above code as is, but if you want to remove minitest in order to install RSpec later use the following: ```rails new [name_of_application] -T```

* **Changing Default Database** If you want to use the default database, SQLite, leave the above code as is, if you want to instead use another database, like PostgreSQL then type: ```rails new [name_of_application] -T --datsbase=postgresql```
  * If running this code doesn't install PostgreSQL, then you have to do install the PostgreSQL package using homebrew: ```brew install postgresql```

* **Setting up Spec**: Start by running the command ```spec -—init``` in your terminal to allow your project to use RSpec, then add the rspec gem to your gemfile by typing: ```gem 'rspec', '~> 3.7'``` , followed by typing ```bundle install``` in your terminal once you've added the rspec gem to the Gemfile.

* **What is Puma?**

  * A very powerful server that automatically ships with rails 5.

* **Why would you clear your caches in git?**

  * You may want to do this is you have items in your git ignore file that you actually want git to ignore. Here is what you need to type in your terminal to clear your caches:

    ```Ruby
    git rm . -r --cached
    ```

###Database Types:

* https://www.pluralsight.com/blog/software-development/relational-non-relational-databases

##### <u>Relational Databases:</u>

* = represent and store data in tables and rows.
* = Relational databases use Structured Querying Language (SQL), making them a good choice for applications that involve the management of several transactions. The structure of a relational database allows you to link information from different tables through the use of foreign keys (or indexes), which are used to uniquely identify any atomic piece of data within that table. Other tables may refer to that foreign key, so as to create a link between their data pieces and the piece pointed to by the foreign key. This comes in handy for applications that are heavy into data analysis.
* EX: Postgres, MySQL, PostgreSQL and SQLite3



##### <u>Non-Relational Databases</u>:

* = represent data in collections of key:value pairs, like JSON documents. The Mongo import utility can import JSON, CSV and TSV file formats. Mongo query targets of data are technically represented as BSON (binary JASON).
* EX: MongoDB




<u>**Creating a database from scratch: using postgresql**</u>

1. ````createdb people ``` note: "people" is the name of the database created for this example.

2. psql people

3. when you see people=# , then type ```CREATE TABLE people```

4. Then fill in the following code:

   ```sql
   people=# create table people (
   people(# name text,
   people(# age integer,
   people(# gender text,
   people(# email text
   people(# )
   people-# ;
   ```

5. Following the previous commad, type: people=#```INSERT INTO```

6. After you see the CREATE TABLE prompt, you will input the following:

   ```sql
   people=# INSERT INTO people (name, age, gender, email) VALUES ('Namibia', 100, 'Female', 'namibia.torres@cultureamp.com');
   ```

7. Then type ```SELECT * FROM people;``` to 'read' all of the data you just inputed

8. To view only selected data you can do something like this:

   ```Sql
   SELECT * FROM people WHERE gender = 'Female'  ORDER BY name LIMIT 3;
   ```

9. **Updating:**

   * Be careful with update because you NEED to include the condition, or else every row of the database will be updated and you won't get a prompt asking you if that is indeed what you want to do. Here is an example of what including a condition looks like:

     ``` UPDATE people set email = 'me2@ryanbigg.com' WHERE email =  'Ryan.com'; ```

10. To view all of the sql commands use: ```\h```

11. **Join Queries**:

    * = A query that accesses multuple rows of the same or different tables.

    * Here is how you might query two tables with similar row names:

      ```Sql
      SELECT table1.cities, table2.cities, table1.ids, table2.ids FROM table1, table2.
      ```

    * https://www.postgresql.org/docs/8.2/static/tutorial-join.html

    * Types of Joins:

      * **Cross Join**: combine two tables by adding rows from one with the rows of another table. Make this by putting both table names after ```FROM``` in ```SELECT * FROM …```
      * **Inner Join**: to combine data across tables but only based on data from certain columns.

12. **CASE statement**s are also possible in SQL, similar to how you would write them in Ruby.

13. **IN opperator** will check to see if a particular value is IN a list of values:

    ```SELECT * FROM exercise_logs WHERE type IN ("biking", "hiking", "tree climbing", "rowing");```

14. **Object Relation Mapping (ORM):**

    * the process of converting info from your SQL tables into ruby instances.

15. **Active Record:**



| Active Record           | SQL Query                                | Ruby Code                                | Returns     |
| ----------------------- | ---------------------------------------- | ---------------------------------------- | ----------- |
| .create                 | ```INSERT INTO posts (title) VALUES ('Hello World')``` | ```Post.create(title: "Hello World")```  |             |
| .all                    |                                          |                                          | all records |
| .find                   |                                          | ```Post.find(id)```                      | 1 record    |
| .find_by                |                                          | ```Post.find_by(title: "Hello World")``` and ```find_by_title("Hello World")``` | 1 record    |
| .where/.limit/.order    | ```SELECT * FROM surveys WHERE account_id  = something``` | ```Post.where(account: account).limit(20).order(created_at: desc)``` |             |
| .join/.inlcudes         | ```SELECT * FROM posts INNER JOIN comments INNER JOIN users WHERE posts.id = 1``` | ```Post.joins(comments:user).find(2)```  |             |
| .update                 |                                          |                                          |             |
|                         |                                          |                                          |             |
|                         |                                          |                                          |             |
| .destroy                |                                          |                                          |             |
| has_many                |                                          |                                          |             |
| belongs_to              |                                          |                                          |             |
| has_and_belongs_to_many |                                          |                                          |             |
| has_many :through       |                                          |                                          |             |



​

<u>**How to structure a Database:**</u>

* Normal form rules:
  1. There are no repeating groups in a table
  2. Each row must have a primary key (i.e. an ID) that uniquely identifies that row
  3. Repeated related data should be in separate tables;




#### Babel

* A transpiler (aka. compiler) that transforms ECMAscript6 (ES6) into ES5 compatible code.



#### Connection Pool:

*  a pool of objects to share amongst the fibers or threads in your Ruby application
* ```connection_pool``` is a generic connection pool that youn can use with MongoDB and other databases.



#### Mongo Database:

* It's a:

  * Document database
  * BSON (Binary JSON)
  * Schema-less
  * No Joins
  * Each document defines it's own structure

* Fields and Values

  * ``` name : "SOmething
    name : "bear"
    price : 10
    field : value
    ```

* Structured similar to ActiveRecord with ```has_many``` and ```belongs_to```

* Responses Collection:

  ```
  [{ Survey_id: <id>
  	answers: [
          { values: 5, question_id: <id>  }
  	]
  	}]
  ```

* Subdomains: are like writing a where method.


##### <u>Mongo gem vs Mongoid gem:</u>

* the `mongoid` gem is an object document mapper; which translates the data in a document database to be object mappable. And the `mongo` gem is a Ruby driver. So `mongoid` is needed for *any* OO programming that needs to work with a mongodb but the `mongo` gem is only for Ruby and interacts with mongodb, via mongoid.
  * ```Rails -> Mongoid gem -> Mongo gem -> MongoDB```
*  Rails uses the Mongoid gem to run queries against the database. The Mongo gem converts those Ruby queries to Mongo queries, and then handles the processing of the data back from whatever MongoDB returns into pure Ruby.


### Migrations:

<u>**Generating a Migrations**</u>

1. ```rails g migrate```
2. ```rails g model```


### Routing in Rails:

##### <u>REST: Representational State Transfer</u>

* Used especially for URL routing.
* there are several HTTP methods that are used to represent the types of actions performed by the user and/or application:

| HTTP Method | What it's used for                   | Examples:                                |
| ----------- | ------------------------------------ | ---------------------------------------- |
| GET         | Retrieving a resource                | Any time you navigate directly to a page or use google to navigating the page, you use the GET http method. |
| POST        | Creating a resource                  | Older web applications used POST for everything.** |
| PUT         | Completely update a resource.        | Updating your user profile on some website would typically use patch with web frameworks that support it. |
| PATCH       | Used to partially update a resource. | An example of this would be where you are just updating the password for your user profile. |

###### _You'll notice that the table above mentions that most browsers only understand POST and GET. This isn't a problem for Rails. Rails actually has the HTTP method buried inside a hidden form element. When the page interacts with the server, the request is intercepted and reconstructed._

* **Resource Routes:**

  * Resources are a collection of of objects that all belong in a common location (i.e. users).
  * Usually you put the ```resources``` method under the ```root``` method.
  * The ```resources``` method defines the the routes to the 7 _RESTful_ actions in your controller" (```index```, ```show```, ```new```, ```create```, ```edit```, ```update```, ```destroy```);
  * The 7 methods match up with the following 4 request paths: ```/projects```, ```/projects/new```, ```/projects/:id```,```/projects/:id/edit```

* RESTful routing match-up (Rails 4 in Action, p.58):

  | HTTP method | Route              | Action  |
  | ----------- | :----------------- | :------ |
  | GET         | /projects          | Index   |
  | POST        | /projects          | Create  |
  | GET         | /projects/new      | New     |
  | GET         | /projects/:id      | Show    |
  | PATCH/PUT   | /projects/:id      | Update  |
  | DELETE      | /projects/:id      | Destroy |
  | GET         | /projects/:id/edit | Edit    |

* Command to view your routes in the terminal: ```bundle exec rake routes```

## Model View Controller

### Controller:

* You can only use ```params``` in the controller
* If you create a variable that uses ```params``` make sure to pass these variables into the services file you've delegated to do all the work of the action in the controller. For example in your create action in the controller you have created 2 variables that use params:

``` Ruby
  def create
    long_url = params[:link][:long_url]
    user_chosen_short_url = params[:link][:short_url]
    render plain: CreateLink.short_from_existing(long_url, user_chosen_short_url)
  end
```

​	Notice how I use ```render plain:``` here. This is because I am returning plain text in my create_link.rb services file. I also have to pass in these two variables when I render the ```CreateLink.short_from_existing``` method. In your create_link.rb services file you also need to pass in the variables long_url and _user_chosen_short_url:

```Ruby
  def short_link_from_existing_link(long_url, user_chosen_short_url)
    existing_link = Link.where(long_url: long_url).first
    if existing_link
      "Your short link is #{existing_link.short_url}"
    else
      CreateLink.new.create_new_link(long_url, user_chosen_short_url)
    end
  end
```



#### <u>Index Action</u>:

* In your controller you will have an index action, written as follows:

  ```Ruby
    def index
      [some code]
    end
  ```

  And what the index action does is connect you to the route (url route of the page you want) and the view, what the user will see that is written within your method as ```[some code]```

#### <u>Show Action</u>:

* Show can ve called by ```before action```, similar to where you would have an ```attr_reader```, which will call an action only for show if it is specified after the ```before_action```:

  ```before_action :set_blog, only: [:show, :edit, :update, :destroy]```

  * The ```before_action``` in this case will run the ```:set_blog``` method before it runs the ```show``` method.

  ​

#### <u>Communicating with the Database (Model):</u>

* How does the controller communicate with the database?

  * Via model calls within various methods in the controller. Here is an example:

  ```ruby
  def index
   @blogs = Blog.all
  end

  def new
   @blog = Blog.new
  end

  ```

  * The ```Blog``` class is a model call that connects to the model.

#### <u>Instantiation</u>:

* Creating a new instance of something
* Why do we do this?
  * For example, so that we that instance can be rendered in the View or Model files


## TDD

### Capybara:

*Capybara is a Web-based automation framework, browser simulator, that is used to create functional tests (integration tests) that uses a simple DSL (domain specific language).* This kind of tests checks that when your link is clicked, it does to the right page, or that when you click submit on a form, you get the right error message.

* Capybara uses the following web drivers:

  * **rack::test**: (default and lacks JS support & HTPP support)
  * **selenium-webdriver** (fast and access JS and HTTP support)
  * **capybara-webkit** (faster than selenium because it doesn't load entire browser; headless testing)

* List of commands:

  ```ruby
  visit('page_url') # navigate to page
  click_link('id_of_link') # click link by id
  click_link('link_text') # click link by link text
  click_button('button_name') # fill text field
  fill_in('First Name', :with => 'John') # choose radio button
  choose('radio_button') # choose radio button
  check('checkbox') # check in checkbox
  uncheck('checkbox') # uncheck in checkbox
  select('option', :from=>'select_box') # select from dropdown
  attach_file('image', 'path_to_image') # upload file
  ```

  ​

* When using Capybara DSL it looks for the following attributes:

  * ```Ruby
    Text field (fill_in): id, name, related label element
    Click link/button (click_link/click_button): id, title, text within tag, value
    Checkbox/radio button/dropdown (check/uncheck/choose/select): id, name, related label element
    Upload file (attach_file): id, name

    ```

  * ​

#### Namibia Torres
