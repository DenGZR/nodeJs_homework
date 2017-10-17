import config from './config/config.json';
import Streams from './utils/streams';

console.log('application name -->', config.name);

const stream = new Streams(process.argv);
