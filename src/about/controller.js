// function AboutController() {
//     this.name = "Happy Hour"
// }
 class AboutController{
     constructor(){
         this.name = "class now"
     }
 }

//  export default AboutController
angular
    .module('about')
    .controller('aboutController', AboutController)