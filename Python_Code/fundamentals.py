# Test your fundamentals with the folling problem:
# 1. Expects a single integer parameter
# 2. If the integer is positive, print a “Hello world!” message that number of times
# 3. Otherwise, print an message such as: “Error: number must be
#    positive!” 

def helloWorld(int):
    hello_world = 'Hello world!\n'
    error = 'Error: number must be positive!'
    natural =  'Sorry, zero is a natural number, try again!'
    if int > 0:
        print(hello_world * int)
    elif int == 0:
        print(natural)
    else:
        print(error)