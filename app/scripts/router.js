module.exports = function initialiseRouter($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home', require('./routes/index'));
  // $locationProvider.html5Mode(true);
};
