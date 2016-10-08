module.exports = function indexController($http, $scope) {
  var exchangeAPIURL = 'https://api.fixer.io/latest?base=USD&symbols=';

  $scope.currencies = {
    a: 'USD',
    b: 'GBP',
  };

  $scope.checkForexRate = function() {
    var currencyFrom = $scope.currencies.a; // undefined
    var currencyTo = $scope.currencies.b;

    if (currencyFrom && currencyTo) {
      var forexExchangeCheckURL = exchangeAPIURL + [currencyFrom, currencyTo].join(',');

      $http.get(forexExchangeCheckURL).success(function(response) {
        if (Object.keys(response.rates).length >= 1) {
          console.log(response.rates);
          $scope.exchangeRate = response.rates[currencyTo];
        } else {
          $scope.exchangeRate = 'UNAVAILABLE';
        }
      }).error(function(err) {
        alert('Could not finish the request!');
        console.log(err);
      });
    }
  };
};
