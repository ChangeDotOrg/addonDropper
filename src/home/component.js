let home = {
    templateUrl:'src/home/index.html',
    controller: 'homeController'
}

angular
    .module('home')
    .component('home',home)