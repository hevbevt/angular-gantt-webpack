import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import routing from './apsRoutes';
import ApsController from './controller/apsCtrl';
import './aps.scss';

export default angular.module('app.aps', [uiRouter])
  .config(routing)
  .controller('ApsController', ApsController)
  .name;