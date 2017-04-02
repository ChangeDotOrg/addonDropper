var myApp = angular.module('about', ['ui.router'])

var about ={
    controller:'AboutController',
    templateUrl: 'src/test2/index.html'
}

myApp
  .component('about',about)
  .config(function($stateProvider) {

    var aboutState = {
      name: 'about',
      url: '/about',
      component: 'about'
    }

    $stateProvider.state(aboutState)

})