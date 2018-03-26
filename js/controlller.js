login.controller("ctrl",($scope,fact)=>{
    $scope.visible=true;
    $scope.check=()=>{
        if($scope.usid == "rajat" && $scope.pass == "rajat"){
            $scope.visible = !$scope.visible;  
        }
        else{
            alert("Incorrect combination");
            $scope.usid = $scope.pass = "";
        }
    };
    $scope.loadshirts = () =>{
        var pr = fact.talkshirts();
        pr.then(function(data){
        $scope.result = data;
        console.log(data);
    }, function(err){
        $scope.error = err;
    });
    };
    $scope.loadshoes = () =>{
        var pr = fact.talkshoes();
        pr.then(function(data){
            console.log($scope.result);
        $scope.result = data;
        console.log($scope.result);
    }, function(err){
        $scope.error = err;
    });
    };
    $scope.loadmobiles = () =>{
        var pr = fact.talkmobiles();
        pr.then(function(data){
        $scope.result = data;
        console.log(data);
    }, function(err){
        $scope.error = err;
    });
    };
});