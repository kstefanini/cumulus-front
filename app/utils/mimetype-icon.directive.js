(function() {
  'use strict';

  angular.module('utils.mimetype', [])

  .directive('mimetypeIcon', ['config', function(config, $timeout, $parse) {

    var fileIcon = function fileIcon(mimetype) {
      var mediatype = mimetype.split('/');
      switch (mediatype[0]) {
        case 'image':
          return 'glyphicon glyphicon-picture';
        case 'audio':
          return 'glyphicon glyphicon-headphones';
        case 'video':
          return ' glyphicon glyphicon-facetime-video';
        case 'text':
          return 'glyphicon glyphicon-list-alt';
        default:
          return 'glyphicon glyphicon-file';
      }
    };

    var path = config.ressourcesPath;

    return {
      restrict: 'A',
      controller: MimetypeIconController,
      controllerAs: 'mimetypeIconCtrl',
      templateUrl: path + 'utils/mimetype-icon.html'
    };
  }]);
})();
