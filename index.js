// (c) 2022 zNotChill - See LICENSE.md

/**
 * Returns the time between 2 points, in 24 hour time.
 * @param {integer} time - converts the time between time and start params
 * @param {integer} start - start time, epoch time. if not set, it sets to 0, so it just gets the time of time param.
 * @returns 
 */
 const __convertTime = function(time, start = 0) {
	const current = time;
	const now = current - start;
	return new Date(now).toLocaleTimeString("it-US");
}

/**
 * Returns the converted time of now.
 * @param {integer} time - any epoch timestamp - defaults to now 
 * @returns 
 */
const __time = function(time = Date.now()) {
	return __convertTime(time)
}

/**
 * Returns the duration between two epoch timestamps.
 * @param {integer} start - the start epoch timestamp
 * @param {integer} now - any epoch timestamp, defaults to now
 * @returns 
 */
const __duration = function(start, now = Date.now()) {
	return __convertTime(now, start)
}

/**
 * Concatenates the formatted time with any string.
 * @param {integer} str - any string
 * @returns 
 */
const __timeStr = function(str) {
	return `[${__time()}] ${str}`
}
module.exports = {
	__convertTime,
	__time,
	__duration,
	__timeStr
}