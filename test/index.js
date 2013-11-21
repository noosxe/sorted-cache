(function() {
  "use strict";

  var Cache = require('../index')
    , cache = new Cache({
      callback: function(ob1, ob2) {
        return ob1 > ob2;
      },
      value: function(a) {
        console.log(a);
        return a;
      }
    });

  for(var i = 0; i < 10; ++i) {
    cache.add(Math.floor(Math.random() * 100 ));
  }

  cache.add([4, 342, 34, 542]);

  console.log(cache.values);
  console.log(cache.range(4, 4));
  console.log(cache.until(34, 4));
}());
