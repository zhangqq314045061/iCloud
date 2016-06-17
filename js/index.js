var todo = angular.module('todo',[]);
todo.controller('main',['$scope',function($scope){


	if(localStorage.todos){
 $scope.qingdan=angular.fromJson(localStorage.todos)
	}else{
		$scope.qingdan=[
   {id:1001,
    theme:'zise',
   name:'计划1',
   shijian:[
          {name:'xiangjiao',state:true},
          {name:'apple',state:false},
          {name:'orange',state:false}
        ]
 },
   {id:1002,
    theme:'lvse',
   name:'计划2',
   shijian:[
          {name:'xiangjiao',state:true},
          {name:'apple',state:false},
          {name:'orange',state:false}
        ]
 },
]
	}
$scope.data=function(){
	localStorage.todos=angular.toJson($scope.qingdan)
}

var yanse=["zise","lvse","zunse","hese","hongse","huang","lanse"];
$scope.yanse=yanse;
var zicolor=["zicolor","lvcolor","zuncolor","hecolor","huangcolor","hongcolor","lancolor"];
$scope.add=function(){
	var len=$scope.qingdan.length;
    var id = ( len === 0)?
      1001:
      (Math.max.apply(null,$scope.qingdan.map(function(v,i){
        return Number(v.id);
      })) + 1);
	
	 qd={
		theme:yanse[len%7],name:'新清单'+(len+1),id:Number(id)
	}
	   $scope.currentQingdan = qd;

$scope.qingdan.push(qd);
$scope.data();
}
 $scope.setCurrent = function(index){
      $scope.currentQingdan = $scope.qingdan[index];
    }



     $scope.del=function(id){
     	console.log(id)
    	var news=this.qingdan.filter(function(v,i){
    		return i !== id;
    	})
    $scope.qingdan=news;
      $scope.data();
    }





  }]);
