/* eslint-env jest */

const exec = require('child_process').execFileSync
const { readFileSync } = require('fs')

it('works', () => {
  const result = exec(
    './node_modules/.bin/node-sass',
    [ 'test/fixtures/simple/div.scss' ]
  )

  const css = result.toString()
  expect(css).toMatchSnapshot()
})

it('has an output', () => {
  const scss = readFileSync('dist/ionicons.scss', 'utf-8')
  expect(scss).toContain('ion-ios-add')
  expect(scss).toContain('data:image/svg+xml;utf8,')
})
