
Create Directory

```bash
mkdir color-organizer
cd .\color-organizer
```

Create a node js project using npm

```bash
npm init -y
```

Install react, react-dom and serve

```bash
npm install react react-dom serve
```

Create the following folder structure
```symbols
├── src
│   ├── components
│   │   ├── **/*.css
│   ├── data
│   ├── index.js
├── dist
│   ├── index.html
├── node_modules
├── package.json
├── package-lock.json 
├── webpack.config.js
└── .gitignore
```

Install webpack
```bash
npm install --save-dev webpack webpack-cli
```

Add a new file at the root *webpack.config.js*
Add the following details in the file
```js
var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist", "assets"),
    filename: "bundle.js",
  },
};
```

Install babel
```bash
npm install babel-loader @babel/core --save-dev
npm install @babel/preset-env @babel/preset-react --save-dev
```
Add the following rules inside the webpack.config.js
```js
 module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
```

Install css loader and style loader
```bash
npm install style-loader css-loader --save-dev
```
Add rules as follows
```js
 module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
```

update the *package.json* file scripts
```json
  "scripts": {
    "build": "webpack --mode development",
    "prestart": "npm run build",
    "start": "serve ./dist"
  },
```

Install all required npm package in single go
```bash
npm install react react-dom serve
npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react style-loader css-loader --save-dev
```

Final *package.json* file
```json
{
  "name": "color-organizer",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --mode development",
    "prestart": "npm run build",
    "start": "serve ./dist"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "serve": "^14.2.1"
  },
  "devDependencies": {
    "@babel/core": "^7.23.2",
    "@babel/preset-env": "^7.23.2",
    "@babel/preset-react": "^7.22.15",
    "babel-loader": "^9.1.3",
    "css-loader": "^6.8.1",
    "style-loader": "^3.3.3",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4"
  }
}

```

Final *webconfig.js* file
```js
var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist", "assets"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

Final *index.html* file
```html
<!DOCTYPE html>
<html>
  <head>
    <meta
      name="viewport"
      content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"
    />
    <meta charset="utf-8" />
    <title>React Recipes App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="assets/bundle.js"></script>
  </body>
</html>
```





