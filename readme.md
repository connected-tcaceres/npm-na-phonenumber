# Validate North American Number

For more information about the North American Numbering Plan please refer to [wikipedia](https://en.wikipedia.org/wiki/North_American_Numbering_Plan).

## About

Simple library to validate if a phone number is valid according to the North American Numbering Plan.

## Install

```js
npm install validate-na-number
```

## Example

```js
const validateNANumber = require("./validate-na-number");

validateNANumber("911")) //false -> violates N11 number
validateNANumber("+1-223-115-6789")) //false -> violates N11 number
validateNANumber("6473333333")) //true
validateNANumber(6473333333)) //true
validateNANumber("+1-223-345-6789")) //true
validateNANumber("+1-123-115-6789")) //false -> area code number violation
```
