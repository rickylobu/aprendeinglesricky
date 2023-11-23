(function () {
    var app = angular.module('universidadApp', []);

    app.controller('listadoCtrl', ['$scope','$http', function (s,$http) {
        s.cognados = {};
        $http.get('json/cognados.json').then(function (source) {
            //código cuando es correcta la petición
            s.cognados = source.data.cognados;
        })
        
        s.reverse = false;
        s.columnaAOrdenar = 'PalabraIngles';
    
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
