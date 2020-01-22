angular.module('app', ['pdfjsViewer']);

angular.module('app').controller('AppCtrl', function ($scope, $http, $timeout) {
    var url = 'example.pdf';//'http://localhost:8080/https://manning-content.s3.amazonaws.com/download/5/54dea42-e46e-44c7-a930-d4c86a2c2ca3/CORS_ch03.pdfhttps://manning-content.s3.amazonaws.com/download/5/54dea42-e46e-44c7-a930-d4c86a2c2ca3/CORS_ch03.pdf';

    $scope.pdf = {
        src: url,  // get pdf source from a URL that points to a pdf
        data: null // get pdf source from raw data of a pdf
    };

    getPdfAsArrayBuffer(url).then(function (response) {
        $scope.pdf.data = new Uint8Array(response.data);
    }, function (err) {
        console.log('failed to get pdf as binary:', err);
    });

    function getPdfAsArrayBuffer (url) {
        return $http.get(url, {
            responseType: 'arraybuffer',
            headers: {
                'foo': 'bar'
            }
        });
    }
});


angular.module('app').controller('steamImageViewer', ['$scope', 'Lightbox', function($scope, Lightbox) {
    $scope.images = [
    {
      'url': 'https://societyserver.org/home/akhilhector/playground%20-%20hector/icon1.png',
      'title': 'icon1.png'
    },
    {
      'url': 'https://societyserver.org/home/akhilhector/playground%20-%20hector/icon3.jpg',
      'title': 'icon3.jpg'
    },
    {
      'url': 'https://societyserver.org/home/akhilhector/playground%20-%20hector/icon4.png',
      'title': 'icon4.png'
    },
    {
      'url': 'https://societyserver.org/home/akhilhector/playground%20-%20hector/icon4.jpg',
      'title': 'icon4.jpg'
    }
    ];
    $scope.imageViewer = function (index) {
      Lightbox.openModal($scope.images, index);
    };
  }]);