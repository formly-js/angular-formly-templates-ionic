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
<script src="lib/api-check/dist/api-check.js"></script>
<script src="lib/angular-formly/dist/formly.js"></script>
<script src="lib/angular-formly-templates-ionic/dist/angular-formly-templates-ionic.js"></script>
```

Then import the templates into your project.

```javascript
angular.module('myApp', ['ionic', 'formlyIonic'])
```

And your're ready!

## Documentation

See [angular-formly](http://docs.angular-formly.com) for formly core documentation.

### Common Properties

NOTE: All of these properties will be under the `templateOptions` property as of angular-formly 3.0.0

---
##### label (string)
>`label` is used to add an html label to each field.

###### Default
>`undefined`

---
##### required (boolean)
>`required` is used to add the required attribute to a form field.

###### Default
>`undefined`

---
##### disabled (boolean)
>`disabled` is used to add the disabled attribute to a form field.

###### Default
>`undefined`

---
##### placeholder (string)
>`placeholder` is used to add placeholder text to some inputs.

###### Default
>`undefined`

---
##### description (string)
>`description` is used to add descriptive text to all inputs.

###### Default
>`undefined`

---
##### addonLeft (object)
>`addonLeft` is used to add an add-on on the left of a field. The object accepts three properties: `text` that sets a simple text, `onClick` will add a `cursor:pointer` and an ng-click to the addon (invoked with the options and scope), and `class` that sets classes to the add-on.

###### Default
>`undefined`

---
##### addonRight (object)
>`addonRight` is used to add an add-on on the right of a field. The object accepts three properties: `text` that sets a simple text, `onClick` will add a `cursor:pointer` and an ng-click to the addon (invoked with the options and scope), and `class` that sets classes to the add-on.

###### Default
>`undefined`

### Fields

### Form Fields

Below is a detailed description of each form fields and its custom properties.

#### Input form field
>The input uses the <input> element and allows you to specify it's type via the type property. Currently Ionic template does not support label on input type, use placeholder instead. the 'type' property inside of templateOptions can be text, email, password, etc..

_Example text field_
```json
{
  "type": "input",
  "key": "firstName",
  "templateOptions": {
    "type": "email",
    "placeholder": "jane doe",
    "icon": "ion-person",
    "iconPlaceholder": true
  }
}
```

---
#### Textarea form field
>The textarea field creates multiline input with a textarea element. Currently Ionic template does not support label on input type, use placeholder instead.

##### lines (number, optional)
>`lines` sets the rows attribute for the textarea element.

_Example textarea field_
```json
{
  "type": "textarea",
  "key": "about",
  "templateOptions": {
    "placeholder": "Cats make me smile",
    "rows": 4
  }
}
```

---
#### Checkbox form field
>The checkbox field allows checkbox input with a input element set to `type='checkbox'`. It doesn't have any custom properties.

_Example checkbox field_
```json
{
  "type": "checkbox",
  "key": "checkThis",
  "templateOptions": {
    "label": "Check this box"
  }
}
```

---
#### Range form field
>The range can take in selected Ionicons as the min and max icons. You can also change the color by using another class. Label is also supported.

_Example range field_
```json
{
      "key": "volumeLevel",
      "type": "range",
      "templateOptions": {
        "label": "Volume",
        "rangeClass": "calm",
        "min": "0",
        "max": "100",
        "step": "5",
        "value": "25",
        "minIcon": "ion-volume-low",
        "maxIcon": "ion-volume-high"
      }
    }
```

---
#### Radio form field
>The radio field allows choice input with a series of linked inputs, use `type='radio'`.

##### options (array, required)
>`options` is an array of options for the radio form field to display. Each option should be an object with a `text`(string or number) and `value`(string or number). 
>You can also override the icon that is diplayed with the option by passing in the icon key with an Ionicon identifer.

_Example radio field_
```json
{
  "key": "triedEmber",
  "type": "radio",
  "templateOptions": {
    "label": "Have you tried EmberJs yet?",
     "options": [{
         "value": "A",
         "text": "A",
         "icon": "ion-home"
       }, {
         "value": "B",
         "text": "B",
       }, {
         "value": "C",
         "text": "C",
       }]
  }
}
```

---
#### Select form field
>The select field allows selection via dropdown using the select element.

##### options (array, required)
>`options` is an array of options for the select form field to display. Each option should be an object with a `name`(string). You may optionally add a `group` or 'id' to some or all of your options.

##### labelProp (string, optional)
>`labelProp` is what is used for what is shown to the user. Defaults to `name`

##### valueProp (string, optional)
>`valueProp` is what is used for the value assigned to the model. Defaults to `value`

##### groupProp (string, optional)
>`groupProp` is what is used to group the options

[Example](http://angular-formly.com/#/example/bootstrap-formly/select)

_Example select field_
```json
{
    "key": "marvel3",
    "type": "select",
    "templateOptions": {
      "label": "Select with custom name/value/group",
      "options": [{
        "label": "Iron Man",
        "id": "iron_man",
        "gender": "Male"
      }, {
        "label": "Captain America",
        "id": "captain_america",
        "gender": "Male"
      }, {
        "label": "Black Widow",
        "id": "black_widow",
        "gender": "Female"
      }, {
        "label": "Hulk",
        "id": "hulk",
        "gender": "Male"
      }, {
        "label": "Captain Marvel",
        "id": "captain_marvel",
        "gender": "Female"
      }],
      "groupProp": "gender",
      "valueProp": "id",
      "labelProp": "label"
    }
  }
```

### ToDos

- Write tests

- [x] Move to gulp
