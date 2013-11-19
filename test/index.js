(function() {
  "use strict";

  var Cache = require('../index')
    , cache = new Cache({
      callback: function(ob1, ob2) {
        return ob1 > ob2;
      }
    });

  for(var i = 0; i < 10; ++i) {
    cache.add(Math.floor(Math.random() * 100 ));
  }

  console.log(cache.values);

}());
