const test = require('tape')
const { checkString } = require('../lib/check')

test('checkString() accepts valid strings', t => {
  t.doesNotThrow(() => {
    checkString('')
  })
  t.doesNotThrow(() => {
    checkString('support open source')
  })
  t.doesNotThrow(() => {
    checkString('support open source\nbe a part of history')
  })
  t.doesNotThrow(() => {
    checkString('support open source\nbe a part of history\nmaintainers unite')
  })
  t.doesNotThrow(() => {
    checkString('!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~')
  })
  t.end()
})

test('checkString() behaves as expected on first 127 characters', t => {
  // control characters not allowed
  t.throws(() => { checkString('\u0000') })
  t.throws(() => { checkString('\u0001') })
  t.throws(() => { checkString('\u0002') })
  t.throws(() => { checkString('\u0003') })
  t.throws(() => { checkString('\u0004') })
  t.throws(() => { checkString('\u0005') })
  t.throws(() => { checkString('\u0006') })
  t.throws(() => { checkString('\u0007') })
  t.throws(() => { checkString('\u0008') })
  t.throws(() => { checkString('\u0009') })

  // newline is allowed
  t.doesNotThrow(() => { checkString('\u000a') })

  // control characters not allowed
  t.throws(() => { checkString('\u000b') })
  t.throws(() => { checkString('\u000c') })
  t.throws(() => { checkString('\u000d') })
  t.throws(() => { checkString('\u000e') })
  t.throws(() => { checkString('\u000f') })
  t.throws(() => { checkString('\u0010') })
  t.throws(() => { checkString('\u0011') })
  t.throws(() => { checkString('\u0012') })
  t.throws(() => { checkString('\u0013') })
  t.throws(() => { checkString('\u0014') })
  t.throws(() => { checkString('\u0015') })
  t.throws(() => { checkString('\u0016') })
  t.throws(() => { checkString('\u0017') })
  t.throws(() => { checkString('\u0018') })
  t.throws(() => { checkString('\u0019') })
  t.throws(() => { checkString('\u001a') })
  t.throws(() => { checkString('\u001b') })
  t.throws(() => { checkString('\u001c') })
  t.throws(() => { checkString('\u001d') })
  t.throws(() => { checkString('\u001e') })
  t.throws(() => { checkString('\u001f') })

  // normal characters are allowed
  for (let i = 0x20; i < 0x7f; i++) {
    t.doesNotThrow(() => { checkString(Buffer.from([i]).toString()) })
  }

  // del is not allowed
  t.throws(() => { checkString('\u007f') })

  t.end()
})

test('checkString() rejects high code points', t => {
  // char codes 128-255 are not allowed
  for (let i = 0x80; i <= 0xff; i++) {
    t.throws(() => { checkString(Buffer.from([i]).toString()) })
  }

  // emojis are not allowed
  t.throws(() => { checkString('💩') })
  t.throws(() => { checkString('❤️') })
  t.throws(() => { checkString('✨') })

  // ansi escape sequences are not allowed
  t.throws(() => { checkString('\u001B') })
  t.throws(() => { checkString('\u001B[4mfoo\u001B[24m') })
  t.throws(() => { checkString('\u001B[31mfoo\u001B[39m') })
  t.throws(() => { checkString('\u001B[41mfoo\u001B[49m') })
  t.throws(() => { checkString('\u001B[31m\u001B[42m\u001B[4mfoo\u001B[24m\u001B[49m\u001B[39m') })
  t.throws(() => { checkString('\u001B[31mfoo\u001B[4m\u001B[44mbar\u001B[49m\u001B[24m!\u001B[39m') })
  t.throws(() => { checkString('\u001B[31ma\u001B[33mb\u001B[32mc\u001B[33mb\u001B[31mc\u001B[39m') })
  t.throws(() => { checkString('\u001B[90mhello\u001B[39m\n\u001B[90mworld\u001B[39m') })

  t.end()
})

test('checkString() accepts valid strings', t => {
  // 20 lines, with 20 line max
  t.doesNotThrow(() => {
    checkString('a\nb\nc\nd\ne\nf\ng\nh\ni\nj\na\nb\nc\nd\ne\nf\ng\nh\ni\nj', 20)
  })

  t.end()
})

test('checkString() rejects invalid strings', t => {
  // 3 character line, followed by line with unsafe characters
  t.throws(() => {
    checkString('abc\ndef💩gih')
  })

  // two lines with invalid characters
  t.throws(() => {
    checkString('🌟\ndef💩gih')
  })

  t.end()
})

test('checkString() rejects non-strings', t => {
  // function argument
  t.throws(() => {
    checkString(() => {})
  })

  // object argument
  t.throws(() => {
    checkString({})
  })

  // number argument
  t.throws(() => {
    checkString(42)
  })

  // null argument
  t.throws(() => {
    checkString(null)
  })

  // undefined argument
  t.throws(() => {
    checkString(undefined)
  })

  t.end()
})
