# Install and run
These are instructions on how to get CapShun up and running on your device. Basic knowledge of your Operating System's terminal and package manager (for Linux) is recommended.

### Cloning the repository
You can do this in any of four ways:
* On the app's homepage, click Code, then Download as ZIP. After downloading, extract it into the folder of your choice.
* If you have the [Git client](https://git-scm.com/downloads), navigate to the folder you want to clone it to in your terminal using `cd path/to/repo_folder`, then run `git clone https://github.com/devcer/CapShun`.
* If you have [GitHub Desktop](https://desktop.github.com/), click Code on the app's homepage, then Open in GitHub desktop. This then clones it to the folder of your choice.
* If you have [GitHub CLI](https://cli.github.com/), run `gh repo clone devcer/CapShun path/to/repo_folder` in your terminal.

### Installing prerequisites
* Install Node.js:
  * For Windows and macOS, download and run the installer from https://nodejs.org/en/download/.
  * For Linux:
    * [Through your distro's package manager](https://nodejs.org/en/download/package-manager/)
    * [Through the binary archive](https://github.com/nodejs/help/wiki/Installation) from https://nodejs.org/en/download/
    * [Through the Snap store](https://snapcraft.io/node)

After installing Node.js,
* Install the Expo CLI by running `npm install -g expo-cli` in your terminal.
* Install the other dependencies by running `npm install` in the root folder of the repo.

### Launching it in development mode
In the root folder of the repo, run `expo start`. This provides a number of ways to launch the app:
* QR code: Expo will generate a QR code you can use to run the app on an Android device, if it's on the same WLAN network as your PC. To do this:
  * Download the [Expo app from the Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).
  * Open the app and select `Scan QR Code`.
  * Point your camera at the QR code generated by Expo in your terminal. The app will then open on your Android device.
* Terminal options, which can be used by simply entering the respective letter into the terminal:
  * `w`: Runs it in your default web browser.
  * `a`: To run it on an Android Emulator. Instructions to set it up can be found at https://docs.expo.io/workflow/android-studio-emulator/.
  * `e`: Sends a link to an e-mail address of your choice which can be used to run the app. An Expo account must be created for this, which can be done directly from the terminal after entering the recipient.

This launches the app in development mode, which allows on-the-fly code editing, but may not be as performant as a production build.

### Creating a production build
Production builds can be created for web, Android or iOS. This minifies the code and improves performance. Although outside the scope of this guide, instructions for each platform can be found here:
* [Web](https://docs.expo.io/distribution/publishing-websites/)
* [Mobile](https://docs.expo.io/distribution/building-standalone-apps/)