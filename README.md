# Flatten Array

A simple module that deeply flattens a given [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Installation

In your npm supported project, run:

```shell
$ npm install flatten-array --save
```

Include the module in your desired file:

```
var flattenArray = require("flatten-array");
```

## Basic Usage

Flattens an array deeply:

```javascript
flattenArray([1, [2, 3, [4, 5]]]); // => [1, 2, 3, 4, 5]
```

## Manual release steps

* Increment the "version" attribute of `package.json`
* Commit with the message "Release version x.x.x"
* Create version tag in git
* Create a github release
* Release on npm