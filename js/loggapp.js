var module = angular.module("LoggApp", ["ui.router"]);

module.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise("/");
    
    $stateProvider.state("home", {
        url: "/",
        templateUrl: "templates/" + startsida
    }).state("readLoggs", {
        url: "/read",
        controller: "readCtrl",
        templateUrl: "templates/readLoggs.html"
    }).state("postLogg", {
        url: "/post",
        controller: "postCtrl",
        templateUrl: "templates/postlogg.html"
    }).state("kontakt", {
        url: "/kontakt",
        templateUrl: "templates/kontakt.html"
    }).state("minasidor", {
        url: "/minasidor",
        templateUrl: "templates/minasidor.html"
    }).state("tidslinje", {
        url: "/tidslinje",
        templateUrl: "templates/tidslinje.html"
    }).state("aktivitet", {
        url: "/aktivitet",
        templateUrl: "templates/aktivitet.html"
    }).state("narvaro", {
        url: "/narvaro",
        templateUrl: "templates/narvaro.html"
    }).state("loggbok1", {
        url: "/loggbok1",
        templateUrl: "templates/loggbok1.html"
    }).state("loggbok2", {
        url: "/loggbok2",
        templateUrl: "templates/loggbok2.html"
    }).state("moment", {
        url: "/moment",
        templateUrl: "templates/moment.html"
    }).state("loggbocker", {
        url: "/loggbocker",
        templateUrl: "templates/loggbocker.html"
    }).state("oversikt", {
        url: "/oversikt",
        templateUrl: "templates/oversikt.html"
    }).state("meddela", {
        url: "/meddela",
        templateUrl: "templates/meddela.html"
    }).state("semoment", {
        url: "/semoment",
        templateUrl: "templates/semoment.html"
    }).state("lasaloggbok", {
        url: "/lasaloggbok",
        templateUrl: "templates/lasaloggbok.html"
    });

});

module.controller("aktivitetsCtrl", function ($scope) {
    $scope.aktiviteter = [{
            "rubrik": "Ny närvaro",
            "beskrivning": "En ny närvaro har blivit rapporterad av Daniel "
                    + "och behöver godkännas",
            "typ": "narvaro"
        }, {
            "rubrik": "Ny logg",
            "beskrivning": "En ny logg har laggs till i Carl's loggbok "
                    + "och behöver godkännas",
            "typ": "logg"
        }, {
            "rubrik": "Händelse",
            "beskrivning": "Beskrivning"
        }];
    $scope.visa = function(typ){
        if(typ === "narvaro")
        {
            var element = "<div>";
            element += "<h3>Nävaro</h3>";
            element += "<p>Daniel rapporterade 8:00 till 16:00</p>";
            element += "<a href=\"#godkann\">Godkänn</a>";
            element += "</div>";
            $("#aktivitet").append(element);
        }
        else if(typ === "logg")
        {
            
        }
    };
});
