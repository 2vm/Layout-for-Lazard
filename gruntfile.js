module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, 
          {
            jitGrunt: true
          });
  grunt.initConfig({
    sass: {
              dist: {
                      options: {
                                sourceMap: false
                              },

                      files: [{
                                expand: true,
                                cwd: 'scss',
                                src: ['*.scss'],
                                dest: 'css',
                                ext: '.css'
                      }]
                    }
    },
    watch:{
            dist:{
                    files:['scss/*.scss', 'js/main.js'],
                    tasks:['default']
                  }

          }
  });
  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['sass','watch']);

};
