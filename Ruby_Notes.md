### Model View Controller (MVC)

######From Rails 4 in Action

#### <u>Model:</u>

* Contain the *domain logic* if an application, which tell you how records in database are retrieved, validated, or manipulated



#### <u>Controllers:</u>

* the layer between the users and the database
* Call methods in the model classes
  * from the methods they return single objects or arrays of objects
* Make objects available to the *View* via *instance variables*
* Used for permission checking (making sure users who have permission get access, and those who don't, don't get access).



#### <u>Views:</u>

* Reference instance variables to display information it gets from the controller.
* ERB (Embedded Ruby) is a templating language included in Rails by degault that lets you embed ruby files into any other kind of file, so when users see your application in the *View*, they are seeing files that have ruby embedded in them.



### Directories: Assets, Helpers, Mailers

#### <u>Assets Directory:</u>

* It's for the standard applications (JS, CSS) that make the app look pretty.p

####<u>Helpers Directory:</u>

* Where you put hte Ruby code (helper methods and modules) for the *Views* .



#### <u>Mailers:</u>

* Where you put the classes of the application that deal with sending emails.



### Scaffolding & Migrations

#### <u>Scaffolding:</u>

* Scaffolds are generated to provide temporary structures to get you started on an application
* The ```scaffold``` command generates your model, views, and controller, and the tests


#### Namibia Torres
