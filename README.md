# QRScanner by Attract

This is a QRScanner application built on [Ionic 2](https://github.com/driftyco/ionic) and that uses [Ionic Native](https://github.com/driftyco/ionic-native)

## Setup

To setup this application locally, you'll have to clone the repository and install all the required libraries and plugins. Thankfully, Ionic provides an easy way with Ionic state

__NOTICE__: make sure you have Ionic 2 Cli installed (`npm install -g ionic@latest`)

__NOTICE__: make sure you have Cordova Cli installed (`npm install -g cordova`)

Steps:

- `git clone https://github.com/rcdd/QR_Read_Attract`
- `cd QR_Read_Attract`
- `npm install`
- `ionic state restore` (Check out [Ionic State](https://github.com/driftyco/ionic-cli#ionic-state))

After these commands, your application is all ready to be built and deployed to the platform of your choice.

_WINDOWS NOTICE_: For those who have a Windows machine, the `ionic platform add ios` command will fail when running `ionic state restore`.

_ANDROID NOTICE_: For those who would like to build on Android, just simply run `ionic platform add android` after `ionic state restore` finishes to add the platform.
