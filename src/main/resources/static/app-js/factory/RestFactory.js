/**
 * 
 */
app.factory("restFactory", function($http, $q) {
    var factory = {};

    factory.getRestRequest = function(url,callback){
        //alert("URL: " + url);
        return $http.get(url).success(callback);
    }

    return factory;
});