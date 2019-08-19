const test = require('tape')
const cp = require('child_process')
const path = require('path')
const util = require('util')

const execFile = util.promisify(cp.execFile)

const FUNDING_BIN_PATH = path.join(__dirname, '..', 'bin', 'funding.js')

test('Santiy check bin/funding.js output', async t => {
  const { stdout, stderr } = await execFile(FUNDING_BIN_PATH)

  t.ok(stdout.length > 0, 'there exists some stdout ouput')
  t.ok(!stdout.match(/error/gi), 'stdout output is not an error')
  t.equal(stderr.length, 0, 'no stderr output')

  t.end()
})
