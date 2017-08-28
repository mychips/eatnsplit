
# title

  Manipulate the document title and reset.

## Installation

    $ component install component/title

## API

### title(str, ...)

  Set title to `str` with optional arguments,
  where `%o` represents the original title.

```js
title('%s% - %o', upload.percent);
```

### title.reset()

  Reset the title back to its original string.

## License

  MIT
