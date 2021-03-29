# Go Programming language guide

## Why Go?

- Does concurrency well,
- Has a garbage collector
- Standard library
- compiled network
- Can work super efficiently with multiple cores
- Efficient execution and approachable for humans

### What should you be aware of when learning Go?

- It is a static programming language, **unlike** dynamic languages, so you will need to know about types etc.
- Go is not an Object Oriented programming language, so there is no such thing as "classes" in Go.

## 3 Cases to know:

### The `&` Operator:

The `&` before a variable means that we are referecing the variable's **memory address**

### The `*` Operator:

_In front of a variable_ and that variable HOLDS the **memory address** of that object. Basically it grabs the stuff that the pointer `*` was referencing.

### The `*` In front of a type:

_In front of a type_ and the `*` means that the `*` becomes a part of that type declaration.

The `*` can go in front of a type or a variable as an **operator**.

#

## Looking under the hood of Go

### Go CLI commands

```Go
package main

import "fmt"

func main() {
    fmt.Println("Hey there!")
}
```

Above is a sample file, which we can run with the following line:
`go run main.go`

The command `go run` in the Go CLI can take a number of different files and **compile** them so that they _immediadely_ **execute**.

`go build` on the otherhand, only compiles the code on your file, and _does not_ execute it. That means that while you won't see "Hey there!" print out in your terminal, the code does compile and the executable file `main` will compile from your source code in `main.go` and the executable file `main` will show up when you search for it in your folder. To then execute the file, you can run `./main` in your terminal window, and "Hey there!" will then appear in your CLI.

`go fmt` will automatically format all of the code in all of your files in your current directory.

`go install` compiles and installs a package. It hadles dependencies in your files.

`go get` also handles dependencies in your files. It downloads raw source code created by another developer.

`go test` runs any tests associated with the current project.

### GO packages

_What does `package main` mean?_

Package = a collection of source code files. For a file to be considered part of a `package` then it must declare the package that it belongs to (e.g. `package main`)

#### 2 different types of packages:

1. Executable packages:
   - When compiled it creates a file that you can run.
2. Reusable packages:
   - These are cde dependencies, where you would put reusable logic or helpful functions that you can use anywhere.

The name of the pachage determines whether or not you are creating an executable type package. The word "main" in `package main` is specifically used to main an executable package. Any other name for your package makes it a **reusable package**.

### Import statements: understanding `import fmt`

Imports give you access to another package inside of the one that we are creating.

These packages can be standard libraries.

### Organizing `main.go`:

1. package declaration - `package main`
2. import statements - `import fmt`
3. Declataion dunctions that tell Go what to do -

```Go
func main() {
    fmt.Println("Hey there!")
}
```

### Data Types

#### Array:

Array = a fixed length list of things

#### Slice

Slice = An array that can grow or shrink (definition from The Complete Developer's Guide (Goland) by Stephen Grider)
