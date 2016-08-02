Demonstrates a problem with loading native node modules from the app.asar.unpacked directory in windows 7 using electron 1.1.1 and higher.

This is a clone of electron-quick-start that adds in a dependency on edge-atom-shell, which has a native node module. The native node module is 
put into the app.asar.unpacked directory when the application is pacakged. 

![works](https://github.com/kneumei/electron-quick-start/blob/master/works.JPG)

To reproduce error:
1. npm install; npm run electron-rebuild; npm run package
2. move the electron-quick-start-win32-x64 directory to a windows 7 machine and run the exe 

![error](https://github.com/kneumei/electron-quick-start/blob/master/error.JPG)
