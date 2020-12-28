## Binary
### What's in a number?
* Binary numbers are in powers of 2 (x^2):
    * What we humans understand as the 1's place is still the 1's place; but what we understand is in the 10's place is now the 2nd's place and what we understand as the 100s place is the 4th's place in binary speak. 
    * For example in binary speak you would represent the number _3_ as __11__, why? Because 1 is the 1's place and 1 x 1 = 1; and the other 1 is in the 2nds place and 1 x 2 = 2. We then add the results: 2 + 1 = 3. 
    * In another example, what we see as 100 in binary is the number 4: [(1 x 4) + (0 x 2) + (0 x 1)] = 4
    * _If you are a visual person, check out an explanation at minute 5, (here) [https://youtu.be/jjqgP9dpD1k]_

### Bit aka. Binary digits:
* Bits just represent 0's and 1's
* When you need more than bits to represent information (a number in this example) then you will start using Bytes, which is a collection of 8 bits.

### Non-numbers
Things other than numbers can be represented in bytes. Letters and punctuation for example are represented in bytes through a system called ASCII (the American Standard Code for Information Interchange):
* A = 65, B = 66, C= 67, D= 68, E = 69, F =70 ...
* If you are receiving a message from a computer you are actually getting a pattern of 0s and 1s
* ASCII was designed to use only 8 bits
* Unicode, which is what is used to represent things like emojis, uses 8, 16, 32 bits happy

### Colors
Colors are traditioanlly represented by a system called RGB (Red, Green, Blue)
* For every pixel, there is a value that is stored using values for red, green, and blue. Each color for RGB will take up 8 biuts each and will range in integer value from 0 to 255.

## Algorithms
Very simply an algorithm is a set of instructions for doing something or getting a certian result.

## Programming basics with C:
### Getting Set up:
* Whenever you want to use a function, you need to tell the computer where that function is going to be saved: `stdio.h`, which tells the computer to look in a file called "Standard IO.h"
* `int main(void)` tells C that you are trying to start a function
* Sample code:
```
#include <stdio.h>
#include <cs50.h>

int main(void)
{
    printf("hello, world);
}
```
### Under the hood:
source code --> compiler --> machine code
* a `compiler` converts source code (what we write) into machine code (what the computer understands. e.g. 0s and 1s)

### Running your code:
* In your terminal use `clang` (aka. C- Language), which is a program that is a c language compiler, followed by your file name, to run your code:
`clang hello.c`
* C and many other similar languates, will only do what you program. It is not a smart language, and can not interpret what you want to get done. 
* Before running any update to your code you have to recompile it by running `clang <file_name>`
* when your source code gets saved you'll see a file called `a.out`, which stands for "assembly output", and stores machine code
* There are 2 steps for running your code in C:
1. compile bu running : `clang <filename>` 
2. followed by the machine code you want to execute by typing: `./a.out`
* There are 2 steps to running code: Before you run anything, if you want your machine code to be saved a file of your choosing instead of `a.out` then type in your terminal: `clang -o <machinecode filename> <sourcecode filename>`

### Variables in C:
With C you have to specify the type of value that a variable stores when creating a new variable. 
* Example:
`string answer = get_string("What is your age?\n");`
* the `=` is an assignment operator, that doesn't mean equal, but rather means "assign" a variable to a value.

### String interpolation:
 Inserting a value into a string is simple in C. You would do it by using a placeholder, for instance a string placeholder would be `%s` and used in a function you want to execute would be written this way:
 `printf("hello, %s\n", answer);`

 In the above example, answer is the variable that contains the value of the string you want to insert into the string `"hello, %s\n"`

 ### A simpler way to compile:
 `make <filename>` ---this might only work with the course CS50 library that gets imported in to your source code file

### Operators:
 `=`  : assign
 `==` : equals

 ### Loops:
 #### While loop
  `while` loop : a loop that goes on forever and answers a boolean expression.
```   
    while (true)
    {
        printf("hello,world\n");
    }
```

```   
    while (i<50)
    {
        printf("hello,world\n");
        i= i + 1; 
    }
```

### For loop
`for` loop: similar to a while loop but takes 3 arguments:
1. the variable you are creating: `int i = 0`
2. the condition: `i < 50`
3. the update: `i = i + 1`

```
    for (int i = 0, i < 50; i = i + 1)
    {
        printf("hello,world\n");
    }
```

In the above for loop, we can remove the line `i = i + 1` after the `printf` function because it is already accounted for as the 3rd argument.

### Types, formats, operators:
There are other types we can use for our variables
* `bool`, a Boolean expression of either true or false
* `char`, a single character like a or 2
* `double`, a floating-point value with even more digits
* `float`, a floating-point value, or real number with a decimal value
* `int`, integers up to a certain size, or number of bits
* `long`, integers with more bits, so they can count higher
* `string`, a string of characters

In the CS50 course library there are corresponding functions to get input of various types:
`get_char`
`get_double`
`get_float`
`get_int`
`get_long`
`get_string`

For printf, too, there are different placeholders for each type:
`%c` for chars
`%f` for floats, doubles
`%i` for ints
`%li` for longs
`%s` for strings

Mathematical operators:
`+` for addition
`-` for subtraction
`*` for multiplication
`/` for division
`%` for remainder, aka modulo

Logical:
`||` for "or"
`&&` for "and"