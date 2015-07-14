angular.module('formlyIonic', ['formly'], ["formlyConfigProvider", function configFormlyIonic(formlyConfigProvider) {
  'use strict';


  angular.forEach(['checkbox','input','radio', 'range','textarea','toggle','select'], function(fieldName) {
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

angular.module("formlyIonic").run(["$templateCache", function($templateCache) {$templateCache.put("fields/ion-checkbox.html","<ion-checkbox ng-model=\"model[options.key]\">{{options.templateOptions.label}}</ion-checkbox>");
$templateCache.put("fields/ion-input.html","<label class=\"item item-input\"><i class=\"icon {{options.templateOptions.icon}}\" ng-if=\"options.templateOptions.icon\" ng-class=\"{\'placeholder-icon\': options.templateOptions.iconPlaceholder}\"></i> <input ng-model=\"model[options.key]\" placeholder=\"{{options.templateOptions.placeholder}}\" type=\"{{options.templateOptions.type}}\"></label>");
$templateCache.put("fields/ion-radio.html","<ion-radio ng-repeat=\"item in options.templateOptions.options\" icon=\"{{item.icon? item.icon: \'ion-checkmark\'}}\" ng-value=\"item.value\" ng-model=\"model[options.key]\">{{ item.text }}</ion-radio>");
$templateCache.put("fields/ion-range.html","<div class=\"item range\" ng-class=\"\'range-\' + options.templateOptions.rangeClass\"><span>{{options.templateOptions.label}}</span> <i class=\"icon\" ng-if=\"options.templateOptions.minIcon\" ng-class=\"options.templateOptions.minIcon\"></i> <input type=\"range\" min=\"{{options.templateOptions.min}}\" max=\"{{options.templateOptions.max}}\" step=\"{{options.templateOptions.step}}\" value=\"{{options.templateOptions.value}}\" ng-model=\"model[options.key]\"> <i class=\"icon\" ng-if=\"options.templateOptions.maxIcon\" ng-class=\"options.templateOptions.maxIcon\"></i></div>");
$templateCache.put("fields/ion-select.html","<label class=\"item item-input item-select\"><div class=\"input-label\">{{to.label}}</div><select ng-model=\"model[options.key]\" ng-options=\"option[to.valueProp || \'value\'] as option[to.labelProp || \'name\'] group by option[to.groupProp || \'group\'] for option in to.options\"></select></label>");
$templateCache.put("fields/ion-textarea.html","<label class=\"item item-input\"><textarea rows=\"{{options.templateOptions.rows? options.templateOptions.rows: \'5\'}}\" placeholder=\"{{options.templateOptions.placeholder}}\" ng-model=\"model[options.key]\"></textarea></label>");
$templateCache.put("fields/ion-toggle.html","<ion-toggle ng-model=\"model[options.key]\" toggle-class=\"toggle-{{options.templateOptions.toggleClass}}\">{{options.templateOptions.label}}</ion-toggle>");}]);