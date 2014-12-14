# Google analytics for react-router

## How to use

1. `npm install ga-react-router`
2. In your `webpack.config.js` add `new webpack.DefinePlugin({GA_TRACKING_CODE: JSON.stringify('XXXXXXXX')})`
3. Use analytics in your `Router.run` code.

## Example

```js
'use strict';
var React = require('react');
var Router = require('react-router');
var analytics = require('ga-react-router');

var routes = require('./routes');

Router.run(routes, Router.HistoryLocation, function(Handler, state) {
  React.render(<Handler />, document.getElementById('content'));
  analytics(state);
});
```
