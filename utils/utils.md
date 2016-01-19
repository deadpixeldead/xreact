# utils

this md document will explain any of the utils in here. hopefully, there won't be many other than this index.html file used for the template in webpack.

## index.html

this is the template file for the application, when webpack loads it into the browser. it's confusing as hell. will get to this later. not really sure if it's necessary to modify this at all.

```javascript
...
plugins: [
  new HtmlwebpackPlugin({
    template: 'utils/index.html', /* used here. */
    title: 'Minimal React Starter Kit',
    appMountId: 'app' // mounts to the id 'app'.
  })
...
```
