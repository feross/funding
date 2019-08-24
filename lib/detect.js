/**
 * Functions to detect information about the environment, e.g. which Terminal
 * emulator is in use, or whether silent mode is enabled.
 */

const ciInfo = require('ci-info')

const {
  TERM_PROGRAM,
  npm_config_loglevel: NPM_CONFIG_LOGLEVEL,
  OPEN_SOURCE_SUPPORTER
} = process.env

// Is Hyper (Mac)?
const isHyper = TERM_PROGRAM === 'Hyper'

// Is iTerm.app (Mac)?
const isITerm = TERM_PROGRAM === 'iTerm.app'

// Is Terminal.app (Mac)?
const isTerminalApp = TERM_PROGRAM === 'Apple_Terminal'

// Is CI?
const isCI = ciInfo.isCI

// Is silent mode enabled?
const isSilentMode =
  ['silent', 'error', 'warn'].includes(NPM_CONFIG_LOGLEVEL) ||
  isEnabled(OPEN_SOURCE_SUPPORTER)

function isEnabled (value) {
  return !!value && value !== '0' && value !== 'false'
}

module.exports = {
  isHyper,
  isITerm,
  isTerminalApp,
  isCI,
  isSilentMode
}
