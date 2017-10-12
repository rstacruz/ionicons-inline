/* eslint-env jest */

const exec = require('child_process').execFileSync

it('works', () => {
  const result = exec(
    './node_modules/.bin/node-sass',
    [ 'test/fixtures/simple/div.scss' ]
  )

  const css = result.toString()
  expect(css).toMatchSnapshot()
})
