# Fancy Time

A simple package for converting Unix to Readable.

[![](https://img.shields.io/discord/993979667264577669?label=Discord)](https://discord.gg/GXWcGN8ch3)
[![CodeFactor](https://www.codefactor.io/repository/github/znotchill/fancy-time/badge)](https://www.codefactor.io/repository/github/znotchill/fancy-time)
[![GitHub license](https://img.shields.io/github/license/znotchill/fancy-time.svg?label=License&color=31677d)](https://github.com/znotchill/mdjson/releases/latest)
[![GitHub watchers](https://img.shields.io/github/watchers/znotchill/fancy-time?label=WATCHING)](https://github.com/znotchill/mdjson/releases/latest)
[![GitHub stars](https://img.shields.io/github/stars/znotchill/fancy-time?label=STARS)](https://github.com/znotchill/mdjson/releases/latest)
[![](https://img.shields.io/static/v1?label=GitHub&message=fancy-time)](https://github.com/zNotChill/fancy-time)
[![Downloads](https://badgen.net/npm/dt/fancy-time)](https://www.npmjs.com/package/fancy-time)

# Usage

```js
const { __time, __duration, __timeStr } = require("fancy-time");

const time = 1668714660167;

// __time converts to human readable from epoch
console.log(__time(time));

// __duration gets the human readable time between 2 epoch values
console.log(__duration(date));

// __timeStr concatenates a normal string with a current readable time
console.log(__timeStr("Lorem Ipsum Dolor Sit Amet"))
```