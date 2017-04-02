function HomeController() {
    this.name = "Happy Hour"
}

angular
    .module('home')
    .controller('homeController',HomeController)