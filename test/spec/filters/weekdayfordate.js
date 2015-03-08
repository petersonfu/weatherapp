'use strict';

describe('Filter: weekDayForDate', function () {

  // load the filter's module
  beforeEach(module('weatherappNgApp'));

  // initialize a new instance of the filter before each test
  var weekDayForDate;
  beforeEach(inject(function ($filter) {
    weekDayForDate = $filter('weekDayForDate');
  }));

  it('should return the input prefixed with "weekDayForDate filter:"', function () {
    var text = 'angularjs';
    expect(weekDayForDate(text)).toBe('weekDayForDate filter: ' + text);
  });

});
