// (c) 2023 zNotChill - See LICENSE

/**
 * Returns the time between 2 points, in 24 hour time.
 * @param {integer} time - converts the time between time and start params
 * @param {integer} start - start time, unix time. *optional param*
 * @returns 
 */
const time = function(time, start = 0) {
	const current = time;
	const now = current - start;
	return new Date(now).toLocaleTimeString("it-US");
}

/**
 * Returns the duration between two unix timestamps.
 * @param {integer} start - the start unix timestamp
 * @param {integer} now - any unix timestamp, defaults to now
 * @returns 
 */
const duration = function(start, now = Date.now()) {
	return time(now, start);
}

/**
 * Concatenates the formatted time with any string.
 * @param {integer} str - any string
 * @returns 
 */
const timeStr = function(str) {
	return `[${time(Date.now())}] ${str}`;
}
module.exports = {
	time,
	duration,
	timeStr
}