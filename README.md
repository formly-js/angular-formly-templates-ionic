[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/formly-js/angular-formly?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Angular-Formly: Ionic Framework Templates

This is a template for [angular-formly](http://github.com/formly-js/angular-formly) and [Ionic](http://ionicframework.com/). This library is not standalone and requires angular-formly to be present and loaded.

### Install with Bower

```bash
$ bower install api-check angular-formly angular-formly-templates-ionic --save
```

Reference the files in your `index.html`

```html
<!-- right below ionic.bundle.js -->
<script src="lib/api-check/dist/apiCheck.js"></script>
<script src="lib/angular-formly/dist/formly.js"></script>
<script src="lib/angular-formly-templates-ionic/dist/angular-formly-templates-ionic.js"></script>
```

Then import the templates into your project.

```javascript
angular.module('myApp', ['ionic', 'formlyIonic'])
```

And your're ready!

### ToDos

- Write tests

- [x] Move to gulp
