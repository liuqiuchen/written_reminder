/**
 * Created by Administrator on 2016/3/18.
 */
//实例化AngularJS应用程序对象
var app = angular.module('myApp', []);
//创建控制器
app.controller('myCtrl', function ($scope) {

    $scope.remindersArr = [{text:'aaa',bool:false}];

    $scope.addReminder = function () {
        if($scope.myText!=null && $scope.myText!='' && $scope.myText!='undefined'){
            $scope.remindersArr.push({text:$scope.myText,bool:false});
            $scope.myText = '';
        }
    };
    $scope.deleteReminder = function () {
        var oldList = $scope.remindersArr;
        $scope.remindersArr = [];

        //console.log(oldList);

        angular.forEach(oldList, function (data, index, array){
            //data等价于array[index]
            if(!data.bool){
                $scope.remindersArr.push(data);
            }
            //console.log(data.bool);
        });

    };



});