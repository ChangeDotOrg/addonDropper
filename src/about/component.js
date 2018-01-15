// import AboutController from './controller'
// module.exports = {
//     templateUrl:'src/about/index.html',
//     controller: AboutController
// }
let about = {
    templateUrl:'src/about/index.html',
    controller: 'aboutController'
}

angular
    .module('about')
    .component('about',about)