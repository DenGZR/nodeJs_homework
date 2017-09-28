import fs from 'fs';
import path from 'path';

class Importer {
    constructor(emitter, outputDir) {

        console.log('Importer');

        this.emitter = emitter;
        this.outputDir =  path.join(path.dirname(process.mainModule.filename), outputDir);
        this.addListener();

    }

    csvJSON(csv) {
        const lines=csv.split("\n");
        let result = [];
        const headers=lines[0].split(",");

        for(let i=1; i<lines.length; i++){
            let obj = {};
            let currentline=lines[i].split(",");

            for(let j=0; j<headers.length; j++){
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        return JSON.stringify(result); //JSON
    }

    addListener() {
        this.emitter.on('dirwatcher:changed', ({ inputDir, filename }) => {
            this.inputDir = inputDir;
            this.inputFilename = filename;
            this.filenameJson = this.inputFilename.split('.')[0] + '.json';
            this.importSync(path.join(inputDir, filename));
        })
    }

    importSync(inputPath) {
        const contentCsv = fs.readFileSync(inputPath, 'utf8');
        const contentJson = this.csvJSON(contentCsv);
        fs.writeFileSync(path.join(this.outputDir, this.filenameJson), contentJson);

        console.log('import well done');
        return contentJson;
    }

    import(inputPath) {
        const filenameJson = this.inputFilename.split('.')[0] + '.json';
        const promise = new Promise((resolve, reject) => {
            fs.readFile(inputPath, 'utf8', (err, data) => {
                if (err) return reject(err);
                resolve(data);
            })
        })
        .then((data) => this.csvJSON(data))
        .then((data) => {
            fs.writeFile(path.join(this.outputDir, this.filenameJson), data, (err) => {
                if (err) {
                    throw new Error('Error write file', err);
                }
                return data;
            });
        })

        console.log('import well done');
        return promise;
    }

}

export default Importer;
