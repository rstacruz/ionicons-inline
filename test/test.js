/* eslint-env jest */

const exec = require('child_process').execFileSync
const { readFileSync } = require('fs')

it('works', () => {
  const result = exec(
    './node_modules/.bin/node-sass',
    [ 'test/fixtures/simple/div.scss' ]
  )

  const css = result.toString()

  expect(css).toContain(`background: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cpath%20d%3D%22M384%20264H264v120h-16V264H128v-16h120V128h16v120h120v16z%22%2F%3E%3Cstyle%3Epath%7Bfill%3A%23FFC0CB%3B%7D%3C%2Fstyle%3E%3C%2Fsvg%3E") center center/32px 32px no-repeat;`)
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
  expect(scss).toContain('data:image/svg+xml;utf8,')
})
