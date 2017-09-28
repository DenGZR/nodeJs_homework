import fs from 'fs';
import path from 'path';
import _ from 'lodash';

class DirWatcher {
    constructor(emitter) {
        console.log('DirWatcher');

        this.emitter = emitter;
    }

    watch(dirName, wait) {
        const inputDir = path.join(path.dirname(process.mainModule.filename), dirName);

        const watchHandler = (event, filename) => {
            const delayFn = () => this.emitter.emit('dirwatcher:changed', { inputDir, filename });
            _.delay(delayFn, wait);
        }

        fs.watch(inputDir, watchHandler);
    }
}

export default DirWatcher;
