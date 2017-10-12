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

function convert ({ prefix, base, svg }) {
  const data = process(svg, { prefix })

  return dedent`
    @function ${prefix}-${base}-image($color: #000000) {
      @return url(${JSON.stringify(data)});
    }

    @mixin ${prefix}-${base}-image($size: 16px, $color: #000000) {
      background-image: ${prefix}-${base}-image($color);
    }

    @mixin ${prefix}-${base}($size: 16px, $color: #000000) {
      @include ${prefix}-base;
      @include ${prefix}-${base}-image($size, $color);
      background-size: $size $size;
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

function header ({ prefix }) {
  return dedent`
    @mixin ${prefix}-base {
      line-height: 1em;
      display: inline-block;
      vertical-align: middle;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    @function ${prefix}-fix-color($color) {
      @return str-insert(str-slice(ie-hex-str($color), 4), "%23", 1)
    }
  `
}

/**
 * Converts the SVG into a data URI.
 * @private
 */

function process (svg, { prefix }) {
  // Inject a <style> in the SVG document to allow changing colors
  svg = svg.replace('</svg>', '<style>path{fill:__COLOR__;}</style></svg>')

  // Since this is a data: URI, we want to encode it with %23 and such
  svg = encodeURIComponent(svg)

  // We want the #{...} interpolation to be outside the URI encoding
  svg = svg.replace('__COLOR__', '#{' + prefix + '-fix-color($color)}')

  svg = 'data:image/svg+xml;utf8,' + svg

  return svg
}

/*
 * Export
 */

module.exports = { header, convert, process }
