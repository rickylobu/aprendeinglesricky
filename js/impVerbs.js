(function(){

    var app = angular.module('ejemplosApp',[ ]);
    
    
    
    app.controller('mainCtrl', ['$scope','$http', function(s,$http){
        s.impVerbs = {};
        $http.get('json/imperativeVerbs.json').then(function (source) {
            //código cuando es correcta la petición
            s.impVerbs = source.data.imperativeVerbs;
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
    