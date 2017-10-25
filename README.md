
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

