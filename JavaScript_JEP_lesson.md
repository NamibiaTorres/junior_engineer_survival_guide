## JavaScript: JEP Session 16

### Things to know:

* ***Yarn***: the package manager for JS (it's what npm used to be)

### The DOM

* DOM = Document Object Model
* What is it exactly?
  * A structure (a tree of elements), aka. an **object**, of all of the HTML elements, and the properties available on each element.
  * Provides methods, such as adding children, and updating values within the DOM
  * Another type of model that contains methods that allow you to interact with the data.



### What can you do with JavaScript?

* JS on the back end
* Styling and designing things on the front end



### Type Primitive

* Language level set of characteristics that uniquely identifies the behavior of a particular value and distinguishes it from another value.

  * EX: 42 vs "42" —> two types here, interger type and string type

* typeof

  * to find what type something is
  * FYI: typeof null —> object
    * this is a bug in JS that has been around for too long and if fixed might break other features.

* Arrays

  * these are objects
  * arrays have index
  * You can access a value by using: variable_name[index_value]:
    * ```vacation[0] = Bermuda```

* Objects

  * A lot like hahses in Ruby

  * instantiated w/curly braces

    ```
    myVar = {
        fruit: "Apple",
        vegetable: "Spinach",
        drink: "Smoothie"
    }
    ```

  * To access a variable within myVar use the []:

    ```javascript
    myVar["fruit"]
    ```

* Functions

  * You have to explicitly return functions by adding the keyword ```return```

  * 2 ways to define a function:

    * w/ a function keyword

      ```javascript
      function addNumbers(a, b) {
          return a + b
      }
      addNumbers(1,2) // 3
      ```

    * w/ variable assignment (fat arrows):

      ```javascript
      var addNumbers = (a, b) => {
           return a + b
      }
      addNumbers(1, 2) // 3
      ```

* Constants (```const```)

  * unlike ``var`` constants can not updated or reassigned.
  * mostly global

* ```var```

  * global or scoped to the function
  * ```var``` is available outside ofa function and within a function

* ```let```

  * only can be used within the block level

  * operated similarly to ```var``` because it can be updated or changed

  * BUT it is different from ```var``` in that:

    ``` javascript
    function varTest() {
        var x = 1;
        if (true) {
            var = 2;  // same variable!
            console.log(x)  // 2
        }
        console.log(x);  // 2
    }
    ```

    ```javascript
    function letTest() {
        let x = 1;
        if (true) {
            let x = 2 // different variable!
            console.log(x);  // 2
        }
        console.log(x);  // 1
    }
    ```

  * If you don't use any keyword, JavaScript will default to the ```var``` keyword.

### String Interpolation

* In order to do string interpolation you need to use a back tick (`)

```javascript
`1 + 9 is ${1 + 9}`
```



### Truthiness and implict type coercion

* double equal equality check, aka. loose equality, ```==```
  * In this case ``` "200" == 200 ``` the number 200 is coerced into the string "200", and the value will return 'true'
* Tripple equal, aka. Strict equality check, ```===```
  * In this case ```"200" === 200``` the number 200 is NOT the same in any way to the string "200", so the value will return 'false'
* Explicit Type conversion:
  * When you want your string ```"200"``` to be explicity told it's a number, then you need to tell it it's a number by adding ```Number("200")



### Dynamic vs Static and Week vs Strict

* Flow = a static type checker for JavaScript



### Reduce()

* Good for comparing elements in a list (array, or something else)
* Good for doing math
* With ```reduce()``` you are not limited to returning an array



#### Modules:

* It's a container for public methods.

* Example: old syntax

  ```javascript
  module.exports = {
    airBuds,
    getMovieNames,
    getBestMovies,
    getBestMovie,
    getAverageRating
  };
  ```

* Example: newer syntax

  ```javascript
  export const {
    airBuds,
    getMovieNames,
    getBestMovies,
    getBestMovie,
    getAverageRating
  };
  ```

* You can export functions in modules as well.

## Testing

### Jest:

* Testing unit testing framework associated with Yarn



## Adding Flow to your app:

####Steps to adding flow:

1. ```yarn add flow-bin —dev```
2. ```yarn flow init```

#### Namibia Torres
