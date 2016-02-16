# xreact

minimal setup for react & react-native codevelopment.

## Installation

to get started, you need to ensure that all dependencies from react & react native are installed on your machine. Specifically with React-native.

Read their [docs](https://facebook.github.io/react-native/docs/getting-started.html) before doing anything.

**After this, instructions are made in the assumption that you've already played around with both ios, android & react web and have thoese dependencies already installed**.

### Enabling React-Native Project

To initialize a react-native project with your own project files...

- delete android & ios folders
- run the following in the Terminal

```
react-native init YOUR_PROJECT_NAME
```
- after init, move ios & android folders from YOUR_PROJECT_NAME folder to the main repo folder.
- rename project in package.json
- run the following in the Terminal

```
react-native upgrade
```

- change AppRegistry to

```javascript
AppRegistry.registerComponent('YOUR_PROJECT_NAME', () => YOUR_PROJECT_NAME);
```
**this should be found in the index.android.js and index.ios.js files. Ensure your entrance point in the app/native folder is also working**

Now it should be working properly.

### runtime

**Terminal Window One**

```
npm install
npm run build
npm run webstart
```
navigate to [http://localhost:8080](localhost:8080) to see your dev environment. live reloading enabled ;)

** Terminal Window Two**

Open your android emulator of choice & get it running.

```bash
react-native run-ios
react-native run-android
```

## deployment

this deployment will only deploy your **react web** app to its associated github page.

```
npm run build
npm run start
```

can be viewed at *username*.github.com/*repo-name*, example at [awitherow.github.io/xreact/](http://awitherow.github.io/xreact/)


## Editor Modifications

Recommended to install *eslint* in your text editor of choice for error detection.
