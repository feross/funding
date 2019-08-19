const test = require('tape')
const check = require('../lib/check')

test('check() accepts valid strings', t => {
  t.doesNotThrow(() => {
    check('')
  })
  t.doesNotThrow(() => {
    check('support open source')
  })
  t.doesNotThrow(() => {
    check('support open source\nbe a part of history')
  })
  t.doesNotThrow(() => {
    check('support open source\nbe a part of history\nmaintainers unite')
  })
  t.doesNotThrow(() => {
    check('!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~')
  })
  t.end()
})

test('check() behaves as expected on first 127 characters', t => {
  // control characters not allowed
  t.throws(() => { check('\u0000') })
  t.throws(() => { check('\u0001') })
  t.throws(() => { check('\u0002') })
  t.throws(() => { check('\u0003') })
  t.throws(() => { check('\u0004') })
  t.throws(() => { check('\u0005') })
  t.throws(() => { check('\u0006') })
  t.throws(() => { check('\u0007') })
  t.throws(() => { check('\u0008') })
  t.throws(() => { check('\u0009') })

  // newline is allowed
  t.doesNotThrow(() => { check('\u000a') })

  // control characters not allowed
  t.throws(() => { check('\u000b') })
  t.throws(() => { check('\u000c') })
  t.throws(() => { check('\u000d') })
  t.throws(() => { check('\u000e') })
  t.throws(() => { check('\u000f') })
  t.throws(() => { check('\u0010') })
  t.throws(() => { check('\u0011') })
  t.throws(() => { check('\u0012') })
  t.throws(() => { check('\u0013') })
  t.throws(() => { check('\u0014') })
  t.throws(() => { check('\u0015') })
  t.throws(() => { check('\u0016') })
  t.throws(() => { check('\u0017') })
  t.throws(() => { check('\u0018') })
  t.throws(() => { check('\u0019') })
  t.throws(() => { check('\u001a') })
  t.throws(() => { check('\u001b') })
  t.throws(() => { check('\u001c') })
  t.throws(() => { check('\u001d') })
  t.throws(() => { check('\u001e') })
  t.throws(() => { check('\u001f') })

  // normal characters are allowed
  for (let i = 0x20; i < 0x7f; i++) {
    t.doesNotThrow(() => { check(Buffer.from([i]).toString()) })
  }

  // del is not allowed
  t.throws(() => { check('\u007f') })

  t.end()
})

test('check() rejects high code points', t => {
  // char codes 128-255 are not allowed
  for (let i = 0x80; i <= 0xff; i++) {
    t.throws(() => { check(Buffer.from([i]).toString()) })
  }

  // emojis are not allowed
  t.throws(() => { check('💩') })
  t.throws(() => { check('❤️') })
  t.throws(() => { check('✨') })

  // ansi escape sequences are not allowed
  t.throws(() => { check('\u001B') })
  t.throws(() => { check('\u001B[4mfoo\u001B[24m') })
  t.throws(() => { check('\u001B[31mfoo\u001B[39m') })
  t.throws(() => { check('\u001B[41mfoo\u001B[49m') })
  t.throws(() => { check('\u001B[31m\u001B[42m\u001B[4mfoo\u001B[24m\u001B[49m\u001B[39m') })
  t.throws(() => { check('\u001B[31mfoo\u001B[4m\u001B[44mbar\u001B[49m\u001B[24m!\u001B[39m') })
  t.throws(() => { check('\u001B[31ma\u001B[33mb\u001B[32mc\u001B[33mb\u001B[31mc\u001B[39m') })
  t.throws(() => { check('\u001B[90mhello\u001B[39m\n\u001B[90mworld\u001B[39m') })

  t.end()
})

test('check() accepts valid strings', t => {
  // 20 lines, with 20 line max
  t.doesNotThrow(() => {
    check('a\nb\nc\nd\ne\nf\ng\nh\ni\nj\na\nb\nc\nd\ne\nf\ng\nh\ni\nj', 20)
  })

  t.end()
})

test('check() rejects invalid strings', t => {
  // 3 character line, followed by line with unsafe characters
  t.throws(() => {
    check('abc\ndef💩gih')
  })

  // two lines with invalid characters
  t.throws(() => {
    check('🌟\ndef💩gih')
  })

  t.end()
})

test('check() rejects non-strings', t => {
  // function argument
  t.throws(() => {
    check(() => {})
  })

  // object argument
  t.throws(() => {
    check({})
  })

  // number argument
  t.throws(() => {
    check(42)
  })

  // null argument
  t.throws(() => {
    check(null)
  })

  // undefined argument
  t.throws(() => {
    check(undefined)
  })

  t.end()
})
