# Install and run
### Dependencies

### Cloning the repository
You can do this in any of four ways:
* On the app's homepage, click Code, then Download as ZIP. After downloading, extract it into the folder of your choice.
* If you have the [Git client](https://git-scm.com/downloads), navigate to the folder you want to clone it to in your terminal using `cd path/to/repo_folder`, then run `git clone https://github.com/devcer/CapShun`.
* If you have [GitHub Desktop](https://desktop.github.com/), click Code on the app's homepage, then Open in GitHub desktop. This then clones it to the folder of your choice.
* If you have [GitHub CLI](https://cli.github.com/), run `gh repo clone devcer/CapShun path/to/repo_folder` in your terminal.

### Installing prerequisites
* Install Node.js from https://nodejs.org/en/download/.
After installing Node.js,
* Install the Expo CLI by running `npm install -g expo-cli` in your terminal.
* Install the other dependencies by running `npm install` in the root folder of the repo.

### Launching it in development mode
In the root folder of the repo, 
* Run `expo start`. Expo then creates a QR code that can be scanned to run the app on Android or iOS device, if they're on the same WLAN network.  
Alternatively, you can start it in a web browser using the URLs provided in the terminal, or an [Android emulator](https://docs.expo.io/workflow/android-studio-emulator/) on PC.\
This launches the app in development mode, which allows on-the-fly code editing, but may not be as performant as a production build.

### Creating a production build
Production builds can be created for web, Android or iOS. This minifies the code and improves performance. Although too complex to cover here, instructions for each platform can be found here:
* [Web](https://docs.expo.io/distribution/publishing-websites/)
* [Mobile](https://docs.expo.io/distribution/building-standalone-apps/)
