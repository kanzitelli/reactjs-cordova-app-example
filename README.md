# [ReactJS + Cordova] hybrid app - Professor Oli.
## CS 643. Fall 2016. Pace University.

All data that is used within the application is taken from [BrainPOP](https://www.brainpop.com/free-stuff/). This project is created only for educational purposes.

Check out the demo [video (.mov file)](https://drive.google.com/open?id=0B0r0qzpp4O-Wa3c2Q2xpTEdkeDQ).
Check out the demo [file (.apk file)](https://drive.google.com/open?id=0B0r0qzpp4O-WSlJxcDBxTXIzWlE).

### About application
Professor Oli is a smart rabbit who is trying to educate people. And he uses his own approach that separates main areas of subjects, for example, Science, Social Studies, etc. And in the end of "game", a user gets his lovely topic and some free tutorials from BrainPOP.
Available in English and Russian languages.

### How to run it

To run it simply do:

```bash
npm install
npm start
```

The app will run at [http://localhost:9000](http://localhost:9000).

### How to build it

You can build it using Cordova.

- [Install Cordova](https://cordova.apache.org/docs/en/latest/guide/cli/index.html#installing-the-cordova-cli):

```
npm install -g cordova
```

You need to build the project:

```
npm run build
```

Add a platform to run it on a device or emulator. For Android:

```
cordova platform add android
cordova run android
```

This assumes that you have the Android SDK installed.

### Used links
0. [BrainPOP free stuff](https://www.brainpop.com/free-stuff/)
1. This [tutorial](https://onsen.io/blog/cordova-hybrid-app-with-react-redux-webpack/) is very helpful
2. Onsen UI and this [guide](https://onsen.io/v2/docs/guide/react/)
3. [Stickers](http://goo.kiev.ua/stickers-vk/krolik-robert.html)
