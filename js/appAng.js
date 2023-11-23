(function(){

    var app = angular.module('ejemplosApp',[ ]);
    
    
    
    app.controller('mainCtrl', ['$scope','$http', function(s,$http){
        s.anglisismos = {};
        $http.get('json/anglisismos.json').then(function (data) {
            //código cuando es correcta la petición
            s.anglisismos = data.data.anglisismos;
        })
      
    
    
      
    
        s.reverse = false;
        s.columnaAOrdenar = 'anio';
    
        s.cambiarOrden = function (column) {
            if (s.columnaAOrdenar === column) {
                s.reverse = !s.reverse;
            } else {
                s.columnaAOrdenar = column;
                s.reverse = false;
            }
        };
    
        
    
    
    
    }]);
    
    
    
    
    
    })();
    