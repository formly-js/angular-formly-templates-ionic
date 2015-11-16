angular.module('formlyIonic', ['formly'], function configFormlyIonic(formlyConfigProvider) {
    'use strict';


    angular.forEach(['checkbox', 'input', 'radio', 'range', 'textarea', 'toggle', 'select', 'floating-input', 'stacked-input', 'inline-input'], function (fieldName) {
        formlyConfigProvider.setType({
            name: fieldName,
            templateUrl: getFieldTemplateUrl(fieldName)
        });
    });

    formlyConfigProvider.setWrapper({
        name: 'validationWrapper',
        template:
        '<formly-transclude></formly-transclude>'+
        '<div class="validation-error" ng-class="{\'is-dirty\':options.formControl.$dirty,\'is-touched\':options.formControl.$touched,\'is-invalid\':options.formControl.$invalid}"  ng-messages="options.formControl.$error" ng-if="::options.templateOptions.validate">'+
            '<div ng-messages-include="{{::options.templateOptions.validationsCustom}}" ng-if="::options.templateOptions.validationsCustom"></div>'+
            '<div ng-message="{{::name}}" ng-repeat="(name, message) in ::options.validation.messages">'+
                '{{message(options.formControl.$viewValue, options.formControl.$modelValue, this)}}'+
            '</div>'+
        '</div>',
        types: ['checkbox', 'input', 'radio', 'textarea', 'select', 'floating-input', 'stacked-input', 'inline-input']
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

});
