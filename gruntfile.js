module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: ["typings/ngcordova/ngcordova.d.ts"], // the watched files
                tasks: ["tslint:all", "ts:build"], // the task to run
                options: {
                    spawn: false // makes the watch task faster
                }
            }
        },

        tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            all: {
                src: ["typings/ngcordova/ngcordova.d.ts"]
            }
        },

        ts: {
            build: {
                src: ["typings/ngcordova/ngcordova.d.ts"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask('default', ['tslint:all', 'ts:build']);
};