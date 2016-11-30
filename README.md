# [ReactJS + Cordova] hybrid app - Professor Oli.
## CS 643. Fall 2016. Pace University.

All data that is used within the application is taken from [BrainPOP](https://www.brainpop.com/free-stuff/). This project is created only for educational purposes.

![](https://drive.google.com/open?id=0B0r0qzpp4O-Wa3c2Q2xpTEdkeDQ)

Check out the demo [video (.mov file)](https://drive.google.com/open?id=0B0r0qzpp4O-Wa3c2Q2xpTEdkeDQ).
Check out the demo [file (.apk file)](https://drive.google.com/open?id=0B0r0qzpp4O-WX1NnQnNSMW1ITE0).

### About application
Professor Oli is a smart rabbit who is trying to educate people. And he uses his own approach that separates main areas of subjects, for example, Science, Social Studies, etc. And in the end of "game", a user gets his lovely topic and some free tutorials from BrainPOP.

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
