# Morse Encode-Decode

This is an npm module created for encoding and decoding morse code. Install it [here](https://www.npmjs.com/package/morse-encode-decode) or use the following npm command:

```
npm i morse-encode-decode
```

## How to use Morse Encode-Decode
The package contains an object with two properties: `morse` and `version`. `version` is the version of the package.
The `morse()` method has two parameters: `type` and `message`. `type` is whether you want to encode or decode text, and `message` is the text to encode and decode.

`morse` will return one of two objects:

```js
  {
    request: 'The request given to morse',
    success: true,
    value: 'The value morse returns'
  }
```

```js
  {
    request: 'The request given to morse',
    success: false,
    error: 'Why morse failed'
  }
```
