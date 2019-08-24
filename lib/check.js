/**
 * Check if the given string, str, is safe to print to the terminal.
 * Specifically, the string should be plain ASCII excluding control characters
 * (except for newline which is allowed). Throws if the string is not safe.
 * Otherwise, does nothing.
 */
function checkString (str) {
  if (typeof str !== 'string') {
    throw new Error('Typeof object must be a string')
  }
  for (var i = 0; i < str.length; i++) {
    var ch = str.charCodeAt(i)
    if (ch <= 9 || (ch >= 11 && ch <= 31) || ch >= 127) {
      throw new Error(
        'String must be plain ASCII text. No Unicode, emojis, or control characters allowed.'
      )
    }
  }
}

function checkMessage (message) {
  const { title, text, url } = message

  checkString(title)
  checkString(text)
  checkString(url)
}

module.exports = {
  checkString,
  checkMessage
}
