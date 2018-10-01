# Practical Object-Oriented Design in Ruby (by Sando Metz)

## Relevant Notes for a Junior Engineer

### Object-Oriented Languages (p.12)

#### Objects

* Have behavior and may contain data,
  * and this is data that the assigned object alone can access
* Objects can invoke each others behavior by sending *messages*.
* Examples of objects:
  * Strings
  * ```self.```
* Ruby Classes:
  * Ruby is a class-based OO language
  * provide the blueprint for contructing objects
  * Classes define methods (*definition of behavior*) and attributes (*definition of variables*), and methods get invoked in response to messages.



### Single Responsibility Principle

* Classes that are easy to reuse allow for applications that are easy to change, and have few entanglements.
* You want to create classes that have only one responsibility, or behavior (it does one thing), because it'll be easier to reuse that class.
* ​



### Don't Repeat Yourself (DRY)

* Every tiny bit of behavior should live in one place.
* Behavior is captured in methods, in the form of objects, and invoked by sending messages.
* Objects contain behavior and data.


### Instance Variables

* Data is contained in an instance variable.

* Instance variables should be wrapped in an accessor method, aka. a "wrapper method" such as  ```attr_reader```, and then called in ```def initialize```

* ```attr_reader :chainring, :cog``` does this behind the scenes:

  * ```def cog
    def cog
      @cog
    end

    def chainring
      @chainring
    end
    ```

  * then the two instance variables need to be initialized with ```def initialize```

  * ​

#### Namibia Torres
