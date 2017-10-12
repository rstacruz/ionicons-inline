# ionicons-inline

> Inline version of Ionicons for Sass

ionicons-inline lets you use [Ionicons] in your CSS without images or webfonts. Unlike the default ionicons distribution, this lets you only bundle the icons you need.

[Ionicons]: https://ionicframework.com/docs/ionicons/

## Example

```scss
button::before {
  @include ion-md-wifi(16px, #aaddff);
}
```

Returns:

```scss
button::before {
  line-height: 1em;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cpath%20d%3D%22M256%2048C141.1%2048%2048%20141.1%2048%20256s93.1%20208%20208%20208%20208-93.1%20208-208S370.9%2048%20256%2048zm0%20398.7c-105.1%200-190.7-85.5-190.7-190.7S150.9%2065.3%20256%2065.3%20446.7%20150.9%20446.7%20256%20361.1%20446.7%20256%20446.7z%22%2F%3E%3Cpath%20d%3D%22M264%20128h-16v120H128v16h120v120h16V264h120v-16H264z%22%2F%3E%3Cstyle%3Epath%7Bfill%3A#aaddff%3B%7D%3C%2Fstyle%3E%3C%2Fsvg%3E');
  background-size: 16px 16px;
  height: 16px;
  width: 16px;
}
```

## Usage

Install it as an npm package. It's preferred you use `--exact`, because icons may change per version.

```
npm install --save --save-exact ionicons-inline # via npm
yarn add --exact ionicons-inline                # via yarn
```

Import it in your CSS. The way to do this differs in a lot of ways, but in general, one of these ought to work.

```scss
@import 'ionicons-inline/dist/ionicons';
@import '~ionicons-inline/dist/ionicons';
@import '../node_modules/ionicons-inline/dist/ionicons';
```

Just use a mixin named `ion-<iconname>`. See [Ionic framework icons](https://ionicframework.com/docs/ionicons/).

```scss
button::after {
  @include ion-md-wifi(16px, #aaddff);
}
```

## Thanks

**ionicons-inline** © 2017+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[![](https://img.shields.io/github/followers/rstacruz.svg?style=social&label=@rstacruz)](https://github.com/rstacruz) &nbsp;
[![](https://img.shields.io/twitter/follow/rstacruz.svg?style=social&label=@rstacruz)](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/ionicons-inline/contributors
