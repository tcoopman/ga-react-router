'use strict';
var ga = require('./ga');


function analytics(state, anonymizeIp) {
  ga('send', 'pageview', {
    'page': state.path,
    'anonymizeIp': anonymizeIp
  });
}


module.exports = analytics;
