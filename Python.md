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

* input() = Let's user type in an input. this function only returns a string. If you want to concatinate a number within a string, but you want the ability to change the number, you must pass the input function to an integer function, which is then passed to a string.
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

#### Standard Libraries to know:
* Sys Module
    * `sys.exit()` function immediately quits your program
* Random Module
    * allows you to select random numbers or a range of random numbers.

