const boxen = require('boxen')
const chalk = require('chalk')

const detect = require('./lib/detect')
const wrap = require('./lib/wrap')
const check = require('./lib/check')

const messages = require('./messages.json')

function formatTitle (title) {
  title = wrap(title)

  if (!detect.isCI()) {
    title = chalk.black(title)
  }

  if (!detect.isITerm() && !detect.isHyper()) {
    title = chalk.bold(title)
  }

  return title
}

function formatText (text) {
  text = wrap(text)

  text = text.replace(
    /{{([^}]*?)}}/g,
    (match, url) => chalk.blue.underline(url)
  )

  if (!detect.isCI()) {
    text = chalk.black(text)
  }

  return text
}

function formatUrl (url) {
  url = wrap(url, { cut: true })
  return chalk.blue.underline(url)
}

function formatMessage (message) {
  const { title, text, url } = message

  const coloredMessage = formatTitle(title) + '\n\n' + formatText(text) +
    '\n\n' + formatUrl(url)

  const opts = {
    align: 'center',
    borderStyle: {
      topLeft: ' ',
      topRight: ' ',
      bottomLeft: ' ',
      bottomRight: ' ',
      horizontal: ' ',
      vertical: ' '
    },
    float: 'center',
    margin: 0,
    padding: {
      top: 1,
      right: 4,
      bottom: 1,
      left: 4
    }
  }

  if (!detect.isCI()) {
    Object.assign(opts, {
      backgroundColor: 'white'
    })
  }

  return boxen(coloredMessage, opts)
}

function checkMessage (message) {
  const { title, text, url } = message

  // Check if the strings are safe to print to the terminal. Specifically, the
  // string should be plain ASCII, excluding control characters. This is
  // paranoid and not strictly necessary since (1) we curate the messages.json
  // file by hand and will never include non-ASCII text, and (2) we check the
  // strings at package publish time (see test/messages.js). But it doesn't hurt
  // to check again in the client and assert that messages are plain ASCII. This
  // is the security principle of defense-in-depth.
  check(title)
  check(text)
  check(url)
}

function printRandomMessage () {
  const i = Math.floor(Math.random() * messages.length)
  const message = messages[i]

  checkMessage(message)
  const formattedMessage = formatMessage(message)
  console.log(formattedMessage + '\n')
}

module.exports = {
  formatMessage,
  checkMessage,
  printRandomMessage
}
