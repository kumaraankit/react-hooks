 1. What are hooks

 Hooks are new features added in react version 16.8 whiich allow us to use react features without
 having to write a class

 Ex- state of a component

Hooks doesnot work inside class


2. Why do we need to use Hooks

Reason 1
We need to understand this keyword more carefully because this keyword works differently in javascript

It is important to bind the event handlers in class component

classed dont minify very well  and make hot reloading very unreliable

Reason 2
There is no particular way to use stateful component logic, there is HOC and render prop but
structuring the code harder to understand and implement

It is important to share the logic between components in a better way

Reason 3
Related code is not organized in one place
Data fetching- in componentDidMount and componentDidUpdate
Event Listeners- in componentDidMount and componentWillUnmount

components cannot be broken into smaller components


Rules for writing hooks

1. We can only call hooks at the top level
2. Dont call hooks inside loops, conditions or nested functions
3. we can only call hooks from react functions
4. Call react hooksfrom function component and not with any regular javascript function