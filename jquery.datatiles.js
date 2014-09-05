/*! Copyright (c) 2014 Joshua Miller (http://www.jo5h.com)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 0.0.1
 *
 * Requires: jQuery 1.8+
 *
 */

(function ( $ ) {

    $.fn.datatiles = function( options ) {

      // Define possible tile layouts
      var layouts = [
        [1,2,2,3,3,3,4,4,4,4],
        [3,3,3,1,2,2,4,4,4,4],
        [4,4,4,4,3,3,3,1,2,2],
        [4,4,4,4,1,2,2,3,3,3],
        [5,4,4,4,4,3,3,3,6,6],
        [3,3,3,5,4,4,4,4,6,6],
        [6,6,3,3,3,5,4,4,4,4],
        [6,6,5,4,4,4,4,3,3,3]
      ];

      // TODO: Process each instance of the tile container

      var rand = Math.floor(Math.random() * (layouts.length));
      var container = this;
      var id = container.attr('id');

      // Define default params
      var settings = $.extend({
        tiles: 10, // Sets the maximum number of tiles to display
        layout: rand
      }, options );

      // Get options from data-params
      settings.layout = (this.attr('data-layout'))?this.attr('data-layout'):settings.layout;

      // Ensure the layout chosen is valid
      settings.layout = (settings.layout<layouts.length&&settings.layout>=0)?settings.layout:rand;

      // Cycle through the tiles
      $.each(new Array(settings.tiles), function(n){

        var tileClass = 'datatile-' + layouts[settings.layout][n];

        var tile = $('<div>'+n+'</div>');
        tile.attr('id',''+id+'_'+n);
        tile.attr('data-rank',''+n+'');
        tile.attr('class','datatile tile-'+n+' '+tileClass);
        tile.appendTo(container);

      });

      // Render the tiles
      return container;

    };

}( jQuery ));
