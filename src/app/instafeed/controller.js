import { InstaServiceName } from './service';
export const InstaCtrl = ['$scope', InstaServiceName, class InstaCtrl{
  constructor($scope, InstaService){
    this.title = 'Instafeed';
    InstaService.getPosts()
    .then(posts =>{
       $scope.posts = posts.data.data;
    });
  }
}];

