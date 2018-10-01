# React: JEP Session 16

### What is React?

* it's a library, NOT a framework (like Angular is)

### Props and Components:

This is how you might display a component and prop in React:

```<NameOfComponent propName={propValue} />```

It's syntatic sugar for writing a React component and passing it a prop, like this:

```React.createElemnt(App, {propName: propValue})```


When I pass ion my code it'll look like this, with the second line being the syntatic sugar version:

```react
<App data={foxesData} isAwesome={true} />

// Same as writing the previous line like this:
React.createElement(App, {data: foxesData, isAwesome: true})
```

#### Namibia Torres
