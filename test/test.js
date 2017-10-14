/* eslint-env jest */

const exec = require('child_process').execFileSync
const { readFileSync } = require('fs')

it('works', () => {
  const result = exec(
    './node_modules/.bin/node-sass',
    [ 'test/fixtures/simple/div.scss' ]
  )

  const css = result.toString()

  expect(css).toContain(`background: url("data:image/svg+xml;`)
  expect(css).toContain(`rgb(255%2C192%2C203)`)
  expect(css).toContain(`height: 32px;`)
  expect(css).toContain(`width: 32px;`)
  expect(css).toContain(`vertical-align: middle;`)
  expect(css).toContain(`div::before`)
  expect(css).toContain(`ionicons-inline`)
  expect(css).toContain(`MIT`)
})

it('has an output', () => {
  const scss = readFileSync('dist/ionicons.scss', 'utf-8')
  expect(scss).toContain('ion-ios-add')
  expect(scss).toContain('data:image/svg+xml;charset=utf-8,')
})
