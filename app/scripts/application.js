(function() {

  var app = angular.module('app', ['ui.router']);

  app.controller('indexController', ['$http', '$scope', require('./controllers/indexController')]);
  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', require('./routes')]);

  return app;
})();
