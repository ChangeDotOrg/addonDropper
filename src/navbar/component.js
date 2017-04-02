let navbar = {
    templateUrl:'src/navbar/index.html',
    controller: 'navbarController'
}

angular
    .module('navbar')
    .component('navbar',navbar)