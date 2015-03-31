angular.module('formlyIonic', ['formly'], ["formlyConfigProvider", function configFormlyIonic(formlyConfigProvider) {
  'use strict';


  angular.forEach(['checkbox','input','radio', 'range','textarea','toggle'], function(fieldName) {
    formlyConfigProvider.setType({
      name: fieldName,
      templateUrl: getFieldTemplateUrl(fieldName),

    });
  });

  formlyConfigProvider.templateManipulators.preWrapper.push(function ariaDescribedBy(template, options, scope) {
    if (options.templateOptions && angular.isDefined(options.templateOptions.description) &&
      options.type !== 'radio' && options.type !== 'checkbox') {
      var el = angular.element('<a></a>');
      el.append(template);
      var modelEls = angular.element(el[0].querySelectorAll('[ng-model]'));
      if (modelEls) {
        el.append(
          '<p id="' + scope.id + '_description"' +
              'class="help-block"' +
              'ng-if="options.templateOptions.description">' +
            '{{options.templateOptions.description}}' +
          '</p>'
        );
        modelEls.attr('aria-describedby', scope.id + '_description');
        return el.html();
      } else {
        return template;
      }
    } else {
      return template;
    }
  });

  function getFieldTemplateUrl(name) {
    return 'fields/ion-' + name + '.html';
  }

}]);

angular.module("formlyIonic").run(["$templateCache", function($templateCache) {$templateCache.put("ion-checkbox.html","<ion-checkbox ng-model=\"model[options.key]\">\n  {{options.templateOptions.label}}\n</ion-checkbox>\n");
$templateCache.put("ion-input.html","<label class=\"item item-input\">\n  <input ng-model=\"model[options.key]\" placeholder=\"{{options.templateOptions.placeholder}}\" type=\"{{options.templateOptions.type}}\">\n</label>\n");
$templateCache.put("ion-radio.html","<ion-radio ng-repeat=\"item in options.templateOptions.list\" ng-value=\"item.value\" ng-model=\"model[options.key]\" >  \n{{ item.text }}    \n</ion-radio>\n");
$templateCache.put("ion-range.html","  <div class=\"item range\"\n       ng-class=\"\'range-\' + options.templateOptions.rangeClass\">\n\n    <span>\n       {{options.templateOptions.label}}\n    </span>\n\n    <i class=\"icon\"\n       ng-if=\"options.templateOptions.minIcon\"\n       ng-class=\"  options.templateOptions.minIcon\"></i>\n\n    <input type=\"range\"\n           min=\"{{options.templateOptions.min}}\"\n           max=\"{{options.templateOptions.max}}\"\n           step=\"{{options.templateOptions.step}}\"\n           value=\"{{options.templateOptions.value}}\"\n           ng-model=\"model[options.key]\">\n\n    <i class=\"icon\"\n        ng-if=\"options.templateOptions.maxIcon\"\n        ng-class=\"options.templateOptions.maxIcon\">\n    </i>\n  </div>\n");
$templateCache.put("ion-textarea.html","<label class=\"item item-input\">\n  <textarea placeholder=\"{{options.templateOptions.placeholder}}\" ng-model=\"model[options.key]\"></textarea>\n<label>\n");
$templateCache.put("ion-toggle.html","<ion-toggle ng-model=\"model[options.key]\" toggle-class=\"toggle-{{options.templateOptions.toggleClass}}\">\n  {{options.templateOptions.label}}\n</ion-toggle>\n");}]);