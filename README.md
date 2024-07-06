# non-empty

Check if the value is not empty.

## Installation

```sh
npm install non-empty
```

## Usage

```js
import notEmpty from 'non-empty';

notEmpty(0); //  false
notEmpty(''); // false
notEmpty([]); // false
notEmpty({}); // false
notEmpty('0'); // true
notEmpty([1]); // true
```
