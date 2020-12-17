const dedent = require('dedent')

/**
 * Converts an SVG into SCSS.
 * @returns string a snippet in SCSS format with mixins and functions.
 *
 * @example
 *
 *     convert({
 *       prefix: 'ion',
 *       base: 'md-wifi',
 *       svg: '<svg>...</svg>'
 *     })
 */

function convert({ prefix, base, svg }) {
  const data = process(svg, { prefix })

  return dedent`
    @function ${prefix}-${base}-image($color: #000000) {
      @return url(${JSON.stringify(data)});
    }

    @mixin ${prefix}-${base}($size: 16px, $color: #000000) {
      @include ${prefix}-base;
      background: ${prefix}-${base}-image($color) center center / $size $size no-repeat;
      height: $size;
      width: $size;
    }
  `
}

/**
 * Returns the "header" of the SCSS file.
 * @returns string a snippet in SCSS format with mixins and functions.
 *
 * @example
 *
 *      header({ prefix: 'ion' })
 */

function header({ prefix }) {
  return dedent`
    @mixin ${prefix}-base {
      display: inline-block;
      vertical-align: middle;
    }

    @function ${prefix}-fix-color($color) {
      @return unquote("rgb(#{red($color)}%2C#{green($color)}%2C#{blue($color)})")
    }
  `
}

/**
 * Converts the SVG into a data URI.
 * @private
 */

function process(svg, { prefix }) {
  // Inject a <style> in the SVG document to allow changing colors
  svg = svg.replace(
    /<(path|circle) /gi,
    (_, tag) => `<${tag} fill="__COLOR__" `
  )

  // Since this is a data: URI, we want to encode it with %23 and such
  svg = encodeURIComponent(svg)

  // We want the #{...} interpolation to be outside the URI encoding
  svg = svg.replace(/__COLOR__/g, '#{' + prefix + '-fix-color($color)}')

  svg = 'data:image/svg+xml;charset=utf-8,' + svg

  return svg
}

/*
 * Export
 */

module.exports = { header, convert, process }
