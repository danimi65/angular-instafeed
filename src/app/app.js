'use strict';
import angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import { InstaState, InstaCtrl, InstaServiceName, InstaService } from './instafeed';
import { GridState, GridCtrl, GridServiceName, GridService} from './grid';

console.log('insta', InstaState);

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    // controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

// class AppCtrl {
//   constructor() {
//     this.url = 'https://github.com/preboot/angular-webpack';
//   }
// }

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
.config(($stateProvider) =>{
  $stateProvider
    .state(InstaState.name, InstaState)
    .state(GridState.name, GridState);
})
  .run(($state) =>{
    $state.go(InstaState.name);
  })
  .directive('app', app)
  .service(InstaServiceName, InstaService)
  .service(GridServiceName, GridService)
  .controller(GridState.controller, GridCtrl)
  .controller(InstaState.controller, InstaCtrl);

export default MODULE_NAME;