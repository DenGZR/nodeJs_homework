import config from './config/config.json';
import { User, Product } from './models';

console.log('application name -->', config.name);

const firstUser = new User();
const firstProduct = new Product();
