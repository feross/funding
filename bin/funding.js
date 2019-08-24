#!/usr/bin/env node

/**
 * This file must run in all recent versions of Node.js (0.12, 4, 6, 8, 10, 12).
 * Avoid using modern JavaScript syntax.
 */

var funding

try {
  funding = require('../')
} catch (err) {
  // Silently ignore syntax errors in Node.js 0.12 and 4.
}

try {
  if (funding) {
    funding.printMessage()
  }
} catch (err) {
  console.error(err.stack || err.message || err)
  console.error('\nReport this issue: https://github.com/feross/funding\n')
}
