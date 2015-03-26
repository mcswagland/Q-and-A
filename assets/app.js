angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope","$location",function(t,e){t.$on("login",function(n,o){t.currentUser=o,e.path("/")}),t.$on("ask",function(){e.path("/")})}]),angular.module("app").controller("AskCtrl",["$scope","QuestionsSvc",function(t,e){t.addQuestion=function(){t.questionTitle&&t.questionBody&&e.create({username:"dickeyxxx",title:t.questionTitle,body:t.questionBody}).success(function(){t.$emit("ask"),t.questionTitle=null,t.questionBody=null})}}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(t,e){t.login=function(n,o){t.errorMsg="",e.login(n,o).then(function(e){t.$emit("login",e)},function(){t.errorMsg="Incorrect username/password."})}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,e){t.addPost=function(){t.postBody&&e.create({username:"dickeyxxx",body:t.postBody}).success(function(e){t.posts.unshift(e),t.postBody=null})},e.fetch().success(function(e){t.posts=e})}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(e){return t.post("/api/posts",e)}}]),angular.module("app").controller("QuestionsCtrl",["$scope","QuestionsSvc",function(t,e){t.addQuestion=function(){t.questionTitle&&t.questionBody&&e.create({username:"dickeyxxx",title:t.questionTitle,body:t.questionBody}).success(function(e){t.questions.unshift(e),t.questionTitle=null,t.questionBody=null})},e.fetch().success(function(e){t.questions=e})}]),angular.module("app").service("QuestionsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/questions")},this.create=function(e){return t.post("/api/questions",e)}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc",function(t,e){t.register=function(n,o){e.register(n,o).then(function(e){t.$emit("login",e)})}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/register",{controller:"RegisterCtrl",templateUrl:"/templates/register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"/templates/login.html"}).when("/ask",{controller:"AskCtrl",templateUrl:"/templates/ask.html"}).when("/",{controller:"QuestionsCtrl",templateUrl:"/templates/questions.html"})}]),angular.module("app").service("UserSvc",["$http",function(t){var e=this;e.getUser=function(){return t.get("/api/users").then(function(t){return t.data})},e.login=function(n,o){return t.post("/api/sessions",{username:n,password:o}).then(function(n){return e.token=n.data.token,t.defaults.headers.common["X-Auth"]=n.data,e.getUser()})},e.register=function(n,o){return t.post("/api/users",{username:n,password:o}).then(function(){return e.login(n,o)})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJhc2suY3RybC5qcyIsImxvZ2luLmN0cmwuanMiLCJwb3N0cy5jdHJsLmpzIiwicG9zdHMuc3ZjLmpzIiwicXVlc3Rpb25zLmN0cmwuanMiLCJxdWVzdGlvbnMuc3ZjLmpzIiwicmVnaXN0ZXIuY3RybC5qcyIsInJvdXRlcy5qcyIsInVzZXIuc3ZjLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJGxvY2F0aW9uIiwiJG9uIiwiXyIsInVzZXIiLCJjdXJyZW50VXNlciIsInBhdGgiLCJRdWVzdGlvbnNTdmMiLCJhZGRRdWVzdGlvbiIsInF1ZXN0aW9uVGl0bGUiLCJxdWVzdGlvbkJvZHkiLCJjcmVhdGUiLCJ1c2VybmFtZSIsInRpdGxlIiwiYm9keSIsInN1Y2Nlc3MiLCIkZW1pdCIsIlVzZXJTdmMiLCJsb2dpbiIsInBhc3N3b3JkIiwiZXJyb3JNc2ciLCJ0aGVuIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJwb3N0IiwicG9zdHMiLCJ1bnNoaWZ0IiwiZmV0Y2giLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0IiwicXVlc3Rpb24iLCJxdWVzdGlvbnMiLCJyZWdpc3RlciIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwic3ZjIiwiZ2V0VXNlciIsInJlc3BvbnNlIiwiZGF0YSIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBQUMsT0FBQSxPQUNFLFlDREZELFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxtQkFBNEIsU0FBQSxZQUFBLFNBQUFDLEVBQUFDLEdBQzFCRCxFQUFBRSxJQUFBLFFBQUEsU0FBQUMsRUFBQUMsR0FDRUosRUFBQUssWUFBQUQsRUFHRUgsRUFBQUssS0FBQSxPQUVGTixFQUFBRSxJQUFBLE1BQUEsV0FD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S0FBQSxpQkFDRWIsU0FBQUEsRUFBQU8sU0FBQUEsSUFDRkUsS0FBQSxTQUFBcUIsR0FHRSxNQUZBRixHQUFBSSxNQUFBRixFQUFBQyxLQUFBQyxNQUNFZCxFQUFBZSxTQUFBQyxRQUFBQyxPQUFBLFVBQUFMLEVBQUFDLEtBQ0ZILEVBQUFDLGFBR0pELEVBQUFMLFNBQUEsU0FBQXZCLEVBQUFPLEdBQ0UsTUFBQVcsR0FBQUwsS0FBQSxjQUNFYixTQUFBQSxFQUFBTyxTQUFBQSxJQUNGRSxLQUFBLFdBQ0UsTUFBQW1CLEdBQUF0QixNQUFBTixFQUFBTyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xuICAnbmdSb3V0ZSdcbl0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdBcHBsaWNhdGlvbkN0cmwnLCBbJyRzY29wZScsICckbG9jYXRpb24nLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24pIHtcbiAgJHNjb3BlLiRvbignbG9naW4nLCBmdW5jdGlvbiAoXywgdXNlcikge1xuICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXJcblxuICAgICAgLy8gUmVkaXJlY3QgdG8gcG9zdHNcbiAgICAgICRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gIH0pXG4gICAgJHNjb3BlLiRvbignYXNrJywgZnVuY3Rpb24oXywgdXNlcil7XG4gICAgICAgICRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gICAgfSlcbn1dKVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAvKi5jb250cm9sbGVyKCdBc2tDdHJsJywgZnVuY3Rpb24gKCRzY29wZSl7XHJcbiAgICAgICAgICAgICRzY29wZS5hZGRRdWVzdGlvbiA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSB7IHRpdGxlOiAkc2NvcGUudGl0bGUsIGJvZHk6ICRzY29wZS5ib2R5IH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3F1ZXN0aW9ucycsIHF1ZXN0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9KSovXHJcblxyXG4gICAgLmNvbnRyb2xsZXIoJ0Fza0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIFF1ZXN0aW9uc1N2Yyl7XHJcbiAgICAgICAgJHNjb3BlLmFkZFF1ZXN0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmKCRzY29wZS5xdWVzdGlvblRpdGxlICYmICRzY29wZS5xdWVzdGlvbkJvZHkpe1xyXG4gICAgICAgICAgICAgICAgUXVlc3Rpb25zU3ZjLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6ICdkaWNrZXl4eHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAkc2NvcGUucXVlc3Rpb25UaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiAkc2NvcGUucXVlc3Rpb25Cb2R5XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocXVlc3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdCgnYXNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnF1ZXN0aW9uVGl0bGUgPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnF1ZXN0aW9uQm9keSA9IG51bGxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcbiAgJHNjb3BlLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuXG4gICAgICAkc2NvcGUuZXJyb3JNc2cgPSAnJztcblxuICAgIFVzZXJTdmMubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgIC50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgdXNlcilcbiAgICB9LFxuICAgICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgJHNjb3BlLmVycm9yTXNnID0gJ0luY29ycmVjdCB1c2VybmFtZS9wYXNzd29yZC4nO1xuICAgICAgICB9KVxuXG4gIH1cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBQb3N0c1N2Yykge1xuICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XG4gICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xuICAgICAgICB1c2VybmFtZTogJ2RpY2tleXh4eCcsXG4gICAgICAgIGJvZHk6ICAgICAkc2NvcGUucG9zdEJvZHlcbiAgICAgIH0pXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocG9zdCkge1xuICAgICAgICAkc2NvcGUucG9zdHMudW5zaGlmdChwb3N0KVxuICAgICAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIFBvc3RzU3ZjLmZldGNoKClcbiAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3RzKSB7XG4gICAgJHNjb3BlLnBvc3RzID0gcG9zdHNcbiAgfSlcbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuICB0aGlzLmZldGNoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKVxuICB9XG4gIHRoaXMuY3JlYXRlID0gZnVuY3Rpb24gKHBvc3QpIHtcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpXG4gIH1cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1F1ZXN0aW9uc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIFF1ZXN0aW9uc1N2Yyl7XHJcbiAgICAkc2NvcGUuYWRkUXVlc3Rpb24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZigkc2NvcGUucXVlc3Rpb25UaXRsZSAmJiAkc2NvcGUucXVlc3Rpb25Cb2R5KXtcclxuICAgICAgICAgICAgICAgIFF1ZXN0aW9uc1N2Yy5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAnZGlja2V5eHh4JyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJHNjb3BlLnF1ZXN0aW9uVGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogJHNjb3BlLnF1ZXN0aW9uQm9keVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHF1ZXN0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucXVlc3Rpb25zLnVuc2hpZnQocXVlc3Rpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnF1ZXN0aW9uVGl0bGUgPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnF1ZXN0aW9uQm9keSA9IG51bGxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFF1ZXN0aW9uc1N2Yy5mZXRjaCgpXHJcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocXVlc3Rpb25zKXtcclxuICAgICAgICAgICAgJHNjb3BlLnF1ZXN0aW9ucyA9IHF1ZXN0aW9uc1xyXG4gICAgICAgIH0pXHJcbn0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAuc2VydmljZSgnUXVlc3Rpb25zU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9xdWVzdGlvbnMnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChxdWVzdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9xdWVzdGlvbnMnLCBxdWVzdGlvbilcclxuICAgICAgICB9XHJcbiAgICB9KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1JlZ2lzdGVyQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcbiAgJHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIFVzZXJTdmMucmVnaXN0ZXIodXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgIC50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgdXNlcilcbiAgICB9KVxuICB9XG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAkcm91dGVQcm92aWRlclxuICAvLy53aGVuKCcvJywgICAgICAgICB7IGNvbnRyb2xsZXI6ICdQb3N0c0N0cmwnLCB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvcG9zdHMuaHRtbCcgfSlcbiAgLndoZW4oJy9yZWdpc3RlcicsIHsgY29udHJvbGxlcjogJ1JlZ2lzdGVyQ3RybCcsIHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9yZWdpc3Rlci5odG1sJyB9KVxuICAud2hlbignL2xvZ2luJywgICAgeyBjb250cm9sbGVyOiAnTG9naW5DdHJsJywgdGVtcGxhdGVVcmw6ICcvdGVtcGxhdGVzL2xvZ2luLmh0bWwnIH0pXG4gIC53aGVuKCcvYXNrJywgICAgICB7IGNvbnRyb2xsZXI6ICdBc2tDdHJsJywgdGVtcGxhdGVVcmw6ICcvdGVtcGxhdGVzL2Fzay5odG1sJ30pXG4gIC53aGVuKCcvJywgICAgICAgICB7IGNvbnRyb2xsZXI6ICdRdWVzdGlvbnNDdHJsJywgdGVtcGxhdGVVcmw6Jy90ZW1wbGF0ZXMvcXVlc3Rpb25zLmh0bWwnIH0pXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uc2VydmljZSgnVXNlclN2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuICB2YXIgc3ZjID0gdGhpc1xuICBzdmMuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3VzZXJzJylcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gICAgfSlcbiAgfVxuICBzdmMubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvc2Vzc2lvbnMnLCB7XG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBzdmMudG9rZW4gPSAgcmVzcG9uc2UuZGF0YS50b2tlbjtcbiAgICAgICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQXV0aCddID0gcmVzcG9uc2UuZGF0YVxuICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKClcbiAgICB9KVxuICB9XG4gIHN2Yy5yZWdpc3RlciA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS91c2VycycsIHtcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgICB9KVxuICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9