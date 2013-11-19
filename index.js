var _ = require('lodash');

module.exports = (function() {
  "use strict";

  var Cache = function(options) {
    this.values = [];
    this.options = options;
  };

  Cache.prototype.add = function(item) {
    if (this.values.length === 0 || !this.options.callback) {
      this.values.push(item);
      return;
    }

    var added = false;

    _.forEach(this.values, function(val, key) {
      if (this.options.callback(val, item)) {
        this.values.splice(key, 0, item);
        added = true;
        return false;
      }
    }, this);

    if (!added) {
      this.values.push(item);
    }
  };

  Cache.prototype.remove = function(target) {
    if (isNaN(target)) {
      this.values = _.without(this.values, target);
    } else {
      this.values.splice(target, 1);
    }
  };

  Cache.prototype.get = function(index) {
    return index < this.values.length ? this.values[index] : null;
  };

  Cache.prototype.range = function(begin, count) {
    return this.values.slice(begin, begin + count);
  };

  Cache.prototype.length = function() {
    return this.values.length;
  };

  return Cache;

}());
