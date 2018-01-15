const {ipcRenderer} = require('electron')
 class DropfileController {
     constructor(){
        
     }
    openNewWindow() {
        ipcRenderer.send('main-to-window', 'ping')
    }
}

angular
    .module('dropfile')
    .controller('dropfileController',DropfileController)