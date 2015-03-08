'use strict';

describe('Filter: formatPressureFromHPA', function () {

  // load the filter's module
  beforeEach(module('weatherappNgApp'));

  // initialize a new instance of the filter before each test
  var formatPressureFromHPA;
  beforeEach(inject(function ($filter) {
    formatPressureFromHPA = $filter('formatPressureFromHPA');
  }));

  it('should return the input prefixed with "formatPressureFromHPA filter:"', function () {
    var text = 'angularjs';
    expect(formatPressureFromHPA(text)).toBe('formatPressureFromHPA filter: ' + text);
  });

});
