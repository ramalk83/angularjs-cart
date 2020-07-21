var app=angular.module("app",[]);

app.controller('ProductController',['$scope',function($scope){
    $scope.products= [
		{   
             id:1,
			name: 'Tutorials Development',
            price: 500,
            active:true
		},{
            id:2,
            name: 'Tutorials Design',
			price: 300,
			active:false
		},{
            id:3,
            name: 'Code Integration',
			price: 250,
			active:false
		},{
            id:4,
            name: 'Training',
			price: 220,
			active:false
		}
	];
    $scope.cart=[];
    $scope.toggleActive = function(s){
		s.active = !s.active;
	};

    $scope.addToCart= function(id){
        $scope.cart.push($scope.products[id])
    }

    $scope.remove=function(id){
        $scope.cart.splice(id,1)
    }

    $scope.total=function(){
     var  total=0;
     angular.forEach($scope.cart,function(value) {
         total+=value.price;
     });
     return total;
    }
}])