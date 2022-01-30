

Our frontend stack consists of React with TypeScript and various backends using REST and GraphQL APIs. 

You might have heard of http://todomvc.com/. It's a neat project which contains a reference implementation of a simple to-do app written in various JavaScript frameworks, libraries and dialects. The quality of the various implementations vary and your goal will be to improve one of the implementations and to add new features.


## Task 1:

Fork the project from GitHub. The implementation we are interested in is located in examples/typescript-react (https://github.com/tastejs/todomvc). 

Start it using:
cd examples/typescript-react && npm install && npm build && npm start

Try to answer the following questions:

    1. What would you do differently? 
       i. I will use React functional components and hooks instead of React class base components
      ii. I will not render app component directly to the DOM
     iii. I will seperate the header section from the app component (i.e further break down the app component)

    2. What's good? 
      i. The support for compile time type-checking using typescripts
     ii. The code is clean and well organize
 
    3. What's bad? 
      i  The use of old var for variable decleration/defination
     ii. It is really difficult writting test cases for the app
    iii. App.jsx component contain too much code. Can be further broken into two or more components

    4. Are you missing anything in the tooling department? No

Optionally, if you think it will help you, apply some of your suggestions to the code.


## Task 2:

We would like to be able to add labels to each to-do item.

    1. When entering a new item we want to add one or more labels by adding words like @work or @important to an item.
    2. These labels should not be part of the item title itself, but instead show up right-aligned as badges.
    3. When editing the item (double-click) we want to be able to add, edit or remove labels.
    4. Examples
       	 - "Buy groceries @shopping @household"
            	- To-do: "Buy groceries"
            	- Tags: "shopping", "household"


## Task 3:

Optional, but bonus points if you write React component tests for your newly added features.


## What we (do not) care about

What is important for us is that you document your work by writing proper Git commits (i.e. a clean history that shows us how you work). We care more about high quality work, than delivering lots of features with bad code. Styling does not have to be pixel-perfect.

Have fun with the challenge,

Team Mercateo