# xreact

minimal setup for react & react-native codevelopment.

## Installation

to get started, you need to ensure that all dependencies from react & react native are installed on your machine. Specifically with React-native.

Read their [docs](https://facebook.github.io/react-native/docs/getting-started.html) before doing anything.

**After this, instructions are made in the assumption that you've already played around with both ios, android & react web and have thoese dependencies already installed**.

## Windows specific requirements:

If you don't have python installed and set up, you will get some errors when trying to install. So first follow these steps:
** Intsall version 2.7.11, newer versions are NOT supported (I learned it the hard way)**
- Install python: http://www.python.org/getit/windows/
- Install Microsoft Visual Studio C++ 2012 Express version: http://go.microsoft.com/?linkid=9816758
- Install node-gyp:
```
npm install -g node-gyp
```

- Set your local python variable
```
set PYTHONPATH=%PYTHONPATH%;C:\Users\YOUR_USER_NAME\AppData\Local\Programs\Python\Python35-32\Lib
set PYTHON=C:\Users\YOUR_USER_NAME\AppData\Local\Programs\Python\Python35-32\python.exe
```
### Install the Android SDK (unless you have it)

Make sure you have enough disc space free, as the android images can be several gigabytes each.
1. Install the latest [http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](JDK)
2. Install the Android SDK:
[Download from the Android website](https://developer.android.com/sdk/installing/index.html?pkg=tools)
**Make sure to install  (select it in the list):**
- Android SDK Build-tools version 23.0.1
- Android 6.0 (API 23)
- Android Support Repository


### Install Genymotion Android Emulator
1. Download and install [Genymotion](https://www.genymotion.com/).
2. Open Genymotion. It might ask you to install VirtualBox unless you already have it.
3. Create a new emulator and start it.

### Define the ANDROID_HOME environment variable
- go to Control Panel -> System and Security -> System -> Change settings -> Advanced -> Environment variables -> New
```
name:ANDROID_HOME
var:C:\Program Files (x86)\Android\android-sdk
```
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
navigate to [http://localhost:8080/build/](localhost:8080/build/) to see your dev environment. live reloading enabled ;)

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
