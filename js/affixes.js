(function(){

    var app = angular.module('ejemplosApp',[ ]);
    
    
    
    app.controller('mainCtrl', ['$scope','$http', function(s,$http){
        s.affixes = {};
        $http.get('json/affixes.json').then(function (data) {
            //código cuando es correcta la petición
            s.affixes = data.data.affixes;
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
    