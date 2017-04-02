let about = {
    templateUrl:'src/about/index.html',
    controller: 'aboutController'
}

angular
    .module('about')
    .component('about',about)