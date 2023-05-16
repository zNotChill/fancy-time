# Fancy Time

A simple package for converting Unix to Readable.

[![](https://img.shields.io/discord/993979667264577669?label=Discord)](https://discord.gg/GXWcGN8ch3)
[![CodeFactor](https://www.codefactor.io/repository/github/znotchill/fancy-time/badge)](https://www.codefactor.io/repository/github/znotchill/fancy-time)
[![GitHub license](https://img.shields.io/github/license/znotchill/fancy-time.svg?label=License&color=31677d)](https://github.com/znotchill/mdjson/releases/latest)
[![GitHub watchers](https://img.shields.io/github/watchers/znotchill/fancy-time?label=Watching)](https://github.com/znotchill/fancy-time/releases/latest)
[![GitHub stars](https://img.shields.io/github/stars/znotchill/fancy-time?label=Stars)](https://github.com/znotchill/fancy-time/releases/latest)
[![](https://img.shields.io/static/v1?label=GitHub&message=fancy-time)](https://github.com/zNotChill/fancy-time)
[![Downloads](https://badgen.net/npm/dt/fancy-time)](https://www.npmjs.com/package/fancy-time)

# Usage

### CDN Usage

```html
<script src="https://cdn.jsdelivr.net/npm/fancy-time@1.0.4/dist/bundle.js"></script>
```

### Node.js Usage

```js
const { time, duration, timeStr } = require("fancy-time");
```

### General Usage

```js
const time = 1668714660167;

// time converts to human readable from unix
console.log(time(time)); // 19:51:00

// duration gets the human readable time between 2 unix values
console.log(duration(date)); // 6:45:26

// timeStr concatenates a normal string with a current readable time
console.log(timeStr("Lorem Ipsum Dolor Sit Amet")); // example: [19:51:00] Lorem Ipsum Dolor Sit Amet
```