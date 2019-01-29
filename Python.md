## Beginer's Guide to Python
_Notes from "Automate the Boring Stuff with Python" by Al Sweigart_
### Common Data Types
#### 1) Integers
#### 2) Floats (aka. Float-point numbers)
      * A number with a decimal point
#### 3) Strings/ `strs`
      * Must be identified with single quotes
      * `''` is call a blank string

### Naming Variables
#### Variable naming conventions:
1. A variable can only be one word
2. Variable can only use the following characters:
    * letters (abc...)
    * numbers (123...)
    * underscores
3. A variable CAN NOT begin w/ a number
4. Note: variable names a re case sensitive

### Terminology:
* __Execution__ = which line of code (aka. instruction) is being currently executed
* __Functions__ = Mini code in your program that contain code that enable your program to perform specific actions. In programming you "call" a function when you need to use that function for something.
* __Arguments__ = Values of something

### Important notes about Functions:
_There are various built in functions in Python, so it's important to understand what they can and can not do_

* input() = Let's user type in an input. this function __only returns a string__ (aka. evaluates to a string). If you want to concatinate a number within a string, but you want the ability to change the number, you must pass the input function to an integer function, which is then passed to a string.
  EX: ```myAge = input()
print('You will be ' + str(int(myAge) + 1) + ' in a year')```

* print() = displays values passed to it.

* float() = returns a float (a number that contains a decimal point)

* len() = returns the length of a string in an interger format

* int() = converts something into an integer.

* str() = conversts something into a string.

### Boolean Operators
* 3 operators: AND , OR, NOT

#### Truth Table:

|Operator| Meaning|
|---|---|
|==| Equal to
|!=| Not equal to
|<| Less than
|>| Greater than
|<=| Less than or equal to
|>=| Greater than or equal to

#### Truth Table: `and` operator

|Operator| Meaning|
|---|---|
|True and True| True
|True and False| False
|False and True| False
|False and False| False

#### Truth Table: `or` operator

|Operator| Meaning|
|---|---|
|True or True| True
|True or False| True
|False or True| True
|False and False| False

#### Truth Table: `not` operator

|Operator| Meaning|
|---|---|
|not True| False
|not False| True

### FLow Control Statements:
#### Elements of FLow Control
* __Conditions__ = These are like _expressions_ in flow control statements. Conditions evaluate to `True` or `False`. Conditions are always followed by a __clause__.

* __Clause__ = A block of code.

* __Statements__ = Usually include a keyword, a condition, a colon, and a block. EX: `if` statements

### Loops
#### While Loop:
* A `while` loop consists of:
  * a `while` statement
  * an expression evaluating to `False` or `True`
  * a colon
  * a `while` clause (that is indented on the next line following the `while` statement)

* Code in a `while` clause will continue to run unless the statement is `False`

##### Break Statement:
  * A way to end a `while loop`, but it doesn't check the execution of the statement, instead it just jumps to the end of the loop.

##### Continue Statement:
 * The execution jumps to the spart of the loop and doesn't execute code after it.

##### How are while and if statements different?
* At the end of an `if` block, the program ends
* At the end of a `while` block, the program goes back to the beginning and executes the code, until the false condition is met, then the program ends

#### FOR Loops:
* Unlike `while` loops, which iterate under a certain condition, `for` loops will iterate a specified number of times.
* You may also use `break` and `continue` statements in `for loops`.

#### Range function:
* When you pass in a number to the `range()` function, the `for` loop will go upto, but not to, the number passed into range. So if you want to go to 100, or 100 times, you have to pass in 101 in the `range()` function
* if you pass 2 artuments to the `range()` function, this specified when the range starts and when it should end, otherwise if passed in one number, the range starts at 0 and goes up to that number.
* If `range(0, 10, 2)` is passed 3 arguments, then the first two are the start and stop of the range, while the last number is the number of times you increment, or 'increase', the numbers by until you reach the end point (the second number passed into the range function). `0, 2, 4, 6, 8`

_Important:_ If you pass in a negative number as the third number passed into the `range()` function, then the range counts down from the first number to the seconf number: `range(5, -1, -1)` => `5, 4, 3, 2, 1, 0`

### Importing Modules in Python:
* Python comes with a set of modules called _standard libraries_, which contain functions that you can call to do very specific things.

#### What to know about importing modules:
* You can import more than one module at a time:
  ```import random, sys, math, os```
* In order to call a function, you have to call the module first, followed by `.`, and then the function,(_similar to calling a method in Ruby_):
    * For example, to call a random integer using th random module you would write: `random.randint(0,10)` and pass in the range of integers that you want the random number to come from.
* You can import Third Party modules using the `pip` command in the command line (`pip3` for OSX)
    * For more information on how to use pip to download 3rd part modules: [Follow this link](https://www.youtube.com/watch?v=xJLj6fWfw6k&feature=youtu.be)
* If you just type `from [module] import *` you will import everything from that module so you don't need to write what the module is before using one of its built in functions:
`random.randint(1,10)` would just be `randint(1,10)`

#### Standard Libraries to know:
* Sys Module
    * `sys.exit()` function immediately quits your program
* Random Module
    * allows you to select random numbers or a range of random numbers.
* Copy module
    * `copy()` can be used to copy a reference AND make a duplicate copy of a mutable value (e.g. list or dictionary).
    * provide the `copy()` and `deepcopy()` functions
    * `deepcopy()` is used for lists within lists, "If the list you need to copy contains lists, then use the copy.deepcopy() function instead of copy.copy(). The deepcopy() function will copy these inner lists as well." (from _Automate the Boring Stuff with Python_).

### Functions
##### What is a function?
    * Something that groups code that gets executed multiple times.

#### Key features of a function:
* Functions can have a parameter (like an object parameter in ruby), and they are passed arguments that become assigned to the parameters, in order to execute specific code.

##### What does the built-in function `print()` evaluate to?
* `print()` returns a value called `None`, which represents a lack of a value (the `None type` data type)
* It does print out the `None` value when you call print.
* When you pass `print(anArgument)` an argument, then it passes argument and prints that out,
* if you do not pass `print()` an argument, then the return value will be `None`.

#### Keyword arguments:
* these are usually optional arguments in functions.
* the `print()` function has the `sep` (separate the black spaces with something, `sep = 123` => `something123is123separated`) and the `end` keyword argument.


### Return Values & Return Statements:
#### Scopes: Global & Local
* __Scope__= a container of variables
* __Global Scope__= ('Global') Variables located outside of a function
* __Local Scope__= ('Local') Variables that exist inside of a function, and can only be used within that function. The local variable can have the same name as another variable as long as they are used in different scopes (or different functions).

### Handling Errors:
#### Try and Except statements:
* When you have something that causes an error, you can use a `try` statement (aka. block), to run your code and then an `except` statement (aka. block) to tell your program to pause from running your code in the `try` block and run the code in the `except` block instead if a specific error comes up.

    ``` def divide50by(denominator):
            try:
                return 50 / denominator
            except ZeroDivisionError:
                print('Dividing by 0 is undefined')
    ```

### Lists: Slice, Del
* `slice` gets several indexes from a list
* Great way to get a list of values
* Has two indexes inside of it, separated by a `:`
#### How does a `slice` work?
* List: myList = ['cat', 'dog', 'mouse', 'bird']
* Slice: myList[1:3] => myList passed in index 1 __upto, but not including__ index 3
* Evaluates to: ['dog', 'mouse']

* You can also assign values using a slice:
* List: myList = ['cat', 'dog', 'mouse', 'bird']
* Slice: myList[1:3] = ['fish', lizard', 'catnip'] => replaces the indexes 1 and 2 of my list with the newest 3 values
* Evaluates to: myList = ['cat', 'fish', lizard', 'catnip', 'bird']

#### Other ways to manipulate a `slice`?
* EXAMPLE LIST: myList = ['cat', 'dog', 'mouse', 'bird']
* You can forgo passing in a first index and a last index:
* Missing first index: myList[:3]
* Evaluates to: ['cat', 'dog', 'mouse'] => all the indexes starting at 0 upt to index 3.

* Missing last index: myList[1:]
* Evaluates to: ['dog', 'mouse', 'bird'] => indexes starting at the first until the end of the list (this time it will include the last index)

#### `del` Statement: Delete something from a list:
* if you want to delete 'dog' from `myList`, you would do it as follows: `del myList[1]` => myList = ['cat',  'mouse', 'bird']
* in this case we specified the index we want to delete, called `myList` again, and received a new version of the list without the index you just deleted

#### `in` and `not in` Operators:
* Example `in`: `'howdy' in ['hello', 'hi', 'howdy', 'heya']` => `True` because 'howdy' is in the list.
* Example `not in`: `80 not in ['hello', 'hi', 'howdy', 'heya']` => `True` because 80 is not in the list.

#### Using the `list()` built-in function:
* Example1: list a range of values from 0 upto 100:
    ``` list(range(1,100))```
    * Evaluates to:
    ```[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]```
* Example2: List a range of values from 0 upto 100, in increments of 2:
    ```list(range(0,100,2))```
    * Evaluates to:
    ```[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98]```

* Example3: List all the the letters of the word "cat" into separate strings:
    ```list('cat')```
    * Evaluates to:
    ```['c', 'a', 't']```

### Sequence Data Types: Tuples, Lists, Range
#### Tuples:
* They are a number of values that are separated by a comman: `t = 12345, 54321, 'hello!'`
* They can be nested
* They are immutible
* They can have multiple objects:
    * ` tup = [(1,2,3), ('hey', 'hello', 'hi')]`

### Set
* unordered collection with no repeated items.

### Multiple Assignments:
##### Swap operations:
* ```a = 'AAA'
     b = 'BBB'
     a, b, = b, a
     Returns:
     a = 'BBB'
     b = 'AAA'```

##### Augmented Assignment variables:
EX: `spam = 42`, increase spam by 1
* `spam = spam + 1` == `spam += 1`

Table 4-1 from [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/chapter4/)


|Augmented assignment statement|Equivalent assignment statement|
|---|---|
|spam += 1| spam = spam + 1|
|spam -= 1| spam = spam - 1|
|spam *= 1| spam = spam * 1|
|spam /= 1| spam = spam / 1|
|spam %= 1| spam = spam % 1|

### Modulus operator
* Used to find the remainder of a diveded number, or to find even or odd numbers:
    `num % 2 == 0` => even number
    `num % 2 == 1` => odd number

#### NOTES:
* Many of the things that you can do to strings, you can do to lists.


### Methods: List methods
* You call a method on something (like a variable)
* `index()` method:
    * spam = ['heya', 'hi', 'hello']
    * `spam.index('hi')` => 1
    * The above method asks to find the index of 'hi', which is 1
* `append()` method:
    * Adds a value to the end of a list.
* `insert()` method:
    * Adds a value at any index within a list.
    * Example: `spam.insert(1, 'hey')` => spam = ['heya', 'hey', 'hi', 'hello']
    * To break it down you pass an index, and the value you want to add to the list: `spam.insert(index, value)`
* `remove()` method:
    * removes something form a list
    * it's different from the `del` delete statement because it allows you to specify a value rather than an index.
    * If the value appears multiple times in a list, only the first instance of that value will be remove.
*  `sort()` method
    * Will rearrange a list in order.
    * You can pass in a keyword argument to `sort()`, such as `reverse` to sort in reverse order:
        * `spam.sort(reverse=True)`
    * `sort()` uses ASCII-betical order:
        * This means upper case comes before lower case.
        * To change the automatic ASCII-betical sorting, you can pass in a keyword argument: `spam.sort(key=str.lower)`
        If  you have a list of ['A','Z','a', 'z'], it will now be sorted to ['A', 'a', 'Z','z'], and ignore the uppercase before all lowercase ordering of `sort()`.

* "Variables do not store list values directly; they store references to lists. This is an important distinction when copying variables or passing lists as arguments in function calls. Because the value that is being copied is the list reference, be aware that any changes you make to the list might impact another variable in your program. You can use copy() or deepcopy() if you want to make changes to a list in one variable without modifying the original list." (from _Automate the Boring Stuff with Python_).

### Datatypes: Mutable VS IMMUTABLE:
#### Mutable Datatypes: Lists, Dictionaries
* these are datatypes that can have values added, removed, or changed
* "While using rewriting the values of a list will modify the list (and replace it with a new list), if you want to change the values of a list in place, it's best to use the `del` statment and the `append()` method to change the value of a list in place." (from _Automating the Boring Stuff with Python_)

##### Dictionaries:
* Aka. Hash map, it is a collection of many values
* Indexes are called `keys`, and they have values, forming `key-value pairs`.
* To access a key in a hash map, call the name of the hash map and provide the name of the index, you can do this instead of the index number: `hashMapName[keyName]`
* Dictionaries are not ordered, unlike lists,

##### Dictionary Methods: `keys()`, `vales()`, `items()`, `get()`
* These first 3 methods return values that are similar to `lists`
* The values they return, however, are immutable.
* `items()` method returns `tuples` of the `key` and `value`
* "Using the keys(), values(), and items() methods, a for loop can iterate over the keys, values, or key-value pairs in a dictionary, respectively." ((from _Automating the Boring Stuff with Python_))
* IF YOU WANT TO MAKE THE RETURNS MODIFIABLE, you can always pass them through a list to get list-like returns:
` >>> spam = {'color': 'red', 'age': 42}
    >>> spam.keys()
    dict_keys(['color', 'age']) # return value
    >>> list(spam.keys())
    ['color', 'age'] # return value `

* `get()` method:
    * "dictionaries have a get() method that takes two arguments: the key of the value to retrieve and a fallback value to return if that key does not exist." (from _Automating the Boring Stuff with Python_)

* `setdefault()` method allows you to set a value in a dictionary (in one line of code) for a certain key only if that key does not already have a value:
 ` dog = {'name': 'Rover', 'age': 2}
   dog.setdefault('color', 'black')`


#### Immutable Datatypes:
* These are datatypes that __cannot__ be changed
* EXAMPLE: Strings, Tuple (an immutable form of Lists)
    * you can not change values of indexes in a string, like you can with a mutble list
    * The ONLY way to mutate a string is to use `slicing` and `concatenation` to create a new string.

### Strings
#### Escape Characters
* Escape character `\` (a backslash + another character) allows you to use characters you wouldn't normally use in a string.
* Escape character table
|Character| Meaning|
|---|---|
|\"|Double quote|
|\'| Single quote|
|\n| New line|
|\t| Tab|
|\\| Backslash|

#### Raw strings:
* Put an 'r' before a quote and it will ignore all escape character, printing everying that is within the string:
`r"This is cool\n Don't you think?"` => `This is cool\n Don't you think?`

#### Multi-line strings:
* Forget the `\n`, you can just interpret a strong with multiple lines as follows"
`'''This is cool,
    Don't you think?'''`


### Decorators:
`def make_bold(func):
    def inner():
        return '<b>' + func() + '<b>'
    return inner`
* A decorator function takes a function as a parameter and returns a different function.
* What it returns will be somewhat related to the first one.
* Pattern:
1. a function is def and takes in another function
2. an inner() function is defined
3. then a `func` is returned
4. In the same line as the inner() function definition, return `inner` (without the `()`)

`hello_bold = make_bold(hello)`
 returns `'<b>Hello!<b>'`

#### Syntactic Sugar example:
`def hello():
    return 'Hello!'
hello = make_bold(hello)`

__equivalent to:__

`@make_bold
def hello():
    return 'Hello'`


