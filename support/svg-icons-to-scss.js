#!/usr/bin/env node
const cli = require('meow')(
  `
  Usage:
   $ svg-icons-to-scss \
       --prefix PRE \
       --src "path/to/*.svg" \
       > output.scss

  Options:
        --prefix PREFIX   prefix for mixins (eg, 'ion')
        --src GLOB        SVG files to process

  Options:
    -h, --help            show usage information
    -v, --version         print version info and exit
`,
  {
    boolean: ['help', 'version'],
    string: ['prefix', 'src', 'header'],
    alias: {
      h: 'help',
      v: 'version',
    },
  }
)

const glob = require('glob')
const { basename, resolve } = require('path')
const { convert, header } = require('./convert')
const { readFileSync } = require('fs')
const { getBanner } = require('./banner')

function run({ src, prefix, pkg }) {
  const result = []
  result.push(getBanner(pkg))
  result.push(header({ prefix }))

  glob.sync(src).forEach((fname) => {
    const base = basename(fname).replace(/\.svg$/, '')
    const svg = readFileSync(fname, 'utf-8')
    const output = convert({ prefix, base, svg })

    result.push(output)
  })

  return result.join('\n\n') + '\n'
}

const result = run({
  ...cli.flags,
  pkg: resolve(process.cwd(), cli.flags.pkg || 'package.json'),
})

console.log(result)
