import minimist from 'minimist';
import fs from 'fs';
import path from 'path';
import through2 from 'through2';
import split2 from 'split2';

class Streams {
    constructor() {

        const args = minimist(process.argv.slice(2), {
            boolean: true,
            alias: {
              'h': 'help',
              'a': 'action',
              'f': 'file'
            }
        });

        const { help, action, file } = args;
        console.dir(args);

        if(help) {
          return  this.printHelpMessage();
        }

        if(this[action]) {
            this[action](file);
        }

    }

    // task 4
    inputFileToStdout(filePath) {
        if(!filePath) {
            return console.log('Wrong input! File name = ', filePath );
        }
        const inputFilePath =  this.getFilePath(filePath);

        fs.createReadStream(inputFilePath)
            .pipe(process.stdout);
    }

    // task 5
    stdinToUpperCase() {
        const toUpperCase = through2((data, enc, cb) => {
            cb(null, new Buffer(data.toString().toUpperCase()));
        });

        process
            .stdin
            .pipe(toUpperCase)
            .pipe(process.stdout);
    }

    // task 6
    transform(filePath) {
        if(!filePath) {
            return console.log('Wrong input! File name = ', filePath );
        }

        const inputFilePath =  this.getFilePath(filePath);
        const stream = fs.createReadStream(inputFilePath);
        const parseCSV = () => {
            let templateKeys = [];
            let parseHeadline = true;
            return through2.obj((data, enc, cb) => {
                if (parseHeadline) {
                    templateKeys = data.toString().split(',');
                    parseHeadline = false;
                    return cb(null, null);
                }

                const entries = data.toString().split(',');
                const obj = {};

                templateKeys.forEach((el, index) => {
                    obj[el] = entries[index];
                });

                return cb(null, obj);
            });
        };
        const pickFirst10 = () => {
            let cnt = 0;
            return through2.obj((data, enc, cb) => {
                if (cnt++ < 10) {
                    return cb(null, data);
                }
                return cb(null, null);
            });
        };
        const toJSON = () => {
            let objs = [];
            return through2.obj(function(data, enc, cb) {
                objs.push(data);
                cb(null, null);
            }, function(cb) {
                this.push(JSON.stringify(objs));
                cb();
            });
        };

        stream
            .pipe(split2())
            .pipe(parseCSV())
            .pipe(pickFirst10())
            .pipe(toJSON())
            .pipe(process.stdout);
    }

    // task 7
    transformToFile(filePath) {
      if(!filePath) {
          return console.log('Wrong input! File name = ', filePath );
      }
      console.log('call transformToFile');
    }

    // task 8
    cssBundlerfunction(filePath) {
      if(!filePath) {
          return console.log('Wrong input! File name = ', filePath );
      }
      console.log('call cssBundlerfunction');
    }

    getFilePath(fileName) {
      return path.join(path.dirname(process.mainModule.filename), fileName);
    }

    httpClient() { /* ... */ }

    httpServer() { /* ... */ }

    printHelpMessage() {
      console.log('Some print Help Message!!!');
    }
}

export default Streams;
