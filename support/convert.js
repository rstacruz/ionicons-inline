const dedent = require('dedent')

/**
 * Converts an SVG into SCSS.
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
  const data = process(svg)
  return dedent`
    @function ${prefix}-${base}-image($color: black) {
      @return url('data:image/svg+xml;utf8,${data}');
    }

    @mixin ${prefix}-${base}($size: 16px, $color: black) {
      @include ${prefix}-base;
      background-image: ${prefix}-${base}-image($color);
      background-size: $size $size;
      height: $size;
      width: $size;
    }
  `
}

/**
 * Returns the "header" of the SCSS file.
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
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `
}

function process (svg) {
  svg = svg.replace('</svg>', '<style>path{fill:__COLOR__;}</style></svg>')
  return encodeURIComponent(svg).replace('__COLOR__', '#{$color}')
}

module.exports = { header, convert, process }
