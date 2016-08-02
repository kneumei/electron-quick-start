var packager = require('electron-packager')
packager(
{
    "arch": "x64",
    "dir": ".",
    "platform": "win32",
    "asar":{
        "unpackDir":"node_modules/edge-atom-shell/**"
    },
    "overwrite":"true"

}, function done_callback (err, appPaths) { console.log("done")})