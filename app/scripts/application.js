(function selfInvokingFunction() {
  var app = angular.module('app', ['ui.router']);

  app.controller('indexController', ['$http', '$scope', require('./controllers/indexController')]);
  app.config(['$stateProvider', '$urlRouterProvider', require('./router')]);

  return app;
}());
