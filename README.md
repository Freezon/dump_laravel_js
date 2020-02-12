# dump_laravel_js

[![Latest Version on NPM](https://img.shields.io/npm/v/dump_laravel_js.svg?style=flat-square)](https://npmjs.com/package/dump_laravel_js)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

Simple and small JavaScript function for console logging, inspired by the Laravel dd() and dump() functions.

## Install

You can install the package via npm or yarn:

```bash
$ npm install dump_laravel_js
$ yarn add dump_laravel_js
```

## Usage

```js
require('dump_laravel_js');
//or
import 'dump_laravel_js';
//or 
import {dd, dump}, * as _ from 'import';

dump(foo, bar); // This is just a plain console.log

dd(foo, bar); // This will throw an exception after the logging to try to stop further execution
```

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.