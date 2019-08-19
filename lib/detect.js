/**
 * Functions to detect which Terminal emulator is in use.
 */

const TERM_PROGRAM = process.env.TERM_PROGRAM

// Is iTerm.app (Mac)?
const isITerm = () => TERM_PROGRAM === 'iTerm.app'

// Is Terminal.app (Mac)?
const isTerminalApp = () => TERM_PROGRAM === 'Apple_Terminal'

// Is Hyper (Mac)?
const isHyper = () => TERM_PROGRAM === 'Hyper'

module.exports = {
  isITerm,
  isTerminalApp,
  isHyper
}
