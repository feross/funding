/**
 * Functions to detect which Terminal emulator is in use.
 */

const ciInfo = require('ci-info')

const TERM_PROGRAM = process.env.TERM_PROGRAM

// Is Hyper (Mac)?
const isHyper = () => TERM_PROGRAM === 'Hyper'

// Is iTerm.app (Mac)?
const isITerm = () => TERM_PROGRAM === 'iTerm.app'

// Is Terminal.app (Mac)?
const isTerminalApp = () => TERM_PROGRAM === 'Apple_Terminal'

// Is CI?
const isCI = () => ciInfo.isCI

module.exports = {
  isHyper,
  isITerm,
  isTerminalApp,
  isCI
}
