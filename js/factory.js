login.factory("fact",($http,$q)=>{
    var object = {
        talkshoes(){
            var pr = $q.defer();
            var url = "http://localhost:5000/items";
            $http.get(url).then(success,fail);
            function success(data){
                pr.resolve(data);
            }
            function fail(err){
                pr.reject(data);
            }
        return pr.promise;
        },
        talkshirts(){
            var pr = $q.defer();
            var url = "http://localhost:4444/items";
            $http.get(url).then(success,fail);
            function success(data){
                pr.resolve(data);
            }
            function fail(err){
                pr.reject(data);
            }
        return pr.promise;
        },
        talkmobiles(){
            var pr = $q.defer();
            var url = "http://localhost:4000/items";
            $http.get(url).then(success,fail);
            function success(data){
                pr.resolve(data);
            }
            function fail(err){
                pr.reject(data);
            }
        return pr.promise;
        }

    };

    return object;

});