angular.module('app')
.controller('QuestionsCtrl', function($scope, QuestionsSvc){
    $scope.addQuestion = function() {
        if($scope.questionTitle && $scope.questionBody){
                QuestionsSvc.create({
                    username: 'dickeyxxx',
                    title: $scope.questionTitle,
                    body: $scope.questionBody
                })
                .success(function(question){
                    $scope.questions.unshift(question)
                    $scope.questionTitle = null
                    $scope.questionBody = null
                })
        }
    }

    QuestionsSvc.fetch()
        .success(function(questions){
            $scope.questions = questions
        })
})