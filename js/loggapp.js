/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var module = angular.module("LoggApp",["ui.router"]);

module.config(function ($urlRouterProvider,$stateProvider){
    
    $urlRouterProvider.otherwise("/");
    
    $stateProvider.state("home",{
        url:"/",
        template:"<p></p>"
    }).state("readLoggs",{
        url:"/read",
        controller:"readCtrl",
        templateUrl:"templates/readLoggs.html"
    }).state("postLogg",{
        url:"/post",
        controller:"postCtrl",
        templateUrl:"templates/postlogg.html"
    }).state("kontakt",{
       url:"/kontakt",
       templateUrl:"templates/kontakt.html"
    }).state("minasidor",{
       url:"/minasidor",
       templateUrl:"templates/minasidor.html"
    }).state("startsida",{
        url:"/startsida",
        templateUrl:"templates/startsidaElev.html"
    });
    
});

