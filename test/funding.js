const test = require('tape')
const cp = require('child_process')
const path = require('path')

const { clearShown } = require('../lib/limit')

const FUNDING_BIN_PATH = path.join(__dirname, '..', 'bin', 'funding.js')

test('Sanity check bin/funding.js output', t => {
  t.plan(4)

  clearShown()

  cp.execFile(FUNDING_BIN_PATH, (err, stdout, stderr) => {
    t.error(err)
    t.ok(stdout.length > 0, 'there exists some stdout ouput')
    t.ok(!stdout.match(/error/gi), 'stdout output is not an error')
    t.equal(stderr, '', 'no stderr output')
  })
})

test('`npm --silent` or `npm --loglevel silent` prevents output', t => {
  t.plan(3)

  clearShown()

  const opts = {
    env: Object.assign({}, process.env, {
      npm_config_loglevel: 'silent'
    })
  }

  cp.execFile(FUNDING_BIN_PATH, [], opts, (err, stdout, stderr) => {
    t.error(err)
    t.equal(stdout, '', 'no stdout ouput')
    t.equal(stderr, '', 'no stderr output')
  })
})

test('`npm --quiet` or `npm --loglevel warn` prevents output', t => {
  if (process.version.startsWith('v6.')) {
    t.pass('Ignore `--loglevel warn` on Node 6 (it is the default)')
    return t.end()
  }

  t.plan(3)

  clearShown()

  const opts = {
    env: Object.assign({}, process.env, {
      npm_config_loglevel: 'warn'
    })
  }

  cp.execFile(FUNDING_BIN_PATH, [], opts, (err, stdout, stderr) => {
    t.error(err)
    t.equal(stdout, '', 'no stdout ouput')
    t.equal(stderr, '', 'no stderr output')
  })
})

test('`npm --loglevel error` prevents output', t => {
  t.plan(3)

  clearShown()

  const opts = {
    env: Object.assign({}, process.env, {
      npm_config_loglevel: 'error'
    })
  }

  cp.execFile(FUNDING_BIN_PATH, [], opts, (err, stdout, stderr) => {
    t.error(err)
    t.equal(stdout, '', 'no stdout ouput')
    t.equal(stderr, '', 'no stderr output')
  })
})

test('`npm --loglevel error` prevents output', t => {
  t.plan(7)

  clearShown()

  cp.execFile(FUNDING_BIN_PATH, (err, stdout, stderr) => {
    t.error(err)
    t.ok(stdout.length > 0, 'there exists some stdout ouput')
    t.ok(!stdout.match(/error/gi), 'stdout output is not an error')
    t.equal(stderr, '', 'no stderr output')

    // Second run should print nothing, since it was recently shown
    cp.execFile(FUNDING_BIN_PATH, (err, stdout, stderr) => {
      t.error(err)
      t.equal(stdout, '', 'no stdout ouput')
      t.equal(stderr, '', 'no stderr output')
    })
  })
})
