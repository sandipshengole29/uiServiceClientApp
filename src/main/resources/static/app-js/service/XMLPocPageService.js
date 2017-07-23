/**
 * 
 */

app.service('xmlPocPageService', function (restFactory) {
    return {
        getFileData : function(url, callback){
            //alert("Get Data For: " + url);
        	restFactory.getRestRequest(url, function(response) {
                callback(response);
            });
        }
    }
});