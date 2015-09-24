angular.module('starter.controllers', [])

    .controller('TeethCtrl', ['$scope', 'Teeth', function ($scope, Teeth) {
        $scope.modelName = 'teeth';
        $scope[$scope.modelName] = Teeth.all();
        $scope.toothIds = Teeth.ids('permanent', 'fdi');
        $scope.toothDescriptions = Teeth.toothDescriptions('permanent');
        $scope.maxIdLength = Teeth.maxIdLength('permanent', 'fdi');
    }])
    .controller('ContactsCtrl', ['$scope', 'Contacts', function ($scope, Contacts) {
        $scope.modelName = 'contacts';
        $scope[$scope.modelName] = Contacts.all();
    }])
    .controller('ContactsCompleteCtrl', ['$scope', 'Contacts', function ($scope, Contacts) {
        $scope.modelName = 'contacts2';
        $scope[$scope.modelName] = Contacts.all();
    }])
;
