/**
 * Initial Angular App Settup
 * Routing for each view created
 */

angular
  .module('app', ['ui.router','about', 'navbar', 'dropfile', 'home'])
  .config(( $stateProvider , $urlRouterProvider ) => {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.html'
      })
      $urlRouterProvider.otherwise('/'),
          $stateProvider
      .state('addons', {
        url: '/addons',
        templateUrl: 'src/templates/addon.html'
      }),
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'src/templates/about.html'
      })
})