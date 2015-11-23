var module = angular.module("LoggApp", ["ui.router"]);

module.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise("/");
    if (typeof startsida !== "undefined")
    {
        $stateProvider.state("home", {
            url: "/",
            templateUrl: "templates/" + startsida
        });
    }
    else{
        
        $stateProvider.state("home", {
            url: "/"
        });
    }
    $stateProvider.state("readLoggs", {
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
    }).state("startsida", {
        url: "/startsida",
        templateUrl: "templates/startsidaElev.html"
    }).state("tidslinje", {
        url: "/tidslinje",
        templateUrl: "templates/tidslinje.html"
    }).state("aktivitet", {
        url: "/aktivitet",
        templateUrl: "templates/aktivitet.html"
    }).state("narvaroLarare", {
        url: "/narvaroLarare",
        templateUrl: "templates/narvaroLarare.html"
    }).state("narvaroElev", {
        url: "/narvaroElev",
        templateUrl: "templates/narvaroElev.html"
    }).state("loggbok1", {
        url: "/loggbok1",
        templateUrl: "templates/addLogg.html"
    }).state("loggbok2", {
        url: "/loggbok2",
        templateUrl: "templates/loggbok2.html"
    }).state("momentLarare", {
        url: "/momentLarare",
        templateUrl: "templates/momentLarare.html"
    }).state("momentElev", {
        url: "/momentElev",
        templateUrl: "templates/momentElev.html"
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
    }).state("loggbokHandledare",{
       url:"/loggbokHandledare",
       templateUrl:"templates/loggbokHandledare.html"
    }).state("loggbokLärare",{
       url:"/loggbokLärare",
       templateUrl:"templates/loggbokLärare.html"
    });

});

module.controller("aktivitetsCtrl", function ($scope) {
    $scope.aktiviteter = [{
            "rubrik": "Ny närvaro",
            "beskrivning": "En ny närvaro har blivit rapporterad av %Elev% "
                    + "och behöver godkännas"
        }, {
            "rubrik": "Ny logg",
            "beskrivning": "En ny logg har laggs till i %Elev%s loggbok "
                    + "och behöver godkännas"
        }, {
            "rubrik": "Händelse",
            "beskrivning": "Beskrivning"
        }];
});

module.controller("urlCtrl", function ($scope) {
    $scope.changeUrl = function () {
        var indata = $scope.loginname.toLowerCase();
        console.log(indata);
        if (indata === "elev") {
            $scope.urlValue = "elev.html";
        } else if (indata === "lärare") {
            $scope.urlValue = "larare.html";
        } else if (indata === "handledare") {
            $scope.urlValue = "handledare.html";
        }
        $scope.loginname = "";
    };
});
