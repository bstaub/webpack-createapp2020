import { kebabCase } from 'lodash';
import { addTax } from './checkout';
import { greeter } from './greeter';
import { sumup } from './sumup';
import axios from 'axios';
import "./styles.scss";

console.log(kebabCase("hallo Bruno du bist der beste7"));
console.log(addTax(10,0.15));
console.log(greeter("Bruno Staub"));
console.log(sumup([1,3,5,7]));

var p = document.createElement('p');
p.innerHTML = 'Start..';
document.body.prepend(p);

var app = document.getElementById('app');

axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
  console.log('daten: ', res.data);
  console.log('status: ', res.status);
  console.log('statusText: ', res.statusText);
  console.log('headers: ', res.headers);
  console.log('config: ', res.config);
});
