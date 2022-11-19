
const __convertTime = function(time, start = 0) {
	const current = time;
	const now = current - start;
	return new Date(now).toLocaleTimeString("it-US");
}
const __time = function(time = Date.now()) {
	return __convertTime(time)
}
const __duration = function(start, now = Date.now()) {
	return __convertTime(now, start)
}
const __timeStr = function(str) {
	return `[${__time()}] ${str}`
}
module.exports = {
	__convertTime,
	__time,
	__duration,
	__timeStr
}