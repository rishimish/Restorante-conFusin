'use strict';

module.exports = function(grunt){

    require('time-grunt')(grunt);

    require('jit-grunt')(grunt);

    grunt.initConfig({
        sass:{
            dist:{
                files:{
                    'CSS/styles.css': 'CSS/styles.scss'
                }
            }
        }

    });

    grunt.registerTask('css',['sass']);
};