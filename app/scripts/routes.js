module.exports = function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to / (root route)
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home', require('./routes/index'))
  // $locationProvider.html5Mode(true);
};
