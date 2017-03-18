import { GridServiceName } from './service';
export const GridCtrl = ['$scope', GridServiceName, class GridCtrl{
  constructor($scope, GridService){
    this.title = 'Grid';
    GridService.getPosts()
    .then(posts =>{
       $scope.posts = posts.data.data;
    });
  }
}];