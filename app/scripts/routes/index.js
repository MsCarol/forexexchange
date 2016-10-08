module.exports = {
  url: '/home',
  views: {
    '': {
      templateUrl: 'views/index.html',
    },
    'exchangeForm@home': {
      templateUrl: 'views/partials/inputs.html',
      controller: 'indexController',
    },
  },
};
