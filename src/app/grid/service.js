export const GridServiceName = 'GridService';
export const GridService = [
'$http',
class GridService{
  constructor($http){
    this.$http = $http;
    this.endpoint = '/api/grid';
  }
  getPosts(){
    return this.$http.get(this.endpoint);
    }
  }
];