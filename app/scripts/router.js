module.exports = function initialiseRouter($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise('/exchange');
  $stateProvider.state('exchange', require('./routes/index'));
  // $locationProvider.html5Mode(true);
};
