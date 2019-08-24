const test = require('tape')
const cp = require('child_process')
const path = require('path')

const FUNDING_BIN_PATH = path.join(__dirname, '..', 'bin', 'funding.js')

test('Sanity check bin/funding.js output', t => {
  t.plan(4)

  cp.execFile(FUNDING_BIN_PATH, (err, stdout, stderr) => {
    t.error(err)
    t.ok(stdout.length > 0, 'there exists some stdout ouput')
    t.ok(!stdout.match(/error/gi), 'stdout output is not an error')
    t.equal(stderr.length, 0, 'no stderr output')
  })
})

test('`npm --silent` or `npm --loglevel silent` prevents output', t => {
  t.plan(3)

  const opts = {
    env: {
      ...process.env,
      npm_config_loglevel: 'silent'
    }
  }

  cp.execFile(FUNDING_BIN_PATH, [], opts, (err, stdout, stderr) => {
    t.error(err)
    t.equal(stdout.length, 0, 'no stdout ouput')
    t.equal(stderr.length, 0, 'no stderr output')
  })
})

test('`npm --quiet` or `npm --loglevel warn` prevents output', t => {
  t.plan(3)

  const opts = {
    env: {
      ...process.env,
      npm_config_loglevel: 'warn'
    }
  }

  cp.execFile(FUNDING_BIN_PATH, [], opts, (err, stdout, stderr) => {
    t.error(err)
    t.equal(stdout.length, 0, 'no stdout ouput')
    t.equal(stderr.length, 0, 'no stderr output')
  })
})

test('`npm --loglevel error` prevents output', t => {
  t.plan(3)

  const opts = {
    env: {
      ...process.env,
      npm_config_loglevel: 'error'
    }
  }

  cp.execFile(FUNDING_BIN_PATH, [], opts, (err, stdout, stderr) => {
    t.error(err)
    t.equal(stdout.length, 0, 'no stdout ouput')
    t.equal(stderr.length, 0, 'no stderr output')
  })
})

test('OPEN_SOURCE_SUPPORTER=true prevents output', t => {
  t.plan(3)

  const opts = {
    env: {
      ...process.env,
      OPEN_SOURCE_SUPPORTER: 'true'
    }
  }

  cp.execFile(FUNDING_BIN_PATH, [], opts, (err, stdout, stderr) => {
    t.error(err)
    t.equal(stdout.length, 0, 'no stdout ouput')
    t.equal(stderr.length, 0, 'no stderr output')
  })
})
