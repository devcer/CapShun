# Install and run
### Dependencies
* Node.js, version or above. Download and install it from https://nodejs.org/en/download/ .
* Expo CLI. Install it using `npm install -g expo-cli` in your terminal.

The other dependencies can be installed by running `npm install` in the root folder of the app.

### Cloning the repository
You can do this in any of four ways:
* On the app's homepage, click Code then Download as ZIP. After downloading, extract it into the folder of your choice.
* If you have a [Git client](https://git-scm.com/downloads), navigate to the folder you want to clone it to, run `git clone https://github.com/devcer/CapShun` in your terminal.
* If you have [GitHub Desktop](https://desktop.github.com/), click Code on the app's homepage, then Open in GitHub desktop. This then clones it to the folder of your choice.

### Launching it in development mode
In the root folder of the app, 
* Start the Expo CLI by running `expo start`.
* Run `npm start`. Expo then creates a QR code that can be used to run the app on Android (Expo app or over ADB) or iOS (Expo App) device, if they're on the same WLAN network.  
Alternatively, you can start it in a web browser using the URLs provided in the terminal, or an [Android emulator](https://docs.expo.io/workflow/android-studio-emulator/) on PC.

This launches the app in development mode, which allows on-the-fly code editing, but may not be as performant as a production build.

### Creating a production build
Production builds can be created for web, Android or iOS. This minifies the code and improves performance. Although too complex to cover here, instructions for each platform can be found here:
* [Web](https://docs.expo.io/distribution/publishing-websites/)
* [Mobile](https://docs.expo.io/distribution/building-standalone-apps/)
