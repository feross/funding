const test = require('tape')
const check = require('../lib/check')
const funding = require('../')
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
      check(message.title)
    })

    t.doesNotThrow(() => {
      check(message.text)
    })

    t.doesNotThrow(() => {
      check(message.url)
    })
  })

  t.end()
})

test('Check all messages with checkMessage()', t => {
  messages.forEach(message => {
    t.doesNotThrow(() => {
      funding.checkMessage(message)
    })
  })

  t.end()
})
