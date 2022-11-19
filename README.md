# Fancy Time

A simple package for converting Unix to Readable.

# Usage

```
const { __time, __duration, __timeStr } = require("fancy-time");

const time = 1668714660167;

// __time converts to human readable from epoch
console.log(__time(time));

// __duration gets the human readable time between 2 epoch values
console.log(__duration(date));

// __timeStr concatenates a normal string with a current readable time
console.log(__timeStr("Lorem Ipsum Dolor Sit Amet"))
```