module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
      jshint: {
        options: {
            jshintrc: '.jshintrc'
        },
        all: ['jquery.datatiles.js']
      },
      uglify: {
        options: {
          compress: true,
          mangle: true,
          preserveComments: 'some',
          report: 'gzip'
        },
        build: {
          src: 'jquery.datatiles.js',
          dest: 'jquery.datatiles.min.js'
        }
      },
      csslint: {
        all: ['jquery.datatiles.css']
      },
      cssmin: {
        target: {
          src: 'jquery.datatiles.css',
          dest: 'jquery.datatiles.min.css'
        }
      }
  });

  // Load the plugin that provides the 'uglify' task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify','csslint','cssmin']);

};
