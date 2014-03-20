*This repository is a mirror of the [component](http://component.io) module [jkroso/prefix](http://github.com/jkroso/prefix). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jkroso-prefix`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# prefix

  add a vendor prefix to a css attribute

## Installation

_With [packin](//github.com/jkroso/packin) or [component](//github.com/component/component)_

    $ packin add jkroso/prefix

then in your app:

```js
var prefix = require('prefix')
```

## API

### prefix(key)

  Prefix `key`. This function memoizes its results so you don't need to worry about any performance issues, just treat it like a map.

```js
prefix('transform') // => webkitTransform
prefix('color') // => color
```

### dash(key)

  create a dasherize version of a vendor prefix

```js
prefix.dash('transform') // => -webkit-transform
prefix.dash('color') // => color
```

## Running the tests

Just run `make` and navigate your browser to the test directory.
