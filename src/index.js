'use strict';
var ga = require('./ga');


function analytics(state, options) {
  if (!options) {
    options = {};
  }
  options.page = state.path;
  ga('send', 'pageview', options);
}


module.exports = analytics;
