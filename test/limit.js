const test = require('tape')

const { isShownRecently, markShown, clearShown } = require('../lib/limit')

test('shown file works', t => {
  clearShown()
  t.ok(!isShownRecently(), 'initially, not shown recently')

  markShown()
  t.ok(isShownRecently(), 'after markShown(), is shown recently')

  clearShown()
  t.ok(!isShownRecently(), 'after clearShown(), not shown recently')

  t.end()
})
