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

angular.module('formlyIonic').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('fields/ion-checkbox.html',
    "<ion-checkbox ng-model=model[options.key]>{{options.templateOptions.label}}</ion-checkbox>"
  );


  $templateCache.put('fields/ion-input.html',
    "<label class=\"item item-input\"><input ng-model=model[options.key] placeholder={{options.templateOptions.placeholder}} type={{options.templateOptions.type}}></label>"
  );


  $templateCache.put('fields/ion-radio.html',
    "<ion-radio ng-repeat=\"item in options.templateOptions.list\" ng-value=item.value ng-model=model[options.key]>{{ item.text }}</ion-radio>"
  );


  $templateCache.put('fields/ion-range.html',
    "<div class=\"item range\" ng-class=\"'range-' + options.templateOptions.rangeClass\"><span>{{options.templateOptions.label}}</span> <i class=icon ng-if=options.templateOptions.minIcon ng-class=\"  options.templateOptions.minIcon\"></i> <input type=range min={{options.templateOptions.min}} max={{options.templateOptions.max}} step={{options.templateOptions.step}} value={{options.templateOptions.value}} ng-model=model[options.key]> <i class=icon ng-if=options.templateOptions.maxIcon ng-class=options.templateOptions.maxIcon></i></div>"
  );


  $templateCache.put('fields/ion-textarea.html',
    "<label class=\"item item-input\"><textarea placeholder={{options.templateOptions.placeholder}} ng-model=model[options.key]></textarea><label></label></label>"
  );


  $templateCache.put('fields/ion-toggle.html',
    "<ion-toggle ng-model=model[options.key] toggle-class=toggle-{{options.templateOptions.toggleClass}}>{{options.templateOptions.label}}</ion-toggle>"
  );

}]);
