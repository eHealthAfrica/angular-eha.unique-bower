;(function() {

  var ngModule = angular.module('eha.unique', [
    'eha.unique.directive'
  ]);

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

})();

;(function() {
  'use strict';
  /**
   * Custom validator that compares the model it's bound to with a given
   * property (`eha-unique-property`) of a given object (`eha-unique`).
   *
   * @ngdoc directive
   * @name ehaOnlineBadge
   * @module eha.unique
   */
  var ngModule = angular
                  .module('eha.unique.directive', []);

  ngModule.directive('ehaUnique', function() {
    return {
      require: 'ngModel',
      scope: {
        ehaUnique: '='
      },
      link: function(scope, element, attrs, ctrl) {
        if (!attrs.ehaUniqueProperty) {
          return;
        }
        scope.$watch('ehaUnique.' + attrs.ehaUniqueProperty, function() {
          ctrl.$validate();
        });
        ctrl.$validators.ehaUnique = function(modelValue) {
          return modelValue !== scope.ehaUnique[attrs.ehaUniqueProperty];
        };
      }
    };
  });

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

})();
