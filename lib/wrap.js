const wordWrap = require('word-wrap')
const termSize = require('term-size')

const MAX_WIDTH = 100

/**
 * Wrap text so it fits within the terminal window width while respecting word
 * boundaries.
 */
function wrap (str, opts) {
  const columns = Math.min(MAX_WIDTH, termSize().columns)
  opts = Object.assign({
    width: columns - 15, // Leave room for padding and margin
    indent: ''
  }, opts)
  return wordWrap(str, opts)
}

module.exports = wrap
