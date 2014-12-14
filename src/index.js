'use strict';
var ga = require('./ga');


function analytics(state) {
  ga('send', 'pageview', {
    'page': state.path
  });
}


module.exports = analytics;
