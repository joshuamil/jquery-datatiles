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
      var layouts = {
        "10":[
          [1,2,2,3,3,3,4,4,4,4],
          [3,3,3,1,2,2,4,4,4,4],
          [4,4,4,4,3,3,3,1,2,2],
          [4,4,4,4,1,2,2,3,3,3],
          [5,4,4,4,4,3,3,3,6,6],
          [3,3,3,5,4,4,4,4,6,6],
          [6,6,3,3,3,5,4,4,4,4],
          [6,6,5,4,4,4,4,3,3,3]
        ],
        "8":[
          [1,2,2,3,3,3,6,6],
          [3,3,3,1,2,2,6,6],
          [3,3,3,6,6,1,2,2],
          [6,6,1,2,2,3,3,3]
        ],
        "6":[
          [1,2,2,3,3,3],
          [3,3,3,1,2,2],
          [7,6,6,8,8,8],
          [7,8,8,8,6,6]
        ],
        "4":[
          [7,8,8,8],
          [9,10,10,10],
          [1,3,6,6],
          [3,1,6,6],
          [8,8,8,7]
        ],
        "2":[
          [1,1],
          [2,2],
          [3,4],
          [4,3],
          [5,6],
          [6,5]
        ],
        "1":[
          [1]
        ]
      };

      // TODO: Process each instance of the tile container

      var container = this;
      var id = container.attr('id');

      // Define default params
      var settings = $.extend({
        tiles: 10, // Sets the maximum number of tiles to display
        layout: "rand"
      }, options );

      // Get options from data-params
      settings.tiles = (parseInt(this.attr('data-tiles')))?parseInt(this.attr('data-tiles')):settings.tiles;

      // Add Tile Count Class to Container
      container.addClass('tile-ct-' + settings.tiles);

      // Define LayoutTemplates Object
      var layoutTemplates = layouts[settings.tiles];
      var rand = Math.floor(Math.random() * (layoutTemplates.length));

      // Get options from data-params
      if(settings.layout === "rand"){
        settings.layout = rand;
      }else{
        settings.layout = (parseInt(this.attr('data-layout')))?parseInt(this.attr('data-layout')):settings.layout;
      }

      // Ensure the layout chosen is valid
      //settings.layout = (settings.layout<layouts.length&&settings.layout>=0)?settings.layout:rand;

      // Cycle through the tiles
      $.each(new Array(settings.tiles), function(n){

        var tileClass = 'datatile-' + layoutTemplates[settings.layout][n];

        var tile = $('<div>'+n+'</div>');
        tile.attr('id',''+id+'_'+n);
        tile.attr('data-rank',''+n+'');
        tile.addClass('datatile');
        tile.addClass(tileClass);
        tile.addClass('tile-no-' + n);
        tile.appendTo(container);

      });

      // Render the tiles
      return container;

    };

}( jQuery ));
