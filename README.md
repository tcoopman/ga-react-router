# Google analytics for any router

This doesn't have any depency on react-router. You can use it with any router you like.
See the example for how to use it with react-router

## How to use

1. `npm install ga-react-router`
2. In your `webpack.config.js` add `new webpack.DefinePlugin({GA_TRACKING_CODE: JSON.stringify('XXXXXXXX')})`
3. Use analytics in your `Router.run` code.

## Example

```js
import ga from 'ga-react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = createBrowserHistory()

// Listen for changes to the current location. The
// listener is called once immediately.
const unlisten = history.listen(location => {
  ga('send', location);
});

React.render(<Router history={history}>{routes}</Router>, el)

// When you're finished, stop the listener.
unlisten()
```

## Advanced setup

You can pass more information to `ga.create()` by adding a `GA_CONFIG` object to `webpack.DefinePlugin` like so:

```js
new webpack.DefinePlugin({
  GA_TRACKING_CODE: JSON.stringify('XXXXXXXX'),
  GA_CONFIG: {
    'name': 'myTracker'
  }
})
```

You can read further on the subject [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#create).
