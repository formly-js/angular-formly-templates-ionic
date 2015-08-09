angular.module('formlyIonic', ['formly'], function configFormlyIonic(formlyConfigProvider) {
    'use strict';


    angular.forEach(['checkbox', 'input', 'radio', 'range', 'textarea', 'toggle', 'select', 'floating-input', 'stacked-input', 'inline-input'], function (fieldName) {
        formlyConfigProvider.setType({
            name: fieldName,
            templateUrl: getFieldTemplateUrl(fieldName)
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

});
