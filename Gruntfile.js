/* jshint strict: false */
/*global module: true, require: true */
module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          //compress: true,
          //yuicompress: true,
          //optimization: 2
        },
        files: {
          'dist/main.css': 'styles/shoespooner.less' // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['styles/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less']);
  grunt.registerTask('dev', ['less', 'watch']);
};