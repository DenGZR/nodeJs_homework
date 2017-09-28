import config from './config/config.json';
import DirWatcher from './modules/DirWatcher';
import Importer from './modules/Importer';
import eventBus from './modules/EventBus';

console.log('application name -->', config.name);

const myWatcher = new DirWatcher(eventBus);
const myImporter = new Importer(eventBus, 'data-json');

myWatcher.watch('data', 500);





