//! angular-formly version 6.16.1 built with ♥ by Astrism <astrisms@gmail.com>, Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("api-check"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "api-check"], factory);
	else if(typeof exports === 'object')
		exports["ngFormly"] = factory(require("angular"), require("api-check"));
	else
		root["ngFormly"] = factory(root["angular"], root["apiCheck"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _indexCommon = __webpack_require__(1);

	var _indexCommon2 = _interopRequireDefault(_indexCommon);

	exports['default'] = _indexCommon2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angularFix = __webpack_require__(3);

	var _angularFix2 = _interopRequireDefault(_angularFix);

	var _providersFormlyApiCheck = __webpack_require__(5);

	var _providersFormlyApiCheck2 = _interopRequireDefault(_providersFormlyApiCheck);

	var _otherDocsBaseUrl = __webpack_require__(7);

	var _otherDocsBaseUrl2 = _interopRequireDefault(_otherDocsBaseUrl);

	var _providersFormlyUsability = __webpack_require__(8);

	var _providersFormlyUsability2 = _interopRequireDefault(_providersFormlyUsability);

	var _providersFormlyConfig = __webpack_require__(9);

	var _providersFormlyConfig2 = _interopRequireDefault(_providersFormlyConfig);

	var _providersFormlyValidationMessages = __webpack_require__(11);

	var _providersFormlyValidationMessages2 = _interopRequireDefault(_providersFormlyValidationMessages);

	var _servicesFormlyUtil = __webpack_require__(12);

	var _servicesFormlyUtil2 = _interopRequireDefault(_servicesFormlyUtil);

	var _servicesFormlyWarn = __webpack_require__(2);

	var _servicesFormlyWarn2 = _interopRequireDefault(_servicesFormlyWarn);

	var _directivesFormlyCustomValidation = __webpack_require__(13);

	var _directivesFormlyCustomValidation2 = _interopRequireDefault(_directivesFormlyCustomValidation);

	var _directivesFormlyField = __webpack_require__(14);

	var _directivesFormlyField2 = _interopRequireDefault(_directivesFormlyField);

	var _directivesFormlyFocus = __webpack_require__(15);

	var _directivesFormlyFocus2 = _interopRequireDefault(_directivesFormlyFocus);

	var _directivesFormlyForm = __webpack_require__(16);

	var _directivesFormlyForm2 = _interopRequireDefault(_directivesFormlyForm);

	var _runFormlyNgModelAttrsManipulator = __webpack_require__(17);

	var _runFormlyNgModelAttrsManipulator2 = _interopRequireDefault(_runFormlyNgModelAttrsManipulator);

	var _runFormlyCustomTags = __webpack_require__(18);

	var _runFormlyCustomTags2 = _interopRequireDefault(_runFormlyCustomTags);

	var ngModuleName = 'formly';

	exports['default'] = ngModuleName;

	var ngModule = _angularFix2['default'].module(ngModuleName, []);

	ngModule.constant('formlyApiCheck', _providersFormlyApiCheck2['default']);
	ngModule.constant('formlyErrorAndWarningsUrlPrefix', _otherDocsBaseUrl2['default']);
	ngModule.constant('formlyVersion', ("6.16.1")); // <-- webpack variable

	ngModule.provider('formlyUsability', _providersFormlyUsability2['default']);
	ngModule.provider('formlyConfig', _providersFormlyConfig2['default']);

	ngModule.factory('formlyValidationMessages', _providersFormlyValidationMessages2['default']);
	ngModule.factory('formlyUtil', _servicesFormlyUtil2['default']);
	ngModule.factory('formlyWarn', _servicesFormlyWarn2['default']);

	ngModule.directive('formlyCustomValidation', _directivesFormlyCustomValidation2['default']);
	ngModule.directive('formlyField', _directivesFormlyField2['default']);
	ngModule.directive('formlyFocus', _directivesFormlyFocus2['default']);
	ngModule.directive('formlyForm', _directivesFormlyForm2['default']);

	ngModule.run(_runFormlyNgModelAttrsManipulator2['default']);
	ngModule.run(_runFormlyCustomTags2['default']);
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	exports['default'] = formlyWarn;

	// @ngInject
	function formlyWarn(formlyConfig, formlyErrorAndWarningsUrlPrefix, $log) {
	  return function warn() {
	    if (!formlyConfig.disableWarnings) {
	      var args = Array.prototype.slice.call(arguments);
	      var warnInfoSlug = args.shift();
	      args.unshift('Formly Warning:');
	      args.push('' + formlyErrorAndWarningsUrlPrefix + '' + warnInfoSlug);
	      $log.warn.apply($log, _toConsumableArray(args));
	    }
	  };
	}
	formlyWarn.$inject = ["formlyConfig", "formlyErrorAndWarningsUrlPrefix", "$log"];
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// some versions of angular don't export the angular module properly,
	// so we get it from window in this case.
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var angular = __webpack_require__(4);

	/* istanbul ignore next */
	if (!angular.version) {
	  angular = window.angular;
	}
	exports['default'] = angular;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angularFix = __webpack_require__(3);

	var _angularFix2 = _interopRequireDefault(_angularFix);

	var _apiCheck = __webpack_require__(6);

	var _apiCheck2 = _interopRequireDefault(_apiCheck);

	var apiCheck = (0, _apiCheck2['default'])({
	  output: {
	    prefix: 'angular-formly:',
	    docsBaseUrl: __webpack_require__(7)
	  }
	});

	function shapeRequiredIfNot(otherProps, propChecker) {
	  if (!_angularFix2['default'].isArray(otherProps)) {
	    otherProps = [otherProps];
	  }
	  var type = 'specified if these are not specified: `' + otherProps.join(', ') + '` (otherwise it\'s optional)';
	  function shapeRequiredIfNotDefinition(prop, propName, location, obj) {
	    var propExists = obj && obj.hasOwnProperty(propName);
	    var otherPropsExist = otherProps.some(function (otherProp) {
	      return obj && obj.hasOwnProperty(otherProp);
	    });
	    if (!otherPropsExist && !propExists) {
	      return apiCheck.utils.getError(propName, location, type);
	    } else if (propExists) {
	      return propChecker(prop, propName, location, obj);
	    }
	  }
	  shapeRequiredIfNotDefinition.type = type;
	  return apiCheck.utils.checkerHelpers.setupChecker(shapeRequiredIfNotDefinition);
	}

	function nullable(checker) {
	  return apiCheck.oneOfType([apiCheck.oneOf([null]), checker]);
	}

	var formlyExpression = apiCheck.oneOfType([apiCheck.string, apiCheck.func]);
	var specifyWrapperType = nullable(apiCheck.typeOrArrayOf(apiCheck.string));

	var apiCheckProperty = apiCheck.objectOf(apiCheck.func);

	var apiCheckInstanceProperty = apiCheck.shape.onlyIf('apiCheck', apiCheck.func.withProperties({
	  warn: apiCheck.func,
	  'throw': apiCheck.func,
	  shape: apiCheck.func
	}));

	var apiCheckFunctionProperty = apiCheck.shape.onlyIf('apiCheck', apiCheck.oneOf(['throw', 'warn']));

	var formlyWrapperType = apiCheck.shape({
	  name: shapeRequiredIfNot('types', apiCheck.string).optional,
	  template: apiCheck.shape.ifNot('templateUrl', apiCheck.string).optional,
	  templateUrl: apiCheck.shape.ifNot('template', apiCheck.string).optional,
	  types: apiCheck.typeOrArrayOf(apiCheck.string).optional,
	  overwriteOk: apiCheck.bool.optional,
	  validateOptions: apiCheck.func.optional,
	  apiCheck: apiCheckProperty.optional,
	  apiCheckInstance: apiCheckInstanceProperty.optional,
	  apiCheckFunction: apiCheckFunctionProperty.optional,
	  apiCheckOptions: apiCheck.object.optional
	}).strict;

	var expressionProperties = apiCheck.objectOf(apiCheck.oneOfType([formlyExpression, apiCheck.shape({
	  expression: formlyExpression,
	  message: formlyExpression.optional
	}).strict]));

	var modelChecker = apiCheck.oneOfType([apiCheck.string, apiCheck.object]);

	var templateManipulators = nullable(apiCheck.shape({
	  preWrapper: nullable(apiCheck.arrayOf(apiCheck.func)).optional,
	  postWrapper: nullable(apiCheck.arrayOf(apiCheck.func)).optional
	}).strict);

	var fieldOptionsApiShape = {
	  $$hashKey: apiCheck.any.optional,
	  type: apiCheck.shape.ifNot(['template', 'templateUrl'], apiCheck.string).optional,
	  template: apiCheck.shape.ifNot(['type', 'templateUrl'], apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
	  templateUrl: apiCheck.shape.ifNot(['type', 'template'], apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
	  key: apiCheck.oneOfType([apiCheck.string, apiCheck.number]).optional,
	  model: modelChecker.optional,
	  className: apiCheck.string.optional,
	  id: apiCheck.string.optional,
	  name: apiCheck.string.optional,
	  expressionProperties: expressionProperties.optional,
	  data: apiCheck.object.optional,
	  templateOptions: apiCheck.object.optional,
	  wrapper: specifyWrapperType.optional,
	  modelOptions: apiCheck.shape({
	    updateOn: apiCheck.string.optional,
	    debounce: apiCheck.oneOfType([apiCheck.objectOf(apiCheck.number), apiCheck.number]).optional,
	    allowInvalid: apiCheck.bool.optional,
	    getterSetter: apiCheck.bool.optional,
	    timezone: apiCheck.string.optional
	  }).optional,
	  watcher: apiCheck.typeOrArrayOf(apiCheck.shape({
	    expression: formlyExpression.optional,
	    listener: formlyExpression
	  })).optional,
	  validators: apiCheck.objectOf(apiCheck.oneOfType([formlyExpression, apiCheck.shape({
	    expression: formlyExpression,
	    message: formlyExpression.optional
	  }).strict])).optional,
	  noFormControl: apiCheck.bool.optional,
	  hide: apiCheck.bool.optional,
	  hideExpression: formlyExpression.optional,
	  ngModelAttrs: apiCheck.objectOf(apiCheck.shape({
	    expression: apiCheck.shape.ifNot(['value', 'attribute', 'bound'], apiCheck.any).optional,
	    value: apiCheck.shape.ifNot('expression', apiCheck.any).optional,
	    attribute: apiCheck.shape.ifNot('expression', apiCheck.any).optional,
	    bound: apiCheck.shape.ifNot('expression', apiCheck.any).optional
	  }).strict).optional,
	  elementAttributes: apiCheck.objectOf(apiCheck.string).optional,
	  optionsTypes: apiCheck.typeOrArrayOf(apiCheck.string).optional,
	  link: apiCheck.func.optional,
	  controller: apiCheck.oneOfType([apiCheck.string, apiCheck.func, apiCheck.array]).optional,
	  validation: apiCheck.shape({
	    show: nullable(apiCheck.bool).optional,
	    messages: apiCheck.objectOf(formlyExpression).optional,
	    errorExistsAndShouldBeVisible: apiCheck.bool.optional
	  }).optional,
	  formControl: apiCheck.typeOrArrayOf(apiCheck.object).optional,
	  value: apiCheck.func.optional,
	  runExpressions: apiCheck.func.optional,
	  templateManipulators: templateManipulators.optional,
	  resetModel: apiCheck.func.optional,
	  updateInitialValue: apiCheck.func.optional,
	  initialValue: apiCheck.any.optional,
	  defaultValue: apiCheck.any.optional
	};

	var formlyFieldOptions = apiCheck.shape(fieldOptionsApiShape).strict;

	var formOptionsApi = apiCheck.shape({
	  formState: apiCheck.object.optional,
	  resetModel: apiCheck.func.optional,
	  updateInitialValue: apiCheck.func.optional,
	  removeChromeAutoComplete: apiCheck.bool.optional,
	  templateManipulators: templateManipulators.optional,
	  wrapper: specifyWrapperType.optional,
	  fieldTransform: apiCheck.func.optional,
	  data: apiCheck.object.optional
	}).strict;

	var fieldGroup = apiCheck.shape({
	  $$hashKey: apiCheck.any.optional,
	  key: apiCheck.oneOfType([apiCheck.string, apiCheck.number]).optional,
	  // danger. Nested field groups wont get api-checked...
	  fieldGroup: apiCheck.arrayOf(apiCheck.oneOfType([formlyFieldOptions, apiCheck.object])),
	  className: apiCheck.string.optional,
	  options: formOptionsApi.optional,
	  hide: apiCheck.bool.optional,
	  hideExpression: formlyExpression.optional,
	  data: apiCheck.object.optional,
	  model: modelChecker.optional,
	  form: apiCheck.object.optional,
	  elementAttributes: apiCheck.objectOf(apiCheck.string).optional
	}).strict;

	var typeOptionsDefaultOptions = _angularFix2['default'].copy(fieldOptionsApiShape);
	typeOptionsDefaultOptions.key = apiCheck.string.optional;

	var formlyTypeOptions = apiCheck.shape({
	  name: apiCheck.string,
	  template: apiCheck.shape.ifNot('templateUrl', apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
	  templateUrl: apiCheck.shape.ifNot('template', apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
	  controller: apiCheck.oneOfType([apiCheck.func, apiCheck.string, apiCheck.array]).optional,
	  link: apiCheck.func.optional,
	  defaultOptions: apiCheck.oneOfType([apiCheck.func, apiCheck.shape(typeOptionsDefaultOptions)]).optional,
	  'extends': apiCheck.string.optional,
	  wrapper: specifyWrapperType.optional,
	  data: apiCheck.object.optional,
	  validateOptions: apiCheck.func.optional,
	  apiCheck: apiCheckProperty.optional,
	  apiCheckInstance: apiCheckInstanceProperty.optional,
	  apiCheckFunction: apiCheckFunctionProperty.optional,
	  apiCheckOptions: apiCheck.object.optional,
	  overwriteOk: apiCheck.bool.optional
	}).strict;

	_angularFix2['default'].extend(apiCheck, {
	  formlyTypeOptions: formlyTypeOptions, formlyFieldOptions: formlyFieldOptions, formlyExpression: formlyExpression, formlyWrapperType: formlyWrapperType, fieldGroup: fieldGroup, formOptionsApi: formOptionsApi
	});

	exports['default'] = apiCheck;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = "https://github.com/formly-js/angular-formly/blob/" + ("6.16.1") + "/other/ERRORS_AND_WARNINGS.md#";
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angularFix = __webpack_require__(3);

	var _angularFix2 = _interopRequireDefault(_angularFix);

	exports['default'] = formlyUsability;

	// @ngInject
	function formlyUsability(formlyApiCheck, formlyErrorAndWarningsUrlPrefix) {
	  var _this = this;

	  _angularFix2['default'].extend(this, {
	    getFormlyError: getFormlyError,
	    getFieldError: getFieldError,
	    checkWrapper: checkWrapper,
	    checkWrapperTemplate: checkWrapperTemplate,
	    getErrorMessage: getErrorMessage,
	    $get: function $get() {
	      return _this;
	    }
	  });

	  function getFieldError(errorInfoSlug, message, field) {
	    if (arguments.length < 3) {
	      field = message;
	      message = errorInfoSlug;
	      errorInfoSlug = null;
	    }
	    return new Error(getErrorMessage(errorInfoSlug, message) + (' Field definition: ' + _angularFix2['default'].toJson(field)));
	  }

	  function getFormlyError(errorInfoSlug, message) {
	    if (!message) {
	      message = errorInfoSlug;
	      errorInfoSlug = null;
	    }
	    return new Error(getErrorMessage(errorInfoSlug, message));
	  }

	  function getErrorMessage(errorInfoSlug, message) {
	    var url = '';
	    if (errorInfoSlug !== null) {
	      url = '' + formlyErrorAndWarningsUrlPrefix + '' + errorInfoSlug;
	    }
	    return 'Formly Error: ' + message + '. ' + url;
	  }

	  function checkWrapper(wrapper) {
	    formlyApiCheck['throw'](formlyApiCheck.formlyWrapperType, wrapper, {
	      prefix: 'formlyConfig.setWrapper',
	      urlSuffix: 'setwrapper-validation-failed'
	    });
	  }

	  function checkWrapperTemplate(template, additionalInfo) {
	    var formlyTransclude = '<formly-transclude></formly-transclude>';
	    if (template.indexOf(formlyTransclude) === -1) {
	      throw getFormlyError('Template wrapper templates must use "' + formlyTransclude + '" somewhere in them. ' + ('This one does not have "<formly-transclude></formly-transclude>" in it: ' + template) + '\n' + ('Additional information: ' + JSON.stringify(additionalInfo)));
	    }
	  }
	}
	formlyUsability.$inject = ["formlyApiCheck", "formlyErrorAndWarningsUrlPrefix"];
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angularFix = __webpack_require__(3);

	var _angularFix2 = _interopRequireDefault(_angularFix);

	var _otherUtils = __webpack_require__(10);

	var _otherUtils2 = _interopRequireDefault(_otherUtils);

	exports['default'] = formlyConfig;

	// @ngInject
	function formlyConfig(formlyUsabilityProvider, formlyApiCheck) {
	  var _this2 = this;

	  var typeMap = {};
	  var templateWrappersMap = {};
	  var defaultWrapperName = 'default';
	  var _this = this;
	  var getError = formlyUsabilityProvider.getFormlyError;

	  _angularFix2['default'].extend(this, {
	    setType: setType,
	    getType: getType,
	    setWrapper: setWrapper,
	    getWrapper: getWrapper,
	    getWrapperByType: getWrapperByType,
	    removeWrapperByName: removeWrapperByName,
	    removeWrappersForType: removeWrappersForType,
	    disableWarnings: false,
	    extras: {
	      disableNgModelAttrsManipulator: false,
	      ngModelAttrsManipulatorPreferUnbound: false,
	      removeChromeAutoComplete: false,
	      defaultHideDirective: 'ng-if',
	      getFieldId: null
	    },
	    templateManipulators: {
	      preWrapper: [],
	      postWrapper: []
	    },
	    $get: function $get() {
	      return _this2;
	    }
	  });

	  function setType(options) {
	    if (_angularFix2['default'].isArray(options)) {
	      _angularFix2['default'].forEach(options, setType);
	    } else if (_angularFix2['default'].isObject(options)) {
	      checkType(options);
	      if (options['extends']) {
	        extendTypeOptions(options);
	      }
	      typeMap[options.name] = options;
	    } else {
	      throw getError('You must provide an object or array for setType. You provided: ' + JSON.stringify(arguments));
	    }
	  }

	  function checkType(options) {
	    formlyApiCheck['throw'](formlyApiCheck.formlyTypeOptions, options, {
	      prefix: 'formlyConfig.setType',
	      url: 'settype-validation-failed'
	    });
	    if (!options.overwriteOk) {
	      checkOverwrite(options.name, typeMap, options, 'types');
	    } else {
	      options.overwriteOk = undefined;
	    }
	  }

	  function extendTypeOptions(options) {
	    var extendsType = getType(options['extends'], true, options);
	    extendTypeControllerFunction(options, extendsType);
	    extendTypeLinkFunction(options, extendsType);
	    extendTypeValidateOptionsFunction(options, extendsType);
	    extendTypeDefaultOptions(options, extendsType);
	    _otherUtils2['default'].reverseDeepMerge(options, extendsType);
	    extendTemplate(options, extendsType);
	  }

	  function extendTemplate(options, extendsType) {
	    if (options.template && extendsType.templateUrl) {
	      delete options.templateUrl;
	    } else if (options.templateUrl && extendsType.template) {
	      delete options.template;
	    }
	  }

	  function extendTypeControllerFunction(options, extendsType) {
	    var extendsCtrl = extendsType.controller;
	    if (!_angularFix2['default'].isDefined(extendsCtrl)) {
	      return;
	    }
	    var optionsCtrl = options.controller;
	    if (_angularFix2['default'].isDefined(optionsCtrl)) {
	      options.controller = function ($scope, $controller) {
	        $controller(extendsCtrl, { $scope: $scope });
	        $controller(optionsCtrl, { $scope: $scope });
	      };
	      options.controller.$inject = ['$scope', '$controller'];
	    } else {
	      options.controller = extendsCtrl;
	    }
	  }

	  function extendTypeLinkFunction(options, extendsType) {
	    var extendsFn = extendsType.link;
	    if (!_angularFix2['default'].isDefined(extendsFn)) {
	      return;
	    }
	    var optionsFn = options.link;
	    if (_angularFix2['default'].isDefined(optionsFn)) {
	      options.link = function () {
	        extendsFn.apply(undefined, arguments);
	        optionsFn.apply(undefined, arguments);
	      };
	    } else {
	      options.link = extendsFn;
	    }
	  }

	  function extendTypeValidateOptionsFunction(options, extendsType) {
	    var extendsFn = extendsType.validateOptions;
	    if (!_angularFix2['default'].isDefined(extendsFn)) {
	      return;
	    }
	    var optionsFn = options.validateOptions;
	    var originalDefaultOptions = options.defaultOptions;
	    if (_angularFix2['default'].isDefined(optionsFn)) {
	      options.validateOptions = function (opts) {
	        optionsFn(opts);
	        var mergedOptions = _angularFix2['default'].copy(opts);
	        var defaultOptions = originalDefaultOptions;
	        if (defaultOptions) {
	          if (_angularFix2['default'].isFunction(defaultOptions)) {
	            defaultOptions = defaultOptions(mergedOptions);
	          }
	          _otherUtils2['default'].reverseDeepMerge(mergedOptions, defaultOptions);
	        }
	        extendsFn(mergedOptions);
	      };
	    } else {
	      options.validateOptions = extendsFn;
	    }
	  }

	  function extendTypeDefaultOptions(options, extendsType) {
	    var extendsDO = extendsType.defaultOptions;
	    if (!_angularFix2['default'].isDefined(extendsDO)) {
	      return;
	    }
	    var optionsDO = options.defaultOptions;
	    var optionsDOIsFn = _angularFix2['default'].isFunction(optionsDO);
	    var extendsDOIsFn = _angularFix2['default'].isFunction(extendsDO);
	    if (extendsDOIsFn) {
	      options.defaultOptions = function defaultOptions(opts) {
	        var extendsDefaultOptions = extendsDO(opts);
	        var mergedDefaultOptions = {};
	        _otherUtils2['default'].reverseDeepMerge(mergedDefaultOptions, opts, extendsDefaultOptions);
	        var extenderOptionsDefaultOptions = optionsDO;
	        if (optionsDOIsFn) {
	          extenderOptionsDefaultOptions = extenderOptionsDefaultOptions(mergedDefaultOptions);
	        }
	        _otherUtils2['default'].reverseDeepMerge(extendsDefaultOptions, extenderOptionsDefaultOptions);
	        return extendsDefaultOptions;
	      };
	    } else if (optionsDOIsFn) {
	      options.defaultOptions = function defaultOptions(opts) {
	        var newDefaultOptions = {};
	        _otherUtils2['default'].reverseDeepMerge(newDefaultOptions, opts, extendsDO);
	        return optionsDO(newDefaultOptions);
	      };
	    }
	  }

	  function getType(name, throwError, errorContext) {
	    if (!name) {
	      return undefined;
	    }
	    var type = typeMap[name];
	    if (!type && throwError === true) {
	      throw getError('There is no type by the name of "' + name + '": ' + JSON.stringify(errorContext));
	    } else {
	      return type;
	    }
	  }

	  function setWrapper(_x, _x2) {
	    var _again = true;

	    _function: while (_again) {
	      var options = _x,
	          name = _x2;
	      _again = false;

	      if (_angularFix2['default'].isArray(options)) {
	        return options.map(function (wrapperOptions) {
	          return setWrapper(wrapperOptions);
	        });
	      } else if (_angularFix2['default'].isObject(options)) {
	        options.types = getOptionsTypes(options);
	        options.name = getOptionsName(options, name);
	        checkWrapperAPI(options);
	        templateWrappersMap[options.name] = options;
	        return options;
	      } else if (_angularFix2['default'].isString(options)) {
	        _x = {
	          template: options,
	          name: name
	        };
	        _again = true;
	        continue _function;
	      }
	    }
	  }

	  function getOptionsTypes(options) {
	    if (_angularFix2['default'].isString(options.types)) {
	      return [options.types];
	    }
	    if (!_angularFix2['default'].isDefined(options.types)) {
	      return [];
	    } else {
	      return options.types;
	    }
	  }

	  function getOptionsName(options, name) {
	    return options.name || name || options.types.join(' ') || defaultWrapperName;
	  }

	  function checkWrapperAPI(options) {
	    formlyUsabilityProvider.checkWrapper(options);
	    if (options.template) {
	      formlyUsabilityProvider.checkWrapperTemplate(options.template, options);
	    }
	    if (!options.overwriteOk) {
	      checkOverwrite(options.name, templateWrappersMap, options, 'templateWrappers');
	    } else {
	      delete options.overwriteOk;
	    }
	    checkWrapperTypes(options);
	  }

	  function checkWrapperTypes(options) {
	    var shouldThrow = !_angularFix2['default'].isArray(options.types) || !options.types.every(_angularFix2['default'].isString);
	    if (shouldThrow) {
	      throw getError('Attempted to create a template wrapper with types that is not a string or an array of strings');
	    }
	  }

	  function checkOverwrite(property, object, newValue, objectName) {
	    if (object.hasOwnProperty(property)) {
	      warn(['Attempting to overwrite ' + property + ' on ' + objectName + ' which is currently', '' + JSON.stringify(object[property]) + ' with ' + JSON.stringify(newValue), 'To supress this warning, specify the property "overwriteOk: true"'].join(' '));
	    }
	  }

	  function getWrapper(name) {
	    return templateWrappersMap[name || defaultWrapperName];
	  }

	  function getWrapperByType(type) {
	    /* jshint maxcomplexity:6 */
	    var wrappers = [];
	    for (var name in templateWrappersMap) {
	      if (templateWrappersMap.hasOwnProperty(name)) {
	        if (templateWrappersMap[name].types && templateWrappersMap[name].types.indexOf(type) !== -1) {
	          wrappers.push(templateWrappersMap[name]);
	        }
	      }
	    }
	    return wrappers;
	  }

	  function removeWrapperByName(name) {
	    var wrapper = templateWrappersMap[name];
	    delete templateWrappersMap[name];
	    return wrapper;
	  }

	  function removeWrappersForType(type) {
	    var wrappers = getWrapperByType(type);
	    if (!wrappers) {
	      return undefined;
	    }
	    if (!_angularFix2['default'].isArray(wrappers)) {
	      return removeWrapperByName(wrappers.name);
	    } else {
	      wrappers.forEach(function (wrapper) {
	        return removeWrapperByName(wrapper.name);
	      });
	      return wrappers;
	    }
	  }

	  function warn() {
	    if (!_this.disableWarnings) {
	      /* eslint no-console:0 */
	      console.warn.apply(console, arguments);
	    }
	  }
	}
	formlyConfig.$inject = ["formlyUsabilityProvider", "formlyApiCheck"];
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angularFix = __webpack_require__(3);

	var _angularFix2 = _interopRequireDefault(_angularFix);

	exports['default'] = { formlyEval: formlyEval, getFieldId: getFieldId, reverseDeepMerge: reverseDeepMerge, findByNodeName: findByNodeName, arrayify: arrayify, extendFunction: extendFunction };

	function formlyEval(scope, expression, $modelValue, $viewValue, extraLocals) {
	  if (_angularFix2['default'].isFunction(expression)) {
	    return expression($viewValue, $modelValue, scope, extraLocals);
	  } else {
	    return scope.$eval(expression, _angularFix2['default'].extend({ $viewValue: $viewValue, $modelValue: $modelValue }, extraLocals));
	  }
	}

	function getFieldId(formId, options, index) {
	  if (options.id) {
	    return options.id;
	  }
	  var type = options.type;
	  if (!type && options.template) {
	    type = 'template';
	  } else if (!type && options.templateUrl) {
	    type = 'templateUrl';
	  }

	  return [formId, type, options.key, index].join('_');
	}

	function reverseDeepMerge(dest) {
	  _angularFix2['default'].forEach(arguments, function (src, index) {
	    if (!index) {
	      return;
	    }
	    _angularFix2['default'].forEach(src, function (val, prop) {
	      if (!_angularFix2['default'].isDefined(dest[prop])) {
	        dest[prop] = _angularFix2['default'].copy(val);
	      } else if (objAndSameType(dest[prop], val)) {
	        reverseDeepMerge(dest[prop], val);
	      }
	    });
	  });
	}

	function objAndSameType(obj1, obj2) {
	  return _angularFix2['default'].isObject(obj1) && _angularFix2['default'].isObject(obj2) && Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2);
	}

	// recurse down a node tree to find a node with matching nodeName, for custom tags jQuery.find doesn't work in IE8
	function findByNodeName(el, nodeName) {
	  if (!el.prop) {
	    // not a jQuery or jqLite object -> wrap it
	    el = _angularFix2['default'].element(el);
	  }

	  if (el.prop('nodeName') === nodeName.toUpperCase()) {
	    return el;
	  }

	  var c = el.children();
	  for (var i = 0; c && i < c.length; i++) {
	    var node = findByNodeName(c[i], nodeName);
	    if (node) {
	      return node;
	    }
	  }
	}

	function arrayify(obj) {
	  if (obj && !_angularFix2['default'].isArray(obj)) {
	    obj = [obj];
	  } else if (!obj) {
	    obj = [];
	  }
	  return obj;
	}

	function extendFunction() {
	  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
	    fns[_key] = arguments[_key];
	  }

	  return function extendedFunction() {
	    var args = arguments;
	    fns.forEach(function (fn) {
	      return fn.apply(null, args);
	    });
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = formlyValidationMessages;

	// @ngInject
	function formlyValidationMessages() {

	  var validationMessages = {
	    addTemplateOptionValueMessage: addTemplateOptionValueMessage,
	    addStringMessage: addStringMessage,
	    messages: {}
	  };

	  return validationMessages;

	  function addTemplateOptionValueMessage(name, prop, prefix, suffix, alternate) {
	    validationMessages.messages[name] = templateOptionValue(prop, prefix, suffix, alternate);
	  }

	  function addStringMessage(name, string) {
	    validationMessages.messages[name] = function () {
	      return string;
	    };
	  }

	  function templateOptionValue(prop, prefix, suffix, alternate) {
	    return function getValidationMessage(viewValue, modelValue, scope) {
	      if (scope.options.templateOptions[prop]) {
	        return "" + prefix + " " + scope.options.templateOptions[prop] + " " + suffix;
	      } else {
	        return alternate;
	      }
	    };
	  }
	}
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _otherUtils = __webpack_require__(10);

	var _otherUtils2 = _interopRequireDefault(_otherUtils);

	exports['default'] = formlyUtil;

	// @ngInject
	function formlyUtil() {
	  return _otherUtils2['default'];
	}
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angularFix = __webpack_require__(3);

	var _angularFix2 = _interopRequireDefault(_angularFix);

	exports['default'] = formlyCustomValidation;

	// @ngInject
	function formlyCustomValidation(formlyUtil, $q) {
	  return {
	    restrict: 'A',
	    require: 'ngModel',
	    link: function formlyCustomValidationLink(scope, el, attrs, ctrl) {
	      var opts = scope.options;
	      if (opts.validators) {
	        checkValidators(opts.validators);
	      }
	      opts.validation.messages = opts.validation.messages || {};
	      _angularFix2['default'].forEach(opts.validation.messages, function (message, key) {
	        opts.validation.messages[key] = function () {
	          return formlyUtil.formlyEval(scope, message, ctrl.$modelValue, ctrl.$viewValue);
	        };
	      });

	      var useNewValidatorsApi = ctrl.hasOwnProperty('$validators') && !attrs.hasOwnProperty('useParsers');
	      _angularFix2['default'].forEach(opts.validators, function addValidatorToPipeline(validator, name) {
	        var message = validator.message;
	        if (message) {
	          opts.validation.messages[name] = function () {
	            return formlyUtil.formlyEval(scope, message, ctrl.$modelValue, ctrl.$viewValue);
	          };
	        }
	        validator = _angularFix2['default'].isObject(validator) ? validator.expression : validator;
	        var isPossiblyAsync = !_angularFix2['default'].isString(validator);
	        if (useNewValidatorsApi) {
	          setupWithValidators();
	        } else {
	          setupWithParsers();
	        }

	        function setupWithValidators() {
	          var validatorCollection = isPossiblyAsync ? '$asyncValidators' : '$validators';
	          ctrl[validatorCollection][name] = function evalValidity(modelValue, viewValue) {
	            var value = formlyUtil.formlyEval(scope, validator, modelValue, viewValue);
	            if (isPossiblyAsync) {
	              return isPromiseLike(value) ? value : value ? $q.when(value) : $q.reject(value);
	            } else {
	              return value;
	            }
	          };
	        }

	        function setupWithParsers() {
	          var inFlightValidator = undefined;
	          ctrl.$parsers.unshift(function evalValidityOfParser(viewValue) {
	            var isValid = formlyUtil.formlyEval(scope, validator, ctrl.$modelValue, viewValue);
	            if (isPromiseLike(isValid)) {
	              ctrl.$pending = ctrl.$pending || {};
	              ctrl.$pending[name] = true;
	              inFlightValidator = isValid;
	              isValid.then(function () {
	                if (inFlightValidator === isValid) {
	                  ctrl.$setValidity(name, true);
	                }
	              })['catch'](function () {
	                if (inFlightValidator === isValid) {
	                  ctrl.$setValidity(name, false);
	                }
	              })['finally'](function () {
	                if (Object.keys(ctrl.$pending).length === 1) {
	                  delete ctrl.$pending;
	                } else {
	                  delete ctrl.$pending[name];
	                }
	              });
	            } else {
	              ctrl.$setValidity(name, isValid);
	            }
	            return viewValue;
	          });
	        }
	      });
	    }
	  };

	  function isPromiseLike(obj) {
	    return obj && _angularFix2['default'].isFunction(obj.then);
	  }

	  function checkValidators(validators) {
	    var allowedProperties = ['expression', 'message'];
	    var validatorsWithExtraProps = {};
	    _angularFix2['default'].forEach(validators, function (validator, name) {
	      if (_angularFix2['default'].isString(validator)) {
	        return;
	      }
	      var extraProps = [];
	      _angularFix2['default'].forEach(validator, function (v, key) {
	        if (allowedProperties.indexOf(key) === -1) {
	          extraProps.push(key);
	        }
	      });
	      if (extraProps.length) {
	        validatorsWithExtraProps[name] = extraProps;
	      }
	    });
	    if (Object.keys(validatorsWithExtraProps).length) {
	      throw new Error(['Validators are only allowed to be functions or objects that have ' + allowedProperties.join(', ') + '.', 'You provided some extra properties: ' + JSON.stringify(validatorsWithExtraProps)].join(' '));
	    }
	  }
	}
	formlyCustomValidation.$inject = ["formlyUtil", "$q"];
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angularFix = __webpack_require__(3);

	var _angularFix2 = _interopRequireDefault(_angularFix);

	exports['default'] = formlyField;

	/**
	 * @ngdoc directive
	 * @name formlyField
	 * @restrict AE
	 */
	// @ngInject
	function formlyField($http, $q, $compile, $templateCache, $interpolate, formlyConfig, formlyValidationMessages, formlyApiCheck, formlyUtil, formlyUsability, formlyWarn) {
	  var arrayify = formlyUtil.arrayify;

	  FormlyFieldController.$inject = ["$scope", "$timeout", "$parse", "$controller"];
	  return {
	    restrict: 'AE',
	    transclude: true,
	    scope: {
	      options: '=',
	      model: '=',
	      formId: '@', // TODO remove formId in a breaking release
	      index: '=?',
	      fields: '=?',
	      formState: '=?',
	      formOptions: '=?',
	      form: '=?' // TODO require form in a breaking release
	    },
	    controller: FormlyFieldController,
	    link: fieldLink
	  };

	  // @ngInject
	  function FormlyFieldController($scope, $timeout, $parse, $controller) {
	    /* eslint max-statements:[2, 31] */
	    if ($scope.options.fieldGroup) {
	      setupFieldGroup();
	      return;
	    }

	    var fieldType = getFieldType($scope.options);
	    simplifyLife($scope.options);
	    mergeFieldOptionsWithTypeDefaults($scope.options, fieldType);
	    extendOptionsWithDefaults($scope.options, $scope.index);
	    checkApi($scope.options);
	    // set field id to link labels and fields

	    // initalization
	    setFieldIdAndName();
	    setDefaultValue();
	    setInitialValue();
	    runExpressions();
	    addModelWatcher($scope, $scope.options);
	    addValidationMessages($scope.options);
	    invokeControllers($scope, $scope.options, fieldType);

	    // function definitions
	    function runExpressions() {
	      // must run on next tick to make sure that the current value is correct.
	      $timeout(function runExpressionsOnNextTick() {
	        var field = $scope.options;
	        var currentValue = valueGetterSetter();
	        _angularFix2['default'].forEach(field.expressionProperties, function runExpression(expression, prop) {
	          var setter = $parse(prop).assign;
	          var promise = $q.when(formlyUtil.formlyEval($scope, expression, currentValue, currentValue));
	          promise.then(function setFieldValue(value) {
	            setter(field, value);
	          });
	        });
	      });
	    }

	    function valueGetterSetter(newVal) {
	      if (!$scope.model || !$scope.options.key) {
	        return undefined;
	      }
	      if (_angularFix2['default'].isDefined(newVal)) {
	        $scope.model[$scope.options.key] = newVal;
	      }
	      return $scope.model[$scope.options.key];
	    }

	    function simplifyLife(options) {
	      // add a few empty objects (if they don't already exist) so you don't have to undefined check everywhere
	      formlyUtil.reverseDeepMerge(options, {
	        data: {},
	        templateOptions: {},
	        validation: {}
	      });
	      // create $scope.to so template authors can reference to instead of $scope.options.templateOptions
	      $scope.to = $scope.options.templateOptions;
	      $scope.formOptions = $scope.formOptions || {};
	    }

	    function setFieldIdAndName() {
	      if (_angularFix2['default'].isFunction(formlyConfig.extras.getFieldId)) {
	        $scope.id = formlyConfig.extras.getFieldId($scope.options, $scope.model, $scope);
	      } else {
	        var formName = $scope.form && $scope.form.$name || $scope.formId;
	        $scope.id = formlyUtil.getFieldId(formName, $scope.options, $scope.index);
	      }
	      $scope.options.id = $scope.id;
	      $scope.name = $scope.options.name || $scope.options.id;
	      $scope.options.name = $scope.name;
	    }

	    function setDefaultValue() {
	      if (_angularFix2['default'].isDefined($scope.options.defaultValue) && !_angularFix2['default'].isDefined($scope.model[$scope.options.key])) {
	        $scope.model[$scope.options.key] = $scope.options.defaultValue;
	      }
	    }

	    function setInitialValue() {
	      $scope.options.initialValue = $scope.model && $scope.model[$scope.options.key];
	    }

	    function mergeFieldOptionsWithTypeDefaults(options, type) {
	      if (type) {
	        mergeOptions(options, type.defaultOptions);
	      }
	      var properOrder = arrayify(options.optionsTypes).reverse(); // so the right things are overridden
	      _angularFix2['default'].forEach(properOrder, function (typeName) {
	        mergeOptions(options, formlyConfig.getType(typeName, true, options).defaultOptions);
	      });
	    }

	    function mergeOptions(options, extraOptions) {
	      if (extraOptions) {
	        if (_angularFix2['default'].isFunction(extraOptions)) {
	          extraOptions = extraOptions(options);
	        }
	        formlyUtil.reverseDeepMerge(options, extraOptions);
	      }
	    }

	    function extendOptionsWithDefaults(options, index) {
	      var key = options.key || index || 0;
	      _angularFix2['default'].extend(options, {
	        // attach the key in case the formly-field directive is used directly
	        key: key,
	        value: valueGetterSetter,
	        runExpressions: runExpressions,
	        resetModel: resetModel,
	        updateInitialValue: updateInitialValue
	      });
	    }

	    // initialization functions
	    function addModelWatcher(scope, options) {
	      if (options.model) {
	        scope.$watch('options.model', runExpressions, true);
	      }
	    }

	    function resetModel() {
	      $scope.model[$scope.options.key] = $scope.options.initialValue;
	      if ($scope.options.formControl) {
	        if (_angularFix2['default'].isArray($scope.options.formControl)) {
	          _angularFix2['default'].forEach($scope.options.formControl, function (formControl) {
	            resetFormControl(formControl, true);
	          });
	        } else {
	          resetFormControl($scope.options.formControl);
	        }
	      }
	    }

	    function resetFormControl(formControl, isMultiNgModel) {
	      if (!isMultiNgModel) {
	        formControl.$setViewValue($scope.model[$scope.options.key]);
	      }

	      formControl.$render();
	      formControl.$setUntouched();
	      formControl.$setPristine();

	      // To prevent breaking change requiring a digest to reset $viewModel
	      if (!$scope.$root.$$phase) {
	        $scope.$digest();
	      }
	    }

	    function updateInitialValue() {
	      $scope.options.initialValue = $scope.model[$scope.options.key];
	    }

	    function addValidationMessages(options) {
	      options.validation.messages = options.validation.messages || {};
	      _angularFix2['default'].forEach(formlyValidationMessages.messages, function createFunctionForMessage(expression, name) {
	        if (!options.validation.messages[name]) {
	          options.validation.messages[name] = function evaluateMessage(viewValue, modelValue, scope) {
	            return formlyUtil.formlyEval(scope, expression, modelValue, viewValue);
	          };
	        }
	      });
	    }

	    function invokeControllers(scope) {
	      var options = arguments[1] === undefined ? {} : arguments[1];
	      var type = arguments[2] === undefined ? {} : arguments[2];

	      _angularFix2['default'].forEach([type.controller, options.controller], function (controller) {
	        if (controller) {
	          $controller(controller, { $scope: scope });
	        }
	      });
	    }

	    function setupFieldGroup() {
	      $scope.options.options = $scope.options.options || {};
	      $scope.options.options.formState = $scope.formState;
	    }
	  }

	  // link function
	  function fieldLink(scope, el) {
	    if (scope.options.fieldGroup) {
	      setFieldGroupTemplate();
	      return;
	    }

	    addAttributes();
	    addClasses();

	    var type = getFieldType(scope.options);
	    var args = arguments;
	    var thusly = this;
	    var fieldCount = 0;
	    var fieldManipulators = getManipulators(scope.options, scope.formOptions);
	    getFieldTemplate(scope.options).then(runManipulators(fieldManipulators.preWrapper)).then(transcludeInWrappers(scope.options, scope.formOptions)).then(runManipulators(fieldManipulators.postWrapper)).then(setElementTemplate).then(watchFormControl).then(callLinkFunctions)['catch'](function (error) {
	      formlyWarn('there-was-a-problem-setting-the-template-for-this-field', 'There was a problem setting the template for this field ', scope.options, error);
	    });

	    function setFieldGroupTemplate() {
	      checkFieldGroupApi(scope.options);
	      el.addClass('formly-field-group');
	      var extraAttributes = '';
	      if (scope.options.elementAttributes) {
	        extraAttributes = Object.keys(scope.options.elementAttributes).map(function (key) {
	          return '' + key + '="' + scope.options.elementAttributes[key] + '"';
	        }).join(' ');
	      }
	      var modelValue = 'model';
	      scope.options.form = scope.form;
	      if (scope.options.key) {
	        modelValue = 'model[\'' + scope.options.key + '\']';
	      }
	      setElementTemplate('\n          <formly-form model="' + modelValue + '"\n                       fields="options.fieldGroup"\n                       options="options.options"\n                       form="options.form"\n                       class="' + scope.options.className + '"\n                       ' + extraAttributes + '\n                       is-field-group>\n          </formly-form>\n        ');
	    }

	    function addAttributes() {
	      if (scope.options.elementAttributes) {
	        el.attr(scope.options.elementAttributes);
	      }
	    }

	    function addClasses() {
	      if (scope.options.className) {
	        el.addClass(scope.options.className);
	      }
	      if (scope.options.type) {
	        el.addClass('formly-field-' + scope.options.type);
	      }
	    }

	    function setElementTemplate(templateString) {
	      el.html(asHtml(templateString));
	      $compile(el.contents())(scope);
	      return templateString;
	    }

	    function watchFormControl(templateString) {
	      var stopWatchingShowError = _angularFix2['default'].noop;
	      if (scope.options.noFormControl) {
	        return;
	      }
	      var templateEl = _angularFix2['default'].element('<div>' + templateString + '</div>');
	      var ngModelNodes = templateEl[0].querySelectorAll('[ng-model],[data-ng-model]');

	      if (ngModelNodes) {
	        _angularFix2['default'].forEach(ngModelNodes, function (ngModelNode) {
	          fieldCount++;
	          watchFieldNameOrExistence(ngModelNode.getAttribute('name'));
	        });
	      }

	      function watchFieldNameOrExistence(name) {
	        var nameExpressionRegex = /\{\{(.*?)}}/;
	        var nameExpression = nameExpressionRegex.exec(name);
	        if (nameExpression) {
	          name = $interpolate(name)(scope);
	        }
	        watchFieldExistence(name);
	      }

	      function watchFieldExistence(name) {
	        scope.$watch('form["' + name + '"]', function formControlChange(formControl) {
	          if (formControl) {
	            if (fieldCount > 1) {
	              if (!scope.options.formControl) {
	                scope.options.formControl = [];
	              }
	              scope.options.formControl.push(formControl);
	            } else {
	              scope.options.formControl = formControl;
	            }
	            scope.fc = scope.options.formControl; // shortcut for template authors
	            stopWatchingShowError();
	            addShowMessagesWatcher();
	          }
	        });
	      }

	      function addShowMessagesWatcher() {
	        stopWatchingShowError = scope.$watch(function watchShowValidationChange() {
	          var customExpression = formlyConfig.extras.errorExistsAndShouldBeVisibleExpression;
	          var options = scope.options;
	          var fc = scope.fc;

	          if (!fc.$invalid) {
	            return false;
	          } else if (typeof options.validation.show === 'boolean') {
	            return options.validation.show;
	          } else if (customExpression) {
	            return formlyUtil.formlyEval(scope, customExpression, fc.$modelValue, fc.$viewValue);
	          } else {
	            var noTouchedButDirty = _angularFix2['default'].isUndefined(fc.$touched) && fc.$dirty;
	            return scope.fc.$touched || noTouchedButDirty;
	          }
	        }, function onShowValidationChange(show) {
	          scope.options.validation.errorExistsAndShouldBeVisible = show;
	          scope.showError = show; // shortcut for template authors
	        });
	      }
	    }

	    function callLinkFunctions() {
	      if (type && type.link) {
	        type.link.apply(thusly, args);
	      }
	      if (scope.options.link) {
	        scope.options.link.apply(thusly, args);
	      }
	    }

	    function runManipulators(manipulators) {
	      return function runManipulatorsOnTemplate(templateToManipulate) {
	        var chain = $q.when(templateToManipulate);
	        _angularFix2['default'].forEach(manipulators, function (manipulator) {
	          chain = chain.then(function (template) {
	            return $q.when(manipulator(template, scope.options, scope)).then(function (newTemplate) {
	              return _angularFix2['default'].isString(newTemplate) ? newTemplate : asHtml(newTemplate);
	            });
	          });
	        });
	        return chain;
	      };
	    }
	  }

	  // sort-of stateless util functions
	  function asHtml(el) {
	    var wrapper = _angularFix2['default'].element('<a></a>');
	    return wrapper.append(el).html();
	  }

	  function getFieldType(options) {
	    return options.type && formlyConfig.getType(options.type);
	  }

	  function getManipulators(options, formOptions) {
	    var preWrapper = [];
	    var postWrapper = [];
	    addManipulators(options.templateManipulators);
	    addManipulators(formOptions.templateManipulators);
	    addManipulators(formlyConfig.templateManipulators);
	    return { preWrapper: preWrapper, postWrapper: postWrapper };

	    function addManipulators(manipulators) {
	      /* eslint-disable */ // it doesn't understand this :-(

	      var _ref = manipulators || {};

	      var _ref$preWrapper = _ref.preWrapper;
	      var pre = _ref$preWrapper === undefined ? [] : _ref$preWrapper;
	      var _ref$postWrapper = _ref.postWrapper;
	      var post = _ref$postWrapper === undefined ? [] : _ref$postWrapper;

	      preWrapper = preWrapper.concat(pre);
	      postWrapper = postWrapper.concat(post);
	      /* eslint-enable */
	    }
	  }

	  function getFieldTemplate(options) {
	    function fromOptionsOrType(key, fieldType) {
	      if (_angularFix2['default'].isDefined(options[key])) {
	        return options[key];
	      } else if (fieldType && _angularFix2['default'].isDefined(fieldType[key])) {
	        return fieldType[key];
	      }
	    }

	    var type = formlyConfig.getType(options.type, true, options);
	    var template = fromOptionsOrType('template', type);
	    var templateUrl = fromOptionsOrType('templateUrl', type);
	    if (_angularFix2['default'].isUndefined(template) && !templateUrl) {
	      throw formlyUsability.getFieldError('type-type-has-no-template', 'Type \'' + options.type + '\' has not template. On element:', options);
	    }

	    return getTemplate(templateUrl || template, _angularFix2['default'].isUndefined(template), options);
	  }

	  function getTemplate(template, isUrl, options) {
	    var templatePromise = undefined;
	    if (_angularFix2['default'].isFunction(template)) {
	      templatePromise = $q.when(template(options));
	    } else {
	      templatePromise = $q.when(template);
	    }

	    if (!isUrl) {
	      return templatePromise;
	    } else {
	      var _ret = (function () {
	        var httpOptions = { cache: $templateCache };
	        return {
	          v: templatePromise.then(function (url) {
	            return $http.get(url, httpOptions);
	          }).then(function (response) {
	            return response.data;
	          })['catch'](function handleErrorGettingATemplate(error) {
	            formlyWarn('problem-loading-template-for-templateurl', 'Problem loading template for ' + template, error);
	          })
	        };
	      })();

	      if (typeof _ret === 'object') return _ret.v;
	    }
	  }

	  function transcludeInWrappers(options, formOptions) {
	    var wrapper = getWrapperOption(options, formOptions);

	    return function transcludeTemplate(template) {
	      if (!wrapper.length) {
	        return $q.when(template);
	      }

	      wrapper.forEach(function (aWrapper) {
	        formlyUsability.checkWrapper(aWrapper, options);
	        aWrapper.validateOptions && aWrapper.validateOptions(options);
	        runApiCheck(aWrapper, options);
	      });
	      var promises = wrapper.map(function (w) {
	        return getTemplate(w.template || w.templateUrl, !w.template);
	      });
	      return $q.all(promises).then(function (wrappersTemplates) {
	        wrappersTemplates.forEach(function (wrapperTemplate, index) {
	          formlyUsability.checkWrapperTemplate(wrapperTemplate, wrapper[index]);
	        });
	        wrappersTemplates.reverse(); // wrapper 0 is wrapped in wrapper 1 and so on...
	        var totalWrapper = wrappersTemplates.shift();
	        wrappersTemplates.forEach(function (wrapperTemplate) {
	          totalWrapper = doTransclusion(totalWrapper, wrapperTemplate);
	        });
	        return doTransclusion(totalWrapper, template);
	      });
	    };
	  }

	  function doTransclusion(wrapper, template) {
	    var superWrapper = _angularFix2['default'].element('<a></a>'); // this allows people not have to have a single root in wrappers
	    superWrapper.append(wrapper);
	    var transcludeEl = superWrapper.find('formly-transclude');
	    if (!transcludeEl.length) {
	      // try it using our custom find function
	      transcludeEl = formlyUtil.findByNodeName(superWrapper, 'formly-transclude');
	    }
	    transcludeEl.replaceWith(template);
	    return superWrapper.html();
	  }

	  function getWrapperOption(options, formOptions) {
	    /* eslint complexity:[6, 2] */
	    var wrapper = options.wrapper;
	    // explicit null means no wrapper
	    if (wrapper === null) {
	      return [];
	    }

	    // nothing specified means use the default wrapper for the type
	    if (!wrapper) {
	      // get all wrappers that specify they apply to this type
	      wrapper = arrayify(formlyConfig.getWrapperByType(options.type));
	    } else {
	      wrapper = arrayify(wrapper).map(formlyConfig.getWrapper);
	    }

	    // get all wrappers for that the type specified that it uses.
	    var type = formlyConfig.getType(options.type, true, options);
	    if (type && type.wrapper) {
	      var typeWrappers = arrayify(type.wrapper).map(formlyConfig.getWrapper);
	      wrapper = wrapper.concat(typeWrappers);
	    }

	    // add form wrappers
	    if (formOptions.wrapper) {
	      var formWrappers = arrayify(formOptions.wrapper).map(formlyConfig.getWrapper);
	      wrapper = wrapper.concat(formWrappers);
	    }

	    // add the default wrapper last
	    var defaultWrapper = formlyConfig.getWrapper();
	    if (defaultWrapper) {
	      wrapper.push(defaultWrapper);
	    }
	    return wrapper;
	  }

	  function checkApi(options) {
	    formlyApiCheck['throw'](formlyApiCheck.formlyFieldOptions, options, {
	      prefix: 'formly-field directive',
	      url: 'formly-field-directive-validation-failed'
	    });
	    // validate with the type
	    var type = options.type && formlyConfig.getType(options.type);
	    if (type) {
	      if (type.validateOptions) {
	        type.validateOptions(options);
	      }
	      runApiCheck(type, options);
	    }
	    if (options.expressionProperties && options.expressionProperties.hide) {
	      formlyWarn('dont-use-expressionproperties.hide-use-hideexpression-instead', 'You have specified `hide` in `expressionProperties`. Use `hideExpression` instead', options);
	    }
	  }

	  function checkFieldGroupApi(options) {
	    formlyApiCheck['throw'](formlyApiCheck.fieldGroup, options, {
	      prefix: 'formly-field directive',
	      url: 'formly-field-directive-validation-failed'
	    });
	  }

	  function runApiCheck(_ref2, options) {
	    var apiCheck = _ref2.apiCheck;
	    var apiCheckInstance = _ref2.apiCheckInstance;
	    var apiCheckFunction = _ref2.apiCheckFunction;
	    var apiCheckOptions = _ref2.apiCheckOptions;

	    if (!apiCheck) {
	      return;
	    }
	    var instance = apiCheckInstance || formlyApiCheck;
	    var fn = apiCheckFunction || 'warn';
	    var shape = instance.shape(apiCheck);
	    instance[fn](shape, options, apiCheckOptions || {
	      prefix: 'formly-field ' + name,
	      url: formlyApiCheck.config.output.docsBaseUrl + 'formly-field-type-apicheck-failed'
	    });
	  }
	}
	formlyField.$inject = ["$http", "$q", "$compile", "$templateCache", "$interpolate", "formlyConfig", "formlyValidationMessages", "formlyApiCheck", "formlyUtil", "formlyUsability", "formlyWarn"];
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = formlyFocus;

	// @ngInject
	function formlyFocus($timeout, $document) {
	  return {
	    restrict: 'A',
	    link: function formlyFocusLink(scope, element, attrs) {
	      var previousEl = null;
	      var el = element[0];
	      var doc = $document[0];
	      attrs.$observe('formlyFocus', function respondToFocusExpressionChange(value) {
	        if (value === 'true') {
	          $timeout(function setElementFocus() {
	            previousEl = doc.activeElement;
	            el.focus();
	          }, ~ ~attrs.focusWait);
	        } else if (value === 'false') {
	          if (doc.activeElement === el) {
	            el.blur();
	            if (attrs.hasOwnProperty('refocus') && previousEl) {
	              previousEl.focus();
	            }
	          }
	        }
	      });
	    }
	  };
	}
	formlyFocus.$inject = ["$timeout", "$document"];
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _slice = Array.prototype.slice;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var _angularFix = __webpack_require__(3);

	var _angularFix2 = _interopRequireDefault(_angularFix);

	exports['default'] = formlyForm;

	/**
	 * @ngdoc directive
	 * @name formlyForm
	 * @restrict E
	 */
	// @ngInject
	function formlyForm(formlyUsability, formlyWarn, $parse, formlyConfig, $interpolate) {
	  var currentFormId = 1;
	  FormlyFormController.$inject = ["$scope", "formlyApiCheck", "formlyUtil"];
	  return {
	    restrict: 'E',
	    template: formlyFormGetTemplate,
	    replace: true,
	    transclude: true,
	    scope: {
	      fields: '=',
	      model: '=',
	      form: '=?',
	      options: '=?'
	    },
	    controller: FormlyFormController,
	    link: formlyFormLink
	  };

	  function formlyFormGetTemplate(el, attrs) {
	    var rootEl = getRootEl();
	    var fieldRootEl = getFieldRootEl();
	    var formId = 'formly_' + currentFormId++;
	    var parentFormAttributes = '';
	    if (attrs.hasOwnProperty('isFieldGroup') && el.parent().parent().hasClass('formly')) {
	      parentFormAttributes = copyAttributes(el.parent().parent()[0].attributes);
	    }
	    return '\n        <' + rootEl + ' class="formly"\n                 name="' + getFormName() + '"\n                 role="form" ' + parentFormAttributes + '>\n          <' + fieldRootEl + ' formly-field\n               ng-repeat="field in fields ' + getTrackBy() + '"\n               ' + getHideDirective() + '="!field.hide"\n               class="formly-field"\n               options="field"\n               model="field.model || model"\n               fields="fields"\n               form="theFormlyForm"\n               form-id="' + getFormName() + '"\n               form-state="options.formState"\n               form-options="options"\n               index="$index">\n          </' + fieldRootEl + '>\n          <div ng-transclude></div>\n        </' + rootEl + '>\n      ';

	    function getRootEl() {
	      return attrs.rootEl || 'ng-form';
	    }

	    function getFieldRootEl() {
	      return attrs.fieldRootEl || 'div';
	    }

	    function getHideDirective() {
	      return attrs.hideDirective || formlyConfig.extras.defaultHideDirective || 'ng-if';
	    }

	    function getTrackBy() {
	      if (!attrs.trackBy) {
	        return '';
	      } else {
	        return 'track by ' + attrs.trackBy;
	      }
	    }

	    function getFormName() {
	      var formName = formId;
	      var bindName = attrs.bindName;
	      if (bindName) {
	        if (_angularFix2['default'].version.minor < 3) {
	          throw formlyUsability.getFormlyError('bind-name attribute on formly-form not allowed in < angular 1.3');
	        }
	        // we can do a one-time binding here because we know we're in 1.3.x territory
	        formName = '' + $interpolate.startSymbol() + '::\'formly_\' + ' + bindName + '' + $interpolate.endSymbol();
	      }
	      return formName;
	    }

	    function copyAttributes(attributes) {
	      var excluded = ['model', 'form', 'fields', 'options', 'name', 'role', 'class', 'data-model', 'data-form', 'data-fields', 'data-options', 'data-name'];
	      var arrayAttrs = [];
	      _angularFix2['default'].forEach(attributes, function (_ref) {
	        var nodeName = _ref.nodeName;
	        var nodeValue = _ref.nodeValue;

	        if (nodeName !== 'undefined' && excluded.indexOf(nodeName) === -1) {
	          arrayAttrs.push('' + toKebabCase(nodeName) + '="' + nodeValue + '"');
	        }
	      });
	      return arrayAttrs.join(' ');
	    }
	  }

	  // @ngInject
	  function FormlyFormController($scope, formlyApiCheck, formlyUtil) {
	    setupOptions();
	    $scope.model = $scope.model || {};
	    setupFields();

	    // watch the model and evaluate watch expressions that depend on it.
	    $scope.$watch('model', onModelOrFormStateChange, true);
	    if ($scope.options.formState) {
	      $scope.$watch('options.formState', onModelOrFormStateChange, true);
	    }

	    function onModelOrFormStateChange() {
	      _angularFix2['default'].forEach($scope.fields, function runFieldExpressionProperties(field, index) {
	        /*jshint -W030 */
	        var model = field.model || $scope.model;
	        field.runExpressions && field.runExpressions(model);
	        if (field.hideExpression) {
	          // can't use hide with expressionProperties reliably
	          var val = model[field.key];
	          field.hide = evalCloseToFormlyExpression(field.hideExpression, val, field, index);
	        }
	      });
	    }

	    function setupFields() {
	      $scope.fields = $scope.fields || [];
	      var fieldTransform = $scope.options.fieldTransform || formlyConfig.extras.fieldTransform;

	      if (fieldTransform) {
	        $scope.fields = fieldTransform($scope.fields, $scope.model, $scope.options, $scope.form);
	        if (!$scope.fields) {
	          throw formlyUsability.getFormlyError('fieldTransform must return an array of fields');
	        }
	      }

	      _angularFix2['default'].forEach($scope.fields, initModel); // initializes the model property if set to 'formState'
	      _angularFix2['default'].forEach($scope.fields, attachKey); // attaches a key based on the index if a key isn't specified
	      _angularFix2['default'].forEach($scope.fields, setupWatchers); // setup watchers for all fields
	    }

	    function setupOptions() {
	      formlyApiCheck['throw']([formlyApiCheck.formOptionsApi.optional], [$scope.options], { prefix: 'formly-form options check' });
	      $scope.options = $scope.options || {};
	      $scope.options.formState = $scope.options.formState || {};

	      _angularFix2['default'].extend($scope.options, {
	        updateInitialValue: updateInitialValue,
	        resetModel: resetModel
	      });
	    }

	    function updateInitialValue() {
	      _angularFix2['default'].forEach($scope.fields, function (field) {
	        if (isFieldGroup(field) && field.options) {
	          field.options.updateInitialValue();
	        } else {
	          field.updateInitialValue();
	        }
	      });
	    }

	    function resetModel() {
	      _angularFix2['default'].forEach($scope.fields, function (field) {
	        if (isFieldGroup(field) && field.options) {
	          field.options.resetModel();
	        } else if (field.resetModel) {
	          field.resetModel();
	        }
	      });
	    }

	    function initModel(field) {
	      if (_angularFix2['default'].isString(field.model)) {
	        var expression = field.model;
	        var index = $scope.fields.indexOf(field);
	        field.model = evalCloseToFormlyExpression(expression, undefined, field, index);
	        if (!field.model) {
	          throw formlyUsability.getFieldError('field-model-must-be-initialized', 'Field model must be initialized. When specifying a model as a string for a field, the result of the' + ' expression must have been initialized ahead of time.', field);
	        }
	      }
	    }

	    function attachKey(field, index) {
	      if (!isFieldGroup(field)) {
	        field.key = field.key || index || 0;
	      }
	    }

	    function setupWatchers(field, index) {
	      if (isFieldGroup(field) || !_angularFix2['default'].isDefined(field.watcher)) {
	        return;
	      }
	      var watchers = field.watcher;
	      if (!_angularFix2['default'].isArray(watchers)) {
	        watchers = [watchers];
	      }
	      _angularFix2['default'].forEach(watchers, function setupWatcher(watcher) {
	        if (!_angularFix2['default'].isDefined(watcher.listener)) {
	          throw formlyUsability.getFieldError('all-field-watchers-must-have-a-listener', 'All field watchers must have a listener', field);
	        }
	        var watchExpression = getWatchExpression(watcher, field, index);
	        var watchListener = getWatchListener(watcher, field, index);

	        var type = watcher.type || '$watch';
	        watcher.stopWatching = $scope[type](watchExpression, watchListener, watcher.watchDeep);
	      });
	    }

	    function getWatchExpression(watcher, field, index) {
	      var watchExpression = watcher.expression || 'model[\'' + field.key + '\']';
	      if (_angularFix2['default'].isFunction(watchExpression)) {
	        // wrap the field's watch expression so we can call it with the field as the first arg
	        // and the stop function as the last arg as a helper
	        var originalExpression = watchExpression;
	        watchExpression = function formlyWatchExpression() {
	          var args = modifyArgs.apply(undefined, [watcher, index].concat(_slice.call(arguments)));
	          return originalExpression.apply(undefined, _toConsumableArray(args));
	        };
	        watchExpression.displayName = 'Formly Watch Expression for field for ' + field.key;
	      }
	      return watchExpression;
	    }

	    function getWatchListener(watcher, field, index) {
	      var watchListener = watcher.listener;
	      if (_angularFix2['default'].isFunction(watchListener)) {
	        // wrap the field's watch listener so we can call it with the field as the first arg
	        // and the stop function as the last arg as a helper
	        var originalListener = watchListener;
	        watchListener = function formlyWatchListener() {
	          var args = modifyArgs.apply(undefined, [watcher, index].concat(_slice.call(arguments)));
	          return originalListener.apply(undefined, _toConsumableArray(args));
	        };
	        watchListener.displayName = 'Formly Watch Listener for field for ' + field.key;
	      }
	      return watchListener;
	    }

	    function modifyArgs(watcher, index) {
	      for (var _len = arguments.length, originalArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        originalArgs[_key - 2] = arguments[_key];
	      }

	      return [$scope.fields[index]].concat(originalArgs, [watcher.stopWatching]);
	    }

	    function evalCloseToFormlyExpression(expression, val, field, index) {
	      var extraLocals = getFormlyFieldLikeLocals(field, index);
	      return formlyUtil.formlyEval($scope, expression, val, val, extraLocals);
	    }

	    function getFormlyFieldLikeLocals(field, index) {
	      // this makes it closer to what a regular formlyExpression would be
	      return {
	        options: field,
	        index: index,
	        formState: $scope.options.formState,
	        formId: $scope.formId
	      };
	    }
	  }

	  function formlyFormLink(scope, el, attrs) {
	    setFormController();
	    fixChromeAutocomplete();

	    function setFormController() {
	      var formId = attrs.name;
	      scope.formId = formId;
	      scope.theFormlyForm = scope[formId];
	      if (attrs.form) {
	        var getter = $parse(attrs.form);
	        var setter = getter.assign;
	        var parentForm = getter(scope.$parent);
	        if (parentForm) {
	          scope.theFormlyForm = parentForm;
	          if (scope[formId]) {
	            scope.theFormlyForm.$removeControl(scope[formId]);
	          }

	          // this next line is probably one of the more dangerous things that angular-formly does to improve the
	          // API for angular-formly forms. It ensures that the NgModelControllers inside of formly-form will be
	          // attached to the form that is passed to formly-form rather than the one that formly-form creates
	          // this is necessary because it's confusing to have a step between the form you pass in
	          // and the fields in that form. It also is because angular doesn't propagate properties like $submitted down
	          // to children forms :-( This line was added to solve this issue:
	          // https://github.com/formly-js/angular-formly/issues/287
	          // luckily, this is how the formController has been accessed by the NgModelController since angular 1.0.0
	          // so I expect it will remain this way for the life of angular 1.x
	          el.removeData('$formController');
	        } else {
	          setter(scope.$parent, scope[formId]);
	        }
	      }
	      if (!scope.theFormlyForm && !formlyConfig.disableWarnings) {
	        /* eslint no-console:0 */
	        formlyWarn('formly-form-has-no-formcontroller', 'Your formly-form does not have a `form` property. Many functions of the form (like validation) may not work', el, scope);
	      }
	    }

	    /**
	     * chrome autocomplete lameness
	     * see https://code.google.com/p/chromium/issues/detail?id=468153#c14
	     * ლ(ಠ益ಠლ)   (╯°□°)╯︵ ┻━┻    (◞‸◟；)
	     */
	    function fixChromeAutocomplete() {
	      var global = formlyConfig.extras.removeChromeAutoComplete === true;
	      var offInstance = scope.options && scope.options.removeChromeAutoComplete === false;
	      var onInstance = scope.options && scope.options.removeChromeAutoComplete === true;
	      if (global && !offInstance || onInstance) {
	        var input = document.createElement('input');
	        input.setAttribute('autocomplete', 'address-level4');
	        input.setAttribute('hidden', 'true');
	        el[0].appendChild(input);
	      }
	    }
	  }

	  // stateless util functions
	  function toKebabCase(string) {
	    if (string) {
	      return string.replace(/([A-Z])/g, function ($1) {
	        return '-' + $1.toLowerCase();
	      });
	    } else {
	      return '';
	    }
	  }

	  function isFieldGroup(field) {
	    return field && !!field.fieldGroup;
	  }
	}
	formlyForm.$inject = ["formlyUsability", "formlyWarn", "$parse", "formlyConfig", "$interpolate"];
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angularFix = __webpack_require__(3);

	var _angularFix2 = _interopRequireDefault(_angularFix);

	exports['default'] = addFormlyNgModelAttrsManipulator;

	// @ngInject
	function addFormlyNgModelAttrsManipulator(formlyConfig, $interpolate) {
	  if (formlyConfig.extras.disableNgModelAttrsManipulator) {
	    return;
	  }
	  formlyConfig.templateManipulators.preWrapper.push(ngModelAttrsManipulator);

	  function ngModelAttrsManipulator(template, options, scope) {
	    var node = document.createElement('div');
	    var data = options.data;
	    if (data.skipNgModelAttrsManipulator === true) {
	      return template;
	    }

	    node.innerHTML = template;

	    var modelNodes = getNgModelNodes(node, data.skipNgModelAttrsManipulator);
	    if (!modelNodes || !modelNodes.length) {
	      return template;
	    }

	    addIfNotPresent(modelNodes, 'id', scope.id);
	    addIfNotPresent(modelNodes, 'name', scope.name || scope.id);

	    addValidation();
	    addModelOptions();
	    addTemplateOptionsAttrs();

	    return node.innerHTML;

	    function addValidation() {
	      if (_angularFix2['default'].isDefined(options.validators) || _angularFix2['default'].isDefined(options.validation.messages)) {
	        addIfNotPresent(modelNodes, 'formly-custom-validation', '');
	      }
	    }

	    function addModelOptions() {
	      if (_angularFix2['default'].isDefined(options.modelOptions)) {
	        addIfNotPresent(modelNodes, 'ng-model-options', 'options.modelOptions');
	        if (options.modelOptions.getterSetter) {
	          _angularFix2['default'].forEach(modelNodes, function (modelNode) {
	            modelNode.setAttribute('ng-model', 'options.value');
	          });
	        }
	      }
	    }

	    function addTemplateOptionsAttrs() {
	      if (!options.templateOptions && !options.expressionProperties) {
	        // no need to run these if there are no templateOptions or expressionProperties
	        return;
	      }
	      var to = options.templateOptions || {};
	      var ep = options.expressionProperties || {};

	      var ngModelAttributes = getBuiltInAttributes();

	      // extend with the user's specifications winning
	      _angularFix2['default'].extend(ngModelAttributes, options.ngModelAttrs);

	      // Feel free to make this more simple :-)
	      _angularFix2['default'].forEach(ngModelAttributes, function (val, name) {
	        /* eslint complexity:[2, 14] */
	        var attrVal = undefined;
	        var attrName = undefined;
	        var ref = 'options.templateOptions[\'' + name + '\']';
	        var toVal = to[name];
	        var epVal = getEpValue(ep, name);

	        var inTo = _angularFix2['default'].isDefined(toVal);
	        var inEp = _angularFix2['default'].isDefined(epVal);
	        if (val.value) {
	          // I realize this looks backwards, but it's right, trust me...
	          attrName = val.value;
	          attrVal = name;
	        } else if (val.expression && inTo) {
	          attrName = val.expression;
	          if (_angularFix2['default'].isString(to[name])) {
	            attrVal = '$eval(' + ref + ')';
	          } else if (_angularFix2['default'].isFunction(to[name])) {
	            attrVal = '' + ref + '(model[options.key], options, this, $event)';
	          } else {
	            throw new Error('options.templateOptions.' + name + ' must be a string or function: ' + JSON.stringify(options));
	          }
	        } else if (val.bound && inEp) {
	          attrName = val.bound;
	          attrVal = ref;
	        } else if ((val.attribute || val.boolean) && inEp) {
	          attrName = val.attribute || val.boolean;
	          attrVal = '' + $interpolate.startSymbol() + '' + ref + '' + $interpolate.endSymbol();
	        } else if (val.attribute && inTo) {
	          attrName = val.attribute;
	          attrVal = toVal;
	        } else if (val.boolean) {
	          if (inTo && !inEp && toVal) {
	            attrName = val.boolean;
	            attrVal = true;
	          } else {}
	        } else if (val.bound && inTo) {
	          attrName = val.bound;
	          attrVal = ref;
	        }

	        if (_angularFix2['default'].isDefined(attrName) && _angularFix2['default'].isDefined(attrVal)) {
	          addIfNotPresent(modelNodes, attrName, attrVal);
	        }
	      });
	    }
	  }

	  // Utility functions
	  function getNgModelNodes(node, skip) {
	    var selectorNot = _angularFix2['default'].isString(skip) ? ':not(' + skip + ')' : '';
	    var skipNot = ':not([formly-skip-ng-model-attrs-manipulator])';
	    var query = '[ng-model]' + selectorNot + '' + skipNot + ', [data-ng-model]' + selectorNot + '' + skipNot;
	    return node.querySelectorAll(query);
	  }

	  function getBuiltInAttributes() {
	    var ngModelAttributes = {
	      focus: {
	        attribute: 'formly-focus'
	      }
	    };
	    var boundOnly = [];
	    var bothBooleanAndBound = ['required', 'disabled'];
	    var bothAttributeAndBound = ['pattern', 'minlength'];
	    var expressionOnly = ['change', 'keydown', 'keyup', 'keypress', 'click', 'focus', 'blur'];
	    var attributeOnly = ['placeholder', 'min', 'max', 'tabindex', 'type'];
	    if (formlyConfig.extras.ngModelAttrsManipulatorPreferUnbound) {
	      bothAttributeAndBound.push('maxlength');
	    } else {
	      boundOnly.push('maxlength');
	    }

	    _angularFix2['default'].forEach(boundOnly, function (item) {
	      ngModelAttributes[item] = { bound: 'ng-' + item };
	    });

	    _angularFix2['default'].forEach(bothBooleanAndBound, function (item) {
	      ngModelAttributes[item] = { boolean: item, bound: 'ng-' + item };
	    });

	    _angularFix2['default'].forEach(bothAttributeAndBound, function (item) {
	      ngModelAttributes[item] = { attribute: item, bound: 'ng-' + item };
	    });

	    _angularFix2['default'].forEach(expressionOnly, function (item) {
	      var propName = 'on' + item.substr(0, 1).toUpperCase() + item.substr(1);
	      ngModelAttributes[propName] = { expression: 'ng-' + item };
	    });

	    _angularFix2['default'].forEach(attributeOnly, function (item) {
	      ngModelAttributes[item] = { attribute: item };
	    });
	    return ngModelAttributes;
	  }

	  function getEpValue(ep, name) {
	    return ep['templateOptions.' + name] || ep['templateOptions[\'' + name + '\']'] || ep['templateOptions["' + name + '"]'];
	  }

	  function addIfNotPresent(nodes, attr, val) {
	    _angularFix2['default'].forEach(nodes, function (node) {
	      if (!node.getAttribute(attr)) {
	        node.setAttribute(attr, val);
	      }
	    });
	  }
	}
	addFormlyNgModelAttrsManipulator.$inject = ["formlyConfig", "$interpolate"];
	module.exports = exports['default'];

	/* eslint no-empty:0 */
	// empty to illustrate that a boolean will not be added via val.bound
	// if you want it added via val.bound, then put it in expressionProperties

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angularFix = __webpack_require__(3);

	var _angularFix2 = _interopRequireDefault(_angularFix);

	exports['default'] = addCustomTags;

	// @ngInject
	function addCustomTags($document) {
	  if ($document && $document.get) {
	    (function () {
	      // IE8 check ->
	      // http://stackoverflow.com/questions/10964966/detect-ie-version-prior-to-v9-in-javascript/10965203#10965203
	      var document = $document.get(0);
	      var div = document.createElement('div');
	      div.innerHTML = '<!--[if lt IE 9]><i></i><![endif]-->';
	      var isIeLessThan9 = div.getElementsByTagName('i').length === 1;

	      if (isIeLessThan9) {
	        // add the custom elements that we need for formly
	        var customElements = ['formly-field', 'formly-form', 'formly-custom-validation', 'formly-focus', 'formly-transpose'];
	        _angularFix2['default'].forEach(customElements, function (el) {
	          document.createElement(el);
	        });
	      }
	    })();
	  }
	}
	addCustomTags.$inject = ["$document"];
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;