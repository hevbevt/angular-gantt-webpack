routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('aps', {
      url: '/',
      template: require('./partials/aps.html'),
      controller: 'ApsController',
      controllerAs: 'vm'
    });
}