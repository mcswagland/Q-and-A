angular.module('app')
    /*.controller('AskCtrl', function ($scope){
            $scope.addQuestion = function(){
                var question = { title: $scope.title, body: $scope.body }
                return $http.post('/api/questions', question)
            }
    })*/

    .controller('AskCtrl', function($scope, QuestionsSvc){
        $scope.addQuestion = function() {
            if($scope.questionTitle && $scope.questionBody){
                QuestionsSvc.create({
                    username: 'dickeyxxx',
                    title: $scope.questionTitle,
                    body: $scope.questionBody
                })
                .success(function(question){
                    $scope.$emit('ask');
                    $scope.questionTitle = null
                    $scope.questionBody = null
                })
            }
        }
    })