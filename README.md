# Dev Stack Builder

## Project Name

Dev Stack Builder

## Description

Dev Stack Builder is a React based websiste where users can explore different web development technologies and create their own development stack.Users can add technologies to their stack and remove them when needed.

## Built With

- React
- Typescript
- Tailwind CSS
- React Icons
- React Toastify
- JSON
- Vite

## Key Features

1. Expore Technologies
   Users can see different technologies with their name, category, description, rating and difficulty.

2. Add to Stack
   Users can add technologies to their stack. The same technology cannot be added twice.

3. Manage Stack
   Users can see their selected technologies and remove one technology or remove all technologies.

## React Questions & Answers

i. What is JSX, and why is it used in React?

- JSX is a simple way to write HTML-like code inside JavaScript. It is used in React to create the UI or design of a website.

ii. What is the difference between props and state?

- Props are used to pass data from one component to another. State is used to keep data in a component. State can be changed, but props cannot be change by the child component.

iii. What does the useState hook do, and where did you use it in this project?

- useState is used to store and change data. In this project, I used useState to store the selected technology list. The list changes when I add or remove a technology.

iv. What does the useEffect hook do, and why did you need it to load the JSON data?
-useEffect is used to run some code atfer the component laods. I used it to load the technology data from the JSON file.

v. Why does every item in a .map() list need a unique key prop?

- Each item in a .map() list needs a unique key so React can idenity each item. It helps React understand which item is added, removed or changed.

vi. What is conditional rendering? Show one place you used it (example: the empty stack message).

- Conditional rendering means showing something based on condition.
  In this project, I used it to show "You stack is empty". when there are no technologies in the stack.

vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

- Data is passed from parent to child using props. To send something from child to parent, the parent sends a function as a prop and the child calls that function.

## Live Website

[View Live Website]https://mors-dev-stack-builder.netlify.app/
