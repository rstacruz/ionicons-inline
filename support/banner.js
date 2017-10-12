/**
 * Gets the banner for the top of the CSS file.
 *
 *  @example
 *
 *     getBanner('./package.json')
 */

function getBanner (packagePath) {
  // Read package.json
  const pkg = require(packagePath)
  const { name, version, license } = pkg

  // Remove '#readme' from the URL
  const url = pkg.homepage.replace(/#.*$/, '')

  // Print an always-showing banner (with a !), this way it'll show up
  // in minified sources as well
  return `/*! ${name} v${version} | ${license} | ${url} */`
}

module.exports = { getBanner }
