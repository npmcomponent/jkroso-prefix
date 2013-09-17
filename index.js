
var style = document.createElement('p').style
var prefixes = 'O ms Moz webkit'.split(' ')

var memo = {}

/**
 * memoized `prefix`
 *
 * @param {String} key
 * @return {String}
 * @api public
 */

module.exports = exports = function(key){
	return key in memo
		? memo[key]
		: memo[key] = prefix(key)
}

exports.prefix = prefix

/**
 * prefix `key`
 *
 *   prefix('transform') // => webkitTransform
 *
 * @param {String} key
 * @return {String}
 * @api public
 */

function prefix(key){
	// without prefix
	if (style[key] !== undefined) return key

	// with prefix
	var Key = capitalize(key)
	var i = prefixes.length
	while (i--) {
		var name = prefixes[i] + Key
		if (style[name] !== undefined) return name
	}

	throw new Error('unable to prefix ' + key)
}

function capitalize(str){
	return str.charAt(0).toUpperCase() + str.slice(1)
}