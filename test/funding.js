const test = require('tape')
const cp = require('child_process')
const path = require('path')

const FUNDING_BIN_PATH = path.join(__dirname, '..', 'bin', 'funding.js')

test('Santiy check bin/funding.js output', t => {
  t.plan(4)

  cp.execFile(FUNDING_BIN_PATH, (err, stdout, stderr) => {
    t.error(err)
    t.ok(stdout.length > 0, 'there exists some stdout ouput')
    t.ok(!stdout.match(/error/gi), 'stdout output is not an error')
    t.equal(stderr.length, 0, 'no stderr output')
  })
})
