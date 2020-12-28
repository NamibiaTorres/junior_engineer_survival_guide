# React Overview

### What is React?

* it's a library, NOT a framework (like Angular is)

### Props and Components:

This is how you might display a component and prop in React:

```<NameOfComponent propName={propValue} />```

It's syntatic sugar for writing a React component and passing it a prop, like this:

```React.createElemnt(App, {propName: propValue})```


When I pass in my code it'll look like this, with the second line being the syntatic sugar version:

```react
<App data={foxesData} isAwesome={true} />

// Same as writing the previous line like this:
React.createElement(App, {data: foxesData, isAwesome: true})
```
### React Components:
All react components have to return JSX or plain JavaScript

### JSX
When redering JSK you would pass in the props (e.g. type = 'default') into a tag like you would an attribute in JavaScript (e.g. aria-label = 'something')

#### Namibia Torres
