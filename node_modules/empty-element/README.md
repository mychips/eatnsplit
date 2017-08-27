# empty-element

Empty a DOM element.

## Usage

```js
var empty = require('empty-element')
var list = document.querySelector('ul')

empty(list)
```

The `empty` function returns the element, so you can quickly set element
contents by doing something like:

```js
empty(list).appendChild(makeLiElement('content'))
```

## License

[MIT](./LICENSE)
