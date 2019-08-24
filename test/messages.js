const test = require('tape')

const { checkString, checkMessage } = require('../lib/check')
const messages = require('../messages.json')

test('Messages is in the expected shape', t => {
  t.ok(Array.isArray(messages), 'messages is an array')
  t.ok(messages.length > 0, 'messages.length is greater than 0')

  t.end()
})

test('Check all messages with check()', t => {
  messages.forEach(message => {
    t.equal(typeof message.title, 'string')
    t.equal(typeof message.text, 'string')
    t.equal(typeof message.url, 'string')

    t.doesNotThrow(() => {
      checkString(message.title)
    }, 'checkString(message.title)')

    t.doesNotThrow(() => {
      checkString(message.text)
    }, 'checkString(message.text)')

    t.doesNotThrow(() => {
      checkString(message.url)
    }, 'checkString(message.url)')

    t.doesNotThrow(() => {
      checkMessage(message)
    }, 'checkMessage(message)')
  })

  t.end()
})
