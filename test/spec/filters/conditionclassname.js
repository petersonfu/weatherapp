'use strict';

describe('Filter: conditionClassname', function () {

  // load the filter's module
  beforeEach(module('weatherappNgApp'));

  // initialize a new instance of the filter before each test
  var conditionClassname;
  beforeEach(inject(function ($filter) {
    conditionClassname = $filter('conditionClassname');
  }));

  it('should return the input prefixed with "conditionClassname filter:"', function () {
    var text = 'angularjs';
    expect(conditionClassname(text)).toBe('conditionClassname filter: ' + text);
  });

});
