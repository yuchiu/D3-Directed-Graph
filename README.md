
### demo

#### view live on [link](d3-forcegraph.surge.sh)


![demo](https://github.com/yuchiu/D3-Directed-Graph/blob/master/demo.gif)

****************************************

### Usage 

#### Make sure npm is installed

[npm download link](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm)


#### 1. First install package cross-env globally

```
npm i -g cross-env

```
Ensure npm scripts work properly across Linux, Windows, and all environments.

#### 2. install everything else

```
npm install

```

#### 3a. run on localhost
develop environment, run webpack dev server

```
npm start

```
This will get the files running on http://localhost:8080
Webpack will watch for changes and update the browser when file changes.

#### 3b. build dist directory
production environment, run webpack

```
npm run build

```
The minified JS bundle files including the output html file will be store in dist directory.

***********************************
### Memo

#### 1. Architecture/Structure
I decided to implement d3 force graph with React since it is likely for D3 graph to be integrated with a front end framework. And found out that there are few different approaches:
- 1. React for structure, D3 for data calculation, React for rendering
- 2. React for structure, D3 for data calculation, D3 AND React for rendering, React for enter/exit, D3 for update
- 3. React for structure, D3 for data calculation, D3 for rendering

each approach has its tradeoff, and I chose approach #3 for a several reasons:
- 1. I can utilize all d3 functions
- 2. There are more documentations since it is a more common technique
- 3. Clear seperation between React and D3, more maintainable

#### 2. Raw Data Conversion
Before drawing the graph, I used a xlsx online converter to compile data into Javascript Object. This is the fastest without the necessity to go through lines of documentation for third party libraries.

#### 3. Drawing the Graph
I used [Joerg Baach’s Graph with labeled edges](http://bl.ocks.org/jhb/5955887) as boiler plate for integrating data, since there are several useful features such as force gravity, auto rotating arrows that point from source to target. ID is shown on top of each node, and label/name will be shown on mousedown/click event.
