module.exports = {
  url: '/exchange',
  views: {
    '': {
      templateUrl: 'views/index.html',
    },
    'exchangeForm@exchange': {
      templateUrl: 'views/partials/inputs.html',
      controller: 'indexController',
    },
  },
};
