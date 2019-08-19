const wordWrap = require('word-wrap')
const termSize = require('term-size')

/**
 * Wrap text so it fits within the terminal window width while respecting word
 * boundaries. Optionally, ensure that width is within a range even when
 * terminal is very small or large.
 */
function wrap (str, minWidth = 60, maxWidth = 100) {
  const columns = Math.max(minWidth, Math.min(maxWidth, termSize().columns))
  const opts = {
    width: columns - 20, // Leave room for padding and margin
    indent: ''
  }
  return wordWrap(str, opts)
}

module.exports = wrap
