// import AboutController from './controller'
// module.exports = {
//     templateUrl:'src/about/index.html',
//     controller: AboutController
// }
const newWindowComponent = {
    templateUrl:'../window/index.html',
    controller: 'windowController'
}

angular
    .module('window')
    .component('window',newWindowComponent)