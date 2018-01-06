function HomeController() {
    this.name = "Happy Hour"
    this.data = [
    {name: 'row1', tasks: [
        {name: 'task1', from: 0, to: 10000},
        {name: 'task2', from: 0, to: 10000}
        ]
    },
    {name: 'row2', tasks: [
        {name: 'task3', from: 0, to: 10000},
        {name: 'task4', from: 0, to: 10000}
      ]
    },
 ]
}

angular
    .module('home')
    .controller('homeController',HomeController)