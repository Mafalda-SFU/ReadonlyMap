# ReadonlyMap

Readonly wrapper for Javascript `Map` class

## Installation

```bash
npm install readonly-map
```

## Usage

```js
const ReadonlyMap = require('readonly-map')

const map = new Map([['key1', 'value1'], ['key2', 'value2']])
const readonlyMap = ReadonlyMap(map)

console.log(readonlyMap.get('key1')) // 'value1'
readonlyMap.set('key3', 'value3') // throws TypeError
```

## API

### ReadonlyMap(target: Map): Map

Creates a new readonly `Map` object with the given `Map` object as the target.

### Map.prototype.get(key: any): any

Returns the value associated with the given key, or `undefined` if the key does
not exist in the map.

### Map.prototype.has(key: any): boolean

Returns `true` if the map contains the given key, otherwise `false`.

### Map.prototype.keys(): IterableIterator<any>

Returns an iterator over the keys in the map.

### Map.prototype.values(): IterableIterator<any>

Returns an iterator over the values in the map.

### Map.prototype.entries(): IterableIterator<[any, any]>

Returns an iterator over the key-value pairs in the map.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE)
file for details.
