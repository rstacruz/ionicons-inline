/* eslint-env jest */

const exec = require('child_process').execFileSync
const { readFileSync } = require('fs')
const promisify = require('util').promisify
const execFile = promisify(require('child_process').execFile)

beforeAll(() => {
  return execFile('npm', ['run', 'prepare'])
})

it('works', () => {
  return execFile('./node_modules/.bin/node-sass', [
    'test/fixtures/simple/div.scss'
  ]).then(result => {
    const { stdout } = result

    expect(stdout).toContain(`background: url("data:image/svg+xml;`)
    expect(stdout).toContain(`rgb(255%2C192%2C203)`)
    expect(stdout.split(`rgb(255%2C192%2C203)`).length).toEqual(3)
    expect(stdout).toContain(`height: 32px;`)
    expect(stdout).toContain(`width: 32px;`)
    expect(stdout).toContain(`vertical-align: middle;`)
    expect(stdout).toContain(`div::before`)
    expect(stdout).toContain(`ionicons-inline`)
    expect(stdout).toContain(`path`)
    expect(stdout).toContain(`MIT`)
  })
})

it('has an output', () => {
  const scss = readFileSync('dist/ionicons.scss', 'utf-8')
  expect(scss).toContain('ion-add-outline')
  expect(scss).toContain('data:image/svg+xml;charset=utf-8,')
})
