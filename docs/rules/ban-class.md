# Define classes to be banned from the project (`ban-class/ban-class`)

<!-- end auto-generated rule header -->

This rule ban a specific class for any given reason. If you don't want to use a old class, you can just ban it!

## Rule Options

```js
...
"ban-class/ban-class": [<enabled>, { "banned": [<string[]>] }]
...
```

## Usage example:

The name is case sensitive, so `DateTime` is **not** the same as `Datetime`.

```js
...
"ban-class/ban-class": ["on", { "banned": ["Date"] }]
...
```

This will generate errors on:

```js
var valueOne = Date.now(); // This class is banned.
var valueTwo = new Date(); // This class is banned.
var valueThree = DateTime(); // This is allowed, it's not the same class name.
```

## Considerations

This will ban the class by it's identifier. So if you create a custom class with the same name, it does not care, the identifier is banned.
