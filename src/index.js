import axios from 'axios';
import { kebabCase } from 'lodash';
import greeter from './greeter.ts';
import sumup from './sumup.ts';
import addTax from './checkout';

import './styles.scss';

const p = document.createElement('p');

console.log(kebabCase('hallo Bruno du bist der beste7'));
console.log(addTax(10, 0.15));
console.log(greeter('Bruno Staub'));
console.log(sumup([1, 3, 5, 7]));

p.innerHTML = 'Start..';
document.body.prepend(p);

const app = document.getElementById('app');
app.innerHTML = 'App Output';

const person = {
  vorname: 'bruno',
  nachname: 'staub',
};
console.log(person.vorname);

axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
  console.log('daten: ', res.data);
  console.log('status: ', res.status);
  console.log('statusText: ', res.statusText);
  console.log('headers: ', res.headers);
  console.log('config: ', res.config);
});
