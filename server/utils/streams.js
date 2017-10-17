import minimist from 'minimist';

class Streams {
  constructor() {
    console.log('Product module');
    const params = minimist(process.argv);
    console.log(params);
  }

  checkParams(params) {

  }

  inputOutput(filePath) { /* ... */ }

  transformFile(filePath) { /* ... */ }

  transform() { /* ... */ }

  httpClient() { /* ... */ }

  httpServer() { /* ... */ }

  printHelpMessage() { /* ... */ }
}

export default Streams;
