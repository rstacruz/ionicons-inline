# ionicons-inline

> Inline version of Ionicons

## Example

```scss
@import 'ionicons-inline/dist/ionicons';

button::before {
  @include ion-md-wifi(16px, #aaddff);
}
```

Returns:

```scss
@import 'ionicons-inline/dist/ionicons';

button::before {
  line-height: 1em;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cpath%20d%3D%22M256%2048C141.1%2048%2048%20141.1%2048%20256s93.1%20208%20208%20208%20208-93.1%20208-208S370.9%2048%20256%2048zm0%20398.7c-105.1%200-190.7-85.5-190.7-190.7S150.9%2065.3%20256%2065.3%20446.7%20150.9%20446.7%20256%20361.1%20446.7%20256%20446.7z%22%2F%3E%3Cpath%20d%3D%22M264%20128h-16v120H128v16h120v120h16V264h120v-16H264z%22%2F%3E%3Cstyle%3Epath%7Bfill%3A#aaddff%3B%7D%3C%2Fstyle%3E');
  background-size: 16px 16px;
}
```

## Usage

Just use a mixin named `ion-<iconname>`. See [Ionic framework icons](https://ionicframework.com/docs/ionicons/).
