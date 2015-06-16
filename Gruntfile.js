/**
 * Created by jose.soria on 06/16/2015.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: '**/*.sass',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');

};